---
title: "The evidence verification problem in professional ACMG/AMP implementation"
layout: page
description: "A professional implementation of ACMG/AMP criteria that preserves, validates and quantifies the evidence underlying genetic interpretation."
date: 2026-11-25
category: data
tags:
  - data
---

<p>{{ page.date | date: "%Y-%m-%d" }}</p>


If you work with ACMG/AMP criteria, you probably already have an established method for applying them. These methods have served clinical genetics well, yet their computational implementation often discards information essential to verifying a conclusion. 
Countless people have benefited from this approach. I also believe that many patients worldwide have been misdiagnosed and harmed as a consequence of oversimplified approaches to genetic interpretation. 
No one in particular is to blame; as a society, we can only work within the limitations of the best tools available to us.

The systematic documentation and verification of evidence has historically been a practical limitation, both in genetics and in any field where we rely on computational methods or artificial intelligence to make decisions. Through developments in evidence standards, data architecture, statistical methods and software, we can now address this problem. Independently of the method that produced a result, we can record and verify what was investigated, what was found, what could have contradicted the conclusion, what remains unknown and quantify how much qualifying evidence is available to inform a decision.

We can illustrate the problem with a simple example.

A freshly baked apple pie was left on the kitchen table. When we returned, some of it was gone. Who ate the pie? Perhaps it was the dog, or perhaps aliens visited the kitchen. The dog was hungry, had stolen food before and the bite marks resemble those of a dog. We also asked our neighbours whether they had seen any UFOs that day, but nobody had. The available evidence strongly favours the dog as our explanation. Although we cannot be entirely certain, we have sufficient confidence to make a decision.

Suppose we report that the dog ate the pie because the bite marks resemble those of a dog. Anyone receiving this conclusion would reasonably want to know whether the dog, being hungry but quite small, could climb up and reach the pie. If this information is omitted, they cannot establish whether we confirmed that the dog could reach it, discovered that it could not, or simply never checked. Each possibility has a different implication for our conclusion. A verifiable investigation must preserve these distinctions, including the outcomes of assessments that did not contribute to the final decision.

In clinical genetics, we examine a patient's DNA to identify genetic changes, known as variants, that might explain their disease. The [ACMG/AMP guidelines](https://doi.org/10.1038/gim.2015.30), published by the American College of Medical Genetics and Genomics and the Association for Molecular Pathology, establish criteria for classifying variants using different types and strengths of evidence for pathogenicity (**damaging**) or benignity (**not damaging** or maybe even protective). If a variant record contains only five applied criteria, the status of the remaining criteria cannot be recovered from those assignments. Evidence may have been sought and found absent, been contradictory, unavailable, inapplicable or never assessed. A convenient representation of a classification can therefore discard information essential to its independent assessment.

Suppose a hospital receives a genetic result from a company using a proprietary algorithm or artificial intelligence. Their report says that patient has a rare disease due to inheriting causal genetic variants from their parents. If that is true, then it is important that we ask some questions. For instance, if the proposed inheritance pattern confirmed using parental DNA, did the parental DNA contradict it, or was parental DNA unavailable? The hospital needs access to verifiable evidence to assess the result. This need not require disclosure of the company's proprietary algorithm, and it may avoid unnecessary repetition of the original analysis.

