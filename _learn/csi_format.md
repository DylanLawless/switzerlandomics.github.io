---
title: What is the CSI index format?
layout: learn
description: Explanation of the CSI index format used for scalable genomic file indexing
weight: 1
category: data-formats
---

CSI (Coordinate Sorted Index) is a genomic index format that enables fast access to regions within large coordinate-sorted files and removes size limitations present in older indexing formats.

## Why CSI indexing exists

Alignment and variant files are typically sorted by genomic coordinates so that tools can access specific regions efficiently. Older index formats such as BAI have limits on the maximum size of reference sequences they can index.

CSI was introduced to overcome these limits, allowing indexing of very large genomes and assemblies while keeping compatibility with existing analysis tools.

## How CSI indexing works

CSI records where genomic regions appear inside compressed alignment or variant files so that software can jump directly to relevant data blocks.

Like earlier formats, it uses hierarchical genomic bins to map coordinate ranges to file offsets. However, CSI allows the bin structure to scale to much larger coordinate ranges, supporting large genomes and modern sequencing datasets.

## Where CSI appears in pipelines

Typical workflow:

Alignment or variant file → Coordinate sorting → CSI indexing → Region queries → Interpretation

Many modern tools automatically create CSI indices when datasets exceed limits of older formats.

## CSI, BAI, and Tabix

BAI indexes BAM alignment files but has limits on reference length. Tabix uses a related index format (TBI) for generic genomic text files such as VCF or BED.

CSI generalises these approaches and is now commonly used when genome sizes exceed BAI or TBI constraints.

## Relation to Switzerland Omics systems

Switzerland Omics systems operate on alignment and variant data that are frequently accessed through CSI-indexed files during evidence extraction and probabilistic interpretation.

## Technical specification

The CSI index format specification is maintained by the samtools and hts-specs community:

https://github.com/samtools/hts-specs

