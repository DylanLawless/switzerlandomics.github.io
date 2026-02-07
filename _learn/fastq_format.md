---
title: What is the FASTQ format?
layout: learn
description: Explanation of the FASTQ format used to store sequencing reads and quality scores
weight: 1
category: data-formats
---

FASTQ is a text-based file format used to store sequencing reads together with a quality score for each base, allowing downstream tools to assess confidence in the data.

## Why FASTQ files exist

DNA sequencing machines produce reads with varying accuracy across positions. Recording quality information is essential for filtering, alignment, and variant detection.

FASTQ combines sequence and quality information in a single portable format widely used in sequencing workflows.

## What a FASTQ file contains

Each sequencing read is stored in four lines: a read identifier beginning with “@”, the nucleotide sequence, a separator line beginning with “+”, and a quality string encoding confidence values for each base.

The sequence and quality strings must be the same length, allowing tools to evaluate read reliability.

## Where FASTQ appears in pipelines

Typical workflow:

Sequencing → FASTQ file → Read alignment → Variant calling → Interpretation

FASTQ files are therefore the primary output of sequencing instruments before alignment occurs.

## FASTQ and FASTA

FASTQ extends FASTA by adding quality information. FASTA stores sequences only, whereas FASTQ is used for raw sequencing reads where accuracy assessment is required.

## Relation to Switzerland Omics systems

Switzerland Omics systems operate downstream of alignment, using variant data derived from sequencing reads originally stored in FASTQ files.

## Technical reference

A widely used description of the FASTQ format is provided by Cock et al. in *Nucleic Acids Research*:

https://doi.org/10.1093/nar/gkp1137

