---
title: AlphaGenome Atlas - what would validate it?
layout: page
math: mathjax
date: 2026-09-09
---

<p>{{ page.date | date: "%Y-%m-%d" }}</p>

A human genome contains many variants, but only a small fraction materially change observable biology. Protein-coding variants are comparatively tractable because we can often reason directly from a changed codon to an altered protein. Non-coding variants are currently harder. A single nucleotide may alter transcription-factor binding, chromatin accessibility, transcription, splicing or another regulatory process, and the effect may exist only in a particular cell type.

Google DeepMind's new **AlphaGenome Atlas** is an attempt to make those effects predictable and searchable at genome scale.

> Data sources: <https://deepmind.google.com/science/alphagenome/downloads>  
>
> **1. AVI SNV scores, 88.5 GB** is the main genome-wide lookup table. For each possible SNV it provides the raw AVI score and PHRED-scaled AVI score, so it is the file you would use to annotate a VCF with a single variant-prioritisation metric.
>
> **2. AlphaGenome SNV merged splicing scores, 20.6 GB** contains a specific underlying AlphaGenome prediction rather than the overall AVI score. It estimates how each SNV is predicted to affect splicing, so it is closer to a specialised splicing-effect resource such as SpliceAI.
>
> **3. AVI SNV feature importance scores, 283.9 GB** contains the SHAP attribution values explaining each AVI prediction. Instead of only knowing that a variant has a high AVI score, this dataset shows whether that score is driven by splicing, RNA expression, TF binding, conservation, AlphaMissense, protein-disruption features, and so on.

The simplest way to understand the resource is to start with what goes in and what comes out. We can pick a variant reproted in the manuscript; such as `chr9:128225994:G>A`. 
GeneBe shows what was previously predicted or known for this example variant <https://genebe.net/variant/hg38/9-128225994-G-A>.
For essentially every possible single-nucleotide substitution in the GRCh38 human genome, AlphaGenome Atlas already contains precomputed predictions for the alternative allele. The authors calculated effects for approximately **9 billion possible SNVs**, together with more than **100 million observed indels**.


The basic hierarchy is:

<div class="math-responsive" markdown="block">
$$
\text{variant}
\rightarrow
\text{predicted molecular effects}
\rightarrow
\text{AVI prioritisation score}
$$
</div>

It is useful to separate three names that are easy to blur together. **AlphaGenome** is the underlying sequence-to-function model: it takes DNA sequence and predicts molecular readouts. **AlphaGenome Atlas** is the genome-wide resource created by running and precomputing those predictions at enormous scale. **AVI**, the AlphaGenome Variant Impact score, is a separate model that compresses selected AlphaGenome predictions together with other annotations into a single variant-level prioritisation score.

## From one variant to thousands of predicted molecular effects

AlphaGenome does considerably more than assign a variant a generic "damaging" score. It predicts the molecular readout of the reference sequence and then of the sequence containing the alternative allele. The difference is converted into assay-specific effect scores.

For an individual variant, Atlas contains on average about **27,000 experiment-specific scalar predictions**, or roughly 15,000 excluding additional active-allele scores. These predictions span hundreds of biosamples and modalities including DNase-seq and ATAC-seq for chromatin accessibility, ChIP-seq for transcription-factor binding and histone modifications, CAGE and PRO-Cap for transcription initiation, RNA-seq, splicing, polyadenylation and chromatin-contact maps.

In practical terms, one of those predictions might mean that an allele is expected to reduce transcription in macrophages, alter splice-site usage in neurons or weaken transcription-factor binding in a particular cellular context. This is the interesting biological layer of AlphaGenome: the output can describe a predicted molecular mechanism rather than merely place a variant somewhere on a deleteriousness scale.

Google then compresses this very high-dimensional information to construct **AVI, the AlphaGenome Variant Impact score**. The AlphaGenome predictions are first reduced to **ten modality-level features** representing DNase-seq, ATAC-seq, transcription-factor ChIP-seq, histone-mark ChIP-seq, CAGE, PRO-Cap, RNA-seq, polyadenylation, splicing and chromatin-contact maps. These capture different layers of gene regulation, from chromatin accessibility and transcription-factor binding through transcription, RNA processing and three-dimensional genome organisation.

