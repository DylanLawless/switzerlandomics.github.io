---
layout: default
title: "ACMG Validator"
description: "ACMG criteria calculator and classification validator. Review variant classification evidence, mark criteria and evidence status, modulate criterion strength with justification, check point-based consistency, document caveats, track completeness, and export a structured report. Runs in your browser. No upload."
summary: "A browser-based ACMG/AMP evidence review and classification validator for structured variant interpretation, caveat checking, multi-variant case review, and report export."
permalink: /technologies/acmg-validator/
weight: 99
technology_group: structured-genomics
---

<main class="acmg-app" aria-labelledby="acmg-title">
  <section class="container pb-6 pt-6 pt-md-10 pb-md-10">
    <div class="row justify-content-start">
      <div class="col-12">
        <div class="tech tech-single acmg-shell">

        <header class="acmg-hero acmg-no-print">
          <div class="acmg-hero-meta">
            <p class="acmg-kicker">ACMG Validator</p>
            <p class="acmg-release-tag">v1.0.0</p>
          </div>
          <h1 id="acmg-title" class="title">Review the evidence,<br>not just the verdict.</h1>

			  <p class="acmg-lead">Variant interpretation often ends with a classification. Clinical review needs the record behind it. ACMG Validator helps you check every ACMG/AMP criterion, record evidence, confirm non-applicable criteria, and export a structured report.</p>
			  <p class="acmg-lead acmg-lead-privacy">Private by design. Nothing leaves your browser.</p>
			
			  <div class="acmg-hero-actions acmg-example-actions">
			    <span class="acmg-example-label">Examples</span>
			    <button id="acmg-example" class="acmg-example-link" type="button" aria-label="Load BRCA1 c.68_69delAG example">BRCA1 c.68_69delAG</button>
			    <button id="acmg-example-cftr" class="acmg-example-link" type="button" aria-label="Load CFTR c.1521_1523delCTT example">CFTR c.1521_1523delCTT</button>
			    <button id="acmg-example-braf" class="acmg-example-link" type="button" aria-label="Load BRAF c.1799T to A example">BRAF c.1799T&gt;A</button>
			    <button id="acmg-reset" class="acmg-secondary-link acmg-clear-btn" type="button" aria-label="Clear all ACMG Validator inputs">Clear all</button>
			  </div>
			</header> 

          <!-- live scoreboard + completeness -->
          <div class="acmg-scoreboard acmg-no-print" id="acmg-scoreboard" aria-live="polite">
            <div class="acmg-score-cells">
              <div class="acmg-score-cell"><span class="acmg-score-val" id="sb-path">0</span><span class="acmg-score-lab">Pathogenic points</span></div>
              <div class="acmg-score-cell"><span class="acmg-score-val" id="sb-ben">0</span><span class="acmg-score-lab">Benign points</span></div>
              <div class="acmg-score-cell"><span class="acmg-score-val" id="sb-total">0</span><span class="acmg-score-lab">Total points</span></div>
              <div class="acmg-score-cell acmg-score-wide"><span class="acmg-score-val" id="sb-derived">—</span><span class="acmg-score-lab">Point-based category</span></div>
              <div class="acmg-score-cell acmg-score-wide"><div class="acmg-validation-line"><span class="acmg-verdict" id="sb-verdict" data-tone="idle">Incomplete review</span><button class="acmg-validation-help" id="sb-help" type="button" aria-expanded="false" aria-controls="sb-reasons" title="Show why this validation status was assigned" hidden>?</button></div><span class="acmg-score-lab">Validation status</span><div class="acmg-validation-reasons" id="sb-reasons" hidden></div></div>
            </div>
			<div class="acmg-completeness">
			  <div class="acmg-comp-bar" id="acmg-comp-bar"></div>
			  <div class="acmg-comp-text" id="acmg-comp-text">No criteria addressed yet.</div>
			  <div class="acmg-comp-pills" id="acmg-comp-pills" aria-label="Contributing ACMG criteria"></div>
			</div>
          </div>

          <div class="acmg-legend acmg-no-print">
            <span class="acmg-legend-item"><span class="acmg-legend-dot" data-state="complete">✓</span> Applied — contributes points</span>
            <span class="acmg-legend-item"><span class="acmg-legend-dot" data-state="noevidence">∅</span> No contribution — reviewed, adds nothing</span>
            <span class="acmg-legend-item"><span class="acmg-legend-dot" data-state="incomplete">!</span> Incomplete — something missing</span>
            <span class="acmg-legend-item"><span class="acmg-legend-dot" data-state="conflict">⊘</span> Conflict — needs resolving</span>
            <span class="acmg-legend-item"><span class="acmg-legend-dot" data-state="untouched">–</span> Not assessed — not yet reviewed</span>
          </div>

          <div class="acmg-entry-label acmg-no-print">Manual entry</div>
          <div class="acmg-case-tabs acmg-no-print" id="acmg-case-tabs" aria-label="Case variant navigation">
            <div class="acmg-case-tabs-row" id="acmg-case-tabs-row">
              <button type="button" class="acmg-case-tab" data-tab="case">Case context</button>
              <button type="button" class="acmg-case-tab" data-tab="genotype">Genotype review</button>
              <button type="button" class="acmg-case-tab" data-tab="report">Final report</button>
              <button type="button" class="acmg-case-tab acmg-active" data-variant="0">Variant 1</button>
            </div>
            <button type="button" class="acmg-case-add" id="acmg-add-variant">Add variant to case</button>
          </div>
          <details class="acmg-json-import acmg-no-print" id="acmg-json-import-panel">
            <summary>Batch upload entry · Load ACMG Validator JSON</summary>
            <p class="acmg-section-note">Optional import for saved ACMG Validator JSON reports. Most users can complete the form manually. Files are read locally in your browser and are not uploaded. Multi-variant JSON imports are limited to the first five variants; contact <a href="mailto:admin@switzerlandomics.ch">admin@switzerlandomics.ch</a> for a licence for unlimited joint variant input.</p>
            <div id="acmg-json-dropzone" class="acmg-json-dropzone" role="button" tabindex="0" aria-label="Choose or drop an ACMG Validator JSON file">
          <input id="acmg-json-file-input" class="acmg-json-file-input" type="file" accept=".json,application/json">
          <div class="acmg-json-drop-icon" aria-hidden="true">↓</div>
          <div>
            <h3>Choose JSON file</h3>
            <p>Drag and drop an ACMG Validator JSON file here, or click to select a local file.</p>
            <p class="acmg-json-small">Supports exported single-variant reports, multi-variant case reports, and example JSON files.</p>
          </div>
            </div>
            <div id="acmg-json-status" class="acmg-json-status" role="status" aria-live="polite">No JSON file selected.</div>
            <div class="acmg-json-downloads">
              <button type="button" class="acmg-mini-btn" id="acmg-download-json-template">Download blank JSON template</button>
              <button type="button" class="acmg-mini-btn" id="acmg-download-json-examples">Download completed examples JSON</button>
            </div>
          </details>

          <details class="acmg-genebe-import acmg-no-print" id="acmg-genebe-panel">
            <summary>Search evidence sources</summary>
            <p class="acmg-section-note">Optional external evidence lookup for a single genomic variant. Imported evidence criteria are marked for second review by default.</p>
            <form id="acmg-genebe-form" class="acmg-genebe-form">
              <div class="acmg-grid">
                <label class="acmg-field"><span>Chromosome</span><input id="acmg-genebe-chr" type="text" placeholder="7" autocomplete="off"></label>
                <label class="acmg-field"><span>Position</span><input id="acmg-genebe-pos" type="text" placeholder="140753336" autocomplete="off"></label>
                <label class="acmg-field"><span>Reference allele</span><input id="acmg-genebe-ref" type="text" placeholder="A" autocomplete="off"></label>
                <label class="acmg-field"><span>Alternate allele</span><input id="acmg-genebe-alt" type="text" placeholder="T" autocomplete="off"></label>
                <label class="acmg-field"><span>Genome build</span>
                  <select id="acmg-genebe-genome"><option value="hg38" selected>hg38</option><option value="hg19">hg19</option></select>
                </label>
                <label class="acmg-field acmg-field-wide"><span>Import ACMG criteria as</span>
                  <select id="acmg-genebe-import-mode"><option value="review" selected>Needs second review, no points yet</option><option value="accepted">Accepted, gives ACMG Validator points</option></select>
                </label>
              </div>
              <div class="acmg-hero-actions acmg-example-actions acmg-genebe-examples">
                <span class="acmg-example-label">Examples</span>
                <button type="button" class="acmg-example-link" id="acmg-genebe-example-brca1">BRCA1 c.68_69delAG</button>
                <button type="button" class="acmg-example-link" id="acmg-genebe-example-cftr">CFTR c.1521_1523delCTT</button>
                <button type="button" class="acmg-example-link" id="acmg-genebe-example-braf">BRAF c.1799T&gt;A</button>
                <button type="button" class="acmg-secondary-link acmg-clear-btn" id="acmg-genebe-clear">Clear all</button>
              </div>
              <div class="acmg-genebe-actions">
                <button type="button" class="acmg-mini-btn" id="acmg-genebe-use-context">Use active variant context</button>
                <button type="submit" class="acmg-mini-btn acmg-genebe-primary">Search and import evidence</button>
              </div>
            </form>
            <div id="acmg-genebe-status" class="acmg-genebe-status" role="status" aria-live="polite">No evidence lookup run yet.</div>
            <pre id="acmg-genebe-summary" class="acmg-genebe-summary" hidden></pre>
            <div class="acmg-genebe-resources">
              <h2 class="acmg-h2">Variant evidence resources</h2>
              <p>Common resources used during variant review. These links are provided for convenience only. Switzerland Omics does not endorse, control, validate, or guarantee any external database or interpretation. For automated evidence quantification see 
                <a href="https://switzerlandomics.ch/technologies/quantbayes/" target="_blank" rel="noopener">QuantBayes</a>.</p>
              <div class="acmg-resource-grid">
                <a href="https://www.ncbi.nlm.nih.gov/clinvar/" target="_blank" rel="noopener">ClinVar</a>
                <a href="https://erepo.clinicalgenome.org/" target="_blank" rel="noopener">ClinGen Evidence Repository</a>
                <a href="https://cspec.genome.network/cspec/ui/svi/" target="_blank" rel="noopener">ClinGen Criteria Specifications</a>
                <a href="https://gnomad.broadinstitute.org/" target="_blank" rel="noopener">gnomAD</a>
                <a href="https://genebe.net/" target="_blank" rel="noopener">GeneBe</a>
                <a href="https://varsome.com/" target="_blank" rel="noopener">VarSome</a>
                <a href="https://www.omim.org/" target="_blank" rel="noopener">OMIM</a>
                <a href="https://www.ncbi.nlm.nih.gov/snp/" target="_blank" rel="noopener">dbSNP</a>
                <a href="https://genome.ucsc.edu/" target="_blank" rel="noopener">UCSC Genome Browser</a>
                <a href="https://www.ensembl.org/Tools/VEP" target="_blank" rel="noopener">Ensembl VEP</a>
                <a href="https://spliceailookup.broadinstitute.org/" target="_blank" rel="noopener">SpliceAI Lookup</a>
                <a href="https://mutalyzer.nl/" target="_blank" rel="noopener">Mutalyzer</a>
                <a href="https://databases.lovd.nl/shared/genes" target="_blank" rel="noopener">LOVD</a>
                <a href="https://panelapp.genomicsengland.co.uk/" target="_blank" rel="noopener">PanelApp</a>
                <a href="https://cancer.sanger.ac.uk/cosmic" target="_blank" rel="noopener">COSMIC</a>
                <a href="https://www.oncokb.org/" target="_blank" rel="noopener">OncoKB</a>
              </div>
            </div>
          </details>

          <div class="acmg-editor acmg-no-print">

            <!-- variant + case context -->
            <section class="acmg-section">
              <h2 class="acmg-h2">1 · Variant and case context</h2>
              <div class="acmg-inline-variant-tabs" id="acmg-inline-variant-tabs" aria-label="Active variant navigation">
                <button type="button" class="acmg-case-tab acmg-active" data-variant="0">Variant 1</button>
              </div>
              <p class="acmg-section-note">Use HGVS notation. Missing transcript or genome build is flagged because interpretation can change with reference sequence and assembly.</p>
              <div class="acmg-grid">
                <label class="acmg-field"><span>Gene</span><input data-meta="gene" type="text" placeholder="BRCA1" autocomplete="off"></label>
                <label class="acmg-field"><span>Transcript</span><input data-meta="transcript" type="text" placeholder="NM_007294.4" autocomplete="off"></label>
                <label class="acmg-field"><span>cDNA (HGVS c.)</span><input data-meta="hgvs_c" type="text" placeholder="c.68_69del" autocomplete="off"></label>
                <label class="acmg-field"><span>Protein (HGVS p.)</span><input data-meta="hgvs_p" type="text" placeholder="p.(Glu23ValfsTer17)" autocomplete="off"></label>
                <label class="acmg-field"><span>Genome build</span>
                  <select data-meta="build"><option value="">—</option><option>GRCh38</option><option>GRCh37</option><option>T2T-CHM13</option></select>
                </label>
                <label class="acmg-field"><span>Genomic coordinate</span><input data-meta="coordinate" type="text" placeholder="chr17:43124027" autocomplete="off"></label>
                <label class="acmg-field"><span>Reference allele</span><input data-meta="ref" type="text" placeholder="A" autocomplete="off"></label>
                <label class="acmg-field"><span>Alternate allele</span><input data-meta="alt" type="text" placeholder="T" autocomplete="off"></label>
                <label class="acmg-field"><span>Variant type</span>
                  <select data-meta="variant_type">
					<option value="">—</option>
					<option>SNV</option>
					<option>MNV</option>
					<option>Small insertion</option>
					<option>Small deletion</option>
					<option>Small indel</option>
					<option>Repeat expansion / contraction</option>
					<option>Copy-number variant</option>
					<option>Structural variant</option>
					<option>Mitochondrial variant</option>
					<option>Non-coding regulatory variant</option>
					<option>Other / complex</option>
				</select>
                </label>
                <label class="acmg-field"><span>Zygosity</span>
                  <select data-meta="zygosity"><option value="">—</option><option>Heterozygous</option><option>Homozygous</option><option>Hemizygous</option><option>Compound het</option></select>
                </label>
                <label class="acmg-field"><span>Disease / condition</span><input data-meta="disease" type="text" placeholder="Hereditary breast and ovarian cancer" autocomplete="off"></label>
                <label class="acmg-field"><span>Inheritance model</span>
                  <select data-meta="inheritance"><option value="">—</option><option>AD</option><option>AR</option><option>XLD</option><option>XLR</option><option>Mitochondrial</option><option>Other</option></select>
                </label>
                <label class="acmg-field acmg-field-wide"><span>Phenotype summary / HPO</span><input data-meta="phenotype" type="text" placeholder="Free text or HPO terms" autocomplete="off"></label>
                <label class="acmg-field"><span>Reviewer</span><input data-meta="reviewer" type="text" placeholder="Dr Jane Smith" autocomplete="off"></label>
                <label class="acmg-field"><span>Institution</span><input data-meta="institution" type="text" placeholder="Example Laboratory" autocomplete="off"></label>
                <label class="acmg-field"><span>Review date</span><input data-meta="date" type="date"></label>
                <label class="acmg-field"><span>Guideline basis</span>
                  <select data-meta="guideline"><option>ACMG/AMP 2015 (Richards et al.)</option><option>ACMG/AMP + Tavtigian point system</option><option>ClinGen-specified rules</option></select>
                </label>
              </div>

              <details class="acmg-provenance" id="acmg-provenance-panel">
                <summary>Sample provenance and sequencing metadata</summary>
                <p class="acmg-section-note">Optional case-level metadata for the sample, sequencing run, instrument, analysis files and prior sharing events. Use structured SPHN WGS keys where available, or paste JSON / TSV from an upstream system. You can inspect VCF header metadata separately in the <a href="/pages/vcfheader_browser.html" target="_blank" rel="noopener">VCFheader browser</a>.</p>

                <div class="acmg-provenance-import">
                  <label class="acmg-field acmg-field-wide"><span>Paste SPHN gv_wgs JSON, or TSV/CSV key-value lines</span><textarea id="acmg-prov-import" placeholder='{"genome_id":"...","metadata":{"samples":[...]}}&#10;or&#10;metadata.assay.identifier	WGS-001'></textarea></label>
                  <div class="acmg-prov-actions">
                    <button type="button" class="acmg-mini-btn" id="acmg-prov-apply">Map pasted metadata</button>
                    <button type="button" class="acmg-mini-btn" id="acmg-prov-clear">Clear provenance</button>
                    <span class="acmg-prov-status" id="acmg-prov-status" aria-live="polite"></span>
                  </div>
                </div>

                <div class="acmg-prov-group">
                  <h3 class="acmg-group-title">Case and sample</h3>
                  <div class="acmg-grid">
                    <label class="acmg-field"><span title="id">Identifier</span><input data-prov="id" type="text" autocomplete="off"></label>
                    <label class="acmg-field"><span title="genome_id">Genome ID</span><input data-prov="genome_id" type="text" autocomplete="off"></label>
                    <label class="acmg-field"><span title="metadata.samples.0.sample_id">Sample ID</span><input data-prov="metadata.samples.0.sample_id" type="text" autocomplete="off"></label>
                    <label class="acmg-field"><span title="metadata.samples.0.primary_sample_type">Sample primary sample type</span><input data-prov="metadata.samples.0.primary_sample_type" type="text" autocomplete="off"></label>
                    <label class="acmg-field"><span title="metadata.samples.0.q30">Sample q30</span><input data-prov="metadata.samples.0.q30" type="text" autocomplete="off"></label>
                  </div>
                </div>

                <div class="acmg-prov-group">
                  <h3 class="acmg-group-title">Sequencing assay</h3>
                  <div class="acmg-grid">
                    <label class="acmg-field"><span title="metadata.assay.identifier">Assay identifier</span><input data-prov="metadata.assay.identifier" type="text" autocomplete="off"></label>
                    <label class="acmg-field"><span title="metadata.assay.code">Assay code</span><input data-prov="metadata.assay.code" type="text" autocomplete="off"></label>
                    <label class="acmg-field"><span title="metadata.assay.intended_read_depth">Assay intended read depth</span><input data-prov="metadata.assay.intended_read_depth" type="text" autocomplete="off"></label>
                    <label class="acmg-field"><span title="metadata.assay.intended_read_length">Assay intended read length</span><input data-prov="metadata.assay.intended_read_length" type="text" autocomplete="off"></label>
                    <label class="acmg-field"><span title="metadata.assay.library_preparation">Assay library preparation</span><input data-prov="metadata.assay.library_preparation" type="text" autocomplete="off"></label>
                    <label class="acmg-field"><span title="metadata.assay.source_system">Assay source system</span><input data-prov="metadata.assay.source_system" type="text" autocomplete="off"></label>
                    <label class="acmg-field"><span title="metadata.assay.sop">Assay sop</span><input data-prov="metadata.assay.sop" type="text" autocomplete="off"></label>
                    <label class="acmg-field"><span title="metadata.assay.start_datetime">Assay start datetime</span><input data-prov="metadata.assay.start_datetime" type="text" placeholder="YYYY-MM-DDThh:mm:ss" autocomplete="off"></label>
                    <label class="acmg-field"><span title="metadata.assay.subject_pseudo_identifier">Assay subject pseudo identifier</span><input data-prov="metadata.assay.subject_pseudo_identifier" type="text" autocomplete="off"></label>
                  </div>
                </div>

                <div class="acmg-prov-group">
                  <h3 class="acmg-group-title">Sequencing run and instrument</h3>
                  <div class="acmg-grid">
                    <label class="acmg-field"><span title="metadata.run.identifier">Run identifier</span><input data-prov="metadata.run.identifier" type="text" autocomplete="off"></label>
                    <label class="acmg-field"><span title="metadata.run.datetime">Run datetime</span><input data-prov="metadata.run.datetime" type="text" placeholder="YYYY-MM-DDThh:mm:ss" autocomplete="off"></label>
                    <label class="acmg-field"><span title="metadata.run.average_insert_size">Run average insert size</span><input data-prov="metadata.run.average_insert_size" type="text" autocomplete="off"></label>
                    <label class="acmg-field"><span title="metadata.run.average_read_length">Run average read length</span><input data-prov="metadata.run.average_read_length" type="text" autocomplete="off"></label>
                    <label class="acmg-field"><span title="metadata.run.mean_read_depth">Run mean read depth</span><input data-prov="metadata.run.mean_read_depth" type="text" autocomplete="off"></label>
                    <label class="acmg-field"><span title="metadata.run.read_count">Run read count</span><input data-prov="metadata.run.read_count" type="text" autocomplete="off"></label>
                    <label class="acmg-field"><span title="metadata.instrument.code">Instrument code</span><input data-prov="metadata.instrument.code" type="text" autocomplete="off"></label>
                    <label class="acmg-field"><span title="metadata.instrument.label">Instrument label</span><input data-prov="metadata.instrument.label" type="text" autocomplete="off"></label>
                  </div>
                </div>

                <div class="acmg-prov-group">
                  <h3 class="acmg-group-title">Sequencing analysis</h3>
                  <div class="acmg-grid">
                    <label class="acmg-field"><span title="metadata.analysis.identifier">Analysis identifier</span><input data-prov="metadata.analysis.identifier" type="text" autocomplete="off"></label>
                    <label class="acmg-field"><span title="metadata.analysis.code">Analysis code</span><input data-prov="metadata.analysis.code" type="text" autocomplete="off"></label>
                    <label class="acmg-field"><span title="metadata.analysis.reference_sequence">Analysis reference sequence</span><input data-prov="metadata.analysis.reference_sequence" type="text" autocomplete="off"></label>
                    <label class="acmg-field"><span title="metadata.analysis.software">Analysis software</span><input data-prov="metadata.analysis.software" type="text" autocomplete="off"></label>
                    <label class="acmg-field"><span title="metadata.analysis.source_system">Analysis source system</span><input data-prov="metadata.analysis.source_system" type="text" autocomplete="off"></label>
                    <label class="acmg-field"><span title="metadata.analysis.sop">Analysis sop</span><input data-prov="metadata.analysis.sop" type="text" autocomplete="off"></label>
                    <label class="acmg-field"><span title="metadata.analysis.start_datetime">Analysis start datetime</span><input data-prov="metadata.analysis.start_datetime" type="text" placeholder="YYYY-MM-DDThh:mm:ss" autocomplete="off"></label>
                    <label class="acmg-field"><span title="metadata.analysis.subject_pseudo_identifier">Analysis subject pseudo identifier</span><input data-prov="metadata.analysis.subject_pseudo_identifier" type="text" autocomplete="off"></label>
                  </div>
                </div>

                <div class="acmg-prov-group">
                  <h3 class="acmg-group-title">Files, checksums and sharing</h3>
                  <div class="acmg-grid">
                    <label class="acmg-field"><span title="metadata.files.fastq">Files fastq</span><input data-prov="metadata.files.fastq" type="text" autocomplete="off"></label>
                    <label class="acmg-field"><span title="metadata.md5.fastq">MD5 fastq</span><input data-prov="metadata.md5.fastq" type="text" autocomplete="off"></label>
                    <label class="acmg-field"><span title="metadata.size.fastq">Size fastq</span><input data-prov="metadata.size.fastq" type="text" autocomplete="off"></label>
                    <label class="acmg-field"><span title="metadata.files.vcf">Files vcf</span><input data-prov="metadata.files.vcf" type="text" autocomplete="off"></label>
                    <label class="acmg-field"><span title="metadata.md5.vcf">MD5 vcf</span><input data-prov="metadata.md5.vcf" type="text" autocomplete="off"></label>
                    <label class="acmg-field"><span title="metadata.size.vcf">Size vcf</span><input data-prov="metadata.size.vcf" type="text" autocomplete="off"></label>
                    <label class="acmg-field"><span title="metadata.shares.0.date">Share date</span><input data-prov="metadata.shares.0.date" type="text" placeholder="YYYY-MM-DD" autocomplete="off"></label>
                    <label class="acmg-field"><span title="metadata.shares.0.type">Share type</span><input data-prov="metadata.shares.0.type" type="text" autocomplete="off"></label>
                    <label class="acmg-field"><span title="metadata.shares.0.recipient">Share recipient</span><input data-prov="metadata.shares.0.recipient" type="text" autocomplete="off"></label>
                  </div>
                </div>

                <div class="acmg-prov-group">
                  <label class="acmg-field acmg-field-wide"><span>Non-standard imported provenance keys</span><textarea id="acmg-prov-extra" readonly placeholder="Additional imported keys are shown here and included in JSON exports."></textarea></label>
                </div>
              </details>

            </section>

            <!-- gene structure viewer -->
            <section class="acmg-section acmg-gsv-section" id="acmg-gsv-section">
              <h2 class="acmg-h2">2 · Gene structure view</h2>
              <p class="acmg-section-note">The gene structure view follows the active variant context. It uses the gene symbol when available and the genomic coordinate to highlight the variant position.</p>

              <div class="gsv-root acmg-gsv-root">
                <div id="acmg-gsv-status" class="gsv-status acmg-gsv-status" role="status" aria-live="polite">Gene structure viewer will load when a gene is entered.</div>
                <p class="acmg-section-note acmg-gsv-source">
                  This viewer prioritises GRCh38 MANE Select where available, then MANE Plus Clinical, canonical and protein-coding transcripts.
                  <a id="acmg-gsv-ensembl-link" href="https://rest.ensembl.org" target="_blank" rel="noopener">Ensembl REST</a>
                </p>

                <div id="acmg-gsv-card" class="gsv-card" hidden>
                  <div class="gsv-card-head">
                    <div>
                      <p class="gsv-card-gene" id="acmg-gsv-card-gene"></p>
                      <p class="gsv-card-loc" id="acmg-gsv-card-loc"></p>
                    </div>
                    <div class="gsv-tx-wrap">
                      <label class="gsv-label" for="acmg-gsv-tx-select">Transcript</label>
                      <select id="acmg-gsv-tx-select" class="gsv-select"></select>
                    </div>
                  </div>

                  <div class="gsv-canvas-wrap">
                    <canvas id="acmg-gsv-canvas"></canvas>
                  </div>

                  <div class="gsv-legend">
                    <span class="gsv-li"><span class="gsv-sw" style="background:var(--gsv-cds)"></span>Coding exon</span>
                    <span class="gsv-li"><span class="gsv-sw" style="background:var(--gsv-utr)"></span>UTR</span>
                    <span class="gsv-li"><span class="gsv-sw-line"></span>Intron (condensed)</span>
                    <span class="gsv-li"><span class="gsv-sw" style="background:var(--gsv-hl);opacity:.85"></span>Variant position</span>
                  </div>

                  <div class="gsv-info-row">
                    <span>Assembly: <strong id="acmg-gsv-i-asm">—</strong></span>
                    <span>Strand: <strong id="acmg-gsv-i-str">—</strong></span>
                    <span>Transcripts: <strong id="acmg-gsv-i-txn">—</strong></span>
                    <span>Exons: <strong id="acmg-gsv-i-exn">—</strong></span>
                  </div>
                </div>

                <div class="gsv-tooltip" id="acmg-gsv-tooltip" role="tooltip"></div>
              </div>
            </section>

            <!-- criteria -->
            <section class="acmg-section">
              <div class="acmg-section-head">
                <div>
                  <h2 class="acmg-h2">3 · Criteria review</h2>
                  <p class="acmg-section-note">Record the <strong>evidence finding first</strong>, then the <strong>status</strong> — the status auto-fills from the evidence and you can override it. Each criterion also carries a default strength fixed by ACMG/AMP; you may modulate it when justified (e.g. PVS1 per the ClinGen decision tree, PM2 to Supporting), and any deviation is recorded in ClinGen notation (PM2_Supporting). "Rejected, absent after review" is not "Not assessed": use the status pill and the completeness bar to confirm nothing was skipped. Many criteria will not apply to a given variant — use <em>Mark untouched as N/A</em> to record that deliberately.</p>
                </div>
                <div class="acmg-crit-tools">
                  <button type="button" id="acmg-na-rest" class="acmg-mini-btn">Mark untouched as N/A</button>
                  <button type="button" id="acmg-density-toggle" class="acmg-mini-btn" aria-pressed="true">Expand criteria</button>
                  <div class="acmg-filter" role="group" aria-label="Filter criteria">
                    <button type="button" data-filter="all" class="acmg-active">All</button>
                    <button type="button" data-filter="active">Touched only</button>
                  </div>
                </div>
              </div>

              <div class="acmg-group">
                <h3 class="acmg-group-title" data-group="pathogenic">Pathogenic evidence</h3>
                <div class="acmg-crit-list" id="acmg-list-pathogenic"></div>
              </div>

              <div class="acmg-group">
                <h3 class="acmg-group-title" data-group="benign">Benign evidence</h3>
                <div class="acmg-crit-list" id="acmg-list-benign"></div>
              </div>
            </section>

            <!-- genotype-level review -->
            <section class="acmg-section" id="acmg-genotype-section">
              <h2 class="acmg-h2">4 · Genotype-level review</h2>
              <p class="acmg-section-note">Use this when a case has more than one variant. Variant-level ACMG evidence remains separate; this section records whether the variants were reviewed together, phase, recessive evidence and phenotype fit. Do not sum ACMG scores across variants.</p>
              <div class="acmg-grid">
                <label class="acmg-field"><span>Gene reviewed together</span><input data-genotype="gene" type="text" placeholder="CFTR" autocomplete="off"></label>
                <label class="acmg-field"><span>Disease / condition</span><input data-genotype="disease" type="text" placeholder="Cystic fibrosis" autocomplete="off"></label>
                <label class="acmg-field"><span>Inheritance model</span>
                  <select data-genotype="inheritance"><option value="">—</option><option>AD</option><option>AR</option><option>XLD</option><option>XLR</option><option>Mitochondrial</option><option>Other</option></select>
                </label>
                <label class="acmg-field"><span>Phase</span>
                  <select data-genotype="phase"><option value="">—</option><option>Confirmed in trans</option><option>Confirmed in cis</option><option>Inferred in trans</option><option>Phase unknown</option><option>Not assessed</option></select>
                </label>
                <label class="acmg-field acmg-field-wide"><span>Variant combination</span><input data-genotype="combination" type="text" placeholder="Variant 1 and Variant 2 reviewed as a possible biallelic genotype" autocomplete="off"></label>
                <label class="acmg-field acmg-field-wide"><span>Phase evidence</span><input data-genotype="phase_evidence" type="text" placeholder="Parental testing, segregation, read-backed phasing, inferred from family data, or not assessed" autocomplete="off"></label>
                <label class="acmg-field acmg-field-wide"><span>Genotype-level conclusion</span><input data-genotype="conclusion" type="text" placeholder="Biallelic variants in trans are compatible with the AR disease model" autocomplete="off"></label>
                <label class="acmg-field acmg-field-wide"><span>Phenotype fit</span><input data-genotype="phenotype_fit" type="text" placeholder="Clinical phenotype supports / does not support the genotype-level interpretation" autocomplete="off"></label>
                <label class="acmg-field acmg-field-wide"><span>Residual uncertainty</span><input data-genotype="uncertainty" type="text" placeholder="Phase unknown, second allele uncertain, incomplete phenotype, segregation not assessed…" autocomplete="off"></label>
              </div>
            </section>
            <!-- classification + sign-off -->
            <section class="acmg-section acmg-signoff-section" id="acmg-signoff-section">
              <h2 class="acmg-h2">5 · Classification and sign-off</h2>
              <div class="acmg-grid">
                <label class="acmg-field"><span>Entered classification</span>
                  <select data-meta="entered_classification">
                    <option value="">—</option>
                    <option value="pathogenic">Pathogenic</option>
                    <option value="likely_pathogenic">Likely pathogenic</option>
                    <option value="vus">Uncertain significance</option>
                    <option value="likely_benign">Likely benign</option>
                    <option value="benign">Benign</option>
                  </select>
                </label>
                <label class="acmg-field acmg-field-wide acmg-checkline"><input type="checkbox" data-meta="signoff"><span>Reviewer sign-off completed — evidence reviewed and recorded as above</span></label>
              </div>
            </section>

          </div>

          <!-- report (live, read-only mirror; the only thing that prints) -->
          <section class="acmg-report" id="acmg-report" aria-label="Structured review report">
            <div id="acmg-report-body"></div>
            <div class="acmg-export-cta acmg-no-print">
              <div class="acmg-export-copy">
                <h2 class="acmg-h2">Download the report</h2>
                <p>A structured, shareable record of this review — PDF for sign-off, HTML or JSON for your records.</p>
              </div>
              <div class="acmg-export">
                <button id="acmg-print" class="button-link" type="button">Print / Save PDF</button>
                <button id="acmg-html" class="button-link" type="button">Download HTML</button>
                <button id="acmg-json" class="acmg-button-secondary" type="button">JSON</button>
                <button id="acmg-md" class="acmg-button-secondary" type="button">Markdown</button>
              </div>
            </div>
          </section>

          <!-- SEO / educational explainer (server rendered) -->
          <details class="acmg-explainer acmg-no-print">
            <summary>About the ACMG criteria and this validator</summary>
            <div class="acmg-explainer-body">
              <p>The ACMG/AMP framework classifies sequence variants into five categories of pathogenic, likely pathogenic, uncertain significance, likely benign and benign. It has weighted evidence criteria such as PVS1, PS1–PS4, PM1–PM6, PP1–PP4 on the pathogenic side and BA1, BS1–BS4, BP1–BP7 on the benign side. Each criterion carries a default strength: very strong, strong, moderate or supporting (BA1 is stand-alone benign).</p>
              <p>The strength encoded in the code is the default, but it can be modulated on professional judgement, and modern practice does so in structured ways: the ClinGen Sequence Variant Interpretation working group grades PVS1 by null-variant context (PVS1 decision tree), recommends PM2 at supporting strength, and calibrates computational evidence (PP3/BP4) and functional evidence (PS3/BS3) to multiple strength levels. The Tavtigian et al. (2020) point system makes this coherent by scoring the applied strength rather than the code: supporting ±1, moderate ±2, strong ±4, very strong / stand-alone ±8, with categories of pathogenic ≥10, likely pathogenic 6–9, uncertain 0–5, likely benign −1 to −6, benign ≤−7.</p>
              <p>This tool does not annotate variants and does not replace VarSome, ClinVar, gnomAD or VEP. It records <em>how</em> the evidence those tools provide was reviewed: which criteria apply, at what strength and why, which were checked and found absent, which were never assessed, whether caveats were completed, and whether the entered classification is internally consistent with the selected criteria. The output certifies process completion, not clinical correctness. A "validated" report means the review is internally consistent with the selected criteria and that caveats and sign-off were completed — it is not a clinical approval.</p>
            </div>
          </details>

          <section class="acmg-feedback acmg-no-print">
            <h2 class="acmg-h2">Feedback</h2>
            <p>Feedback on this page is important to catch errors in logic or to better meet user needs. Please contact us at <a href="mailto:admin@switzerlandomics.ch">admin@switzerlandomics.ch</a> to report.</p>
          </section>

          <section class="acmg-references acmg-no-print">
            <h2 class="acmg-h2">References</h2>
            <ol class="acmg-ref-list">
              <li>Richards S, et al. (2015). Standards and guidelines for the interpretation of sequence variants: a joint consensus recommendation of the American College of Medical Genetics and Genomics and the Association for Molecular Pathology. <em>Genetics in Medicine</em>, 17(5), 405–423. <a href="https://doi.org/10.1038/gim.2015.30">doi:10.1038/gim.2015.30</a></li>
              <li>Tavtigian SV, Harrison SM, Boucher KM, Biesecker LG. (2020). Fitting a naturally scaled point system to the ACMG/AMP variant classification guidelines. <em>Human Mutation</em>, 41, 1734–1737. <a href="https://doi.org/10.1002/humu.24088">doi:10.1002/humu.24088</a></li>
              <li>Wilcox EH, et al. (2022). Evaluating the impact of in silico predictors on clinical variant classification. <em>Genetics in Medicine</em>, 24(4), 924–930. <a href="https://doi.org/10.1016/j.gim.2021.11.018">doi:10.1016/j.gim.2021.11.018</a></li>
              <li>Li MM, et al. (2017). Standards and guidelines for the interpretation and reporting of sequence variants in cancer: a joint consensus recommendation of AMP, ASCO and CAP. <em>The Journal of Molecular Diagnostics</em>, 19(1), 4–23. <a href="https://doi.org/10.1016/j.jmoldx.2016.10.002">doi:10.1016/j.jmoldx.2016.10.002</a></li>
              <li>Riggs ER, et al. (2020). Technical standards for the interpretation and reporting of constitutional copy-number variants: a joint consensus recommendation of ACMG and ClinGen. <em>Genetics in Medicine</em>, 22(2), 245–257. <a href="https://doi.org/10.1038/s41436-019-0686-8">doi:10.1038/s41436-019-0686-8</a></li>
              <li>Pedersen BS, et al. (2021). Effective variant filtering and expected candidate variant yield in studies of rare human disease. <em>npj Genomic Medicine</em>, 6(1), 1–8. <a href="https://doi.org/10.1038/s41525-021-00227-3">doi:10.1038/s41525-021-00227-3</a></li>
              <li>Li Q, Wang K. (2017). InterVar: clinical interpretation of genetic variants by the 2015 ACMG-AMP guidelines. <em>The American Journal of Human Genetics</em>, 100(2), 267–280. <a href="https://doi.org/10.1016/j.ajhg.2017.01.004">doi:10.1016/j.ajhg.2017.01.004</a></li>
              <li>Xavier A, et al. (2019). TAPES: a tool for assessment and prioritisation in exome studies. <em>PLoS Computational Biology</em>, 15(10), e1007453. <a href="https://doi.org/10.1371/journal.pcbi.1007453">doi:10.1371/journal.pcbi.1007453</a></li>
              <li>van der Horst, E.; Unni, D.; Kopmels, F.; Armida, J.; Touré, V.; Franke, W.; Crameri, K.; Cirillo, E.; Österle, S. (2023) “Bridging Clinical and Genomic Knowledge: An Extension of the SPHN RDF Schema for Seamless Integration and FAIRification of Omics Data.” Preprints.org.<a href="http://doi.org/10.20944/preprints202312.0373.v1">doi:10.20944/preprints202312.0373.v1</a></li>
            </ol>
            <p class="acmg-ref-note">Public ACMG implementations such as InterVar and TAPES are listed for reference only; they are not implemented here and no assertion of their quality is made.</p>
          </section>

          <footer class="acmg-footer-text">
            Generated with ACMG Validator, a tool from
            <a href="https://switzerlandomics.ch">Switzerland Omics</a>.
            The validator checks internal consistency and process completion only. It does not assert clinical validity, does not annotate variants, and does not constitute medical advice.
            Switzerland Omics® is a registered trade mark.
            Classification logic follows Richards et al. 2015 (ACMG/AMP) and the point system of Tavtigian et al. 2020; strength modulation follows ClinGen SVI recommendations.
            Further information:
            <a href="https://switzerlandomics.ch">https://switzerlandomics.ch</a>.
          </footer>

        </div>
      </div>
    </div>
  </section>
