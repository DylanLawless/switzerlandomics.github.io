---
title: Human reference genomes quick reference
layout: learn
description: Operational overview of human reference genome assemblies used in genomics and clinical pipelines
---

A human reference genome defines the coordinate system used to map sequencing reads and report variants. Multiple builds exist, and sequencing, variant, and annotation files must use compatible versions to ensure correct interpretation.


## Human reference genome assemblies in practice

| Assembly | Release year | UCSC name | Status | Recommended use |
|-----------|--------------|-----------|--------|----------------|
| GRCh38 | 2013 | hg38 | Current standard | Default for new work |
| T2T-CHM13 | 2022 | hs1 | Emerging | Research and future pipelines |
| GRCh37 | 2009 | hg19 | Legacy | Legacy datasets |
| Human Pangenome Reference | 2023– | — | Emerging | Population references |
| Build 36 | 2006 | hg18 | Historical | Old archives only |
| Build 35 | 2004 | hg17 | Historical | Rare legacy |
| GRCh39 | — | — | Postponed | Not available |

<figure style="width:100%; margin:0;">
  <a href="https://commons.wikimedia.org/wiki/File:Human_genome_assembly_GRCh38_chromosomes_ideogram_NCBI.png">
 <img
    src="/images/learn/Human_genome_assembly_GRCh38_chromosomes_ideogram_NCBI.png"
    alt="Chromosomes ideogram of the human reference genome assembly GRCh38/hg38"
    style="width:100%; height:auto;"
  >
  </a>

</figure>

Chromosomes ideogram of the human reference genome assembly GRCh38/hg38. Public domain source: 
    <a href="https://commons.wikimedia.org/wiki/File:Human_genome_assembly_GRCh38_chromosomes_ideogram_NCBI.png">Wikimedia Commons</a>.

### Assembly naming differences

Reference assemblies are released by the Genome Reference Consortium (GRC) and NCBI under names such as GRCh37 and GRCh38. The UCSC Genome Browser distributes the same assemblies under identifiers such as hg19 and hg38.

These usually refer to the same coordinate system, but chromosome naming conventions may differ, for example `chr1` in UCSC versus `1` in Ensembl or NCBI. Files must use consistent naming to remain compatible.

The sections below provide operational details for each assembly.

---

## GRCh38

Release year: 2013  
UCSC browser name: hg38  
NCBI assembly accession: GCA_000001405.29  
Status: Current global standard

Use in practice: Default reference for new clinical and research pipelines. Coordinates remain compatible across patch releases such as GRCh38.p14 (2022), which improve sequence representation without changing positions.

Official homepage:  
<https://www.ncbi.nlm.nih.gov/grc/human>

---

## T2T-CHM13

Release year: 2022  
UCSC browser name: hs1  
NCBI assembly accession: GCA_009914755.4  
Status: Emerging reference

Use in practice: First gapless human genome assembly, enabling analysis of centromeres and previously unresolved regions. Increasingly used in research and method development, but not yet the standard coordinate system in clinical pipelines.

Official homepage:  
<https://github.com/marbl/CHM13>

---

## GRCh37

Release year: 2009  
UCSC browser name: hg19  
NCBI assembly accession: GCA_000001405.14  
Status: Legacy standard

Use in practice: Still widely encountered in historical sequencing studies and clinical archives. Many variant databases and pipelines still use GRCh37, requiring compatibility when analysing legacy data.

Official homepage:  
<https://www.ncbi.nlm.nih.gov/grc/human>

---

## Human Pangenome Reference

Initial releases: 2023 onward  
UCSC browser name: none  
NCBI accession: multiple assemblies  
Status: Emerging paradigm

Use in practice: Represents genomic diversity using multiple complete assemblies and graph-based approaches. Improves variant discovery in diverse populations but does not yet replace linear references in standard production pipelines.

Official homepage:  
<https://humanpangenome.org>

---

## Build 36 (hg18)

Release year: 2006  
UCSC browser name: hg18  
Status: Historical

Use in practice: Appears in early GWAS and archived sequencing projects. Rarely used in modern analysis but still encountered in historical datasets.

Reference portal:  
<https://genome.ucsc.edu>

---

## Build 35 (hg17)

Release year: 2004  
UCSC browser name: hg17  
Status: Historical

Use in practice: Very rare in current workflows but may appear in older archives or early sequencing studies.

Reference portal:  
<https://genome.ucsc.edu>

---

## GRCh39 (planned)

Status: Release postponed indefinitely

Use in practice: No official assembly available. Included here only to prevent confusion when future releases are discussed.

Official homepage:  
<https://www.ncbi.nlm.nih.gov/grc/human>

---

## How to interpret assembly naming

Assembly versus annotation  
Assemblies define coordinates. Annotation releases such as Ensembl or GENCODE are layered onto assemblies and update independently.

Patch releases  
Versions such as GRCh38.p14 update sequence representation without changing coordinates.

Linear references versus pangenome  
GRCh37 and GRCh38 use a single linear genome. Pangenome resources use multiple genomes or graph representations and are not yet universal replacements.

Naming differences  
Chromosomes may be labelled differently across tools, for example `chr1` versus `1`. Files must use consistent naming.

---

## Practical usage guidance

New pipelines  
Use GRCh38 unless compatibility with legacy datasets requires GRCh37.

Legacy datasets  
Analyse data in the original assembly when possible. Migration typically requires coordinate conversion or remapping.

Archival storage  
Alignment files should retain reference assembly information to allow correct reuse.

Migration considerations  
Variant data can often be lifted between builds. Aligned read data typically require remapping for consistency.

---

## Common pitfalls avoided by this reference

• Mixing hg19 and b37 builds  
• Treating patch releases as new assemblies  
• Renaming contigs instead of remapping  
• Assuming pangenome replaces GRCh38  
• Ignoring coordinate compatibility  

---

## Official ecosystem resources

Genome Reference Consortium  
<https://www.ncbi.nlm.nih.gov/grc/human>

NCBI Assembly database  
<https://www.ncbi.nlm.nih.gov/assembly>

UCSC Genome Browser  
<https://genome.ucsc.edu>

Ensembl Genome Browser  
<https://www.ensembl.org>

T2T Consortium  
<https://github.com/marbl/CHM13>

Human Pangenome Reference Consortium  
<https://humanpangenome.org>

---

This page is designed as a stable operational reference and can be updated as new assemblies or ecosystem standards emerge.

