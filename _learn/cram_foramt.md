---
title: What is the CRAM format?
layout: learn
description: Explanation of the CRAM format used for compressed storage of sequencing alignments
weight: 1
category: data-formats
---

CRAM is a compressed file format used to store sequencing read alignments, designed to reduce storage size compared with BAM while remaining compatible with existing genomics tools.

## Why CRAM files exist

Genome sequencing projects generate extremely large alignment files. BAM files often reach hundreds of gigabytes per genome, making long-term storage and data transfer costly.

CRAM reduces file size by storing differences relative to a reference genome rather than storing all read bases directly. This allows substantial compression while preserving compatibility with standard analysis workflows.

## What a CRAM file contains

A CRAM file stores the same alignment information found in SAM or BAM files, including read positions, mapping quality, pairing information, and optional metadata.

Instead of storing full sequences for each read, CRAM records how reads differ from the reference genome. Additional compression methods are then applied to further reduce file size. CRAM can also optionally discard or compress selected data, such as quality scores, when storage efficiency is prioritised.

## Where CRAM appears in pipelines

Typical workflow:

Sequencing → Read alignment → BAM or CRAM file → Variant calling → Interpretation

Many pipelines now convert BAM to CRAM for long-term storage after alignment.

## BAM and CRAM

BAM and CRAM store equivalent alignment information.

BAM stores reads directly in compressed binary form. CRAM achieves smaller file sizes by using reference-based compression and more flexible encoding strategies. However, CRAM requires access to the reference genome during decoding.

## Relation to Switzerland Omics systems

Switzerland Omics systems operate downstream of alignment, using variant data derived from BAM or CRAM files during evidence extraction and probabilistic interpretation.

## Technical specification

The official CRAM specification is maintained by the samtools and hts-specs community:

https://github.com/samtools/hts-specs

