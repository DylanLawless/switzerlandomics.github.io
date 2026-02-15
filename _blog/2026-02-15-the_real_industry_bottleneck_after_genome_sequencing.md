---
title: "The real industry bottleneck after genome sequencing"
layout: page
description: "Why genomic infrastructure competition is shifting from sequencing platforms to integrated workflows and interpretation systems over the coming decade."
date: 2026-02-15
category: industry-analysis

tags:
  - genomics
  - sequencing
  - clinical-genomics
  - infrastructure
  - industry

entities:
  people:
    - Matt Sause
    - Mark Kokoris
    - Jacob Thaysen
    - Thierry Bernard
    - Mark Stevenson
  software:
    - DRAGEN
  organisations:
    - Illumina
    - Roche Diagnostics
    - Qiagen
    - Ultima Genomics
    - Element Biosciences
    - BGI
  projects:
    - SBX
    - AXELIOS
  formats:
    - FASTQ
    - BAM
    - VCF
---

<p>{{ page.date | date: "%Y-%m-%d" }}</p>


> TLDR: Sequencing platforms are rapidly commoditising as Roche, Illumina and others compete on speed and accuracy. The strategic advantage is shifting from selling sequencing machines to controlling integrated workflows and, ultimately, interpretation infrastructure.  
>
> All platforms still converge to the same downstream formats and analysis pipelines, meaning long-term value sits not in sequencing itself but in infrastructure that converts sequencing output into reliable, scalable conclusions.  
>
> Next decade winners will control interpretation and workflow infrastructure, not sequencing hardware.

Sequencing is entering a new competitive phase. For more than a decade, Illumina dominated global DNA sequencing, enabling modern genomics research and diagnostics. That dominance is now being challenged.

Roche Diagnostics, led by CEO Matt Sause, has publicly committed to large-scale sequencing expansion, targeting more than USD 1.2 billion in annual sequencing revenue. Its SBX technology and upcoming AXELIOS platform claim human whole genome sequencing in under four hours, with long-term sales potential above CHF 1 billion. SBX was developed under the leadership of Mark Kokoris, inventor of the approach and head of the SBX programme at Roche. At the same time, competitors including Ultima Genomics, Element Biosciences and BGI continue driving sequencing costs downward.

The consequence is straightforward. Once multiple platforms deliver comparable throughput and accuracy, sequencing price and speed stop being durable competitive advantages. Hardware margins compress and sequencing itself ceases to be the primary bottleneck.

The same pattern appears in the shifting balance between short-read and long-read sequencing. Long-read technologies were widely expected to replace short-read platforms, prompting Illumina’s attempted acquisition of PacBio in 2018. Instead, short-read sequencing has remained dominant for clinical whole-genome workflows, while vendors now compete on accuracy and throughput rather than read length alone. Illumina’s recent acquisition of PacBio’s short-read Onso technology illustrates this pivot toward higher-accuracy short-read platforms, with newer approaches such as Roche’s SBX also targeting Q40-class performance. Yet regardless of chemistry or read architecture, these platforms still converge into the same downstream alignment and variant-calling workflows, reinforcing that competitive differentiation is moving away from sequencing mechanics toward workflow and interpretation infrastructure.

Competition therefore shifts from instruments to workflows.

A key signal comes from Roche’s own history. Mass spectrometry was once a specialist research technology, but platforms such as Roche’s cobas i601 transformed it into an integrated clinical laboratory workflow. Instead of supplying standalone instruments, Roche delivered automated sample-to-answer systems embedded directly into hospital laboratories, where laboratories no longer assemble separate extraction, preparation and analysis tools but operate a single integrated system.

The same transition is now beginning in sequencing. AXELIOS initially resembles existing research sequencers, but the long-term direction is clear: sequencing platforms are moving from standalone machines toward fully integrated clinical infrastructure.

This distinction is strategic. A company that sells only sequencing instruments captures one step of the process. A company that controls sample preparation, automation, analysis and reporting owns the entire workflow and therefore clinical adoption. In practical terms, a sequencing-only vendor delivers a machine, while laboratories must still manage extraction, preparation, analysis and interpretation separately; an integrated workflow vendor delivers a system where samples enter and validated results exit through a single controlled pipeline.

