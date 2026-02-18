---
title: "Quant"
date: 2025-07-01T00:00:01+10:00
weight: 1
---

**The missing element in genomic interpretation.**  
Database, scan, and state-of-the-art algorithm.

Clinical genomic decisions still depend on categorical labels such as pathogenic or benign. These labels summarise evidence but do not quantify how likely a genome truly explains a disease or functional outcome.

As a result, conclusions are difficult to compare, defend, or update as evidence changes. Unobserved variants remain invisible, and uncertainty remains implicit.

Quant provides a probabilistic inference layer that measures how likely any variant, observed or not, explains a functional effect in a genome.

![Quant](/images/technologies/quant_icons.png)

For every variant and effect combination, Quant produces:

> "Overall probability of a correct causal diagnosis due to this SNV/INDEL with current evidence: **0.511 (95 percent CrI: 0.237 to 0.774)**."

This expresses not only what is observed, but how complete and sufficient the available evidence is.

The same structure applies in numerous scenarios including rare disease diagnosis, drug target selection, variant reclassification, and genome design.

## How Quant fits existing workflows

Genome sequencing and analysis pipelines identify candidate variants. Quant operates after variant discovery, integrating observed and unobserved evidence to compute causal probabilities.

**Traditional workflows:**  
Genome → variant discovery → interpretation → expert judgement  
Result: *Do we trust this result?*

**Improved with Quant:**  
Genome → variant discovery → Quant inference → confidence-based decision  
Result: probability and uncertainty are measured and explicit.


Discovery pipelines remain unchanged. Interpretation becomes reproducible and probabilistic.

{% include quant_card.html %}

Professionals need clarity even in difficult cases. Uncertainty is quantified, clear cases approach certainty, and decisions become measurable rather than subjective.

## Where Quant is used

Quant supports decisions wherever genomic evidence must be interpreted quantitatively, including:

* clinical diagnosis and variant interpretation  
* pharmacogenomics and drug target evaluation  
* variant reclassification as evidence evolves  
* genome engineering and design  
* AI systems trained on genomic evidence

## A complete inference system

• **Quant DB** provides genome-wide calibrated priors for every variant.  
• **Quant Scan** extracts observed and unobserved evidence from each genome.  
• **Quant Calc** integrates evidence and computes the probability that any variant explains disease, with credible intervals.

Together, these components transform variant interpretation from categorical judgement into quantitative inference.

Built on Hardy-Weinberg theory, Bayesian inference, and population-scale priors, Quant provides a reproducible statistical framework for genomic interpretation.

## What changes with Quant

Decisions become probabilistic rather than categorical.  
Evidence can be compared across cases and institutions.  
Variant conclusions can be updated as evidence evolves.  
AI systems can learn from calibrated genomic evidence.  
Genome engineering decisions become measurable rather than heuristic.

<div style="padding:56.25% 0 0 0;position:relative;">
  <iframe src="https://player.vimeo.com/video/1103512246?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Qualifying variants"></iframe>
</div>
<script src="https://player.vimeo.com/api/player.js"></script>

<!-- <div class="call"> -->
<!-- For over a century, genomics lacked a way to quantify whether a variant causes an effect. Quant is the first system to compute genome-wide causal probabilities for every variant-phenotype pair; even including unobserved variants. -->
<!-- </p> -->
<!-- </div> -->

## Publications and data

* **Quant**: The quantitative omic epidemiology group, et al. "[Quantifying prior probabilities for disease-causing variants reveals the top genetic contributors in inborn errors of immunity](https://www.medrxiv.org/content/10.1101/2025.03.25.25324607v5)" *medRxiv* preprint (2025).\\
[DOI](https://doi.org/10.1101/2025.03.25.25324607) | 
[PDF](https://www.medrxiv.org/content/10.1101/2025.03.25.25324607v5.full.pdf) | 
[Video](https://player.vimeo.com/video/1103512246)  

* **Genetic diagnosis of inborn-errors of immunity (IEI)**: open-source, world-leading database of IEI genetics provided as a subset of PanelAppRex for the community.\
[Homepage](https://iei-genetics.github.io) | 
[Database](https://iei-genetics.github.io/assets/iusis_iei_table_2025.html) | 
[Repository](https://github.com/DylanLawless/iei_genetics)  


## Releases and technical access

* **Quant calc 001**: Base model with structured priors, full statistical framework, and real-world application. (Early access partners)

* **Quant calc 000**: Minimal prototype showcasing core Bayesian engine, public data, and open-source code.\
[DOI](https://doi.org/10.1101/2025.03.25.25324607) | 
[PDF](https://www.medrxiv.org/content/10.1101/2025.03.25.25324607v5.full.pdf) | 
[Video](https://player.vimeo.com/video/1103512246)  

* **Genetic diagnosis of inborn-errors of immunity (IEI)**: open-source, world-leading database of IEI genetics provided as a subset of PanelAppRex for the community.\
[Homepage](https://iei-genetics.github.io) | 
[Database](https://iei-genetics.github.io/assets/iusis_iei_table_2025.html) | 
[Repository](https://github.com/DylanLawless/iei_genetics)  


> For a full list of publications and software releases, visit the  
> [publications page](/publications)  
> [release archive](/releases)

<!-- <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1103512246?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Qualifying variants"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script> -->


