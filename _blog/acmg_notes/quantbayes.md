# **QuantBayes: Bayesian quantification of evidence sufficiency**

## **Working technical notes**

**Quantitative Evidence Sufficiency (Quant ES)** is a general statistical methodology for quantifying the availability of verifiable scientific evidence. **QuantBayes** is its software implementation, available as an R package and standalone compiled engines for macOS and Linux.

Although developed and evaluated in the context of clinical genetics and Mendelian disease, the mathematical method is independent of genetics, ACMG/AMP criteria and any particular evidence rule set. It can be applied to other scientific, technical or professional domains in which evidence can be represented through explicitly defined binary evaluations.

Its contribution to our broader methodology is to establish a quantitative understanding of the evidence available for an interpretation, independently of the interpretation itself.

## **1. The fundamental problem**

Scientific analysis systems typically produce conclusions, predictions, classifications or ranked candidates. However, the amount of verifiable evidence underlying these results is rarely quantified independently.

In clinical genetics, numerous variant effect predictors, annotation systems and prioritisation pipelines produce candidate variants. Their internal algorithms, data sources and interpretation procedures differ. Consequently, two institutions may nominate the same candidate variant while possessing substantially different amounts of evidence relevant to its assessment.

A classification alone cannot communicate these differences. Even a well-established pathogenic classification does not necessarily tell us whether inheritance, population frequency, phenotype consistency, technical measurement quality or other relevant evidence domains were assessed in the particular case.

QuantBayes addresses this evidential question without requiring modification of existing analysis pipelines. Its purpose is to provide an independent statistical layer through which the evidence underlying their outputs can be quantified, contextualised and exchanged.&#x20;

Pasted text (2)(20261125-105326).txt



## **2. Independence from the purpose of evidence**

The mathematical implementation of QuantBayes does not require knowledge of what the evidence represents.

It does not need to know whether the evaluated item is a genetic variant, a clinical hypothesis, an engineering component, a scientific experiment or an AI-generated assertion. Similarly, it does not need to know whether a particular observation supports or contradicts the conclusion being investigated.

These meanings are defined upstream through the evidence rule set.

Potential applications beyond Mendelian genetics include somatic variant assessment, scientific literature evaluation, experimental reproducibility, technical verification, regulatory evidence documentation and assessment of the evidence underlying AI-generated results.

These are potential applications of the general mathematical method, rather than claims of completed validation in every domain.

The universality of QuantBayes comes from the simplicity and independence of its statistical transform. The scientific suitability of each application remains conditional on the quality, relevance and semantics of the evidence supplied.

## **3. Separating the result from its evidential basis**

QuantBayes introduces a distinct inferential quantity: evidence sufficiency.

In clinical genetics, several questions must remain separate:

| Scientific quantity   | Question                                                             |
| --------------------- | -------------------------------------------------------------------- |
| Measurement           | Was the genetic configuration adequately observed?                   |
| Evidence availability | Which relevant evidence requirements are satisfied?                  |
| Evidence direction    | What conclusions do those observations support or contradict?        |
| Variant pathogenicity | Is the variant disease-causing in the defined disease context?       |
| Explanatory relevance | Does the genetic configuration explain this patient's phenotype?     |
| Clinical decision     | What action is justified given the current evidence and uncertainty? |

QuantBayes addresses the second question under an explicitly declared evidence model.

This is fundamental to Rule 1. A posterior estimate of evidence sufficiency cannot be substituted for a posterior probability of pathogenicity, causal attribution or diagnostic correctness.

A benign interpretation may be supported by extensive verifiable evidence. A pathogenic interpretation may be supported by a smaller number of highly informative observations. The quantity of qualifying evidence and its inferential contribution are separate scientific properties.

## **4. The relationship between SGA-QEM and QuantBayes**

The SGA-QEM standard establishes the semantics of the evidence representation. QuantBayes operates statistically on the resulting representation.

The upstream system defines its evidence rules, evaluates them and retains their raw outcomes and provenance. QEM then provides a deterministic binary projection:

| Raw QEM outcome                            | Matrix value |
| ------------------------------------------ | ------------ |
| `TRUE`: invalidation or weakening detected | 0            |
| `FALSE`: qualifying evidence established   | 1            |
| `NA`: evaluation unavailable               | 0            |

QuantBayes consumes the resulting binary matrix without needing to inspect the original evaluation procedure.

