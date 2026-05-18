---
title: "About PanelAppRex AI"
date: 2025-01-01T00:00:01+10:00
layout: page
weight: 3
---

PanelAppRex AI is a disease-gene panel retrieval system for precision medicine.

It aggregates curated disease gene panels into a harmonised, searchable, and exportable dataset, allowing DNA to be searched systematically across relevant disease areas rather than only where answers are expected.

Disease gene panel knowledge is distributed across sources, formats, interfaces, and curation models. In practice, this makes panel selection manual, inconsistent, difficult to reproduce, and difficult to integrate into high-throughput genomic analysis.

PanelAppRex AI solves this by providing a structured panel layer: curated disease panels, stable gene identifiers, disease annotations, inheritance information, supporting publications, exportable data, and an optional AI summary layer for rapid review.

<div style="padding:56.25% 0 0 0;position:relative;">
  <iframe src="https://player.vimeo.com/video/1193244150?badge=0&autopause=0&player_id=0&app_id=58479"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          style="position:absolute;top:0;left:0;width:100%;height:100%;"
          title="Qualifying variants"></iframe>
</div>
<script src="https://player.vimeo.com/api/player.js"></script>
<br>

<div class="download-actions">
  <a class="download-card"
     href="https://switzerlandomics.ch/technologies/panelAppRexAi/"
     aria-label="Open the PanelAppRex demo">
    <span class="download-icon" aria-hidden="true">↗</span>
    <span class="download-text">
      <span class="download-title">Open app</span>
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

**Citation**:  
[PanelAppRex aggregates disease gene panels and facilitates sophisticated search](https://doi.org/10.1093/bioadv/vbag115)  
Quant Group, Simon Boutry, Ali Saadat, Sinisa Savic, Luregn J. Schlapbach, Jacques Fellay, Dylan Lawless.  
*Bioinformatics Advances* (2026). DOI: 10.1093/bioadv/vbag115  
[Repository](https://github.com/DylanLawless/PanelAppRex) |
[DOI](https://doi.org/10.1093/bioadv/vbag115) |
[medRxiv](https://doi.org/10.1101/2025.03.20.25324319) |
[PDF](https://www.medrxiv.org/content/10.1101/2025.03.20.25324319v3.full.pdf) |
[Video](https://vimeo.com/1193244150) |
[Application](https://switzerlandomics.ch/technologies/panelAppRexAi/) |
[About](https://switzerlandomics.ch/pages/panelAppRexAi_about/) |
[Dataset](https://doi.org/10.5281/zenodo.15736688)

---

## Why this exists

Precision medicine depends on knowing which genes should be considered for a disease, phenotype, or clinical question.

That knowledge is often available, but it is not always operational. It may be distributed across panel resources, embedded in web interfaces, inconsistent across disease names, or difficult to use inside secure analysis environments.

This creates a practical bottleneck. Analysts must decide which panel to use, manually reconcile gene lists, document the choice, and then make the result reproducible in a report or pipeline.

PanelAppRex AI turns panel selection into a reusable data layer.

---

## Where PanelAppRex AI fits

PanelAppRex AI sits between clinical context and genomic analysis.

Phenotype, disease area, or candidate finding  
→ PanelAppRex AI retrieval  
→ structured disease-gene panel  
→ manual review, virtual panel construction, reporting, or pipeline integration.

It does not replace discovery pipelines. It provides a reproducible way to retrieve and export the disease-gene knowledge those pipelines need.

---

## What PanelAppRex AI provides

PanelAppRex AI aggregates curated disease gene panels into one harmonised dataset and exposes them through a searchable interface.

The dataset includes:

* panel identifiers and panel names
* gene symbols and stable gene identifiers
* disease and phenotype annotations
* mode of inheritance information
* supporting publications and evidence fields
* structured exports for downstream analysis

The current release contains thousands of panel-gene entries across hundreds of panels.

The system is designed for both interactive use and programmatic workflows, including high-throughput settings where repeated manual panel lookup is not practical.

---

## Why it matters in practice

PanelAppRex AI is useful when disease-gene knowledge must be searched, exported, and reused consistently.

It is especially valuable in secure computing environments where direct internet access is restricted and external panel applications cannot be reached. In those settings, PanelAppRex AI can be used locally or through exported data, avoiding dependence on live web queries during analysis.

It also avoids the bottleneck of making millions of API calls in high-throughput workflows. Curated panel knowledge can be retrieved from a harmonised dataset instead of repeatedly requested from external services.

---

## Evidence and validation

PanelAppRex was benchmarked across fifteen case studies spanning immunology, neurology, and additional disease areas.

Under the recommended usage, the causal gene was recovered in every case. Across all returned panels, the causal gene was present in 85.6% of results.

Core fields are complete after validation and identifier recovery, including standardised gene symbols, gene and disease identifiers, inheritance annotations, panel names, and supporting evidence.

---

## AI-assisted panel summaries

PanelAppRex AI includes an optional retrieval-augmented summary layer.

For each disease panel, the system can generate a concise, context-aware summary based on the genes in the panel and the disease area being analysed. The goal is similar to a UniProt-style overview: a short, useful description that helps the user understand what the panel represents before reviewing the full gene list.

This AI layer is used for retrieval and review support only. It does not change the underlying curated panel content, gene membership, or exported dataset.

---

## What PanelAppRex AI does not do

PanelAppRex AI does not call variants.  
It does not prioritise variants.  
It does not estimate pathogenicity or disease causality.  
It does not replace clinical interpretation.

It provides curated disease-gene panel knowledge as a reusable infrastructure layer.

---

## Example import with R

You can import either the TSV format or Rds format. Download or clone the repository, then find your preferred format in `/data/`.

The following code is shown in `minimal_example.R`.

### TSV format

```R
path_data <- "../data"

path_PanelAppData_genes_combined_core <-
    paste0(
        path_data,
        "/PanelAppData_combined_core"
    )

path_PanelAppData_genes_combined_minimal <-
    paste0(
        path_data,
        "/PanelAppData_combined_minimal"
    )

df_core <-
    read.table(
        file = paste0(
            path_PanelAppData_genes_combined_core,
            ".tsv"
        ),
        sep = "\t"
    )

df_minimal <-
    read.table(
        file = paste0(
            path_PanelAppData_genes_combined_minimal,
            ".tsv"
        ),
        sep = "\t"
    )
````

### RDS format

```R
path_PanelAppData_genes_combined_Rds <-
    paste0(
        path_data,
        "/path_PanelAppData_genes_combined_Rds"
    )

df_core <-
    readRDS(
        file = path_PanelAppData_genes_combined_Rds
    )
```

