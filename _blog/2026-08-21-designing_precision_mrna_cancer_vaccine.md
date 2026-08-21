---
title: "Designing a patient-specific mRNA cancer vaccine"
layout: page
math: mathjax
description: "How tumour-normal sequencing, RNA-seq, HLA prediction and automated mRNA design select patient-specific neoantigens and convert them into a personalised cancer vaccine."
date: 2026-08-21
category: industry-analysis

tags:
  - mrna
  - cancer-vaccines
  - neoantigens
  - bioinformatics
  - precision-medicine
  - sequencing

entities:
  people:
  software:
    - NetMHCpan
    - NetMHCIIpan
    - Rosetta
  organisations:
    - Moderna
    - Merck
    - Personalis
    - National Cancer Institute
  projects:
    - KEYNOTE-942
    - KEYNOTE-603
    - GENCODE
  formats:
---

<p>{{ page.date | date: "%Y-%m-%d" }}</p>

> TLDR: A cancer vaccine can be designed directly from a patient's tumour sequence: matched tumour-normal WES, RNA-seq, and HLA-specific models select a set of neoantigens for one personalised mRNA construct. The next step is to make that target selection probabilistic, so each candidate is chosen from quantified evidence and explicit uncertainty rather than rank alone.

Pharmaceutical partners Moderna and Merck announced on Wednesday that their novel mRNA-based vaccine, 
was effective in a late-stage clinical trial of patients with melanoma, one of the deadliest forms of skin cancer.
The treatment is individually tailored to target a patient’s unique cancer mutations.
This triggered a dramatic jump in the share price for Moderna Inc. from $63 to $174.

Intismeran autogene, formerly mRNA-4157/V940, is designed separately for each patient. Tumour DNA, matched normal DNA, tumour RNA, and HLA type are used to select up to 34 tumour-specific neoantigens. Those selected sequences are assembled into one mRNA construct and manufactured as an individual vaccine.


The approach has produced a randomised clinical signal in melanoma. In KEYNOTE-942, 18-month recurrence-free survival was 79% with intismeran plus pembrolizumab and 62% with pembrolizumab alone. The primary analysis reported a recurrence-free survival hazard ratio of 0.561. The three-year update retained a favourable signal, with a recurrence-free survival hazard ratio of 0.510 and a distant metastasis-free survival hazard ratio of 0.384. In August 2026, Merck and Moderna announced that the Phase 3 INTerpath-001 trial had met its primary recurrence-free survival endpoint and key secondary distant metastasis-free survival endpoint versus pembrolizumab alone; detailed results are expected at a forthcoming medical meeting. [Weber et al., 2024][weber2024] [Carlino et al., 2026][carlino2026] [Merck and Moderna, 2026][interpath2026]

The technical interest is the route from a patient's sequencing data to the sequence of the medicine.

```
tumour biopsy + matched blood
            ↓
 tumour DNA + normal DNA + tumour RNA + HLA
            ↓
   somatic variant set
            ↓
 mutation-derived peptides
            ↓
 patient-specific ranking
            ↓
    selected neoantigens
            ↓
  one patient-specific mRNA
```

<div style="display: flex; justify-content: center; flex-wrap: wrap;">
    <img src="/images/mrna_vaccine/mrna_vaccine_fig_1.png" alt="Patient-specific mRNA-4157 workflow from tissue sampling to administration" style="width: 100%;">
</div>

*Figure 1. Patient-specific workflow from tumour and normal sampling through sequencing, vaccine design, manufacture, and administration.*




## 1. Define the patient's tumour-specific search space

The first step is matched tumour-normal sequencing.

KEYNOTE-942 reports next-generation sequencing on the **Illumina NovaSeq** platform. Whole-exome sequencing was performed by **Personalis**. Tumour WES defined the mutanome. Blood WES supplied the matched normal comparison and was also used for HLA typing. Tumour RNA-seq established the transcriptome. These data entered Moderna's automated mRNA-4157 design system. [Weber et al., 2024][weber2024]

