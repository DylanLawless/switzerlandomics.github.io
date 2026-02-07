---
title: What is Tabix indexing?
layout: learn
description: Explanation of Tabix and CSI indexing used for fast access to genomic data files
weight: 1
category: data-formats
---

Tabix is a tool and index format that allows fast retrieval of genomic regions from large, position-sorted text files such as VCF, BED, or GFF without reading the entire file.

## Why Tabix indexing exists

Genomic data files often contain millions of records covering whole genomes. Reading an entire file to extract a small region would be slow and inefficient.

Tabix solves this by building an index that records where genomic regions occur within the compressed file, allowing software to jump directly to the requested coordinates.

## How Tabix indexing works

Tabix works on files compressed with BGZF, a block-based extension of gzip that allows random access. After compression, the file is indexed so that genomic regions can be located quickly.

The index stores mappings between genomic coordinates and positions in the compressed file. Tools can then fetch only the required data blocks instead of scanning the entire dataset.

## Where Tabix appears in pipelines

Typical workflow:

Variant or annotation file → BGZF compression → Tabix indexing → Region queries → Interpretation

Genome browsers and analysis pipelines rely on these indices for interactive access.

## Tabix and CSI

Traditional tabix indices use the TBI format, which has limitations on maximum chromosome length. CSI (Coordinate Sorted Index) is a newer format used in htslib that removes these limits and supports larger references.

Modern tools often prefer CSI indexing for large genomes while remaining compatible with tabix workflows.

## Relation to Switzerland Omics systems

Switzerland Omics systems operate on variant and annotation data that are frequently accessed through tabix or CSI indexed files during evidence extraction and interpretation.

## Technical specification

Official specifications for tabix and CSI indexing are maintained in the samtools and hts-specs repositories:

https://github.com/samtools/hts-specs
