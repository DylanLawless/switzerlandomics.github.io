title: "Searching the glueable proteome"
layout: page
description: "Monte Rosa Therapeutics is using structural bioinformatics, molecular-surface modelling and experimental screening to map the target space of molecular glue degraders. Recent work with GSPT1, NEK7, VAV1 and G3BP2 shows how the programme has moved from degron prediction towards protein interaction surfaces and human pharmacology."
date: 2026-11-01
tags:
  - molecular-glues
  - protein-degradation
  - computational-biology
  - structural-biology
  - drug-discovery
  - clinical-development

<p>{{ page.date | date: "%Y-%m-%d" }}</p>

Monte Rosa Therapeutics is using structural bioinformatics, molecular-surface modelling and experimental screening to map the target space of molecular glue degraders that act through **cereblon (CRBN)**, the substrate-recognition protein of the CRL4<sup>CRBN</sup> E3 ubiquitin ligase complex. Recent work with GSPT1, NEK7, VAV1 and G3BP2 shows how this programme has expanded from degron prediction towards protein interaction surfaces, medicinal chemistry and human pharmacology.

Molecular glue degraders create a search problem across proteins, molecular surfaces and chemistry. A molecular glue stabilises an interaction between an E3 ubiquitin ligase and another protein, called the neosubstrate. Ubiquitination then directs the neosubstrate towards proteasomal degradation. This allows proteins without conventional small-molecule binding pockets to become accessible through an induced protein-protein interface.

Monte Rosa Therapeutics has organised much of its discovery programme around this induced interaction. Its work with CRBN asks which human proteins can form productive ternary complexes with the ligase, which molecular surfaces govern those interactions, and which chemical structures convert recruitment into selective degradation. 
I worked through Monte Rosa’s public presentations, clinical programmes and two recent structural studies to see how this search has developed over time (Petzold, Gainza et al., 2025; Annunziato et al., 2026).

Monte Rosa Therapeutics AG was incorporated in Basel in 2018. By 2021, the company was describing a broad discovery system called **QuEEN** that connected computational target discovery, structural modelling, molecular-glue chemistry, chemoproteomics and experimental validation.
QuEEN stands for _Quantitative and Engineered Elimination of Neosubstrates_. Monte Rosa uses it as the name of its molecular-glue discovery platform. The later papers therefore represent detailed mechanistic development of an established programme.


## Building a systematic search

Monte Rosa described its early platform under the title **“From Serendipity to Rational Design.”** The phrase captures the technical objective. Several molecular glues were historically recognised through their biological effects before their induced-proximity mechanisms were understood structurally. A systematic discovery framework requires explicit representations of the target, the E3 ligase, the candidate compound and the resulting ternary interface.

By 2021, QuEEN combined a **Degron Encyclopedia**, sequence and topology models, deep-neural-network prediction, AlphaFold2 structures, MaSIF surface analysis and **Rhapsody** ternary-complex modelling. A proprietary compound library supplied the corresponding chemical space, while the **Glueomics Toolbox** connected the predictions to quantitative proteomics, biochemical and biophysical assays, cellular profiling, transcriptomics, crystallography and cryo-EM. Monte Rosa reported approximately **3,000 predicted degron-containing proteins** and more than **200 validated chemical scaffolds** at that stage.

The early programme was broader than a canonical G-loop search. Public material from 2021 discussed X-loop motifs, VAV1-directed degradation through an SH3 domain, degron-agnostic chemoproteomic discovery and eventual expansion beyond CRBN. This early breadth is important because the surface-centric work of 2024 to 2026 develops ideas that were already being explored experimentally.

## From platform to programmes

The public emphasis shifted towards drug development during 2022 and 2023. The clearest example was **MRT-2359**, an orally bioavailable molecular glue degrader of GSPT1 being developed for MYC-driven cancers.

GSPT1 is a translation-termination factor containing a CRBN-recognised degron. Monte Rosa's therapeutic hypothesis centred on the dependence of MYC-driven tumours on high rates of protein synthesis. Degrading GSPT1 disrupts translation and can reduce downstream proteins associated with MYC-driven growth.

The programme combined molecular-glue pharmacology with genomic and transcriptomic patient stratification. In 2022, Monte Rosa presented analyses of **3,241 lung cancers** generated with Tempus and reported high N-MYC or L-MYC expression in approximately **15% of NSCLC** and **72% of SCLC** samples. Preclinical work then linked MYC expression to differential sensitivity in cell lines and patient-derived xenografts.
MRT-2359 continued into clinical development, and by 2023 Monte Rosa was presenting interim Phase 1 data rather than treating GSPT1 primarily as a discovery-platform example. 

