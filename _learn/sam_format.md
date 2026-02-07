---
title: What is the SAM format?
layout: learn
description: Explanation of the Sequence Alignment/Map format used to store sequencing read alignments
weight: 1
category: data-formats
---

The SAM format (Sequence Alignment/Map) is a text file format used to store how sequencing reads align to a reference genome, including their position, orientation, and alignment quality.

## Why SAM files exist

After DNA sequencing, millions of short reads must be aligned to a reference genome to determine where each fragment originated. SAM provides a standard way to record these alignments so that downstream tools can analyse coverage, detect variants, and compare results across pipelines.

By using a shared format, alignment results become portable between tools and institutions.

## What a SAM file contains

A SAM file has two parts.

The header section describes the reference sequences and processing metadata. It may also record which software and parameters were used.

The alignment section contains one line per read alignment, including the read name, mapping position, mapping quality, and a compact representation of matches, insertions, and deletions known as the CIGAR string.

Optional fields allow aligners to attach additional information without breaking compatibility.

## Where SAM appears in pipelines

Typical workflow:

Sequencing → Read alignment → SAM or BAM file → Variant calling → Interpretation

SAM is usually an intermediate format rather than a final output.

## SAM and BAM

BAM is the compressed binary version of SAM.

Both formats store the same information, but BAM is smaller and allows faster indexed access to genomic regions. Most production workflows convert SAM to BAM immediately after alignment.

## Relation to Switzerland Omics systems

Switzerland Omics systems operate downstream of alignment, using variant data derived from SAM or BAM files during evidence extraction and probabilistic interpretation.

## Technical specification

The official SAM and BAM specifications are maintained by the samtools and hts-specs community:

https://github.com/samtools/hts-specs

