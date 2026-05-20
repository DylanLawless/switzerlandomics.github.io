---
title: "AI as a horizontal layer"
layout: page
description: "How agent-style AI is becoming a horizontal layer for verifiable scientific evidence, from Nature’s 2026 discovery systems to precision medicine workflows."
date: 2026-05-20
---

Three back-to-back papers were published together yesterday in *Nature* on 19 May 2026.
They provide a strong scientific reference point for the idea of AI as a horizontal layer. 
For several years this approach has gained support. The clearest applications now sit inside structured workflows: retrieval, comparison, scoring, code generation, evidence review, task execution, and human validation. 

* The first paper, from Ali Essam Ghareeb and colleagues at FutureHouse, with Samuel G. Rodriques as corresponding author and Andrew D. White, Michaela M. Hinks, and Samuel G. Rodriques as joint supervisors, describes **Robin**, a multi-agent system for automating hypothesis generation and experimental data analysis in biology [(Ghareeb et al., 2026)](https://doi.org/10.1038/s41586-026-10652-y).  
* The second, from Juraj Gottweis and colleagues at Google DeepMind and Google Research, with Vivek Natarajan among the corresponding authors, describes **Co-Scientist**, a Gemini-based system for generating, critiquing, ranking, and evolving scientific hypotheses [(Gottweis et al., 2026)](https://doi.org/10.1038/s41586-026-10644-y).  
* The third, from Eser Aygün and colleagues at Google Research, Google DeepMind, and Harvard, with Michael P. Brenner among the corresponding authors, describes **Empirical Research Assistance (ERA)**, a system that uses LLM-driven tree search to improve empirical scientific software against defined quality scores [(Aygün et al., 2026)](https://doi.org/10.1038/s41586-026-10658-6).  

We have followed this direction closely because it matches how we think about scientific infrastructure. In 2023, we argued for practical, evidence-aware use of AI in science [(Lawless, 2023)](https://doi.org/10.1016/j.jaci.2023.09.023). In September 18-19 2025, I was presenting related work on probabilistic genomics at the Computational Biology Symposium in Lausanne, where Michael P. Brenner also presented this work on ERA, although it was unnamed at that time.
We have a public poster from that meeting: “Quantifying variant evidence for precise, probabilistic genomics”, Computational Biology Symposium, Lausanne, 2025-09-19. Poster: [20250918_lawless_quant.pdf](https://switzerlandomics.ch/assets/pdf/20250918_lawless_quant.pdf).

The common point across the three papers is workflow compression. Robin connects literature review, mechanism selection, candidate generation, experimental data analysis, and follow-up hypothesis generation. Given dry age-related macular degeneration as input, it identified retinal pigment epithelial (RPE) phagocytosis enhancement as a therapeutic strategy, proposed ripasudil as a glaucoma-approved ROCK inhibitor candidate, and connected follow-up RNA-seq results to ABCA1 upregulation [(Ghareeb et al., 2026)](https://doi.org/10.1038/s41586-026-10652-y).

Co-Scientist applies a related structure to hypothesis generation. It generates, critiques, ranks, and evolves hypotheses through a multi-agent tournament process. Its reported validations span acute myeloid leukaemia (AML) drug repurposing, liver fibrosis, and antimicrobial resistance, with human experts selecting candidates and prioritising experiments throughout [(Gottweis et al., 2026)](https://doi.org/10.1038/s41586-026-10644-y).

ERA applies the same broad principle to scientific software. It uses tree search to generate and refine code against measurable objectives. The reported results include single-cell RNA-seq batch integration methods that outperformed published approaches and COVID-19 hospitalisation forecasting models that outperformed the CDC CovidHub ensemble [(Aygün et al., 2026)](https://doi.org/10.1038/s41586-026-10658-6).

These systems depend on human supervision (*for now). Scientists define the problem, review the evidence, select candidates, run experiments, and interpret the result. The important change is scale: literature search, candidate generation, hypothesis ranking, code exploration, and analysis can be repeated far more extensively than in a conventional manual workflow.

At Switzerland Omics, we use agents and embeddings in an infrastructure role. 
In PanelAppRex AI, we extended the structured disease-gene panel dataset with a retrieval augmented generation (RAG)-style "Info" layer for AI-assisted review [(Quant Group et al., 2026)](https://doi.org/10.1093/bioadv/vbag115). UniProtKB mechanistic text was combined with panel metadata, including disease group, inheritance, and reported phenotypes, then summarised into panel-level descriptions. The process compressed a 6.6 million-word gene knowledge base into approximately 135,000 words of summaries. This layer supports interpretation in the user interface ([PanelAppRex AI](https://switzerlandomics.ch/technologies/panelAppRexAi/)).

We also use in-house AI inside systematic review workflows. The process is structured around article retrieval, field mapping, full-text review, verifiable reports, manual sampling, structured extraction, method testing, and validation. Each step leaves a trace: query, article, claim, extraction, code, test, and human review. This was very important for the systematic reviews, algorithm development, and freedom-to-operate for ([QunatCalc](https://switzerlandomics.ch/technologies/quant/)).

The same principle applies in model development. Agents can help define candidate structures, generate test code, compare outputs, inspect failures, and iterate through alternatives. Search is useful when the surrounding system can verify.

The broader lesson is that verifiable evidence is becoming a core requirement for modern technical systems. In precision medicine, trust depends on traceable inputs, reproducible outputs, explicit uncertainty, and reviewable logic. Biology is where we apply this first, but the requirement is general. Systems need to show where information came from, what changed, what was inferred, what was tested, and what remains uncertain.

*The caveat of "These systems depend on human supervision" is simply not scalable. That is why we focus on the automation of verifiable quantifiable evidence.

## References

Ghareeb, A. E., Chang, B., Mitchener, L. et al. A multi-agent system for automating scientific discovery. *Nature* (2026). [https://doi.org/10.1038/s41586-026-10652-y](https://doi.org/10.1038/s41586-026-10652-y)

Gottweis, J., Weng, W. H., Daryin, A. et al. Accelerating scientific discovery with Co-Scientist. *Nature* (2026). [https://doi.org/10.1038/s41586-026-10644-y](https://doi.org/10.1038/s41586-026-10644-y)

Aygün, E., Belyaeva, A., Comanici, G. et al. An AI system to help scientists write expert-level empirical software. *Nature* (2026). [https://doi.org/10.1038/s41586-026-10658-6](https://doi.org/10.1038/s41586-026-10658-6)

Lawless, D. Reply to Dages et al: You AIn’t using it right: artificial intelligence progress in allergy. *Journal of Allergy and Clinical Immunology* 153, 355-356 (2023). [https://doi.org/10.1016/j.jaci.2023.09.023](https://doi.org/10.1016/j.jaci.2023.09.023)

Quant Group, Boutry, S., Saadat, A., Savic, S., Schlapbach, L. J., Fellay, J. and Lawless, D. PanelAppRex aggregates disease gene panels and facilitates sophisticated search. *Bioinformatics Advances* (2026). [https://doi.org/10.1093/bioadv/vbag115](https://doi.org/10.1093/bioadv/vbag115)