The same period also brought an external discovery partnership with Roche. Under the 2023 agreement, Monte Rosa was to perform preclinical molecular-glue discovery on oncology and neurological targets, with Roche taking later development responsibility. The disclosed economics included **$50 million upfront** and potential milestone payments exceeding **$2 billion**.

## From G-loops to a structural proteome map

The most detailed computational account appears in the later CRBN target-space study. The work begins with a structural feature shared by several known CRBN neosubstrates: a glycine-centred loop that can fit into the CRBN recognition surface.

The researchers used the CK1α G-loop from PDB structure 5FQD as a structural template and defined an eight-residue window around the critical glycine. They searched experimentally determined PDB structures together with AlphaFold2 models of annotated human protein domains. Candidate motifs were filtered by structural RMSD, steric compatibility with CRBN, domain annotation and cellular localisation.

The initial search identified **6,123 candidate β-hairpin G-loop motifs across 1,424 human proteins**. PDB and AlphaFold supplied the structural coordinates, while InterPro, PFAM, PROSITE, SMART, UniProt and PANTHER supplied protein and domain annotation. Biopython and DSSP supported structural processing, and candidate motifs were aligned and filtered according to geometry.
The search defines drug-discovery target space in terms of compatibility with an induced protein-protein interaction. This is a slightly different from conventional approaches based on catalytic sites or pre-existing ligand pockets.

They shortened the structural motif to five residues. This expanded the candidate space to **1,633 proteins** and identified **184 proteins with predicted helical G-loops**. The helical examples showed that the relevant CRBN interaction geometry could be produced by more than one secondary-structure arrangement.

## Experimental validation and the role of chemistry

The computational predictions were tested using TurboID proximity labelling, mass spectrometry, NanoBRET, TR-FRET, recombinant proteins, mutagenesis and structural biology. These experiments measure distinct parts of the mechanism. TurboID detects proteins brought near CRBN inside cells, NanoBRET and TR-FRET measure compound-dependent protein interactions, mutagenesis tests contact residues, and proteomics measures selectivity across many proteins simultaneously.

The study reports experimental validation of **21 novel β-hairpin or helical G-loop proteins**, while the abstract describes **22 representative neosubstrates** overall. This validation chain separates structural compatibility from recruitment and degradation.

NEK7 provides an example. A predicted NEK7 G-loop supported recruitment to CRBN, while the first tested compound did not produce effective degradation. Screening differentiated chemistry identified another compound that formed a productive ternary complex and drove potent degradation. A **3.25 Å crystal structure** then resolved the interface.
Productive degradation depends on compatibility between the target, CRBN and the molecular glue.

## VAV1 shifts the representation to molecular surfaces

VAV1 provides a second level of abstraction (Neurath and Berg 2024). The protein lacks the expected canonical G-loop, which led the researchers to analyse the physicochemical properties of the exposed protein surface.

They adapted **MaSIF-seed**, an existing geometric deep-learning framework for molecular-surface representation. MaSIF encodes local geometry and chemical properties into learned surface fingerprints. The Monte Rosa analysis used these representations to search for local surface similarity.

A region of the VAV1 C-terminal SH3 domain resembled the molecular surface presented by the GSPT1 degron to CRBN even though the underlying fold was different. Compound screening, TR-FRET, NanoBRET and mutagenesis supported the predicted recruitment mechanism, and a **3.4 Å ternary-complex crystal structure** provided structural validation.

Surface mimicry expands the relevant variables from sequence and secondary structure to local geometry, electrostatics and chemistry. Different folds can therefore produce sufficiently similar exposed molecular surfaces to support related interactions with CRBN.

The computational approach changed accordingly. A motif search asks which proteins contain a particular structural feature. A surface search asks which proteins reproduce the interaction geometry associated with that feature. This second formulation covers a substantially larger region of protein space.

## Surface-centric discovery becomes explicit

Monte Rosa's public presentations show that the surface-centric interpretation became progressively more explicit during 2024 and 2025. A January 2024 presentation, **“Teaching CRBN New Tricks,”** organised the programme around the canonical degrome, expansion beyond the canonical degrome and eventual work beyond CRBN.

At that stage, Monte Rosa reported more than **2,500 G-loop proteins**, more than **120 experimentally validated G-loops**, more than **10 novel binding modes**, and a proprietary structural database containing more than **100 cryo-EM and crystal structures**. The presentation also described using surface properties to assess other E3 ligases for their apparent potential to support reprogrammable protein-protein interactions.

