---
title: What is a VCF file?
layout: learn
description: The Variant Call Format used to store genomic variant sites and per-sample genotypes
weight: 1
category: data-formats
---

A VCF file (Variant Call Format) is a tab-delimited text format used to describe genomic variants detected from sequencing data. It records where variants occur, which alleles are observed, and optionally how those variants appear in each sequenced sample.

VCF is the standard format used to exchange variant calls between tools and institutions.

## Why VCF files exist

Sequencing reads are aligned to a reference genome, after which variant callers detect positions where one or more samples differ from that reference. VCF provides a common way to store and exchange these results for downstream analysis, annotation, and interpretation.

## Structure of a VCF file

A VCF contains:

- **Header lines** beginning with `##`, defining metadata and annotation fields.
- A column header line beginning with `#CHROM`.
- One line per genomic site.

Each record contains eight required site columns, followed by optional genotype columns.

| Column | Meaning |
|---|---|
| CHROM | Reference sequence name |
| POS | 1-based position of the variant |
| ID | Variant identifier or `.` |
| REF | Reference allele |
| ALT | Alternate allele(s) |
| QUAL | Site-level confidence score |
| FILTER | Filter result |
| INFO | Site annotations |
| FORMAT | Per-sample annotation schema |
| Sample columns | Per-sample values |

Some VCFs omit genotype columns and only describe variant sites.

## Example record explained

Example:

```

#CHROM POS ID REF ALT QUAL FILTER INFO FORMAT SAMPLE1
20 10001617 . C A 493.77 PASS DP=38 GT:DP 0/1:38

```

Interpretation:

- The variant occurs on chromosome 20 at position 10001617.
- Reference allele is C, alternate allele A.
- The call passed quality filters.
- INFO reports site-level depth.
- FORMAT shows that each sample column contains genotype and depth.
- The sample genotype `0/1` indicates one reference and one alternate allele.

## Mandatory columns in practice

Understanding these fields prevents most interpretation errors.

**CHROM** must match reference genome contigs. Incorrect naming or sorting breaks indexing.

**POS** uses 1-based coordinates. Insertions and deletions appear shifted compared with some other formats.

**ID** is optional and often missing, but useful for linking databases.

**REF** must exactly match the reference genome. Mismatches cause merge and comparison failures.

**ALT** lists alternate alleles. Order matters because genotypes reference alleles by index.

**QUAL** describes confidence in the site call, not in individual sample genotypes.

**FILTER** indicates whether site-level filters were passed.

**INFO** stores site-level annotations, defined in the header.

## Genotype and sample fields

Genotype values reference allele indices:

```

0 = REF
1 = first ALT
2 = second ALT

```

Examples:

- `0/0` homozygous reference
- `0/1` heterozygous
- `1/1` homozygous alternate
- `./.` missing genotype

Other common sample annotations include depth and genotype quality.

Site-level and sample-level depth values may differ depending on filtering.

## Representation details that matter

**Indels include an anchoring base**, so deletions often appear one base earlier than expected.

**Multiallelic sites** list several alternate alleles in one record.

**Phased genotypes** use `|` instead of `/` to indicate allele ordering.

**Symbolic alleles** may represent structural variants.

## Common interpretation mistakes

Common sources of confusion include:

- Assuming one ALT allele per record.
- Treating genotype values as bases instead of indices.
- Confusing site depth with sample depth.
- Using QUAL as genotype confidence.
- Forgetting indel anchoring behaviour.

## Where VCF fits in pipelines

Typical workflow:

```

Sequencing → Alignment (BAM/CRAM) → Variant calling → VCF → Annotation and interpretation

```

VCF is therefore the standard output of variant calling.

## VCF vs gVCF

A standard VCF lists variant sites.  
A gVCF additionally represents non-variant regions to enable joint genotyping across many samples.

## Practical realities when working with VCF

Real VCF files are large and typically compressed using bgzip and indexed with tabix to enable region-based access.

Subsetting, merging, and filtering are usually performed with specialised tools rather than custom scripts, since the format contains many edge cases.

## Technical specification

The authoritative specification is maintained in the hts-specs repository:

https://samtools.github.io/hts-specs/

