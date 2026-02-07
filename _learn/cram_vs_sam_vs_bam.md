---
title: CRAM vs SAM vs BAM explained
layout: learn
description: Explanation of SAM, BAM, and CRAM formats used for aligned sequencing reads
weight: 1
category: data-formats
---

SAM, BAM, and CRAM are file formats used to store sequencing reads after they have been aligned to a reference genome, recording where each read maps and how well it matches.

## Why these formats exist

Modern sequencing produces billions of reads, and storing them as plain text quickly becomes impractical. These formats allow mapped read data to be stored, exchanged, and accessed efficiently during downstream analysis.

They enable tools to inspect reads at specific genome positions without scanning entire datasets.

## What these files contain

Each record describes a sequencing read together with its genomic mapping position, alignment information, and quality scores, along with metadata describing samples and sequencing runs.

All three formats contain the same logical information. The difference lies in how the data are encoded and compressed.

## Where they appear in pipelines

Typical workflow:

Sequencing → FASTQ reads → Alignment to reference → SAM/BAM/CRAM → Variant or feature analysis

These formats serve as the primary input for variant calling and many quality control steps.

## Differences between SAM, BAM, and CRAM

SAM is a human-readable text format and useful for inspection or debugging but produces very large files.

BAM is a binary compressed version of SAM and is the standard format for analysis workflows because it balances size and performance.

CRAM achieves stronger compression by storing reads relative to a reference genome, making it common for long-term storage and data sharing.

## FASTQ and alignment formats

FASTQ files store raw sequencing reads before alignment, while SAM, BAM, and CRAM store reads after mapping to a genome.

## Relation to Switzerland Omics systems

Switzerland Omics systems analyse variant and evidence data derived from reads stored in BAM or CRAM files during interpretation workflows.

## Technical specification

The official SAM, BAM, and CRAM specifications are maintained within the hts-specs repository:

https://github.com/samtools/hts-specs

