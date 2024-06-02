---
layout: page
title:  High-throughput WGS analysis
---

## Introduction

Our GATK-based pipeline is meticulously designed for the efficient and accurate analysis of whole-genome sequencing data. Tailored for clinical genetics, the pipeline integrates high-throughput sequencing data processing, variant discovery, annotation, and interpretation. This document outlines the pipeline's architecture, emphasising each critical step from raw data processing to the final interpretation of variants as potential causes of disease.

## Pipeline design and workflow

### 1. Data pre-processing

#### FASTQ to BAM
Raw sequencing data in FASTQ format undergo quality control, alignment to the human reference genome (GRCh38), and post-alignment processing. Key tools and steps include:
- **Quality control**: `fastp` for filtering and quality checks.
- **Alignment**: `BWA-MEM` for sequence alignment.
- **Post-alignment**: `GATK MarkDuplicates` to identify and mark duplicate reads, followed by sorting and indexing.

### 2. Variant calling and processing

#### Germline short variant discovery
Variant calling is performed using `GATK HaplotypeCaller` in GVCF mode. The workflow includes:
- **Per-sample GVCF generation**: Generate GVCFs for each sample.
- **Joint genotyping**: Aggregate GVCFs using `GenotypeGVCFs`, facilitating variant calling across multiple samples.

#### Variant quality score recalibration (VQSR)
VQSR improves variant call accuracy by recalibrating variant quality scores based on a model of variant annotation values:
- **SNP and INDEL recalibration**: Utilise resources like HapMap, Omni, 1000 Genomes for SNPs; Mills and 1000G for INDELs.

### 3. Post-variant calling enhancements

#### Genotype refinement
This step refines genotype calls using population data:
- **CalculateGenotypePosteriors**: Refines genotypes to improve call accuracy using population allele frequencies.

#### Pre-annotation processing
Prepares VCFs for annotation by filtering and normalising:
- **bcftools**: Applies filters based on quality metrics.
- **vt**: Decomposes and normalises variants to canonical forms.

### 4. Annotation and interpretation

#### Variant annotation
- **VEP and additional tools**: Annotate variants with gene models and external databases to predict effects and potential impact on protein function.

#### Minor allele frequency (MAF) filtering
Filters out variants exceeding certain MAF thresholds, focusing on rare variants more likely associated with disease.

### 5. Analysis and reporting

#### Clinical reporting
Integrates annotated and filtered variants to generate reports that:
- **Identify candidate variants** potentially linked to clinical phenotypes.
- **ACMG classification**: Apply standards to classify variants based on their potential clinical significance.

## Conclusion

This GATK pipeline facilitates a comprehensive approach to WGS analysis, emphasising efficiency and accuracy essential for clinical genetics research. By leveraging state-of-the-art bioinformatics tools and techniques, the pipeline supports the detection, annotation, and interpretation of genetic variants, providing crucial insights into their roles in human disease.


