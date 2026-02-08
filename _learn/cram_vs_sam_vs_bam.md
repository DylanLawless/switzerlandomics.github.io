---
title: CRAM vs SAM vs BAM explained
layout: learn
description: Explanation of differences between SAM, BAM, and CRAM alignment formats
weight: 1
category: data-formats
---

SAM, BAM, and CRAM are formats used to store sequencing reads after alignment to a reference genome. They record where each read maps and how it aligns, but differ in how the data are represented and compressed.

All three formats contain the same alignment information. The difference is how efficiently that information is stored and accessed.

## Why these formats exist

Sequencing experiments generate billions of reads, and storing aligned reads as plain text quickly becomes impractical at genome scale.

SAM was introduced as a readable exchange format. BAM reduced storage and improved performance by using binary compression. CRAM further reduces size by compressing alignments relative to a reference genome.

This progression reflects the need to store and analyse increasingly large sequencing datasets.

## Core differences

The formats differ mainly in representation and storage efficiency.

| Format | Representation | Compression | Typical use |
|---|---|---|---|
| SAM | Text | None | Inspection, debugging |
| BAM | Binary | General compression | Standard analysis workflows |
| CRAM | Binary | Reference-based compression | Long-term storage and transfer |

SAM is human-readable but very large.  
BAM stores the same data in compressed binary form and allows fast indexed access.  
CRAM stores alignments relative to the reference genome, typically producing smaller files but requiring reference access during decoding.

## Example alignment record

All three formats store equivalent alignment records. In practice, BAM and CRAM are often viewed through SAM output:

```text
r001  99  chr1  10001  60  50M  = 10100  149  ACTG...  FFFF...
````

This record shows:

* read `r001` aligned to chromosome 1,
* mapping quality,
* alignment structure via the CIGAR string,
* read bases and quality scores.

SAM stores this directly as text, while BAM and CRAM store the same information in compressed binary form.

## Details that matter

* SAM files are large and rarely used in production workflows.
* BAM files are typically coordinate-sorted and indexed for region access.
* CRAM files usually require access to the original reference genome for decoding.
* BAM and CRAM are interchangeable for most downstream tools.
* CRAM compression efficiency varies across datasets.

## Common mistakes

Frequent misunderstandings include:

* Thinking the formats contain different data rather than different encodings.
* Using SAM files for large-scale processing.
* Assuming CRAM files are self-contained.
* Forgetting to index BAM or CRAM before region queries.

## Where they fit in pipelines

Typical workflow:

```text
Sequencing → FASTQ reads → Alignment → SAM/BAM/CRAM → Variant or feature analysis
```

Most pipelines generate BAM directly and may convert to CRAM for storage.

## Alignment formats vs FASTQ

FASTQ files store raw sequencing reads before alignment.

SAM, BAM, and CRAM store reads after mapping to a reference genome and therefore include genomic position and alignment information.

## Technical specification

Official specifications for SAM, BAM, and CRAM are maintained in the hts-specs repository:

[https://github.com/samtools/hts-specs](https://github.com/samtools/hts-specs)


