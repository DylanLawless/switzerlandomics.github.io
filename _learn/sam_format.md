---
title: What is the SAM format?
layout: learn
description: Explanation of the Sequence Alignment/Map text format used to store sequencing read alignments
weight: 1
category: data-formats
---

The SAM format (Sequence Alignment/Map) is a tab-delimited text format used to record how sequencing reads align to a reference genome, including their positions, orientation, and alignment characteristics.

SAM provides a standard, human-readable representation of read alignments that can be exchanged between tools and inspected directly when debugging pipelines.

## Why SAM files exist

After sequencing, reads are aligned to a reference genome to determine where each fragment originated. Alignment tools must then store both placement and alignment details for downstream analysis.

SAM provides a portable and readable format so alignment results can move between tools for variant calling, quality control, and coverage analysis.

In practice, SAM is usually converted immediately into its compressed binary equivalent, BAM.

## Core structure of a SAM file

A SAM file has two sections.

Header lines begin with `@` and describe reference sequences and processing information such as sorting order and software used.

Alignment lines follow, with one line per read alignment. Each alignment line contains mandatory columns describing mapping location, alignment structure, and read sequence, followed by optional fields that store additional annotations.

Each alignment line contains at least eleven tab-separated fields, including:

| Field | Meaning |
|---|---|
| QNAME | Read identifier |
| FLAG | Bitwise mapping flags |
| RNAME | Reference sequence name |
| POS | 1-based alignment position |
| MAPQ | Mapping quality |
| CIGAR | Alignment operations |
| SEQ | Read sequence |
| QUAL | Base quality values |

Optional fields allow tools to attach additional information without breaking compatibility.

## Example alignment record

Example alignment line:

```

r001  99  chr1  10001  60  50M  = 10100  149  ACTG...  FFFF...

```

Interpretation:

- Read `r001` aligns to chromosome 1 at position 10001.
- Mapping quality indicates confidence in placement.
- `50M` in the CIGAR string indicates 50 aligned bases.
- The FLAG value encodes pairing and orientation.
- Sequence and quality fields store read bases and base quality scores.

Optional fields may follow with additional annotations.

## Details that matter

- Positions use **1-based coordinates**, unlike some other genomic formats.
- Whether a read is mapped must be determined from the FLAG field.
- CIGAR operations describe matches, insertions, deletions, and clipping relative to the reference.
- A read may appear in multiple records if it maps to several locations or has split alignments.
- SAM files are large and usually converted to BAM for storage and analysis.

## Common interpretation mistakes

Frequent errors include:

- Treating POS as 0-based coordinates.
- Ignoring FLAG bits when determining mapping status.
- Misreading CIGAR strings as simple sequence length.
- Assuming each read appears only once.

## Where SAM fits in pipelines

Typical workflow:

```

Sequencing → Alignment → SAM → BAM → Variant calling → Interpretation

```

SAM is often an intermediate format used for inspection before compression.

## SAM and BAM

BAM is the compressed binary representation of SAM. Both formats store the same alignment information, but BAM is smaller and allows indexed region access.

Most production pipelines store alignments as BAM rather than SAM.

## Technical specification

The official SAM and BAM specifications are maintained in the hts-specs repository:

https://github.com/samtools/hts-specs

