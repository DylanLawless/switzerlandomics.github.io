<!-- --- -->
<!-- title: "Founders of Sentieon" -->
<!-- layout: page -->
<!-- description: "How Sentieon turned slow and operationally fragile secondary analysis into a faster, deterministic, software-only production layer for modern genomic pipelines." -->
<!-- date: 2026-03-14 -->
<!-- category: founder-stories -->
<!---->
<!-- tags: -->
<!--   - genomics -->
<!--   - bioinformatics -->
<!--   - variant-calling -->
<!--   - secondary-analysis -->
<!--   - clinical-genomics -->
<!--   - sequencing -->
<!---->
<!-- entities: -->
<!--   people: -->
<!--     - Jun Ye -->
<!--     - Hanying Feng -->
<!--     - Xiaofeng Liu -->
<!--     - Rafael Aldana -->
<!--     - Donald Freed -->
<!--     - Brendan D. Gallagher -->
<!--     - Jeremy S. Edwards -->
<!--     - Renke Pan -->
<!--     - Haodong Chen -->
<!--     - Jinnan Hu -->
<!--     - Zhipan Li -->
<!--     - Cai Jiang -->
<!--     - Hong Chen -->
<!--     - Li Niu -->
<!--     - Alice Feng -->
<!--     - William J. Rowell -->
<!--     - Aaron M. Wenger -->
<!--   software: -->
<!--     - Sentieon -->
<!--     - DNAseq -->
<!--     - TNseq -->
<!--     - TNscope -->
<!--     - DNAscope -->
<!--     - DNAscope LongRead -->
<!--     - DNAscope Hybrid -->
<!--     - Pangenome -->
<!--     - CRISPR-detector -->
<!--     - Sentieon CLI -->
<!--     - Sentieon BWA -->
<!--   organisations: -->
<!--     - Sentieon, Inc. -->
<!--     - University of New Mexico -->
<!--     - The Children's Hospital of Philadelphia -->
<!--     - QIAGEN -->
<!--     - Golden Helix -->
<!--     - BC Platforms -->
<!--     - Element Biosciences -->
<!--     - Ultima Genomics -->
<!--     - Google DeepVariant -->
<!--     - DNAnexus -->
<!--     - Microsoft Azure -->
<!--     - AWS -->
<!--     - Intel -->
<!--     - AMD -->
<!--     - Velsera -->
<!--     - OmniTier -->
<!--     - Gencove -->
<!--     - National Cancer Institute -->
<!--     - Food and Drug Administration -->
<!--     - precisionFDA -->
<!--     - ICGC-TCGA DREAM Challenge -->
<!--     - NCI-CPTAC -->
<!--     - Bio-IT World -->
<!--   projects: -->
<!--     - Gabriella Miller Kids First Pediatric Research Program -->
<!--     - 1000 Genomes Project -->
<!--     - precisionFDA Truth Challenge -->
<!--     - precisionFDA Consistency Challenge -->
<!--     - ICGC-TCGA DREAM Mutation Calling Challenge -->
<!--   formats: -->
<!--     - FASTQ -->
<!--     - BAM -->
<!--     - gVCF -->
<!--     - VCF -->
<!-- --- -->

<p>{{ page.date | date: "%Y-%m-%d" }}</p>

How Sentieon turned slow and operationally fragile secondary analysis into a faster, deterministic, software-only production layer for modern genomic pipelines.

By the mid-2010s, sequencing output was rising quickly and sequencing costs were falling, but secondary analysis remained slow, compute-heavy, and awkward to operate. Pipelines built around BWA, GATK, MuTect, and later MuTect2 were trusted for accuracy, yet they also brought long runtimes, poor scaling, and, in some settings, non-deterministic behaviour caused by downsampling or multithreaded execution. As sequencing moved further into translational and clinical use, these became infrastructure constraints.

Sentieon entered this market in 2014. Delaware records place Sentieon, Inc. as incorporated on 15 July 2014. Early public records place the company in Mountain View, California, and later company material lists San Jose. Public business sources describe it as a small, venture-backed private company.

The company’s first public move was narrow and clear. Sentieon presented itself as a software-only, CPU-based implementation of workflows that users already trusted. The promise was simple: preserve accepted short-read pipeline logic, remove much of the runtime burden, avoid downsampling, and make execution deterministic.

