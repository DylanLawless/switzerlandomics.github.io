# **Professional implementation of ACMG/AMP criteria**

## **Working technical notes**

These notes consolidate the three supplied implementations of ACMG Validator, together with their underlying evidence semantics, SGA-QEM integration, data architecture and QuantBayes analysis. They are intended as source material for the final article rather than its final structure.

Throughout, we retain Rule 1: scientifically meaningful distinctions must survive every stage of documentation, processing, quantification, interpretation and reporting.

## **1. The fundamental problem with evidence representation**

The ACMG/AMP framework provides a structured approach to interpreting genetic variants through different types and strengths of pathogenic and benign evidence. Its value depends on the appropriate evaluation of each criterion within the relevant biological and clinical context. The framework accommodates disease mechanisms, inheritance, population frequencies, functional observations, segregation and other forms of evidence, with further refinements provided by ClinGen and gene-specific expert panels.

However, implementations that record only satisfied criteria lose much of the information generated during a scientific assessment. An empty entry in an ACMG checklist is ambiguous. Evidence may have been sought and found absent, never investigated, unavailable, contradictory, of insufficient quality or irrelevant to the particular variant. These circumstances have different scientific meanings and require different actions.

For example, the absence of an accepted functional evidence criterion might indicate that no experiment was conducted, that an experiment was inappropriate, or that a well-designed experiment produced evidence supporting an alternative interpretation. These cannot be treated as equivalent observations.

The objective of ACMG Validator is to make these distinctions explicit, machine-readable and subject to validation. The architecture should preserve scientific nuance even when evidence is exchanged between people, software applications and institutions.

## **2. Separating evidence from interpretation**

A central feature of ACMG Validator is the separation of the reviewer's disposition of a criterion from the status of its underlying evidence. These are represented by two distinct fields, `status` and `evidence_status`.

| Dimension          | Example                  | Meaning                                                   |
| ------------------ | ------------------------ | --------------------------------------------------------- |
| Review disposition | `accepted`               | The reviewer accepts the criterion.                       |
| Review disposition | `rejected`               | The reviewer decides not to use the criterion.            |
| Review disposition | `needs_second_review`    | Further assessment is required.                           |
| Evidence status    | `present`                | Supporting evidence is reported.                          |
| Evidence status    | `absent_after_review`    | Evidence was sought and its absence recorded.             |
| Evidence status    | `conflicting`            | Available evidence is conflicting.                        |
| Evidence status    | `not_available`          | Required information is unavailable.                      |
| Evidence status    | `insufficient_quality`   | Available information does not meet the required quality. |
| Evidence status    | `not_assessed`           | The evidence has not been assessed.                       |
| Evidence status    | `not_applicable`         | The evidence type does not apply in this context.         |
| Evidence status    | `requires_second_review` | Further evaluation of the evidence is required.           |

A rejected criterion does not necessarily mean that evidence was absent. Similarly, an accepted criterion does not establish that the underlying biological claim is true. A missing assessment is not a negative result.

The reviewer also records the applied strength, justification, source references, verification attestations and criterion-specific caveats. This separates the underlying observation, its documented interpretation and its contribution to the final classification.&#x20;

Pasted text(20261125-104239).txt



This is a direct practical implementation of Rule 1. The distinctions are embedded within the data model rather than left to the discretion or memory of individual users.

## **3. SGA-QEM as a foundational evidence standard**

**Qualifying Evidence Matrix (SGA-QEM-1.0)**

