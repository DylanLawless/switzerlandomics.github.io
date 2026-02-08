---
title: "Founders of dbNSFP"
layout: page
description: "How dbNSFP became a backbone database for functional annotation of protein-altering variants in modern genomics workflows."
date: 2026-02-08
category: founder-stories

tags:
  - genomics
  - variant-annotation
  - bioinformatics
  - databases

entities:
  people:
    - Xiaoming Liu
    - Jin Yu
  software:
    - dbNSFP
    - WGSA
    - dbscSNV
    - dbMTS
    - MetaRNN
  organisations:
    - Genos Bioinformatics LLC
    - University of South Florida
    - Baylor College of Medicine
  projects:
    - 1000 Genomes Project
    - gnomAD
  formats:
    - VCF
---

How dbNSFP became a backbone database for functional annotation of protein-altering variants in modern genomics workflows.

By the early 2010s, DNA sequencing had become faster and cheaper, but variant interpretation had become the limiting step. Exome and genome studies routinely produced millions of variants, yet researchers still needed to determine which changes were likely to affect protein function or disease risk.

Many prediction tools and annotation resources already existed, but they were fragmented. Each pipeline combined outputs from multiple sources, often recomputing predictions and assembling annotations locally. Different gene models and transcript choices produced inconsistent results across studies. Annotation pipelines became slow, difficult to maintain, and hard to reproduce.

In 2011, Xiaoming Liu and collaborators introduced dbNSFP (database for Non-Synonymous SNPs' Functional Predictions) to address this bottleneck. Instead of recomputing predictions repeatedly, they generated functional predictions and annotations in advance for all potential nonsynonymous single nucleotide variants (nsSNVs) across known protein-coding genes in the human genome. These results were packaged into a lightweight database that could be downloaded and queried locally inside annotation workflows.

This approach changed how annotation steps were performed. Rather than querying multiple remote resources or running prediction tools repeatedly, pipelines could retrieve functional predictions and annotations in a single local step. As sequencing studies expanded, dbNSFP expanded as well. Later versions incorporated splice-site SNVs, transcript-specific predictions, conservation metrics, population allele frequencies from large sequencing projects, and ensemble methods combining multiple prediction algorithms.

The database also became part of a broader ecosystem developed within Liu’s lab and collaborators. Tools such as WGSA supported scalable genome annotation, dbscSNV extended coverage to splice consensus regions, dbMTS covered microRNA target sites, and ensemble predictors such as MetaRNN combined many annotation signals into unified pathogenicity scores. Together these tools helped narrow the gap between variant discovery and variant interpretation.

| Item | Details |
|---|---|
| Founders / developers | Xiaoming Liu and collaborators; later co-developed with Jin Yu |
| Institutions | Baylor College of Medicine; University of South Florida; later Genos Bioinformatics LLC |
| First public release | 2011 |
| Licensing model | Academic use free; commercial use requires license |
| Commercial license cost | USD 5,000–10,000 per year depending on use |
| Distribution mechanism | Downloadable database files and web query services |
| Adoption scale | Integrated into academic and clinical genomics pipelines worldwide |
| Maintenance model | Actively maintained via Genos Bioinformatics LLC with regular releases |
| Primary use | Functional annotation of protein-altering and splice-site variants |
| Current status | Actively developed, latest releases support updated gene models and new prediction methods |

Adoption spread pragmatically. Annotation tools and pipelines integrated dbNSFP because it simplified workflows and reduced computational overhead. Researchers incorporated it into variant filtering and prioritisation pipelines, and downstream tools increasingly assumed its presence. As clinical genomics matured, dbNSFP became embedded within production interpretation systems, often invisibly to end users.

As sequencing volumes and annotation sources grew, maintaining and updating such infrastructure required sustained effort. In 2024, Xiaoming Liu and Jin Yu founded Genos Bioinformatics LLC to support long-term development and distribution of dbNSFP. A commercial licensing model was introduced for uses where the database supports revenue-generating activity or is deployed within for-profit organisations.

Commercial use is broadly defined. It includes use inside companies, and also situations where dbNSFP contributes to paid clinical or commercial services even within public institutions. In contrast, academic research and training activities remain free to use.

Two license tiers are currently offered. A Research Use License, priced at approximately USD 5,000 per year, allows internal research use within organisations. A Product Development and Research Use License, priced at approximately USD 10,000 per year, additionally permits use in product development environments. License holders receive ongoing database updates during the subscription period, which is important because dbNSFP releases are updated every few months to incorporate new gene definitions, population data, and prediction methods.

Not all components can be redistributed in commercial releases because some upstream prediction tools carry their own licensing restrictions. As a result, certain scores appear only in academic distributions, and users requiring them commercially must obtain licenses directly from original providers.

Legacy versions of dbNSFP remain available, and earlier releases do not require commercial licensing as a courtesy to long-term users. However, newer releases include substantially expanded variant sets due to improved gene models and long-read sequencing data, making updates operationally attractive for many users.

In practice, commercial licensing is handled through a simple application process submitted via an online form, followed by direct communication with the dbNSFP team. This lightweight process reflects the pragmatic, researcher-driven origins of the project.

This transition reflects a broader pattern in genomics infrastructure: tools developed in academic settings often require organisational support once they become embedded in clinical and industrial workflows that depend on reliable updates and support.

Today, dbNSFP functions less as a standalone resource and more as background infrastructure. Annotation pipelines assume its availability, ensemble predictors build on its aggregated data, and clinical platforms rely on it for consistent functional annotation. The earlier bottleneck of fragmented annotation and repeated recomputation has been substantially reduced in modern workflows.

The lasting lesson from dbNSFP is practical rather than technical. Infrastructure succeeds when it removes repeated work, standardises workflows, and becomes simple enough that users stop noticing it. At that point, the tool becomes part of the foundation of the field.

## Links

dbNSFP project: https://www.dbnsfp.org  
Genos Bioinformatics LLC: https://genos.us  
Liu Lab: http://www.liulab.science  
Commercial license information: https://www.dbnsfp.org/license  
Original dbNSFP publication (2011): https://doi.org/10.1002/humu.21517