| Item | Details |
|---|---|
| Founders / developers | Available public records most clearly identify Hanying Feng and Xiaofeng Liu as co-founders. Jun Ye appears consistently in early top leadership as President and CEO. Early technical contributors visible in the publication trail include Rafael Aldana, Donald Freed, Brendan D. Gallagher, and collaborators. |
| Institutions | Sentieon, Inc.; early publication collaboration with the University of New Mexico; later grant-linked work with The Children's Hospital of Philadelphia |
| Incorporation / first release period | Incorporated July 2014; first public benchmarking paper January 2016 |
| Licensing model | Commercial software licensing with support and updates; software-only distribution; floating licence server model for concurrent use across local or cloud infrastructure |
| Pricing model | Public price list not disclosed; company materials describe annual licences, free trials, and academic pricing tiers |
| Distribution mechanism | Downloaded software, documentation, free trials, partner integrations, and enterprise deployment on local or cloud infrastructure |
| Adoption scale | Used across research, diagnostics, pharma, sequencing service providers, and public-sector research contexts |
| Maintenance / support model | Release notes, software manual, troubleshooting, application notes, cloud deployment guidance, CLI tooling, technical support, and updates during licence term |
| Primary use | High-throughput secondary analysis for germline, somatic, long-read, hybrid, ctDNA, pangenome, and related variant-calling workflows |
| Current status | Private genomics software company with a broad production secondary-analysis stack and a continuing public publication trail through 2025 |

The earliest publications show the original wedge clearly. In the 2016 DNAseq benchmarking preprint, Jessica A. Weber, Rafael Aldana, Brendan D. Gallagher, and Jeremy S. Edwards described secondary analysis as the emerging bottleneck in sequencing workflows and positioned Sentieon DNAseq as a faster implementation of established GATK-based logic. The paper reported more than 20-fold speed improvement on the same hardware, with concordance above 99.8 percent overall and above 99.99 percent after accounting for GATK downsampling effects. It also highlighted a practical distinction that mattered beyond benchmarking: Sentieon did not downsample and produced identical results between runs, while repeated GATK runs showed run-to-run variation.

The 2017 preprint, “The Sentieon Genomics Tools – A fast and accurate solution to variant calling from next-generation sequence data,” extended that case from germline to tumour-normal analysis. Donald Freed, Rafael Aldana, Jessica A. Weber, and Jeremy S. Edwards described an optimised reimplementation of the mathematical models behind GATK, Picard, MuTect, and MuTect2, packaged into DNAseq, TNseq, and TNHaplotyper pipelines. The paper reported large runtime gains for germline, somatic, and joint genotyping tasks, while preserving near-identical output. This established Sentieon’s first commercial identity: a compatibility-first production substitute for accepted workflows.

That identity mattered because it made adoption easier. Laboratories did not need to abandon familiar inputs, outputs, or pipeline concepts. Sentieon explicitly mapped its tools onto established BWA, GATK, and MuTect-style components and wrapped them in a maintained software stack with QC tools, recalibration, deduplication, joint genotyping, documentation, release notes, cloud deployment guides, and later a command line interface. The product was not only faster code. It was an operable production layer.

The public technical story changed in the next phase. TNscope in 2018 and DNAscope in 2022 marked a move beyond pure reimplementation into differentiated caller behaviour. TNscope introduced haplotype-based candidate generation with machine-learning filtering for somatic analysis. DNAscope did the same for germline calling, combining haplotype-aware calling with learned filtering and platform-specific modelling. By this point, Sentieon was no longer selling only speed and determinism. It was also selling a distinct caller layer.

A third phase followed as the platform expanded beyond short-read acceleration. DNAscope LongRead extended the company’s approach to PacBio HiFi. The ctDNA pipeline added UMI-aware and later non-UMI liquid-biopsy workflows. CRISPR-detector added gene-editing analysis. Public product materials also indicate pangenome, CNV, SV, and difficult-locus workflows. Sentieon had become a broader secondary-analysis platform rather than a short-read optimisation company.

The clearest later methods anchor is the 2025 Frontiers in Bioinformatics paper on DNAscope Hybrid, authored by Jinnan Hu, Donald Freed, Hanying Feng, Hong Chen, Zhipan Li, and Haodong Chen. Its importance lies in the design logic. The hybrid workflow is not described as a simple merger of short-read and long-read calls. It uses long-read information to improve short-read placement in difficult regions, then reruns calling on the corrected short-read representation. That is a concrete example of Sentieon’s later design philosophy: platform-specific modelling, focused rescue of difficult loci, and production-oriented integration rather than generic aggregation.

