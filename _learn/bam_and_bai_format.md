---
title: What are BAM and BAI files?
layout: learn
description: Explanation of BAM alignment files and their BAI index used in genomic analysis
weight: 1
category: data-formats
---

A BAM file is a compressed binary format used to store sequencing read alignments to a reference genome. A BAI file is the index that allows rapid retrieval of alignments from specific genomic regions within a BAM file.

Together, they form the standard representation of aligned sequencing data used in most genomics pipelines.

## Why BAM files exist

Alignment output in SAM format is large and slow to process because it is plain text. Whole-genome sequencing can produce billions of reads, making direct storage and analysis inefficient.

BAM stores the same information in compressed binary form, greatly reducing size and enabling fast region-based access when an index is present.

This makes genome-scale analysis and interactive visualisation practical.

## Core structure of a BAM file

A BAM file contains:

- A header describing reference sequences and processing history.
- Alignment records for sequencing reads mapped to those references.
- Block-compressed data that allows indexed random access.

Each alignment record corresponds to a read and includes its mapping location, alignment operations, quality values, and status flags.

BAM files are typically coordinate-sorted before indexing so that reads appear in genomic order.

## Example alignment record

Because BAM is binary, alignments are commonly viewed through their SAM representation:

```

r001  99  chr1  10001  60  50M  = 10100  149  ACTG...  FFFF...

```

Key elements:

- Read `r001` maps to chromosome 1 at position 10001.
- Mapping quality indicates confidence in placement.
- The CIGAR string describes how the read aligns.
- Flags encode pairing, orientation, and mapping status.

BAM stores this information in compressed binary form rather than text.

## Details that matter

- BAM must be coordinate-sorted before indexing.
- A `.bai` index enables rapid access to selected regions.
- Without an index, tools must scan the entire file.
- BAM internally uses 0-based coordinates even though SAM displays 1-based positions.
- Mapping status is determined by alignment flags, not just coordinates.

## Common interpretation mistakes

Frequent operational errors include:

- Attempting region queries without a BAI index.
- Indexing an unsorted BAM file.
- Assuming reads with coordinates are always mapped.
- Confusing internal coordinate systems when comparing formats.

## Where BAM fits in pipelines

Typical workflow:

```

Sequencing → Alignment → BAM → Variant calling → Interpretation

```

Most downstream tools operate directly on BAM files.

## BAM and CRAM

CRAM is a newer alignment format that compresses data more efficiently by storing differences relative to a reference genome.

BAM remains widely used because it is simple, robust, and broadly supported, while CRAM is increasingly adopted for large-scale storage.

## Technical specification

The official SAM, BAM, and BAI specifications are maintained in the hts-specs repository:

https://samtools.github.io/hts-specs/