This separation makes the system compatible with proprietary analysis pipelines, manually curated evidence, automated rule engines, laboratory databases and other evidence-generation systems.

QEM is a suitable interoperable input standard for QuantBayes, but the statistical method does not technically require QEM. Any appropriately constructed binary evidence matrix can be analysed.

The responsibility for preserving the difference between confirmed invalidation and missing information remains upstream. QuantBayes cannot reconstruct this distinction after both outcomes have been projected to zero.

## **5. Mathematical foundations**

For an evidence matrix containing \\(n\\) evaluated items and \\(m\\) evidence rules:

\\[ X\in\\{0,1\\}^{n\times m} \\]

Each entry describes whether the corresponding evidence rule contributes qualifying evidence.

For item \\(i\\), the total number of qualifying evidence entries is:

\\[ k_i=\sum\_{j=1}^{m}X\_{ij} \\]

The observed proportion of satisfied rules is:

\\[ \hat{p}\_i=\frac{k_i}{m} \\]

This is a directly observable property of the evidence matrix. QuantBayes introduces a model-based parameter, \\(\theta_i\\), representing the underlying probability of satisfying an evidence rule for that item under the declared model.

The default model uses a binomial likelihood and a uniform Beta prior:

\\[ k_i\mid\theta_i\sim \operatorname{Binomial}(m,\theta_i) \\]

\\[ \theta_i\sim\operatorname{Beta}(1,1) \\]

By conjugacy, the posterior distribution is available in closed form:

\\[ \boxed{ \theta_i\mid k_i,m \sim \operatorname{Beta}(1+k_i,\\;1+m-k_i) } \\]

The posterior mean is:

\\[ E[\theta_i\mid X] = \frac{k_i+1}{m+2} \\]

The general R implementation also accommodates configurable prior parameters:

\\[ \theta_i\mid k_i,m \sim \operatorname{Beta}(a+k_i,\\;b+m-k_i) \\]

Posterior credible intervals are calculated using the quantiles of the corresponding Beta distribution.

The conjugate formulation avoids the need for numerical optimisation or Markov chain Monte Carlo for individual item estimates, making the method computationally efficient and reproducible.&#x20;

Pasted text (2)(20261125-105326).txt

Pasted text (3)(20261125-105518).txt



## **6. Why retain a Bayesian distribution rather than a simple count?**

A simple evidence count communicates how many requirements are satisfied. A Bayesian distribution additionally expresses uncertainty under the statistical model.

For example, satisfying a small number of evidence requirements and satisfying a much larger number at the same observed proportion produce different posterior distributions.

### **Illustrative QuantBayes model**

Default Beta(1,1) prior

Number of declared evidence rules

824100500

Observed proportion of qualifying evidence

**75.0%**

Qualifying rules

# **18/24**

Posterior mean

# **0.731**

Posterior SD

# **0.085**

\\[ \theta\mid X\sim\operatorname{Beta}(19,7) \\]

Relative posterior density. Increasing the number of rules generally narrows the posterior under the assumed binomial model.

With the default prior, the posterior mean does not become exactly zero when no qualifying evidence is available, nor exactly one when all rules are satisfied. The model retains uncertainty at both extremes.

This should not be interpreted as assigning biological support to absent evidence. For example, a non-zero posterior mean when \\(k=0\\) arises from the prior and statistical model, not from any qualifying observation.

Likewise, a narrow credible interval is only meaningful conditional on the assumptions of the model. Increasing the number of redundant or strongly correlated evidence rules does not necessarily increase the amount of independent scientific information.

## **7. Evidence sufficiency is conditional on the rule set**

The observed evidence proportion and its posterior distribution depend on the defined evidence universe.

For a meaningful analysis, the following quantities must be understood together:

| Quantity            | Meaning                                     |
| ------------------- | ------------------------------------------- |
| \\(k\\)             | Number of qualifying evidence entries       |
| \\(m\\)             | Total number of declared evidence rules     |
| \\(\hat p\\)        | Observed proportion of qualifying evidence  |
| \\(\theta\\)        | Model-based evidence-sufficiency parameter  |
| Credible interval   | Posterior uncertainty about \\(\theta\\)    |
| Rule-set identifier | Definition of the evidence being quantified |

A result of 0.8 under one evidence catalogue is not automatically equivalent to a result of 0.8 under another catalogue.