By February 2025, Monte Rosa was describing QuEEN as having identified **more than 18 novel binding modes**. Its public workflow was explicitly labelled a **surface-centric discovery process** connecting target identification, surface-aware molecular-glue generation, high-throughput screening, proteomics, structural biology and virtual screening.

These intermediate presentations show the progress towards later papers. The 2024 to 2026 studies provide detailed structural evidence for the surface-based search programme (Petzold, Gainza et al., 2025; Annunziato et al., 2026).

## G3BP2 extends the model to natural protein interactions

The second study, published in *Nature Structural & Molecular Biology* (Annunziato et al., 2026), extends the surface model further. The work began with an unbiased proteomic screen of CRBN-directed molecular-glue chemistry, which found that **MRT-5702** reduced G3BP2 abundance in cells.

CRBN knockout and pharmacological perturbation established CRBN- and proteasome-dependent degradation. NanoBRET then demonstrated compound-dependent recruitment. G3BP2 lacks a predicted G-loop, and its structure did not provide a convincing mimic of the previously characterised CRBN degrons.

The researchers changed the direction of the surface search. G3BP proteins bind natural partners such as USP10 through FGDF or related motifs, which engage a conserved interaction hotspot on the G3BP NTF2L domain. They analysed whether CRBN contained a molecular surface resembling one of these natural binding partners.

The search identified a region on the CRBN **LON domain** centred on residues **F150, G151 and I152**. Its local molecular surface reproduced important properties of the natural G3BP interaction footprint. A docking model placed G3BP2 against this region in an orientation compatible with MRT-5702.

Mutation experiments tested the model directly. CRBN F150A strongly impaired G3BP2 recruitment, while mutations at G3BP2 F15 and F33 also disrupted ternary-complex formation. These perturbations connected the computational surface match to residues required for the interaction.

## Structural confirmation by cryo-EM

The researchers solved the human DDB1-CRBN-MRT-5702-G3BP2 NTF2L complex by single-particle cryo-EM. The complete structure reached **2.5 Å overall resolution**, with local refinement of the CRBN-G3BP2 interface to **2.8 Å**.
The structure confirmed interaction with the predicted CRBN LON-loop. Residues spanning approximately E146 to I154 contribute substantially to the protein-protein interface. Earlier G-loop interactions had concentrated around the CRBN CULT domain and residues including N351, H357 and W400, while G3BP2 engages a different region.

The paper describes closed CRBN as exposing an extended protein-protein interaction surface of approximately **1,145 Å²** across its CULT and LON domains. G3BP2 therefore demonstrates that molecular-glue-mediated recruitment can use additional regions of the CRBN surface.
MRT-5702 also illustrates the contribution of compound stereochemistry. The molecule contains two chiral centres, and only **MRT-5702D** efficiently supported G3BP2 recruitment and degradation. Structural modelling assigned the active stereoisomer an **(S,S)** configuration.

The compound and protein interface form one physical system. Productive recognition therefore depends on how ligand chemistry modifies the interaction between the target and ligase surfaces.

## Glueprints and the glueable proteome

The G3BP2 paper introduces the term **glueprint** for a composite protein-glue surface that recreates part of the interaction footprint of a natural protein-protein interaction. The term provides a compact description of the expanded target-search problem.

Molecular mimicry, protein-protein interaction hotspots, molecular-surface comparison and induced proximity are established concepts. The new framework combines them into a prospective search strategy. A target contains surfaces evolved to bind natural partners, while an E3 ligase provides another set of interaction surfaces. A molecular glue can stabilise a weak or partial match between the two.

The conceptual progression across the recent papers runs from known degrons, to structural motifs, to alternative motif geometries, to molecular-surface mimicry and then to mimicry of natural protein-protein interaction footprints. This progression describes the scientific argument of the papers rather than a strict chronology of the company, since several of these ideas were already being explored earlier.

The implied computational objective is a map of the **glueable proteome** organised around interaction surfaces and compatible ligase-compound neosurfaces. Such a map treats druggability as a property of an induced molecular interface.

## Discovery can proceed in both directions

Monte Rosa's public material describes two complementary routes through this search space. A target-centred route begins with a protein or structural hypothesis, identifies a compatible ligase interaction, searches chemical space and validates the ternary complex experimentally.

