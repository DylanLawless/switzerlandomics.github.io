---
title: What is a VCF file?
layout: learn
description: The Variant Call Format used to store variant sites, alleles, and per-sample genotypes from sequencing
weight: 1
category: data-formats
---

A VCF file (Variant Call Format) is a tab-delimited text format that records genomic variant sites, the alleles observed at each site, and (optionally) per-sample genotypes and supporting metrics.

## Why VCF files exist

Sequencing reads are aligned to a reference genome, then variant calling identifies positions where one or more samples differ from that reference. VCF is the standard way to publish those variant calls so they can be compared, annotated, interpreted, and exchanged between tools.

## Minimal structure of a VCF

A VCF has two parts:

- **Header lines** beginning with `##`, which define metadata and the meaning of annotations.
- A single **column header** line beginning with `#CHROM`, followed by one record per site.

Each record has eight required site columns, then optional genotype columns:

| Column | Meaning |
|---|---|
| CHROM | Contig name (chromosome) |
| POS | 1-based position of the first base of `REF` |
| ID | Identifier (for example `rs...`) or `.` |
| REF | Reference allele sequence at this position |
| ALT | Alternate allele sequence(s), comma-separated |
| QUAL | Site-level confidence score (caller-defined scale, often Phred-like) |
| FILTER | `PASS`, `.` (no filters applied), or one or more filter names |
| INFO | Semicolon-separated site annotations (tag or `tag=value`) |
| FORMAT | Colon-separated keys that define the per-sample fields |
| sample columns | One column per sample, values matching `FORMAT` order |

A “sites-only” VCF may stop at `INFO` and omit `FORMAT` and sample columns.

## Example record explained

Example:

```

#CHROM POS ID REF ALT QUAL FILTER INFO    FORMAT  SAMPLE1
20     10001617 .  C   A   493.77 PASS   DP=38   GT:DP   0/1:38

```

Explanation:

- **CHROM=20, POS=10001617**: the site location.
- **ID=.**: no identifier provided.
- **REF=C, ALT=A**: the reference base is C, and an alternate allele A is observed. If there were multiple alternates they would appear as `ALT=A,T` and are indexed in that order.
- **QUAL=493.77**: a site confidence value produced by the caller (the scale is caller-defined).
- **FILTER=PASS**: this record passed filters. A value of `.` means no filtering was applied.
- **INFO=DP=38**: a site annotation. `INFO/DP` commonly represents read depth at the site, but the precise definition is caller-specific.

`FORMAT` defines the schema for each sample column:

- **FORMAT=GT:DP** means the sample column contains two fields, genotype then depth, separated by `:`.

The sample value is:

- **GT=0/1**: allele indices. `0` means `REF`. `1` means the first allele in `ALT`.
  - `0/0` is homozygous reference.
  - `0/1` is heterozygous.
  - `1/1` is homozygous alternate.
  - `/` indicates unphased genotypes. `|` indicates phased genotypes (for example `0|1`).
  - Missing values are written as `.` (for example `./.`).
- **DP=38**: per-sample depth for this site as defined by the caller. This is separate from `INFO/DP`, and may differ in meaning and value depending on the calling method and filters.

## Representation details that matter

- **Indels include an anchoring base**: insertions and deletions are represented with `REF` and `ALT` strings that include a shared left-side base, so `POS` points to that anchor. This is why deletions often appear to be reported at the base before the deleted stretch.
- **Multiallelic sites**: if `ALT` has multiple alleles, genotypes use indices beyond 1 (for example `2/2` refers to the second listed ALT allele).
- **Header definitions**: the intended meaning of `INFO` and `FORMAT` tags is declared in header lines such as `##INFO=<ID=DP,...>` and `##FORMAT=<ID=GT,...>`.

## Where VCF fits in pipelines

Typical workflow:

```

Sequencing → Alignment (BAM/CRAM) → Variant calling → VCF → Annotation and interpretation

```

## VCF vs gVCF

A VCF usually records variant sites only. A gVCF is designed for joint genotyping and also represents non-variant regions, typically by emitting reference-confidence information and sometimes compressing non-variant stretches into blocks.

## Relation to Switzerland Omics systems

Switzerland Omics systems consume VCF-derived variant and genotype evidence during evidence extraction, probabilistic interpretation, and structured reporting.

## Technical specification

For the authoritative specification, see the VCF definition in the hts-specs repository:
https://samtools.github.io/hts-specs/