The matched normal sample determines which variants are tumour-specific for that patient.

```text
variant in tumour + normal
→ germline
→ exclude from tumour-specific candidate set

variant in tumour + absent from normal
→ somatic candidate
```

Population frequency is secondary to this patient-specific comparison. A recurrent cancer mutation can qualify. A private passenger mutation can also qualify. The relevant requirement is tumour specificity and useful immune presentation.

The 34 targets are therefore a **product capacity**, not a fixed gene panel. The source genes can differ completely between patients.

A driver such as `BRAF`, `KRAS`, or `TP53` can contribute a target when the mutation produces a useful neoantigen. A passenger mutation can also contribute. The gene provides the sequence context. The selected object is the mutation-derived peptide in the context of the patient's HLA repertoire.

A simple example shows the transition from variant to antigen:

```text
normal coding sequence:
... AAG GCT TTT ...
        ↑
       Ala

tumour coding sequence:
... AAG GAT TTT ...
        ↑
       Asp
```

The resulting protein sequence can contain a tumour-specific amino-acid change:

```text
normal peptide:
LLKAFQVP...

tumour peptide:
LLKDFQVP...
   ↑
 somatic
```

That altered residue becomes the centre of a set of candidate peptide sequences.

## 2. Generate candidate neoantigens

The clinical papers describe the overall workflow. Moderna's patent disclosures provide more detail on candidate generation. The patent describes projection of somatic coding variants onto **GENCODE** protein sequences. A typical single amino-acid substitution is represented by a 25-amino-acid source sequence. The mutant residue is centred between 12 native amino acids on each side. [Moderna patent][moderna-patent]

```text
12 native amino acids
        ↓
ABCDEFGHIJKL[M]NOPQRSTUVWX
            ↑
         mutation
```

This 25-amino-acid sequence is a source region. The MHC class I candidate is shorter.

For example:

```text
source sequence:
ABCDEFGHIJKL[M]NOPQRSTUVWX

possible class-I windows:

IJKL[M]NOP
JKL[M]NOPQ
KL[M]NOPQR
L[M]NOPQRST
```

The patent describes class I candidates in the **8 to 11 amino-acid** range. Class II candidates are longer. Insertions and deletions can generate several consecutive altered residues and a different peptide geometry. [Moderna patent][moderna-patent]

This creates a much larger search space than the final number of vaccine targets suggests.

```text
hundreds of coding mutations
          ↓
many altered protein sequences
          ↓
many overlapping peptide windows
          ↓
many peptide:HLA combinations
          ↓
ranked patient-specific candidates
          ↓
up to 34 selected neoantigens
```

Tumour RNA-seq then adds direct evidence about expression. A DNA variant can be well supported while the corresponding transcript is absent or weakly expressed. RNA evidence can show whether the transcript is present, whether the mutant allele is represented, and how much of the mutant transcript is observed.

The Moderna patent describes transcript abundance, DNA and RNA variant frequency, sequence-call confidence, and predicted HLA binding among candidate features. It also describes clonality, mutation type, and amino-acid properties as possible inputs. [Moderna patent][moderna-patent]

A practical ranking system can distinguish cases such as:

```text
Candidate A
DNA VAF          0.38
RNA VAF          0.42
transcript       high
HLA prediction   strong

Candidate B
DNA VAF          0.05
RNA mutant read  absent
transcript       low
HLA prediction   moderate
```

The exact production thresholds and coefficients are private.

### Quantify the evidence before ranking

The patent quantifies variant-call confidence, DNA and RNA VAF, transcript abundance, predicted HLA affinity, and tumour-purity-adjusted VAF thresholds, with one low-purity example reducing 10% to 5%. Ten of 20 and 500 of 1,000 mutant RNA reads both give VAF 0.5, but different certainty. A Bayesian count model makes this explicit.