</main>

<style>
.acmg-app{--acmg-red:#e5261f;--acmg-red-dark:#a01b16;--acmg-black:#2f2f41;--acmg-steel:#5c5a5a;--acmg-soft:#f3f2f2;--acmg-border:#dcdcdc;--acmg-surface:#fff;--acmg-warn:#8a5a00;--acmg-warn-bg:#fbf4e6;--acmg-ok:#2f7d4f;--acmg-ok-bg:#eef7f1;--acmg-path-bg:#fdeceb;--acmg-path-border:#f3c4c1;--acmg-path-text:#a01b16;--acmg-ben-bg:#eef7f1;--acmg-ben-border:#bfe0cb;--acmg-ben-text:#24613d;--rs-green:#2f7d4f;--rs-blue:#2c5f8a;--rs-amber:#8a5a00;--rs-red:#e5261f;}
.acmg-shell{max-width:1100px;}
.acmg-hero{
  margin-bottom:30px;
  padding-bottom:22px;
  border-bottom:1px solid var(--acmg-border);
}

.acmg-editor{margin-top:24px;}
.acmg-kicker{margin:0 0 .5rem;color:var(--acmg-red);font-weight:600;font-size:.95rem;}
.acmg-lead{max-width:52rem;color:var(--acmg-steel);font-size:1.02rem;line-height:1.5;margin:.7rem 0 0;}
.acmg-lead-privacy{
  margin-top:.45rem;
  font-size:.94rem;
  font-weight:600;
  color:var(--acmg-steel);
}

.acmg-hero-meta{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:16px;
}

.acmg-hero-meta .acmg-kicker,
.acmg-hero-meta .acmg-release-tag{
  margin:0 0 .5rem;
}

.acmg-release-tag{
  color:var(--acmg-steel);
  font-size:.82rem;
  font-weight:700;
  letter-spacing:.06em;
  text-transform:uppercase;
}

.acmg-hero-actions{display:flex;gap:14px;align-items:center;flex-wrap:wrap;margin-top:1.1rem;}
.acmg-example-actions{gap:8px 10px;align-items:center;}
.acmg-example-label{color:var(--acmg-steel);font-size:.84rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-right:2px;}
.acmg-example-link{display:inline-flex;align-items:center;min-height:30px;border:1px solid transparent;border-radius:999px;background:transparent;color:var(--acmg-red);font:inherit;font-size:.94rem;padding:4px 9px;cursor:pointer;text-decoration:none;white-space:nowrap;transition:background .15s ease,border-color .15s ease,color .15s ease;}
.acmg-example-link:hover{background:rgba(229,38,31,.06);border-color:rgba(229,38,31,.24);color:var(--acmg-red-dark);}
.acmg-clear-btn{display:inline-flex;align-items:center;min-height:30px;margin-left:2px;border:1px solid transparent;border-radius:999px;padding:4px 9px;white-space:nowrap;transition:background .15s ease,border-color .15s ease,color .15s ease;}
.acmg-secondary-link{border:none;background:none;color:var(--acmg-steel);font:inherit;cursor:pointer;text-decoration:none;}
.acmg-secondary-link:hover{background:rgba(47,47,65,.05);border-color:rgba(47,47,65,.14);color:var(--acmg-red);text-decoration:none;}
.acmg-example-link:focus-visible,.acmg-secondary-link:focus-visible,.acmg-mini-btn:focus-visible,.acmg-case-add:focus-visible,.acmg-case-tab:focus-visible,.acmg-button-secondary:focus-visible,.button-link:focus-visible{outline:3px solid rgba(229,38,31,.28);outline-offset:2px;}
.acmg-entry-label{margin:0 0 8px;color:var(--acmg-steel);font-size:.78rem;text-transform:uppercase;letter-spacing:.06em;font-weight:700;}

/* JSON import */
.acmg-json-import{margin-top:18px;border:1px solid var(--acmg-border);border-left:4px solid var(--acmg-red);border-radius:6px;background:#fff;padding:0;}
.acmg-json-import summary{cursor:pointer;padding:12px 14px;font-weight:700;color:var(--acmg-black);list-style:none;}
.acmg-json-import summary::-webkit-details-marker{display:none;}
.acmg-json-import summary::after{content:"+";float:right;color:var(--acmg-red);font-weight:700;}
.acmg-json-import[open] summary{border-bottom:1px solid var(--acmg-border);}
.acmg-json-import[open] summary::after{content:"−";}
.acmg-json-import>.acmg-section-note,.acmg-json-import .acmg-json-dropzone,.acmg-json-import .acmg-json-status{margin-left:14px;margin-right:14px;}
.acmg-json-import a{color:var(--acmg-red);text-decoration:none;}
.acmg-json-import a:hover{text-decoration:underline;}
.acmg-json-dropzone{position:relative;border:2px dashed rgba(229,38,31,.38);background:linear-gradient(180deg,#fff,#fafafa);border-radius:12px;padding:16px;display:flex;gap:14px;align-items:center;cursor:pointer;transition:border-color .15s ease,background .15s ease,transform .15s ease;margin-top:10px;margin-bottom:10px;}
.acmg-json-dropzone:hover,.acmg-json-dropzone.acmg-json-dragging{border-color:var(--acmg-red);background:#fff;transform:translateY(-1px);}
.acmg-json-file-input{position:absolute;inset:0;opacity:0;cursor:pointer;}
.acmg-json-drop-icon{width:42px;height:42px;border-radius:50%;display:grid;place-items:center;background:var(--acmg-red);color:#fff;font-size:22px;font-weight:600;flex:0 0 auto;}
.acmg-json-dropzone h3{font-size:1rem;margin:0 0 .18rem;color:var(--acmg-black);}
.acmg-json-dropzone p{margin:.15rem 0;color:var(--acmg-steel);line-height:1.4;font-size:.88rem;}
.acmg-json-small{font-size:.78rem!important;}
.acmg-json-status{margin-top:0;margin-bottom:14px;color:var(--acmg-steel);font-size:.86rem;min-height:1.2rem;}
.acmg-json-status.acmg-json-error{color:var(--acmg-red-dark);font-weight:600;}
.acmg-json-downloads{display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin:0 14px 14px;}
.acmg-json-downloads .acmg-mini-btn{background:#fff;}



/* GeneBe evidence lookup */
.acmg-genebe-import{margin-top:14px;border:1px solid var(--acmg-border);border-left:4px solid var(--acmg-black);border-radius:6px;background:#fff;padding:0;}
.acmg-genebe-import summary{cursor:pointer;padding:12px 14px;font-weight:700;color:var(--acmg-black);list-style:none;}
.acmg-genebe-import summary::-webkit-details-marker{display:none;}
.acmg-genebe-import summary::after{content:"+";float:right;color:var(--acmg-red);font-weight:700;}
.acmg-genebe-import[open] summary{border-bottom:1px solid var(--acmg-border);}
.acmg-genebe-import[open] summary::after{content:"−";}
.acmg-genebe-import>.acmg-section-note,.acmg-genebe-form,.acmg-genebe-status,.acmg-genebe-summary,.acmg-genebe-resources{margin-left:14px;margin-right:14px;}
.acmg-genebe-form{margin-top:10px;margin-bottom:10px;}
.acmg-genebe-examples{margin-top:12px;}
.acmg-genebe-resources{margin-top:18px;margin-bottom:14px;padding-top:14px;border-top:1px solid var(--acmg-border);}
.acmg-genebe-resources p{color:var(--acmg-steel);font-size:.9rem;line-height:1.45;margin:.2rem 0 1rem;max-width:62rem;}
.acmg-genebe-actions{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-top:12px;}
.acmg-genebe-primary{border-color:var(--acmg-red-dark);background:var(--acmg-red);color:#fff;font-weight:600;}
.acmg-genebe-primary:hover{border-color:var(--acmg-red-dark);background:var(--acmg-red-dark);color:#fff;}
.acmg-genebe-status{margin-top:0;margin-bottom:12px;color:var(--acmg-steel);font-size:.86rem;min-height:1.2rem;}
.acmg-genebe-status.acmg-genebe-error{color:var(--acmg-red-dark);font-weight:600;}
.acmg-genebe-status.acmg-genebe-success{display:flex;align-items:center;gap:7px;color:var(--acmg-ok);font-weight:600;}
.acmg-genebe-status .acmg-legend-dot{flex:0 0 auto;}
.acmg-genebe-summary{margin-top:0;margin-bottom:14px;padding:10px;border:1px solid var(--acmg-border);border-radius:5px;background:var(--acmg-soft);color:var(--acmg-black);font-size:.78rem;line-height:1.35;white-space:pre-wrap;overflow:auto;max-height:240px;}

/* multi-variant case tabs */
.acmg-case-tabs{display:flex;align-items:stretch;gap:10px;flex-wrap:wrap;margin:0 0 18px;padding:12px;border:2px solid rgba(229,38,31,.32);border-left:6px solid var(--acmg-red);border-radius:8px;background:linear-gradient(135deg,rgba(229,38,31,.08),rgba(47,47,65,.04));}
.acmg-case-tabs-row{display:flex;gap:8px;flex-wrap:wrap;align-items:center;flex:1 1 auto;}
.acmg-case-tab{border:1px solid rgba(229,38,31,.35);background:#fff;color:var(--acmg-black);font:inherit;font-size:.84rem;font-weight:600;padding:8px 12px;border-radius:6px;cursor:pointer;box-shadow:0 1px 0 rgba(47,47,65,.05);}
.acmg-case-tab:hover{border-color:var(--acmg-red);color:var(--acmg-red);}
.acmg-case-tab.acmg-active{background:var(--acmg-red);border-color:var(--acmg-red-dark);color:#fff;}
.acmg-case-add{border:1px solid var(--acmg-black);background:var(--acmg-black);color:#fff;font:inherit;font-size:.84rem;font-weight:600;padding:8px 13px;border-radius:6px;cursor:pointer;}
.acmg-case-add:hover{background:var(--acmg-red);border-color:var(--acmg-red);}

/* scoreboard + completeness */
.acmg-scoreboard{border:1px solid var(--acmg-border);border-radius:6px;background:var(--acmg-surface);overflow:hidden;position:sticky;top:0;z-index:5;margin-bottom:16px;}
.acmg-score-cells{display:grid;grid-template-columns:repeat(3,minmax(0,1fr)) repeat(2,minmax(0,1.6fr));}
.acmg-score-cell{padding:12px 14px;border-left:1px solid var(--acmg-border);display:flex;flex-direction:column;gap:3px;}
.acmg-score-cell:first-child{border-left:none;}
.acmg-score-val{font-size:1.55rem;font-weight:700;color:var(--acmg-black);line-height:1;}
.acmg-score-lab{font-size:.74rem;color:var(--acmg-steel);text-transform:uppercase;letter-spacing:.04em;}
.acmg-verdict{display:inline-block;font-size:.92rem;font-weight:600;padding:3px 8px;border-radius:4px;width:fit-content;border:1px solid var(--acmg-border);color:var(--acmg-steel);}
.acmg-verdict[data-tone="ok"]{color:var(--acmg-ok);background:var(--acmg-ok-bg);border-color:#bfe0cb;}
.acmg-verdict[data-tone="warn"]{color:var(--acmg-warn);background:var(--acmg-warn-bg);border-color:#ead9b0;}
.acmg-verdict[data-tone="bad"]{color:#fff;background:var(--acmg-red);border-color:var(--acmg-red-dark);}
.acmg-verdict[data-tone="idle"]{color:var(--acmg-steel);}
.acmg-validation-line{display:flex;align-items:center;gap:7px;flex-wrap:wrap;}
.acmg-validation-help{width:21px;height:21px;border-radius:50%;border:1px solid var(--acmg-border);background:var(--acmg-surface);color:var(--acmg-steel);font:inherit;font-size:.76rem;font-weight:700;line-height:1;cursor:pointer;padding:0;}
.acmg-validation-help:hover,.acmg-validation-help[aria-expanded="true"]{border-color:var(--acmg-red);color:var(--acmg-red);}
.acmg-validation-reasons{margin-top:7px;padding:8px 9px;border:1px solid var(--acmg-border);border-radius:5px;background:var(--acmg-soft);color:var(--acmg-steel);font-size:.76rem;line-height:1.35;}
.acmg-validation-reasons ul{margin:.35rem 0 0;padding-left:1rem;}
.acmg-validation-reasons li{margin:0 0 .2rem;}
.acmg-completeness{padding:10px 14px;border-top:1px solid var(--acmg-border);display:flex;flex-direction:column;gap:7px;}
.acmg-comp-bar{display:flex;height:9px;border-radius:3px;overflow:hidden;background:#eceae6;}
.acmg-comp-seg{height:100%;}
.acmg-comp-seg[data-state="complete"]{background:var(--rs-green);}
.acmg-comp-seg[data-state="noevidence"]{background:var(--rs-blue);}
.acmg-comp-seg[data-state="incomplete"]{background:#caa23c;}
.acmg-comp-seg[data-state="conflict"]{background:var(--rs-red);}
.acmg-comp-text{font-size:.78rem;color:var(--acmg-steel);}
.acmg-comp-pills{
  display:flex;
  flex-wrap:wrap;
  gap:5px 6px;
  min-height:0;
}
.acmg-comp-pill{
  display:inline-flex;
  align-items:center;
  gap:4px;
  border:1px solid var(--acmg-border);
  border-radius:999px;
  background:#fff;
  color:var(--acmg-steel);
  font-size:.68rem;
  font-weight:700;
  line-height:1;
  padding:3px 7px;
  white-space:nowrap;
}
.acmg-comp-pill[data-group="pathogenic"]{
  background:var(--acmg-path-bg);
  border-color:var(--acmg-path-border);
  color:var(--acmg-path-text);
}
.acmg-comp-pill[data-group="benign"]{
  background:var(--acmg-ben-bg);
  border-color:var(--acmg-ben-border);
  color:var(--acmg-ben-text);
}
.acmg-comp-pill-points{
  opacity:.72;
  font-weight:600;
}

/* legend */
.acmg-legend{display:flex;flex-wrap:wrap;gap:8px 18px;margin:0 0 26px;font-size:.76rem;color:var(--acmg-steel);}
.acmg-legend-item{display:inline-flex;align-items:center;gap:7px;}
.acmg-legend-dot{width:17px;height:17px;border-radius:3px;display:inline-grid;place-items:center;font-size:10px;font-weight:700;border:1px solid;flex:0 0 auto;}
.acmg-legend-dot[data-state="complete"]{color:#2f7d4f;background:#eef7f1;border-color:#bfe0cb;}
.acmg-legend-dot[data-state="noevidence"]{color:#2c5f8a;background:#eef3f8;border-color:#c3d6e6;}
.acmg-legend-dot[data-state="incomplete"]{color:#8a5a00;background:#fbf4e6;border-color:#e0c98f;}
.acmg-legend-dot[data-state="conflict"]{color:#a01b16;background:#fdeceb;border-color:#f3c4c1;}
.acmg-legend-dot[data-state="untouched"]{color:#5c5a5a;background:#fff;border-color:#dcdcdc;}

/* sections */
.acmg-section{border-top:2px solid var(--acmg-black);padding-top:16px;margin-top:30px;}
.acmg-section:first-child{margin-top:0;}
.acmg-signoff-section{border-top-color:var(--acmg-ok);background:linear-gradient(180deg,rgba(47,125,79,.07),rgba(255,255,255,0));padding:16px 14px 4px;border-radius:6px;}
.acmg-signoff-section .acmg-h2{color:var(--acmg-ok);}
.acmg-signoff-section .acmg-checkline span{font-weight:700;}
.acmg-h2{font-size:1.12rem;color:var(--acmg-black);margin:0 0 .25rem;}
.acmg-inline-variant-tabs{display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin:6px 0 10px;}
.acmg-inline-variant-tabs .acmg-case-tab{font-size:.78rem;padding:6px 10px;}
.acmg-active-variant-indicator{display:inline-flex;align-items:center;margin-left:8px;border:1px solid rgba(229,38,31,.35);border-radius:999px;background:#fff;color:var(--acmg-red);font-size:.68rem;font-weight:700;letter-spacing:.04em;text-transform:uppercase;padding:3px 7px;vertical-align:middle;}
.acmg-section-note{color:var(--acmg-steel);font-size:.9rem;line-height:1.45;margin:.2rem 0 1rem;max-width:62rem;}
.acmg-gsv-section .gsv-root{max-width:100%;}
.acmg-gsv-status{font-size:.86rem;color:var(--acmg-steel);margin:.15rem 0 10px;}
.acmg-gsv-status.acmg-gsv-muted{color:var(--acmg-steel);}
.acmg-gsv-source{font-size:.82rem;margin:.1rem 0 10px;max-width:62rem;}
.acmg-gsv-source a{color:var(--acmg-red);text-decoration:none;}
.acmg-gsv-source a:hover{text-decoration:underline;}
.acmg-gsv-section .gsv-card{margin-top:10px;}

.acmg-section-head{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;flex-wrap:wrap;}
.acmg-crit-tools{display:flex;align-items:center;gap:10px;flex-wrap:wrap;}
.acmg-mini-btn{border:1px solid var(--acmg-border);background:var(--acmg-surface);color:var(--acmg-steel);font:inherit;font-size:.8rem;padding:6px 11px;border-radius:5px;cursor:pointer;}
.acmg-mini-btn:hover{border-color:var(--acmg-red);color:var(--acmg-red);}

/* form grid */
.acmg-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px 14px;}
.acmg-field{display:flex;flex-direction:column;gap:4px;font-size:.8rem;color:var(--acmg-black);}
.acmg-field>span{font-weight:600;}
.acmg-field-wide{grid-column:span 2;}
.acmg-field input,.acmg-field select{height:38px;padding:0 10px;border:1px solid var(--acmg-border);border-radius:5px;background:var(--acmg-surface);font-size:.9rem;color:var(--acmg-black);outline:none;}
.acmg-field input:focus,.acmg-field select:focus{border-color:var(--acmg-red);}
.acmg-checkline{flex-direction:row;align-items:center;gap:10px;align-self:end;height:38px;}
.acmg-checkline input{width:18px;height:18px;}
.acmg-checkline span{font-weight:500;}

/* filter */
.acmg-filter{display:inline-flex;border:1px solid var(--acmg-border);border-radius:5px;overflow:hidden;}
.acmg-filter button{border:none;background:var(--acmg-surface);color:var(--acmg-steel);font:inherit;font-size:.82rem;padding:6px 12px;cursor:pointer;border-left:1px solid var(--acmg-border);}
.acmg-filter button:first-child{border-left:none;}
.acmg-filter button.acmg-active{background:rgba(229,38,31,.08);color:var(--acmg-red);font-weight:600;}

/* criteria */
.acmg-group{margin-top:18px;}
.acmg-group-title{font-size:.82rem;text-transform:uppercase;letter-spacing:.06em;color:var(--acmg-steel);margin:0 0 2px;padding-bottom:6px;border-bottom:1px solid var(--acmg-border);}
.acmg-group-title[data-group]{display:flex;align-items:center;gap:8px;}
.acmg-group-title[data-group]::before{content:"";width:9px;height:9px;border-radius:50%;border:1px solid currentColor;flex:0 0 auto;}
.acmg-group-title[data-group="pathogenic"]{color:var(--acmg-path-text);border-bottom-color:var(--acmg-path-border);}
.acmg-group-title[data-group="benign"]{color:var(--acmg-ben-text);border-bottom-color:var(--acmg-ben-border);}
.acmg-crit{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:10px 18px;align-items:start;padding:12px 0 12px 12px;border-bottom:1px solid var(--acmg-border);border-left:3px solid var(--acmg-border);}
.acmg-crit-compact{display:none;width:100%;border:none;background:transparent;text-align:left;padding:0;color:inherit;font:inherit;cursor:pointer;grid-column:1 / -1;align-items:center;gap:8px;min-width:0;}
.acmg-crit-compact:hover .acmg-compact-code,.acmg-crit-compact:focus .acmg-compact-code{color:var(--acmg-red);}
.acmg-compact-code{display:inline-flex;align-items:center;justify-content:center;min-width:44px;border:1px solid var(--acmg-border);border-radius:999px;background:#fff;font-weight:700;color:var(--acmg-black);font-size:.78rem;line-height:1;padding:4px 8px;flex:0 0 auto;}
.acmg-compact-code[data-group="pathogenic"]{background:var(--acmg-path-bg);border-color:var(--acmg-path-border);color:var(--acmg-path-text);}
.acmg-compact-code[data-group="benign"]{background:var(--acmg-ben-bg);border-color:var(--acmg-ben-border);color:var(--acmg-ben-text);}
.acmg-compact-def{color:var(--acmg-steel);font-size:.86rem;line-height:1.35;min-width:0;overflow-wrap:anywhere;}
.acmg-compact-pill{flex:0 0 auto;}
.acmg-app.acmg-dense-mode .acmg-crit{display:block;padding:9px 0 9px 10px;}
.acmg-app.acmg-dense-mode .acmg-crit-compact{display:flex;}
.acmg-app.acmg-dense-mode .acmg-crit-main,.acmg-app.acmg-dense-mode .acmg-crit-controls,.acmg-app.acmg-dense-mode .acmg-crit-extra{display:none;}
.acmg-app.acmg-dense-mode .acmg-crit.acmg-expanded{display:grid;padding:12px 0 12px 12px;}
.acmg-app.acmg-dense-mode .acmg-crit.acmg-expanded .acmg-crit-compact{display:none;}
.acmg-app.acmg-dense-mode .acmg-crit.acmg-expanded .acmg-crit-main{display:block;}
.acmg-app.acmg-dense-mode .acmg-crit.acmg-expanded .acmg-crit-controls{display:grid;}
.acmg-app.acmg-dense-mode .acmg-crit.acmg-expanded .acmg-crit-extra{display:block;}

.acmg-crit[data-rowstate="complete"]{border-left-color:var(--rs-green);}
.acmg-crit[data-rowstate="noevidence"]{border-left-color:var(--rs-blue);}
.acmg-crit[data-rowstate="incomplete"]{border-left-color:var(--rs-amber);}
.acmg-crit[data-rowstate="conflict"]{border-left-color:var(--rs-red);}
.acmg-crit[data-rowstate="untouched"]{border-left-color:transparent;}
.acmg-crit[data-status="not_applicable"]{opacity:.72;}
.acmg-crit.acmg-hidden{display:none;}
.acmg-crit-main{min-width:0;}
.acmg-crit-id{display:flex;align-items:center;gap:8px;flex-wrap:wrap;}
.acmg-code{display:inline-flex;align-items:center;justify-content:center;min-width:46px;border:1px solid var(--acmg-border);border-radius:999px;background:#fff;font-weight:700;color:var(--acmg-black);font-size:.78rem;letter-spacing:.01em;line-height:1;padding:4px 8px;}
.acmg-code[data-group="pathogenic"]{background:var(--acmg-path-bg);border-color:var(--acmg-path-border);color:var(--acmg-path-text);}
.acmg-code[data-group="benign"]{background:var(--acmg-ben-bg);border-color:var(--acmg-ben-border);color:var(--acmg-ben-text);}
.acmg-tag{font-size:.68rem;text-transform:uppercase;letter-spacing:.04em;color:var(--acmg-steel);border:1px solid var(--acmg-border);border-radius:3px;padding:1px 5px;}
.acmg-tag-note{color:var(--acmg-red);border-color:rgba(229,38,31,.4);}
.acmg-tag-dep{color:var(--acmg-warn);border-color:#ead9b0;}
.acmg-tag-mod{color:var(--acmg-warn);background:var(--acmg-warn-bg);border-color:#e0c98f;font-weight:600;}
.acmg-crit-def{font-size:.85rem;color:var(--acmg-steel);line-height:1.4;margin:5px 0 0;}
.acmg-crit-controls{display:grid;grid-template-columns:repeat(3,minmax(120px,150px));gap:8px;}
.acmg-crit-statusline{grid-column:1 / -1;margin-bottom:2px;}
.acmg-rowpill{display:inline-flex;align-items:center;gap:6px;font-size:.72rem;font-weight:600;padding:3px 9px;border-radius:4px;border:1px solid var(--acmg-border);}
.acmg-rowpill-glyph{font-weight:700;font-size:.82rem;line-height:1;}
.acmg-rowpill[data-state="complete"]{color:#2f7d4f;background:#eef7f1;border-color:#bfe0cb;}
.acmg-rowpill[data-state="noevidence"]{color:#2c5f8a;background:#eef3f8;border-color:#c3d6e6;}
.acmg-rowpill[data-state="incomplete"]{color:#8a5a00;background:#fbf4e6;border-color:#e0c98f;}
.acmg-rowpill[data-state="conflict"]{color:#a01b16;background:#fdeceb;border-color:#f3c4c1;}
.acmg-rowpill[data-state="untouched"]{color:#5c5a5a;background:#fff;border-color:#dcdcdc;}
.acmg-crit-controls label{display:flex;flex-direction:column;gap:3px;font-size:.7rem;color:var(--acmg-steel);text-transform:uppercase;letter-spacing:.03em;}
.acmg-crit-controls select{height:34px;border:1px solid var(--acmg-border);border-radius:5px;padding:0 8px;font-size:.84rem;color:var(--acmg-black);background:var(--acmg-surface);outline:none;}
.acmg-crit-controls select:focus{border-color:var(--acmg-red);}
.acmg-crit-controls select:disabled{color:var(--acmg-steel);background:var(--acmg-soft);cursor:not-allowed;}
.acmg-crit[data-mod="1"] .acmg-crit-controls select[data-field="strength"]{border-color:#e0c98f;background:var(--acmg-warn-bg);color:var(--acmg-warn);font-weight:600;}
.acmg-crit-extra{grid-column:1 / -1;}
.acmg-disclosure{border:none;background:none;color:var(--acmg-steel);font:inherit;font-size:.8rem;cursor:pointer;padding:2px 0;text-decoration:underline;text-underline-offset:2px;}
.acmg-disclosure:hover{color:var(--acmg-red);}
.acmg-disclosure[data-flag="1"]::after{content:" • incomplete";color:var(--acmg-warn);text-decoration:none;}
.acmg-detail{margin-top:10px;padding:12px 14px;background:var(--acmg-soft);border:1px solid var(--acmg-border);border-radius:6px;}
.acmg-detail[hidden]{display:none;}
.acmg-caveats{margin:0 0 10px;padding:0;list-style:none;display:grid;gap:6px;}
.acmg-caveats li{display:flex;gap:8px;align-items:flex-start;font-size:.83rem;color:var(--acmg-black);line-height:1.35;}
.acmg-caveats input{margin-top:2px;width:16px;height:16px;flex:0 0 auto;}
.acmg-notes-label{display:block;font-size:.72rem;text-transform:uppercase;letter-spacing:.03em;color:var(--acmg-steel);margin-bottom:4px;}
.acmg-detail textarea{width:100%;min-height:60px;border:1px solid var(--acmg-border);border-radius:5px;padding:8px 10px;font:inherit;font-size:.86rem;color:var(--acmg-black);background:var(--acmg-surface);resize:vertical;outline:none;}
.acmg-detail textarea:focus{border-color:var(--acmg-red);}


/* provenance metadata */
.acmg-provenance{margin-top:18px;border:1px solid var(--acmg-border);border-left:4px solid var(--acmg-red);border-radius:6px;background:#fff;padding:0;}
.acmg-provenance summary{cursor:pointer;padding:12px 14px;font-weight:700;color:var(--acmg-black);list-style:none;}
.acmg-provenance summary::-webkit-details-marker{display:none;}
.acmg-provenance summary::after{content:"+";float:right;color:var(--acmg-red);font-weight:700;}
.acmg-provenance[open] summary{border-bottom:1px solid var(--acmg-border);}
.acmg-provenance[open] summary::after{content:"−";}
.acmg-provenance>.acmg-section-note,.acmg-provenance .acmg-provenance-import,.acmg-provenance .acmg-prov-group{padding-left:14px;padding-right:14px;}
.acmg-provenance a{color:var(--acmg-red);text-decoration:none;}
.acmg-provenance a:hover{text-decoration:underline;}
.acmg-provenance-import{margin:10px 0 16px;}
.acmg-provenance textarea{width:100%;min-height:86px;border:1px solid var(--acmg-border);border-radius:5px;padding:8px 10px;font:inherit;font-size:.86rem;color:var(--acmg-black);background:var(--acmg-surface);resize:vertical;outline:none;}
.acmg-provenance textarea:focus{border-color:var(--acmg-red);}
.acmg-prov-actions{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-top:8px;}
.acmg-prov-status{font-size:.78rem;color:var(--acmg-steel);}
.acmg-prov-group{margin:16px 0;}
.acmg-prov-group:last-child{padding-bottom:14px;}
.acmg-provenance .acmg-field>span{white-space:normal;overflow-wrap:anywhere;line-height:1.25;}
.acmg-rep-table td{overflow-wrap:anywhere;word-break:normal;}

/* report */
.acmg-report{margin-top:34px;border-top:2px solid var(--acmg-black);padding-top:16px;}
.acmg-export-cta{display:flex;justify-content:space-between;align-items:center;gap:18px;flex-wrap:wrap;padding:16px 18px;border:1px solid var(--acmg-border);border-left:4px solid var(--acmg-red);border-radius:6px;background:var(--acmg-soft);margin:22px 0;}
.acmg-export-copy h2{margin:0;}
.acmg-export-copy p{margin:.2rem 0 0;color:var(--acmg-steel);font-size:.88rem;max-width:34rem;}
.acmg-export{display:flex;gap:10px;flex-wrap:wrap;align-items:center;}
.acmg-button-secondary{display:inline-flex;align-items:center;justify-content:center;padding:11px 16px;border:1px solid var(--acmg-border);border-radius:5px;background:var(--acmg-surface);color:var(--acmg-black);font-size:15px;line-height:1;cursor:pointer;}
.acmg-button-secondary:hover{border-color:var(--acmg-red);color:var(--acmg-red);}
.acmg-rep-stamp{border:1px solid var(--acmg-border);border-left:4px solid var(--acmg-red);border-radius:6px;padding:14px 16px;margin:0 0 18px;background:var(--acmg-surface);}
.acmg-rep-stamp h3{margin:0 0 8px;font-size:1rem;color:var(--acmg-black);}
.acmg-rep-stamp .acmg-verdict{margin-bottom:4px;}
.acmg-rep-scoreboard{border:1px solid var(--acmg-border);border-radius:6px;background:var(--acmg-surface);overflow:hidden;margin:0 0 18px;}
.acmg-rep-score-cells{display:grid;grid-template-columns:repeat(3,minmax(0,1fr)) repeat(2,minmax(0,1.6fr));}
.acmg-rep-score-cell{padding:12px 14px;border-left:1px solid var(--acmg-border);display:flex;flex-direction:column;gap:3px;}
.acmg-rep-score-cell:first-child{border-left:none;}
.acmg-rep-score-val{font-size:1.42rem;font-weight:700;color:var(--acmg-black);line-height:1;}
.acmg-rep-score-lab{font-size:.72rem;color:var(--acmg-steel);text-transform:uppercase;letter-spacing:.04em;}
.acmg-rep-score-completeness{padding:10px 14px;border-top:1px solid var(--acmg-border);font-size:.78rem;color:var(--acmg-steel);}
.acmg-rep-score-completeness .acmg-rep-comp-pills{margin-top:7px;}
.acmg-rep-block{margin:0 0 20px;}
.acmg-rep-block h3{font-size:.78rem;text-transform:uppercase;letter-spacing:.06em;color:var(--acmg-steel);margin:0 0 8px;border-bottom:1px solid var(--acmg-border);padding-bottom:5px;}
.acmg-rep-table{width:100%;border-collapse:collapse;}
.acmg-rep-table th,.acmg-rep-table td{border:1px solid var(--acmg-border);padding:7px 9px;text-align:left;vertical-align:top;font-size:.82rem;line-height:1.35;}
.acmg-rep-table th{background:var(--acmg-soft);color:var(--acmg-black);font-weight:600;}
.acmg-rep-criteria-table{table-layout:fixed;}
.acmg-rep-criteria-table th:nth-child(1),.acmg-rep-criteria-table td:nth-child(1),
.acmg-rep-criteria-table th:nth-child(2),.acmg-rep-criteria-table td:nth-child(2),
.acmg-rep-criteria-table th:nth-child(3),.acmg-rep-criteria-table td:nth-child(3),
.acmg-rep-criteria-table th:nth-child(4),.acmg-rep-criteria-table td:nth-child(4),
.acmg-rep-criteria-table th:nth-child(5),.acmg-rep-criteria-table td:nth-child(5){width:12%;}
.acmg-rep-criteria-table th:nth-child(6),.acmg-rep-criteria-table td:nth-child(6){width:40%;}
.acmg-rep-criteria-table td{overflow-wrap:anywhere;}
.acmg-rep-kv td:first-child{width:34%;font-weight:600;color:var(--acmg-black);background:#fafafa;}
.acmg-rep-list{margin:0;padding-left:1.15rem;}
.acmg-rep-list li{font-size:.85rem;line-height:1.45;margin-bottom:4px;}
.acmg-rep-list.bad li{color:var(--acmg-red-dark);}
.acmg-rep-list.warn li{color:var(--acmg-warn);}
.acmg-rep-empty{color:var(--acmg-steel);font-size:.85rem;}
.acmg-rep-gsv-img{display:block;width:100%;max-width:920px;height:auto;border:1px solid var(--acmg-border);border-radius:6px;background:#fff;margin-top:8px;}
.acmg-rep-gsv-meta{margin-bottom:8px;}
.acmg-rep-gsv-legend{display:flex;flex-wrap:wrap;gap:8px 14px;margin-top:8px;color:var(--acmg-steel);font-size:.76rem;}
.acmg-rep-gsv-li{display:inline-flex;align-items:center;gap:6px;}
.acmg-rep-gsv-sw{display:inline-block;width:16px;height:10px;border:1px solid var(--acmg-border);border-radius:2px;}
.acmg-rep-gsv-cds{background:var(--gsv-cds,#2f2f41);}
.acmg-rep-gsv-utr{background:var(--gsv-utr,#b8c4d1);}
.acmg-rep-gsv-hl{background:var(--gsv-hl,#e5261f);opacity:.85;}
.acmg-rep-gsv-line{display:inline-block;width:20px;height:0;border-top:2px solid var(--acmg-steel);}
.acmg-rep-block{border-left:3px solid transparent;padding-left:10px;}
.acmg-rep-block h3{color:var(--acmg-black);}
.acmg-rep-block:nth-of-type(odd){border-left-color:rgba(229,38,31,.18);}
.acmg-rep-block:nth-of-type(even){border-left-color:rgba(47,47,65,.14);}
.acmg-rep-scoreboard{border-top:4px solid var(--acmg-red);}
.acmg-rep-table th{border-top:2px solid rgba(229,38,31,.22);}
.acmg-rep-criteria-table td:first-child strong{color:var(--acmg-red-dark);}
.acmg-explainer{margin-top:34px;border:1px solid var(--acmg-border);border-left:4px solid var(--acmg-red);border-radius:6px;background:#fff;color:var(--acmg-black);padding:0;}
.acmg-explainer summary{cursor:pointer;padding:12px 14px;font-weight:700;color:var(--acmg-black);list-style:none;}
.acmg-explainer summary::-webkit-details-marker{display:none;}
.acmg-explainer summary::after{content:"+";float:right;color:var(--acmg-red);font-weight:700;}
.acmg-explainer[open] summary{border-bottom:1px solid var(--acmg-border);}
.acmg-explainer[open] summary::after{content:"−";}
.acmg-explainer-body{padding:14px;}
.acmg-explainer p{color:var(--acmg-steel);font-size:.92rem;line-height:1.6;max-width:62rem;margin:0 0 .9rem;}
.acmg-explainer p:last-child{margin-bottom:0;}
.acmg-feedback{margin-top:26px;}
.acmg-feedback p{color:var(--acmg-steel);font-size:.92rem;line-height:1.6;max-width:62rem;margin:.3rem 0 0;}
.acmg-feedback a{color:var(--acmg-red);text-decoration:none;}
.acmg-feedback a:hover{text-decoration:underline;}
.acmg-resources{margin-top:26px;border-top:1px solid var(--acmg-border);padding-top:18px;}
.acmg-resources p{color:var(--acmg-steel);font-size:.86rem;line-height:1.5;max-width:62rem;margin:.3rem 0 12px;}
.acmg-resource-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;max-width:62rem;}
.acmg-resource-grid a{display:block;border:1px solid var(--acmg-border);border-radius:5px;background:#fff;color:var(--acmg-black);font-size:.82rem;font-weight:600;text-decoration:none;padding:8px 10px;overflow-wrap:anywhere;}
.acmg-resource-grid a:hover{border-color:var(--acmg-red);color:var(--acmg-red);}
.acmg-resource-grid a:focus-visible{outline:3px solid rgba(229,38,31,.28);outline-offset:2px;border-color:var(--acmg-red);}

.acmg-references{margin-top:26px;}
.acmg-ref-list{margin:.4rem 0 0;padding-left:1.3rem;}
.acmg-ref-list li{font-size:.8rem;line-height:1.5;color:var(--acmg-steel);margin-bottom:.6rem;}
.acmg-ref-list a{color:var(--acmg-steel);text-decoration:underline;text-underline-offset:2px;}
.acmg-ref-list a:hover{color:var(--acmg-red);}
.acmg-ref-note{font-size:.78rem;color:var(--acmg-steel);margin:.6rem 0 0;max-width:62rem;}
.acmg-footer-text{margin-top:28px;padding-top:18px;border-top:1px solid var(--acmg-border);color:var(--acmg-steel);font-size:.74rem;line-height:1.5;}
.acmg-footer-text a{color:var(--acmg-steel);text-decoration:underline;text-underline-offset:2px;}
.acmg-footer-text a:hover{color:var(--acmg-red);}

@media (max-width:980px){
  .acmg-grid{grid-template-columns:repeat(2,minmax(0,1fr));}
  .acmg-score-cells{grid-template-columns:repeat(3,minmax(0,1fr));}
  .acmg-rep-score-cells{grid-template-columns:repeat(3,minmax(0,1fr));}
  .acmg-score-cell.acmg-score-wide{border-top:1px solid var(--acmg-border);}
}
@media (max-width:760px){
  .acmg-resource-grid{grid-template-columns:repeat(2,minmax(0,1fr));}
  .acmg-scoreboard{position:static;}
  .acmg-crit{grid-template-columns:1fr;}
  .acmg-crit-controls{grid-template-columns:1fr 1fr;}
  .acmg-export-cta{flex-direction:column;align-items:flex-start;}
}
@media (max-width:560px){
  .acmg-resource-grid{grid-template-columns:1fr;}
  .acmg-grid{grid-template-columns:1fr;}
  .acmg-field-wide{grid-column:auto;}
  .acmg-score-cells{grid-template-columns:1fr 1fr;}
  .acmg-rep-score-cells{grid-template-columns:1fr 1fr;}
  .acmg-crit-controls{grid-template-columns:1fr;}
  .acmg-export .button-link,.acmg-export .acmg-button-secondary{flex:1 1 auto;}
}
@media print{
  .header,.footer,.sub-footer,.acmg-no-print{display:none!important;}
  .acmg-app{--acmg-shadow:none;}
  .acmg-report{border-top:none;margin-top:0;padding-top:0;}
  .acmg-rep-block,.acmg-rep-stamp{break-inside:avoid;}
  .acmg-rep-table th{background:#f2f2f2!important;-webkit-print-color-adjust:exact;print-color-adjust:exact;}
}
</style>

<script>
(function (root) {
  'use strict';

  var defaultProxyBaseUrl = 'https://genebe-proxy.cold-leaf-e00d.workers.dev/';

  var CRITERIA = [
    ['pathogenic', 'PVS1', 'very_strong'],
    ['pathogenic', 'PS1', 'strong'],
    ['pathogenic', 'PS2', 'strong'],
    ['pathogenic', 'PS3', 'strong'],
    ['pathogenic', 'PS4', 'strong'],
    ['pathogenic', 'PM1', 'moderate'],
    ['pathogenic', 'PM2', 'moderate'],
    ['pathogenic', 'PM3', 'moderate'],
    ['pathogenic', 'PM4', 'moderate'],
    ['pathogenic', 'PM5', 'moderate'],
    ['pathogenic', 'PM6', 'moderate'],
    ['pathogenic', 'PP1', 'supporting'],
    ['pathogenic', 'PP2', 'supporting'],
    ['pathogenic', 'PP3', 'supporting'],
    ['pathogenic', 'PP4', 'supporting'],
    ['pathogenic', 'PP5', 'supporting'],
    ['benign', 'BA1', 'standalone'],
    ['benign', 'BS1', 'strong'],
    ['benign', 'BS2', 'strong'],
    ['benign', 'BS3', 'strong'],
    ['benign', 'BS4', 'strong'],
    ['benign', 'BP1', 'supporting'],
    ['benign', 'BP2', 'supporting'],
    ['benign', 'BP3', 'supporting'],
    ['benign', 'BP4', 'supporting'],
    ['benign', 'BP5', 'supporting'],
    ['benign', 'BP6', 'supporting'],
    ['benign', 'BP7', 'supporting']
  ];

  var POINTS = {
    pathogenic: {
      supporting: 1,
      moderate: 2,
      strong: 4,
      very_strong: 8
    },
    benign: {
      supporting: -1,
      moderate: -2,
      strong: -4,
      standalone: -8
    }
  };

  var STRENGTH_SUFFIX = {
    supporting: 'Supporting',
    moderate: 'Moderate',
    strong: 'Strong',
    very_strong: 'VeryStrong',
    standalone: 'StandAlone'
  };

  var KNOWN_CRITERIA = {};
  CRITERIA.forEach(function (row) {
    KNOWN_CRITERIA[row[1]] = {
      group: row[0],
      code: row[1],
      default_strength: row[2]
    };
  });

  function cleanChr(x) {
    return String(x || '').trim().replace(/^chr/i, '');
  }

  function cleanAllele(x) {
    return String(x || '').trim().toUpperCase();
  }

  function isPresent(x) {
    return x !== undefined && x !== null && x !== '';
  }

  function firstDefined() {
    for (var i = 0; i < arguments.length; i++) {
      if (isPresent(arguments[i])) return arguments[i];
    }
    return '';
  }

  function firstDefinedNullable() {
    for (var i = 0; i < arguments.length; i++) {
      if (isPresent(arguments[i])) return arguments[i];
    }
    return null;
  }

  function buildUrl(baseUrl, params) {
    var query = Object.keys(params)
      .map(function (key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
      })
      .join('&');

    return String(baseUrl || defaultProxyBaseUrl) + '?' + query;
  }

  function genomeToValidatorBuild(genome) {
    if (genome === 'hg38') return 'GRCh38';
    if (genome === 'hg19') return 'GRCh37';
    return '';
  }

  function validatorBuildToGenome(build) {
    if (build === 'GRCh38') return 'hg38';
    if (build === 'GRCh37') return 'hg19';
    return 'hg38';
  }

  function inferVariantType(ref, alt) {
    ref = String(ref || '');
    alt = String(alt || '');

    if (!ref && !alt) return '';
    if (ref.length === 1 && alt.length === 1) return 'SNV';
    if (ref.length > alt.length && alt.length === 0) return 'Small deletion';
    if (ref.length > alt.length) return 'Small deletion';
    if (alt.length > ref.length) return 'Small insertion';
    if (ref.length === alt.length && ref.length > 1) return 'Indel';

    return 'Indel';
  }

  function normaliseClassification(x) {
    var s = String(x || '').toLowerCase();

    if (s === 'pathogenic') return 'pathogenic';
    if (s === 'likely_pathogenic' || s === 'likely pathogenic') return 'likely_pathogenic';
    if (s === 'uncertain_significance' || s === 'uncertain significance' || s === 'vus') return 'vus';
    if (s === 'likely_benign' || s === 'likely benign') return 'likely_benign';
    if (s === 'benign') return 'benign';

    return '';
  }

  function splitCriteria(x) {
    if (!x) return [];
    if (Array.isArray(x)) return x.map(String).filter(Boolean);

    return String(x)
      .split(',')
      .map(function (s) { return s.trim(); })
      .filter(Boolean);
  }

  function normaliseStrengthName(x) {
    var s = String(x || '').toLowerCase().replace(/[\s-]+/g, '_');

    if (s === 'supporting') return 'supporting';
    if (s === 'moderate') return 'moderate';
    if (s === 'strong') return 'strong';
    if (s === 'verystrong' || s === 'very_strong') return 'very_strong';
    if (s === 'standalone' || s === 'stand_alone') return 'standalone';

    return '';
  }

  function parseCriterionToken(token) {
    var raw = String(token || '').trim();
    var match = raw.match(/^(PVS1|PS[1-4]|PM[1-6]|PP[1-5]|BA1|BS[1-4]|BP[1-7])(?:[_-]?(Supporting|Moderate|Strong|VeryStrong|Very_Strong|StandAlone|Standalone|Stand_Alone))?$/i);

    if (!match) return null;

    var code = match[1].toUpperCase();
    var strength = normaliseStrengthName(match[2] || '');

    if (!KNOWN_CRITERIA[code]) return null;

    return {
      raw: raw,
      code: code,
      suggested_strength: strength,
      source_notation: raw
    };
  }

  function getBestConsequence(v) {
    var consequences = Array.isArray(v.consequences) ? v.consequences : [];

    var maneRefSeq = consequences.find(function (c) {
      return c.mane_select && /^NM_/.test(String(c.transcript || c.feature || ''));
    });

    var maneAny = consequences.find(function (c) {
      return c.mane_select || c.mane_plus;
    });

    var canonical = consequences.find(function (c) {
      return c.canonical === true;
    });

    var proteinCoding = consequences.find(function (c) {
      return c.protein_coding === true;
    });

    return maneRefSeq || maneAny || canonical || proteinCoding || consequences[0] || {};
  }

  function getGeneBeAcmgRecord(v, best) {
    var records = Array.isArray(v.acmg_by_gene) ? v.acmg_by_gene : [];
    if (!records.length) return null;

    var bestGene = firstDefined(best.gene_symbol, v.gene_symbol);
    var bestHgnc = firstDefined(best.gene_hgnc_id, v.hgnc_id);
    var bestTranscript = firstDefined(best.transcript, best.feature, v.transcript);

    var exact = records.find(function (r) {
      return (
        String(r.gene_symbol || '') === String(bestGene || '') &&
        String(r.transcript || '') === String(bestTranscript || '')
      );
    });

    var byGene = records.find(function (r) {
      return String(r.gene_symbol || '') === String(bestGene || '');
    });

    var byHgnc = records.find(function (r) {
      return String(r.hgnc_id || '') === String(bestHgnc || '');
    });

    return exact || byGene || byHgnc || records[0];
  }

  function getSuggestedCriteria(v, geneAcmg) {
    var all = [];

    splitCriteria(v.acmg_criteria).forEach(function (x) {
      all.push({ token: x, source: 'GeneBe variant acmg_criteria' });
    });

    if (geneAcmg && geneAcmg.criteria) {
      splitCriteria(geneAcmg.criteria).forEach(function (x) {
        all.push({ token: x, source: 'GeneBe selected acmg_by_gene.criteria' });
      });
    }

    var byCode = {};

    all.forEach(function (item) {
      var parsed = parseCriterionToken(item.token);
      if (!parsed) return;

      if (!byCode[parsed.code]) {
        byCode[parsed.code] = {
          code: parsed.code,
          suggested_strength: parsed.suggested_strength,
          source_tokens: [],
          sources: []
        };
      }

      if (parsed.suggested_strength) {
        byCode[parsed.code].suggested_strength = parsed.suggested_strength;
      }

      byCode[parsed.code].source_tokens.push(item.token);
      byCode[parsed.code].sources.push(item.source);
    });

    return byCode;
  }

  function criterionNotation(code, defaultStrength, appliedStrength) {
    if (!appliedStrength || appliedStrength === defaultStrength) return code;
    return code + '_' + STRENGTH_SUFFIX[appliedStrength];
  }

  function criterionPoints(group, status, strength) {
    if (status !== 'accepted') return 0;
    return POINTS[group] && POINTS[group][strength] ? POINTS[group][strength] : 0;
  }

  function rowStateFor(status) {
    if (status === 'accepted') return 'complete';
    if (status === 'rejected' || status === 'not_applicable') return 'noevidence';
    if (status === 'needs_second_review') return 'incomplete';
    return 'untouched';
  }

  function compactEvidence(v, queryParams) {
    var best = getBestConsequence(v);
    var geneAcmg = getGeneBeAcmgRecord(v, best);

    return {
      source: 'GeneBe public API via Switzerland Omics proxy',
      query: {
        chr: queryParams.chr,
        pos: queryParams.pos,
        ref: queryParams.ref,
        alt: queryParams.alt,
        genome: queryParams.genome
      },
      selected_transcript_or_consequence: best,
      selected_acmg_by_gene: geneAcmg,
      variant_identity: {
        chr: firstDefinedNullable(v.chr, queryParams.chr),
        pos: firstDefinedNullable(v.pos, queryParams.pos),
        ref: firstDefinedNullable(v.ref, queryParams.ref),
        alt: firstDefinedNullable(v.alt, queryParams.alt),
        gene_symbol: firstDefinedNullable(v.gene_symbol, best.gene_symbol, geneAcmg && geneAcmg.gene_symbol),
        hgnc_id: firstDefinedNullable(v.hgnc_id, best.gene_hgnc_id, geneAcmg && geneAcmg.hgnc_id),
        transcript: firstDefinedNullable(v.transcript, best.transcript, best.feature, geneAcmg && geneAcmg.transcript),
        hgvs_c: firstDefinedNullable(v.hgvs_c, best.hgvs_c, geneAcmg && geneAcmg.hgvs_c),
        hgvs_p: firstDefinedNullable(v.hgvs_p, best.hgvs_p, geneAcmg && geneAcmg.hgvs_p),
        consequence_terms: firstDefinedNullable(v.effect, best.consequences, geneAcmg && geneAcmg.effects)
      },
      genebe_acmg: {
        acmg_score: firstDefinedNullable(v.acmg_score, geneAcmg && geneAcmg.score),
        acmg_classification: firstDefinedNullable(v.acmg_classification, geneAcmg && geneAcmg.verdict),
        acmg_criteria: firstDefinedNullable(v.acmg_criteria, geneAcmg && geneAcmg.criteria),
        acmg_by_gene: Array.isArray(v.acmg_by_gene) ? v.acmg_by_gene : []
      },
      population: {
        frequency_reference_population: firstDefinedNullable(v.frequency_reference_population),
        allele_count_reference_population: firstDefinedNullable(v.allele_count_reference_population),
        hom_count_reference_population: firstDefinedNullable(v.hom_count_reference_population),
        gnomad_exomes_af: firstDefinedNullable(v.gnomad_exomes_af),
        gnomad_genomes_af: firstDefinedNullable(v.gnomad_genomes_af),
        gnomad_exomes_ac: firstDefinedNullable(v.gnomad_exomes_ac),
        gnomad_genomes_ac: firstDefinedNullable(v.gnomad_genomes_ac),
        gnomad_exomes_an: firstDefinedNullable(v.gnomad_exomes_an),
        gnomad_genomes_an: firstDefinedNullable(v.gnomad_genomes_an),
        gnomad_exomes_homalt: firstDefinedNullable(v.gnomad_exomes_homalt),
        gnomad_genomes_homalt: firstDefinedNullable(v.gnomad_genomes_homalt)
      },
      computational: {
        computational_prediction_selected: firstDefinedNullable(v.computational_prediction_selected),
        computational_score_selected: firstDefinedNullable(v.computational_score_selected),
        computational_source_selected: firstDefinedNullable(v.computational_source_selected),
        splice_prediction_selected: firstDefinedNullable(v.splice_prediction_selected),
        splice_score_selected: firstDefinedNullable(v.splice_score_selected),
        splice_source_selected: firstDefinedNullable(v.splice_source_selected),
        revel_score: firstDefinedNullable(v.revel_score),
        revel_prediction: firstDefinedNullable(v.revel_prediction),
        alphamissense_score: firstDefinedNullable(v.alphamissense_score),
        alphamissense_prediction: firstDefinedNullable(v.alphamissense_prediction),
        cadd_raw_score: firstDefinedNullable(v.cadd_raw_score),
        cadd_phred: firstDefinedNullable(v.cadd_phred),
        bayesdelnoaf_score: firstDefinedNullable(v.bayesdelnoaf_score),
        bayesdelnoaf_prediction: firstDefinedNullable(v.bayesdelnoaf_prediction),
        phylop100way_score: firstDefinedNullable(v.phylop100way_score),
        phylop100way_prediction: firstDefinedNullable(v.phylop100way_prediction),
        spliceai_max_score: firstDefinedNullable(v.spliceai_max_score),
        spliceai_max_prediction: firstDefinedNullable(v.spliceai_max_prediction)
      },
      clinvar: {
        disease: firstDefinedNullable(v.clinvar_disease),
        classification: firstDefinedNullable(v.clinvar_classification),
        review_status: firstDefinedNullable(v.clinvar_review_status),
        submissions_summary: firstDefinedNullable(v.clinvar_submissions_summary)
      },
      consequences_count: Array.isArray(v.consequences) ? v.consequences.length : 0
    };
  }

  function buildCriterionRows(v, importMode) {
    var best = getBestConsequence(v);
    var geneAcmg = getGeneBeAcmgRecord(v, best);
    var suggestedByCode = getSuggestedCriteria(v, geneAcmg);

    return CRITERIA.map(function (c) {
      var group = c[0];
      var code = c[1];
      var defaultStrength = c[2];
      var suggestion = suggestedByCode[code] || null;

      var status = 'not_assessed';
      var evidenceStatus = 'not_assessed';
      var caveatStatus = 'not_assessed';
      var appliedStrength = defaultStrength;
      var notes = '';

      if (suggestion) {
        var accepted = importMode === 'accepted';

        status = accepted ? 'accepted' : 'needs_second_review';
        evidenceStatus = accepted ? 'present' : 'requires_second_review';
        caveatStatus = accepted ? 'not_applicable' : 'not_assessed';

        if (suggestion.suggested_strength) {
          appliedStrength = suggestion.suggested_strength;
        }

        notes =
          'GeneBe suggested ' + code + ' as ACMG evidence. ' +
          'Source token(s): ' + suggestion.source_tokens.join(', ') + '. ' +
          'GeneBe classification: ' + String(firstDefined(v.acmg_classification, geneAcmg && geneAcmg.verdict, 'not provided')) + '. ' +
          'GeneBe score: ' + String(firstDefined(v.acmg_score, geneAcmg && geneAcmg.score, 'not provided')) + '. ' +
          'Imported from GeneBe for ACMG Validator pre-review.';
      }

      var notation = criterionNotation(code, defaultStrength, appliedStrength);

      return {
        criterion: code,
        notation: notation,
        group: group,
        status: status,
        default_strength: defaultStrength,
        applied_strength: appliedStrength,
        strength_modified: appliedStrength !== defaultStrength,
        points: criterionPoints(group, status, appliedStrength),
        evidence_status: evidenceStatus,
        caveat_status: caveatStatus,
        row_state: rowStateFor(status),
        notes: notes
      };
    });
  }

  function buildVariantObject(payload, queryParams, importMode) {
    var v = payload && payload.variants && payload.variants[0] ? payload.variants[0] : {};
    var best = getBestConsequence(v);
    var geneAcmg = getGeneBeAcmgRecord(v, best);
    var evidence = compactEvidence(v, queryParams);
    var criteria = buildCriterionRows(v, importMode);

    var gene = firstDefined(v.gene_symbol, best.gene_symbol, geneAcmg && geneAcmg.gene_symbol, '');
    var transcript = firstDefined(v.transcript, best.transcript, best.feature, geneAcmg && geneAcmg.transcript, '');
    var hgvsC = firstDefined(v.hgvs_c, best.hgvs_c, geneAcmg && geneAcmg.hgvs_c, '');
    var hgvsP = firstDefined(v.hgvs_p, best.hgvs_p, geneAcmg && geneAcmg.hgvs_p, '');

    var chr = firstDefined(v.chr, queryParams.chr, '');
    var pos = firstDefined(v.pos, queryParams.pos, '');
    var ref = firstDefined(v.ref, queryParams.ref, '');
    var alt = firstDefined(v.alt, queryParams.alt, '');
    var coordinate = chr && pos ? 'chr' + chr + ':' + pos + ':' + ref + '>' + alt : '';

    var disease = firstDefined(v.clinvar_disease, '');
    var inheritance = firstDefined(geneAcmg && geneAcmg.inheritance_mode, '');

    var pathogenicPoints = 0;
    var benignPoints = 0;

    criteria.forEach(function (row) {
      if (row.points > 0) pathogenicPoints += row.points;
      if (row.points < 0) benignPoints += row.points;
    });

    return {
      schema: 'switzerlandomics.acmg-validator.v1',
      generated_at: new Date().toISOString(),
      guideline_basis: 'ACMG/AMP + Tavtigian point system',
      review: {
        reviewer: '',
        institution: '',
        date: new Date().toISOString().slice(0, 10),
        signoff: false
      },
      variant: {
        gene: gene,
        transcript: transcript,
        hgvs_c: hgvsC,
        hgvs_p: hgvsP,
        genome_build: genomeToValidatorBuild(queryParams.genome),
        coordinate: coordinate,
        ref: ref,
        alt: alt,
        variant_type: inferVariantType(ref, alt),
        zygosity: ''
      },
      case_context: {
        disease: disease,
        inheritance: inheritance,
        phenotype: firstDefined(v.phenotype_combined, '')
      },
      criteria: criteria,
      validation: {
        pathogenic_points: pathogenicPoints,
        benign_points: benignPoints,
        total_points: pathogenicPoints + benignPoints,
        point_based_category: '',
        entered_classification: importMode === 'accepted'
          ? normaliseClassification(firstDefined(v.acmg_classification, geneAcmg && geneAcmg.verdict))
          : '',
        verdict: '',
        conflicts: [],
        warnings: [],
        missing_evidence: [],
        external_genebe_classification: normaliseClassification(firstDefined(v.acmg_classification, geneAcmg && geneAcmg.verdict)),
        external_genebe_score: firstDefinedNullable(v.acmg_score, geneAcmg && geneAcmg.score),
        external_genebe_criteria: Object.keys(getSuggestedCriteria(v, geneAcmg)),
        import_mode: importMode
      },
      evidence_summary: {
        source_basis: 'GeneBe public API result converted into ACMG Validator pre-review JSON.',
        genebe_summary: evidence
      },
      external_evidence: {
        genebe_summary: evidence,
        genebe_raw: payload
      }
    };
  }

  function buildValidatorJson(payload, queryParams, importMode, options) {
    options = options || {};
    var proxyBaseUrl = options.proxyBaseUrl || defaultProxyBaseUrl;
    var variantObj = buildVariantObject(payload, queryParams, importMode);
    var variant = variantObj.variant;
    var context = variantObj.case_context;

    return {
      schema: 'switzerlandomics.acmg-validator.case.v1',
      generated_at: new Date().toISOString(),
      review: {
        reviewer: '',
        institution: '',
        date: new Date().toISOString().slice(0, 10),
        signoff: false
      },
      case_context: {
        disease: context.disease || '',
        inheritance: context.inheritance || '',
        phenotype: context.phenotype || ''
      },
      provenance: {
        values: {},
        extra: {
          external_annotation_source: 'GeneBe public API',
          external_annotation_request_url: buildUrl(proxyBaseUrl, queryParams),
          external_annotation_import_mode: importMode,
          external_annotation_converter: 'assets/genebe_api/genebe_to_acmg_validator.js',
          external_annotation_converter_schema: 'switzerlandomics.genebe-to-acmg-validator.v1'
        }
      },
      genotype_review: {
        gene: variant.gene || '',
        disease: context.disease || '',
        inheritance: context.inheritance || '',
        phase: '',
        combination: '',
        phase_evidence: '',
        conclusion: '',
        phenotype_fit: '',
        uncertainty: ''
      },
      variants: [variantObj]
    };
  }

  function buildSummary(payload, validatorObj, params, importMode) {
    var v = payload && payload.variants && payload.variants[0] ? payload.variants[0] : {};
    var variantObj = validatorObj.variants[0];
    var suggested = variantObj.validation.external_genebe_criteria || [];
    var touched = variantObj.criteria.filter(function (row) {
      return row.status !== 'not_assessed';
    });

    return {
      query: params,
      import_mode: importMode,
      variant: variantObj.variant,
      gene: variantObj.variant.gene,
      transcript: variantObj.variant.transcript,
      hgvs_c: variantObj.variant.hgvs_c,
      hgvs_p: variantObj.variant.hgvs_p,
      genebe_classification: firstDefinedNullable(v.acmg_classification),
      genebe_score: firstDefinedNullable(v.acmg_score),
      genebe_criteria: suggested,
      criteria_written_to_acmg_validator: touched.map(function (row) {
        return {
          criterion: row.criterion,
          notation: row.notation,
          status: row.status,
          evidence_status: row.evidence_status,
          applied_strength: row.applied_strength,
          points: row.points
        };
      }),
      raw_variant_count: payload && Array.isArray(payload.variants) ? payload.variants.length : 0,
      raw_consequence_count: v && Array.isArray(v.consequences) ? v.consequences.length : 0
    };
  }

  function fileStem(params) {
    return [
      'genebe',
      params.chr || 'chr',
      params.pos || 'pos',
      params.ref || 'ref',
      params.alt || 'del',
      params.genome || 'genome'
    ].join('_').replace(/[^a-z0-9._-]+/gi, '_');
  }

  async function fetchJson(params, options) {
    options = options || {};
    var url = buildUrl(options.proxyBaseUrl || defaultProxyBaseUrl, params);
    var response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });
    var text = await response.text();
    var payload;

    try {
      payload = JSON.parse(text);
    } catch (err) {
      var parseError = new Error('GeneBe response was not valid JSON.');
      parseError.response = response;
      parseError.text = text;
      throw parseError;
    }

    if (!response.ok) {
      var httpError = new Error('GeneBe request failed with HTTP ' + response.status + '.');
      httpError.response = response;
      httpError.payload = payload;
      throw httpError;
    }

    return {
      url: url,
      response: response,
      payload: payload,
      text: text
    };
  }

  async function fetchAndConvert(params, importMode, options) {
    var result = await fetchJson(params, options);

    if (!result.payload.variants || !result.payload.variants.length) {
      var emptyError = new Error('No GeneBe variant annotation returned.');
      emptyError.payload = result.payload;
      emptyError.url = result.url;
      throw emptyError;
    }

    var validatorJson = buildValidatorJson(result.payload, params, importMode, options);
    var summary = buildSummary(result.payload, validatorJson, params, importMode);

    return {
      url: result.url,
      response: result.response,
      payload: result.payload,
      validatorJson: validatorJson,
      summary: summary,
      rawFilename: 'raw_' + fileStem(params) + '.json',
      validatorFilename: 'acmg_validator_' + fileStem(params) + '.json'
    };
  }

  root.SwitzerlandOmicsGeneBe = {
    defaultProxyBaseUrl: defaultProxyBaseUrl,
    criteria: CRITERIA.slice(),
    cleanChr: cleanChr,
    cleanAllele: cleanAllele,
    buildUrl: buildUrl,
    fileStem: fileStem,
    fetchJson: fetchJson,
    fetchAndConvert: fetchAndConvert,
    buildValidatorJson: buildValidatorJson,
    buildSummary: buildSummary,
    genomeToValidatorBuild: genomeToValidatorBuild,
    validatorBuildToGenome: validatorBuildToGenome,
    inferVariantType: inferVariantType
  };
})(window);

</script>

{% raw %}
<script>
(function(){
  'use strict';

  var POINTS = {
    pathogenic: { supporting:1, moderate:2, strong:4, very_strong:8 },
    benign:     { supporting:-1, moderate:-2, strong:-4, standalone:-8 }
  };

  var STRENGTH_LABEL = {
    supporting:'Supporting', moderate:'Moderate', strong:'Strong',
    very_strong:'Very strong', standalone:'Stand-alone'
  };
  var STRENGTH_SUFFIX = {
    supporting:'Supporting', moderate:'Moderate', strong:'Strong',
    very_strong:'VeryStrong', standalone:'StandAlone'
  };

  var STATUS_OPTS = [
    ['not_assessed','Not assessed'],
    ['accepted','Accepted'],
    ['rejected','Rejected'],
    ['not_applicable','Not applicable'],
    ['needs_second_review','Needs second review']
  ];
  var EVIDENCE_OPTS = [
    ['not_assessed','Not assessed'],
    ['present','Present'],
    ['absent_after_review','Absent after review'],
    ['not_available','Not available'],
    ['not_applicable','Not applicable'],
    ['conflicting','Conflicting'],
    ['insufficient_quality','Insufficient quality'],
    ['requires_second_review','Requires second review']
  ];
  var CLASS_LABEL = {
    pathogenic:'Pathogenic', likely_pathogenic:'Likely pathogenic',
    vus:'Uncertain significance', likely_benign:'Likely benign', benign:'Benign'
  };

  // evidence-status coupling (fill-only-when-blank; evidence is primary)
  var STATUS_FROM_EVIDENCE = {
    present:'accepted',
    absent_after_review:'rejected',
    not_available:'not_applicable',
    not_applicable:'not_applicable',
    conflicting:'needs_second_review',
    insufficient_quality:'needs_second_review',
    requires_second_review:'needs_second_review'
  };
  var EVIDENCE_FROM_STATUS = {
    accepted:'present',
    rejected:'absent_after_review',
    not_applicable:'not_applicable',
    needs_second_review:'requires_second_review'
  };

  // row-state presentation
  var ROW_GLYPH = { complete:'\u2713', noevidence:'\u2205', incomplete:'!', conflict:'\u2298', untouched:'\u2013' };
  var ROW_LABEL = { complete:'Applied', noevidence:'No contribution', incomplete:'Incomplete', conflict:'Conflict', untouched:'Not assessed' };

  var PVS1_CAV = [
    'Variant is a bona fide null (nonsense, frameshift, canonical \u00b11/2 splice, initiation codon, single/multi-exon deletion)',
    'Loss of function is an established disease mechanism for this gene',
    'Transcript is biologically and clinically relevant (e.g. MANE Select / clinical transcript)',
    'NMD considered: variant not in the 3\u2032-most exon or last 50 bp of the penultimate exon (or NMD-escape assessed)',
    'For splice / large deletion: reading frame and functional-domain impact assessed',
    'No predicted rescue by alternative start or re-initiation',
    'Strength graded per the ClinGen PVS1 decision tree where the null context is not full very-strong'
  ];
  var PM2_CAV = [
    'Population database(s) named (e.g. gnomAD v4, 1000 Genomes)',
    'Ancestry-specific frequencies reviewed, not only global frequency',
    'Read coverage at the site is adequate in the database',
    'Frequency threshold appropriate to disease prevalence and penetrance',
    'Applied at Supporting strength per ClinGen SVI (note if Moderate retained)'
  ];
  var PP3_CAV = [
    'A single calibrated meta-predictor used (e.g. REVEL, BayesDel), not multiple correlated tools',
    'Calibrated threshold matched to the applied strength (e.g. ClinGen SVI / Pejaver 2022)',
    'Not double-counting with PM1, PM5 or PS1',
    'Splice prediction (e.g. SpliceAI) treated separately'
  ];
  var BP4_CAV = [
    'A single calibrated predictor used at the calibrated benign threshold',
    'Not in conflict with splice prediction',
    'Not double-counting with other computational criteria'
  ];
  var BA1_CAV = [
    'Allele frequency exceeds the disease-appropriate stand-alone benign threshold in a well-covered population',
    'Not a recognised low-penetrance or founder exception (ClinGen)',
    'Filtering allele frequency (FAF) considered with adequate coverage'
  ];

  // group, code, default strength, definition, requiresNote, caveats[], deprecated
  var CRITERIA = [
    ['pathogenic','PVS1','very_strong','Null variant in a gene where loss of function is a known disease mechanism.',false,PVS1_CAV,false],
    ['pathogenic','PS1','strong','Same amino-acid change as a previously established pathogenic variant, regardless of nucleotide change.',false,null,false],
    ['pathogenic','PS2','strong','De novo (maternity and paternity confirmed) in a patient with the disease and no family history.',true,null,false],
    ['pathogenic','PS3','strong','Well-established functional studies show a damaging effect.',true,null,false],
    ['pathogenic','PS4','strong','Prevalence in affected individuals significantly increased over controls.',false,null,false],
    ['pathogenic','PM1','moderate','Located in a mutational hot spot or critical, well-established functional domain without benign variation.',false,null,false],
    ['pathogenic','PM2','moderate','Absent, or at extremely low frequency, in population databases.',false,PM2_CAV,false],
    ['pathogenic','PM3','moderate','For recessive disorders, detected in trans with a pathogenic variant.',true,null,false],
    ['pathogenic','PM4','moderate','Protein-length change from in-frame indels or stop-loss in a non-repeat region.',false,null,false],
    ['pathogenic','PM5','moderate','Novel missense change at a residue where a different pathogenic missense change was seen before.',false,null,false],
    ['pathogenic','PM6','moderate','Assumed de novo without confirmation of maternity and paternity.',false,null,false],
    ['pathogenic','PP1','supporting','Co-segregation with disease in multiple affected family members.',true,null,false],
    ['pathogenic','PP2','supporting','Missense in a gene with a low rate of benign missense and where missense is a common mechanism.',false,null,false],
    ['pathogenic','PP3','supporting','Computational evidence supports a deleterious effect (use one calibrated predictor at calibrated thresholds).',false,PP3_CAV,false],
    ['pathogenic','PP4','supporting','Patient phenotype or family history highly specific for a single-gene disease.',true,null,false],
    ['pathogenic','PP5','supporting','Reputable source reports pathogenic but evidence is unavailable.',false,null,true],
    ['benign','BA1','standalone','Allele frequency above the disease-appropriate stand-alone benign threshold in a well-covered population.',false,BA1_CAV,false],
    ['benign','BS1','strong','Allele frequency greater than expected for the disorder.',false,null,false],
    ['benign','BS2','strong','Observed in a healthy adult where full penetrance is expected at an early age.',false,null,false],
    ['benign','BS3','strong','Well-established functional studies show no damaging effect.',true,null,false],
    ['benign','BS4','strong','Lack of segregation in affected family members.',true,null,false],
    ['benign','BP1','supporting','Missense in a gene where only truncating variants cause disease.',false,null,false],
    ['benign','BP2','supporting','Observed in trans with a pathogenic variant in a fully penetrant dominant gene, or in cis with a pathogenic variant.',true,null,false],
    ['benign','BP3','supporting','In-frame indel in a repetitive region without known function.',false,null,false],
    ['benign','BP4','supporting','Computational evidence supports no impact (use one calibrated predictor at calibrated thresholds).',false,BP4_CAV,false],
    ['benign','BP5','supporting','Variant found in a case with an alternate molecular basis for disease.',true,null,false],
    ['benign','BP6','supporting','Reputable source reports benign but evidence is unavailable.',false,null,true],
    ['benign','BP7','supporting','Synonymous variant with no predicted splice impact and not highly conserved.',false,null,false]
  ];

  // state
  var ACMG_VALIDATOR_VERSION = 'v1.0.0';
  var ACMG_VALIDATOR_SOFTWARE = 'ACMG Validator by Switzerland Omics';
  var meta = {};
  var crit = {};
  var defByCode = {};
  CRITERIA.forEach(function(c){
    defByCode[c[1]] = { group:c[0], code:c[1], strength:c[2], def:c[3], requiresNote:c[4], caveats:c[5], deprecated:c[6] };
    crit[c[1]] = { group:c[0], status:'not_assessed', strength:c[2], evidence:'not_assessed', caveats:[], notes:'' };
  });

  var lastJson = '';
  var lastMd = '';
  var lastReportBody = '';
  var filterMode = 'all';
  var criteriaDense = true;
  var activeVariant = 0;
  var variants = [];
  var genotype = {};
  var provenance = { values:{}, extra:{} };
  var MAX_CASE_VARIANTS = 5;
  var appRoot = document.querySelector('.acmg-app');
  if (appRoot) appRoot.classList.add('acmg-dense-mode');

  function emptyCritState(){
    var obj = {};
    CRITERIA.forEach(function(c){
      obj[c[1]] = { group:c[0], status:'not_assessed', strength:c[2], evidence:'not_assessed', caveats:[], notes:'' };
    });
    return obj;
  }
  function cloneCritState(src){
    var obj = {};
    CRITERIA.forEach(function(c){
      var code = c[1], s = src && src[code] ? src[code] : {};
      obj[code] = {
        group:c[0],
        status:s.status || 'not_assessed',
        strength:s.strength || c[2],
        evidence:s.evidence || 'not_assessed',
        caveats:(s.caveats || []).slice(),
        notes:s.notes || ''
      };
    });
    return obj;
  }
  function cloneMetaState(src){
    var obj = {};
    Object.keys(src || {}).forEach(function(k){ obj[k] = src[k]; });
    return obj;
  }
  function ensureVariants(){
    if (!variants.length) variants.push({ meta:cloneMetaState(meta), crit:cloneCritState(crit) });
  }
  function saveActiveVariant(){
    ensureVariants();
    variants[activeVariant] = { meta:cloneMetaState(meta), crit:cloneCritState(crit) };
  }
  function loadVariantState(idx){
    ensureVariants();
    activeVariant = idx;
    meta = cloneMetaState(variants[idx].meta);
    crit = cloneCritState(variants[idx].crit);
    fillMetaFields();
    buildLists();
    applyFilter();
    renderTabs();
    recompute();
  }

  function esc(x){
    return String(x == null ? '' : x).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }
  function opt(list, sel){
    return list.map(function(o){ return '<option value="'+o[0]+'"'+(o[0]===sel?' selected':'')+'>'+esc(o[1])+'</option>'; }).join('');
  }
  function labelOf(list, val){
    for (var i=0;i<list.length;i++){ if (list[i][0]===val) return list[i][1]; }
    return val;
  }

  function allowedStrengths(d){
    if (d.code === 'BA1') return ['standalone'];
    if (d.group === 'pathogenic') return ['supporting','moderate','strong','very_strong'];
    return ['supporting','moderate','strong'];
  }
  function isModified(code){ return crit[code].strength !== defByCode[code].strength; }
  function notation(code){
    var d = defByCode[code], s = crit[code];
    if (s.strength === d.strength) return code;
    return code + '_' + STRENGTH_SUFFIX[s.strength];
  }
  function strengthOptionsHtml(d, sel){
    return allowedStrengths(d).map(function(k){
      var pts = POINTS[d.group][k];
      var lab = STRENGTH_LABEL[k] + ' (' + (pts > 0 ? '+' : '') + pts + ')';
      lab += (k === d.strength) ? ' \u00b7 default' : ' \u00b7 modified';
      return '<option value="'+k+'"'+(k===sel?' selected':'')+'>'+esc(lab)+'</option>';
    }).join('');
  }

  function caveatComplete(code){
    var d = defByCode[code]; var s = crit[code];
    if (!d.caveats) return true;
    for (var i=0;i<d.caveats.length;i++){ if (!s.caveats[i]) return false; }
    return true;
  }
  function hasNote(code){ var n = crit[code].notes; return !!(n && n.trim()); }
  function touched(code){
    var s = crit[code];
    return s.status !== 'not_assessed' || s.evidence !== 'not_assessed' || hasNote(code);
  }

  // single source of truth for per-row presentation state
  function rowStateOf(code){
    var d = defByCode[code], s = crit[code];
    if (!touched(code)) return 'untouched';
    if (s.status === 'accepted'){
      var missing = (s.evidence === 'not_assessed') ||
                    (d.caveats && !caveatComplete(code)) ||
                    (d.requiresNote && !hasNote(code)) ||
                    (s.strength !== d.strength && !hasNote(code));
      if (missing) return 'incomplete';
      if (s.evidence === 'absent_after_review' || s.evidence === 'not_available' ||
          s.evidence === 'not_applicable' || s.evidence === 'conflicting') return 'conflict';
      return 'complete';
    }
    if (s.status === 'needs_second_review') return 'incomplete';
    if (s.evidence === 'conflicting') return 'incomplete';
    if (s.status === 'rejected' || s.status === 'not_applicable') return 'noevidence';
    if (s.status === 'not_assessed' && s.evidence !== 'not_assessed') return 'incomplete';
    return 'untouched';
  }

  function categoryFromScore(total){
    if (total >= 10) return 'pathogenic';
    if (total >= 6)  return 'likely_pathogenic';
    if (total >= 0)  return 'vus';
    if (total >= -6) return 'likely_benign';
    return 'benign';
  }

  function pillHtml(code){
    var st = rowStateOf(code);
    return '<span class="acmg-rowpill" data-state="'+st+'"><span class="acmg-rowpill-glyph" aria-hidden="true">'+ROW_GLYPH[st]+'</span>'+ROW_LABEL[st]+'</span>';
  }

  function critRowHtml(d){
    var s = crit[d.code];
    var locked = allowedStrengths(d).length <= 1;
    var tags = '<span class="acmg-tag">'+esc(STRENGTH_LABEL[d.strength])+' \u00b7 default</span>';
    tags += '<span class="acmg-tag acmg-tag-mod" data-modtag'+(isModified(d.code)?'':' hidden')+'>strength modified</span>';
    if (d.requiresNote) tags += '<span class="acmg-tag acmg-tag-note">notes required</span>';
    if (d.deprecated)   tags += '<span class="acmg-tag acmg-tag-dep">deprecated by ClinGen</span>';
    var cavHtml = '';
    if (d.caveats){
      cavHtml = '<ul class="acmg-caveats">' + d.caveats.map(function(t,i){
        var chk = s.caveats[i] ? ' checked' : '';
        return '<li><input type="checkbox" data-cav="'+i+'"'+chk+'><span>'+esc(t)+'</span></li>';
      }).join('') + '</ul>';
    }
    var detail = '<div class="acmg-detail" hidden>'+cavHtml+
      '<label class="acmg-notes-label">Reviewer notes / evidence sources'+(d.requiresNote?' (required)':'')+'</label>'+
      '<textarea data-notes placeholder="Databases reviewed, reasoning, source, justification for any strength change\u2026">'+esc(s.notes)+'</textarea></div>';

    return '<div class="acmg-crit" data-code="'+d.code+'" data-group="'+d.group+'" data-status="'+s.status+'" data-rowstate="'+rowStateOf(d.code)+'" data-mod="'+(isModified(d.code)?'1':'0')+'">'+
      '<button type="button" class="acmg-crit-compact" data-toggle="crit-expanded" aria-expanded="false" title="Expand '+esc(d.code)+' controls">'+
        '<span class="acmg-compact-code" data-group="'+d.group+'">'+d.code+'</span><span class="acmg-compact-def">'+esc(d.def)+'</span><span class="acmg-compact-pill">'+pillHtml(d.code)+'</span>'+ 
      '</button>'+ 
      '<div class="acmg-crit-main">'+
        '<div class="acmg-crit-id"><span class="acmg-code" data-group="'+d.group+'">'+d.code+'</span>'+tags+'</div>'+
        '<p class="acmg-crit-def">'+esc(d.def)+'</p>'+
      '</div>'+
      '<div class="acmg-crit-controls">'+
        '<div class="acmg-crit-statusline">'+pillHtml(d.code)+'</div>'+
        '<label>Evidence<select data-field="evidence">'+opt(EVIDENCE_OPTS, s.evidence)+'</select></label>'+
        '<label>Status<select data-field="status">'+opt(STATUS_OPTS, s.status)+'</select></label>'+
        '<label>Applied strength<select data-field="strength"'+(locked?' disabled title="BA1 is stand-alone benign and is not modulated"':'')+'>'+strengthOptionsHtml(d, s.strength)+'</select></label>'+
      '</div>'+
      '<div class="acmg-crit-extra"><button type="button" class="acmg-disclosure" data-toggle="detail">Caveats &amp; notes</button>'+detail+'</div>'+
    '</div>';
  }

  function buildLists(){
    var p = [], b = [];
    CRITERIA.forEach(function(c){
      var d = defByCode[c[1]];
      (d.group === 'pathogenic' ? p : b).push(critRowHtml(d));
    });
    document.getElementById('acmg-list-pathogenic').innerHTML = p.join('');
    document.getElementById('acmg-list-benign').innerHTML = b.join('');
  }

  function compute(){
    var pathPts = 0, benPts = 0, accepted = [];
    CRITERIA.forEach(function(c){
      var code = c[1], s = crit[code];
      if (s.status === 'accepted'){
        var pv = POINTS[s.group][s.strength] || 0;
        if (pv >= 0) pathPts += pv; else benPts += pv;
        accepted.push(code);
      }
    });
    var total = pathPts + benPts;
    var derived = categoryFromScore(total);

    var conflicts = [], warnings = [], missing = [], modifications = [];

    if (crit.BA1.status === 'accepted' && accepted.some(function(c){ return defByCode[c].group === 'pathogenic'; })){
      conflicts.push('BA1 is stand-alone benign evidence but pathogenic criteria are also accepted. Resolve before retaining a pathogenic classification.');
    }
    if (pathPts >= 4 && benPts <= -4){
      conflicts.push('Strong pathogenic and strong benign evidence are both present (' + pathPts + ' vs ' + benPts + '). Conflicting evidence should be reconciled.');
    }

    accepted.forEach(function(code){
      var d = defByCode[code], s = crit[code], note = hasNote(code);
      if (s.strength !== d.strength){
        modifications.push(notation(code) + ' \u2014 applied at ' + STRENGTH_LABEL[s.strength] + ', default ' + STRENGTH_LABEL[d.strength]);
        if (!note) warnings.push(code + ' applied at a non-default strength (' + STRENGTH_LABEL[s.strength] + ') without a justification note.');
      }
      if (s.evidence === 'not_assessed'){
        warnings.push(code + ' is accepted but no evidence finding was recorded (evidence "Not assessed").');
      }
      if (s.evidence === 'absent_after_review' || s.evidence === 'not_available' || s.evidence === 'not_applicable'){
        conflicts.push(code + ' is accepted but its evidence is recorded as "' + labelOf(EVIDENCE_OPTS, s.evidence) + '". An accepted criterion must be supported by present evidence.');
      }
      if (s.evidence === 'conflicting'){
        conflicts.push(code + ' is accepted while its evidence is marked conflicting.');
      }
      if (d.requiresNote && !note){
        warnings.push(code + ' requires reviewer notes (manual criterion) but none were entered.');
      }
      if (d.caveats && !caveatComplete(code)){
        warnings.push(code + ' caveat checklist is incomplete.');
      }
      if (d.deprecated){
        warnings.push(code + ' is deprecated by the ClinGen SVI and is generally not recommended as evidence.');
      }
    });

    var entered = meta.entered_classification || '';
    var mismatch = false;
    if (accepted.length && !entered){
      warnings.push('Entered classification has not been selected. Select the final classification before treating the review as internally consistent.');
    }
    if (entered && accepted.length && entered !== derived){
      mismatch = true;
      warnings.push('Entered classification (' + CLASS_LABEL[entered] + ') differs from the point-based category (' + CLASS_LABEL[derived] + ').');
    }
    if (accepted.length && !meta.signoff){
      warnings.push('Reviewer sign-off has not been completed. Complete sign-off before treating the review as internally consistent.');
    }

    if (accepted.length && derived === 'vus'){
      var na = function(code){ return crit[code].status === 'not_assessed'; };
      if (na('PS2') && na('PM6')) missing.push('Confirmed de novo status (PS2 / PM6 not assessed)');
      if (na('PP1') && na('BS4')) missing.push('Segregation testing (PP1 / BS4 not assessed)');
      if (na('PS3') && na('BS3')) missing.push('Functional evidence (PS3 / BS3 not assessed)');
      if (na('PP4')) missing.push('Phenotype-specificity review (PP4 not assessed)');
      if (na('PM2') && na('BS1') && na('BA1')) missing.push('Updated population-frequency review (PM2 / BS1 / BA1 not assessed)');
    }

    var verdict, tone;
    if (!accepted.length && !anyTouched()){ verdict = 'Incomplete review'; tone = 'idle'; }
    else if (conflicts.length){ verdict = 'Conflict detected'; tone = 'bad'; }
    else if (mismatch){ verdict = 'Classification mismatch'; tone = 'bad'; }
    else if (warnings.length){ verdict = 'Review completed with warnings'; tone = 'warn'; }
    else if (!accepted.length){ verdict = 'Incomplete review'; tone = 'idle'; }
    else { verdict = 'Internally consistent'; tone = 'ok'; }

    return {
      pathPts:pathPts, benPts:benPts, total:total, derived:derived,
      entered:entered, accepted:accepted, conflicts:conflicts,
      warnings:warnings, missing:missing, modifications:modifications,
      verdict:verdict, tone:tone, mismatch:mismatch
    };
  }

  function anyTouched(){
    for (var code in crit){ if (touched(code)) return true; }
    return false;
  }

  function validationReasonHtml(r){
    var items = [];
    if (!r.accepted.length){
      items.push(anyTouched() ? 'No criteria are currently accepted, so no point-based classification can be validated.' : 'No ACMG criteria have been addressed yet.');
    }
    r.conflicts.forEach(function(x){ items.push(x); });
    r.warnings.forEach(function(x){ items.push(x); });
    if (r.missing.length){
      r.missing.forEach(function(x){ items.push('Potentially useful missing evidence: ' + x + '.'); });
    }
    var seen = {};
    items = items.filter(function(x){ if (seen[x]) return false; seen[x] = true; return true; });
    if (!items.length){
      items.push('The current status reflects an incomplete review or unresolved fields in the active variant.');
    }
    return '<strong>Why this status?</strong><ul>' + items.map(function(x){ return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>';
  }

  function renderScoreboard(r){
    document.getElementById('sb-path').textContent = r.pathPts;
    document.getElementById('sb-ben').textContent = r.benPts;
    document.getElementById('sb-total').textContent = r.total;
    document.getElementById('sb-derived').textContent = r.accepted.length ? CLASS_LABEL[r.derived] : '\u2014';
    var v = document.getElementById('sb-verdict');
    v.textContent = r.verdict;
    v.setAttribute('data-tone', r.tone);

    var help = document.getElementById('sb-help');
    var reasons = document.getElementById('sb-reasons');
    if (help && reasons){
      var showHelp = r.verdict !== 'Internally consistent';
      help.hidden = !showHelp;
      reasons.innerHTML = showHelp ? validationReasonHtml(r) : '';
      help.title = showHelp ? reasons.textContent.replace(/\s+/g, ' ').trim() : 'No validation issues detected';
      if (!showHelp){
        help.setAttribute('aria-expanded', 'false');
        reasons.hidden = true;
      } else {
        reasons.hidden = help.getAttribute('aria-expanded') !== 'true';
      }
    }
  }

  function criteriaCompletenessSummary(){
    var counts = { complete:0, noevidence:0, incomplete:0, conflict:0, untouched:0 };
    var accepted = 0;
    var contributing = [];

    CRITERIA.forEach(function(c){
      var code = c[1];
      var s = crit[code];
      var st = rowStateOf(code);

      counts[st]++;

      if (s.status === 'accepted'){
        accepted++;
        contributing.push({
          code: code,
          notation: notation(code),
          group: c[0],
          points: POINTS[c[0]][s.strength] || 0
        });
      }
    });

    var total = CRITERIA.length;
    var addressed = total - counts.untouched;
    var flagged = counts.incomplete + counts.conflict;

    return {
      counts: counts,
      accepted: accepted,
      contributing: contributing,
      total: total,
      addressed: addressed,
      flagged: flagged,
      text: addressed === 0
        ? ('No criteria addressed yet \u00b7 ' + total + ' to review')
        : (addressed + ' of ' + total + ' criteria addressed \u00b7 ' + accepted + ' applied \u00b7 ' + flagged + ' need attention')
    };
  }

  function renderCompleteness(){
    var summary = criteriaCompletenessSummary();
    var counts = summary.counts;
    var order = ['complete','noevidence','incomplete','conflict'];

    document.getElementById('acmg-comp-bar').innerHTML = order.map(function(st){
      if (!counts[st]) return '';
      return '<span class="acmg-comp-seg" data-state="'+st+'" style="width:'+(counts[st]/summary.total*100).toFixed(2)+'%"></span>';
    }).join('');

    document.getElementById('acmg-comp-text').textContent = summary.text;

    var pillBox = document.getElementById('acmg-comp-pills');
    if (pillBox){
      pillBox.innerHTML = summary.contributing.map(function(x){
        var pts = x.points > 0 ? '+' + x.points : String(x.points);
        return '<span class="acmg-comp-pill" data-group="'+esc(x.group)+'">' +
          esc(x.notation) +
          '<span class="acmg-comp-pill-points">' + esc(pts) + '</span>' +
          '</span>';
      }).join('');
    }
  }

  function variantLine(){
    var g = meta.gene || '', t = meta.transcript || '', c = meta.hgvs_c || '', p = meta.hgvs_p || '';
    var s = g;
    if (t) s += (s?' ':'') + t;
    if (c) s += (s?':':'') + c;
    if (p) s += ' ' + p;
    return s || 'Variant not specified';
  }

  function computeForVariant(v){
    var oldMeta = meta, oldCrit = crit;
    meta = cloneMetaState(v.meta);
    crit = cloneCritState(v.crit);
    var out = compute();
    meta = oldMeta;
    crit = oldCrit;
    return out;
  }



  var PROVENANCE_KEYS = [
    'id','genome_id',
    'metadata.samples.0.sample_id','metadata.samples.0.primary_sample_type','metadata.samples.0.q30',
    'metadata.assay.identifier','metadata.assay.code','metadata.assay.intended_read_depth','metadata.assay.intended_read_length','metadata.assay.library_preparation','metadata.assay.source_system','metadata.assay.sop','metadata.assay.start_datetime','metadata.assay.subject_pseudo_identifier',
    'metadata.run.identifier','metadata.run.datetime','metadata.run.average_insert_size','metadata.run.average_read_length','metadata.run.mean_read_depth','metadata.run.read_count',
    'metadata.instrument.code','metadata.instrument.label',
    'metadata.analysis.identifier','metadata.analysis.code','metadata.analysis.reference_sequence','metadata.analysis.software','metadata.analysis.source_system','metadata.analysis.sop','metadata.analysis.start_datetime','metadata.analysis.subject_pseudo_identifier',
    'metadata.files.fastq','metadata.md5.fastq','metadata.size.fastq','metadata.files.vcf','metadata.md5.vcf','metadata.size.vcf',
    'metadata.shares.0.date','metadata.shares.0.type','metadata.shares.0.recipient'
  ];
  var PROVENANCE_KEY_SET = PROVENANCE_KEYS.reduce(function(a,k){ a[k]=true; return a; }, {});

  function cloneObj(src){
    var out = {};
    Object.keys(src || {}).forEach(function(k){ out[k] = src[k]; });
    return out;
  }
  function provenancePayload(){
    var vals = {}, extra = cloneObj(provenance.extra);
    PROVENANCE_KEYS.forEach(function(k){ if (provenance.values[k]) vals[k] = provenance.values[k]; });
    return { values:vals, extra:extra };
  }
  function provenanceLabel(key){
    var label = String(key || '').replace(/[._]+/g, ' ');
    return label.charAt(0).toUpperCase() + label.slice(1);
  }
  function reportKv(rows){
    return '<table class="acmg-rep-table acmg-rep-kv"><tbody>'+rows.map(function(x){
      return '<tr><td>'+esc(x[0])+'</td><td>'+esc(x[1]||'\u2014')+'</td></tr>';
    }).join('')+'</tbody></table>';
  }
  function hasProvenance(){
    return Object.keys((provenancePayload()).values).length > 0 || Object.keys((provenancePayload()).extra).length > 0;
  }
  function provenanceRows(){
    var rows = [];
    PROVENANCE_KEYS.forEach(function(k){ if (provenance.values[k]) rows.push([provenanceLabel(k), provenance.values[k]]); });
    Object.keys(provenance.extra || {}).sort().forEach(function(k){ if (provenance.extra[k]) rows.push([provenanceLabel(k), provenance.extra[k]]); });
    return rows;
  }
  function provenanceBlockHtml(){
    if (!hasProvenance()) return '';
    return '<div class="acmg-rep-block"><h3>Sample provenance and sequencing metadata</h3>'+reportKv(provenanceRows())+'</div>';
  }
  function getPath(obj, path){
    var cur = obj;
    for (var i=0;i<path.length;i++){
      if (cur == null) return undefined;
      cur = cur[path[i]];
    }
    return cur;
  }
  function flattenObject(obj, prefix, out){
    out = out || {};
    if (obj == null) return out;
    if (typeof obj !== 'object') { out[prefix] = obj; return out; }
    Object.keys(obj).forEach(function(k){
      var val = obj[k];
      var key = prefix ? prefix + '.' + k : k;
      if (val != null && typeof val === 'object') flattenObject(val, key, out);
      else out[key] = val;
    });
    return out;
  }
  function applyProvenanceMap(map){
    var mapped = 0, extra = 0;
    Object.keys(map || {}).forEach(function(k){
      var val = map[k];
      if (val == null || String(val).trim() === '') return;
      if (PROVENANCE_KEY_SET[k]) { provenance.values[k] = String(val); mapped++; }
      else { provenance.extra[k] = String(val); extra++; }
    });
    fillProvenanceFields();
    setProvenanceStatus(mapped + ' standard fields mapped' + (extra ? ', ' + extra + ' extra fields captured' : '') + '.');
    recompute();
  }
  function parseDelimitedProvenance(text){
    var map = {};
    text.split(/\r?\n/).forEach(function(line){
      var s = line.trim();
      if (!s || s[0] === '#') return;
      var parts = s.indexOf('\t') >= 0 ? s.split('\t') : s.split(',');
      if (parts.length < 2) parts = s.split(/\s*=\s*/);
      if (parts.length < 2) return;
      var key = parts.shift().trim();
      var val = parts.join(parts.length && line.indexOf('\t') >= 0 ? '\t' : ',').trim();
      if (key) map[key] = val;
    });
    return map;
  }
  function mapGvWgsJson(data){
    var map = {};
    PROVENANCE_KEYS.forEach(function(k){
      var path = k.split('.').map(function(x){ return /^\d+$/.test(x) ? parseInt(x,10) : x; });
      var val = getPath(data, path);
      if (val != null && typeof val !== 'object') map[k] = val;
    });
    flattenObject(data, '', map);
    return map;
  }
  function setProvenanceStatus(msg){
    var el = document.getElementById('acmg-prov-status');
    if (el) el.textContent = msg || '';
  }
  function fillProvenanceFields(){
    document.querySelectorAll('[data-prov]').forEach(function(el){
      var key = el.getAttribute('data-prov');
      el.value = provenance.values[key] || '';
    });
    var extra = document.getElementById('acmg-prov-extra');
    if (extra){
      extra.value = Object.keys(provenance.extra || {}).sort().map(function(k){ return k + '\t' + provenance.extra[k]; }).join('\n');
    }
  }
  function geneStructureReportHtml(){
    var canvas = document.getElementById('acmg-gsv-canvas');
    var card = document.getElementById('acmg-gsv-card');
    if (!canvas || !canvas.width || !canvas.height || (card && card.hidden)) return '';
    try {
      var dataUrl = canvas.toDataURL('image/png');
      if (!dataUrl || dataUrl === 'data:,') return '';
      function gsvText(id){
        var el = document.getElementById(id);
        return el ? el.textContent.trim() : '';
      }
      var gene = gsvText('acmg-gsv-card-gene');
      var loc = gsvText('acmg-gsv-card-loc');
      var tx = document.getElementById('acmg-gsv-tx-select');
      var txLabel = tx && tx.selectedOptions && tx.selectedOptions.length ? tx.selectedOptions[0].textContent.trim() : '';
      var asm = gsvText('acmg-gsv-i-asm');
      var strand = gsvText('acmg-gsv-i-str');
      var txn = gsvText('acmg-gsv-i-txn');
      var exn = gsvText('acmg-gsv-i-exn');
      return '<div class="acmg-rep-block acmg-rep-gsv-block"><h3>Gene structure view</h3>'+
        '<table class="acmg-rep-table acmg-rep-kv acmg-rep-gsv-meta"><tbody>'+
          '<tr><td>Gene</td><td>'+esc(gene || meta.gene || '\u2014')+'</td></tr>'+
          '<tr><td>Genomic location</td><td>'+esc(loc || meta.coordinate || '\u2014')+'</td></tr>'+
          '<tr><td>Transcript used</td><td>'+esc(txLabel || meta.transcript || '\u2014')+'</td></tr>'+
          '<tr><td>Assembly</td><td>'+esc(asm || meta.build || '\u2014')+'</td></tr>'+
          '<tr><td>Strand</td><td>'+esc(strand || '\u2014')+'</td></tr>'+
          '<tr><td>Transcripts</td><td>'+esc(txn || '\u2014')+'</td></tr>'+
          '<tr><td>Exons</td><td>'+esc(exn || '\u2014')+'</td></tr>'+
        '</tbody></table>'+
        '<img class="acmg-rep-gsv-img" src="'+dataUrl+'" alt="Gene structure view for the active variant">'+
        '<div class="acmg-rep-gsv-legend" aria-label="Gene structure legend">'+
          '<span class="acmg-rep-gsv-li"><span class="acmg-rep-gsv-sw acmg-rep-gsv-cds"></span>Coding exon</span>'+
          '<span class="acmg-rep-gsv-li"><span class="acmg-rep-gsv-sw acmg-rep-gsv-utr"></span>UTR</span>'+
          '<span class="acmg-rep-gsv-li"><span class="acmg-rep-gsv-line"></span>Intron (condensed)</span>'+
          '<span class="acmg-rep-gsv-li"><span class="acmg-rep-gsv-sw acmg-rep-gsv-hl"></span>Variant position</span>'+
        '</div></div>';
    } catch (err) {
      return '';
    }
  }

  function reportCriteriaPillsHtml(r){
    if (!r || !r.accepted || !r.accepted.length) return '';
    return '<div class="acmg-rep-comp-pills">'+r.accepted.map(function(code){
      var d = defByCode[code], s = crit[code];
      var pts = s && s.status === 'accepted' ? (POINTS[s.group][s.strength] || 0) : 0;
      var sign = pts > 0 ? '+' + pts : String(pts);
      return '<span class="acmg-comp-pill" data-group="'+esc(d.group)+'"><span>'+esc(notation(code))+'</span><span class="acmg-comp-pill-points">'+esc(sign)+'</span></span>';
    }).join('')+'</div>';
  }

  function reportScoreboardHtml(r){
    var summary = criteriaCompletenessSummary();
    return '<div class="acmg-rep-scoreboard">'+
      '<div class="acmg-rep-score-cells">'+
        '<div class="acmg-rep-score-cell"><span class="acmg-rep-score-val">'+esc(r.pathPts)+'</span><span class="acmg-rep-score-lab">Pathogenic points</span></div>'+
        '<div class="acmg-rep-score-cell"><span class="acmg-rep-score-val">'+esc(r.benPts)+'</span><span class="acmg-rep-score-lab">Benign points</span></div>'+
        '<div class="acmg-rep-score-cell"><span class="acmg-rep-score-val">'+esc(r.total)+'</span><span class="acmg-rep-score-lab">Total points</span></div>'+
        '<div class="acmg-rep-score-cell"><span class="acmg-rep-score-val">'+(r.accepted.length ? esc(CLASS_LABEL[r.derived]) : '\u2014')+'</span><span class="acmg-rep-score-lab">Point-based category</span></div>'+
        '<div class="acmg-rep-score-cell"><span class="acmg-verdict" data-tone="'+esc(r.tone)+'">'+esc(r.verdict)+'</span><span class="acmg-rep-score-lab">Validation status</span></div>'+
      '</div>'+
      '<div class="acmg-rep-score-completeness">'+esc(summary.text)+reportCriteriaPillsHtml(r)+'</div>'+
    '</div>';
  }

  function renderReport(r){
    saveActiveVariant();
    var body = document.getElementById('acmg-report-body');

    function kv(rows){
      return '<table class="acmg-rep-table acmg-rep-kv"><tbody>'+rows.map(function(x){
        return '<tr><td>'+esc(x[0])+'</td><td>'+esc(x[1]||'\u2014')+'</td></tr>';
      }).join('')+'</tbody></table>';
    }
    function listBlock(title, items, cls){
      if (!items.length) return '<div class="acmg-rep-block"><h3>'+esc(title)+'</h3><p class="acmg-rep-empty">None.</p></div>';
      return '<div class="acmg-rep-block"><h3>'+esc(title)+'</h3><ul class="acmg-rep-list '+(cls||'')+'">'+
        items.map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ul></div>';
    }
    function variantTitle(v, idx){
      var m = v.meta || {};
      var label = 'Variant ' + (idx + 1);
      if (m.gene || m.hgvs_c || m.hgvs_p) label += ': ' + esc(shortVariantLabel(v, idx));
      return label;
    }
    function variantBlocks(v, idx, vr){
      var oldMeta = meta, oldCrit = crit;
      meta = cloneMetaState(v.meta);
      crit = cloneCritState(v.crit);

      var ident = '<div class="acmg-rep-block"><h3>'+variantTitle(v, idx)+' identity</h3>'+kv([
        ['Gene',meta.gene],['Transcript',meta.transcript],['cDNA',meta.hgvs_c],['Protein',meta.hgvs_p],
        ['Genome build',meta.build],['Coordinate',meta.coordinate],['Reference allele',meta.ref],['Alternate allele',meta.alt],['Variant type',meta.variant_type],['Zygosity',meta.zygosity]
      ])+'</div>';

      var considered = CRITERIA.map(function(c){return c[1];}).filter(touched);
      var critTable;
      if (considered.length){
        critTable = '<table class="acmg-rep-table acmg-rep-criteria-table"><thead><tr><th>Criterion</th><th>Status</th><th>Applied strength</th><th>Points</th><th>Evidence status</th><th>Notes</th></tr></thead><tbody>'+
          considered.map(function(code){
            var d = defByCode[code], s = crit[code];
            var pts = (s.status==='accepted') ? (POINTS[s.group][s.strength]||0) : 0;
            var strengthCell = esc(STRENGTH_LABEL[s.strength]) + (s.strength!==d.strength ? ' <span class="acmg-rep-empty">(modified)</span>' : '');
            return '<tr><td><strong>'+esc(notation(code))+'</strong></td>'+
              '<td>'+esc(labelOf(STATUS_OPTS,s.status))+'</td>'+
              '<td>'+strengthCell+'</td>'+
              '<td>'+(s.status==='accepted'?(pts>0?'+'+pts:pts):'\u2014')+'</td>'+
              '<td>'+esc(labelOf(EVIDENCE_OPTS,s.evidence))+'</td>'+
              '<td>'+(s.notes?esc(s.notes):'<span class="acmg-rep-empty">\u2014</span>')+'</td></tr>';
          }).join('')+'</tbody></table>';
      } else {
        critTable = '<p class="acmg-rep-empty">No criteria reviewed yet.</p>';
      }

      var score = '<div class="acmg-rep-block"><h3>'+variantTitle(v, idx)+' score</h3>'+kv([
        ['Pathogenic points', String(vr.pathPts)],
        ['Benign points', String(vr.benPts)],
        ['Total', String(vr.total)],
        ['Point-based category', vr.accepted.length?CLASS_LABEL[vr.derived]:'\u2014'],
        ['Entered classification', vr.entered?CLASS_LABEL[vr.entered]:'\u2014'],
        ['Consistency', vr.accepted.length?(vr.mismatch?'Mismatch':'Consistent with selected criteria'):'\u2014']
      ])+'</div>';

      meta = oldMeta;
      crit = oldCrit;

      return ident +
        (idx === activeVariant ? geneStructureReportHtml() : '') +
        '<div class="acmg-rep-block"><h3>'+variantTitle(v, idx)+' criteria reviewed ('+considered.length+')</h3>'+critTable+'</div>' +
        score +
        listBlock(variantTitle(v, idx)+' conflicts', vr.conflicts, 'bad') +
        listBlock(variantTitle(v, idx)+' warnings', vr.warnings, 'warn') +
        listBlock(variantTitle(v, idx)+' potentially useful missing evidence', vr.missing);
    }

    if (variants.length > 1){
      var results = variants.map(function(v){ return computeForVariant(v); });
      var allConflicts = [], allWarnings = [], anyMismatch = false;
      results.forEach(function(vr, i){
        if (vr.conflicts.length) allConflicts.push('Variant '+(i+1)+': '+vr.conflicts.join(' '));
        if (vr.warnings.length) allWarnings.push('Variant '+(i+1)+': '+vr.warnings.join(' '));
        if (vr.mismatch) anyMismatch = true;
      });
      if (!genotype.phase) allWarnings.push('Genotype review: phase not recorded.');
      if (genotype.phase === 'Phase unknown' || genotype.phase === 'Not assessed') allWarnings.push('Genotype review: compound heterozygosity should not be assumed while phase is '+genotype.phase+'.');
      if (!genotype.conclusion && variants.length > 1) allWarnings.push('Genotype review: genotype-level conclusion not recorded.');

      var tone = allConflicts.length ? 'bad' : (anyMismatch ? 'bad' : (allWarnings.length ? 'warn' : 'ok'));
      var verdict = allConflicts.length ? 'Conflict detected' : (anyMismatch ? 'Classification mismatch' : (allWarnings.length ? 'Review completed with warnings' : 'Internally consistent'));

      var first = variants[0].meta || {};
      var stamp = '<div class="acmg-rep-stamp">'+
        '<h3>Structured ACMG evidence review</h3>'+
        '<span class="acmg-verdict" data-tone="'+tone+'">'+esc(verdict)+'</span>'+
        '<div style="font-size:.85rem;color:var(--acmg-steel);margin-top:8px;line-height:1.5">'+
          variants.length+' variants reviewed in one case report<br>'+
          'Software: '+esc(ACMG_VALIDATOR_SOFTWARE+' '+ACMG_VALIDATOR_VERSION)+'<br>'+
          'Case: '+esc((first.disease || genotype.disease || '\u2014'))+' \u00b7 Inheritance: '+esc((first.inheritance || genotype.inheritance || '\u2014'))+'<br>'+
          'Reviewer: '+esc(first.reviewer||'\u2014')+' \u00b7 '+esc(first.institution||'\u2014')+' \u00b7 '+esc(first.date||'\u2014')+'<br>'+
          'Sign-off: '+(variants.every(function(v){ return !!v.meta.signoff; })?'completed for all variants':'not completed for all variants')+
        '</div></div>';

      var ctx = '<div class="acmg-rep-block"><h3>Case context</h3>'+kv([
        ['Disease',first.disease || genotype.disease],
        ['Inheritance',first.inheritance || genotype.inheritance],
        ['Phenotype / HPO',first.phenotype],
        ['Reviewer',first.reviewer],
        ['Institution',first.institution],
        ['Review date',first.date],
        ['Guideline basis',first.guideline]
      ])+'</div>';

      var genotypeBlock = '<div class="acmg-rep-block"><h3>Genotype-level review</h3>'+kv([
        ['Gene reviewed together',genotype.gene],
        ['Disease / condition',genotype.disease],
        ['Inheritance model',genotype.inheritance],
        ['Number of variants reviewed',String(variants.length)],
        ['Phase',genotype.phase],
        ['Variant combination',genotype.combination],
        ['Phase evidence',genotype.phase_evidence],
        ['Genotype-level conclusion',genotype.conclusion],
        ['Phenotype fit',genotype.phenotype_fit],
        ['Residual uncertainty',genotype.uncertainty]
      ])+'</div>';

      var blocks = variants.map(function(v, i){ return variantBlocks(v, i, results[i]); }).join('');
      var overall = '<div class="acmg-rep-block"><h3>Overall conclusion</h3>'+kv([
        ['Validation status',verdict],
        ['Scoring note','Variant-level ACMG scores are kept separate and are not summed across variants.'],
        ['Genotype note','Pair-level or genotype-level interpretation is recorded separately from variant-level ACMG evidence.']
      ])+'</div>';

      var limitations = '<div class="acmg-rep-block"><h3>Limitations</h3>'+
        '<p class="acmg-rep-empty" style="line-height:1.55">This report records the completeness and internal consistency of a manual ACMG/AMP evidence review. It does not annotate variants, does not assert clinical validity, and is not a substitute for expert clinical judgement or a regulated diagnostic report.</p></div>';

      body.innerHTML = stamp + reportScoreboardHtml(r) + ctx + provenanceBlockHtml() + blocks + genotypeBlock + overall +
        listBlock('Overall conflicts', allConflicts, 'bad') +
        listBlock('Overall warnings', allWarnings, 'warn') +
        limitations;
      lastReportBody = body.innerHTML;
      return;
    }

    var stamp = '<div class="acmg-rep-stamp">'+
      '<h3>Structured ACMG evidence review</h3>'+
      '<span class="acmg-verdict" data-tone="'+r.tone+'">'+esc(r.verdict)+'</span>'+
      '<div style="font-size:.85rem;color:var(--acmg-steel);margin-top:8px;line-height:1.5">'+
        esc(variantLine())+'<br>'+
        'Software: '+esc(ACMG_VALIDATOR_SOFTWARE+' '+ACMG_VALIDATOR_VERSION)+'<br>'+
        'Entered classification: '+(r.entered?esc(CLASS_LABEL[r.entered]):'\u2014')+
        ' \u00b7 Point-based category: '+(r.accepted.length?esc(CLASS_LABEL[r.derived]):'\u2014')+
        ' ('+r.total+' pts)<br>'+
        'Reviewer: '+esc(meta.reviewer||'\u2014')+' \u00b7 '+esc(meta.institution||'\u2014')+' \u00b7 '+esc(meta.date||'\u2014')+'<br>'+
        'Sign-off: '+(meta.signoff?'completed':'not completed')+
      '</div></div>';

    var ident = '<div class="acmg-rep-block"><h3>Variant identity</h3>'+kv([
      ['Gene',meta.gene],['Transcript',meta.transcript],['cDNA',meta.hgvs_c],['Protein',meta.hgvs_p],
      ['Genome build',meta.build],['Coordinate',meta.coordinate],['Reference allele',meta.ref],['Alternate allele',meta.alt],['Variant type',meta.variant_type],['Zygosity',meta.zygosity]
    ])+'</div>';
    var ctx = '<div class="acmg-rep-block"><h3>Case context</h3>'+kv([
      ['Disease',meta.disease],['Inheritance',meta.inheritance],['Phenotype / HPO',meta.phenotype],['Guideline basis',meta.guideline]
    ])+'</div>';

    var considered = CRITERIA.map(function(c){return c[1];}).filter(touched);
    var critTable;
    if (considered.length){
      critTable = '<table class="acmg-rep-table acmg-rep-criteria-table"><thead><tr><th>Criterion</th><th>Status</th><th>Applied strength</th><th>Points</th><th>Evidence status</th><th>Notes</th></tr></thead><tbody>'+
        considered.map(function(code){
          var d = defByCode[code], s = crit[code];
          var pts = (s.status==='accepted') ? (POINTS[s.group][s.strength]||0) : 0;
          var strengthCell = esc(STRENGTH_LABEL[s.strength]) + (s.strength!==d.strength ? ' <span class="acmg-rep-empty">(modified)</span>' : '');
          return '<tr><td><strong>'+esc(notation(code))+'</strong></td>'+
            '<td>'+esc(labelOf(STATUS_OPTS,s.status))+'</td>'+
            '<td>'+strengthCell+'</td>'+
            '<td>'+(s.status==='accepted'?(pts>0?'+'+pts:pts):'\u2014')+'</td>'+
            '<td>'+esc(labelOf(EVIDENCE_OPTS,s.evidence))+'</td>'+
            '<td>'+(s.notes?esc(s.notes):'<span class="acmg-rep-empty">\u2014</span>')+'</td></tr>';
        }).join('')+'</tbody></table>';
    } else {
      critTable = '<p class="acmg-rep-empty">No criteria reviewed yet.</p>';
    }
    var critBlock = '<div class="acmg-rep-block"><h3>Criteria reviewed ('+considered.length+')</h3>'+critTable+'</div>';

    var scoreBlock = '<div class="acmg-rep-block"><h3>Point score</h3>'+kv([
      ['Pathogenic points', String(r.pathPts)],
      ['Benign points', String(r.benPts)],
      ['Total', String(r.total)],
      ['Point-based category', r.accepted.length?CLASS_LABEL[r.derived]:'\u2014'],
      ['Entered classification', r.entered?CLASS_LABEL[r.entered]:'\u2014'],
      ['Consistency', r.accepted.length?(r.mismatch?'Mismatch':'Consistent with selected criteria'):'\u2014']
    ])+'</div>';

    var limitations = '<div class="acmg-rep-block"><h3>Limitations</h3>'+
      '<p class="acmg-rep-empty" style="line-height:1.55">This report records the completeness and internal consistency of a manual ACMG/AMP evidence review. It does not annotate the variant, does not assert clinical validity, and is not a substitute for expert clinical judgement or a regulated diagnostic report.</p></div>';

    body.innerHTML = stamp + reportScoreboardHtml(r) + ident + geneStructureReportHtml() + ctx + provenanceBlockHtml() + critBlock + scoreBlock +
      listBlock('Strength modifications', r.modifications) +
      listBlock('Conflicts', r.conflicts, 'bad') +
      listBlock('Warnings', r.warnings, 'warn') +
      listBlock('Potentially useful missing evidence', r.missing) +
      limitations;

    lastReportBody = body.innerHTML;
  }

  function buildExports(r){
    saveActiveVariant();
    if (variants.length > 1){
      var variantPayload = variants.map(function(v, idx){
        var oldMeta = meta, oldCrit = crit;
        meta = cloneMetaState(v.meta);
        crit = cloneCritState(v.crit);
        var vr = compute();
        var considered = CRITERIA.map(function(c){return c[1];}).filter(touched);
        var critObjs = considered.map(function(code){
          var d = defByCode[code], s = crit[code];
          return {
            criterion: code, notation: notation(code), group: d.group,
            status: s.status, default_strength: d.strength, applied_strength: s.strength,
            strength_modified: s.strength !== d.strength,
            points: s.status==='accepted' ? (POINTS[s.group][s.strength]||0) : 0,
            evidence_status: s.evidence,
            caveat_status: d.caveats ? (caveatComplete(code)?'completed':'incomplete') : 'not_applicable',
            row_state: rowStateOf(code),
            notes: s.notes || ''
          };
        });
        var out = {
          variant_index: idx + 1,
          variant:{ gene:meta.gene||'', transcript:meta.transcript||'', hgvs_c:meta.hgvs_c||'', hgvs_p:meta.hgvs_p||'', genome_build:meta.build||'', coordinate:meta.coordinate||'', ref:meta.ref||'', alt:meta.alt||'', variant_type:meta.variant_type||'', zygosity:meta.zygosity||'' },
          case_context:{ disease:meta.disease||'', inheritance:meta.inheritance||'', phenotype:meta.phenotype||'' },
          criteria: critObjs,
          validation:{ pathogenic_points:vr.pathPts, benign_points:vr.benPts, total_points:vr.total, point_based_category:vr.accepted.length?vr.derived:null, entered_classification:vr.entered||null, verdict:vr.verdict, conflicts:vr.conflicts, warnings:vr.warnings, missing_evidence:vr.missing }
        };
        meta = oldMeta;
        crit = oldCrit;
        return out;
      });
      var obj = {
        schema:'switzerlandomics.acmg-validator.case.v1',
        generated_at:new Date().toISOString(),
        review:{ reviewer:(variants[0].meta||{}).reviewer||'', institution:(variants[0].meta||{}).institution||'', date:(variants[0].meta||{}).date||'' },
        case_context:{ disease:(variants[0].meta||{}).disease||genotype.disease||'', inheritance:(variants[0].meta||{}).inheritance||genotype.inheritance||'', phenotype:(variants[0].meta||{}).phenotype||'' },
        provenance:provenancePayload(),
        variants:variantPayload,
        genotype_review:genotype,
        note:'Variant-level ACMG scores are kept separate and are not summed across variants.'
      };
      lastJson = JSON.stringify(obj, null, 2);

      var L = [];
      L.push('# ACMG Validator case report'); L.push('');
      L.push('**Variants reviewed:** ' + variants.length);
      L.push('**Disease:** ' + ((variants[0].meta||{}).disease || genotype.disease || '\u2014'));
      L.push('**Inheritance:** ' + ((variants[0].meta||{}).inheritance || genotype.inheritance || '\u2014'));
      L.push('**Reviewer:** ' + ((variants[0].meta||{}).reviewer || '\u2014') + ' \u00b7 ' + ((variants[0].meta||{}).institution || '\u2014') + ' \u00b7 ' + ((variants[0].meta||{}).date || '\u2014'));
      if (hasProvenance()){
        L.push(''); L.push('## Sample provenance and sequencing metadata'); L.push('');
        provenanceRows().forEach(function(row){ L.push('- ' + row[0] + ': ' + row[1]); });
      }
      L.push('');
      variantPayload.forEach(function(v){
        L.push('## Variant ' + v.variant_index + ': ' + (v.variant.gene || '') + ' ' + (v.variant.hgvs_c || '') + ' ' + (v.variant.hgvs_p || ''));
        L.push('');
        L.push('- Transcript: ' + (v.variant.transcript || '\u2014'));
        L.push('- Zygosity: ' + (v.variant.zygosity || '\u2014'));
        L.push('- Total points: ' + v.validation.total_points);
        L.push('- Point-based category: ' + (v.validation.point_based_category ? CLASS_LABEL[v.validation.point_based_category] : '\u2014'));
        L.push('- Entered classification: ' + (v.validation.entered_classification ? CLASS_LABEL[v.validation.entered_classification] : '\u2014'));
        L.push('');
        L.push('| Criterion | Status | Applied strength | Points | Evidence status | Notes |');
        L.push('|---|---|---|---|---|---|');
        if (v.criteria.length){
          v.criteria.forEach(function(c){
            L.push('| '+c.notation+' | '+c.status+' | '+c.applied_strength+' | '+c.points+' | '+c.evidence_status+' | '+(c.notes ? c.notes.replace(/\|/g,'\\|').replace(/\n/g,' ') : '\u2014')+' |');
          });
        } else {
          L.push('| \u2014 | \u2014 | \u2014 | \u2014 | \u2014 | No criteria reviewed |');
        }
        L.push('');
      });
      L.push('## Genotype-level review'); L.push('');
      L.push('- Gene reviewed together: ' + (genotype.gene || '\u2014'));
      L.push('- Phase: ' + (genotype.phase || '\u2014'));
      L.push('- Variant combination: ' + (genotype.combination || '\u2014'));
      L.push('- Genotype-level conclusion: ' + (genotype.conclusion || '\u2014'));
      L.push('- Residual uncertainty: ' + (genotype.uncertainty || '\u2014'));
      L.push('');
      L.push('Variant-level ACMG scores are kept separate and are not summed across variants.');
      lastMd = L.join('\n');
      return;
    }
    var considered = CRITERIA.map(function(c){return c[1];}).filter(touched);
    var critObjs = considered.map(function(code){
      var d = defByCode[code], s = crit[code];
      return {
        criterion: code, notation: notation(code), group: d.group,
        status: s.status, default_strength: d.strength, applied_strength: s.strength,
        strength_modified: s.strength !== d.strength,
        points: s.status==='accepted' ? (POINTS[s.group][s.strength]||0) : 0,
        evidence_status: s.evidence,
        caveat_status: d.caveats ? (caveatComplete(code)?'completed':'incomplete') : 'not_applicable',
        row_state: rowStateOf(code),
        notes: s.notes || ''
      };
    });
    var obj = {
      schema:'switzerlandomics.acmg-validator.v1',
      generated_at: new Date().toISOString(),
      guideline_basis: meta.guideline || '',
      review:{ reviewer:meta.reviewer||'', institution:meta.institution||'', date:meta.date||'', signoff:!!meta.signoff },
      variant:{ gene:meta.gene||'', transcript:meta.transcript||'', hgvs_c:meta.hgvs_c||'', hgvs_p:meta.hgvs_p||'', genome_build:meta.build||'', coordinate:meta.coordinate||'', ref:meta.ref||'', alt:meta.alt||'', variant_type:meta.variant_type||'', zygosity:meta.zygosity||'' },
      case_context:{ disease:meta.disease||'', inheritance:meta.inheritance||'', phenotype:meta.phenotype||'' },
      provenance:provenancePayload(),
      criteria: critObjs,
      validation:{
        pathogenic_points:r.pathPts, benign_points:r.benPts, total_points:r.total,
        point_based_category:r.accepted.length?r.derived:null,
        entered_classification:r.entered||null,
        verdict:r.verdict, strength_modifications:r.modifications,
        conflicts:r.conflicts, warnings:r.warnings, missing_evidence:r.missing
      }
    };
    lastJson = JSON.stringify(obj, null, 2);

    var L = [];
    L.push('# ACMG Validator report'); L.push('');
    L.push('**Variant:** ' + variantLine());
    L.push('**Reviewer:** ' + (meta.reviewer||'\u2014') + ' \u00b7 ' + (meta.institution||'\u2014') + ' \u00b7 ' + (meta.date||'\u2014'));
    L.push('**Guideline basis:** ' + (meta.guideline||'\u2014'));
    L.push('**Sign-off:** ' + (meta.signoff?'completed':'not completed')); L.push('');
    if (hasProvenance()){
      L.push('## Sample provenance and sequencing metadata'); L.push('');
      provenanceRows().forEach(function(row){ L.push('- ' + row[0] + ': ' + row[1]); });
      L.push('');
    }
    L.push('## Validation status: ' + r.verdict); L.push('');
    L.push('- Pathogenic points: ' + r.pathPts);
    L.push('- Benign points: ' + r.benPts);
    L.push('- Total: ' + r.total);
    L.push('- Point-based category: ' + (r.accepted.length?CLASS_LABEL[r.derived]:'\u2014'));
    L.push('- Entered classification: ' + (r.entered?CLASS_LABEL[r.entered]:'\u2014')); L.push('');
    L.push('## Criteria reviewed'); L.push('');
    if (considered.length){
      L.push('| Criterion | Status | Applied strength | Points | Evidence status | Notes |');
      L.push('|---|---|---|---|---|---|');
      considered.forEach(function(code){
        var d = defByCode[code], s = crit[code];
        var pts = s.status==='accepted' ? (POINTS[s.group][s.strength]||0) : 0;
        var str = STRENGTH_LABEL[s.strength] + (s.strength!==d.strength?' (modified)':'');
        L.push('| '+notation(code)+' | '+labelOf(STATUS_OPTS,s.status)+' | '+str+' | '+(s.status==='accepted'?pts:'\u2014')+' | '+labelOf(EVIDENCE_OPTS,s.evidence)+' | '+(s.notes?s.notes.replace(/\|/g,'\\|').replace(/\n/g,' '):'\u2014')+' |');
      });
    } else { L.push('_No criteria reviewed yet._'); }
    L.push('');
    function md(title,arr){ L.push('## '+title); L.push(''); if(!arr.length){L.push('_None._');}else{arr.forEach(function(x){L.push('- '+x);});} L.push(''); }
    md('Strength modifications', r.modifications);
    md('Conflicts', r.conflicts);
    md('Warnings', r.warnings);
    md('Potentially useful missing evidence', r.missing);
    L.push('## Limitations'); L.push('');
    L.push('This report records the completeness and internal consistency of a manual ACMG/AMP evidence review. It does not assert clinical validity. Generated with ACMG Validator, Switzerland Omics.');
    lastMd = L.join('\n');
  }

  function pageCss(){ var s = document.querySelector('style'); return s ? s.textContent : ''; }
  function buildReportHtml(){
    var title = 'ACMG evidence review';
    if (meta.gene || meta.transcript || meta.hgvs_c) title += ' \u2014 ' + variantLine();
    var footer = '<footer class="acmg-footer-text">Generated with ACMG Validator, a tool from '+
      '<a href="https://switzerlandomics.ch">Switzerland Omics</a>. The validator checks internal consistency and process completion only; '+
      'it does not assert clinical validity, does not annotate variants, and does not constitute medical advice. '+
      'Switzerland Omics\u00ae is a registered trade mark. Classification logic follows Richards et al. 2015 (ACMG/AMP) and Tavtigian et al. 2020.</footer>';
    var extra = 'body{margin:0;padding:28px;background:#fff;font-family:ui-sans-serif,system-ui,sans-serif;}'+
      '.acmg-shell{max-width:1000px;margin:0 auto;}'+
      '.acmg-report{border-top:none!important;margin:0!important;padding:0!important;}'+
      '.acmg-rep-block{break-inside:avoid;}'+
      '.acmg-rep-scoreboard,.acmg-rep-stamp{break-inside:avoid;}';
    return '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>'+
      esc(title)+'</title><style>'+pageCss()+'\n'+extra+'</style></head><body><main class="acmg-app"><section class="acmg-shell">'+
      '<div class="acmg-report">'+lastReportBody+'</div>'+footer+'</section></main></body></html>';
  }

  function shortVariantLabel(v, idx){
    var m = (v && v.meta) || {};
    var label = m.gene || ('Variant ' + (idx + 1));
    if (m.hgvs_p) label += ' ' + m.hgvs_p;
    else if (m.hgvs_c) label += ' ' + m.hgvs_c;
    return label;
  }

  function renderVariantButtons(includeLabels){
    ensureVariants();
    var html = '';
    variants.forEach(function(v, i){
      html += '<button type="button" class="acmg-case-tab'+(i===activeVariant?' acmg-active':'')+'" data-variant="'+i+'">Variant '+(i+1)+(includeLabels ? '<span class="acmg-tab-sub"> · '+esc(shortVariantLabel(v,i))+'</span>' : '')+'</button>';
    });
    return html;
  }

  function renderTabs(){
    ensureVariants();
    var row = document.getElementById('acmg-case-tabs-row');
    var inlineRow = document.getElementById('acmg-inline-variant-tabs');
    if (row){
      var html = '<button type="button" class="acmg-case-tab" data-tab="case">Case context</button>';
      html += '<button type="button" class="acmg-case-tab" data-tab="genotype">Genotype review</button>';
      html += '<button type="button" class="acmg-case-tab" data-tab="report">Final report</button>';
      html += renderVariantButtons(true);
      row.innerHTML = html;
    }
    if (inlineRow) inlineRow.innerHTML = renderVariantButtons(false);
  }

  function fillGenotypeFields(){
    document.querySelectorAll('[data-genotype]').forEach(function(el){
      var key = el.getAttribute('data-genotype');
      el.value = genotype[key] || '';
    });
  }

  function notifyGeneStructureViewer(){
    document.dispatchEvent(new CustomEvent('acmg:gsv:update', {
      detail: {
        gene: meta.gene || '',
        coordinate: meta.coordinate || ''
      }
    }));
  }

  function recompute(){
    saveActiveVariant();
    var r = compute();
    renderScoreboard(r);
    renderCompleteness();
    renderReport(r);
    buildExports(r);
    renderTabs();
    applyFilter();
    notifyGeneStructureViewer();
  }

  function activeForTouchedOnly(code){
    var s = crit[code];
  
    if (!s) return false;
  
    if (s.status === 'accepted') return true;
    if (s.status === 'needs_second_review') return true;
    if (s.status === 'rejected') return true;
  
    if (s.evidence === 'present') return true;
    if (s.evidence === 'requires_second_review') return true;
    if (s.evidence === 'conflicting') return true;
    if (s.evidence === 'absent_after_review') return true;
    if (s.evidence === 'not_available') return true;
  
    if (hasNote(code)) return true;
  
    return false;
  }
  
  function applyFilter(){
    document.querySelectorAll('.acmg-crit').forEach(function(row){
      var code = row.getAttribute('data-code');
      var show = filterMode === 'all' || activeForTouchedOnly(code);
      row.classList.toggle('acmg-hidden', !show);
    });
  }

  function refreshRow(code){
    var row = document.querySelector('.acmg-crit[data-code="'+code+'"]');
    if (!row) return;
    var s = crit[code], d = defByCode[code];
    var modified = s.strength !== d.strength;
    row.setAttribute('data-status', s.status);
    row.setAttribute('data-rowstate', rowStateOf(code));
    row.setAttribute('data-mod', modified ? '1' : '0');
    var modtag = row.querySelector('[data-modtag]');
    if (modtag) modtag.hidden = !modified;
    row.querySelectorAll('.acmg-rowpill').forEach(function(pill){
      var st = rowStateOf(code);
      pill.setAttribute('data-state', st);
      pill.innerHTML = '<span class="acmg-rowpill-glyph" aria-hidden="true">'+ROW_GLYPH[st]+'</span>'+ROW_LABEL[st];
    });
    var note = hasNote(code);
    var disc = row.querySelector('.acmg-disclosure');
    var incomplete = (d.caveats && !caveatComplete(code)) ||
      (d.requiresNote && !note) ||
      (s.status === 'accepted' && modified && !note);
    if (disc) disc.setAttribute('data-flag', incomplete ? '1' : '0');
  }

  function syncRowSelects(row, s){
    var st = row.querySelector('select[data-field="status"]'); if (st) st.value = s.status;
    var ev = row.querySelector('select[data-field="evidence"]'); if (ev) ev.value = s.evidence;
    var sg = row.querySelector('select[data-field="strength"]'); if (sg) sg.value = s.strength;
  }

  function couple(code, field){
    var s = crit[code];
    if (field === 'evidence'){
      if (s.status === 'not_assessed' && s.evidence !== 'not_assessed' && STATUS_FROM_EVIDENCE[s.evidence]) s.status = STATUS_FROM_EVIDENCE[s.evidence];
    } else if (field === 'status'){
      if (s.evidence === 'not_assessed' && s.status !== 'not_assessed' && EVIDENCE_FROM_STATUS[s.status]) s.evidence = EVIDENCE_FROM_STATUS[s.status];
    }
  }

  function setJsonStatus(msg, isError){
    var el = document.getElementById('acmg-json-status');
    if (!el) return;
    el.textContent = msg || '';
    el.classList.toggle('acmg-json-error', Boolean(isError));
  }

  function criterionStateFromPayload(items){
    var out = emptyCritState();
    (items || []).forEach(function(item){
      var code = item.criterion || item.code || '';
      if (!out[code]) return;
      var d = defByCode[code];
      out[code] = {
        group:d.group,
        status:item.status || 'not_assessed',
        strength:item.applied_strength || item.strength || d.strength,
        evidence:item.evidence_status || item.evidence || 'not_assessed',
        caveats:d.caveats ? d.caveats.map(function(){ return item.caveat_status === 'completed'; }) : [],
        notes:item.notes || ''
      };
    });
    return out;
  }

  function normaliseGuidelineBasis(x){
    var s = String(x || '');
    if (!s) return '';
    if (s === 'ACMG/AMP 2015 (Richards et al.)' || s === 'ACMG/AMP + Tavtigian point system' || s === 'ClinGen-specified rules') return s;
    if (/ClinGen/i.test(s)) return 'ClinGen-specified rules';
    if (/Tavtigian|point/i.test(s)) return 'ACMG/AMP + Tavtigian point system';
    if (/ACMG\/AMP|Richards/i.test(s)) return 'ACMG/AMP 2015 (Richards et al.)';
    return '';
  }

  function metaFromPayload(obj, fallbackReview, fallbackCase){
    var v = obj.variant || {};
    var c = obj.case_context || fallbackCase || {};
    var review = obj.review || fallbackReview || {};
    return {
      gene:v.gene || '',
      transcript:v.transcript || '',
      hgvs_c:v.hgvs_c || '',
      hgvs_p:v.hgvs_p || '',
      build:v.genome_build || v.build || '',
      coordinate:v.coordinate || '',
      ref:v.ref || '',
      alt:v.alt || '',
      variant_type:v.variant_type || '',
      zygosity:v.zygosity || '',
      disease:c.disease || '',
      inheritance:c.inheritance || '',
      phenotype:c.phenotype || '',
      reviewer:review.reviewer || '',
      institution:review.institution || '',
      date:review.date || '',
      guideline:normaliseGuidelineBasis(obj.guideline_basis),
      entered_classification:(obj.validation && obj.validation.entered_classification) || '',
      signoff:!!review.signoff
    };
  }

  function normaliseProvenancePayload(p){
    if (!p) return { values:{}, extra:{} };
    if (p.values || p.extra) return { values:cloneObj(p.values || {}), extra:cloneObj(p.extra || {}) };
    return { values:{}, extra:cloneObj(p || {}) };
  }

  function applyImportedState(newMeta, newCrit, newVariants, newGenotype, newProvenance){
    meta = cloneMetaState(newMeta || {});
    crit = cloneCritState(newCrit || emptyCritState());
    variants = (newVariants && newVariants.length) ? newVariants : [{ meta:cloneMetaState(meta), crit:cloneCritState(crit) }];
    activeVariant = 0;
    genotype = cloneObj(newGenotype || {});
    provenance = normaliseProvenancePayload(newProvenance);
    meta = cloneMetaState(variants[0].meta);
    crit = cloneCritState(variants[0].crit);
    fillMetaFields();
    buildLists();
    applyFilter();
    renderTabs();
    recompute();
  }

  function importAcmgJsonObject(obj, sourceLabel){
    if (!obj || typeof obj !== 'object') throw new Error('The file does not contain a JSON object.');
    if (Array.isArray(obj.examples) && obj.examples.length){
      resetAll();
      var sourceExamples = obj.examples;
      var cappedExamples = false;
      if (sourceExamples.length > MAX_CASE_VARIANTS){
        sourceExamples = sourceExamples.slice(0, MAX_CASE_VARIANTS);
        cappedExamples = true;
      }
      var exampleVariants = sourceExamples.map(function(v){
        return {
          meta:metaFromPayload(v, v.review || {}, v.case_context || {}),
          crit:criterionStateFromPayload(v.criteria || [])
        };
      });
      applyImportedState(exampleVariants[0].meta, exampleVariants[0].crit, exampleVariants, obj.genotype_review || {}, obj.provenance || sourceExamples[0].provenance);
      if (cappedExamples){
        setJsonStatus('Loaded the first ' + MAX_CASE_VARIANTS + ' example variants from ' + sourceLabel + '. Multi-variant JSON import is limited to 5 variants. Contact admin@switzerlandomics.ch for a licence for unlimited joint variant input.');
      } else {
        setJsonStatus('Loaded ' + exampleVariants.length + ' example variant(s) from ' + sourceLabel + '.');
      }
      return;
    }
    resetAll();

    if (obj.schema === 'switzerlandomics.acmg-validator.case.v1' || obj.variants){
      var review = obj.review || {};
      var caseCtx = obj.case_context || {};
      var sourceVariants = obj.variants || [];
      var capped = false;
      if (sourceVariants.length > MAX_CASE_VARIANTS){
        sourceVariants = sourceVariants.slice(0, MAX_CASE_VARIANTS);
        capped = true;
      }
      var importedVariants = sourceVariants.map(function(v){
        return {
          meta:metaFromPayload(v, review, caseCtx),
          crit:criterionStateFromPayload(v.criteria || [])
        };
      });
      if (!importedVariants.length) throw new Error('The case JSON does not contain any variants.');
      applyImportedState(importedVariants[0].meta, importedVariants[0].crit, importedVariants, obj.genotype_review || {}, obj.provenance);
      if (capped){
        setJsonStatus('Loaded the first ' + MAX_CASE_VARIANTS + ' variants from ' + sourceLabel + '. Multi-variant JSON import is limited to 5 variants. Contact admin@switzerlandomics.ch for a licence for unlimited joint variant input.');
      } else {
        setJsonStatus('Loaded ' + importedVariants.length + ' variant(s) from ' + sourceLabel + '.');
      }
      return;
    }

    var importedMeta = metaFromPayload(obj, obj.review || {}, obj.case_context || {});
    var importedCrit = criterionStateFromPayload(obj.criteria || []);
    applyImportedState(importedMeta, importedCrit, [{ meta:cloneMetaState(importedMeta), crit:cloneCritState(importedCrit) }], obj.genotype_review || {}, obj.provenance);
    setJsonStatus('Loaded JSON report from ' + sourceLabel + '.');
  }

  function handleJsonFile(file){
    if (!file) return;
    if (!/\.json$/i.test(file.name || '') && file.type && file.type !== 'application/json'){
      setJsonStatus('Please choose a JSON file.', true);
      return;
    }
    var reader = new FileReader();
    reader.onload = function(){
      try {
        importAcmgJsonObject(JSON.parse(String(reader.result || '')), file.name || 'selected file');
      } catch (e){
        setJsonStatus('Could not load JSON: ' + (e && e.message ? e.message : e), true);
      }
    };
    reader.onerror = function(){ setJsonStatus('Could not read the selected file.', true); };
    reader.readAsText(file);
  }

  function bindJsonDropzone(){
    var dz = document.getElementById('acmg-json-dropzone');
    var input = document.getElementById('acmg-json-file-input');
    if (!dz || !input) return;

    input.addEventListener('change', function(){
      handleJsonFile(input.files && input.files[0]);
      input.value = '';
    });

    ['dragenter','dragover'].forEach(function(ev){
      dz.addEventListener(ev, function(e){
        e.preventDefault();
        e.stopPropagation();
        dz.classList.add('acmg-json-dragging');
      });
    });
    ['dragleave','dragend','drop'].forEach(function(ev){
      dz.addEventListener(ev, function(e){
        e.preventDefault();
        e.stopPropagation();
        dz.classList.remove('acmg-json-dragging');
      });
    });
    dz.addEventListener('drop', function(e){
      var file = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
      handleJsonFile(file);
    });
    dz.addEventListener('keydown', function(e){
      if (e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        input.click();
      }
    });
  }

  // IMPORTANT: DO NOT REMOVE THIS SCROLL OFFSET HELPER.
  // The scoreboard is intentionally sticky and must remain unchanged.
  // Native scrollIntoView() lands headings underneath that fixed visual banner,
  // so all internal tab/button jumps must use this helper to subtract the live
  // scoreboard height plus a small gap. Removing it will make section jumps
  // appear broken even though the target element is technically reached.
  function scrollToSectionWithScoreboardOffset(target){
    if (!target) return;
    var scoreboard = document.getElementById('acmg-scoreboard');
    var offset = 18;
    if (scoreboard) offset += scoreboard.getBoundingClientRect().height || scoreboard.offsetHeight || 0;
    var y = target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top:Math.max(0, y), behavior:'smooth' });
  }

  // ---- events ----
  function bindMeta(){
    document.querySelectorAll('[data-meta]').forEach(function(el){
      var key = el.getAttribute('data-meta');
      var ev = (el.tagName === 'SELECT' || el.type === 'checkbox' || el.type === 'date') ? 'change' : 'input';
      el.addEventListener(ev, function(){
        meta[key] = (el.type === 'checkbox') ? el.checked : el.value;
        recompute();
      });
    });
    document.querySelectorAll('[data-genotype]').forEach(function(el){
      var key = el.getAttribute('data-genotype');
      var ev = (el.tagName === 'SELECT') ? 'change' : 'input';
      el.addEventListener(ev, function(){
        genotype[key] = el.value;
        recompute();
      });
    });
    document.querySelectorAll('[data-prov]').forEach(function(el){
      var key = el.getAttribute('data-prov');
      el.addEventListener('input', function(){
        provenance.values[key] = el.value;
        recompute();
      });
    });
    var applyProv = document.getElementById('acmg-prov-apply');
    if (applyProv){
      applyProv.addEventListener('click', function(){
        var box = document.getElementById('acmg-prov-import');
        var txt = box ? box.value.trim() : '';
        if (!txt){ setProvenanceStatus('No provenance text pasted.'); return; }
        try {
          var parsed = JSON.parse(txt);
          applyProvenanceMap(mapGvWgsJson(parsed));
        } catch (e){
          var mapped = parseDelimitedProvenance(txt);
          if (!Object.keys(mapped).length){ setProvenanceStatus('Could not parse JSON or key-value lines.'); return; }
          applyProvenanceMap(mapped);
        }
      });
    }
    var clearProv = document.getElementById('acmg-prov-clear');
    if (clearProv){
      clearProv.addEventListener('click', function(){
        provenance = { values:{}, extra:{} };
        var box = document.getElementById('acmg-prov-import');
        if (box) box.value = '';
        fillProvenanceFields();
        setProvenanceStatus('Provenance cleared.');
        recompute();
      });
    }
  }

  var listWrap = document.querySelector('.acmg-editor');
  listWrap.addEventListener('change', function(e){
    var t = e.target;
    var row = t.closest('.acmg-crit'); if (!row) return;
    var code = row.getAttribute('data-code'); var s = crit[code];
    if (t.matches('[data-field]')){
      var field = t.getAttribute('data-field');
      s[field] = t.value;
      couple(code, field);
      syncRowSelects(row, s);
      refreshRow(code); recompute();
    } else if (t.matches('[data-cav]')){
      s.caveats[parseInt(t.getAttribute('data-cav'),10)] = t.checked;
      refreshRow(code); recompute();
    }
  });
  listWrap.addEventListener('input', function(e){
    var t = e.target;
    if (!t.matches('[data-notes]')) return;
    var row = t.closest('.acmg-crit'); if (!row) return;
    crit[row.getAttribute('data-code')].notes = t.value;
    refreshRow(row.getAttribute('data-code')); recompute();
  });
  listWrap.addEventListener('click', function(e){
    var t = e.target;
    var compact = t.closest('[data-toggle="crit-expanded"]');
    if (compact){
      var critRow = compact.closest('.acmg-crit');
      if (critRow){
        critRow.classList.add('acmg-expanded');
        compact.setAttribute('aria-expanded', 'true');
      }
      return;
    }
    if (t.matches('[data-toggle="detail"]')){
      var detail = t.parentNode.querySelector('.acmg-detail');
      if (detail) detail.hidden = !detail.hidden;
    }
  });

  document.getElementById('acmg-case-tabs').addEventListener('click', function(e){
    var t = e.target.closest('button'); if (!t) return;
    if (t.hasAttribute('data-variant')){
      saveActiveVariant();
      loadVariantState(parseInt(t.getAttribute('data-variant'), 10));
      scrollToSectionWithScoreboardOffset(document.querySelector('.acmg-editor'));
    } else if (t.getAttribute('data-tab') === 'case'){
      scrollToSectionWithScoreboardOffset(document.querySelector('.acmg-editor'));
      renderTabs();
    } else if (t.getAttribute('data-tab') === 'genotype'){
      scrollToSectionWithScoreboardOffset(document.getElementById('acmg-genotype-section'));
      renderTabs();
      t.classList.add('acmg-active');
    } else if (t.getAttribute('data-tab') === 'report'){
      scrollToSectionWithScoreboardOffset(document.getElementById('acmg-report'));
      renderTabs();
      t.classList.add('acmg-active');
    }
  });

  var inlineVariantTabs = document.getElementById('acmg-inline-variant-tabs');
  if (inlineVariantTabs){
    inlineVariantTabs.addEventListener('click', function(e){
      var t = e.target.closest('button');
      if (!t || !t.hasAttribute('data-variant')) return;
      saveActiveVariant();
      loadVariantState(parseInt(t.getAttribute('data-variant'), 10));
      scrollToSectionWithScoreboardOffset(document.querySelector('.acmg-editor'));
    });
  }

  document.getElementById('acmg-add-variant').addEventListener('click', function(){
    ensureVariants();
    if (variants.length >= MAX_CASE_VARIANTS){
      var panel = document.getElementById('acmg-json-import-panel');
      if (panel) panel.open = true;
      setJsonStatus('Joint variant input is limited to 5 variants in this free browser version. Contact admin@switzerlandomics.ch for a licence for unlimited joint variant input.', true);
      return;
    }
    saveActiveVariant();
    var base = variants[0] ? variants[0].meta : meta;
    variants.push({
      meta:{
        disease:base.disease || '',
        inheritance:base.inheritance || '',
        phenotype:base.phenotype || '',
        reviewer:base.reviewer || '',
        institution:base.institution || '',
        date:base.date || new Date().toISOString().slice(0,10),
        guideline:base.guideline || 'ACMG/AMP + Tavtigian point system'
      },
      crit:emptyCritState()
    });
    activeVariant = variants.length - 1;
    loadVariantState(activeVariant);
  });

  document.querySelectorAll('.acmg-filter button').forEach(function(btn){
    btn.addEventListener('click', function(){
      filterMode = btn.getAttribute('data-filter');
      document.querySelectorAll('.acmg-filter button').forEach(function(b){ b.classList.toggle('acmg-active', b===btn); });
      applyFilter();
    });
  });

  document.getElementById('acmg-na-rest').addEventListener('click', function(){
    CRITERIA.forEach(function(c){
      var code = c[1], s = crit[code];
      if (s.status === 'not_assessed' && s.evidence === 'not_assessed' && !hasNote(code)){
        s.status = 'not_applicable'; s.evidence = 'not_applicable';
      }
    });
    buildLists(); applyFilter(); recompute();
  });

  document.getElementById('acmg-density-toggle').addEventListener('click', function(){
    criteriaDense = !criteriaDense;
    if (appRoot) appRoot.classList.toggle('acmg-dense-mode', criteriaDense);
    this.textContent = criteriaDense ? 'Expand criteria' : 'Condense criteria';
    this.setAttribute('aria-pressed', criteriaDense ? 'true' : 'false');
    document.querySelectorAll('.acmg-crit').forEach(function(row){
      row.classList.remove('acmg-expanded');
      var btn = row.querySelector('[data-toggle="crit-expanded"]');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });
    applyFilter();
  });

  function buildBlankJsonTemplate(){
    var template = {
      schema:'switzerlandomics.acmg-validator.case.v1',
      generated_at:new Date().toISOString(),
      review:{ reviewer:'', institution:'', date:new Date().toISOString().slice(0,10), signoff:false },
      case_context:{ disease:'', inheritance:'', phenotype:'' },
      provenance:{ values:{}, extra:{} },
      genotype_review:{ gene:'', disease:'', inheritance:'', phase:'', combination:'', phase_evidence:'', conclusion:'', phenotype_fit:'', uncertainty:'' },
      variants:[{
        schema:'switzerlandomics.acmg-validator.v1',
        variant:{ gene:'', transcript:'', hgvs_c:'', hgvs_p:'', genome_build:'GRCh38', coordinate:'', ref:'', alt:'', variant_type:'', zygosity:'' },
        case_context:{ disease:'', inheritance:'', phenotype:'' },
        criteria:CRITERIA.map(function(c){
          return {
            criterion:c[1],
            notation:c[1],
            group:c[0],
            status:'not_assessed',
            default_strength:c[2],
            applied_strength:c[2],
            strength_modified:false,
            evidence_status:'not_assessed',
            caveat_status:'not_assessed',
            notes:''
          };
        }),
        validation:{ entered_classification:'' }
      }]
    };
    return JSON.stringify(template, null, 2);
  }

  function download(text, filename, type){
    var blob = new Blob([text], { type:type });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function(){ URL.revokeObjectURL(url); }, 1000);
  }
  function stem(){
    var g = (meta.gene||'variant').replace(/[^a-z0-9._-]+/gi,'_');
    var d = meta.date || new Date().toISOString().slice(0,10);
    return 'acmg_' + g + '_' + d;
  }
  function refreshReportForExport(){
    saveActiveVariant();
    renderReport(compute());
  }

  document.getElementById('acmg-print').addEventListener('click', function(){
    refreshReportForExport();
    window.print();
  });
  document.getElementById('acmg-html').addEventListener('click', function(){
    refreshReportForExport();
    download(buildReportHtml(), stem()+'.html', 'text/html');
  });
  document.getElementById('acmg-json').addEventListener('click', function(){ download(lastJson, stem()+'.json', 'application/json'); });
  document.getElementById('acmg-md').addEventListener('click', function(){ download(lastMd, stem()+'.md', 'text/markdown'); });
  var templateBtn = document.getElementById('acmg-download-json-template');
  if (templateBtn){
    templateBtn.addEventListener('click', function(){
      download(buildBlankJsonTemplate(), 'acmg_validator_blank_template.json', 'application/json');
    });
  }
  var examplesBtn = document.getElementById('acmg-download-json-examples');
  if (examplesBtn){
    examplesBtn.addEventListener('click', function(){
      download(JSON.stringify(EXAMPLE_ACMG_JSON, null, 2), 'acmg_validator_three_completed_examples_with_metadata.json', 'application/json');
    });
  }

  function bindGeneBeLookup(){
    var genebe = window.SwitzerlandOmicsGeneBe;
    var form = document.getElementById('acmg-genebe-form');
    var statusBox = document.getElementById('acmg-genebe-status');
    if (!form) return;
    if (!genebe){
      if (statusBox){
        statusBox.textContent = 'Evidence lookup is unavailable because the conversion helper did not load.';
        statusBox.classList.add('acmg-genebe-error');
      }
      return;
    }

    statusBox = document.getElementById('acmg-genebe-status');
    var summaryBox = document.getElementById('acmg-genebe-summary');
    var exampleBrca1Btn = document.getElementById('acmg-genebe-example-brca1');
    var exampleCftrBtn = document.getElementById('acmg-genebe-example-cftr');
    var exampleBrafBtn = document.getElementById('acmg-genebe-example-braf');
    var clearLookupBtn = document.getElementById('acmg-genebe-clear');
    var useContextBtn = document.getElementById('acmg-genebe-use-context');
    var downloadValidatorBtn = document.getElementById('acmg-genebe-download-validator');
    var downloadRawBtn = document.getElementById('acmg-genebe-download-raw');

    var lastValidatorJson = '';
    var lastRawJson = '';
    var lastValidatorFilename = 'acmg_validator_genebe.json';
    var lastRawFilename = 'genebe_raw.json';

    function field(id){ return document.getElementById(id); }
    function value(id){ var x = field(id); return x ? String(x.value || '').trim() : ''; }
    function setValue(id, val){ var x = field(id); if (x) x.value = val === undefined || val === null ? '' : val; }

    function setStatus(message, isError, isSuccess){
      if (!statusBox) return;
      statusBox.classList.toggle('acmg-genebe-error', !!isError);
      statusBox.classList.toggle('acmg-genebe-success', !!isSuccess);
      if (isSuccess){
        statusBox.innerHTML = '<span class="acmg-legend-dot" data-state="complete">✓</span><span>' + esc(message) + '</span>';
      } else {
        statusBox.textContent = message;
      }
    }

    function setDownloadButtons(enabled){
      if (downloadValidatorBtn) downloadValidatorBtn.disabled = !enabled;
      if (downloadRawBtn) downloadRawBtn.disabled = !enabled;
    }

    function parseCoordinate(coordinate){
      var text = String(coordinate || '').trim();
      var match = text.match(/^(?:chr)?([^:\s]+)[:\s-]+(\d+)(?::([ACGTNacgtn]+)>([ACGTNacgtn]+)|[:\s]+([ACGTNacgtn]+)[:\s]+([ACGTNacgtn]+))?/);
      if (!match) return {};
      return {
        chr: match[1] || '',
        pos: match[2] || '',
        ref: (match[3] || match[5] || '').toUpperCase(),
        alt: (match[4] || match[6] || '').toUpperCase()
      };
    }

    function inferGenome(build){
      return genebe.validatorBuildToGenome ? genebe.validatorBuildToGenome(build) : (build === 'GRCh37' ? 'hg19' : 'hg38');
    }

    function currentReviewHasWork(){
      if (variants.length > 1) return true;
      var hasMeta = Object.keys(meta || {}).some(function(key){
        var val = meta[key];
        return val !== undefined && val !== null && val !== '' && val !== false;
      });
      if (hasMeta) return true;
      var hasCriteria = Object.keys(crit || {}).some(function(code){
        var row = crit[code] || {};
        return row.status || row.evidence_status || row.caveat_status || row.notes || Object.keys(row.caveats || {}).length;
      });
      if (hasCriteria) return true;
      return Object.keys(genotype || {}).some(function(key){
        var val = genotype[key];
        return val !== undefined && val !== null && val !== '';
      });
    }

    function loadLookupExample(example){
      setValue('acmg-genebe-chr', example.chr || '');
      setValue('acmg-genebe-pos', example.pos || '');
      setValue('acmg-genebe-ref', example.ref || '');
      setValue('acmg-genebe-alt', example.alt || '');
      setValue('acmg-genebe-genome', example.genome || 'hg38');
      setStatus(example.message || 'Example loaded. Search to fetch and import evidence.');
    }

    if (exampleBrca1Btn){
      exampleBrca1Btn.addEventListener('click', function(){
        loadLookupExample({
          chr: '17',
          pos: '43124028',
          ref: 'AG',
          alt: '',
          genome: 'hg38',
          message: 'BRCA1 c.68_69delAG example loaded. Search to fetch and import evidence.'
        });
      });
    }

    if (exampleCftrBtn){
      exampleCftrBtn.addEventListener('click', function(){
        loadLookupExample({
          chr: '7',
          pos: '117559592',
          ref: 'CTT',
          alt: '',
          genome: 'hg38',
          message: 'CFTR c.1521_1523delCTT example loaded. Search to fetch and import evidence.'
        });
      });
    }

    if (exampleBrafBtn){
      exampleBrafBtn.addEventListener('click', function(){
        loadLookupExample({
          chr: '7',
          pos: '140753336',
          ref: 'A',
          alt: 'T',
          genome: 'hg38',
          message: 'BRAF c.1799T>A example loaded. Search to fetch and import evidence.'
        });
      });
    }

    if (clearLookupBtn){
      clearLookupBtn.addEventListener('click', function(){
        ['acmg-genebe-chr','acmg-genebe-pos','acmg-genebe-ref','acmg-genebe-alt'].forEach(function(id){ setValue(id, ''); });
        setValue('acmg-genebe-genome', 'hg38');
        setValue('acmg-genebe-import-mode', 'review');
        if (summaryBox){ summaryBox.hidden = true; summaryBox.textContent = ''; }
        setStatus('Evidence lookup cleared.');
      });
    }

    if (useContextBtn){
      useContextBtn.addEventListener('click', function(){
        var parsed = parseCoordinate(meta.coordinate);
        var ref = meta.ref || parsed.ref || '';
        var alt = meta.alt || parsed.alt || '';
        setValue('acmg-genebe-chr', parsed.chr);
        setValue('acmg-genebe-pos', parsed.pos);
        setValue('acmg-genebe-ref', ref);
        setValue('acmg-genebe-alt', alt);
        setValue('acmg-genebe-genome', inferGenome(meta.build));
        var ready = parsed.chr && parsed.pos && ref;
        setStatus(ready ? 'Active variant context copied.' : 'Active variant context copied where available. Add chromosome, position and reference allele before lookup.', !ready);
      });
    }

    form.addEventListener('submit', async function(event){
      event.preventDefault();

      var params = {
        chr: genebe.cleanChr(value('acmg-genebe-chr')),
        pos: value('acmg-genebe-pos'),
        ref: genebe.cleanAllele(value('acmg-genebe-ref')),
        alt: genebe.cleanAllele(value('acmg-genebe-alt')),
        genome: value('acmg-genebe-genome') || 'hg38'
      };
      var importMode = value('acmg-genebe-import-mode') || 'review';

      if (!params.chr || !params.pos || !params.ref){
        setStatus('Chromosome, position and reference allele are required for evidence lookup. Leave alternate allele blank for simple deletions.', true);
        return;
      }

      if (currentReviewHasWork()){
        var okToOverwrite = window.confirm('Importing external evidence will overwrite the current ACMG Validator work in this page. Continue?');
        if (!okToOverwrite){
          setStatus('Import cancelled. Current ACMG Validator work was not changed.');
          return;
        }
      }

      lastValidatorJson = '';
      lastRawJson = '';
      lastValidatorFilename = 'acmg_validator_genebe.json';
      lastRawFilename = 'genebe_raw.json';
      setDownloadButtons(false);
      if (summaryBox){ summaryBox.hidden = true; summaryBox.textContent = ''; }
      setStatus('Querying evidence sources...');

      try {
        var result = await genebe.fetchAndConvert(params, importMode);
        lastRawJson = JSON.stringify(result.payload, null, 2);
        lastValidatorJson = JSON.stringify(result.validatorJson, null, 2);
        lastValidatorFilename = result.validatorFilename;
        lastRawFilename = result.rawFilename;

        importAcmgJsonObject(result.validatorJson, 'external evidence lookup');
        setStatus('Evidence imported. Review all suggested criteria before sign-off.', false, true);
        if (summaryBox){
          summaryBox.textContent = JSON.stringify(result.summary, null, 2);
          summaryBox.hidden = true;
        }
        setDownloadButtons(true);
      } catch (err){
        setStatus(err && err.message ? err.message : String(err), true);
        if (summaryBox){
          summaryBox.textContent = err && err.payload ? JSON.stringify(err.payload, null, 2) : String(err);
          summaryBox.hidden = false;
        }
      }
    });

    if (downloadValidatorBtn){
      downloadValidatorBtn.addEventListener('click', function(){
        if (!lastValidatorJson) return;
        download(lastValidatorJson, lastValidatorFilename, 'application/json');
      });
    }

    if (downloadRawBtn){
      downloadRawBtn.addEventListener('click', function(){
        if (!lastRawJson) return;
        download(lastRawJson, lastRawFilename, 'application/json');
      });
    }
  }

  bindGeneBeLookup();


  function resetAll(){
    meta = {};
    crit = emptyCritState();
    activeVariant = 0;
    genotype = {};
    provenance = { values:{}, extra:{} };
    variants = [{ meta:cloneMetaState(meta), crit:cloneCritState(crit) }];
    document.querySelectorAll('[data-meta]').forEach(function(el){
      if (el.type === 'checkbox') el.checked = false; else el.value = '';
    });
    document.querySelectorAll('[data-genotype]').forEach(function(el){ el.value = ''; });
    var provBox = document.getElementById('acmg-prov-import');
    if (provBox) provBox.value = '';
    fillProvenanceFields();
    setProvenanceStatus('');
    setJsonStatus('No JSON file selected.');
    buildLists(); applyFilter(); renderTabs(); recompute();
  }
  document.getElementById('acmg-reset').addEventListener('click', resetAll);

  function fillMetaFields(){
    document.querySelectorAll('[data-meta]').forEach(function(el){
      var key = el.getAttribute('data-meta');
      if (el.type === 'checkbox') el.checked = !!meta[key]; else el.value = meta[key] || '';
    });
    fillGenotypeFields();
    fillProvenanceFields();
  }

  function markUntouchedAsNotApplicable(){
    CRITERIA.forEach(function(c){
      var code = c[1], s = crit[code];
      if (s.status === 'not_assessed' && s.evidence === 'not_assessed' && !hasNote(code)){
        s.status = 'not_applicable'; s.evidence = 'not_applicable';
      }
    });
  }


  var EXAMPLE_ACMG_JSON = {
    "schema": "switzerlandomics.acmg-validator.examples.v1",
    "generated_at": "2026-06-05T00:00:00Z",
    "examples": [
      {
        "schema": "switzerlandomics.acmg-validator.v1",
        "example_id": "load_brca1_example",
        "generated_at": "2026-06-05T00:00:00Z",
        "guideline_basis": "ClinGen ENIGMA BRCA1/2 VCEP specification with ACMG/AMP + Tavtigian point display",
        "review": {
          "reviewer": "Example reviewer",
          "institution": "Example Laboratory",
          "date": "2026-06-05",
          "signoff": true
        },
        "variant": {
          "gene": "BRCA1",
          "transcript": "NM_007294.4",
          "hgvs_c": "c.68_69delAG",
          "hgvs_p": "p.(Glu23ValfsTer17)",
          "genome_build": "GRCh38",
          "coordinate": "chr17:43124028-43124029",
          "ref": "AG",
          "alt": "",
          "variant_type": "Small deletion",
          "zygosity": "Heterozygous"
        },
        "case_context": {
          "disease": "BRCA1-related cancer predisposition",
          "inheritance": "AD",
          "phenotype": "Example constitutional cancer-predisposition case; phenotype entered for demonstration only."
        },
        "provenance": {
          "values": {
            "id": "2707c7a2-c690-4947-b97a-dc75698ba77d",
            "genome_id": "GV_WGS001902",
            "metadata.samples.0.sample_id": "ABC001",
            "metadata.samples.0.primary_sample_type": "Fibroblasts",
            "metadata.samples.0.q30": "91.41",
            "metadata.assay.identifier": "ASSAY-GV_WGS001902",
            "metadata.assay.code": "EFO:0004203",
            "metadata.assay.intended_read_depth": "30x",
            "metadata.assay.intended_read_length": "150",
            "metadata.assay.library_preparation": "TruSeq DNA PCR-Free",
            "metadata.assay.source_system": "Genome Center H2030",
            "metadata.assay.sop": "SOP-SEQ-2025-01",
            "metadata.assay.start_datetime": "2025-08-03T20:00:00Z",
            "metadata.assay.subject_pseudo_identifier": "SUBJ-XYZ123",
            "metadata.run.identifier": "RUN-GV_WGS001902",
            "metadata.run.datetime": "2025-08-03T21:00:00Z",
            "metadata.run.average_insert_size": "350",
            "metadata.run.average_read_length": "150",
            "metadata.run.mean_read_depth": "34.9",
            "metadata.run.read_count": "390500001",
            "metadata.instrument.code": "OBI:0002001",
            "metadata.instrument.label": "Illumina NovaSeq 6000",
            "metadata.analysis.identifier": "ANALYSIS-GV_WGS001902",
            "metadata.analysis.code": "EDAM:operation_3218",
            "metadata.analysis.reference_sequence": "GRCh38",
            "metadata.analysis.software": "GATK 4.5.0.0",
            "metadata.analysis.source_system": "GenomicVault",
            "metadata.analysis.sop": "SOP-ANALYSIS-2025-01",
            "metadata.analysis.start_datetime": "2025-08-04T12:00:00Z",
            "metadata.analysis.subject_pseudo_identifier": "SUBJ-XYZ123",
            "metadata.files.fastq": "vault/genomes/GV_WGS001902.fastq.gz",
            "metadata.md5.fastq": "abc123def456...",
            "metadata.size.fastq": "1.2 GB",
            "metadata.files.vcf": "vault/genomes/GV_WGS001902.vcf.gz",
            "metadata.md5.vcf": "789ghi012jkl...",
            "metadata.size.vcf": "16.5 MB",
            "metadata.shares.0.date": "2025-08-07",
            "metadata.shares.0.type": "QV_ACMG",
            "metadata.shares.0.recipient": "Dr. Jones <dr.jones@hospital.ch>"
          },
          "extra": {
            "created_at": "2025-08-03T20:07:08.603899+00:00",
            "user_id": "ff004d73-3101-4801-8c97-cd4ede633a45",
            "genome_processing_status": "stored",
            "has_been_shared": "True",
            "metadata.shares.1.date": "2025-08-07",
            "metadata.shares.1.type": "QV_ACMG",
            "metadata.shares.1.ftp_url": "ftp://example/path",
            "metadata.shares.1.recipient": "Dr. request <dr.request@hospital.ch>",
            "metadata.samples.0.barcode": "A0123456",
            "metadata.samples.0.library_id": "NGS000011336",
            "metadata.samples.0.pf_clusters": "390500001",
            "metadata.samples.0.new_variants": "0.66",
            "metadata.samples.0.mean_coverage": "30.5x",
            "metadata.samples.0.pf_duplicates": "10.01",
            "metadata.samples.0.pf_bases_aligned": "96.01",
            "metadata.samples.0.requested_coverage": "30x",
            "metadata.qc_summary.timestamp": "2028-01-01T01:01:01Z",
            "metadata.qc_summary.approved_by": "Dr. Smith",
            "metadata.qc_summary.qc_checksum": "78fds6fds56fds567567fds678fds",
            "metadata.qc_summary.mean_coverage": "34.9x",
            "metadata.qc_summary.lowest_coverage": "10.0x",
            "metadata.qc_summary.requested_coverage": "30x",
            "metadata.qc_summary.delivered_file_types.0": "FastQ",
            "file_sizes": "None",
            "order_id": "None"
          }
        },
        "criteria": [
          {
            "criterion": "PVS1",
            "notation": "PVS1",
            "group": "pathogenic",
            "status": "accepted",
            "default_strength": "very_strong",
            "applied_strength": "very_strong",
            "strength_modified": false,
            "points": 8,
            "evidence_status": "present",
            "caveat_status": "completed",
            "row_state": "complete",
            "notes": "Accepted. BRCA1 c.68_69del is a two-nucleotide deletion causing frameshift p.Glu23ValfsTer17, premature termination, and predicted nonsense-mediated decay in a biologically relevant BRCA1 exon. Heterozygous loss of function is an established mechanism for BRCA1-related cancer predisposition. ClinGen ENIGMA VCEP reports PVS1 met."
          },
          {
            "criterion": "PS1",
            "notation": "PS1",
            "group": "pathogenic",
            "status": "not_applicable",
            "default_strength": "strong",
            "applied_strength": "strong",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied ClinVar/GeneBe material."
          },
          {
            "criterion": "PS2",
            "notation": "PS2",
            "group": "pathogenic",
            "status": "not_applicable",
            "default_strength": "strong",
            "applied_strength": "strong",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied ClinVar/GeneBe material."
          },
          {
            "criterion": "PS3",
            "notation": "PS3",
            "group": "pathogenic",
            "status": "accepted",
            "default_strength": "strong",
            "applied_strength": "strong",
            "strength_modified": false,
            "points": 4,
            "evidence_status": "present",
            "caveat_status": "not_applicable",
            "row_state": "complete",
            "notes": "Accepted. ClinGen ENIGMA VCEP reports calibrated functional evidence showing protein function similar to pathogenic controls, citing PMID:32546644."
          },
          {
            "criterion": "PS4",
            "notation": "PS4",
            "group": "pathogenic",
            "status": "not_applicable",
            "default_strength": "strong",
            "applied_strength": "strong",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied ClinVar/GeneBe material."
          },
          {
            "criterion": "PM1",
            "notation": "PM1",
            "group": "pathogenic",
            "status": "not_applicable",
            "default_strength": "moderate",
            "applied_strength": "moderate",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied ClinVar/GeneBe material."
          },
          {
            "criterion": "PM2",
            "notation": "PM2",
            "group": "pathogenic",
            "status": "rejected",
            "default_strength": "moderate",
            "applied_strength": "moderate",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "absent_after_review",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Rejected. The supplied ENIGMA summary states that PM2_Supporting is not met because the variant is present in gnomAD below the BS1_Supporting threshold but not absent or sufficiently rare for PM2 under the applicable specification."
          },
          {
            "criterion": "PM3",
            "notation": "PM3",
            "group": "pathogenic",
            "status": "not_applicable",
            "default_strength": "moderate",
            "applied_strength": "moderate",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied ClinVar/GeneBe material."
          },
          {
            "criterion": "PM4",
            "notation": "PM4",
            "group": "pathogenic",
            "status": "not_applicable",
            "default_strength": "moderate",
            "applied_strength": "moderate",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied ClinVar/GeneBe material."
          },
          {
            "criterion": "PM5",
            "notation": "PM5_Strong",
            "group": "pathogenic",
            "status": "accepted",
            "default_strength": "moderate",
            "applied_strength": "strong",
            "strength_modified": true,
            "points": 4,
            "evidence_status": "present",
            "caveat_status": "not_applicable",
            "row_state": "complete",
            "notes": "Accepted at Strong as PM5_Strong / PTC under ENIGMA BRCA1/2 VCEP specification. The VCEP considered exon-specific evidence for premature termination codons in BRCA1 exon 3 and reported strong pathogenic evidence."
          },
          {
            "criterion": "PM6",
            "notation": "PM6",
            "group": "pathogenic",
            "status": "not_applicable",
            "default_strength": "moderate",
            "applied_strength": "moderate",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied ClinVar/GeneBe material."
          },
          {
            "criterion": "PP1",
            "notation": "PP1",
            "group": "pathogenic",
            "status": "not_applicable",
            "default_strength": "supporting",
            "applied_strength": "supporting",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied ClinVar/GeneBe material."
          },
          {
            "criterion": "PP2",
            "notation": "PP2",
            "group": "pathogenic",
            "status": "not_applicable",
            "default_strength": "supporting",
            "applied_strength": "supporting",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied ClinVar/GeneBe material."
          },
          {
            "criterion": "PP3",
            "notation": "PP3",
            "group": "pathogenic",
            "status": "not_applicable",
            "default_strength": "supporting",
            "applied_strength": "supporting",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied ClinVar/GeneBe material."
          },
          {
            "criterion": "PP4",
            "notation": "PP4",
            "group": "pathogenic",
            "status": "not_applicable",
            "default_strength": "supporting",
            "applied_strength": "supporting",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied ClinVar/GeneBe material."
          },
          {
            "criterion": "PP5",
            "notation": "PP5",
            "group": "pathogenic",
            "status": "not_applicable",
            "default_strength": "supporting",
            "applied_strength": "supporting",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied. ClinVar expert-panel classification is recorded as supporting context, but PP5 is deprecated and not used as independent evidence."
          },
          {
            "criterion": "BA1",
            "notation": "BA1",
            "group": "benign",
            "status": "rejected",
            "default_strength": "standalone",
            "applied_strength": "standalone",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "absent_after_review",
            "caveat_status": "completed",
            "row_state": "noevidence",
            "notes": "Rejected. The variant does not meet a disease-appropriate stand-alone benign frequency threshold."
          },
          {
            "criterion": "BS1",
            "notation": "BS1",
            "group": "benign",
            "status": "rejected",
            "default_strength": "strong",
            "applied_strength": "strong",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "absent_after_review",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Rejected. The supplied ENIGMA summary states BS1 is not met; observed population frequency is below the ENIGMA BRCA1/2 VCEP BS1_Supporting threshold."
          },
          {
            "criterion": "BS2",
            "notation": "BS2",
            "group": "benign",
            "status": "not_applicable",
            "default_strength": "strong",
            "applied_strength": "strong",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied ClinVar/GeneBe material."
          },
          {
            "criterion": "BS3",
            "notation": "BS3",
            "group": "benign",
            "status": "not_applicable",
            "default_strength": "strong",
            "applied_strength": "strong",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied ClinVar/GeneBe material."
          },
          {
            "criterion": "BS4",
            "notation": "BS4",
            "group": "benign",
            "status": "not_applicable",
            "default_strength": "strong",
            "applied_strength": "strong",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied ClinVar/GeneBe material."
          },
          {
            "criterion": "BP1",
            "notation": "BP1",
            "group": "benign",
            "status": "not_applicable",
            "default_strength": "supporting",
            "applied_strength": "supporting",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied ClinVar/GeneBe material."
          },
          {
            "criterion": "BP2",
            "notation": "BP2",
            "group": "benign",
            "status": "not_applicable",
            "default_strength": "supporting",
            "applied_strength": "supporting",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied ClinVar/GeneBe material."
          },
          {
            "criterion": "BP3",
            "notation": "BP3",
            "group": "benign",
            "status": "not_applicable",
            "default_strength": "supporting",
            "applied_strength": "supporting",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied ClinVar/GeneBe material."
          },
          {
            "criterion": "BP4",
            "notation": "BP4",
            "group": "benign",
            "status": "not_applicable",
            "default_strength": "supporting",
            "applied_strength": "supporting",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied ClinVar/GeneBe material."
          },
          {
            "criterion": "BP5",
            "notation": "BP5",
            "group": "benign",
            "status": "not_applicable",
            "default_strength": "supporting",
            "applied_strength": "supporting",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied ClinVar/GeneBe material."
          },
          {
            "criterion": "BP6",
            "notation": "BP6",
            "group": "benign",
            "status": "not_applicable",
            "default_strength": "supporting",
            "applied_strength": "supporting",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied. No benign reputable-source assertion is used, and BP6 is deprecated."
          },
          {
            "criterion": "BP7",
            "notation": "BP7",
            "group": "benign",
            "status": "not_applicable",
            "default_strength": "supporting",
            "applied_strength": "supporting",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied ClinVar/GeneBe material."
          }
        ],
        "validation": {
          "pathogenic_points": 16,
          "benign_points": 0,
          "total_points": 16,
          "point_based_category": "pathogenic",
          "entered_classification": "pathogenic",
          "verdict": "Internally consistent",
          "strength_modifications": [
            "PM5_Strong applied at strong"
          ],
          "conflicts": [],
          "warnings": [],
          "missing_evidence": []
        },
        "evidence_summary": {
          "source_basis": "User-provided ClinVar/GeneBe pasted evidence only. These examples are for validator demonstration and are not clinical sign-off.",
          "limitations": [
            "ClinVar/GeneBe evidence is sufficient to prefill the expert-panel criteria used here, but laboratory confirmation, full case phenotype, segregation, ancestry-specific frequency review, and local sign-off remain outside this example."
          ]
        }
      },
      {
        "schema": "switzerlandomics.acmg-validator.v1",
        "example_id": "load_cftr_example",
        "generated_at": "2026-06-05T00:00:00Z",
        "guideline_basis": "ACMG/AMP 2015 with CFTR2/ClinVar practice-guideline context; Tavtigian point display",
        "review": {
          "reviewer": "Example reviewer",
          "institution": "Example Laboratory",
          "date": "2026-06-05",
          "signoff": true
        },
        "variant": {
          "gene": "CFTR",
          "transcript": "NM_000492.4",
          "hgvs_c": "c.1521_1523delCTT",
          "hgvs_p": "p.(Phe508del)",
          "genome_build": "GRCh38",
          "coordinate": "chr7:117559592-117559594",
          "ref": "CTT",
          "alt": "",
          "variant_type": "In-frame indel",
          "zygosity": "Homozygous or compound het"
        },
        "case_context": {
          "disease": "Cystic fibrosis",
          "inheritance": "AR",
          "phenotype": "Classic cystic fibrosis phenotype in this teaching case; genotype-level evidence assumes homozygous state or confirmed in trans with another pathogenic CFTR allele."
        },
        "provenance": {
          "values": {
            "id": "2707c7a2-c690-4947-b97a-dc75698ba77d",
            "genome_id": "GV_WGS001902",
            "metadata.samples.0.sample_id": "ABC001",
            "metadata.samples.0.primary_sample_type": "Fibroblasts",
            "metadata.samples.0.q30": "91.41",
            "metadata.assay.identifier": "ASSAY-GV_WGS001902",
            "metadata.assay.code": "EFO:0004203",
            "metadata.assay.intended_read_depth": "30x",
            "metadata.assay.intended_read_length": "150",
            "metadata.assay.library_preparation": "TruSeq DNA PCR-Free",
            "metadata.assay.source_system": "Genome Center H2030",
            "metadata.assay.sop": "SOP-SEQ-2025-01",
            "metadata.assay.start_datetime": "2025-08-03T20:00:00Z",
            "metadata.assay.subject_pseudo_identifier": "SUBJ-XYZ123",
            "metadata.run.identifier": "RUN-GV_WGS001902",
            "metadata.run.datetime": "2025-08-03T21:00:00Z",
            "metadata.run.average_insert_size": "350",
            "metadata.run.average_read_length": "150",
            "metadata.run.mean_read_depth": "34.9",
            "metadata.run.read_count": "390500001",
            "metadata.instrument.code": "OBI:0002001",
            "metadata.instrument.label": "Illumina NovaSeq 6000",
            "metadata.analysis.identifier": "ANALYSIS-GV_WGS001902",
            "metadata.analysis.code": "EDAM:operation_3218",
            "metadata.analysis.reference_sequence": "GRCh38",
            "metadata.analysis.software": "GATK 4.5.0.0",
            "metadata.analysis.source_system": "GenomicVault",
            "metadata.analysis.sop": "SOP-ANALYSIS-2025-01",
            "metadata.analysis.start_datetime": "2025-08-04T12:00:00Z",
            "metadata.analysis.subject_pseudo_identifier": "SUBJ-XYZ123",
            "metadata.files.fastq": "vault/genomes/GV_WGS001902.fastq.gz",
            "metadata.md5.fastq": "abc123def456...",
            "metadata.size.fastq": "1.2 GB",
            "metadata.files.vcf": "vault/genomes/GV_WGS001902.vcf.gz",
            "metadata.md5.vcf": "789ghi012jkl...",
            "metadata.size.vcf": "16.5 MB",
            "metadata.shares.0.date": "2025-08-07",
            "metadata.shares.0.type": "QV_ACMG",
            "metadata.shares.0.recipient": "Dr. Jones <dr.jones@hospital.ch>"
          },
          "extra": {
            "created_at": "2025-08-03T20:07:08.603899+00:00",
            "user_id": "ff004d73-3101-4801-8c97-cd4ede633a45",
            "genome_processing_status": "stored",
            "has_been_shared": "True",
            "metadata.shares.1.date": "2025-08-07",
            "metadata.shares.1.type": "QV_ACMG",
            "metadata.shares.1.ftp_url": "ftp://example/path",
            "metadata.shares.1.recipient": "Dr. request <dr.request@hospital.ch>",
            "metadata.samples.0.barcode": "A0123456",
            "metadata.samples.0.library_id": "NGS000011336",
            "metadata.samples.0.pf_clusters": "390500001",
            "metadata.samples.0.new_variants": "0.66",
            "metadata.samples.0.mean_coverage": "30.5x",
            "metadata.samples.0.pf_duplicates": "10.01",
            "metadata.samples.0.pf_bases_aligned": "96.01",
            "metadata.samples.0.requested_coverage": "30x",
            "metadata.qc_summary.timestamp": "2028-01-01T01:01:01Z",
            "metadata.qc_summary.approved_by": "Dr. Smith",
            "metadata.qc_summary.qc_checksum": "78fds6fds56fds567567fds678fds",
            "metadata.qc_summary.mean_coverage": "34.9x",
            "metadata.qc_summary.lowest_coverage": "10.0x",
            "metadata.qc_summary.requested_coverage": "30x",
            "metadata.qc_summary.delivered_file_types.0": "FastQ",
            "file_sizes": "None",
            "order_id": "None"
          }
        },
        "criteria": [
          {
            "criterion": "PVS1",
            "notation": "PVS1",
            "group": "pathogenic",
            "status": "not_applicable",
            "default_strength": "very_strong",
            "applied_strength": "very_strong",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied ClinVar/GeneBe material."
          },
          {
            "criterion": "PS1",
            "notation": "PS1",
            "group": "pathogenic",
            "status": "not_applicable",
            "default_strength": "strong",
            "applied_strength": "strong",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied ClinVar/GeneBe material."
          },
          {
            "criterion": "PS2",
            "notation": "PS2",
            "group": "pathogenic",
            "status": "not_applicable",
            "default_strength": "strong",
            "applied_strength": "strong",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied ClinVar/GeneBe material."
          },
          {
            "criterion": "PS3",
            "notation": "PS3",
            "group": "pathogenic",
            "status": "accepted",
            "default_strength": "strong",
            "applied_strength": "strong",
            "strength_modified": false,
            "points": 4,
            "evidence_status": "present",
            "caveat_status": "not_applicable",
            "row_state": "complete",
            "notes": "Accepted. ClinVar submitters report experimental studies showing that p.Phe508del affects CFTR function, including reduced chloride conductance, impaired maturation/processing, and mouse-model functional evidence; cited PMIDs include 2475911, 23974870, 7560099, 30030066, and 27738188."
          },
          {
            "criterion": "PS4",
            "notation": "PS4",
            "group": "pathogenic",
            "status": "not_applicable",
            "default_strength": "strong",
            "applied_strength": "strong",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied ClinVar/GeneBe material."
          },
          {
            "criterion": "PM1",
            "notation": "PM1",
            "group": "pathogenic",
            "status": "rejected",
            "default_strength": "moderate",
            "applied_strength": "moderate",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "absent_after_review",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied. Although GeneBe proposes PM1 hotspot/domain evidence, the ClinVar examples used here support the completed teaching classification through PM3, PP1, PS3, PM4, and PP4. PM1 is left rejected to avoid double-counting domain/functional evidence."
          },
          {
            "criterion": "PM2",
            "notation": "PM2",
            "group": "pathogenic",
            "status": "not_applicable",
            "default_strength": "moderate",
            "applied_strength": "moderate",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied ClinVar/GeneBe material."
          },
          {
            "criterion": "PM3",
            "notation": "PM3_VeryStrong",
            "group": "pathogenic",
            "status": "accepted",
            "default_strength": "moderate",
            "applied_strength": "very_strong",
            "strength_modified": true,
            "points": 8,
            "evidence_status": "present",
            "caveat_status": "not_applicable",
            "row_state": "complete",
            "notes": "Accepted at Very Strong for this teaching case. ClinVar evidence reports the variant in homozygous state and in compound heterozygosity with a second pathogenic CFTR allele in cystic fibrosis cases, with segregation in multiple families; cited PMIDs include 8092189, 1379413, 2570460, and 25910067."
          },
          {
            "criterion": "PM4",
            "notation": "PM4_Supporting",
            "group": "pathogenic",
            "status": "accepted",
            "default_strength": "moderate",
            "applied_strength": "supporting",
            "strength_modified": true,
            "points": 1,
            "evidence_status": "present",
            "caveat_status": "not_applicable",
            "row_state": "complete",
            "notes": "Accepted at Supporting. The variant is an in-frame deletion removing phenylalanine 508 in a conserved, non-repeat, disease-relevant region; ClinVar submitters explicitly report PM4_Supporting."
          },
          {
            "criterion": "PM5",
            "notation": "PM5",
            "group": "pathogenic",
            "status": "not_applicable",
            "default_strength": "moderate",
            "applied_strength": "moderate",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied ClinVar/GeneBe material."
          },
          {
            "criterion": "PM6",
            "notation": "PM6",
            "group": "pathogenic",
            "status": "not_applicable",
            "default_strength": "moderate",
            "applied_strength": "moderate",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied ClinVar/GeneBe material."
          },
          {
            "criterion": "PP1",
            "notation": "PP1_Strong",
            "group": "pathogenic",
            "status": "accepted",
            "default_strength": "supporting",
            "applied_strength": "strong",
            "strength_modified": true,
            "points": 4,
            "evidence_status": "present",
            "caveat_status": "not_applicable",
            "row_state": "complete",
            "notes": "Accepted at Strong for this teaching case. Multiple family observations and segregation with cystic fibrosis are reported in ClinVar submitter evidence."
          },
          {
            "criterion": "PP2",
            "notation": "PP2",
            "group": "pathogenic",
            "status": "not_applicable",
            "default_strength": "supporting",
            "applied_strength": "supporting",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied ClinVar/GeneBe material."
          },
          {
            "criterion": "PP3",
            "notation": "PP3",
            "group": "pathogenic",
            "status": "not_applicable",
            "default_strength": "supporting",
            "applied_strength": "supporting",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied ClinVar/GeneBe material."
          },
          {
            "criterion": "PP4",
            "notation": "PP4",
            "group": "pathogenic",
            "status": "accepted",
            "default_strength": "supporting",
            "applied_strength": "supporting",
            "strength_modified": false,
            "points": 1,
            "evidence_status": "present",
            "caveat_status": "not_applicable",
            "row_state": "complete",
            "notes": "Accepted for the teaching case only. The case context is set to classic cystic fibrosis, a phenotype highly specific for biallelic CFTR disease when paired with appropriate genotype-level evidence."
          },
          {
            "criterion": "PP5",
            "notation": "PP5",
            "group": "pathogenic",
            "status": "not_applicable",
            "default_strength": "supporting",
            "applied_strength": "supporting",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied. ClinVar practice-guideline and CFTR2 expert-panel classifications are recorded as source context, but PP5 is deprecated and not used as independent evidence."
          },
          {
            "criterion": "BA1",
            "notation": "BA1",
            "group": "benign",
            "status": "rejected",
            "default_strength": "standalone",
            "applied_strength": "standalone",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "absent_after_review",
            "caveat_status": "completed",
            "row_state": "noevidence",
            "notes": "Rejected. Allele frequency is not above a disease-appropriate stand-alone benign threshold for a common autosomal recessive carrier allele."
          },
          {
            "criterion": "BS1",
            "notation": "BS1",
            "group": "benign",
            "status": "rejected",
            "default_strength": "strong",
            "applied_strength": "strong",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "absent_after_review",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Rejected. Population frequency is high for a rare-disease example, but this is a common pathogenic CFTR carrier allele in an autosomal recessive disease. The frequency is not treated as benign evidence for this cystic fibrosis context."
          },
          {
            "criterion": "BS2",
            "notation": "BS2",
            "group": "benign",
            "status": "not_applicable",
            "default_strength": "strong",
            "applied_strength": "strong",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied ClinVar/GeneBe material."
          },
          {
            "criterion": "BS3",
            "notation": "BS3",
            "group": "benign",
            "status": "not_applicable",
            "default_strength": "strong",
            "applied_strength": "strong",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied ClinVar/GeneBe material."
          },
          {
            "criterion": "BS4",
            "notation": "BS4",
            "group": "benign",
            "status": "not_applicable",
            "default_strength": "strong",
            "applied_strength": "strong",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied ClinVar/GeneBe material."
          },
          {
            "criterion": "BP1",
            "notation": "BP1",
            "group": "benign",
            "status": "not_applicable",
            "default_strength": "supporting",
            "applied_strength": "supporting",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied ClinVar/GeneBe material."
          },
          {
            "criterion": "BP2",
            "notation": "BP2",
            "group": "benign",
            "status": "not_applicable",
            "default_strength": "supporting",
            "applied_strength": "supporting",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied ClinVar/GeneBe material."
          },
          {
            "criterion": "BP3",
            "notation": "BP3",
            "group": "benign",
            "status": "not_applicable",
            "default_strength": "supporting",
            "applied_strength": "supporting",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied ClinVar/GeneBe material."
          },
          {
            "criterion": "BP4",
            "notation": "BP4",
            "group": "benign",
            "status": "not_applicable",
            "default_strength": "supporting",
            "applied_strength": "supporting",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "completed",
            "row_state": "noevidence",
            "notes": "Not applied. No benign computational evidence is used; functional and clinical evidence support pathogenicity."
          },
          {
            "criterion": "BP5",
            "notation": "BP5",
            "group": "benign",
            "status": "not_applicable",
            "default_strength": "supporting",
            "applied_strength": "supporting",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied ClinVar/GeneBe material."
          },
          {
            "criterion": "BP6",
            "notation": "BP6",
            "group": "benign",
            "status": "not_applicable",
            "default_strength": "supporting",
            "applied_strength": "supporting",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied. No benign reputable-source assertion is used, and BP6 is deprecated."
          },
          {
            "criterion": "BP7",
            "notation": "BP7",
            "group": "benign",
            "status": "not_applicable",
            "default_strength": "supporting",
            "applied_strength": "supporting",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied ClinVar/GeneBe material."
          }
        ],
        "validation": {
          "pathogenic_points": 18,
          "benign_points": 0,
          "total_points": 18,
          "point_based_category": "pathogenic",
          "entered_classification": "pathogenic",
          "verdict": "Internally consistent",
          "strength_modifications": [
            "PM3_VeryStrong applied at very_strong",
            "PM4_Supporting applied at supporting",
            "PP1_Strong applied at strong"
          ],
          "conflicts": [],
          "warnings": [],
          "missing_evidence": []
        },
        "evidence_summary": {
          "source_basis": "User-provided ClinVar/GeneBe pasted evidence only. These examples are for validator demonstration and are not clinical sign-off.",
          "limitations": [
            "The CFTR example depends on an assumed affected cystic fibrosis case with biallelic genotype context. A real report must document phase, the second allele if compound heterozygous, phenotype, sweat chloride or equivalent clinical evidence, and laboratory QC."
          ]
        }
      },
      {
        "schema": "switzerlandomics.acmg-validator.v1",
        "example_id": "load_braf_example",
        "generated_at": "2026-06-05T00:00:00Z",
        "guideline_basis": "ACMG/AMP + Tavtigian point display using supplied GeneBe ACMG evidence; PP5 recorded but not applied because deprecated",
        "review": {
          "reviewer": "Example reviewer",
          "institution": "Example Laboratory",
          "date": "2026-06-05",
          "signoff": true
        },
        "variant": {
          "gene": "BRAF",
          "transcript": "NM_004333.6",
          "hgvs_c": "c.1799T>A",
          "hgvs_p": "p.(Val600Glu)",
          "genome_build": "GRCh38",
          "coordinate": "chr7:140753336",
          "ref": "A",
          "alt": "T",
          "variant_type": "SNV",
          "zygosity": "Heterozygous"
        },
        "case_context": {
          "disease": "BRAF-related RASopathy / cardiofaciocutaneous syndrome teaching context; variant also has major somatic oncology relevance",
          "inheritance": "AD",
          "phenotype": "Teaching example based on supplied GeneBe ACMG evidence for BRAF p.Val600Glu. Real use requires confirmation of constitutional versus somatic origin, phenotype, indication, zygosity, and disease-specific expert review."
        },
        "provenance": {
          "values": {
            "id": "2707c7a2-c690-4947-b97a-dc75698ba77d",
            "genome_id": "GV_WGS001902",
            "metadata.samples.0.sample_id": "ABC001",
            "metadata.samples.0.primary_sample_type": "Fibroblasts",
            "metadata.samples.0.q30": "91.41",
            "metadata.assay.identifier": "ASSAY-GV_WGS001902",
            "metadata.assay.code": "EFO:0004203",
            "metadata.assay.intended_read_depth": "30x",
            "metadata.assay.intended_read_length": "150",
            "metadata.assay.library_preparation": "TruSeq DNA PCR-Free",
            "metadata.assay.source_system": "Genome Center H2030",
            "metadata.assay.sop": "SOP-SEQ-2025-01",
            "metadata.assay.start_datetime": "2025-08-03T20:00:00Z",
            "metadata.assay.subject_pseudo_identifier": "SUBJ-XYZ123",
            "metadata.run.identifier": "RUN-GV_WGS001902",
            "metadata.run.datetime": "2025-08-03T21:00:00Z",
            "metadata.run.average_insert_size": "350",
            "metadata.run.average_read_length": "150",
            "metadata.run.mean_read_depth": "34.9",
            "metadata.run.read_count": "390500001",
            "metadata.instrument.code": "OBI:0002001",
            "metadata.instrument.label": "Illumina NovaSeq 6000",
            "metadata.analysis.identifier": "ANALYSIS-GV_WGS001902",
            "metadata.analysis.code": "EDAM:operation_3218",
            "metadata.analysis.reference_sequence": "GRCh38",
            "metadata.analysis.software": "GATK 4.5.0.0",
            "metadata.analysis.source_system": "GenomicVault",
            "metadata.analysis.sop": "SOP-ANALYSIS-2025-01",
            "metadata.analysis.start_datetime": "2025-08-04T12:00:00Z",
            "metadata.analysis.subject_pseudo_identifier": "SUBJ-XYZ123",
            "metadata.files.fastq": "vault/genomes/GV_WGS001902.fastq.gz",
            "metadata.md5.fastq": "abc123def456...",
            "metadata.size.fastq": "1.2 GB",
            "metadata.files.vcf": "vault/genomes/GV_WGS001902.vcf.gz",
            "metadata.md5.vcf": "789ghi012jkl...",
            "metadata.size.vcf": "16.5 MB",
            "metadata.shares.0.date": "2025-08-07",
            "metadata.shares.0.type": "QV_ACMG",
            "metadata.shares.0.recipient": "Dr. Jones <dr.jones@hospital.ch>"
          },
          "extra": {
            "created_at": "2025-08-03T20:07:08.603899+00:00",
            "user_id": "ff004d73-3101-4801-8c97-cd4ede633a45",
            "genome_processing_status": "stored",
            "has_been_shared": "True",
            "metadata.shares.1.date": "2025-08-07",
            "metadata.shares.1.type": "QV_ACMG",
            "metadata.shares.1.ftp_url": "ftp://example/path",
            "metadata.shares.1.recipient": "Dr. request <dr.request@hospital.ch>",
            "metadata.samples.0.barcode": "A0123456",
            "metadata.samples.0.library_id": "NGS000011336",
            "metadata.samples.0.pf_clusters": "390500001",
            "metadata.samples.0.new_variants": "0.66",
            "metadata.samples.0.mean_coverage": "30.5x",
            "metadata.samples.0.pf_duplicates": "10.01",
            "metadata.samples.0.pf_bases_aligned": "96.01",
            "metadata.samples.0.requested_coverage": "30x",
            "metadata.qc_summary.timestamp": "2028-01-01T01:01:01Z",
            "metadata.qc_summary.approved_by": "Dr. Smith",
            "metadata.qc_summary.qc_checksum": "78fds6fds56fds567567fds678fds",
            "metadata.qc_summary.mean_coverage": "34.9x",
            "metadata.qc_summary.lowest_coverage": "10.0x",
            "metadata.qc_summary.requested_coverage": "30x",
            "metadata.qc_summary.delivered_file_types.0": "FastQ",
            "file_sizes": "None",
            "order_id": "None"
          }
        },
        "criteria": [
          {
            "criterion": "PVS1",
            "notation": "PVS1",
            "group": "pathogenic",
            "status": "not_applicable",
            "default_strength": "very_strong",
            "applied_strength": "very_strong",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied GeneBe/ClinVar material."
          },
          {
            "criterion": "PS1",
            "notation": "PS1",
            "group": "pathogenic",
            "status": "not_applicable",
            "default_strength": "strong",
            "applied_strength": "strong",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied GeneBe/ClinVar material."
          },
          {
            "criterion": "PS2",
            "notation": "PS2",
            "group": "pathogenic",
            "status": "not_applicable",
            "default_strength": "strong",
            "applied_strength": "strong",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied GeneBe/ClinVar material."
          },
          {
            "criterion": "PS3",
            "notation": "PS3",
            "group": "pathogenic",
            "status": "accepted",
            "default_strength": "strong",
            "applied_strength": "strong",
            "strength_modified": false,
            "points": 4,
            "evidence_status": "present",
            "caveat_status": "not_applicable",
            "row_state": "complete",
            "notes": "Accepted. Supplied GeneBe evidence reports ClinVar functional evidence from SCV004176942: constitutively active kinase activity, citing Rodriguez-Viciana et al. PMID:16439621, Sarkozy et al. PMID:19206169, and Al-Olabi et al. PMID:29461977."
          },
          {
            "criterion": "PS4",
            "notation": "PS4",
            "group": "pathogenic",
            "status": "not_applicable",
            "default_strength": "strong",
            "applied_strength": "strong",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied GeneBe/ClinVar material."
          },
          {
            "criterion": "PM1",
            "notation": "PM1",
            "group": "pathogenic",
            "status": "accepted",
            "default_strength": "moderate",
            "applied_strength": "moderate",
            "strength_modified": false,
            "points": 2,
            "evidence_status": "present",
            "caveat_status": "not_applicable",
            "row_state": "complete",
            "notes": "Accepted. Supplied GeneBe evidence places BRAF p.Val600Glu in a mutational hotspot or critical functional region, with 18 nearby amino acids carrying pathogenic missense changes within ±8 amino acids and no benign missense changes in that window for NM_004333.6."
          },
          {
            "criterion": "PM2",
            "notation": "PM2",
            "group": "pathogenic",
            "status": "accepted",
            "default_strength": "moderate",
            "applied_strength": "moderate",
            "strength_modified": false,
            "points": 2,
            "evidence_status": "present",
            "caveat_status": "completed",
            "row_state": "complete",
            "notes": "Accepted. Supplied GeneBe evidence reports the variant as very rare in population databases with high coverage: gnomAD v4 exome AF 0.00000137, AC 2, AN 1,460,618, no homozygotes; gnomAD genomes not found with coverage reported."
          },
          {
            "criterion": "PM3",
            "notation": "PM3",
            "group": "pathogenic",
            "status": "not_applicable",
            "default_strength": "moderate",
            "applied_strength": "moderate",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied GeneBe/ClinVar material."
          },
          {
            "criterion": "PM4",
            "notation": "PM4",
            "group": "pathogenic",
            "status": "not_applicable",
            "default_strength": "moderate",
            "applied_strength": "moderate",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied GeneBe/ClinVar material."
          },
          {
            "criterion": "PM5",
            "notation": "PM5",
            "group": "pathogenic",
            "status": "accepted",
            "default_strength": "moderate",
            "applied_strength": "moderate",
            "strength_modified": false,
            "points": 2,
            "evidence_status": "present",
            "caveat_status": "not_applicable",
            "row_state": "complete",
            "notes": "Accepted. Supplied GeneBe evidence reports another missense change at the same BRAF Val600 residue, chr7-140753336-A-C / V600G, classified as Pathogenic in ClinVar with Variation ID 40389 and expert-panel review status."
          },
          {
            "criterion": "PM6",
            "notation": "PM6",
            "group": "pathogenic",
            "status": "not_applicable",
            "default_strength": "moderate",
            "applied_strength": "moderate",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied GeneBe/ClinVar material."
          },
          {
            "criterion": "PP1",
            "notation": "PP1",
            "group": "pathogenic",
            "status": "not_applicable",
            "default_strength": "supporting",
            "applied_strength": "supporting",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied GeneBe/ClinVar material."
          },
          {
            "criterion": "PP2",
            "notation": "PP2",
            "group": "pathogenic",
            "status": "accepted",
            "default_strength": "supporting",
            "applied_strength": "supporting",
            "strength_modified": false,
            "points": 1,
            "evidence_status": "present",
            "caveat_status": "not_applicable",
            "row_state": "complete",
            "notes": "Accepted. Supplied GeneBe evidence reports BRAF as a gene where missense variation is a common disease mechanism, with 139 curated pathogenic missense variants, 21 curated benign missense variants, gene misZ 3.7208 and transcript misZ 4.9447, above the stated threshold of 3.09."
          },
          {
            "criterion": "PP3",
            "notation": "PP3_Moderate",
            "group": "pathogenic",
            "status": "accepted",
            "default_strength": "supporting",
            "applied_strength": "moderate",
            "strength_modified": true,
            "points": 2,
            "evidence_status": "present",
            "caveat_status": "completed",
            "row_state": "complete",
            "notes": "Accepted at Moderate. Supplied GeneBe evidence reports deleterious computational support including REVEL 0.931, AlphaMissense 0.99, CADD 30, PrimateAI 0.89, high conservation with PhyloP100 9.24, and SpliceAI max score 0.0. The page records PP3_Moderate because GeneBe explicitly reports PP3_Moderate."
          },
          {
            "criterion": "PP4",
            "notation": "PP4",
            "group": "pathogenic",
            "status": "not_applicable",
            "default_strength": "supporting",
            "applied_strength": "supporting",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied GeneBe/ClinVar material."
          },
          {
            "criterion": "PP5",
            "notation": "PP5",
            "group": "pathogenic",
            "status": "not_applicable",
            "default_strength": "supporting",
            "applied_strength": "supporting",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied. GeneBe lists PP5 in its 14-point output, but PP5 is deprecated by ClinGen SVI and ClinVar reports conflicting germline classifications. The source assertion is recorded here as context, not independent evidence."
          },
          {
            "criterion": "BA1",
            "notation": "BA1",
            "group": "benign",
            "status": "rejected",
            "default_strength": "standalone",
            "applied_strength": "standalone",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "absent_after_review",
            "caveat_status": "completed",
            "row_state": "noevidence",
            "notes": "Rejected. The supplied population evidence is incompatible with a benign frequency criterion for this disease-context teaching example."
          },
          {
            "criterion": "BS1",
            "notation": "BS1",
            "group": "benign",
            "status": "rejected",
            "default_strength": "strong",
            "applied_strength": "strong",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "absent_after_review",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Rejected. The supplied population evidence is incompatible with a benign frequency criterion for this disease-context teaching example."
          },
          {
            "criterion": "BS2",
            "notation": "BS2",
            "group": "benign",
            "status": "not_applicable",
            "default_strength": "strong",
            "applied_strength": "strong",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied GeneBe/ClinVar material."
          },
          {
            "criterion": "BS3",
            "notation": "BS3",
            "group": "benign",
            "status": "not_applicable",
            "default_strength": "strong",
            "applied_strength": "strong",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied GeneBe/ClinVar material."
          },
          {
            "criterion": "BS4",
            "notation": "BS4",
            "group": "benign",
            "status": "not_applicable",
            "default_strength": "strong",
            "applied_strength": "strong",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied GeneBe/ClinVar material."
          },
          {
            "criterion": "BP1",
            "notation": "BP1",
            "group": "benign",
            "status": "not_applicable",
            "default_strength": "supporting",
            "applied_strength": "supporting",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied GeneBe/ClinVar material."
          },
          {
            "criterion": "BP2",
            "notation": "BP2",
            "group": "benign",
            "status": "not_applicable",
            "default_strength": "supporting",
            "applied_strength": "supporting",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied GeneBe/ClinVar material."
          },
          {
            "criterion": "BP3",
            "notation": "BP3",
            "group": "benign",
            "status": "not_applicable",
            "default_strength": "supporting",
            "applied_strength": "supporting",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied GeneBe/ClinVar material."
          },
          {
            "criterion": "BP4",
            "notation": "BP4",
            "group": "benign",
            "status": "not_applicable",
            "default_strength": "supporting",
            "applied_strength": "supporting",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied GeneBe/ClinVar material."
          },
          {
            "criterion": "BP5",
            "notation": "BP5",
            "group": "benign",
            "status": "not_applicable",
            "default_strength": "supporting",
            "applied_strength": "supporting",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied GeneBe/ClinVar material."
          },
          {
            "criterion": "BP6",
            "notation": "BP6",
            "group": "benign",
            "status": "not_applicable",
            "default_strength": "supporting",
            "applied_strength": "supporting",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied. No benign reputable-source assertion is used, and BP6 is deprecated."
          },
          {
            "criterion": "BP7",
            "notation": "BP7",
            "group": "benign",
            "status": "not_applicable",
            "default_strength": "supporting",
            "applied_strength": "supporting",
            "strength_modified": false,
            "points": 0,
            "evidence_status": "not_applicable",
            "caveat_status": "not_applicable",
            "row_state": "noevidence",
            "notes": "Not applied in this teaching example. No sufficient criterion-specific evidence was entered from the supplied GeneBe/ClinVar material."
          }
        ],
        "validation": {
          "pathogenic_points": 13,
          "benign_points": 0,
          "total_points": 13,
          "point_based_category": "pathogenic",
          "entered_classification": "pathogenic",
          "verdict": "Internally consistent",
          "strength_modifications": [
            "PP3_Moderate applied at moderate"
          ],
          "conflicts": [],
          "warnings": [
            "GeneBe reports PP5 as part of its 14-point output, but this example does not apply PP5 because PP5 is deprecated and ClinVar germline assertions are conflicting."
          ],
          "missing_evidence": []
        },
        "evidence_summary": {
          "source_basis": "User-provided GeneBe / ClinVar pasted evidence. This BRAF example now fills ACMG/AMP-style criteria for demonstration, while retaining a limitation note about constitutional versus somatic context.",
          "limitations": [
            "BRAF p.Val600Glu has major somatic oncology relevance and ClinVar germline classifications are conflicting. This teaching example applies the supplied GeneBe ACMG criteria except deprecated PP5; a real report must document constitutional versus somatic origin, phenotype, indication, zygosity, allele origin, and disease-specific expert review."
          ]
        }
      }
    ]
  };

  function loadExampleById(exampleId){
    var found = null;
    (EXAMPLE_ACMG_JSON.examples || []).forEach(function(item){
      if (item.example_id === exampleId) found = item;
    });
    if (!found) {
      setJsonStatus('Example could not be loaded.', true);
      return;
    }
    importAcmgJsonObject(found, exampleId);
  }

  function loadBrca1Example(){ loadExampleById('load_brca1_example'); }
  function loadCftrExample(){ loadExampleById('load_cftr_example'); }
  function loadBrafExample(){ loadExampleById('load_braf_example'); }

  document.getElementById('acmg-example').addEventListener('click', loadBrca1Example);
  document.getElementById('acmg-example-cftr').addEventListener('click', loadCftrExample);
  document.getElementById('acmg-example-braf').addEventListener('click', loadBrafExample);

  function bindValidationHelp(){
    var help = document.getElementById('sb-help');
    var reasons = document.getElementById('sb-reasons');
    if (!help || !reasons) return;
    help.addEventListener('click', function(){
      var expanded = help.getAttribute('aria-expanded') === 'true';
      help.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      reasons.hidden = expanded;
    });
  }

  // init
  bindMeta();
  bindJsonDropzone();
  bindValidationHelp();
  fillProvenanceFields();
  buildLists();
  applyFilter();
  recompute();
})();
</script>
{% endraw %}

<link rel="stylesheet" href="{{ '/assets/gene_structure_viewer/viewer.css' | relative_url }}">
<script src="{{ '/assets/gene_structure_viewer/viewer.js' | relative_url }}"></script>
<script>
(function () {
  var API = 'https://ensembl-proxy-worker.cold-leaf-e00d.workers.dev';
  var viewer = null;
  var lastKey = '';
  var timer = null;

  var statusEl = document.getElementById('acmg-gsv-status');
  var cardEl = document.getElementById('acmg-gsv-card');
  var ensemblLinkEl = document.getElementById('acmg-gsv-ensembl-link');

  function setMutedStatus(message) {
    if (statusEl) {
      statusEl.textContent = message || '';
      statusEl.classList.add('acmg-gsv-muted');
    }
  }

  function normaliseGene(value) {
    return String(value || '').trim();
  }

  function parseCoordinate(value) {
    var s = String(value || '').trim();
    if (!s) return '';

    var ncbi = s.match(/^NC_0*([0-9XYM]+)\.\d+\s*:\s*([0-9,]+)/i);
    if (ncbi) return 'chr' + ncbi[1].replace(/^0+/, '') + ':' + ncbi[2].replace(/,/g, '');

    var chr = s.match(/(?:^|\b)(?:chr)?([0-9XYM]+)\s*:\s*([0-9,]+)/i);
    if (chr) return 'chr' + chr[1].replace(/^0+/, '') + ':' + chr[2].replace(/,/g, '');

    return '';
  }

  function parseGeneFromCoordinate(value) {
    var s = String(value || '').trim();
    if (!s) return '';

    var geneLike = s.match(/\b([A-Z][A-Z0-9-]{1,20})\b/);
    if (!geneLike) return '';

    var token = geneLike[1].toUpperCase();
    if (/^CHR[0-9XYM]+$/.test(token)) return '';
    if (/^NC_/.test(token)) return '';

    return geneLike[1];
  }

  function ensemblGeneUrl(data) {
    if (!data || !data.id) return 'https://rest.ensembl.org';

    var url = 'https://www.ensembl.org/Homo_sapiens/Gene/Summary?db=core;g=' + encodeURIComponent(data.id);
    if (data.seq_region_name && data.start && data.end) {
      url += ';r=' + encodeURIComponent(data.seq_region_name + ':' + data.start + '-' + data.end);
    }
    return url;
  }

  function updateEnsemblLink(data) {
    if (!ensemblLinkEl) return;
    ensemblLinkEl.href = ensemblGeneUrl(data);
  }

  function initViewer() {
    if (viewer) return true;

    if (typeof GeneStructureViewer !== 'function') {
      setMutedStatus('Gene structure viewer is offline and will return shortly.');
      return false;
    }

    try {
      viewer = new GeneStructureViewer({
        api:      API,
        card:     cardEl,
        canvas:   document.getElementById('acmg-gsv-canvas'),
        statusEl: statusEl,
        txSelect: document.getElementById('acmg-gsv-tx-select'),
        cardGene: document.getElementById('acmg-gsv-card-gene'),
        cardLoc:  document.getElementById('acmg-gsv-card-loc'),
        infoAsm:  document.getElementById('acmg-gsv-i-asm'),
        infoStr:  document.getElementById('acmg-gsv-i-str'),
        infoTxn:  document.getElementById('acmg-gsv-i-txn'),
        infoExn:  document.getElementById('acmg-gsv-i-exn'),
        tooltip:  document.getElementById('acmg-gsv-tooltip'),
        offlineMessage: 'Gene structure viewer is offline and will return shortly.',
        quietErrors: true,
        onLoaded: updateEnsemblLink
      });
      return true;
    } catch (err) {
      setMutedStatus('Gene structure viewer is offline and will return shortly.');
      return false;
    }
  }

  function loadFromAcmgState(detail) {
    if (!initViewer()) return;

    var gene = normaliseGene(detail && detail.gene);
    var coordinate = String((detail && detail.coordinate) || '').trim();
    var position = parseCoordinate(coordinate);

    if (!gene) gene = parseGeneFromCoordinate(coordinate);

    if (!gene) {
      if (cardEl) cardEl.hidden = true;
      updateEnsemblLink(null);
      setMutedStatus('Gene structure viewer will load when a gene is entered.');
      lastKey = '';
      return;
    }

    var key = gene + '|' + position;
    if (key === lastKey) return;
    lastKey = key;

    try {
      var maybePromise = viewer.load(gene, position);
      if (maybePromise && typeof maybePromise.catch === 'function') {
        maybePromise.catch(function () {
          if (cardEl) cardEl.hidden = true;
          setMutedStatus('Gene structure viewer is offline and will return shortly.');
        });
      }
    } catch (err) {
      if (cardEl) cardEl.hidden = true;
      setMutedStatus('Gene structure viewer is offline and will return shortly.');
    }
  }

  document.addEventListener('acmg:gsv:update', function (event) {
    window.clearTimeout(timer);
    timer = window.setTimeout(function () {
      loadFromAcmgState(event.detail || {});
    }, 250);
  });

  setMutedStatus('Gene structure viewer will load when a gene is entered.');
}());
</script>


