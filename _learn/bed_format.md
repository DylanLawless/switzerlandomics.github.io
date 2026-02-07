---
title: What is the BED format?
layout: learn
description: Explanation of the BED format used to store genomic regions and features
weight: 1
category: data-formats
---

BED (Browser Extensible Data) is a text-based file format used to describe genomic regions or features using chromosome coordinates.

## Why BED files exist

Many genomics analyses identify locations on the genome rather than producing sequences, such as regulatory regions, genes, or sequencing coverage peaks. BED provides a compact and portable way to store and exchange these genomic intervals.

The format is widely supported by genome browsers and analysis tools.

## What a BED file contains

Each line describes one genomic feature using at least three fields: chromosome name, start position, and end position.

Additional optional fields may include feature names, strand direction, display information, or sub-regions such as exon blocks. Files are often described as BED3, BED6, or BED12 depending on how many standard fields are used.

BED coordinates use a 0-based, half-open system, meaning the start position is included while the end position is not. This differs from some other genomic formats and is a common source of confusion.

## Where BED appears in pipelines

Typical workflow:

Sequencing → Alignment → Feature detection or annotation → BED file → Visualisation or interpretation

BED files are commonly used to exchange peak calls, gene regions, or analysis targets.

## BED and GFF/GTF

BED and GFF/GTF both describe genomic features, but BED is simpler and often used for region lists or browser tracks, while GFF and GTF include richer annotation structure for genes and transcripts.

## Relation to Switzerland Omics systems

Switzerland Omics systems operate on variant and feature data that may originate from genomic regions defined in BED files during evidence extraction and interpretation.

## Technical specification

The canonical BED format specification is maintained within the hts-specs repository used by GA4GH and samtools:

https://github.com/samtools/hts-specs

