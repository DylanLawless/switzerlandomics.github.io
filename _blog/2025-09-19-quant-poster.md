---
title: Quantifying variant evidence
layout: page
math: mathjax
date: 2025-09-19
---

<p>{{ page.date | date: "%Y-%m-%d" }}</p>

Poster [PDF](/assets/pdf/20250918_lawless_quant.pdf)

More than a century ago, the Hardy–Weinberg equilibrium emerged from a simple calculation shared between Godfrey Hardy and Reginald Punnett. Ronald Fisher later unified Mendelian inheritance with Darwinian selection, laying the statistical foundations of population genetics. Sewall Wright extended this framework with drift, mutation, and migration, introducing uncertainty as a first-class concept. Together, their work explained how genetic variants behave in populations.

Clinical genomics faces a different question. Given an individual patient, what is the probability that a specific variant explains disease. In practice, patients often present with more than one plausible candidate. Categorical labels such as pathogenic or uncertain simplify reporting, but they do not quantify competing explanations or missing evidence. When evidence is incomplete, interpretation still relies heavily on judgement.

This post accompanies a talk and poster presented at the Computational Biology Symposium in Lausanne in September 2025, titled *Quantifying variant evidence for precise, probabilistic genomics*. The work reframes variant interpretation as a Bayesian inference problem. Each variant is evaluated probabilistically, alongside unobserved but plausible alternatives. As non-causal explanations lose probability mass, the true explanation gains it. Uncertainty is no longer implicit. It is measured.

The result is expectation-driven interpretation at genome scale. Confidence is expressed as a probability interval, directly tied to available evidence. Not certainty, but calibrated clarity.