Across these stages, the company’s technical pattern becomes clear. The first phase centred on deterministic, accelerated CPU implementation of trusted methods. The second added machine-learned filtering and platform-specific modelling. The third extended that system across long reads, hybrid workflows, ctDNA, pangenome analysis, and harder genomic contexts. This gave Sentieon a path from compatibility-first acceleration into a broader proprietary secondary-analysis platform.

The public IP trail fits that progression. Patent listings tied to March 2015 include “Computation pipeline of location-dependent variant calls” and “Computation pipeline of single-pass multiple variant calls.” These suggest protection around pipeline-level concepts such as parameterisation and reuse of invariant computation. The deeper commercial moat likely sat elsewhere, in implementation quality, learned models, heuristics, platform-specific error handling, hybrid rescue logic, and the production system as a whole.

Commercialisation followed the same practical logic as the product. Sentieon sold into markets that already paid for secondary analysis, including sequencing service providers, diagnostics, pharma, hospitals, and academic research groups. Company materials describe free trials, annual time-based licences, technical support, updates during the licence term, concurrent licensing through a floating licence server, and academic pricing tiers. A full public price list is not visible in the material reviewed here, so pricing remains only partly public. Even so, the commercial form is clear: licensed enterprise software with support, updates, and deployment across local or cloud infrastructure.

Public business-profile sources also describe Sentieon as venture-backed and report early financing rounds, including a Series A and Series B, with roughly $23.8 million in total funding reported across aggregator sources. The underlying records are not fully consistent on dates, and a complete primary funding record was not identified here, so these figures should be treated as public reports rather than fully confirmed corporate history. Even so, they support the broader conclusion that Sentieon was financed early enough to build a commercial software company around secondary-analysis infrastructure.

Adoption appears to have spread through four routes. The first was compatibility with existing workflows. The second was benchmark and challenge credibility, including repeated visibility in DREAM, precisionFDA, and Bio-IT contexts. The third was partner embedding across upstream sequencers, downstream analysis platforms, and cloud environments, including public collaborations with groups such as Golden Helix, QIAGEN, BC Platforms, Element Biosciences, Ultima Genomics, DNAnexus, Azure, AWS, and others. The fourth was production-grade operability, supported by documentation, deployment guidance, licensing infrastructure, and maintained workflow tooling.

The publication trail also shows continuity in the builders behind this progression. Rafael Aldana and Brendan D. Gallagher appear in the earliest benchmark work, alongside University of New Mexico collaborator Jeremy S. Edwards. Donald Freed becomes a recurring central author from 2017 onward. Renke Pan appears in TNscope and DNAscope. Haodong Chen, Zhipan Li, and Jinnan Hu recur across DNAscope, ctDNA, ONT, and Hybrid work. Hanying Feng appears both in public leadership descriptions and in later technical papers. The product evolution was sustained by a stable internal technical effort rather than a series of disconnected launches.

A complete public ownership structure was not identified. Public records most clearly indicate that Hanying Feng and Xiaofeng Liu were co-founders, while Jun Ye appears as the company’s early President and CEO.


The lasting consequence of Sentieon is operational. The company helped make accepted but slow and sometimes non-deterministic secondary-analysis workflows more usable at scale through faster, deterministic, software-only execution on ordinary compute infrastructure. It then extended that same production mindset into machine-learned germline and somatic calling, long-read analysis, hybrid short-plus-long workflows, ctDNA, pangenome analysis, and difficult-locus rescue. The public record suggests that its durable value came from compatibility, engineering discipline, platform adaptation, and maintained delivery.

The broader lesson is simple. Sequencing technology advances quickly, but adoption depends on the quieter software layer beneath it. Software becomes infrastructure when it removes friction from trusted workflows, survives benchmark scrutiny, fits existing production habits, and remains operable over time. Sentieon’s history is a clear example of that process.

<!-- ## Links -->
<!---->
<!-- - https://www.sentieon.com -->
<!-- - https://doi.org/10.7287/peerj.preprints.1672v2 -->
<!-- - https://doi.org/10.1101/115717 -->
<!-- - https://doi.org/10.1101/250647 -->
<!-- - https://doi.org/10.1101/2022.06.01.494452 -->