Together with many collaborators, we have contributed to advances in this area, establishing four complementary foundations that can now be incorporated into new software and interpretation frameworks. We have brought these developments together as open-source resources and collected in ACMG Validator, available as a [browser application](https://switzerlandomics.ch/technologies/acmg-validator/), [command-line tool](https://github.com/DylanLawless/acmg-validator) and R package (under review at CRAN). Each foundation is described below.

## 1. QEM - A standard for verifiable evidence

The [Qualifying Evidence Matrix standard (SGA-QEM-1.0)](https://www.swissgenomicsassociation.ch/pages/sga_qem/) defines a general convention for representing evidence. Rules are formulated negatively, for example, “Are parental genotypes unavailable?” A qualifying entry requires an explicit assessment establishing that the specified weakening or invalidating condition is absent. A confirmed invalidation and an unresolved assessment both contribute zero to the numerical representation, while their distinct meanings are preserved upstream. Published by the Swiss Genomics Association in 2025, the [standard](https://doi.org/10.5281/zenodo.17936587) is independent of the scientific discipline and the choice of evidence rules.

## 2. Validator - Professional evidence review

[ACMG Validator](https://switzerlandomics.ch/technologies/acmg-validator/) implements structured review of all 28 original ACMG/AMP criteria, including deprecated and inapplicable criteria, and records evidence status, applied strength, justification, sources and relevant caveats. The reviewer records the status of the evidence separately from the decision to apply a criterion. A complete review can legitimately contain little qualifying evidence. The browser application, [command-line software and R package](https://github.com/DylanLawless/acmg-validator) support these principles in individual reviews and large-scale analyses. The command-line and R implementations also support explicit QEM evaluations through an experimental ACMG-specific rule catalogue. Validation identifies incomplete or inconsistent documentation; the scientific validity of the evidence remains subject to professional assessment.

## 3. Semantic data architecture

A receiving computer system must be able to interpret an evidence record in the same way as the system that produced it. The underlying [data architecture](https://github.com/DylanLawless/acmg-validator) defines structured, machine-readable records that preserve the genetic and clinical context, evidence findings, sources, reviewer attestations and versions of the relevant rules. In the QEM workflow, the original assessments accompany the derived numerical matrix, so that confirmed contradictions and unresolved questions remain distinguishable. These records can be stored, exchanged and re-examined independently of the original analysis software, provided the relevant source evidence is accessible.

## 4. QuantBayes - Quantifying available evidence

[QuantBayes](https://switzerlandomics.ch/technologies/quantbayes/) implements a Bayesian method for quantifying evidence sufficiency under a declared set of rules, providing an estimate and credible interval for every evaluated item and comparative context across items assessed under the same model. The [method](https://doi.org/10.64898/2025.12.02.25341503) was developed for clinical genetics and evaluated on whole-genome sequencing data from a publicly available family trio. It is independent of ACMG/AMP and applicable to other evidence systems. It is available as an [R package](https://cran.r-project.org/package=quantbayes) and compiled software for macOS and Linux. Evidence sufficiency measures the availability of qualifying evidence under the specified model, not the probability of pathogenicity. Qualifying evidence can support either a pathogenic or a benign classification.

## Professional genetic interpretation

Together, these foundations make it practical to document, exchange, assess and quantify evidence while preserving the distinctions on which scientific interpretation depends. The completeness of a review, the availability and strength of evidence, the pathogenicity of a variant and its ability to explain a patient's disease remain separate considerations. A Bayesian inference about the cause of disease requires a further model that accounts for the observations, alternative explanations, prior knowledge and measurement limitations.

The objective is to accompany a clinical result with a verifiable account of the evidence, including the assessments performed, findings that could change the conclusion and questions that remain unresolved. Given the scope of our investigation, our current knowledge and the assumptions of our model, we can then state what we conclude and which clinical decision the evidence justifies.

## References  
_Grouped by topic_  

Lawless D. [Bayesian Quantification of Evidence Sufficiency quantbayes Implementation](https://doi.org/10.5281/zenodo.17919369). *Zenodo*. 2025. *(QuantBayes: macOS and linux compiled software release.)*

Lawless D. [quantbayes: Bayesian Quantification of Evidence Sufficiency](https://doi.org/10.32614/CRAN.package.quantbayes). Comprehensive R Archive Network. 2025. *(QuantBayes: R package.)*

Quant Group, et al. [A Bayesian model for quantifying genomic variant evidence sufficiency in Mendelian disease](https://doi.org/10.64898/2025.12.02.25341503). *medRxiv*. 2025. *(QuantBayes: statistical methodology and genomic evaluation.)*

Richards S, Aziz N, Bale S, et al. [Standards and guidelines for the interpretation of sequence variants: a joint consensus recommendation of the American College of Medical Genetics and Genomics and the Association for Molecular Pathology](https://doi.org/10.1038/gim.2015.30). *Genetics in Medicine*. 2015;17:405-424. *(ACMG/AMP: foundational variant interpretation guidelines.)*

Swiss Genomics Association. [Qualifying Evidence Matrix standard for verifiable evidence (SGA-QEM-1.0)](https://doi.org/10.5281/zenodo.17936587). *Zenodo*. 2025. *(QEM: standard for verifiable evidence representation.)*

Lawless D. [acmgvalidator: Structured ACMG/AMP Variant Evidence Validation](https://github.com/DylanLawless/acmg-validator). R package version 0.1.0. 2026. *(ACMG Validator: programmatic validation package.)*

Switzerland Omics. [ACMG Validator](https://switzerlandomics.ch/technologies/acmg-validator/). Browser application, version 1.1.0. 2026. *(ACMG Validator: interactive professional evidence review.)*

Switzerland Omics. [ACMG Validator CLI](https://github.com/DylanLawless/acmg-validator). Software and evidence schema, version 0.1.9. 2026. *(ACMG Validator: command-line validation and semantic data architecture.)*

