---
title: What is the FASTA format?
layout: learn
description: Explanation of the FASTA format used to store nucleotide and protein sequences
weight: 1
category: data-formats
---

FASTA is a text format used to store biological sequences, such as DNA, RNA, or protein sequences, using single-letter codes preceded by an identifier line describing each sequence.

It is the standard format used to exchange reference genomes and sequence collections in bioinformatics.

## Why FASTA files exist

Many bioinformatics tasks require access to raw biological sequences, including genome references, gene sets, and protein databases.

FASTA provides a simple, portable way to store and exchange these sequences across tools and databases, allowing software to load sequence data efficiently without requiring specialised binary formats.

Because the format is simple text, it is easy to inspect and manipulate when necessary.

## Core structure of a FASTA file

A FASTA file contains one or more sequences. Each sequence has:

1. A header line beginning with `>`, followed by an identifier and optional description.
2. One or more lines containing the sequence itself.

Sequence characters represent nucleotides or amino acids using standard single-letter codes.

Multiple sequences can appear in the same file, producing a multi-FASTA file.

## Example FASTA record

Example sequence entry:

```text
>chr1
ACCTGATCGTACGATCGATCGATCGATCGATCGATCGTACGTAGCTAGCTAGC
````

Interpretation:

* The header identifies the sequence as chromosome 1.
* The following lines contain the sequence itself.
* Sequence lines may be wrapped across multiple lines for readability.

Programs typically ignore line breaks and treat the sequence as continuous.

## Details that matter

* Sequence lines may span multiple lines or appear on a single line.
* Letters are case-insensitive and usually converted to uppercase.
* Files may contain many sequences in a single file.
* FASTA stores sequences only and does not include quality information.
* Files are often compressed or indexed for fast region access when used as genome references.
* Common extensions include `.fa`, `.fasta`, and `.fna`.

## Common mistakes

Frequent operational errors include:

* Confusing FASTA with FASTQ files that include quality scores.
* Breaking sequence lines with unexpected characters or spaces.
* Mixing nucleotide and protein sequences in the same dataset unintentionally.
* Removing header lines, making sequences impossible to identify.

## Where FASTA fits in pipelines

Typical workflow:

```text
Reference FASTA → Alignment → BAM/CRAM → Variant analysis
```

FASTA files provide the reference sequences used during read alignment and many downstream analyses.

## FASTA and FASTQ

FASTQ extends FASTA by storing sequencing reads together with per-base quality scores.

FASTA is typically used for reference sequences or curated sequence sets, while FASTQ stores raw sequencing reads directly from sequencing instruments.

## Technical specification

FASTA format documentation is maintained by the NCBI:

[https://www.ncbi.nlm.nih.gov/BLAST/fasta.shtml](https://www.ncbi.nlm.nih.gov/BLAST/fasta.shtml)


