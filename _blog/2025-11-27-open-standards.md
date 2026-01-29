---
title: Open standards for a genomics ecosystem
layout: page
date: 2025-11-27
---

<p>{{ page.date | date: "%Y-%m-%d" }}</p>

A paper related to our database has been accepted by Oxford University Press, *Bioinformatics*.  

[Application of qualifying variants for genomic analysis](https://doi.org/10.1093/bioinformatics/btaf676).
Dylan Lawless, Ali Saadat, Mariam Ait Oumelloul, Simon Boutry, Veronika Stadler, Sabine Österle, Jan Armida, David Haerry, D. Sean Froese, Luregn J. Schlapbach, Jacques Fellay. *Bioinformatics* (2026). DOI: 10.1093/bioinformatics/btaf676 \\
[DOI](https://doi.org/10.1093/bioinformatics/btaf676) | 
[Pre-print](https://doi.org/10.1101/2025.05.09.25324975) | 
[PDF](https://www.medrxiv.org/content/10.1101/2025.05.09.25324975v3.full.pdf) | 
[Video](https://player.vimeo.com/video/1083533047) | 
[Database](https://switzerlandomics.ch/technologies/qv_database/)  

This work addresses a persistent structural problem in genomics. Analysis definitions, evidence availability, and software implementation are commonly entangled. When these layers are not separated, results cannot be inspected, compared, or reused without access to the original pipeline or provider.

Qualifying variants (QV) make analysis definitions explicit and independent of implementation. Variant selection, scope, and applied criteria are recorded as inspectable artefacts rather than implicit behaviour. This allows experts, patients, and institutions to see exactly what was assessed and to compare results across providers without reimplementation or exposure of proprietary code.

Even when analysis definitions are clear, most genomic conclusions still lack a verifiable description of whether sufficient evidence was available at the time of interpretation. Evidence sufficiency is often reconstructed manually or inferred from reputation rather than recorded directly. This limits trust, accreditation, and interoperability between laboratories and healthcare systems.

To address this, we are developing a minimal, verifiable evidence standard for automated clinical genetics. The aim is to allow analysis providers to deliver outputs that can be independently verified by hospitals and users, separate from internal methods and without repeated manual checks. Initial validation shows that this approach can produce healthcare-compliant outputs in PostgreSQL and RDF formats, enabling direct integration with Swiss hospital infrastructure ([overview documents](https://docs.switzerlandomics.ch/pages/design_qv_evidence_flag.html)).

Many institutions currently avoid formalising this layer of evidence. The resulting ambiguity is widely recognised but rarely resolved at a structural level. This gap is reflected in external guidance that relies on procedural safeguards rather than verifiable standards.

The screenshot below is from the **British Society for Genetic Medicine**, *Direct to consumer genomic testing, Position statement, September 2025*, which illustrates this point. Its recommendations aim to mitigate the risks of opaque or unverifiable genomic results. Our objective is basically the opposite - to make such mitigation unnecessary by enabling standards that can be trusted across clinical, public, and commercial settings without reliance on brand, reputation, or manual inspection.

![BSGM recommendation screenshot](/images/bsmg_recommendation_screenshot.png)
British Society for Genetic Medicine. *Direct to consumer genomic testing, Position statement.* September 2025.  