Source: [Swiss Genomics Association, SGA-QEM standard](https://www.swissgenomicsassociation.ch/pages/sga_qem/?utm_source=chatgpt.com)

The Qualifying Evidence Matrix provides a general-purpose convention for representing qualifying evidence under an explicitly defined set of rules. It is independent of the ACMG/AMP framework and can be applied to other scientific evidence systems.

A fundamental aspect of QEM is the orientation of the evidence questions. Each question is formulated negatively, asking whether a condition exists that invalidates, contradicts or weakens the proposed evidence. This encourages an assessment of what could undermine a scientific claim rather than exclusively collecting observations that support it.

| Raw outcome | QEM value | Meaning                                                                                            |
| ----------- | --------- | -------------------------------------------------------------------------------------------------- |
| `TRUE`      | 0         | An invalidating or weakening condition was confirmed.                                              |
| `FALSE`     | 1         | The invalidating condition was evaluated and not found, with qualifying evidence verified.         |
| `NA`        | 0         | The evaluation was inconclusive, unavailable, unassessed, inapplicable or insufficiently verified. |

The distinction between `TRUE` and `NA` is fundamental. Although both produce zero in the binary projection, they represent different states of knowledge. The original outcomes must therefore accompany the binary representation.

A lack of reported problems cannot be interpreted as evidence that no problems exist. A qualifying result requires an explicit evaluation and supporting evidence.

The QEM representation also remains independent of the direction of evidence. Qualifying evidence supporting benignity and qualifying evidence supporting pathogenicity can both contribute a value of one. The matrix represents evidence availability under the declared rules, not pathogenicity.

## **4. Applying QEM to ACMG/AMP evidence**

The ACMG Validator CLI and R package implement an experimental catalogue of 28 negatively oriented documentary evidence rules corresponding to the 28 familiar ACMG/AMP criteria.

Three separate version identifiers establish the semantics of the implementation:

| Component                        | Identifier                                       |
| -------------------------------- | ------------------------------------------------ |
| General evidence standard        | `SGA-QEM-1.0`                                    |
| ACMG criterion catalogue         | `switzerlandomics.acmg-validator.criteria.v1`    |
| ACMG-specific QEM rule catalogue | `switzerlandomics.acmg-evidence-availability.v3` |

The standard defines the general convention. The ACMG-specific catalogue defines the particular questions used to evaluate qualifying documentary evidence.

An accepted ACMG criterion does not automatically establish a qualifying QEM result. The negative question must be evaluated explicitly, with its own source reference and verification attestation. Conclusive QEM outcomes require appropriate review documentation, a named reviewer and sign-off.

The implementation maintains dedicated QEM fields:

| Field             | Purpose                                               |
| ----------------- | ----------------------------------------------------- |
| `qem_rule_id`     | Stable identifier for the negative evidence question. |
| `qem_raw_outcome` | Explicit `TRUE`, `FALSE` or `NA` evaluation.          |
| `qem_source_ref`  | Source documenting the QEM evaluation.                |
| `qem_verified`    | Reviewer attestation concerning that evaluation.      |

These remain separate from the original ACMG evidence references and verification fields.

For example, accepting PVS1 requires consideration of whether loss of function is an established disease mechanism and whether the particular variant is expected to produce that consequence. The QEM evaluation explicitly asks whether the qualifying evidence is undermined, missing or insufficiently substantiated.

Similarly, verified evidence of non-segregation supporting BS4 can provide qualifying evidence in the QEM matrix. Its contribution is a measure of evidence availability, despite its benign direction under ACMG/AMP.

Deprecated assertion-only criteria PP5 and BP6 cannot produce a qualifying QEM value of one under the current experimental rule set. A third-party classification without independently available primary evidence cannot substitute for that evidence.

The implementation deliberately does not infer verification from an accepted criterion, reviewer sign-off or the absence of a recorded objection.&#x20;

Pasted text (3)(20261125-104405).txt



## **5. ACMG Validator: browser implementation**

**ACMG Validator v1.1.0**

Source: [Switzerland Omics ACMG Validator](https://switzerlandomics.ch/technologies/acmg-validator/?utm_source=chatgpt.com)

The browser application provides an interactive environment for professional manual review of genetic evidence. Its guiding principle is expressed in the interface:

*Review the evidence, not just the verdict.*

The application provides a structured review of all 28 ACMG/AMP criteria, including their default strengths, descriptions, caveats and evidence requirements. The workflow encourages the reviewer to document the evidence finding before deciding whether the criterion should be applied.

The interface distinguishes applied criteria, reviewed criteria that make no contribution, incomplete assessments, conflicts and unassessed criteria. Review completeness is displayed separately from the calculated classification score.

### **Evidence strength and caveats**

The application accommodates justified modulation of ACMG criterion strength. For example, PVS1 can be adjusted according to the ClinGen decision tree, and PM2 can be applied at supporting strength.

The applied strength and its justification are retained rather than reducing the interpretation to the presence or absence of a criterion code. Changes can be represented using ClinGen-style notation, such as `PM2_Supporting`.

Criterion-specific caveats document the conditions that must be considered before applying evidence. Confirmation of a caveat is a recorded professional attestation; it does not independently establish the scientific correctness of that confirmation.

### **Point-based consistency**

The application calculates a nominal point-based category using the Tavtigian point system.

| Evidence strength      | Points |
| ---------------------- | ------ |
| Supporting             | ±1     |
| Moderate               | ±2     |
| Strong                 | ±4     |
| Very strong pathogenic | +8     |
| Stand-alone benign     | −8     |

The calculated category is compared with the classification entered by the reviewer. A disagreement identifies a matter requiring investigation rather than automatically replacing the professional interpretation.

The point-based classification is distinct from review completeness, documentary verification and biological truth.

### **Variant and case context**

The application records the gene, transcript, HGVS description, genomic coordinates, reference assembly, alleles, variant type, zygosity, disease, inheritance model and phenotype.

This contextual information is necessary because a variant interpretation is conditional on the biological and clinical question being investigated. A variant's sequence identity alone does not completely define its relevance to a disease.

The browser also accommodates structured sample provenance and sequencing metadata, including SPHN WGS metadata. This provides a means of retaining information about the sample, sequencing assay, instrument and analysis files associated with the evidence.

### **Genotype-level interpretation**

The browser implementation explicitly separates variant-level classification from genotype-level interpretation.

A case may contain several variants, each with its own ACMG evidence review. The genotype-level assessment documents their combined relevance, inheritance, phase, phase evidence, phenotype fit and residual uncertainty.

For example, two pathogenic CFTR variants do not automatically establish a recessive molecular diagnosis without considering whether they occur in trans, whether the relevant phenotype is present and what uncertainty remains.

ACMG point scores are not summed across variants to produce a genotype-level conclusion.

This is an important connection to the twelve-state genotype–phenotype formalism: variant pathogenicity and explanatory relevance to an individual phenotype are different inferential questions.&#x20;

Pasted text (2)(20261125-104318).txt



### **External evidence and reporting**

The browser offers optional external evidence lookups and gene-structure visualisation. Imported evidence suggestions are marked for second review by default, preserving the distinction between externally supplied annotations and reviewed evidence.

The application produces structured reports in PDF, HTML and JSON formats. Core review data remains in the browser; optional external lookups make network requests when explicitly used.

A validated report indicates that the documented review meets the relevant internal consistency and process requirements. It is not clinical approval or independent biological verification.

## **6. ACMG Validator: command-line implementation**

**ACMG Validator CLI v0.1.9**

Source: [GitHub, ACMG Validator](https://github.com/DylanLawless/acmg-validator?utm_source=chatgpt.com)

The command-line implementation extends the documentary evidence approach to high-throughput analysis, automated workflows and cohort-scale evidence exchange.

It provides a local, open-source toolkit for importing, validating and converting structured ACMG evidence records. It supports canonical JSON, editable TSV templates and compatible exports from the online browser application.

The implementation runs on macOS, Linux and Windows using Node.js 22 or newer, without third-party packages or external services. It also provides a local browser interface for inspecting evidence records and exporting validation results. The local browser and CLI share the same underlying validation modules.

### **Validation levels**

The implementation distinguishes structural errors from warnings concerning incomplete or uncertain documentation.

An error identifies an invalid record or contradiction. For example, a criterion declared accepted while its evidence is recorded as absent after review is internally inconsistent.

A warning identifies matters such as missing documentation, unassessed criteria, incomplete verification, unsigned reviews or disagreement with the nominal point-based classification.

Standard validation allows incomplete but structurally valid research records to be retained and exchanged. Strict validation fails when outstanding warnings remain.

This distinction is scientifically important. An incomplete record may accurately represent the current state of knowledge and should not necessarily be discarded. Conversely, a structurally valid record must not be mistaken for a complete scientific assessment.

Review coverage, pending assessments, non-applicable criteria and documented QEM evaluations are reported separately from structural validity.&#x20;

Pasted text (3)(20261125-104405).txt



### **High-throughput evidence processing**

The CLI supports processing one variant or an entire cohort through a consistent evidence representation. Every variant receives an explicit set of 28 criterion records.

This enables systematic identification of missing assessments, inconsistencies and differences in evidence availability across candidate variants. It also allows laboratory-generated evidence records to be validated before downstream use.

The purpose is to retain the same documentary distinctions at cohort scale that a professional reviewer would consider during an individual manual assessment.

## **7. ACMG Validator: R implementation**

**acmgvalidator v0.1.0**

Source: [GitHub, ACMG Validator](https://github.com/DylanLawless/acmg-validator?utm_source=chatgpt.com)

The native R implementation brings structured evidence documentation directly into statistical genetics and bioinformatics workflows. It requires R 4.1 or newer and `jsonlite`, without requiring Node.js, a browser or an external service.

The package bundles the criterion definitions, canonical evidence schema, experimental QEM catalogue and synthetic examples. This allows evidence processing against a defined local version of the rules without relying on changing external resources.

| R function            | Purpose                                                |
| --------------------- | ------------------------------------------------------ |
| `acmg_criteria()`     | Retrieve criterion definitions, strengths and caveats. |
| `acmg_template()`     | Create explicit criterion records for each variant.    |
| `acmg_read()`         | Import JSON or TSV evidence.                           |
| `acmg_table()`        | Represent evidence as a long-format R data frame.      |
| `acmg_validate()`     | Check structure and documentary consistency.           |
| `acmg_write()`        | Export structured records.                             |
| `acmg_convert()`      | Convert between evidence representations.              |
| `acmg_qem_rules()`    | Retrieve the negative QEM rule catalogue.              |
| `acmg_qem()`          | Generate QEM matrices and analysis bundles.            |
| `acmg_example_file()` | Retrieve bundled synthetic examples.                   |

A newly generated template contains all 28 criterion records per variant, explicitly marked as unassessed. Verification and sign-off remain false, and QEM outcomes remain unknown until documented.

This prevents software-generated templates from accidentally implying that observations have been made or evidence has been verified.

The package supports native R data frames, allowing researchers to examine review coverage, aggregate validation findings and integrate evidence documentation with existing genomic analyses.

The included vignette, *Understanding ACMG/AMP evidence reviews in R*, covers the entire workflow from criterion definitions and evidence entry through validation, cohort analysis, QEM generation and optional QuantBayes analysis.&#x20;

Pasted text(20261125-104239).txt



The vignette also demonstrates an important scientific principle: when evidence fields contradict one another, the appropriate action is to return to the original evidence and resolve the discrepancy. Changing a value merely to satisfy a software validation rule is not a scientific correction.

## **8. Semantic data architecture**

The underlying evidence representation is arguably one of the most important components of the system. Without a sufficiently expressive data model, scientific distinctions cannot reliably survive software processing, database storage or institutional exchange.

### **Canonical representation**

The canonical JSON schema defines a structured evidence record containing variant identity, case context, reviewer information, guideline basis, classification, individual criterion records, genotype review, provenance, external evidence and extensions.

Each criterion has its own documentary representation, including the review disposition, underlying evidence status, applied strength, source, notes, caveats and optional QEM evaluation.

The canonical representation retains the semantics needed to reconstruct the documentary assessment. A final classification or binary checklist cannot reconstruct this information.

### **Tabular representation**

TSV provides an accessible exchange format, with one row per variant review and criterion. The beginner template exposes the commonly edited fields.

The advanced representation contains `record_json` and `criterion_json` fields that preserve nested information, such as caveats and additional provenance, that cannot be adequately represented in ordinary spreadsheet columns.

Canonical JSON remains preferable for long-term archival and complete evidence exchange.

A wide matrix containing one row per variant and one column per criterion can be useful for analysis, but it is a derived representation and should not replace the authoritative evidence record.

### **Relational database integration**

The supplied SQL documentation illustrates a relational architecture consisting of an `evidence_review` table and a `criterion_review` table, linked through a stable `item_id`.

The first represents the contextual variant review. The second represents its individual criterion evaluations, including separate ACMG and QEM provenance.

Importantly, a variant coordinate is not a patient identifier. The same variant can occur in different individuals and be investigated under different disease contexts, evidence sources and reference models.

The current implementation provides portable, database-ready exchange records. Hospital SQL integration, electronic health record integration, HL7 FHIR mappings, institutional authorisation and regulatory validation remain separate implementation requirements.

### **Semantic versioning**

The evidence schema and rule catalogues are versioned independently. A historical assessment must remain interpretable according to the definitions used when it was generated.

If the meaning of an evidence question changes, historical results cannot silently acquire the new meaning. Changes require explicit versioning, migration and, where appropriate, re-evaluation.

This is another practical implementation of Rule 1: semantic precision must be preserved over time as well as across software systems.

Pasted text (3)(20261125-104405).txt

## **9. Evidence projection and interchange**

The QEM integration produces a seven-file bundle that retains the analytical representation alongside the information required to interpret it.

| File               | Content                                            |
| ------------------ | -------------------------------------------------- |
| `matrix.tsv`       | Binary qualifying evidence matrix.                 |
| `quantbayes.tsv`   | Equivalent matrix formatted for QuantBayes.        |
| `raw_outcomes.tsv` | Original `TRUE`, `FALSE` and `NA` outcomes.        |
| `rules.json`       | Versioned rule definitions and negative questions. |
| `evidence.json`    | Canonical documentary evidence record.             |
| `run_quantbayes.R` | Reproducible QuantBayes analysis example.          |
| `README.txt`       | Usage and interpretation instructions.             |

The analytical matrix is intentionally a simplified projection. The surrounding files prevent that simplification from becoming an irreversible loss of knowledge.

The two binary matrices contain identical evidence values; the identifier column is renamed for compatibility with QuantBayes.

The original evidence record and raw outcomes allow a reviewer to distinguish a confirmed invalidation from an unavailable or unassessed result, even when the numerical representation is identical.&#x20;

Pasted text (3)(20261125-104405).txt



## **10. QuantBayes: quantifying evidence sufficiency**

Sources:

[QuantBayes application](https://switzerlandomics.ch/technologies/quantbayes/?utm_source=chatgpt.com) · [QuantBayes R package](https://cran.r-project.org/package=quantbayes?utm_source=chatgpt.com) · [Scientific manuscript](https://doi.org/10.1101/2025.12.02.25341503?utm_source=chatgpt.com)

QuantBayes provides a Bayesian method for quantifying qualifying evidence availability relative to a specified evidence rule set.

The method is agnostic to the ultimate purpose of the evidence. In the ACMG implementation, it operates on the QEM representation of documentary evidence for each variant.

For a variant evaluated against \\(m\\) declared rules, \\(k\\) represents the number of qualifying binary evidence entries. QuantBayes estimates an underlying evidence-sufficiency parameter, \\(\theta\\), using a Bayesian model and reports posterior estimates, credible intervals and cohort-level summaries.

The distinction between evidence sufficiency and pathogenicity is fundamental.

\\[ \underbrace{P(\theta\mid\mathrm{QEM})}\_{\text{Evidence sufficiency inference}} \\]

is a different inferential quantity from

\\[ \underbrace{P(H_h\mid X,D,\mathcal{R}^{(v)})}\_{\text{Causal hypothesis inference}} \\]

A variant may have substantial qualifying evidence supporting benignity. Another may have relatively little qualifying evidence but nevertheless warrant a pathogenic classification based on the available evidence and applicable guidance.

QuantBayes addresses the question of how much qualifying evidence is documented under the specified model. It does not independently establish the biological conclusion that this evidence supports.

### **Demonstration using eight synthetic variants**

The CLI documentation includes an illustrative analysis of eight synthetic variants evaluated against the experimental 28-rule ACMG evidence catalogue.

### **Posterior evidence sufficiency**

Eight synthetic variant reviews under the fixed 28-rule model

Posterior mean95% credible interval

Cohort mean

# **0.142**

Cohort median

# **0.150**

The demonstration shows how evidence availability can be represented quantitatively across multiple variants. It also illustrates why the original outcomes must remain accessible: the count of qualifying entries does not reveal how many checks were attempted, how many were inapplicable or how many invalidating conditions were confirmed.

The credible intervals describe uncertainty concerning evidence sufficiency, not uncertainty concerning the pathogenicity classification.&#x20;

Pasted text (3)(20261125-104405).txt



### **The importance of the denominator**

Evidence sufficiency is conditional on the declared rule set.

The current 28-rule implementation is an experimental demonstration. Different genetic mechanisms, inheritance models and disease contexts may have different applicable evidence requirements. Some criteria are mutually incompatible, while others are deprecated or irrelevant to particular variant types.

Consequently, a low evidence-sufficiency estimate under a fixed 28-rule catalogue does not necessarily indicate poor scientific practice. A professionally completed review can legitimately contain relatively few qualifying evidence entries.

The suitability of the denominator, the definition of qualifying evidence and the comparability of the investigated variants must themselves be considered.

This is particularly important under Rule 1: introducing a numerical measure of evidence must not reintroduce the oversimplification that the underlying evidence architecture was designed to prevent.

## **11. Towards a professional Bayesian interpretation of genetics**

The components collectively establish distinct layers of a scientific evidence workflow.

SGA-QEM

Define qualifying evidence semantics

ACMG Validator

Document and validate individual evidence assessments

Semantic data architecture

Preserve context, provenance and original evidence states

QuantBayes

Quantify evidence sufficiency under declared rules

Bayesian genetic interpretation

Causal inference using the documented evidence, measurement model, biological context and prior assumptionsBroader scientific objective

Clinical reporting and decision

Explicit conclusion, supporting evidence, assumptions and residual uncertainty

The final objective is to establish the technical and ethical foundations for transparent Bayesian genetic interpretation.

Such an interpretation should account for what evidence exists, what evidence was sought but found absent, what remains unresolved, what observations may contradict the hypothesis and which limitations arise from the measurement and reference model.

It must also consider alternative genetic explanations and the possibility of an explanation outside the currently enumerated hypotheses.

The twelve-state formalism provides the broader scientific foundation for these distinctions. It establishes that biological truth remains separate from measurement, interpretation, posterior belief and reporting.

The intended clinical statement can therefore be formulated as:

> Here is our result, and here is our decision, based on the available evidence, the defined scope of our investigation, and the assumptions and limitations of our current model. The evidence supporting this conclusion, together with its unresolved components, is explicitly documented.

## **12. Important distinctions to preserve in the final article**

There are several nuances in the supplied source material that should remain explicit when we reorganise these notes.

**Documentary validation versus scientific validation.** ACMG Validator establishes whether recorded claims satisfy defined documentary and consistency requirements. It cannot independently establish that the original scientific observations or reviewer attestations are true.

**Evidence sufficiency versus completeness.** A completed review may contain little qualifying evidence. A review with numerous qualifying evidence entries may still contain important unresolved questions.

**Evidence sufficiency versus pathogenicity.** QuantBayes measures a different quantity from the probability that a variant is pathogenic or explains a phenotype.

**Shared philosophy versus implementation parity.** The three ACMG Validator implementations share the same fundamental approach, but their current feature sets are not identical. The online browser v1.1.0 supports manual and genotype-level review, whereas the CLI and R implementations support the dedicated QEM evidence representation and QuantBayes workflow. The existing website JSON format does not preserve dedicated QEM provenance, so it should not be described as a lossless QEM exchange format.

**Optional software features versus methodological requirements.** QEM and QuantBayes are optional components of the current ACMG Validator software. Their role in the broader scientific methodology is a separate argument that we can develop in the final article.

**Existing implementation versus future causal inference.** The supplied implementations establish evidence documentation, validation and quantification. They do not yet constitute an integrated, calibrated patient-level Bayesian causal inference engine. That is the broader objective for which these components provide foundations.

## **13. Source register for the final article**

| Resource                                  | Reference                                                                                                   |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| ACMG Validator browser v1.1.0             | [Switzerland Omics](https://switzerlandomics.ch/technologies/acmg-validator/?utm_source=chatgpt.com)        |
| ACMG Validator CLI v0.1.9                 | [GitHub repository](https://github.com/DylanLawless/acmg-validator?utm_source=chatgpt.com)                  |
| acmgvalidator R package v0.1.0            | [Repository listed in DESCRIPTION](https://github.com/DylanLawless/acmg-validator?utm_source=chatgpt.com)   |
| SGA-QEM-1.0                               | [Swiss Genomics Association](https://www.swissgenomicsassociation.ch/pages/sga_qem/?utm_source=chatgpt.com) |
| QuantBayes application                    | [Switzerland Omics](https://switzerlandomics.ch/technologies/quantbayes/?utm_source=chatgpt.com)            |
| QuantBayes R package                      | [CRAN](https://cran.r-project.org/package=quantbayes?utm_source=chatgpt.com)                                |
| QuantBayes manuscript                     | [DOI: 10.1101/2025.12.02.25341503](https://doi.org/10.1101/2025.12.02.25341503?utm_source=chatgpt.com)      |
| Twelve-state genotype–phenotype formalism | Previously supplied manuscript, version 1.0, 6 September 2026                                               |

The notes are grounded in the three supplied source files and the earlier twelve-state manuscript. The links are retained from the supplied material rather than independently verified. The R package's separate public release URL, the complete SGA-QEM specification and the QuantBayes mathematical source material can be incorporated when provided.