For example, a rule set evaluating technical sequencing quality measures a different evidential domain from a rule set evaluating ACMG/AMP pathogenic and benign evidence. Both can be analysed using QuantBayes, but their scientific interpretation differs.

This is why the evidence rule-set identifier and version must accompany the numerical result. QuantBayes provides a common statistical scale; scientific comparability additionally requires compatible evidence semantics.

### **Evidence applicability**

Not every evidence rule is necessarily applicable to every evaluated item. A recessive genotype may require evidence that is irrelevant to a dominant genotype, while some ACMG criteria cannot reasonably be satisfied simultaneously.

The current QuantBayes implementation uses a fixed matrix denominator and converts `NA` to zero. It does not dynamically remove inapplicable rules for individual items.

Consequently, evidence sufficiency must be interpreted relative to the chosen denominator. A low estimate does not necessarily indicate incomplete professional work, particularly where the available rule set contains requirements that are irrelevant to the specific case.

Rule applicability is an upstream scientific modelling responsibility.

### **Evidence dependencies**

The current model treats qualifying rule outcomes through a binomial likelihood with a common item-specific probability. This is a deliberately simple statistical abstraction.

Although QEM permits correlated evidence rules, the basic QuantBayes model does not explicitly adjust for dependence, differential rule weighting or heterogeneous rule-specific probabilities.

The binomial formulation ordinarily entails conditionally independent Bernoulli trials with a common success probability. Therefore, credible intervals may be too narrow if strongly dependent rules are treated as independent contributions.

This distinction is important: QuantBayes avoids prescribing pathogenicity weights, but its statistical model is not assumption-free.

The appropriate response is to retain the simplicity of the basic method while remaining explicit about when more advanced evidence models may be required.

## **8. Genome-wide and population-level context**

An important feature of QuantBayes is that it quantifies evidence sufficiency for every evaluated item, rather than exclusively reporting the candidates selected by an upstream pipeline.

In clinical genetics, this provides a reference distribution against which nominated candidate variants can be assessed.

A candidate with an apparently substantial amount of evidence may be relatively unexceptional if many alternative variants possess comparable evidence profiles. Conversely, a particular candidate may have considerably more qualifying evidence than the majority of evaluated alternatives.

The global distribution therefore provides context that is unavailable from isolated candidate scores.

The method can produce individual posterior means, credible intervals, observed proportions and relative percentiles, together with summaries across the evaluated population.

### **Two distinct global distributions**

The manuscript describes an empirical mixture of the individual posterior distributions:

\\[ f\_{\mathrm{global}}(\theta) = \frac{1}{n} \sum\_{i=1}^{n} f(\theta\mid k_i,m) \\]

This distribution incorporates the within-item posterior uncertainty.

The supplied R implementation additionally summarises the empirical distribution of the individual posterior means. These are distinct statistical representations.

Similarly, the R implementation computes percentiles using the average rank of each item's posterior mean:

\\[ \mathrm{percentile}\_i = 100\frac{\operatorname{rank}(\bar{\theta}\_i)}{n} \\]

This is an empirical rank percentile rather than a posterior probability that one item exceeds another.

Both representations can provide useful context, but they should not be described interchangeably. The distinction matters when interpreting global intervals, percentile estimates or comparisons between software implementations.&#x20;

Pasted text (2)(20261125-105326).txt

Pasted text (3)(20261125-105518).txt



## **9. Clinical genetics example**

The manuscript illustrates QuantBayes using a hypothetical autosomal recessive cystic fibrosis case with a nominated CFTR variant:

`NM_000492.4:c.1521_1523delCTT (p.Phe508del)`

The associated evidence matrix contains 400 evaluated variants and 24 evidence rules.

Illustrative clinical evidence report

## **CFTR p.Phe508del**

Autosomal recessive cystic fibrosis

Posterior evidence sufficiency

# **0.731**

Relative percentile

# **99.875**

Qualifying evidence rules

# **18 / 24**

Evaluated variants

# **400**

95% posterior credible interval

Evidence sufficiency under the declared 24-rule model. This is not a pathogenicity probability.

The result establishes that 18 of the 24 evidence requirements contribute qualifying evidence and places the candidate within the evidence distribution of the evaluated variants.

It does not establish the probability that the variant causes cystic fibrosis, whether the patient's complete genotype satisfies recessive inheritance, or whether the nominated variant explains the patient's phenotype.

