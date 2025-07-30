---
title: Alignment with Sutton's bitter lesson
layout: page
math: mathjax
date: 2025-07-27
---

<p>{{ page.date | date: "%Y-%m-%d" }}</p>

Sutton (2019)[^1]  described a recurring pattern in the history of artificial intelligence: methods that rely on domain-specific human knowledge tend to perform well initially but are ultimately surpassed by general techniques that scale with increasing computation. Search and learning improve with scale and data availability, while expert-driven heuristics tend to plateau and resist generalisation. The lesson is not only empirical but structural, reflecting the long-term limitations of manually designed systems in settings where computation can be leveraged to discover patterns and optimise inference.

This principle applies directly to the design philosophy behind our work. Rather than embedding fixed assertions about gene function or variant effect, our approach is constructed around the premise that well-calibrated inputs and scalable models provide more durable progress. PanelAppRex produces harmonised disease-gene annotations that are optimised for statistical integration, with a focus on preserving traceability, mode of inheritance, and empirical evidence. While the choice of inputs inevitably reflects curatorial decisions, these are structured to facilitate inference, not to constrain it.

Quant, our probabilistic interpretation system, adopts this foundation. The initial implementation used scaled ClinVar classifications to align with mainstream expectations and communicate the framework effectively. However, the system is agnostic to the provenance of evidence and supports probabilistic integration across multiple sources, including empirical frequency data, gene-level priors, and variant consequence predictions. The aim is to model the probability that any given variant explains a phenotype, accounting for both observed and unobserved causes, rather than replicating prior classifications.

Sutton's warning that "building in how we think we think" limits progress is particularly relevant in statistical genomics, where long-standing classification systems are often treated as final rather than provisional. By contrast, our approach treats variant interpretation as a statistical problem, grounded in likelihoods and calibrated inputs. The frameworks should be designed to improve as more data becomes available, without requiring redesign or human re-specification of interpretative rules.

[^1]: Sutton, R.S. (2019). *The Bitter Lesson* (<http://www.incompleteideas.net/IncIdeas/BitterLesson.html>).
