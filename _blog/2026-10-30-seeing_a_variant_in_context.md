---
title: "Seeing a variant in context"
layout: page
date: 2026-10-29
category: genomics

tags:
  - genomics
  - variant-interpretation
  - acmg
  - clinical-genomics
  - provenance
---

<p>{{ page.date | date: "%Y-%m-%d" }}</p>

We build internal systems to clean, reconcile and inspect genomic data. For instance, a variant is easier to interpret when its genomic context is visible. We had already built a gene structure viewer API and an evidence structure validator as separate systems, so we joined them and exposed them to users inside [ACMG validator](https://switzerlandomics.ch/technologies/acmg-validator/) (update release today v1.1.0).

For the variant under review, the viewer is generated on demand and shows the selected transcript, coding exons, untranslated regions, strand, genomic coordinates and exact variant position in one compact view. 
(During my postdoctoral work, I would have spent hours building figures like this manually in R or Illustrator.)

<p><img src="/images/acmg/gene_structure.png" alt="ACMG Validator gene structure view showing the BRCA1 transcript, exon structure and genomic variant position" style="display:block;width:100%;height:auto;margin:1.5rem auto;"></p>

The apparent simplicity requires a surprising amount of work. Transcript coordinates are retrieved and reconciled with the genomic position, exons are arranged in transcript order, long introns are condensed to keep the structure readable, and the variant is projected onto the resulting view. The selected transcript and plotted position are retained with the report, so the visual context seen during interpretation can remain part of the record.

The same design extends to the evidence underneath the classification. A final result may occupy a single line, while the application maintains a structured record of the ACMG/AMP criteria considered, the evidence associated with each criterion, applied strengths, caveats, notes and provenance. Criteria that support the classification, criteria that were reviewed and found unsupported, criteria that do not apply, and criteria that remain unresolved retain distinct states.

This detail is particularly useful for negative findings. Absence of evidence after review carries different information from evidence that was never assessed. An unresolved genomic region also differs from a region confidently observed as reference. Preserving these states makes the result easier to revisit, reproduce and exchange without reconstructing the reasoning from prose.

The complete state can be exported as structured JSON while the human-facing report remains compact. The structured record also allows the software to check whether all 28 ACMG/AMP criteria have been addressed, whether caveats remain incomplete, whether conflicting evidence is present, and whether the entered classification is internally consistent with the evidence selected by the reviewer.

The result is a deliberately simple interface over a much richer evidence record. The complexity stays underneath; the variant, its context and the confidence in the recorded data remain easy to see.
This is, of course, only a tiny snapshot of the data provenance work needed to build large databases and models. We hope you can use and recommend [ACMG validator](https://switzerlandomics.ch/technologies/acmg-validator/) to your colleagues.