For mutant-supporting reads \(k_i\) from \(n_i\) informative reads:

$$
\theta_i \sim \mathrm{Beta}(\alpha,\beta)
$$

$$
k_i \mid \theta_i \sim \mathrm{Binomial}(n_i,\theta_i)
$$

which gives:

$$
\theta_i \mid k_i,n_i
\sim
\mathrm{Beta}(\alpha+k_i,\beta+n_i-k_i)
$$

The posterior can then answer a design question directly:

$$
P(\theta_i > \theta_{\min}\mid k_i,n_i)
$$

Here \(\theta_i\) can represent mutant-allele expression. Richer models can include tumour purity, copy number, and assay error. This is illustrative, not a disclosed Moderna model. The same principle applies to somatic calls, where read quality, depth, purity, and matched-normal evidence affect confidence.

## 3. Rank each peptide in the patient's HLA context

HLA genotype defines the antigen-presentation space for the patient.

The same tumour mutation can have different value in two people because their HLA molecules can differ in peptide-binding preference.

```text
same mutant peptide

Patient A
HLA-A*02:01
→ strong predicted presentation

Patient B
different HLA repertoire
→ weak predicted presentation
```

The 2026 KEYNOTE-942 data supplement provides the clearest public description of the production algorithm. It states that a **deterministic machine-learning algorithm** predicts neoantigen immunogenicity from patient-specific DNA sequencing, RNA sequencing, and HLA type. Separate models are used for **MHC class I** and **MHC class II**. The software system is described as automated and version controlled. [Carlino et al., 2026][carlino2026]

<div style="display: flex; justify-content: center; flex-wrap: wrap;">
    <img src="/images/mrna_vaccine/Kim_2026_Figure_S2.png" alt="Neoantigen selection algorithm overview" style="width: 100%;">
</div>

*Figure 2. Extract from Kim 2026 et al. figure S2. Neoantigen selection algorithm overview from the KEYNOTE-942 programme. Patient tumour DNA-seq, normal DNA-seq, tumour RNA-seq, and HLA typing feed mutation and peptide annotation, neoantigen selection, feature annotation, automated concatemer design, and mRNA sequence design. The published figure states that distinct MHC class I and II models are used. The figure was originally reprinted from Weber et al. in their earlier Lancet article.*

The clinical figure gives the production architecture:

```text
patient tumour DNA-seq
patient normal DNA-seq
patient tumour RNA-seq
patient HLA typing
          ↓
      patient data
          ↓
annotate mutations, peptides, and HLA type
          ↓
neoantigen selection algorithm
          ↓
annotate neoantigen features
          ↓
automated concatemer design
          ↓
design mRNA sequence
          ↓
mRNA-4157 open reading frame
          ↓
up to 34 neoantigens
```

The patent names **NetMHCpan** and **NetMHCIIpan** for HLA prediction. It compares NetMHCpan 3.0 with 4.0 EL and uses percentile rank, with about 0.5% as a strong class-I cutoff; this was better balanced across HLA alleles than IC50. [Moderna patent][moderna-patent]

It also names a **Centering Score** for TCR engagement and an **Anchoring Score** for differential HLA binding. Optional peptide:HLA docking is described, with **Rosetta** as an example for estimating residue solvent exposure.

```text
mutant peptide
      ↓
HLA prediction
      ↓
anchoring + TCR-facing position
      ↓
optional peptide:HLA structure
```

A patient-specific self proteome can reject exact self matches. Candidate features may enter regression, random forest, neural-network, support-vector, Gaussian-mixture, or hierarchical Bayesian models. These are patent embodiments; the current production model and weights are undisclosed.

Each stage carries uncertainty. A useful statistical representation for candidate \(i\) is:

$$
q_i =
P(\text{useful target}_i\mid
\text{DNA, RNA, peptide, HLA, functional evidence})
$$

Evidence can update prior odds when the component models support that factorisation:

$$
\frac{P(Z_i=1\mid D_i)}
     {P(Z_i=0\mid D_i)}