Those questions remain the responsibility of the corresponding genetic interpretation.

This example is particularly useful for the final article because it demonstrates how a conventional genetic result can be accompanied by an independently defined and quantitatively interpretable description of its evidential basis.&#x20;

Pasted text (2)(20261125-105326).txt



## **10. Scientific evaluation using whole-genome sequencing**

The QuantBayes methodology was evaluated using publicly available whole-genome sequencing data from the Genome in a Bottle (GIAB) family trio.

The evaluation used samples HG005, HG006 and HG007, with GRCh38 v4.2.1 reference data and BioProject PRJNA200694.

The analytical workflow included quality control, site-level and sample-level sequencing filters, family genotype information, Exomiser prioritisation and externally defined qualifying variant rules.

The resulting raw evidence flags were transformed into a binary evidence matrix according to the registered interpretation rules. QuantBayes then estimated evidence sufficiency for the evaluated variants.

Initial WGS call set

# **5,188,814**

Genomic variants

**Quality control and Exomiser**

Existing genomic analysis pipeline

**Registered evidence rules**

Raw evaluations and QEM conversion

# **123**

Variants evaluated with QuantBayes

The candidate with the highest reported evidence sufficiency was an RYR2 frameshift variant:

`ENST00000366574.7:c.6493dup:p.(Leu2165Profs*44)`

The assessment used an autosomal dominant inheritance model.

| Result                         | Value          |
| ------------------------------ | -------------- |
| Posterior evidence sufficiency | 0.808          |
| 95% credible interval          | 0.639 to 0.932 |
| Percentile                     | 100            |

The evaluation demonstrates how QuantBayes can be applied downstream of a realistic genomic analysis workflow using real sequencing data and registered evidence rules.

It also demonstrates the distinction between upstream prioritisation and evidence sufficiency. QuantBayes provides an additional quantitative description of candidate variants without replacing the algorithms responsible for discovering or prioritising them.

The GIAB evaluation constitutes a methodological demonstration in a clinical genetics analysis setting. It should not be presented as establishing clinical diagnostic sensitivity, specificity or patient outcome improvement. The highest-scoring variant is not thereby established as a causal diagnosis.&#x20;

Pasted text (2)(20261125-105326).txt



## **11. Performance and computational scalability**

The simplicity of the conjugate statistical model allows QuantBayes to operate at scales ranging from individual evidence reviews to millions of evaluated items.

The primary per-item computations involve summing qualifying evidence entries and evaluating closed-form posterior parameters and Beta distribution quantiles.

The manuscript reports benchmarking of matrices containing up to ten million variants and five hundred evidence sources, with processing completed in under ten minutes on a standard laptop.&#x20;

Pasted text (2)(20261125-105326).txt



This computational efficiency makes evidence quantification practical across diagnostic-sized inputs, research cohorts, national genomic programmes, automated laboratory workflows and HPC environments.

An important architectural benefit is that the quantification step does not require repeated access to the original genomic sequencing data or the upstream analysis algorithms. Once an appropriate evidence matrix has been generated, the statistical analysis can be performed independently.

## **12. Software implementations**

QuantBayes is distributed through several implementations of the same core statistical methodology.

| Implementation          | Version supplied | Purpose                                                      |
| ----------------------- | ---------------- | ------------------------------------------------------------ |
| Standalone macOS engine | 1.0.0            | Local and automated evidence analysis                        |
| Standalone Linux engine | 1.0.0            | Server, HPC and pipeline integration                         |
| Native R package        | 0.1.0            | Statistical analysis, visualisation and research integration |

The compiled C engines are designed to operate directly from an extracted directory without requiring system installation or administrator privileges.

The R package provides native integration with statistical and bioinformatics workflows. All implementations are distributed under the MIT licence.

The supplied manuscript describes identical core Beta posterior calculations across the implementations, up to floating-point precision. The compiled engine source was not supplied in this conversation, so exact equivalence of all secondary outputs, including global summaries and percentile conventions, has not been independently established here.

### **R package**

The `quantbayes` package provides a small set of core functions for evidence quantification and visualisation.

| Function                       | Purpose                                                  |
| ------------------------------ | -------------------------------------------------------- |
| `quant_es_core()`              | Compute posterior evidence-sufficiency statistics        |
| `quant_es_from_binary_table()` | Import and analyse a delimited evidence matrix           |
| `quant_es_plots()`             | Generate statistical and evidence-profile visualisations |
| `core_test_data`               | Bundled demonstration dataset                            |

