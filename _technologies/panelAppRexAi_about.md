Curated disease gene panels, aggregated into a single dataset with a retrieval layer.

Disease gene panel knowledge is distributed across sources, formats, and interfaces. Panel selection becomes manual, inconsistent, and difficult to reproduce in reports and pipelines.

PanelAppRex AI provides a harmonised panel dataset and a search interface that returns panel content as structured, exportable data. It aggregates curated disease gene panels into a single model with stable gene identifiers, disease annotations, mode of inheritance, and supporting publications.

<div class="download-actions">
  <a class="download-card"
     href="https://DylanLawless.github.io/panelapprex.github.io/landing_page.html"
     aria-label="Open the PanelAppRex demo">
    <span class="download-icon" aria-hidden="true">↗</span>
    <span class="download-text">
      <span class="download-title">Open demo</span>
      <span class="download-sub">Search and export panels</span>
    </span>
  </a>

  <a class="download-card"
     href="https://doi.org/10.5281/zenodo.15736689"
     aria-label="Download PanelAppRex dataset">
    <span class="download-icon" aria-hidden="true">↓</span>
    <span class="download-text">
      <span class="download-title">Download dataset</span>
      <span class="download-sub">Zenodo DOI</span>
    </span>
  </a>

  <a class="download-card"
     href="https://github.com/DylanLawless/PanelAppRex"
     aria-label="PanelAppRex source code">
    <span class="download-icon" aria-hidden="true">↗</span>
    <span class="download-text">
      <span class="download-title">Source code</span>
      <span class="download-sub">GitHub repository</span>
    </span>
  </a>
</div>

---

## Where PanelAppRex AI fits

PanelAppRex AI sits between clinical narrative and downstream genomic analysis.

Phenotype and suspected disease group, or an existing candidate variant list  
→ PanelAppRex AI retrieval  
→ panel export for manual review, virtual panel construction, or pipeline integration.

It provides a reproducible panel selection layer without changing discovery pipelines.

---

## What PanelAppRex AI provides

PanelAppRex AI aggregates curated disease gene panels into a single harmonised dataset and exposes the content through a searchable interface.

The dataset includes panel and gene identifiers, structured disease terms, mode of inheritance annotations, and literature support, designed for machine-readable export and programmatic use.

The current release contains thousands of panel to gene entries across hundreds of panels.

---

## Evidence and validation

Core fields are complete after validation and identifier recovery, including standardised symbols, gene and disease identifiers, mode of inheritance, panel names, and supporting evidence.

In benchmarking on published exome or genome case reports, the user-selected best panel contained the reported causal gene in 100% cases. Across all returned panels, the causal gene was present in 85.6% of results.

---

## What PanelAppRex AI does not do

PanelAppRex AI does not call variants.  
It does not prioritise variants.  
It does not estimate pathogenicity or disease causality.  
It does not replace clinical interpretation.

It provides curated panel knowledge as a reusable data layer.

---

## Research-only AI summaries

PanelAppRex AI includes an optional, research-only panel summary box derived from curated mechanistic gene text and panel metadata. This layer is used as a retrieval aid and does not change the underlying curated panel content.

---
<!---
## Licence and availability

PanelAppRex AI is released under ...

Dataset: https://doi.org/10.5281/zenodo.15736689  
Source code: https://github.com/DylanLawless/PanelAppRex  
Demo: https://DylanLawless.github.io/panelapprex.github.io/landing_page.html
--->
