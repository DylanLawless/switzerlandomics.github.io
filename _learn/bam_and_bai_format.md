---
title: What is a BAM file?
layout: learn
description: Explanation of BAM alignment files and their BAI index used in genomic analysis
weight: 1
category: data-formats
---

A BAM file is the compressed binary form of a SAM file, used to store sequencing read alignments to a reference genome in a space-efficient format that supports fast random access.

## Why BAM files exist

Alignment files can contain billions of reads, making plain text formats slow to store, transmit, and analyse. BAM reduces file size and allows software to retrieve alignments for specific genomic regions without scanning the entire dataset.

This makes routine analysis, visualisation, and variant detection feasible at genome scale.

## What a BAM file contains

A BAM file stores the same information as a SAM file, including alignment positions, mapping quality, and alignment operations, but encoded in binary form and compressed in blocks.

Because the file is block-compressed, software can jump directly to specific genomic regions rather than reading the file sequentially. The header information describing reference sequences and processing history is also retained.

In practice, alignment pipelines typically produce SAM briefly and then convert immediately to BAM for storage and downstream processing.

## Where BAM appears in pipelines

Typical workflow:

Sequencing → Read alignment → BAM file → Variant calling → Interpretation

Most downstream genomics tools operate directly on BAM rather than SAM.

## BAM and BAI indexing

A BAI file is an index built for a BAM file that allows rapid access to alignments overlapping a chosen genomic region.

Instead of reading the entire alignment file, analysis software consults the index to locate only the file segments covering the requested coordinates. Genome browsers and analysis tools rely on this index to display data interactively.

A BAM file is therefore usually distributed together with a matching `.bai` index file.

## Relation to Switzerland Omics systems

Switzerland Omics systems operate downstream of alignment and indexing, using variant data derived from BAM files during evidence extraction and probabilistic interpretation.

## Technical specification

The official SAM, BAM, and BAI specifications are maintained by the samtools and hts-specs community:

https://github.com/samtools/hts-specs