The core function accepts a numeric evidence matrix, configurable Beta prior parameters and a configurable credible interval level.

The output includes a per-item table containing the item identifier, number of qualifying rules, total number of rules, posterior mean, credible interval and empirical percentile.

A separate global summary contains the number of evaluated items, number of evidence rules, mean and median posterior estimates, and quantiles of the distribution of posterior means.

### **Visualisation**

The R package provides five main visualisation types:

- Global distribution of individual posterior evidence-sufficiency means.
- Individual candidate posterior distributions overlaid on the global distribution.
- Binary evidence matrices showing which requirements are satisfied.
- Observed proportions of qualifying evidence.
- Individual posterior means and credible intervals.

The plots are returned as standard `ggplot2` objects and can be adapted for scientific publications, reports and other analytical applications.

The evidence matrix visualisation is particularly important because it preserves the visibility of individual evidence requirements alongside their aggregated statistical description.

## **13. Evidence interoperability and institutional independence**

A central motivation behind QuantBayes is the logistical difficulty of exchanging and reusing scientific evidence across institutions.

Genomic analysis outputs are often closely coupled to the particular pipelines that generated them. A receiving laboratory may not know which evidence checks were performed, which reference databases were used, or which assumptions influenced the interpretation.

Consequently, analyses may need to be repeated before their results can be responsibly reused.

QuantBayes introduces an architecture in which the evidential basis of a result can be represented separately from the algorithm that nominated it.

An institution can evaluate an agreed set of evidence requirements, preserve the relevant observations and provenance, and produce a reproducible statistical summary without necessarily disclosing its proprietary prioritisation algorithm.

This can support evidence exchange between laboratories, hospitals, research programmes and commercial providers.

However, a numerical summary alone does not establish independent verifiability. The receiving institution must also have access to sufficient evidence documentation, rule definitions, context and provenance to evaluate the meaning and reliability of the result.

The shared evidence architecture enables selective disclosure of the information required for verification, while allowing unrelated proprietary implementation details to remain protected.

## **14. Data governance and public involvement**

The manuscript identifies a broader patient and public involvement objective.

Patients, families and secondary care institutions benefit from knowing which scientific and technical assessments were performed, what the results mean and which limitations remain.

A structured evidence record provides a basis for making these questions explicit.

Community-maintained evidence rule sets could allow clinicians, laboratory scientists, researchers and patient representatives to contribute to defining the evidence requirements that are important for particular clinical investigations.

Such participation can help establish shared expectations concerning evidence collection, documentation and reporting.

The manuscript also describes an anonymous A/B survey comparing a conventional hypothetical genetic report with a report containing explicit evidence-sufficiency information.

The questions evaluate understanding of test scope, the distinction between a result and its evidence, trust in the underlying assessments and willingness to share the report with another institution.

The supplied manuscript describes encouraging preliminary observations, but survey collection remains ongoing and the anticipated sample size is limited. These findings should therefore be presented as formative usability evidence rather than definitive statistical evidence of improved clinical understanding.&#x20;

Pasted text (2)(20261125-105326).txt



## **15. Integration into professional ACMG/AMP interpretation**

QuantBayes does not introduce an alternative to the ACMG/AMP criteria. It provides an additional analytical dimension that the ACMG/AMP classification alone does not express.

The ACMG Validator implementation produces structured documentary assessments for all 28 criteria, retaining review disposition, evidence status, applied strength, caveats, source references and verification.

The optional QEM integration projects explicitly evaluated qualifying evidence into a binary matrix, which QuantBayes can then analyse.

This produces two fundamentally different outputs from related evidence records:

**Structured scientific evidence**

Observations, context, assessment and provenance

**ACMG/AMP**

Evidence direction, strength and combination

Variant classification

**QEM + QuantBayes**

Qualifying evidence availability

Evidence sufficiency

Complementary quantities derived from the documented evidence, neither replacing the other.

For example, strong functional evidence may have a substantial influence on an ACMG classification while contributing one qualifying entry to a QEM representation.

QuantBayes does not attempt to reproduce the ACMG evidence weighting. Its contribution is to quantify the amount of qualifying evidence according to the declared evidence catalogue.