=
\frac{P(Z_i=1)}
     {P(Z_i=0)}
\times
BF_{\mathrm{DNA}}
\times
BF_{\mathrm{RNA}}
\times
BF_{\mathrm{HLA}}
\times
\cdots
$$

Correlated evidence requires a joint or hierarchical model. The equation is a general representation of the inference problem. It is not a claim about the internal quantity or factorisation used by Moderna.

A calibrated probability has a useful property for design. It describes the strength of evidence, not only the rank order. That becomes important when the product has a finite number of available target positions.

## 4. Select a useful set of targets

The vaccine can contain up to 34 neoantigens. The selected set can span unrelated genes, different HLA molecules, and different tumour clones.

The patent gives one example with **29 class I and 5 class II** neoantigens. It also describes HLA-A, HLA-B, and HLA-DR as higher-priority targets in some implementations. These are patent examples rather than confirmed universal production rules. [Moderna patent][moderna-patent]

The selected set is therefore best understood as a portfolio.

```text
target A   target B   target C   ...   target N
   │          │          │               │
different tumour mutations and HLA contexts
```

A broader set can reduce dependence on one antigen, one tumour subclone, or one presentation route. It can also include both driver and passenger mutations.

The patent describes this as a constrained design problem. Its computerised system scores and ranks candidate sequences, then selects them subject to the maximum vaccine length:

$$
\underset{\mathcal N}{\operatorname{argmax}}
\quad
\mathrm{Score}(\mathcal N)
\qquad
\text{subject to}
\qquad
\mathrm{Length}(\mathcal N)\leq L_{\max}
$$

A probability-aware implementation can extend that score with calibrated target probabilities, clonality, HLA breadth, redundancy, and construct compatibility. This explains why the preferred set need not be the 34 highest independent peptide scores.

Tumour mutational burden only defines the amount of starting material. It does not directly define target quality. KEYNOTE-942 exploratory analyses retained a treatment effect in both TMB-high and TMB-low groups. The study was not powered for definitive biomarker subgroup conclusions. [Carlino et al., 2026][carlino2026]

## 5. Compile the selected targets into one mRNA sequence

The selected neoantigens are assembled into a single synthetic polyepitope open reading frame.

```text
Gene A mutation → neoantigen A
Gene B mutation → neoantigen B
Gene C mutation → neoantigen C

              ↓

     [A][B][C] ... [N]

              ↓

single patient-specific mRNA ORF
```

The full native tumour proteins are not reproduced in the construct. The shared molecular identity between vaccine and tumour is the **mutant peptide:HLA complex**.

On the tumour side:

```text
native mutant protein
        ↓
intracellular processing
        ↓
mutant peptide
        ↓
patient HLA
        ↓
peptide:HLA surface
```

On the vaccine side:

```text
synthetic concatemer
        ↓
intracellular processing
        ↓
same mutant peptide
        ↓
same patient HLA
        ↓
same peptide:HLA surface
```


<div style="display: flex; justify-content: center; flex-wrap: wrap;">
    <img src="/images/mrna_vaccine/mrna_vaccine_fig_2.png" alt="Vaccinated cell presenting antigens to immune system and tumour presenting its own matching antigens" style="width: 100%;">
</div>

*Figure 3. Single-mRNA neoantigen concatemer processing, then peptide:HLA presentation and TCR recognition. The vaccinated cell presents vaccine antigens to the immune system. The tumour presents the same version of its own matching antigens which the immune system now recognises.*


The design software also has to consider the junctions between selected antigen regions. Two useful sequences can create an unwanted peptide when placed next to each other.

```text
neoantigen A | neoantigen B
      \_____    ____/
             \/ 
 artificial junction peptide
```

Candidate junctions can be scanned against the patient's class-I HLA repertoire for newly created high-affinity pseudoepitopes. Patent-described remedies include reordering neoantigens, trimming boundaries, inserting a short spacer such as glycine, or substituting problematic anchor residues. [Moderna patent][moderna-patent]