Qiagen occupies this upstream position today. Sample preparation sits before every sequencing run and increasingly dominates both cost and operational complexity. Qiagen leads this market, estimated above USD 6 billion and growing roughly 15 percent annually. Around 90 percent of its revenue comes from recurring consumables, with operating margins near 30 percent.

These economics reveal where durable value sits. Illumina itself, generating roughly USD 4.3 billion in annual revenue with operating margins near 23 percent and 65–70 percent recurring revenue, relies heavily on consumables rather than instrument sales. Across the industry, recurring workflow infrastructure produces predictable economics, while hardware margins decline. Software that becomes essential to workflows behaves similarly once embedded, because control of workflow also determines which consumables, software and services laboratories must continue to purchase and makes switching systems operationally costly.

Yet even with sequencing costs collapsing and workflows integrating, a critical bottleneck remains. Generating genomic data does not automatically produce clinical decisions. Secondary analysis platforms such as Illumina’s DRAGEN increasingly handle alignment and variant calling efficiently, but interpretation remains fragmented. Tools associated with Qiagen and others help prioritise variants and pathways, yet translating results into clinical decisions still requires complex downstream infrastructure. Even fully integrated sequencing workflows typically end with variant lists or reports, leaving final evidence integration and decision support unresolved.

This explains current strategic manoeuvring across the sector. Leadership transitions and board changes are not incidental. Illumina’s CEO Jacob Thaysen, previously at Agilent where workflow integration was central, is expected to prioritise end-to-end solutions. Qiagen’s CEO transition following Thierry Bernard’s planned departure, alongside the addition of former Thermo Fisher COO Mark Stevenson to its supervisory board, signals a company at a structural decision point. These shifts reflect competition to control workflow layers surrounding sequencing.

The infrastructure transition can therefore be summarised in phases. Sequencing solved data generation. Platforms now compete on workflow integration. Clinical adoption demands automated, regulated pipelines. Value then shifts to interpretation and decision infrastructure.

The industry is entering the final two phases.

For companies building genomic infrastructure, the implication is direct. The long-term opportunity is not sequencing faster or cheaper. It is turning sequencing output into reliable, standardised and scalable decisions.

Infrastructure that survives platform transitions is not tied to any single instrument vendor. It operates downstream, accepts data from all platforms and produces outputs clinicians and researchers depend upon regardless of sequencing source.


Recent SBX duplex performance results show that platform innovation still feeds into the same downstream workflows. Roche reports SNV and indel F1 scores of about 99.5 to 99.8 percent across HG001 to HG007 using modified GATK and Google DeepVariant. Reported throughput includes about 5.3 billion duplex reads and enough coverage for seven genomes in one hour, with average duplex quality of Q39.
Although sequencing chemistry and signal generation differ across platforms, the pipelines still produce the same standard outputs: aligned reads in BAM or CRAM, and variants in VCF or gVCF. Interpretation and evidence integration remain the limiting step after these stages.

For most clinical genomics workflows, still dominated by short-read sequencing, this backbone remains stable across Illumina SBS, Roche SBX and other platforms: FASTQ or equivalent read export, alignment to BAM or CRAM, then variant calling to VCF or gVCF. New developments mostly extend this ecosystem rather than replace it, including binary VCF representations, richer structural variant and copy-number annotations, expanded quality and provenance metrics, and clinical reporting layers used in hospital systems. Even future shifts toward graph or pangenome references are expected to collapse back to BAM, CRAM and VCF-like outputs for interoperability. As a result, competition among sequencing platforms improves signal, speed and scale, but downstream infrastructure continues to operate on shared formats where interpretation, not file structure, defines long-term differentiation.

This is the layer now becoming decisive.

For Switzerland Omics, the direction is clear. Platform-neutral infrastructure that consumes sequencing outputs, integrates evidence and produces decision-ready interpretations aligns with where long-term value is moving. As sequencing commoditises and workflows integrate, the bottleneck shifts to interpretation and decision support.

The strategic question is no longer who sells sequencing machines.

It is who builds the infrastructure that turns genomes into decisions.