Similarly, an accepted ACMG criterion does not automatically become qualifying QEM evidence. The additional QEM evaluation and documentary requirements remain necessary within the current implementation.

## **16. Relationship to advanced Bayesian causal inference**

The twelve-state genotype–phenotype formalism establishes the distinction between underlying biological truth and the information through which we attempt to understand it.

QuantBayes occupies a particular position within this broader scientific architecture.

Its evidence-sufficiency parameter,

\\[ P(\theta_i\mid X) \\]

is fundamentally distinct from the posterior probability of explanatory truth,

\\[ P(T_h=1\mid E,D,\mathcal R^{(v)}) \\]

where \\(E\\) represents the relevant scientific evidence and \\(\mathcal R^{(v)}\\) represents the versioned reference model.

A posterior estimate of evidence sufficiency cannot directly substitute for the likelihood of evidence under a causal hypothesis, a Bayes factor, a probability of pathogenicity or a probability of diagnostic correctness.

Nor should the QuantBayes estimate simply be multiplied by a pathogenicity probability to create an adjusted confidence score without a formally justified model.

The appropriate role of evidence sufficiency is to provide an independently defined quantitative description of the evidential environment in which causal inference is undertaken.

A subsequent causal model may use the underlying evidence, measurement uncertainty, alternative hypotheses and relevant prior assumptions to estimate explanatory truth.

QuantBayes therefore provides a foundational component of advanced Bayesian interpretation while remaining statistically and semantically independent of the particular causal problem.

## **17. Professional and ethical significance**

The broader objective of QuantBayes is to make the evidential basis of scientific conclusions visible and quantifiable.

In clinical genetics, this is important because a diagnostic report can communicate a classification without fully communicating the scope of the investigation that produced it.

A professionally documented interpretation should make it possible to understand which observations were available, which requirements were satisfied, which assessments remain unresolved and which assumptions condition the conclusion.

QuantBayes allows one part of this information to be represented through an interpretable posterior distribution.

The ethical contribution comes from communicating the limitations of available knowledge alongside the conclusions drawn from it. The numerical result must always remain connected to the original evidence documentation and must not create an impression of certainty beyond that supported by the evidence model.

## **18. Open scientific infrastructure**

QuantBayes is distributed under the MIT licence, permitting inspection, reproduction and integration into academic, research, clinical and commercial workflows.

The decision to make the implementation openly available reflects its intended role as foundational scientific infrastructure.

If institutions are to exchange evidence using a common statistical representation, access to the underlying computation should not itself become a barrier to interoperability.

The standalone engines, R package, registered evidence specifications, scientific manuscript and release archives collectively provide the infrastructure through which the method can be independently implemented, inspected and reproduced.

## **19. Technical nuances identified during source review**

Several details in the supplied manuscript and software deserve attention before preparing the final article. These are technical observations from reviewing the supplied sources, rather than changes to the methodology.

| Detail                    | Observation                                                                                                                                                                          |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Statistical dependence    | The manuscript suggests that the binomial model introduces no assumptions about dependence. The model does entail assumptions that require explicit acknowledgement.                 |
| Global distribution       | The manuscript describes a posterior mixture, whereas the supplied R core calculates summaries of individual posterior means.                                                        |
| Global credible intervals | Quantiles across posterior means describe between-item variation, not a credible interval for the global mean.                                                                       |
| Percentiles               | The R code uses empirical average ranks of posterior means, rather than posterior comparison probabilities.                                                                          |
| Custom priors             | `quant_es_core()` supports custom Beta priors, but posterior density plots currently use hard-coded Beta(1,1) prior parameters.                                                      |
| Plot reproducibility      | Individual density overlays use random Beta draws. The numerical core is deterministic, while these plots require a fixed random seed for reproducibility.                           |
| File-based input          | The identifier column must be explicitly specified using `variant_col`. Non-numeric strings can otherwise be coerced to `NA` and subsequently counted as zero.                       |
| Combined plot             | The README references `plots$p_combined`, but the supplied plotting function returns five individual plots without this combined object.                                             |
| Raw evidence polarity     | A supplementary manuscript figure caption reverses the intended raw `TRUE`/`FALSE` semantics. The normative SGA-QEM definition should take precedence.                               |
| Tumour/normal evaluation  | Both manuscript sections are marked as complete and awaiting integration. No results are supplied for assessment here.                                                               |
| Clinical evaluation       | The GIAB analysis demonstrates methodological applicability. The ongoing reporting survey and supplied validation do not establish clinical accreditation or diagnostic performance. |

