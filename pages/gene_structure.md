---
layout: default
title: "Gene structure"
description: "Explore human gene structure and transcripts using Ensembl. View coding exons, untranslated regions and condensed introns in an interactive plot."
summary: "An interactive human gene structure viewer with transcript selection and Ensembl reference data."
permalink: /pages/gene-structure/
weight: 100
technology_group: structured-genomics
---

<main class="gene-structure-app" aria-labelledby="gene-structure-title">
  <section class="container pb-6 pt-6 pt-md-10 pb-md-10">
    <div class="row justify-content-start">
      <div class="col-12">
        <div class="tech tech-single">

          <h1 id="gene-structure-title" class="title">Gene structure</h1>

          <form id="gene-structure-form">
            <label for="gene-structure-gene">
  A human gene symbol (<a href="https://www.genenames.org/" target="_blank" rel="noopener noreferrer">HGNC</a>)
</label>
            <div class="input-action">
              <input id="gene-structure-gene" type="text" placeholder="TNFAIP3" autocomplete="off" spellcheck="false" maxlength="80" required>
              <button type="submit" class="button-link">Plot gene</button>
            </div>
            <details id="gene-structure-variants">
              <summary>Plot variant positions</summary>
              <label for="gene-structure-positions">GRCh38 coordinates (CHR:POS, one per line)</label>
              <textarea id="gene-structure-positions" rows="3" spellcheck="false" autocomplete="off" placeholder="11:36,510,555&#10;11:36,573,999"></textarea>
            </details>
          </form>

          <div class="gsv-root" data-loaded="false">
            <p id="gene-structure-view-note" hidden><span id="gene-structure-view-note-text"></span>
              <a id="gene-structure-view-all" href="#gene-structure-tx-select">View whole gene</a>
            </p>

            <div id="gene-structure-card" class="gsv-card">
              <div class="gsv-card-head">
                <div>
                  <p class="gsv-card-gene" id="gene-structure-card-gene">—</p>
                  <p class="gsv-card-loc" id="gene-structure-card-loc">—</p>
                </div>
                <div class="gsv-tx-wrap">
                  <label class="gsv-label" for="gene-structure-tx-select">Transcript / view</label>
                  <select id="gene-structure-tx-select" class="gsv-select" disabled><option value="">—</option></select>
                </div>
              </div>

              <div class="gsv-canvas-wrap">
                <canvas id="gene-structure-canvas"></canvas>
              </div>

              <div class="gsv-legend">
                <span class="gsv-li"><span class="gsv-sw" style="background:var(--gsv-cds)"></span><span id="gene-structure-legend-exon">Coding exon</span></span>
                <span class="gsv-li" id="gene-structure-legend-utr"><span class="gsv-sw" style="background:var(--gsv-utr)"></span>UTR</span>
                <span class="gsv-li"><span class="gsv-sw-line"></span><span id="gene-structure-legend-intron">Intron (condensed)</span></span>
                <span class="gsv-li"><span class="gsv-sw" style="background:var(--gsv-hl)"></span>Variant positions</span>
              </div>

              <div class="gsv-info-row">
                <span>Assembly: <strong id="gene-structure-i-asm">—</strong></span>
                <span>Strand: <strong id="gene-structure-i-str">—</strong></span>
                <span>Transcripts: <strong id="gene-structure-i-txn">—</strong></span>
                <span>Exons: <strong id="gene-structure-i-exn">—</strong></span>
                <span>Ensembl: <strong id="gene-structure-i-ensg">—</strong></span>
              </div>
            </div>

            <div class="figure-actions" role="group" aria-label="Download gene structure plot">
              <button type="button" class="button-link" id="gene-structure-download-svg" disabled>Download SVG</button>
              <button type="button" class="button-link" id="gene-structure-download-png" disabled>Download PNG</button>
            </div>

            <div class="gsv-tooltip" id="gene-structure-tooltip" role="tooltip"></div>

            <div id="gene-structure-status" class="gsv-status" role="status" aria-live="polite">Enter a gene symbol to load the gene structure view.</div>
            <p>
              <a id="gene-structure-ensembl-link" href="https://rest.ensembl.org" target="_blank" rel="noopener">Ensembl REST</a>
            </p>

          </div>

          <hr>
          <details id="gene-structure-technical">
            <summary>Technical information <span id="gene-structure-technical-label"></span></summary>
            <dl class="definition-grid">
              <dt>State</dt><dd id="gene-structure-technical-state">Idle</dd>
              <dt>Gene query</dt><dd id="gene-structure-technical-query">—</dd>
              <dt>Variant positions</dt><dd id="gene-structure-technical-positions">—</dd>
              <dt>Position validation</dt><dd id="gene-structure-technical-validation">—</dd>
              <dt>Plot service</dt><dd><code>Ensembl via Switzerland Omics proxy</code></dd>
              <dt>Plot HTTP status</dt><dd id="gene-structure-technical-plot-http">—</dd>
              <dt>Symbol check</dt><dd id="gene-structure-technical-check">Not requested</dd>
              <dt>Diagnostic HTTP status</dt><dd id="gene-structure-technical-http">—</dd>
              <dt>Details</dt><dd id="gene-structure-technical-message">Enter a gene symbol to begin.</dd>
            </dl>
          </details>

