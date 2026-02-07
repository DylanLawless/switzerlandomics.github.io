---
title: GRCh37 vs GRCh38 reference genomes explained
layout: learn
description: Operational guidance on choosing between GRCh37 and GRCh38 and selecting the correct GRCh38 reference variant
weight: 1
category: reference-data
---

Human sequencing data are aligned to a reference genome that defines genomic coordinates. GRCh37 and GRCh38 are the two builds most commonly encountered in modern datasets, but operational questions today often concern which GRCh38 variant to use rather than simply choosing between builds.

## Short operational recommendation

For new pipelines and analyses:

* Use GRCh38.  
* Use an analysis-ready reference designed for mapping and variant calling.  
* Avoid arbitrary FASTA downloads that include problematic ALT or duplicate sequences.

Use GRCh37 only when working with legacy datasets already aligned to that build.

---

## GRCh37 versus GRCh38

GRCh38 improves upon GRCh37 by:

* fixing sequence errors and gaps  
* improving representation of complex regions  
* improving centromeric and repetitive regions  
* using the standard rCRS mitochondrial sequence  
* improving placement of difficult genomic regions

However, many historical datasets, clinical pipelines, and public resources still use GRCh37, so compatibility requirements often dictate continued use.

Coordinates differ between builds, so results cannot simply be mixed.

---

## The more important question: which GRCh38 version to use?

Not all GRCh38 FASTA files are equivalent. Versions differ in included sequences and handling of alternative contigs.

Common variants include:

* primary assembly only  
* assemblies including ALT contigs  
* assemblies including decoys  
* ALT-aware or ALT-masked versions  
* graph-based references

Some variants reduce mapping quality or create ambiguous alignments if not handled correctly.

For standard pipelines, widely recommended choices are analysis-ready references that:

* exclude problematic ALT competition
* include necessary unplaced and unlocalized contigs
* maintain stable chromosome naming
* work with mainstream aligners and variant callers

Common examples used in practice include:

GRCh38 analysis sets distributed by NCBI or large genomics projects designed specifically for alignment pipelines.

---

## Do patches change coordinates?

Patch releases such as GRCh38.p14:

* fix sequence representation
* add or refine regions
* do not change chromosome coordinates

Data aligned to GRCh38 remain coordinate-compatible across patch releases.

---

## Why multiple FASTA variants exist

Different FASTA distributions vary in:

• inclusion of ALT contigs
• decoy sequences
• masking of problematic duplicated regions
• chromosome naming conventions
• inclusion of unplaced or unlocalized sequences

These differences influence mapping behaviour and variant calling accuracy.

Incorrect reference choice can:

• lower mapping quality
• create ambiguous alignments
• produce false variant calls
• complicate dataset aggregation

---

## Compatibility and migration rules

Key operational rules:

• hg19 and GRCh37 are not always interchangeable.
• Renaming chromosomes is unsafe.
• Use coordinate liftover tools when converting variants.
• BAM or CRAM files usually require remapping to change builds.
• Alignment and variant calling must use the same reference.

---

## Practical pipeline guidance

New projects  
Use GRCh38 with an analysis-ready reference.

Legacy datasets  
Continue using the original build when possible.

Mixed studies  
Convert coordinates carefully or remap data.

Archival data  
Always retain reference build information.

Migration to GRCh38  
Prefer remapping reads rather than only lifting variants.