AVI then adds eight non-AlphaGenome features. Protein-coding effects are represented by **AlphaMissense**, DeepMind's missense-variant effect predictor, together with three protein-disruption annotations from the **Ensembl Variant Effect Predictor (VEP)**: stop-gained/frameshift, start-lost and stop-lost. Evolutionary constraint is represented by **PhastCons 470-way** conservation and the **Zoonomia Cactus 241-way** alignment, and two indicator variables record whether the variant is an insertion or deletion. AVI therefore uses **18 inputs per variant: 10 AlphaGenome regulatory features, 4 coding features, 2 conservation features and 2 indel indicators**.

Those inputs enter a neural-network classifier that produces a raw AVI score.


## Model architecture

AVI is not a conventional neural network that simply passes 18 features through several dense layers to produce one score. The authors use a **hybrid linear-hypernetwork architecture**. Of the 18 AVI inputs, 16 biological features are collected in the vector $$x$$: the ten AlphaGenome features, AlphaMissense, two conservation measures and three VEP loss-of-function annotations. The remaining two inputs form $$v$$, indicating whether the variant is an insertion or deletion; for an SNV, both indicators are zero.

A small two-layer neural network, called the **encoder**, first reads $$(x,v)$$ and produces a hidden representation,

$$
h = h_{\phi}(x,v).
$$

That hidden state is then used by the hypernetwork to generate a new set of 16 feature weights and a bias specifically for that variant. At the highest level, the AVI calculation is simply:


<div class="math-responsive" markdown="block">
$$
\text{AVI raw logit}
=
\text{variant-specific score}
+
\text{global score}
+
\text{indel adjustment}.
$$
</div>

More precisely, the model is:

<div class="math-responsive" markdown="block">
$$
\operatorname{logit}
=
\underbrace{
w_{\phi}(h_{\phi}(x,v))^{T}x
+
b_{\phi}(h_{\phi}(x,v))
}_{\text{variant-specific linear hypernetwork}}
+
\underbrace{
w_{\theta}^{T}x+b_{\theta}
}_{\text{global linear model}}
+
\underbrace{
o_{\mathrm{indel}}(v)
}_{\text{indel offset}}.
$$
</div>

The three terms have distinct roles. The **global linear model** learns one fixed set of coefficients $$w_\theta$$ that applies to every variant. The **linear hypernetwork** is more unusual: it examines the particular combination of evidence present for a variant, generates a new set of coefficients $$w_\phi$$, and then applies those coefficients back to the same 16 biological features. The final term learns a small baseline adjustment for insertions and deletions.

This means AVI can represent interactions without abandoning an interpretable linear scoring structure. For one allele, the combination of features might lead the hypernetwork to place relatively greater weight on a strong splicing prediction; for another, the generated weighting may instead emphasise conservation, AlphaMissense or another feature. The model therefore combines a **fixed genome-wide assessment** with a **variant-specific reweighting of the evidence**.

The encoder itself is small. It contains two fully connected layers with either **16 or 32 hidden units**, GELU activations, dropout of `0.4` and L2 activity regularisation of `10^{-5}`. Separate projection heads generate the 16 variant-specific weights and the bias. The generated weights are constrained to be non-negative using either an exponential or softplus activation, while the bias is controlled through a sigmoid gate.

The released AVI score is an **ensemble of six such models**. They were selected from a larger hyperparameter and resampling sweep and differ in encoder size, exponential versus softplus weight generation, and bias-gating configuration. For a variant, the six raw logits are averaged to produce the final raw AVI prediction.

## How AVI is trained and scored