The clinical paper states that the selected amino-acid candidates are incorporated into an optimised concatemeric sequence. That sequence is then **transferred electronically for manufacturing**. [Weber et al., 2024][weber2024]

The product therefore connects a digital patient-specific design directly to a standardised manufacturing process.

```text
patient sequence data
        ↓
target inference
        ↓
concatemer design
        ↓
digital mRNA specification
        ↓
manufacturing
        ↓
patient-specific physical drug
```

## 6. Evidence that the design works

The programme provides three useful levels of validation.

The first is target-selection validation. In **29 NCI colorectal cancers** with known neoantigen-reactive TILs, the algorithm selected **26 of 64** reactive neoantigens, or 41%, and at least one in **18 of 29 patients**. [Zhong et al., 2020][zhong2020] A patent reproducibility test across one primary tumour and three related cell lines found Spearman \(\rho\) **0.84 to 0.86** for raw neoantigen scores, with 34 selected neoantigens common to all four vaccine designs. [Moderna patent][moderna-patent]

```text
WES + RNA + HLA
      ↓
selection algorithm
      ↓
predicted neoantigens
      ↓
compare with
experimentally observed
human TIL reactivity
```

The second level is post-vaccination immunology. KEYNOTE-603 used patient-specific synthetic peptides to test immune responses after treatment. PBMC responses were measured by IFN-γ ELISpot. The study also used intracellular cytokine staining and flow cytometry to characterise neoantigen-specific T cells. [Gainor et al., 2024][gainor2024]

This creates a clean separation:

```text
before manufacture
sequence-based prediction

after vaccination
patient-specific immune measurement
```

The third level is clinical outcome. KEYNOTE-942 enrolled 157 patients with completely resected high-risk melanoma. A total of 107 received mRNA-4157 plus pembrolizumab and 50 received pembrolizumab alone. The primary analysis reported 18-month recurrence-free survival of **79% versus 62%**. The recurrence-free survival hazard ratio was **0.561**. [Weber et al., 2024][weber2024]

At the three-year update, median follow-up was approximately 34.9 months. The recurrence-free survival hazard ratio was **0.510** using the study's reported 80% confidence interval. Distant metastasis-free survival had a hazard ratio of **0.384**. More than 90% of patients initially assigned to combination therapy had an individualised product manufactured successfully. [Carlino et al., 2026][carlino2026]

The evidence sequence is unusually useful for a computationally designed therapy:

```text
prediction
→ experimentally known human targets recovered
→ patient-specific T-cell responses measured
→ randomised clinical efficacy signal
```


## What improves next


Yes, as one expects, delivery, formulation, manufacturing, and regulatory execution will continue to improve through incremental engineering.

We are more interested in the **target-selection layer**. The vaccine can encode only a finite number of neoantigens, so the quality of the product depends directly on which candidates are selected.

Each candidate is supported by incomplete and uncertain evidence. Variant-call confidence, DNA and RNA VAF, transcript abundance, tumour purity, clonality, HLA presentation, selfness, and structural features all contribute. These measurements should be treated quantitatively rather than reduced too early to pass/fail filters.

Experimental screening can validate a nominated peptide. It cannot quantify candidates that were never nominated, poorly measured, or excluded because an upstream assay was incomplete. A probabilistic design model can retain those possibilities explicitly.

For each candidate, the useful quantity is therefore something like:

$$
P(\text{useful neoantigen}\mid
\text{DNA, RNA, HLA, structural and functional evidence})
$$

Missing evidence should remain uncertainty. Confirmed negative evidence should reduce probability. Strong positive evidence should increase it. New measurements should update the posterior.

This changes the design problem from:

```text
generate candidates
→ apply filters
→ rank survivors
```

to:

```text
define plausible candidates
→ quantify evidence for each candidate
→ retain uncertainty for unresolved candidates
→ update probabilities with new evidence
→ select the best-supported target set
```