<br>
<p>
  Read <a href="{{ '/blog/2026-10-29-seeing-a-variant-in-context/' | relative_url }}">About gene structure</a>.
  Gene structure visualisation is also available in
  <a href="{{ '/technologies/acmg-validator/' | relative_url }}">ACMG Validator</a>.
</p>

        </div>
      </div>
    </div>
  </section>
</main>

<style>
/* Layout only. Typography, colours and controls use the site and viewer stylesheets. */
.gene-structure-app form > label { display:block; }
.gene-structure-app .input-action { display:flex; gap:.75rem; max-width:32.5rem; margin-bottom:1rem; }
.gene-structure-app .input-action input { flex:1 1 auto; min-width:0; }
.gene-structure-app .input-action button { flex:0 0 auto; }
.gene-structure-app form > details { margin:0 0 1rem; }
.gene-structure-app form > details summary { cursor:pointer; }
.gene-structure-app form > details label { display:block; margin:.75rem 0 .25rem; }
.gene-structure-app form > details textarea { display:block; width:100%; max-width:32.5rem; resize:vertical; }

/* The plotting component hides its card until a result is available. */
.gene-structure-app .gsv-card[hidden] { display:block !important; }
.gene-structure-app .gsv-root[data-loaded="false"] .gsv-canvas-wrap { min-height:150px; }
.gene-structure-app .gsv-root[data-loaded="false"] canvas { visibility:hidden; }

.gene-structure-app .figure-actions { display:flex; justify-content:flex-end; flex-wrap:wrap; gap:.75rem; margin-top:1rem; }
.gene-structure-app .definition-grid { display:grid; grid-template-columns:minmax(8rem,max-content) minmax(0,1fr); gap:.5rem 1rem; }
.gene-structure-app .definition-grid dd { margin:0; overflow-wrap:anywhere; }

@media (max-width:480px) {
  .gene-structure-app .input-action { flex-direction:column; }
}
</style>

