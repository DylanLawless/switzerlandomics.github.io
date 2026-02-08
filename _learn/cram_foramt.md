---
title: What is the CRAM format?
layout: learn
description: Explanation of the CRAM format used for compressed storage of sequencing alignments
weight: 1
category: data-formats
---

CRAM is a compressed file format used to store sequencing read alignments, equivalent to BAM but designed to achieve smaller file sizes by storing differences relative to a reference genome instead of storing all read bases directly.

CRAM files are widely used for long-term storage and transfer of aligned sequencing data.

## Why CRAM files exist

Modern sequencing projects generate extremely large alignment datasets. Whole-genome BAM files commonly reach hundreds of gigabytes per sample, making storage and data transfer costly.

CRAM reduces this burden by compressing alignments relative to the reference genome and applying more flexible compression strategies. This significantly reduces storage size while preserving compatibility with most analysis tools.

CRAM therefore allows large cohorts and archives to be stored more efficiently.

## Core mechanism of CRAM

A CRAM file contains the same alignment information stored in SAM or BAM:

- read mapping locations,
- alignment operations,
- pairing information,
- quality values,
- optional annotations.

Instead of storing full read sequences, CRAM records how reads differ from the reference genome and reconstructs sequences during decoding. Additional compression is applied to different data streams to further reduce file size.

Because reconstruction depends on the reference genome, access to the correct reference sequence is required when reading CRAM files unless reference data is embedded.

## Example alignment record

CRAM is binary, so alignments are typically viewed through SAM format:

```text
r001  99  chr1  10001  60  50M  = 10100  149  ACTG...  FFFF...
````

This record indicates:

* read `r001` aligns to chromosome 1 at position 10001,
* mapping quality indicates alignment confidence,
* the CIGAR string describes alignment structure,
* sequence and quality values represent the read.

CRAM stores equivalent information but encodes sequences relative to the reference to reduce size.

## Details that matter

* Decoding CRAM usually requires access to the exact reference genome used during alignment.
* Files must be coordinate-sorted before indexing.
* Region queries require an index file.
* Some pipelines optionally compress or discard quality scores to save space.
* Compression efficiency varies depending on read length, coverage, and sequence diversity.

## Common mistakes

Frequent operational errors include:

* Losing access to the reference genome needed for decoding.
* Assuming CRAM files are self-contained like BAM.
* Attempting to index unsorted files.
* Expecting identical compression ratios across datasets.

## Where CRAM fits in pipelines

Typical workflow:

```text
Sequencing → Alignment → BAM → CRAM storage → Variant calling → Interpretation
```

Many workflows generate BAM during alignment and convert to CRAM for storage.

## BAM and CRAM

BAM stores read sequences directly in compressed binary form.

CRAM stores differences relative to a reference genome, usually producing smaller files but requiring reference access for decoding.

Both formats store equivalent alignment information and are supported by most modern tools.

## Technical specification

The official CRAM specification is maintained in the hts-specs repository:

[https://github.com/samtools/hts-specs](https://github.com/samtools/hts-specs)


