---
title: What is the FASTQ format?
layout: learn
description: Explanation of the FASTQ format used to store sequencing reads and quality scores
weight: 1
category: data-formats
---

FASTQ is a text format used to store sequencing reads together with a quality score for each base, recording both the nucleotide sequence and the confidence of each base call.

It is the standard format produced by modern sequencing instruments and used as input for read alignment and downstream analysis.

## Why FASTQ files exist

Sequencing machines produce large numbers of short reads and estimate the reliability of each base call. Both sequence and quality information are required for correct downstream analysis.

FASTQ combines these into a single format so tools can filter, trim, and align reads while considering sequencing confidence.

This makes FASTQ the common exchange format for raw sequencing output.

## Core structure of a FASTQ file

Each read is stored as a four-part record:

| Line | Meaning |
|---|---|
| `@` line | Read identifier and optional metadata |
| Sequence line | Read bases |
| `+` line | Separator, optionally repeating the identifier |
| Quality line | Quality characters per base |

After removing line breaks, the sequence and quality strings must have identical length.

Each character in the quality line corresponds to one base in the sequence.

Quality values are encoded as printable ASCII characters that represent numerical quality scores.

## Example FASTQ record

```text
@READ_001
ACCTGATCGT
+
IIHGFEDCBA
````

Interpretation:

* The identifier describes the read.
* The second line stores the nucleotide sequence.
* The `+` line separates sequence and quality.
* The final line stores one quality character per base.

Each character encodes how confident the sequencer was in that base call.

## Understanding the quality line

Quality scores estimate the probability that a base call is wrong. Higher scores indicate greater confidence.

FASTQ does not store numbers directly. Instead, each score is converted into a printable ASCII character using a fixed offset.

Example conceptually:

| Quality score     | Encoded character                     |
| ----------------- | ------------------------------------- |
| Low confidence    | `!` or similar early ASCII symbol     |
| Medium confidence | letters such as `5` or `A`            |
| High confidence   | characters later in ASCII such as `I` |

Users normally never decode these manually. Software automatically interprets the encoding.

The key operational rule is simple:

**Number of quality characters must equal number of bases.**

If not, the file is corrupted or truncated.

## FASTQ quality encoding variants

Historically, several incompatible FASTQ encodings were used. Modern pipelines almost always use the Sanger or Illumina standard, but legacy files may still appear.

| Variant                 | ASCII range | Offset | Score type | Score range |
| ----------------------- | ----------- | ------ | ---------- | ----------- |
| Sanger standard         | 33–126      | +33    | PHRED      | 0–93        |
| Solexa / early Illumina | 59–126      | +64    | Solexa     | −5–62       |
| Illumina 1.3+           | 64–126      | +64    | PHRED      | 0–62        |

In practice:

* Most modern data uses PHRED+33 encoding.
* Legacy data may use PHRED+64 or Solexa scores.
* Pipelines usually convert older encodings during import.

If quality values look unusually high or low, encoding mismatch is often the cause.

## Details that matter

* Sequence and quality strings must have identical length.
* Modern FASTQ files typically store sequence and quality on single lines per read.
* Files are usually compressed as `.fastq.gz`.
* Paired-end sequencing produces matching R1 and R2 FASTQ files.
* Quality scores are required for trimming and filtering steps.

## Common mistakes

Frequent operational errors include:

* Confusing FASTQ with FASTA, which lacks quality scores.
* Ignoring quality values when filtering reads.
* Truncating files, creating incomplete records.
* Producing mismatched sequence and quality lengths.
* Misinterpreting quality encoding variants.

## Where FASTQ fits in pipelines

Typical workflow:

```text
Sequencing → FASTQ reads → Alignment → BAM/CRAM → Variant analysis
```

FASTQ therefore represents the starting point for most sequencing analysis pipelines.

## FASTQ and FASTA

FASTA stores sequences only.

FASTQ extends FASTA by adding per-base quality scores, enabling confidence-aware downstream analysis.

## Technical specification

A detailed description of FASTQ format variants and conventions is provided by Cock et al.[https://doi.org/10.1093/nar/gkp1137](https://doi.org/10.1093/nar/gkp1137).

Citation:

Peter J. A. Cock, Christopher J. Fields, Naohisa Goto, Michael L. Heuer, Peter M. Rice, The Sanger FASTQ file format for sequences with quality scores, and the Solexa/Illumina FASTQ variants, Nucleic Acids Research, Volume 38, Issue 6, 1 April 2010, Pages 1767–1771, <https://doi.org/10.1093/nar/gkp1137>