<link rel="stylesheet" href="{{ '/assets/gene_structure/plot.css' | relative_url }}">
<script src="{{ '/assets/gene_structure/plot.js' | relative_url }}"></script>
<script>
(function () {
  'use strict';

  var API = 'https://ensembl-proxy-worker.cold-leaf-e00d.workers.dev';
  var ENSEMBL = 'https://rest.ensembl.org';
  var form = document.getElementById('gene-structure-form');
  var geneInput = document.getElementById('gene-structure-gene');
  var positionsInput = document.getElementById('gene-structure-positions');
  var statusEl = document.getElementById('gene-structure-status');
  var cardEl = document.getElementById('gene-structure-card');
  var viewerRoot = document.querySelector('.gene-structure-app .gsv-root');
  var canvasEl = document.getElementById('gene-structure-canvas');
  var txSelectEl = document.getElementById('gene-structure-tx-select');
  var ensemblLinkEl = document.getElementById('gene-structure-ensembl-link');
  var ensemblIdEl = document.getElementById('gene-structure-i-ensg');
  var technicalLabel = document.getElementById('gene-structure-technical-label');
  var technicalState = document.getElementById('gene-structure-technical-state');
  var technicalQuery = document.getElementById('gene-structure-technical-query');
  var technicalPositions = document.getElementById('gene-structure-technical-positions');
  var technicalValidation = document.getElementById('gene-structure-technical-validation');
  var technicalCheck = document.getElementById('gene-structure-technical-check');
  var technicalHttp = document.getElementById('gene-structure-technical-http');
  var technicalPlotHttp = document.getElementById('gene-structure-technical-plot-http');
  var technicalMessage = document.getElementById('gene-structure-technical-message');
  var viewNote = document.getElementById('gene-structure-view-note');
  var viewNoteText = document.getElementById('gene-structure-view-note-text');
  var viewAllLink = document.getElementById('gene-structure-view-all');
  var legendExon = document.getElementById('gene-structure-legend-exon');
  var legendUtr = document.getElementById('gene-structure-legend-utr');
  var legendIntron = document.getElementById('gene-structure-legend-intron');

  var viewer = null;
  var loading = false;
  var pending = null;
  var currentRequest = null;
  var serial = 0;
  var downloadSVGButton = document.getElementById('gene-structure-download-svg');
  var downloadPNGButton = document.getElementById('gene-structure-download-png');

  function setStatus(message, state) {
    statusEl.textContent = message;
    statusEl.dataset.state = state || 'idle';
  }

  function setTechnical(state, request, check, http, message, validation) {
    technicalState.textContent = state;
    technicalQuery.textContent = request ? request.gene : '—';
    technicalPositions.textContent = request && request.positions.length
      ? request.positions.map(function (p) { return p.coordinate; }).join('\n') : '—';
    technicalValidation.textContent = validation || '—';
    technicalCheck.textContent = check || 'Not requested';
    technicalHttp.textContent = http || '—';
    technicalPlotHttp.textContent = request && request.plotHttp ? String(request.plotHttp) : '—';
    technicalMessage.textContent = message || '—';
    technicalLabel.textContent = state === 'Error' ? '· Error details' :
      (state === 'Loaded' ? '· Loaded' : '');
    technicalLabel.dataset.state = state === 'Error' ? 'error' : 'normal';
  }

  function normaliseChromosome(value) {
    var chr = String(value || '').trim().replace(/^chr/i, '').toUpperCase();
    if (chr === 'M') chr = 'MT';
    return /^(?:[1-9]|1\d|2[0-2]|X|Y|MT)$/.test(chr) ? chr : null;
  }

  function parsePositions(value) {
    var coordinates = [];
    var errors = [];
    var seen = new Set();
    var duplicates = 0;
    String(value || '').split(/\r?\n/).forEach(function (raw, index) {
      var line = raw.trim();
      if (!line) return;
      var parts = line.split(':');
      if (parts.length !== 2) {
        errors.push('Line ' + (index + 1) + ': expected chromosome:position.');
        return;
      }
      var chr = normaliseChromosome(parts[0]);
      var digits = parts[1].trim().replace(/[,\u0027\u2019\u02bc]/g, '');
      if (!chr || !/^\d+$/.test(digits)) {
        errors.push('Line ' + (index + 1) + ': invalid chromosome or position.');
        return;
      }
      var pos = Number(digits);
      if (!Number.isSafeInteger(pos) || pos < 1) {
        errors.push('Line ' + (index + 1) + ': position must be a positive 1-based integer.');
        return;
      }
      var coordinate = 'chr' + chr + ':' + pos;
      if (seen.has(coordinate)) { duplicates++; return; }
      seen.add(coordinate);
      coordinates.push({ chromosome: chr, position: pos, coordinate: coordinate });
    });
    return { positions: coordinates, errors: errors, duplicates: duplicates };
  }

  function validateGenePositions(request, geneData) {
    if (!request.positions.length) return { valid: [], rejected: [], message: 'No variant positions supplied.' };
    var chromosome = normaliseChromosome(geneData.seq_region_name);
    var start = Number(geneData.start);
    var end = Number(geneData.end);
    var assembly = String(geneData.assembly_name || '').trim();
    var valid = [];
    var rejected = [];
    request.positions.forEach(function (item) {
      var reason = '';
      if (!assembly) reason = 'Assembly not reported';
      else if (assembly.toUpperCase() !== 'GRCH38') reason = 'Unexpected assembly (' + assembly + ')';
      else if (!chromosome || !Number.isSafeInteger(start) || !Number.isSafeInteger(end)) reason = 'Gene interval unavailable';
      else if (item.chromosome !== chromosome) reason = 'Chromosome differs from gene (chr' + chromosome + ')';
      else if (item.position < start || item.position > end) reason = 'Outside gene interval (' + start + '–' + end + ')';
      if (reason) rejected.push(item.coordinate + ': ' + reason);
      else valid.push(item);
    });
    var message = valid.length + ' within gene interval';
    if (rejected.length) message += '; ' + rejected.length + ' excluded. ' + rejected.join('; ');
    if (request.duplicates) message += '; ' + request.duplicates + ' duplicate(s) removed';
    return { valid: valid, rejected: rejected, message: message };
  }

  function resetPlot() {
    viewerRoot.dataset.loaded = 'false';
    cardEl.hidden = false;
    document.getElementById('gene-structure-card-gene').textContent = '—';
    document.getElementById('gene-structure-card-loc').textContent = '—';
    ['gene-structure-i-asm', 'gene-structure-i-str',
     'gene-structure-i-txn', 'gene-structure-i-exn'].forEach(function (id) {
      document.getElementById(id).textContent = '—';
    });
    txSelectEl.replaceChildren(new Option('—', ''));
    txSelectEl.disabled = true;
    canvasEl._gsv = null;
    var ctx = canvasEl.getContext('2d');
    if (ctx) ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
    ensemblLinkEl.href = ENSEMBL;
    ensemblIdEl.textContent = '—';
    viewNote.hidden = true;
    downloadSVGButton.disabled = true;
    downloadPNGButton.disabled = true;
    legendExon.textContent = 'Coding exon';
    legendUtr.hidden = false;
    legendIntron.textContent = 'Intron (condensed)';
  }

  function updateEnsemblLink(data) {
    if (!data || !data.id) { ensemblLinkEl.href = ENSEMBL; return; }
    var url = 'https://www.ensembl.org/Homo_sapiens/Gene/Summary?db=core;g=' + encodeURIComponent(data.id);
    if (data.seq_region_name && data.start && data.end) {
      url += ';r=' + encodeURIComponent(data.seq_region_name + ':' + data.start + '-' + data.end);
    }
    ensemblLinkEl.href = url;
  }

  function applyPositions() {
    var request = currentRequest;
    if (!request || !request.loaded || !viewer || !viewer._geneData || pending) return;
    if (geneInput.value.trim().toUpperCase() !== request.gene.toUpperCase()) {
      viewNote.hidden = true;
      setStatus('Gene changed. Select Plot gene to update the view.', 'idle');
      return;
    }

    var parsed = parsePositions(positionsInput.value);
    request.positions = parsed.positions;
    request.duplicates = parsed.duplicates;
    if (parsed.errors.length) {
      viewer.highlight([]);
      viewNote.hidden = true;
      setStatus(parsed.errors[0] + ' No positions are plotted.', 'error');
      setTechnical('Error', request, 'Not requested', '—',
        parsed.errors.join(' ') + ' Correct the input to update the plot.',
        'Input contains invalid coordinates.');
      return;
    }

    var validation = validateGenePositions(request, viewer._geneData);
    viewer.highlight(validation.valid.map(function (item) { return item.coordinate; }));
    var view = viewer.getView();
    var visible = view ? validation.valid.filter(function (item) {
      return item.position >= view.start && item.position <= view.end;
    }).length : 0;
    var outOfView = view ? validation.valid.filter(function (item) {
      return item.position < view.start || item.position > view.end;
    }) : [];
    var missing = outOfView.length;
    var wholeGene = view && view.mode === 'whole-gene';

    legendExon.textContent = wholeGene ? 'Exon (any transcript)' : 'Coding exon';
    legendUtr.hidden = Boolean(wholeGene);
    legendIntron.textContent = wholeGene ? 'Non-exonic (condensed)' : 'Intron (condensed)';

    if (wholeGene) {
      viewNote.hidden = false;
      viewNoteText.textContent = 'Whole gene combines exon regions from all returned transcripts. It is not a single transcript.';
      viewAllLink.hidden = true;
    } else if (missing > 0) {
      viewNote.hidden = false;
      viewNoteText.textContent = missing + ' of ' + validation.valid.length +
        ' variant positions fall outside ' + view.label + '.';
      viewAllLink.hidden = false;
    } else {
      viewNote.hidden = true;
    }

    var count = validation.valid.length;
    var shown = count === 1 ? visible + ' position' : visible + ' of ' + count + ' variant positions';
    setStatus(validation.rejected.length
      ? 'Loaded · ' + validation.rejected.length + ' positions excluded. See technical information.'
      : count ? 'Loaded · ' + shown + ' displayed. Click a marker for coordinates.'
        : 'Loaded · click any exon for coordinates', 'loaded');
    var viewDetail = view ? '; ' + visible + ' shown in ' + view.label : '';
    if (missing) viewDetail += '; outside this view: ' +
      outOfView.map(function (item) { return item.coordinate; }).join(', ');
    setTechnical('Loaded', request, 'Not required', '—',
      'Gene structure rendered from the Ensembl proxy.', validation.message + viewDetail);
  }

  function markPlotLoaded(data) {
    var request = currentRequest;
    if (!request || pending || request.id !== serial) return;
    request.loaded = true;
    request.plotHttp = viewer && viewer.lastHttpStatus ? viewer.lastHttpStatus : 'Successful response';
    viewerRoot.dataset.loaded = 'true';
    cardEl.hidden = false;
    txSelectEl.disabled = false;
    downloadSVGButton.disabled = false;
    downloadPNGButton.disabled = false;
    updateEnsemblLink(data);
    ensemblIdEl.textContent = data && data.id ? String(data.id) : '—';
    applyPositions();
  }

  function initViewer(request) {
    if (viewer) return true;
    if (typeof GeneStructurePlot !== 'function') {
      setStatus('Gene structure renderer is unavailable.', 'error');
      setTechnical('Error', request, 'Not requested', '—', 'The standalone plot.js script did not initialise.');
      return false;
    }
    if (GeneStructurePlot.supportsPositionArrays !== true) {
      setStatus('The gene structure renderer needs the multi-position update.', 'error');
      setTechnical('Error', request, 'Not requested', '—',
        'The page requires the accompanying assets/gene_structure/plot.js with multi-position support.');
      return false;
    }
    try {
      viewer = new GeneStructurePlot({
        api: API,
        card: cardEl,
        canvas: canvasEl,
        statusEl: statusEl,
        txSelect: txSelectEl,
        cardGene: document.getElementById('gene-structure-card-gene'),
        cardLoc: document.getElementById('gene-structure-card-loc'),
        infoAsm: document.getElementById('gene-structure-i-asm'),
        infoStr: document.getElementById('gene-structure-i-str'),
        infoTxn: document.getElementById('gene-structure-i-txn'),
        infoExn: document.getElementById('gene-structure-i-exn'),
        tooltip: document.getElementById('gene-structure-tooltip'),
        quietErrors: true,
        offlineMessage: 'Unable to retrieve gene structure.',
        onLoaded: markPlotLoaded
      });
      txSelectEl.addEventListener('change', applyPositions);
      return true;
    } catch (error) {
      setStatus('The gene structure renderer could not start.', 'error');
      setTechnical('Error', request, 'Not requested', '—', String(error && error.message || error));
      return false;
    }
  }

  async function diagnoseFailure(request, viewerError, viewerStatus) {
    var id = request.id;
    var path = /^ENSG\d+/i.test(request.gene)
      ? '/lookup/id/' : '/lookup/symbol/homo_sapiens/';
    var endpoint = ENSEMBL + path + encodeURIComponent(request.gene) + '?content-type=application/json';
    var aborter = typeof AbortController === 'function' ? new AbortController() : null;
    var timeout = aborter ? window.setTimeout(function () { aborter.abort(); }, 10000) : null;
    var context = (viewerStatus ? 'Viewer status: ' + viewerStatus + '. ' : '') +
      (viewerError ? 'Viewer error: ' + viewerError + '. ' : '');
    try {
      var response = await fetch(endpoint, {
        method: 'GET', headers: { Accept: 'application/json' },
        signal: aborter ? aborter.signal : undefined
      });
      if (id !== serial || request.loaded || pending) return;
      var http = response.status + ' ' + (response.statusText || '');
      if (response.status === 404) {
        setStatus('No Ensembl gene found for “' + request.gene + '”.', 'error');
        setTechnical('Error', request, 'Gene not found', http,
          context + 'Ensembl REST returned HTTP 404. GET ' + endpoint);
      } else if (response.ok) {
        setStatus('Ensembl recognises “' + request.gene + '”, but plotting failed.', 'error');
        setTechnical('Error', request, 'Gene recognised', http,
          context + 'The independent symbol lookup succeeded. The plot HTTP status is unavailable. GET ' + endpoint);
      } else {
        setStatus('Gene structure could not be loaded.', 'error');
        setTechnical('Error', request, 'Diagnostic lookup failed', http, context + 'GET ' + endpoint);
      }
    } catch (error) {
      if (id !== serial || request.loaded || pending) return;
      setStatus('Gene structure could not be loaded. Cause unconfirmed.', 'error');
      setTechnical('Error', request, 'Diagnostic lookup unavailable', 'No HTTP response',
        context + String(error && error.message || error) + '. GET ' + endpoint);
    } finally {
      if (timeout !== null) window.clearTimeout(timeout);
    }
  }

  async function loadNext() {
    if (loading || !pending) return;
    var request = pending;
    pending = null;
    request.id = ++serial;
    currentRequest = request;
    resetPlot();
    if (!initViewer(request)) return;
    loading = true;
    setStatus('Loading gene structure for ' + request.gene + '…', 'loading');
    setTechnical('Loading', request, 'Not requested', '—',
      'Querying the Ensembl proxy.', request.positions.length + ' unique position(s) parsed.');

    var errorMessage = '';
    try {
      await viewer.load(request.gene, request.positions.map(function (p) { return p.coordinate; }));
    } catch (error) {
      request.plotHttp = error && error.httpStatus ? error.httpStatus : '';
      errorMessage = String(error && error.message || error);
    }
    loading = false;
    if (pending) { loadNext(); return; }
    if (request.id !== serial || request.loaded) return;

    var viewerStatus = statusEl.textContent.trim();
    resetPlot();
    setStatus('Plot failed. Checking the gene identifier…', 'loading');
    setTechnical('Checking', request, 'Ensembl lookup in progress', 'Pending',
      (errorMessage ? errorMessage + '. ' : '') + 'Viewer status: ' + viewerStatus);
    await diagnoseFailure(request, errorMessage, viewerStatus);
  }

  /* As in Pedigree, SVG is the source of truth for both exports. The
     renderer supplies true vector paths, while the page adds figure text. */
  function escapeXML(value) {
    return String(value).replace(/[&<>"']/g, function (c) {
      return { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&apos;' }[c];
    });
  }

  function buildFigureSVG() {
    if (!viewer || !currentRequest || !currentRequest.loaded || pending || loading) {
      throw new Error('Plot a gene before exporting.');
    }
    if (typeof viewer.exportPlotSVG !== 'function') {
      throw new Error('The standalone plot renderer does not support SVG export.');
    }
    var plot = viewer.exportPlotSVG();
    var width = plot.width + 56;
    var margin = 28;
    var measure = canvasEl.getContext('2d');
    var rootStyle = getComputedStyle(viewerRoot);
    function colour(key, fallback) {
      return rootStyle.getPropertyValue(key).trim() || fallback;
    }
    var ink = colour('--gsv-black', '#2f2f41');
    var muted = colour('--gsv-steel', '#5c5a5a');
    var border = colour('--gsv-border', '#dcdcdc');
    var cds = colour('--gsv-cds', '#1e3a5f');
    var utr = colour('--gsv-utr', '#7b9cbf');
    var highlight = colour('--gsv-hl', '#e5261f');

    function widthOf(value, font) {
      measure.font = font;
      return measure.measureText(String(value)).width;
    }
    function text(x, y, value, size, weight, fill) {
      return '<text x="' + x + '" y="' + y + '" fill="' + escapeXML(fill) +
        '" font-family="Arial,Helvetica,sans-serif" font-size="' + size +
        '" font-weight="' + weight + '">' + escapeXML(value) + '</text>';
    }
    function wrapped(value, maxWidth, font) {
      var result = [];
      var line = '';
      String(value).split(/\s+/).forEach(function (word) {
        if (!word) return;
        var next = line ? line + ' ' + word : word;
        if (line && widthOf(next, font) > maxWidth) {
          result.push(line);
          line = word;
        } else {
          line = next;
        }
      });
      if (line) result.push(line);
      return result;
    }

    var elements = [];
    var y = 38;
    wrapped(document.getElementById('gene-structure-card-gene').textContent.trim(),
      plot.width, '600 20px Arial').forEach(function (line) {
      elements.push(text(margin, y, line, 20, 600, ink));
      y += 27;
    });
    elements.push(text(margin, y + 1,
      document.getElementById('gene-structure-card-loc').textContent.trim(), 14, 400, muted));
    var plotY = y + 19;
    elements.push('<g transform="translate(' + margin + ' ' + plotY + ')">' + plot.content + '</g>');

    // The on-page legend is reused, including its whole-gene terminology.
    var legendY = plotY + plot.height + 22;
    var legendItems = [
      { label: legendExon.textContent, type: 'box', fill: cds },
      { label: 'UTR', type: 'box', fill: utr, hidden: legendUtr.hidden },
      { label: legendIntron.textContent, type: 'line', fill: muted },
      { label: 'Variant positions', type: 'box', fill: highlight }
    ].filter(function (item) { return !item.hidden; });
    var lx = margin;
    legendItems.forEach(function (item) {
      var itemWidth = widthOf(item.label, '13px Arial') + 36;
      if (lx !== margin && lx + itemWidth > width - margin) {
        lx = margin;
        legendY += 22;
      }
      if (item.type === 'line') {
        elements.push('<line x1="' + lx + '" y1="' + (legendY - 4) +
          '" x2="' + (lx + 19) + '" y2="' + (legendY - 4) +
          '" stroke="' + escapeXML(item.fill) + '" stroke-width="2" opacity=".45"/>');
      } else {
        elements.push('<rect x="' + lx + '" y="' + (legendY - 12) +
          '" width="14" height="10" rx="2" fill="' + escapeXML(item.fill) + '"/>');
      }
      elements.push(text(lx + 23, legendY - 2, item.label, 13, 400, muted));
      lx += itemWidth;
    });
    var ruleY = legendY + 16;
    elements.push('<line x1="' + margin + '" y1="' + ruleY +
      '" x2="' + (width - margin) + '" y2="' + ruleY +
      '" stroke="' + escapeXML(border) + '" stroke-width="1"/>');

    var info = [
      ['Assembly:', 'gene-structure-i-asm'],
      ['Strand:', 'gene-structure-i-str'],
      ['Transcripts:', 'gene-structure-i-txn'],
      ['Exons:', 'gene-structure-i-exn'],
      ['Ensembl:', 'gene-structure-i-ensg']
    ];
    var infoY = ruleY + 25;
    var ix = margin;
    info.forEach(function (item) {
      var label = item[0];
      var value = document.getElementById(item[1]).textContent.trim();
      var itemWidth = widthOf(label + ' ', '13px Arial') +
        widthOf(value, '600 13px Arial') + 26;
      if (ix !== margin && ix + itemWidth > width - margin) {
        ix = margin;
        infoY += 23;
      }
      elements.push('<text x="' + ix + '" y="' + infoY +
        '" fill="' + escapeXML(muted) +
        '" font-family="Arial,Helvetica,sans-serif" font-size="13">' +
        escapeXML(label) + ' <tspan font-weight="600">' + escapeXML(value) + '</tspan></text>');
      ix += itemWidth;
    });
    var height = infoY + 23;
    return '<svg xmlns="http://www.w3.org/2000/svg" width="' + width +
      '" height="' + height + '" viewBox="0 0 ' + width + ' ' + height + '">' +
      '<rect x=".5" y=".5" width="' + (width - 1) + '" height="' +
      (height - 1) + '" rx="6" fill="#ffffff" stroke="' + escapeXML(border) + '"/>' +
      elements.join('') + '</svg>';
  }

  function exportFileName(extension) {
    var gene = String(currentRequest.gene).toUpperCase().replace(/[^A-Z0-9._-]/g, '_');
    var view = viewer.getView();
    var mode = String(view ? view.label : 'transcript').replace(/[^a-zA-Z0-9._-]/g, '_');
    return 'gene-structure_' + gene + '_' + mode + '.' + extension;
  }

  function saveBlob(name, blob) {
    var url = URL.createObjectURL(blob);
    var link = document.createElement('a');
    link.href = url;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }

  function downloadFigure(format) {
    try {
      var svg = buildFigureSVG();
      var stem = exportFileName(format);
      var svgBlob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
      if (format === 'svg') {
        saveBlob(stem, svgBlob);
        return;
      }
      // PNG is rendered from the same vector figure at 4× resolution.
      var url = URL.createObjectURL(svgBlob);
      var image = new Image();
      image.onload = function () {
        try {
          var canvas = document.createElement('canvas');
          canvas.width = image.naturalWidth * 4;
          canvas.height = image.naturalHeight * 4;
          var ctx = canvas.getContext('2d');
          if (!ctx) throw new Error('Canvas export is unavailable.');
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
          canvas.toBlob(function (blob) {
            URL.revokeObjectURL(url);
            if (!blob) {
              setStatus('PNG export failed. SVG export remains available.', 'error');
              return;
            }
            saveBlob(stem, blob);
          }, 'image/png');
        } catch (error) {
          URL.revokeObjectURL(url);
          setStatus('PNG export failed: ' + (error.message || error), 'error');
        }
      };
      image.onerror = function () {
        URL.revokeObjectURL(url);
        setStatus('PNG export failed. SVG export remains available.', 'error');
      };
      image.src = url;
    } catch (error) {
      setStatus('Export failed: ' + (error.message || error), 'error');
    }
  }

  downloadSVGButton.addEventListener('click', function () { downloadFigure('svg'); });
  downloadPNGButton.addEventListener('click', function () { downloadFigure('png'); });

  viewAllLink.addEventListener('click', function (event) {
    event.preventDefault();
    if (!viewer || !currentRequest || !currentRequest.loaded) return;
    viewer.setTranscript('whole-gene');
    applyPositions();
  });
  positionsInput.addEventListener('input', applyPositions);
  geneInput.addEventListener('input', function () {
    if (currentRequest && currentRequest.loaded && !pending &&
        geneInput.value.trim().toUpperCase() !== currentRequest.gene.toUpperCase()) {
      viewNote.hidden = true;
      setStatus('Gene changed. Select Plot gene to update the view.', 'idle');
    }
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var gene = geneInput.value.trim();
    var parsed = parsePositions(positionsInput.value);
    var request = { gene: gene, positions: parsed.positions, duplicates: parsed.duplicates, loaded: false };
    if (!gene || parsed.errors.length) {
      resetPlot();
      setStatus(!gene ? 'Enter a gene symbol or Ensembl ID.' : parsed.errors[0], 'error');
      setTechnical('Error', request, 'Not requested', '—',
        parsed.errors.length ? parsed.errors.join(' ') : 'Gene is required.');
      return;
    }
    pending = request;
    if (loading) {
      resetPlot();
      setStatus('Waiting to load ' + gene + '…', 'loading');
      setTechnical('Queued', request, 'Not requested', '—',
        'An earlier request is finishing. The latest query will run next.');
      return;
    }
    loadNext();
  });
}());
</script>