The G-loop mining work follows this direction. The G3BP2 study follows a chemistry-centred route in which a compound first produces an unexpected degradation phenotype, after which proteomics identifies the target and structural computation explains the interaction.

This bidirectional workflow fits the combinatorial nature of molecular-glue discovery. The relevant search space contains proteins, molecular surfaces, conformational states and small molecules. Experimental measurements therefore provide both validation and new information for subsequent discovery cycles.

## Three routes into clinical development

Monte Rosa's clinical programmes now provide several tests of whether these discovery principles survive medicinal chemistry and human pharmacology. GSPT1, VAV1 and NEK7 reached the clinic through different biological and structural routes.

**MRT-2359** provides the earliest major translational example. The programme moved from a GSPT1 molecular-glue mechanism into biomarker-defined oncology, preclinical efficacy and Phase 1 development. Later clinical work shifted towards castration-resistant prostate cancer and combinations with androgen-receptor inhibitors, showing how a platform-derived target can evolve substantially after entering clinical testing.

**VAV1** provides the clearest link to the molecular-surface work. The VAV1-directed molecular glue **MRT-6160**, also known as DDY391, progressed into clinical development after the structural work described above. A 2026 presentation reported **greater than 90% VAV1 degradation in healthy volunteers**, accompanied by inhibition of T-cell and B-cell function and changes in associated cytokines. The programme is licensed to Novartis and has moved into Phase 2 development in immune-mediated disease.

**NEK7** provides a particularly long longitudinal example because it appeared in Monte Rosa's public platform materials by 2021. The company described a predicted **X-L-X-X-G-X-P degron** with structural similarity to CK1α, internal-library hits, CRBN-dependent degradation, ternary-complex formation and proteomic selectivity. By 2026, NEK7 degradation had become directly measurable in humans.

The public material does not establish that the compounds used in the later mechanistic NEK7 experiments are chemically identical to the clinical molecule MRT-8102. The mechanistic work and clinical programme should therefore be treated as related components of the broader NEK7 programme without assuming compound identity.

## GFORCE-1 tests MRT-8102 in humans

The **GFORCE-1** Phase 1 study enrolled **108 subjects with elevated cardiovascular risk**. Participants were randomised to placebo or once-daily MRT-8102 at **5, 20 or 40 mg** for 28 days, followed by another 28 days of safety observation. The population was selected for obesity and elevated inflammation, with baseline hsCRP above 3 mg/L and below 15 mg/L. Median age was 41 years and median BMI was 33.9 kg/m².

Safety and tolerability formed the primary endpoint. CRP and pharmacokinetics were secondary endpoints, while exploratory pharmacodynamic analyses included NEK7 degradation, cytokines, damage-associated molecular patterns, thrombogenic factors, lipids and other cardiovascular-risk markers. Cardiovascular outcomes were outside the scope of the study, and established coronary artery disease was not required for enrolment.

After four weeks of treatment, Monte Rosa reported approximately **80 to 90% degradation of NEK7 in peripheral-blood T cells**. Similar target degradation occurred at all three tested doses. This provides direct human evidence that an orally administered molecular glue can produce deep depletion of its intended protein target.

## NLRP3 pharmacodynamics

NEK7 has a kinase-independent role in assembly of the **NLRP3 inflammasome**, a multiprotein complex involved in inflammatory signalling and pyroptotic cell death. NLRP3 activation leads to release of IL-1 family cytokines and damage-associated molecular patterns, or **DAMPs**, including HMGB1, calprotectin and S100A12.

The therapeutic hypothesis places NEK7 upstream of several of these outputs. Degrading NEK7 may therefore alter multiple branches of NLRP3-associated inflammatory biology. GFORCE-1 tested this hypothesis by measuring several molecular layers of the pathway.

After four weeks of MRT-8102, the presentation reported median reductions of approximately **56% in calprotectin, 46% in S100A12, 51% in SAA, 28% in fibrinogen, 85% in hsCRP and 54% in IL-6**. Among participants with elevated baseline HMGB1 or IL-1β, median reductions were approximately **40% and 37%**, respectively.

Several biomarker analyses used within-treatment changes from baseline. Separate healthy volunteers from earlier SAD/MAD cohorts supplied reference distributions for normal biomarker levels, and these volunteers were distinct from the randomised placebo arm of GFORCE-1. Statements that biomarker concentrations approached healthy-volunteer levels therefore refer to an external reference distribution.

## Dose response, safety and genetics