These details reinforce Rule 1. Even when the conceptual architecture is designed carefully, its implementation and scientific description must be examined to ensure that simplified representations have not silently acquired meanings beyond their intended purpose.

## **20. Source register**

| Resource                               | Reference                                                                                                                     |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| QuantBayes technology page             | [Switzerland Omics](https://switzerlandomics.ch/technologies/quantbayes/?utm_source=chatgpt.com)                              |
| Scientific manuscript                  | [DOI: 10.64898/2025.12.02.25341503](https://doi.org/10.64898/2025.12.02.25341503?utm_source=chatgpt.com)                      |
| Manuscript landing page                | [medRxiv](https://www.medrxiv.org/content/early/2025/12/13/2025.12.02.25341503?utm_source=chatgpt.com)                        |
| R package                              | [CRAN](https://cran.r-project.org/package=quantbayes?utm_source=chatgpt.com)                                                  |
| R package DOI                          | [10.32614/CRAN.package.quantbayes](https://doi.org/10.32614/CRAN.package.quantbayes?utm_source=chatgpt.com)                   |
| R package source                       | [GitHub](https://github.com/DylanLawless/src-quantbayes_package?utm_source=chatgpt.com)                                       |
| R package vignette                     | [QuantBayes walkthrough](https://cran.r-project.org/web/packages/quantbayes/vignettes/quantbayes.html?utm_source=chatgpt.com) |
| R reference manual                     | [QuantBayes reference](https://cran.r-project.org/web/packages/quantbayes/refman/quantbayes.html?utm_source=chatgpt.com)      |
| Compiled engines and software releases | [Zenodo, 10.5281/zenodo.17919369](https://doi.org/10.5281/zenodo.17919369?utm_source=chatgpt.com)                             |
| Evidence representation standard       | [SGA-QEM-1.0](https://www.swissgenomicsassociation.ch/pages/sga_qem/?utm_source=chatgpt.com)                                  |
| QEM standard DOI                       | [10.5281/zenodo.17936587](https://doi.org/10.5281/zenodo.17936587?utm_source=chatgpt.com)                                     |
| Qualifying variant methodology         | [Bioinformatics, btaf676](https://doi.org/10.1093/bioinformatics/btaf676?utm_source=chatgpt.com)                              |

**Manuscript citation**

Quant Group et al. (2025). *A Bayesian model for quantifying genomic variant evidence sufficiency in Mendelian disease*. medRxiv. [https://doi.org/10.64898/2025.12.02.25341503](https://doi.org/10.64898/2025.12.02.25341503?utm_source=chatgpt.com).

**Software citation**

Lawless, D. (2025). *Bayesian Quantification of Evidence Sufficiency quantbayes Implementation*. Zenodo. [https://doi.org/10.5281/zenodo.17919369](https://doi.org/10.5281/zenodo.17919369?utm_source=chatgpt.com).

**R package citation**

Lawless, D. (2025). *quantbayes: Bayesian Quantification of Evidence Sufficiency*. R package version 0.1.0. Comprehensive R Archive Network. [https://doi.org/10.32614/CRAN.package.quantbayes](https://doi.org/10.32614/CRAN.package.quantbayes?utm_source=chatgpt.com).

The citation identifiers follow the newly supplied QuantBayes material, which uses the `10.64898` manuscript DOI prefix rather than the earlier `10.1101` prefix. The supplied landing page describes the CRAN release, whereas the development README still describes a pending submission. These publication details have not been independently verified.

## **Central contribution to retain for the final article**

QuantBayes provides a general Bayesian method for quantifying the sufficiency of available scientific evidence independently of the purpose for which that evidence is collected. Developed and evaluated in clinical genetics, it operates on binary evidence matrices derived from explicitly defined rule sets, producing an interpretable posterior estimate with uncertainty and comparative context for every evaluated item. Its independence from variant discovery, pathogenicity assessment and proprietary analysis algorithms enables evidence quantification to become a separate, reproducible component of scientific interpretation. Combined with SGA-QEM and the structured documentary evidence architecture of ACMG Validator, it establishes the foundations for communicating both a scientific conclusion and the extent of the evidence upon which that conclusion depends, without conflating either with underlying biological truth.
