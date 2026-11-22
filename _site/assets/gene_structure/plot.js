/* ============================================================
   Gene structure — independent plot.js
   Exposes: window.GeneStructurePlot(config)

   config = {
     api:        string   — Cloudflare Worker base URL (required)
     card:       Element  — .gsv-card wrapper element (required)
     canvas:     Element  — <canvas> element (required)
     statusEl:   Element  — status text element (optional)
     txSelect:   Element  — <select> for transcripts (optional)
     cardGene:   Element  — gene name element (optional)
     cardLoc:    Element  — location text element (optional)
     infoAsm:    Element  — assembly span (optional)
     infoStr:    Element  — strand span (optional)
     infoTxn:    Element  — transcript count span (optional)
     infoExn:    Element  — exon count span (optional)
     tooltip:    Element  — .gsv-tooltip element (optional)
     onLoaded:   fn(data) — called after gene data is loaded (optional)
     offlineMessage: string — message shown when loading fails (optional)
     quietErrors: boolean — suppress console errors on loading failure (optional)
   }

   Public methods:
     .load(geneQuery, positionString)
     .highlight(positionString)
     .setTranscript(index)

   Position formats accepted:
     chr7:117559591   chr7 117559591   7:117559591   117559591
     NC_000007.14:117559591   g.117559591
   ============================================================ */