NEK7 degradation was similarly deep across the 5, 20 and 40 mg groups. Calprotectin fell by **57%, 54% and 52%** across the same dose levels, while hsCRP fell by **86%, 79% and 85%**. These observations are consistent with a pharmacodynamic response approaching saturation within the tested range, although the disclosed material does not establish the basis for subsequent dose selection.

Safety data were collected for eight weeks. **81 participants received MRT-8102 and 27 received placebo**. No serious adverse events were reported, treatment-emergent adverse events occurred in 33% of MRT-8102 participants and 30% of placebo participants, and minor infections occurred in 7% of each group.

Dose-level results provide additional context. Any adverse event occurred in 26%, 30% and 44% of participants receiving 5, 20 and 40 mg, respectively. Treatment discontinuations occurred in 0%, 11% and 19% of these groups. Two grade 3 events occurred at 40 mg: elevated liver enzymes in a participant subsequently found to have asymptomatic hepatitis A, and shoulder pain following an accidental shoulder dislocation.

GFORCE-1 also examined two NLRP3 variants, **rs10754555 and rs10754558**. Monte Rosa reported higher baseline concentrations of several DAMPs and inflammatory markers among carriers of higher-risk genotypes. Approximately 29% of analysed subjects carried the highest-risk GG genotype at either locus, while 57% carried what the company classified as moderate NLRP3 genetic risk.

These observations connect inherited NLRP3 variation with baseline pathway activity in the study population. Their predictive value for treatment response remains to be established. A pharmacogenomic enrichment strategy would require genotype to predict a different pharmacodynamic, imaging or clinical response after treatment.

## Moving towards disease biology

Monte Rosa has proposed **GFORCE-2** as a six-month Phase 2b study in approximately 160 patients with stable coronary artery disease and residual inflammation. The planned design tests 5, 10 and 15 mg MRT-8102 against placebo and includes circulating atherogenic and thrombogenic mediators, lipids, genetics and cardiac imaging.

One planned imaging measure is the **fat attenuation index**, which is intended to assess coronary inflammation and provide a phenotype closer to plaque biology. GFORCE-1 establishes human target engagement and broad pharmacodynamic effects, while plaque imaging can test whether those molecular changes correspond to altered vascular inflammation. Cardiovascular outcomes remain a later evidentiary stage.

The company has also proposed Phase 2 development in gout and hidradenitis suppurativa. These indications provide independent settings in which the same NEK7/NLRP3 mechanism can be evaluated through disease-specific clinical endpoints.

## What is technically distinctive

The computational and experimental toolkit is familiar to modern drug discovery. Structural alignment, AlphaFold models, RMSD filtering, molecular docking and domain annotation are established computational methods. Proteomics, NanoBRET, TR-FRET, mutagenesis, crystallography, cryo-EM and medicinal-chemistry screening are established experimental methods. MaSIF and geometric deep learning for protein surfaces also predate these studies.

The distinctive contribution lies in how the recognition model develops and how it is connected to experimental discovery. A canonical β-hairpin motif becomes a proteome-scale structural search. Helical G-loops show that secondary structure can vary. VAV1 shows that different folds can expose similar interaction surfaces. G3BP2 shows that CRBN can reproduce part of the interaction footprint of a target's natural binding partner.

The computational representation consequently moves from sequence and local structure towards molecular surface and interaction footprint. Each level expands the candidate target space and provides another representation in which chemical compatibility can be searched.

Protein surfaces can also provide an additional axis of selectivity. Closely related proteins may share highly conserved catalytic pockets while differing substantially in exposed interaction surfaces. Monte Rosa illustrated this early with CDK2, where molecular glues showed biochemical selectivity over CDK1, CDK4 and CDK9 followed by proteomic assessment of degradation.

## An integrated discovery system

QuEEN is best understood as a complete discovery cycle. Structural data, sequence annotation and molecular-surface representations define candidate interactions. Internal chemistry supplies molecular glues, biochemical assays measure ternary-complex formation, cellular experiments measure degradation, proteomics assesses selectivity, and structural biology resolves successful complexes.