That distinction matters when only 34 targets can enter the product. A candidate with a high score based on weak evidence is different from a candidate with the same score supported by deep sequencing, strong mutant RNA expression, robust HLA presentation, and independent functional evidence.

The next major opportunity is therefore to improve the **statistical design of the target set**. Better priors, better likelihood models, calibrated probabilities, and explicit treatment of missing evidence can make each inclusion and exclusion quantitatively defensible. The same approach can be used wherever patient-specific molecular data must be converted into a finite therapeutic design.

## References

Carlino MS, Khattak A, Meniawy T, et al. (2026). [Three-Year Update of a Randomized Phase IIb Study of the Individualized Neoantigen Therapy Intismeran Autogene (mRNA-4157, V940) Plus Pembrolizumab Versus Pembrolizumab in Resected Melanoma.](https://doi.org/10.1200/OA-25-00008) *JCO Oncology Advances*.

Gainor JF, et al. (2024). [T-cell Responses to Individualized Neoantigen Therapy mRNA-4157 (V940) Alone or in Combination with Pembrolizumab in the Phase 1 KEYNOTE-603 Study.](https://doi.org/10.1158/2159-8290.CD-24-0158) *Cancer Discovery*.

Merck & Co., Inc. and Moderna, Inc. (2026). [Merck and Moderna Announce Phase 3 INTerpath-001 Trial of Intismeran Autogene Plus KEYTRUDA Met Endpoints of Recurrence-Free Survival and Distant Metastasis-Free Survival in Patients With Completely Resected Stage IIB-IV Melanoma.](https://news.modernatx.com/merck-and-moderna-announce-phase-3-interpath-001-trial-of-intismeran-plus-keytruda-met-endpoints-of-rfs-and-dmfs-in-melanoma) 19 August 2026.

ModernaTX, Inc. (2021). [Personalized cancer vaccine epitope selection. US20210268086A1.](https://patents.google.com/patent/US20210268086A1/en)

Personalis. [Personalis and Moderna sign agreement to leverage the NeXT platform in personalised mRNA cancer vaccine clinical trials.](https://investors.personalis.com/news-releases/news-release-details/personalis-and-moderna-sign-new-agreement-leverage-next)

Weber JS, Carlino MS, Khattak A, et al. (2024). [Individualised neoantigen therapy mRNA-4157 (V940) plus pembrolizumab versus pembrolizumab monotherapy in resected melanoma (KEYNOTE-942): a randomised, phase 2b study.](https://doi.org/10.1016/S0140-6736(23)02268-7) *The Lancet*, 403, 632–644.

Zhong S, Breton B, Zheng W, et al. (2020). [Bioinformatics algorithm of mRNA-4157 identifies neoantigens with pre-existing TIL reactivities in colorectal tumors.](https://aacrjournals.org/cancerres/article/80/16_Supplement/6539/644669/Abstract-6539-Bioinformatics-algorithm-of-mRNA) *Cancer Research*, 80(16 Suppl), Abstract 6539.

[weber2024]: https://doi.org/10.1016/S0140-6736(23)02268-7
[carlino2026]: https://doi.org/10.1200/OA-25-00008
[zhong2020]: https://aacrjournals.org/cancerres/article/80/16_Supplement/6539/644669/Abstract-6539-Bioinformatics-algorithm-of-mRNA
[gainor2024]: https://doi.org/10.1158/2159-8290.CD-24-0158
[moderna-patent]: https://patents.google.com/patent/US20210268086A1/en
[personalis]: https://investors.personalis.com/news-releases/news-release-details/personalis-and-moderna-sign-new-agreement-leverage-next
[interpath2026]: https://news.modernatx.com/merck-and-moderna-announce-phase-3-interpath-001-trial-of-intismeran-plus-keytruda-met-endpoints-of-rfs-and-dmfs-in-melanoma
