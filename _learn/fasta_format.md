---
title: What is the FASTA format?
layout: learn
description: Explanation of the FASTA sequence format used in genomics
weight: 1
category: data-formats
---

FASTA is a text-based file format used to store biological sequences such as DNA, RNA, or proteins using standard single-letter codes.

## Why FASTA files exist

Researchers need a simple way to store and exchange sequences without additional processing information. FASTA became widely adopted because it is easy to read, generate, and manipulate across tools and institutions.

It is commonly used for reference genomes, gene sequences, and protein collections.

## What a FASTA file contains

Each sequence begins with a header line starting with a “>” character followed by an identifier or description.

Subsequent lines contain the sequence itself as letters representing nucleotides or amino acids. Files may contain one or many sequences concatenated together.

FASTA stores sequence information only and does not include quality or alignment data.

## Where FASTA appears in pipelines

Typical workflow:

Reference or sequence collection → FASTA file → Alignment or analysis → Variant detection → Interpretation

FASTA files are often used to store reference genomes before read alignment.

## FASTA and FASTQ

FASTA stores sequences only, while FASTQ stores sequences together with sequencing quality scores. FASTQ is therefore used for raw sequencing reads, whereas FASTA is commonly used for reference or curated sequences.

## Relation to Switzerland Omics systems

Switzerland Omics systems operate downstream of alignment and variant detection, using data derived from sequences that may originally be stored in FASTA format.

## Technical reference

FASTA format documentation is maintained by NCBI and related bioinformatics communities:

https://www.ncbi.nlm.nih.gov/BLAST/fasta.shtml