Public software exposes selected parts of this process. The [`gloop-mining`](https://github.com/monterosatx/gloop-mining) repository contains code associated with the proteome-scale structural search, while [`molecular-surface-mining`](https://github.com/monterosatx/molecular-surface-mining) provides resources for the VAV1 surface-matching work.

The G3BP2 study provides a broader reproducibility package. Its cryo-EM structure is deposited as **PDB 9OS2**, the corresponding map as **EMD-70791**, and the proteomics dataset as **PRIDE PXD064243**. Computational code, intermediate files and predictions are available through Zenodo in an approximately 1 GB archive released under **CC BY 4.0**.

These resources expose enough of the published computational work to inspect the path from representation to experimental conclusion. The proprietary platform contains additional chemistry, experimental data and models, while the public artefacts provide a reproducible view of several central analyses.

## Beyond CRBN

Monte Rosa's longer-term platform work also extends beyond CRBN. By 2024, the company was using surface-based analysis to examine other E3 ligases for their apparent capacity to support reprogrammable protein-protein interactions.

This direction is still earlier than the CRBN programme, which has years of structural, chemical and clinical evidence behind it. It nevertheless broadens the computational problem from identifying new neosubstrates for one ligase to identifying ligases whose molecular surfaces may themselves support productive reprogramming.

The distinction is useful for understanding the scope of QuEEN. CRBN currently provides the best-developed experimental system, while the broader objective concerns a larger space of ligases, target surfaces and molecular glues.

## From discovery to commercial development

Monte Rosa converts the discovery system into therapeutic programmes and associated intellectual property. Some programmes remain internally developed, while others are licensed or developed with larger pharmaceutical companies.

The Roche collaboration established an external discovery route in 2023, with Monte Rosa performing preclinical MGD discovery for targets in oncology and neurological disease. The agreement included **$50 million upfront** and potential milestone payments exceeding **$2 billion**.

The global Novartis licence covering VAV1-directed molecular glue degraders, including MRT-6160, provides a later clinical example. Monte Rosa received **$150 million upfront** and is eligible for up to **$2.1 billion in development, regulatory and sales milestones**. The agreement also includes an option to co-fund Phase 3 development, a **30% share of US profits and losses**, and tiered royalties on ex-US sales.

The commercial model therefore places the computational and experimental platform upstream of therapeutic assets. Value is realised through internally developed medicines, licensed programmes and discovery collaborations.

## The prospective test

The strongest test of the surface framework is prospective prediction. A useful model should identify previously unrecognised target proteins and productive interaction sites before an experimental screen reveals them, and medicinal chemistry should then convert those predictions into selective ternary complexes and measurable degradation.

The evidence can be ordered from retrospective structural explanation through prospective prediction, selective degradation, human target engagement and eventually disease modification. Monte Rosa's current programmes occupy several positions along this sequence.

GSPT1 shows that the original degron-centred discovery system could generate a clinical oncology programme with biomarker-guided development. VAV1 demonstrates molecular-surface mimicry and has progressed to deep target degradation in humans. NEK7 can be followed from early degron and chemical-library work to 80 to 90% target degradation in peripheral-blood T cells. G3BP2 extends the mechanistic framework towards natural protein-protein interaction footprints.

Clinical benefit remains to be established separately for each programme. The computational direction is now well supported across several years of public work: molecular-glue discovery is expanding from known degron motifs towards **protein interaction surfaces as a searchable component of drug-discovery space**.

## Links

- [Monte Rosa Therapeutics](https://www.monterosatx.com/)
- [Monte Rosa Therapeutics AG, Swiss commercial register](https://www.zefix.ch/en/search/entity/list/firm/1345918)

### Primary articles

- Neurath MF, Berg LJ. **VAV1 as a putative therapeutic target in autoimmune and chronic inflammatory diseases.** *Trends Immunol.* 2024;45:580–596. https://doi.org/10.1016/j.it.2024.06.004
- Petzold G, Gainza P, Annunziato S, et al. **Mining the CRBN target space redefines rules for molecular glue-induced neosubstrate recognition.** *Science.* 2025;389:eadt6736. https://doi.org/10.1126/science.adt6736
- Annunziato S, Quan C, Donckele EJ, et al. **Cereblon induces G3BP2 neosubstrate degradation using molecular surface mimicry.** *Nat Struct Mol Biol.* 2026;33:479–487. https://doi.org/10.1038/s41594-025-01738-8

### Code and data

- [G-loop mining source code](https://github.com/monterosatx/gloop-mining)
- [Molecular-surface mining source code](https://github.com/monterosatx/molecular-surface-mining)
- [G3BP2 computational archive](https://doi.org/10.5281/zenodo.17751894)
- [G3BP2 cryo-EM structure](https://www.rcsb.org/structure/9OS2)

### Clinical studies

- [MRT-8102 clinical study](https://clinicaltrials.gov/study/NCT07119125)
- [MRT-6160 healthy-volunteer study](https://clinicaltrials.gov/study/NCT06597799)