The architecture tells us how AVI combines its features, but an equally important question is **what the model is actually trained to predict**. AVI was not trained directly on clinical pathogenic-versus-benign labels (this is a good development which we support constantly for [quinary infereance](http://switzerlandomics.ch/blog/2026-03-15-quinary-inference-the-fifth-layer-of-genomics/) and for [fine tuning foundation models](https://switzerlandomics.ch/blog/2026-08-15-fine-tuning/)). Instead, the authors use population frequency as a proxy for **negative selection**, the idea that variants which substantially reduce biological fitness tend, on average, to remain uncommon in the population.

Training variants come from **gnomAD v4.1** and are labelled using `FAF95_GRPMAX`, a conservative measure of the highest filtering allele frequency observed across ancestry groups. Variants with `FAF95_GRPMAX < 0.001` are labelled *proxy impactful*, while those with `0.001 ≤ FAF95_GRPMAX < 0.999` are labelled *proxy neutral*. 
This is a pragmatic but somewhat arbitrary binary threshold for what is fundamentally a continuous population-genetic signal, although such cut-offs are common in rare-variant studies and I have used similar thresholds in cohort SKAT-O analyses myself ([doi:10.1101/2025.06.12.25329504](https://doi.org/10.1101/2025.06.12.25329504)).

The classes are then balanced to reduce obvious mutational confounding. SNVs are matched within **96 strand-invariant trinucleotide substitution contexts**, meaning that variants are compared with others having the same type of base change in the same immediate three-base sequence context. Indels up to 10 bp are balanced by indel length. Thus the model cannot obtain an easy advantage simply because, for example, particular sequence contexts mutate more frequently than others.

Each member of the six-model ensemble is trained with a sigmoid and **binary cross-entropy loss using AdamW**, a standard objective and optimiser for binary classification. Importantly, the sigmoid probability is used only during optimisation. At inference, the model retains the **raw logit**, the unbounded model score before probability or rank scaling, and the six ensemble logits are averaged to obtain the raw AVI prediction.

That raw value is finally converted into a **PHRED-scaled genome-wide rank**. AVI 10 corresponds approximately to the top 10% of scored SNVs, AVI 20 to the top 1%, and AVI 30 to the top 0.1%. This distinction is important: **AVI 20 does not mean a 99% probability that a variant is pathogenic**. It means that the variant ranks within approximately the highest-scoring 1% of SNVs under AVI. AVI is therefore a relative variant-impact prioritisation score, not a probability of pathogenicity, penetrance or a directly measured molecular effect.


## How new is this idea?

There is an important historical context. Genomics researchers have been annotating variants with precomputed computational predictions for a long time. **VEP** assigns molecular consequences. **dbNSFP** has long made large collections of precomputed functional-prediction and conservation scores convenient to query, particularly for protein-altering and splice-related variants. CADD provides an integrated deleteriousness score, while specialised tools such as SpliceAI target particular mechanisms.

So the general workflow

`variant → lookup predictions → prioritise`

is not a new category of analysis.

The interesting advance is the biological information underneath the lookup. AlphaGenome predicts **allele-specific molecular behaviour directly from sequence across many regulatory assays and biological contexts**, then precomputes those predictions across essentially all possible SNVs.

Its value therefore depends on the accuracy and generalisability of those sequence-to-function predictions within an already mature variant-annotation ecosystem. With that complete, validation is central to judging the contribution.

## What counts as validation?

The paper presents several forms of validation, each addressing a different question:

*Does it rank known variants correctly?* $$\rightarrow$$ *Does it improve genetic discovery?* $$\rightarrow$$ *Does the variant produce the predicted molecular change?* 

ClinVar benchmarking addresses the first question. AVI performs strongly across several consequence classes, although ClinVar is not fully independent experimental ground truth. Variant-prediction methods often share information from gnomAD, conservation scores, existing annotations and common knowledge bases, while ClinVar classifications are themselves curated using overlapping evidence. Some circularity therefore remains possible even when direct train-test overlap has been removed.

The rare-variant association analyses address the second question: whether AlphaGenome and AVI enrich variant sets for biologically relevant signal and thereby improve genotype-phenotype discovery. That is valuable evidence of usefulness, but it does not identify the molecular effect of an individual allele.

The strongest sequence-to-function validation comes from measuring the quantity that AlphaGenome predicts. The paper does this in several places. Across ten held-out saturation genome-editing screens, AVI achieved the highest Spearman correlation with measured variant effects in eight. In the `DNM1` experiment, the authors mutagenised **265 nucleotides**, tested **796 variants across five cell lines**, and directly measured alternative splice-site usage. AlphaGenome's merged splicing score and AVI's splicing attribution both achieved an AUPRC of **0.943**, compared with 0.940 for SpliceAI and 0.939 for Pangolin. The authors also performed **ChIP-nexus** experiments for three transcription factors and observed binding footprints at predicted motif instances, including cell-type-specific effects.

These experiments show that AlphaGenome can reproduce measured biology in selected settings. The remaining question is how well that accuracy generalises across the enormous diversity of regulatory contexts represented in the Atlas.

For a resource of this scale, I would like to see a larger **prospective validation set of previously uncharacterised variants of uncertain significance (VUS)**. Variants could be selected before testing from several predicted mechanisms and introduced into relevant cellular, organoid or, where justified, in vivo systems. The key comparison should be quantitative and pre-specified: predicted versus observed change in transcription, splice usage, chromatin accessibility, TF binding or another molecular phenotype, ideally including **direction, effect size and biological context**.

That is a demanding standard for a typical computational biology laboratory. For a programme involving Google DeepMind, the Broad Institute and multiple experimental collaborators, the scale of the resource makes it a reasonable one to pursue. A catalogue covering roughly nine billion possible SNVs becomes far more convincing when previously uncertain variants can repeatedly move from **prediction to controlled perturbation to quantitative measurement**.



## Where SKAT, burden and ACAT enter

The paper also contains a large population-genetic demonstration using rare-variant association tests. These analyses are valuable, but they answer a different question.

Burden tests, SKAT and ACAT are established methods for asking whether **a collection of individually rare variants is collectively associated with a phenotype**. They differ in the genetic architectures they tolerate: a classical burden test works particularly well when variants have coherent effects, SKAT allows effects to vary in direction, and ACAT-based approaches remain useful when only a subset of variants in a set carries the signal.

The AlphaGenome innovation here is upstream of those statistics. If a regulatory region contains hundreds of rare variants but only a few actually affect the relevant biology, collapsing all of them together dilutes association signal. A better functional predictor should construct a cleaner set.

The authors tested this using circulating levels of **2,028 proteins in up to 54,189 UK Biobank participants**, considering rare variants with per-variant `MAF < 0.1%`. They filtered conventional non-coding variant sets using the top 1% of AlphaGenome or AVI predictions, and then applied established BURDEN, SKAT, ACAT-V and ACAT-O tests using REGENIE.

The `PLA2G7` example explains the idea particularly well. An unfiltered upstream region contained **526 rare variants** and produced a minimum `P = 1.10 × 10^-8` using ACAT-O, which did not pass the study-wide threshold. Filtering using the older JARVIS score reduced the set to **33 variants** and produced `P = 3.59 × 10^-11`, again with ACAT-O. AVI top-1% filtering reduced the set to only **four variants**, at which point an ordinary burden test produced `β = -1.73 SD` and `P = 1.74 × 10^-13`.

Nothing fundamental changed in the association statistics. The definition of the variant set changed.

Across the wider analysis, Atlas filtering produced a **22% increase in conditionally independent rare non-coding aggregate discoveries**. After additionally accounting for known low-frequency and rare single-variant pQTLs, **177 of 241 remaining significant aggregates, 73%, came from Atlas-derived masks**. The authors also observed a shift away from ACAT-V and towards burden and SKAT signals, which they interpret as evidence that Atlas-defined sets contain a greater density of genuinely functional variants.

I like this analysis. I have worked with rare-variant set tests for almost a decade, including implementing SKAT from first principles to reproduce the calculations underlying the work of Seunggeun Lee and colleagues (<https://github.com/leelabsg/SKAT>), developing new aggregate-analysis approaches ([doi:10.1101/2025.06.12.25329504](https://doi.org/10.1101/2025.06.12.25329504)), and building the open-source [Archipelago package](https://switzerlandomics.ch/technologies/archipelago/) for visualising results from SKAT, ACAT and related methods ([doi:10.1002/gepi.70025](https://doi.org/10.1002/gepi.70025)). I regard this family of statistics as extremely useful.

But that is also why I would be precise about what the result demonstrates.

**Association validates the usefulness of an annotation for genetic discovery; it does not directly validate the predicted molecular mechanism of an individual variant.**

If an AVI-filtered group produces a stronger SKAT or burden association, we have evidence that AVI enriched the set for variants carrying human genetic signal. We do not yet know from that result alone whether a particular nucleotide changes transcription by the predicted magnitude, in the predicted direction, through the predicted regulatory element, in the predicted cell type.

This distinction is especially relevant because AVI is not AlphaGenome alone. It combines AlphaGenome-derived features with AlphaMissense, protein-disruption annotations, conservation and a model trained using population depletion. A successful AVI association therefore cannot automatically be attributed to a particular AlphaGenome molecular prediction.

## What would convince me?

For a sequence-to-function model, the strongest tests resemble the DNM1 experiment, saturation genome editing or a deep mutational scan.

Take a regulatory element. Generate hundreds or thousands of alternative alleles. Measure the relevant molecular phenotype experimentally. Then compare the measurements directly with predictions made before seeing those results.

For a splicing prediction, measure splice usage. For a transcription prediction, measure transcription. For a TF-binding prediction, measure binding. And do this across genuinely held-out loci, regulatory mechanisms and cell types.

The difficult standard is not merely whether variants with high scores are *enriched* for functional effects. It is whether the model can reproduce their **direction, magnitude, tissue specificity and molecular mechanism**.

That is where I remain cautious about the scale of the evidence. AlphaGenome Atlas contains predictions for roughly nine billion possible SNVs, across an enormous diversity of genomic contexts. The paper contains impressive functional experiments showing that the approach can work very well in selected settings. Its population analyses additionally show that the annotations can improve rare-variant genetic discovery.

The remaining question is one of generalisation:

> **Can these allele-specific predictions reproduce measured molecular effects with similar accuracy across the enormous diversity of the human regulatory genome?**
>
> If large, independent perturbation datasets repeatedly answer yes, then AlphaGenome Atlas becomes considerably more interesting than another genome-wide variant-scoring resource. It would mean that we are beginning to move from **annotating variants** to **predicting their molecular behaviour from sequence**.
>
> That is the part worth testing hardest.
>

## Important details for use

**Reference-genome metadata:** Atlas states that scores use the GRCh38 (hg38) assembly with GENCODE v46 annotations, but the downloadable score table does not itself identify an exact reference FASTA, assembly accession, or checksum. This is important because the reference allele is implicit rather than included in the lookup key.

**Downloads:** Access currently requires a logged-in desktop browser, making large downloads relatively slow and more prone to interruption. The AVI release is also distributed as a ZIP archives that must then be unpacked, temporarily requiring storage for both the archive and extracted files:

- 82 GB AVI SNV score table: `.tsv.gz`
- 3.0 MB Tabix index: `.tsv.gz.tbi`

`gzcat alphagenome_variant_impact_score_snvs.tsv.gz | head`

<div class="table-responsive" markdown="block">
| #CHROM | POS   | REF  |  ALT  |  raw_score   |   PHRED |
|---|---|---|---|---|---|
| chr1  | 10001 | T    |  A    |  -0.03868    |   1.06466 |
| chr1  | 10001 | T    |  C    |  -0.032  | 1.3114 |
| chr1  | 10001 | T    |  G    |  -0.0372 | 1.11839 |
| chr1  | 10002 | A    |  C    |  -0.03583   |    1.16835 |
| chr1  | 10002 | A    |  G    |  -0.03301   |    1.27293 |
| chr1  | 10002 | A    |  T    |  -0.03668   |    1.13731 |
{: .table .table-hover}
</div>


`gzcat combined_alphagenome_splicing_snvs.tsv.gz | head`

<div class="table-responsive" markdown="block">
| #CHROM | POS   | REF  |  ALT  alphagenome_splicing |
|---|---|---|---|---|
| chr1 |  65409  | A  |  C  |  0.003052
| chr1 |  65409  | A  |  G  |  0.003479
| chr1 |  65409  | A  |  T  |  0.001343
| chr1 |  65410  | C  |  A  |  0.005615
| chr1 |  65410  | C  |  G  |  0.003113
| chr1 |  65410  | C  |  T  |  0.001892
{: .table .table-hover}
</div>

## References

* **Cheng J, Taylor KR, Nicolaisen L, et al. (2026).** AlphaGenome Atlas: *in silico* mutagenesis of the entire human genome improves prioritization and interpretation of non-coding variants. Google DeepMind. [alphagenome-atlas.pdf](https://storage.googleapis.com/deepmind-media/DeepMind.com/Blog/alphagenome-atlas-a-predictive-map-of-every-possible-dna-letter-change-in-the-human-genome/alphagenome-atlas.pdf)

* <https://deepmind.google.com/science/alphagenome/atlas>
