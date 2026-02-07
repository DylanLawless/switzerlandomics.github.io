---
title: VCF vs gVCF explained
layout: learn
description: Understanding the difference between VCF and gVCF formats in variant calling and joint genotyping workflows
weight: 1
category: data-formats
---

A VCF records positions where variants were detected in a genome, while a gVCF records both variant sites and regions confidently matching the reference genome so that multiple samples can later be analysed together.

## Why gVCF exists

A standard VCF usually lists only sites where variation was observed. When combining many samples, absence of a record does not tell us whether the site truly matches the reference or was simply not evaluated.

gVCF files solve this by storing confidence that each region is reference, enabling accurate joint genotyping across cohorts without reprocessing raw sequencing data.

## Structural difference

In a typical VCF:

• Records appear mainly at variant sites.  
• Non-variant regions are omitted.  

In a gVCF:

• Variant sites appear normally.  
• Non-variant regions are also recorded with confidence scores.  
• Long stretches of reference sequence are grouped into blocks to reduce file size.  
• Symbolic alleles such as `<NON_REF>` represent potential unseen variation.

Thus, gVCF captures both observed variation and confidence in reference calls.

## Reference confidence and blocks

Modern variant callers estimate how confident they are that each site is homozygous reference. Instead of writing a record for every base, neighbouring positions with similar genotype quality are compressed into intervals, called non-variant blocks.

This keeps gVCF files manageable while preserving the information required for later joint analysis.

Not all all-sites VCF files contain this reference confidence. Such files cannot safely replace true gVCFs in joint genotyping workflows.

## Where each format appears in pipelines

Typical cohort workflow:

```

Sequencing → Alignment → Variant calling per sample → gVCF → Joint genotyping → Final VCF → Interpretation

```

Researchers or clinicians usually receive a final VCF after cohort genotyping, while gVCFs are intermediate files used to combine many samples consistently.

## Practical difference for users

You typically encounter:

• gVCF during sample processing or cohort assembly.  
• VCF when analysing final variant results.

A gVCF allows cohorts to grow over time without repeating variant discovery for earlier samples.

## Adjacent concept: sites-only VCF

Some VCFs contain site summaries without genotype data. These describe population variation but do not carry individual genotype evidence.

## Relation to Switzerland Omics systems

Switzerland Omics systems operate primarily on final VCF outputs produced after joint genotyping, where variant evidence is aggregated and interpreted across samples.

## Technical specification

Formal format definitions for VCF and related standards are maintained in the hts-specs repository:

https://samtools.github.io/hts-specs/

