---
title: What is the BED format?
layout: learn
description: Explanation of the BED format used to store genomic intervals and annotations
weight: 1
category: data-formats
---

The BED format (Browser Extensible Data) is a tab-delimited text format used to describe genomic regions using chromosome coordinates, optionally with annotations such as names, strand, or block structures.

BED files store positions and intervals rather than nucleotide sequences, making them efficient for comparing, filtering, and manipulating genomic regions.

## Why BED files exist

Many genomics tasks involve working with genomic regions rather than raw sequence data, such as genes, exons, peaks, or variant intervals.

Representing these regions as coordinates allows tools to compare and manipulate datasets efficiently without repeatedly processing large sequence files.

BED therefore provides a lightweight and flexible format for exchanging genomic interval data between tools and genome browsers.

## Core structure of a BED file

A BED file contains one feature per line. Each line describes a genomic interval and optional annotations.

The first three columns are required. Up to nine additional columns may follow.

| Column | Meaning |
|---|---|
| chrom | Chromosome or scaffold name |
| chromStart | Start position of the feature |
| chromEnd | End position of the feature |
| name | Feature label (optional) |
| score | Score between 0 and 1000 (optional) |
| strand | `+`, `-`, or `.` (optional) |

Additional optional columns allow visualization and block definitions, often used to represent exon structures.

All lines in a BED file must contain the same number of columns.

Coordinates use a **0-based, half-open system**, meaning the start position is included and the end position is excluded.

## Example BED record

Example interval:

```text
chr7 127471196 127472363 Pos1 0 +
````

Interpretation:

* The feature is on chromosome 7.
* The interval begins at position 127471196.
* The interval ends just before 127472363.
* The feature name is Pos1.
* Strand information indicates the forward strand.

The interval length equals:

```
chromEnd − chromStart
```

## Details that matter

* BED coordinates are **0-based and half-open**, unlike many genome browser displays.
* All lines must contain the same number of columns.
* Chromosome names should match the reference genome consistently.
* Files are usually sorted by chromosome and start coordinate.
* Tab separation is recommended for compatibility.
* Optional block fields allow representation of exon structures.

## Common mistakes

Frequent operational errors include:

* Mixing 0-based BED coordinates with 1-based coordinate systems.
* Using inconsistent chromosome naming such as mixing `chr1` and `1`.
* Providing unsorted BED files to tools that expect sorted input.
* Using different genome assemblies across files.

## Where BED fits in pipelines

Typical workflow:

```text
Sequencing → Alignment → Variant calling → Feature or interval generation → BED analysis
```

BED files are commonly produced during peak calling, annotation, and interval filtering steps.

## BED and GFF/GTF

BED stores minimal coordinate and annotation data for efficient interval manipulation.

GFF and GTF formats store richer gene and feature annotations but are more complex and heavier to process.

BED is often preferred for fast interval operations, while GFF/GTF are used for structured annotation data.

## Technical specification

The official BED specification is maintained within the hts-specs repository:

[https://github.com/samtools/hts-specs](https://github.com/samtools/hts-specs)


