---
title: "Quinary inference, the fifth layer of genomics"
layout: page
description: "Genomics already has four familiar layers. Quinary inference names the fifth: the posterior layer where the strength of the full explanation becomes measurable."
date: 2026-03-15
category: industry-analysis
---

<p>{{ page.date | date: "%Y-%m-%d" }}</p>

Genomics already has four widely understood layers. 
**Primary** produces sequence reads from biological material, with platforms such as Illumina, ONT, PacBio, and Roche. 
**Secondary** converts those reads into called variants, through systems such as Sentieon, DRAGEN, and DeepVariant. 
**Tertiary** interprets those variants against genes, phenotype, and prior knowledge, through platforms such as VarSome, SOPHiA, QIAGEN, Congenica, and Fabric. 
**Quaternary** uses that interpretation in reports, treatment decisions, and clinical workflows, in settings represented by groups such as Tempus, Foundation Medicine, and Caris. 
These layers are already established across research and clinical genomics. 

Switzerland Omics is building a fifth layer for this stack, which we call **quinary inference**.

| Layer | Core question | Main output |
| --- | --- | --- |
| Primary | How do we measure DNA? | Sequence reads |
| Secondary | What genomic events are present? | Called variants |
| Tertiary | What do those variants mean? | Interpreted candidate findings |
| Quaternary | What should be done with that understanding? | Reports, decisions, and care actions |
| Quinary inference | How strong is the overall explanation? | Posterior support for the full causal account |

The first four layers can deliver a candidate result, yet they still leave an important question unresolved. A variant may be observed, prioritised, interpreted, and reported. Even then, the overall explanation may remain incomplete. Another plausible causal event may still be unobserved because of limited coverage, technical failure, uncertain phase, missing parental data, or incomplete prior evidence. Current workflows often handle this well in practice, but usually as expert judgement rather than as an explicit quantitative layer.

**Quinary inference** names that missing layer. It sits above calling, interpretation, reporting, and the provenance needed to trust those outputs. Its job is to model the overall genomic explanation, not just the properties of one nominated variant. This cannot be solved by one algorithm at the end of a pipeline. It requires a stack of layers, each handling a different part of the inference problem, from empirical priors to observed findings, missing possibilities, unresolved uncertainty, and the record of how the conclusion was derived. That is how hidden uncertainty becomes measurable rather than implied.

In practical terms, this layer fits alongside the existing genomics stack already used across the field: primary sequencing platforms, secondary callers, tertiary interpretation systems, and quaternary clinical decision workflows. It depends on them. What it adds is a new output that the earlier layers do not provide on their own: a formal measure of how defensible the explanation really is once all available evidence and remaining uncertainty are considered together. This is the layer Switzerland Omics is building. It starts where the existing stack usually stops, and asks how much confidence the full genomic account actually deserves.