(function (root) {
  'use strict';

  /* ── layout constants ───────────────────────────────────────────────────
     PAD.top is tall enough for exon number labels above the track.
     BOT leaves room for the genomic coordinate labels + scale bar.
  ──────────────────────────────────────────────────────────────────────── */
  var INTRON_SCALE = 0.06;
  var EXON_H  = 28;          /* exon box height */
  var UTR_H   = 14;          /* UTR box height  */
  var PAD     = { l: 14, r: 14, top: 42, bot: 48 };
  /* exon numbers sit above the track; 42 px gives comfortable clearance */

  var FONT    = 'ui-sans-serif, system-ui, -apple-system, sans-serif';

  /* ── position parser ────────────────────────────────────────────────────
     Accepts:
       chr7:117559591  chr7 117559591  7:117559591  117559591
       NC_000007.14:117559591  g.117559591  117,559,591
  ──────────────────────────────────────────────────────────────────────── */
  function parsePos(raw) {
    if (!raw || !raw.trim()) return null;
    var s = raw.trim().replace(/,/g, '').replace(/^g\./i, '');

    /* chr-prefixed or NC_ accession */
    var m = s.match(/^(chr[\w.]+|NC_\d+\.\d+)[:\s]+(\d+)/i);
    /* bare chromosome number or letter */
    if (!m) m = s.match(/^(\d{1,2}|[XYMxy]+)[:\s]+(\d+)/);
    /* bare position only — chromosome unknown, highlight still drawn if in range */
    if (!m) m = s.match(/^(\d{6,9})$/);

    if (!m) return null;

    var chr, pos;
    if (m.length === 2) {
      /* bare position match */
      chr = '';
      pos = parseInt(m[1], 10);
    } else {
      var raw_chr = m[1];
      chr = /^chr/i.test(raw_chr)
        ? raw_chr.toLowerCase()
        : /^NC_/i.test(raw_chr)
          ? raw_chr.toLowerCase()          /* keep as-is; fallback match */
          : 'chr' + raw_chr.toLowerCase();
      pos = parseInt(m[2], 10);
    }
    return { chr: chr, pos: pos };
  }

  /* Accept one position or an array. Existing single-position callers are unchanged. */
  function parsePositions(raw) {
    var inputs = Array.isArray(raw) ? raw : [raw];
    var seen = new Set();
    return inputs.map(function (item) {
      return parsePos(String(item || ''));
    }).filter(function (item) {
      if (!item || !Number.isSafeInteger(item.pos) || item.pos < 1) return false;
      var key = item.chr + ':' + item.pos;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  function isEnsemblId(s) {
    return /^ENSG\d+/i.test(s.trim());
  }

  function hasFlag(t, names) {
    var haystack = [];

    if (t && Array.isArray(t.flags)) haystack = haystack.concat(t.flags);
    if (t && Array.isArray(t.tag)) haystack = haystack.concat(t.tag);
    if (t && Array.isArray(t.tags)) haystack = haystack.concat(t.tags);
    if (t && t.biotype) haystack.push(t.biotype);

    haystack = haystack.map(function (x) {
      return String(x || '').toLowerCase().replace(/[\s-]+/g, '_');
    });

    return names.some(function (name) {
      return haystack.indexOf(String(name || '').toLowerCase().replace(/[\s-]+/g, '_')) !== -1;
    });
  }

  function isManeSelect(t) {
    return Boolean(
      t && (
        t.is_mane_select ||
        t.mane_select ||
        hasFlag(t, ['MANE_Select', 'MANE Select', 'mane_select'])
      )
    );
  }

  function isManePlusClinical(t) {
    return Boolean(
      t && (
        t.is_mane_plus_clinical ||
        t.mane_plus_clinical ||
        t.mane_plus ||
        hasFlag(t, ['MANE_Plus_Clinical', 'MANE Plus Clinical', 'mane_plus_clinical', 'mane_plus'])
      )
    );
  }

  function isCanonical(t) {
    return Boolean(
      t && (
        t.is_canonical ||
        t.canonical ||
        t.is_canonical_transcript ||
        hasFlag(t, ['canonical'])
      )
    );
  }

  function isProteinCoding(t) {
    return Boolean(t && (t.biotype === 'protein_coding' || t.protein_coding || t.Translation));
  }

  function transcriptSupportRank(t) {
    var raw = t && (t.transcript_support_level || t.tsl || t.support_level);
    var n = parseInt(String(raw || '').replace(/[^0-9]/g, ''), 10);
    return Number.isFinite(n) ? n : 99;
  }

  function transcriptSpan(t) {
    if (!t) return 0;
    if (t.Translation && t.Translation.end && t.Translation.start) {
      return Math.abs(t.Translation.end - t.Translation.start) + 1;
    }
    if (t.end && t.start) return Math.abs(t.end - t.start) + 1;
    if (t.Exon && t.Exon.length) {
      var starts = t.Exon.map(function (e) { return e.start || 0; });
      var ends = t.Exon.map(function (e) { return e.end || 0; });
      return Math.max.apply(null, ends) - Math.min.apply(null, starts) + 1;
    }
    return 0;
  }

  function transcriptRank(t) {
    return [
      isManeSelect(t) ? 0 : 1,
      isManePlusClinical(t) ? 0 : 1,
      isCanonical(t) ? 0 : 1,
      isProteinCoding(t) ? 0 : 1,
      transcriptSupportRank(t),
      -(t && t.Exon ? t.Exon.length : 0),
      -transcriptSpan(t)
    ];
  }

  function compareTranscripts(a, b) {
    var ra = transcriptRank(a);
    var rb = transcriptRank(b);

    for (var i = 0; i < ra.length; i++) {
      if (ra[i] < rb[i]) return -1;
      if (ra[i] > rb[i]) return 1;
    }
    return String(a.display_name || a.id || '').localeCompare(String(b.display_name || b.id || ''));
  }

  function transcriptTags(t) {
    var tags = [];
    if (isManeSelect(t)) tags.push('★ MANE Select');
    if (isManePlusClinical(t)) tags.push('MANE Plus Clinical');
    if (isCanonical(t)) tags.push('canonical');
    if (isProteinCoding(t)) tags.push('protein-coding');
    return tags;
  }

  /* ── fetch ──────────────────────────────────────────────────────────────  */
  function fetchJSON(api, path) {
    return fetch(api + path, {
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
    }).then(function (response) {
      if (!response.ok) {
        var error = new Error('Ensembl proxy returned HTTP ' + response.status);
        error.httpStatus = response.status;
        throw error;
      }
      return response.json().then(function (data) {
        return { data: data, httpStatus: response.status };
      });
    });
  }

  /* ── colour tokens ──────────────────────────────────────────────────────
     Read from CSS custom properties on nearest .gsv-root ancestor.
     Hard-coded fallbacks mean the engine works without viewer.css.
  ──────────────────────────────────────────────────────────────────────── */
  function getColours(el) {
    var root = el.closest ? (el.closest('.gsv-root') || document.documentElement)
                           : document.documentElement;
    var cs = getComputedStyle(root);
    function v(name, fb) { var val = cs.getPropertyValue(name).trim(); return val || fb; }
    return {
      black: v('--gsv-black',  '#2f2f41'),
      muted: v('--gsv-steel',  '#5c5a5a'),
      cds:   v('--gsv-cds',    '#1e3a5f'),
      cdsD:  v('--gsv-cds-d',  '#0d2340'),
      utr:   v('--gsv-utr',    '#7b9cbf'),
      utrD:  v('--gsv-utr-d',  '#3a6491'),
      hl:    v('--gsv-hl',     '#e5261f'),
      hlBg:  v('--gsv-hl-bg',  'rgba(229,38,31,0.08)'),
      surf:  v('--gsv-surf',   '#ffffff'),
      soft:  v('--gsv-soft',   '#f3f2f2'),
    };
  }

  /* ── coordinate mapper ──────────────────────────────────────────────────
     Exons: 1 : 1 scale.  Introns: INTRON_SCALE fraction of real size.
  ──────────────────────────────────────────────────────────────────────── */
  function buildMapper(exons) {
    return function toRbp(gPos) {
      var rbp = 0;
      for (var i = 0; i < exons.length; i++) {
        var ex = exons[i];
        if (i > 0) {
          var prevEnd   = exons[i - 1].end;
          var intronLen = ex.start - prevEnd - 1;
          if (gPos < ex.start) {
            rbp += ((gPos - prevEnd) / (ex.start - prevEnd)) * intronLen * INTRON_SCALE;
            return rbp;
          }
          rbp += intronLen * INTRON_SCALE;
        }
        if (gPos <= ex.end) { rbp += (gPos - ex.start); return rbp; }
        rbp += (ex.end - ex.start + 1);
      }
      return rbp;
    };
  }

  /* The whole-gene view is an exon union, not an inferred transcript. */
  function combinedExonRegions(transcripts) {
    var intervals = [];
    transcripts.forEach(function (t) {
      t.Exon.forEach(function (exon) {
        if (Number.isSafeInteger(exon.start) && Number.isSafeInteger(exon.end)) {
          intervals.push({ start: exon.start, end: exon.end });
        }
      });
    });
    intervals.sort(function (a, b) { return a.start - b.start || a.end - b.end; });
    var merged = [];
    intervals.forEach(function (interval) {
      var previous = merged[merged.length - 1];
      if (previous && interval.start <= previous.end + 1) {
        previous.end = Math.max(previous.end, interval.end);
      } else {
        merged.push({ start: interval.start, end: interval.end });
      }
    });
    return merged;
  }

  /* ── shape helpers ──────────────────────────────────────────────────────  */
  function drawBox(ctx, x, y, w, h, r, fill, stroke) {
    if (w < 1) return;
    ctx.fillStyle   = fill;
    ctx.strokeStyle = stroke;
    ctx.lineWidth   = 0.5;
    rrect(ctx, x, y, w, h, r);
    ctx.fill();
    rrect(ctx, x, y, w, h, r);
    ctx.stroke();
  }

  function rrect(ctx, x, y, w, h, r) {
    if (w < 2 * r) r = w / 2;
    if (r < 0) r = 0;
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y,     x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x,     y + h, r);
    ctx.arcTo(x,     y + h, x,     y,     r);
    ctx.arcTo(x,     y,     x + w, y,     r);
    ctx.closePath();
  }

  /* ── constructor ────────────────────────────────────────────────────────  */
  function GeneStructurePlot(config) {
    if (!(this instanceof GeneStructurePlot)) return new GeneStructurePlot(config);
    this._api      = config.api;
    this._card     = config.card     || null;
    this._canvas   = config.canvas;
    this._statusEl = config.statusEl || null;
    this._txSelect = config.txSelect || null;
    this._cardGene = config.cardGene || null;
    this._cardLoc  = config.cardLoc  || null;
    this._infoAsm  = config.infoAsm  || null;
    this._infoStr  = config.infoStr  || null;
    this._infoTxn  = config.infoTxn  || null;
    this._infoExn  = config.infoExn  || null;
    this._tooltip  = config.tooltip  || null;
    this._onLoaded = config.onLoaded || null;
    this._offlineMessage = config.offlineMessage || '';
    this._quietErrors = Boolean(config.quietErrors);
    this._geneData = null;
    this._transcripts = [];
    this._currentTx   = null;
    this._wholeGeneView = false;
    this._wholeGeneExons = [];
    this._hlChr       = '';
    this._hlPos       = null;
    this._hlPositions = [];
    this._bindCanvas();
    var self = this;
    if (this._txSelect) {
      this._txSelect.addEventListener('change', function () {
        self.setTranscript(self._txSelect.value === 'whole-gene'
          ? 'whole-gene' : (parseInt(self._txSelect.value, 10) || 0));
      });
    }
  }

  /* ── public: load ───────────────────────────────────────────────────────  */
  GeneStructurePlot.prototype.load = function (geneQuery, positionString) {
    var self = this;
    var raw  = (geneQuery || '').trim();
    if (!raw) { self._status('Enter a gene symbol or Ensembl ID.', true); return; }

    var positions = parsePositions(positionString);
    self._hlPositions = positions;
    self._hlChr = positions.length ? positions[0].chr : '';
    self._hlPos = positions.length ? positions[0].pos : null;

    self._geneData = null;
    self._transcripts = [];
    self._currentTx = null;
    self._wholeGeneView = false;
    self._wholeGeneExons = [];
    self._canvas._gsv = null;
    self.lastHttpStatus = null;
    self._status('Resolving ' + raw + '\u2026');
    if (self._card) self._card.hidden = true;

    var path = isEnsemblId(raw)
      ? '/lookup/id/' + encodeURIComponent(raw) + '?expand=1&content-type=application/json'
      : '/lookup/symbol/homo_sapiens/' + encodeURIComponent(raw) + '?expand=1&content-type=application/json';

    return fetchJSON(self._api, path)
      .then(function (result) {
        var data = result.data;
        self.lastHttpStatus = result.httpStatus;
        if (!data || !data.id) throw new Error('Gene not found: ' + raw);

        self._geneData = data;

        self._transcripts = (data.Transcript || [])
          .filter(function (t) { return t.Exon && t.Exon.length > 0; })
          .sort(compareTranscripts);

        if (!self._transcripts.length) throw new Error('No transcript data returned');
        self._wholeGeneExons = combinedExonRegions(self._transcripts);

        if (self._txSelect) {
          self._txSelect.innerHTML = '';
          self._transcripts.forEach(function (t, i) {
            var opt    = document.createElement('option');
            opt.value  = i;
            var tags = transcriptTags(t);
            opt.textContent = (t.display_name || t.id) +
              '  \u2014  ' + t.Exon.length + ' exons' +
              (tags.length ? '  \u2014  ' + tags.join(', ') : '');
            self._txSelect.appendChild(opt);
          });
          var wholeGeneOption = document.createElement('option');
          wholeGeneOption.value = 'whole-gene';
          wholeGeneOption.textContent = 'Whole gene — exons across transcripts';
          self._txSelect.appendChild(wholeGeneOption);
          self._txSelect.value = '0';
        }

        var desc = (data.description || '').split('[')[0].trim();
        if (self._cardGene) {
          self._cardGene.textContent =
            (data.display_name || data.id) + (desc ? '  \u2014  ' + desc : '');
        }
        var chrStr = data.seq_region_name ? 'chr' + data.seq_region_name : '';
        if (self._cardLoc) {
          self._cardLoc.textContent = chrStr +
            (data.start ? ':' + data.start.toLocaleString() + '\u2013' + data.end.toLocaleString() : '') +
            '  \u00b7  ' + (data.assembly_name || 'GRCh38');
        }
        if (self._infoAsm) self._infoAsm.textContent = data.assembly_name || 'GRCh38';
        if (self._infoStr) self._infoStr.textContent = data.strand === 1 ? '+' : '\u2212';
        if (self._infoTxn) self._infoTxn.textContent = self._transcripts.length;

        if (self._card) self._card.hidden = false;
        self._currentTx = self._transcripts[0];
        self._status('Loaded \u2014 click any exon for coordinates');
        self._render();
        if (self._onLoaded) self._onLoaded(data);
        return data;
      })
      .catch(function (err) {
        self._status(self._offlineMessage || ('Error: ' + err.message), true);
        if (self._card) self._card.hidden = true;
        if (!self._quietErrors) console.error('[GeneStructurePlot]', err);
        throw err;
      });
  };

  /* ── public: highlight ──────────────────────────────────────────────────  */
  GeneStructurePlot.prototype.highlight = function (positionString) {
    var positions = parsePositions(positionString);
    this._hlPositions = positions;
    this._hlChr = positions.length ? positions[0].chr : '';
    this._hlPos = positions.length ? positions[0].pos : null;
    if (this._currentTx) this._render();
  };

  /* ── public: setTranscript ──────────────────────────────────────────────  */
  GeneStructurePlot.prototype.setTranscript = function (idx) {
    if (idx === 'whole-gene' && this._wholeGeneExons.length) {
      this._wholeGeneView = true;
      if (this._txSelect) this._txSelect.value = 'whole-gene';
      this._render();
    } else if (this._transcripts[idx]) {
      this._wholeGeneView = false;
      this._currentTx = this._transcripts[idx];
      if (this._txSelect) this._txSelect.value = idx;
      this._render();
    }
  };

  GeneStructurePlot.prototype.getView = function () {
    if (!this._currentTx) return null;
    if (this._wholeGeneView) return {
      mode: 'whole-gene',
      label: 'Whole gene',
      start: Number(this._geneData.start),
      end: Number(this._geneData.end)
    };
    var exons = this._currentTx.Exon;
    return {
      mode: 'transcript',
      label: this._currentTx.display_name || this._currentTx.id || 'Selected transcript',
      start: Math.min.apply(null, exons.map(function (e) { return e.start; })),
      end: Math.max.apply(null, exons.map(function (e) { return e.end; }))
    };
  };

  /* ── private: status ────────────────────────────────────────────────────  */
  GeneStructurePlot.prototype._status = function (msg, isError) {
    if (!this._statusEl) return;
    this._statusEl.textContent = msg || '';
    this._statusEl.className = 'gsv-status' + (isError ? ' gsv-error' : '');
  };

  /* ── private: render ────────────────────────────────────────────────────  */
  GeneStructurePlot.prototype._render = function () {
    var self = this;
    var tx   = self._currentTx;
    if (!tx) return;

    var wholeGene = self._wholeGeneView;
    var exons = (wholeGene ? self._wholeGeneExons : tx.Exon).slice()
      .sort(function (a, b) { return a.start - b.start; });
    if (!exons.length) return;
    var cdsStart = !wholeGene && tx.Translation ? tx.Translation.start : null;
    var cdsEnd   = !wholeGene && tx.Translation ? tx.Translation.end : null;

    if (self._infoExn) {
      self._infoExn.textContent = wholeGene
        ? exons.length + ' combined regions (all transcripts)'
        : exons.length + ' (' + (tx.display_name || tx.id) + ')';
    }

    var canvas = self._canvas;
    var C      = getColours(canvas);
    var dpr    = Math.min(window.devicePixelRatio || 1, 2);

    /* canvas sizing */
    var W      = Math.min(900, canvas.parentElement.clientWidth - 2);
    var H      = PAD.top + EXON_H + PAD.bot;
    var DRAW_W = W - PAD.l - PAD.r;
    var EY     = PAD.top;            /* top of exon boxes */
    var LINE_Y = EY + EXON_H / 2;   /* backbone y */

    canvas.width        = W * dpr;
    canvas.height       = H * dpr;
    canvas.style.width  = W + 'px';
    canvas.style.height = H + 'px';

    var ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, W, H);

    /* Transcript view keeps the original projection. Whole-gene view adds
       non-exonic flanks, condensed by the same factor as introns. */
    var firstExon = exons[0].start;
    var lastExon = exons[exons.length - 1].end;
    var gStart = wholeGene ? Number(self._geneData.start) : firstExon;
    var gEnd = wholeGene ? Number(self._geneData.end) : lastExon;
    var toRbp = buildMapper(exons);
    var leftFlank = wholeGene ? Math.max(0, firstExon - gStart) * INTRON_SCALE : 0;
    var exonSpan = toRbp(lastExon);
    var rightFlank = wholeGene ? Math.max(0, gEnd - lastExon) * INTRON_SCALE : 0;
    var scale = DRAW_W / Math.max(1, leftFlank + exonSpan + rightFlank);

    function gx(gPos) {
      var mapped;
      if (wholeGene && gPos < firstExon) mapped = (gPos - gStart) * INTRON_SCALE;
      else if (wholeGene && gPos > lastExon)
        mapped = leftFlank + exonSpan + (gPos - lastExon) * INTRON_SCALE;
      else mapped = leftFlank + toRbp(gPos);
      return PAD.l + mapped * scale;
    }
    function exBox(ex) {
      var x = gx(ex.start);
      return { x: x, w: Math.max(2.5, gx(ex.end) - x) };
    }

    /* One projection for exons, markers and coordinate labels. */
    canvas._gsv = { exons: exons, exBox: exBox, tx: tx, wholeGene: wholeGene };

    /* ── backbone ───────────────────────────────────────────────────────── */
    ctx.strokeStyle = C.muted;
    ctx.lineWidth   = 1;
    ctx.globalAlpha = 0.25;
    ctx.beginPath();
    ctx.moveTo(PAD.l, LINE_Y);
    ctx.lineTo(W - PAD.r, LINE_Y);
    ctx.stroke();
    ctx.globalAlpha = 1;

    /* strand chevrons along backbone */
    ctx.strokeStyle = '#c8c6c0';
    ctx.lineWidth   = 1;
    for (var cx = PAD.l + 20; cx < W - PAD.r - 10; cx += 40) {
      ctx.beginPath();
      ctx.moveTo(cx - 4, LINE_Y - 3.5);
      ctx.lineTo(cx,     LINE_Y);
      ctx.lineTo(cx - 4, LINE_Y + 3.5);
      ctx.stroke();
    }

    /* ── exons ──────────────────────────────────────────────────────────── */
    exons.forEach(function (ex, i) {
      var b  = exBox(ex);
      var rx = b.x, rw = b.w;

      if (cdsStart && cdsEnd) {
        /* left UTR */
        if (ex.start < cdsStart) {
          var uEnd = Math.min(ex.end, cdsStart - 1);
          var uw   = Math.max(1, gx(uEnd) - rx);
          drawBox(ctx, rx, EY + (EXON_H - UTR_H) / 2, uw, UTR_H, 2, C.utr, C.utrD);
        }
        /* CDS */
        var codS = Math.max(ex.start, cdsStart);
        var codE = Math.min(ex.end, cdsEnd);
        if (codS <= codE) {
          var cx2 = gx(codS);
          var cw  = Math.max(2, gx(codE) - cx2);
          drawBox(ctx, cx2, EY, cw, EXON_H, 3, C.cds, C.cdsD);
        }
        /* right UTR */
        if (ex.end > cdsEnd) {
          var usx  = gx(Math.max(ex.start, cdsEnd + 1));
          var uw2  = Math.max(1, gx(ex.end) - usx);
          drawBox(ctx, usx, EY + (EXON_H - UTR_H) / 2, uw2, UTR_H, 2, C.utr, C.utrD);
        }
      } else {
        drawBox(ctx, rx, EY, rw, EXON_H, 3, C.cds, C.cdsD);
      }

      if (wholeGene) return; // Combined regions must not be numbered as transcript exons.

      /* ── exon number label ABOVE the box ─────────────────────────────── */
      var label    = String(i + 1);
      var fontSize = 11;
      ctx.font = fontSize + 'px ' + FONT;
      var labelW = ctx.measureText(label).width;

      /* only draw if exon is wide enough to keep labels non-overlapping;
         for narrow exons skip every other number to avoid clutter */
      var minGap = labelW + 2;
      var draw   = rw >= 4 && (rw >= minGap || i % 2 === 0);

      if (draw) {
        var lx = rx + rw / 2;
        var ly = EY - 6;               /* 6 px gap above exon top */
        ctx.fillStyle    = C.muted;
        ctx.textAlign    = 'center';
        ctx.textBaseline = 'bottom';
        ctx.fillText(label, lx, ly);
      }
    });

    /* ── genomic position markers ─────────────────────────────────────── */
    var txChr  = ('chr' + (tx.seq_region_name || (self._geneData && self._geneData.seq_region_name) || '')).toLowerCase();
    var hits = (self._hlPositions || []).filter(function (item) {
      return (!item.chr || item.chr === txChr) &&
        item.pos >= gStart && item.pos <= gEnd;
    }).map(function (item) {
      return { pos: item.pos, chr: item.chr || txChr, x: gx(item.pos) };
    }).sort(function (a, b) { return a.x - b.x; });

    /* The x-values are always exact. Nearby positions are grouped only for
       display and inspection, never moved to different genomic coordinates. */
    var groups = [];
    hits.forEach(function (hit) {
      var previous = groups[groups.length - 1];
      if (previous && hit.x - previous[previous.length - 1].x < 10) {
        previous.push(hit);
      } else {
        groups.push([hit]);
      }
    });
    canvas._gsv.markers = groups.map(function (group) {
      return { x: group[Math.floor(group.length / 2)].x, positions: group };
    });

    hits.forEach(function (hit) {
      ctx.fillStyle = C.hlBg;
      var single = hits.length === 1;
      ctx.fillRect(hit.x - (single ? 4 : 2), 0, single ? 8 : 4, H);
      ctx.strokeStyle = C.hl;
      ctx.lineWidth = 1.5;
      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.moveTo(hit.x, 0);
      ctx.lineTo(hit.x, H);
      ctx.stroke();
      ctx.fillStyle = C.hl;
      ctx.beginPath();
      ctx.moveTo(hit.x - (single ? 5 : 4), 0);
      ctx.lineTo(hit.x + (single ? 5 : 4), 0);
      ctx.lineTo(hit.x, single ? 8 : 7);
      ctx.closePath();
      ctx.fill();
    });

    function markerRegion(pos) {
      for (var i = 0; i < exons.length; i++) {
        if (pos >= exons[i].start && pos <= exons[i].end)
          return wholeGene ? 'exonic region' : 'exon ' + (i + 1);
        if (i + 1 < exons.length && pos > exons[i].end && pos < exons[i + 1].start)
          return wholeGene ? 'non-exonic region' : 'intron ' + (i + 1);
      }
      return wholeGene ? 'non-exonic region' : '';
    }

    /* A single position keeps the original detailed label. Multiple nearby
       positions receive a count; precise coordinates remain in the tooltip. */
    var rightEdge = -Infinity;
    groups.forEach(function (group) {
      var center = group[Math.floor(group.length / 2)].x;
      var label = group.length === 1 && hits.length === 1
        ? group[0].chr + ':' + group[0].pos.toLocaleString() +
          (markerRegion(group[0].pos) ? '  \u00b7  ' + markerRegion(group[0].pos) : '')
        : group.length === 1 ? String(group[0].pos.toLocaleString())
          : group.length + ' positions';
      ctx.font = '500 12px ' + FONT;
      var width = ctx.measureText(label).width;
      var labelX = Math.max(width / 2 + 5, Math.min(W - width / 2 - 5, center));
      var left = labelX - width / 2 - 5;
      if (left <= rightEdge + 5) return;  /* suppress colliding labels */
      rightEdge = left + width + 10;
      ctx.fillStyle = C.surf;
      ctx.globalAlpha = 0.9;
      ctx.fillRect(left, 10, width + 10, 17);
      ctx.globalAlpha = 1;
      ctx.fillStyle = C.hl;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.fillText(label, labelX, 11);
    });

    /* ── genomic coordinate labels ──────────────────────────────────────── */
    var coordY = EY + EXON_H + 8;
    ctx.fillStyle    = C.muted;
    ctx.font         = '12px ' + FONT;
    ctx.textBaseline = 'top';
    ctx.textAlign    = 'left';
    ctx.fillText(gStart.toLocaleString(), PAD.l, coordY);
    ctx.textAlign = 'right';
    ctx.fillText(gEnd.toLocaleString(), W - PAD.r, coordY);

    /* ── 10 kb scale bar ────────────────────────────────────────────────── */
    var barBp   = 10000;
    var barPx   = Math.max(20, gx(gStart + barBp) - gx(gStart));
    var barY    = EY + EXON_H + 28;
    var barX    = PAD.l;              /* left-aligned, clear of coord labels */

    ctx.strokeStyle = C.muted;
    ctx.lineWidth   = 1.5;
    ctx.beginPath();
    ctx.moveTo(barX,         barY);
    ctx.lineTo(barX + barPx, barY);
    ctx.moveTo(barX,         barY - 4);
    ctx.lineTo(barX,         barY + 4);
    ctx.moveTo(barX + barPx, barY - 4);
    ctx.lineTo(barX + barPx, barY + 4);
    ctx.stroke();

    ctx.fillStyle    = C.muted;
    ctx.font         = '12px ' + FONT;
    ctx.textAlign    = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText('10 kb', barX + barPx + 6, barY - 6);
  };

  /* ── private: canvas events ─────────────────────────────────────────────  */
  GeneStructurePlot.prototype._bindCanvas = function () {
    var self   = this;
    var canvas = self._canvas;

    canvas.addEventListener('mousemove', function (e) {
      if (!canvas._gsv) return;
      var mx  = self._canvasMx(e);
      var overMarker = (canvas._gsv.markers || []).some(function (marker) {
        return marker.positions.some(function (item) { return Math.abs(mx - item.x) <= 5; });
      });
      var hit = overMarker || canvas._gsv.exons.some(function (ex) {
        var b = canvas._gsv.exBox(ex);
        return mx >= b.x - 3 && mx <= b.x + b.w + 3;
      });
      canvas.style.cursor = hit ? 'pointer' : 'default';
    });

    canvas.addEventListener('click', function (e) {
      if (!canvas._gsv || !self._tooltip) return;
      var mx = self._canvasMx(e);
      var nearby = (canvas._gsv.markers || []).filter(function (marker) {
        return marker.positions.some(function (item) { return Math.abs(mx - item.x) <= 5; });
      });
      if (nearby.length) {
        var unique = [];
        var seen = new Set();
        nearby.forEach(function (marker) {
          marker.positions.forEach(function (item) {
            var key = item.chr + ':' + item.pos;
            if (!seen.has(key)) { seen.add(key); unique.push(item); }
          });
        });
        unique.sort(function (a, b) { return a.pos - b.pos; });
        /* Values come from the numeric parser and verified chromosome labels. */
        self._tooltip.innerHTML = '<strong>Variant positions (' + unique.length + ')</strong>' +
          unique.map(function (item) { return item.chr + ':' + item.pos.toLocaleString(); }).join('<br>');
        self._tooltip.style.display = 'block';
        self._tooltip.style.left = (e.clientX + 16) + 'px';
        self._tooltip.style.top = (e.clientY - 12) + 'px';
        return;
      }
      for (var i = 0; i < canvas._gsv.exons.length; i++) {
        var ex = canvas._gsv.exons[i];
        var b  = canvas._gsv.exBox(ex);
        if (mx >= b.x - 3 && mx <= b.x + b.w + 3) {
          var bp  = ex.end - ex.start + 1;
          var chr = 'chr' + (canvas._gsv.tx.seq_region_name || '?');
          self._tooltip.innerHTML =
            '<strong>' + (canvas._gsv.wholeGene ? 'Exonic region' : 'Exon ' + (i + 1)) + '</strong>' +
            chr + ':' + ex.start.toLocaleString() + ' \u2013 ' + ex.end.toLocaleString() + '<br>' +
            bp.toLocaleString() + ' bp  \u00b7  ' + (bp / 1000).toFixed(2) + ' kb' +
            (ex.id ? '<br><span style="color:var(--gsv-steel,#5c5a5a)">ID: ' + ex.id + '</span>' : '');
          self._tooltip.style.display = 'block';
          self._tooltip.style.left = (e.clientX + 16) + 'px';
          self._tooltip.style.top  = (e.clientY - 12) + 'px';
          return;
        }
      }
      self._tooltip.style.display = 'none';
    });

    document.addEventListener('click', function (e) {
      if (e.target !== canvas && self._tooltip) {
        self._tooltip.style.display = 'none';
      }
    });

    window.addEventListener('resize', function () {
      if (self._currentTx) self._render();
    });
  };

  GeneStructurePlot.prototype._canvasMx = function (e) {
    var canvas = this._canvas;
    var rect   = canvas.getBoundingClientRect();
    var scaleX = parseInt(canvas.style.width, 10) / rect.width;
    return (e.clientX - rect.left) * scaleX;
  };

  /* ── export ─────────────────────────────────────────────────────────────  */
  GeneStructurePlot.supportsPositionArrays = true;
  root.GeneStructurePlot = GeneStructurePlot;

}(window));
