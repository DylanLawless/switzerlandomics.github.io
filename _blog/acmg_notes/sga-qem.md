# **SGA-QEM standard for verifiable evidence**

## **Working technical notes**

**Qualifying Evidence Matrix standard for verifiable evidence (SGA-QEM-1.0)**\
Swiss Genomics Association, 2025.

The Qualifying Evidence Matrix (QEM) standard establishes a foundational convention for representing evidence availability independently of the scientific domain, interpretation framework or subsequent statistical analysis. It defines how evidence is represented, rather than prescribing what constitutes evidence. Its role in our broader methodology is to establish consistent evidence semantics before introducing domain-specific interpretation, numerical quantification or decision-making.

## **1. The fundamental purpose of QEM**

Scientific evidence is frequently represented using binary indicators without sufficiently defining what the positive and negative values mean. A zero might indicate a negative observation, missing information, a failed experiment or an assessment that was never performed. Similarly, a positive entry might represent an observation, an interpretation or an unsupported assertion.

The QEM standard addresses this ambiguity by separating the original evaluation of an evidence rule from its subsequent binary representation. It establishes a consistent convention for determining whether verifiable evidence is available for an evaluated item under a declared interpretation context.

The standard is deliberately minimal. Its applicability extends beyond genetics to any domain in which evidence can be evaluated against explicitly defined rules.&#x20;

Pasted text(20261125-104921).txt



## **2. Negative orientation of evidence rules**

A defining feature of QEM is that evidence rules must be negatively oriented. Each rule evaluates a condition that could contradict, invalidate or weaken the proposed evidence.

This establishes three possible raw outcomes:

| Raw outcome | Scientific meaning                                            |
| ----------- | ------------------------------------------------------------- |
| `TRUE`      | A contradiction, absence or weakening condition was detected. |
| `FALSE`     | The rule was evaluated and no such condition was detected.    |
| `NA`        | The rule could not be evaluated.                              |

The distinction between `FALSE` and `NA` is essential. Establishing that a weakening condition was not detected requires an evaluation. The absence of a recorded weakening condition cannot establish that this evaluation took place.

This convention provides a technical safeguard against accumulating evidence merely because no contradictory information has been recorded.

The standard does not prescribe the biological or scientific definition of individual rules. Their design, semantics and evaluation logic remain the responsibility of the upstream interpretation system.&#x20;

Pasted text(20261125-104921).txt



## **3. The binary evidence representation**

For \\(n\\) evaluated items and \\(m\\) evidence rules, the QEM is defined as:

\\[ X\in\\{0,1\\}^{n\times m} \\]

Each row represents an evaluated item and each column represents an evidence rule. The matrix entry \\(X\_{ij}\\) records whether verifiable evidence is available for item \\(i\\) under rule \\(j\\).

The standard specifies the following normative mapping:

## **TRUE**

Contradiction or weakening detected

# **0**

## **FALSE**

Qualifying evidence present

# **1**

## **NA**

Unable to evaluate

# **0**

Three distinct raw outcomes are projected into two evidence-availability states.

Evidence is accrued exclusively from entries with value one. A zero indicates that qualifying evidence is not established under the specified rule.

Importantly, a zero does not necessarily mean that evidence exists against the causal hypothesis. It may simply indicate that the required information is unavailable.

Pasted text(20261125-104921).txt

## **4. Deliberate abstraction without semantic loss upstream**

The QEM standard explicitly recognises that its binary representation is a lossy abstraction. Both a confirmed contradiction and an unavailable assessment produce zero, despite representing fundamentally different scientific circumstances.

The standard therefore requires the preservation of raw rule outcomes and provenance upstream wherever semantic detail, context or reinterpretation is required.

This is particularly important in relation to Rule 1. Simplification is permissible when its purpose and limitations are explicitly defined, and when the original information remains accessible. The problem arises when a simplified analytical representation replaces the original evidence record.

The QEM matrix is therefore a derived analytical representation, rather than the authoritative record of scientific observations.

## **5. Evidence availability versus evidential direction**

The QEM standard separates the availability of evidence from the conclusion that the evidence supports.

For example, the availability of parental genotypes provides an opportunity to evaluate inheritance. It does not establish whether the observed inheritance pattern supports or contradicts a proposed genetic explanation.

The standard illustrates this using the rule `parent_gt_unavailable`:

| Raw outcome | Meaning                       | QEM value |
| ----------- | ----------------------------- | --------- |
| `TRUE`      | Parental genotype unavailable | 0         |
| `FALSE`     | Parental genotype available   | 1         |
| `NA`        | Availability unknown          | 0         |

The resulting matrix entry establishes whether a particular source of evidence is available. The subsequent interpretation of the parental genotypes is a separate scientific operation.

Where missingness itself provides informative evidence, the standard specifies that this should be represented through separate, explicit rules rather than overloading the meaning of an existing binary entry.&#x20;

Pasted text(20261125-104921).txt



This principle has direct relevance to ACMG/AMP interpretation. Evidence supporting benignity can be just as important to a scientific assessment as evidence supporting pathogenicity. Both can constitute qualifying evidence.

## **6. Separation of scientific and computational responsibilities**

The standard deliberately separates four components of an evidence workflow:

- **Rule definition:** establishing what constitutes qualifying, contradictory or weakening evidence within a particular domain.
- - **Rule evaluation:** assessing the available information and producing a raw `TRUE`, `FALSE` or `NA` outcome.
- - **Evidence representation:** deterministically converting those outcomes into the standardised QEM representation.
- - **Downstream inference:** using the resulting evidence representation for statistical analysis or other applications.
-
- QEM standardises the third component without prescribing the implementation of the others.
-
- This separation allows different scientific disciplines, laboratories and software systems to use the same evidence representation while retaining their own domain-specific definitions and interpretation procedures.
-
- ## **7. Semantic data architecture and interoperability**
-
- Although described mathematically as a matrix, QEM does not require a particular physical storage format.
-
- The standard accommodates tabular, relational database and graph-based representations, provided that the association between evaluated items and evidence rules is stable, unambiguous and reproducible.
-
- For tabular representations, rows and columns must have defined and stable ordering. For non-tabular representations, evaluated items and evidence rules must have stable, unique identifiers, with a documented deterministic mapping to an ordered matrix view.
-
- Reordering items or rules, or changing their identifiers, constitutes a different matrix instance and must be documented.&#x20;
-
- Pasted text(20261125-104921).txt
-
-
-
- This establishes a connection between the standard and the semantic data architecture developed for ACMG Validator. Evidence can be maintained in a detailed structured record while generating a standardised analytical matrix whenever required.
-
- The matrix need not be the primary storage representation.
-
- ## **8. Integrity, provenance and reproducibility**
-
- Every QEM instance must include or reference sufficient metadata to permit unambiguous interpretation and reproducibility.
-
- The minimum requirements include unique evidence rule identifiers, the version or identifier of the evidence rule set, the version of the QEM standard and stable identifiers for identifiable evaluated items.
-
- The matrix must be deterministically derivable from the declared raw outcomes under the referenced rule set and standard version.&#x20;
-
- Pasted text(20261125-104921).txt
-
-
-
- This distinction between the standard version and the evidence rule-set version is fundamental. SGA-QEM-1.0 defines the meaning of the representation. A particular ACMG evidence catalogue defines the questions being evaluated.
-
- Two matrices can both conform to SGA-QEM-1.0 while representing different scientific questions. Conformance to the same representation standard does not establish scientific comparability.
-
- ## **9. Correlated and dependent evidence**
-
- The QEM standard explicitly recognises that evidence rules may be correlated or dependent. It does not require independence between rules.
-
- This is particularly relevant in genetics, where multiple evidence criteria may depend on the same underlying observation, biological mechanism, computational prediction or experimental result.
-
- Representing several qualifying evidence entries does not establish that they constitute independent observations or that their evidential contributions can be combined without adjustment.
-
- The detection, modelling and correction of such dependencies remain the responsibility of upstream rule design or downstream statistical inference.&#x20;
-
- Pasted text(20261125-104921).txt
-
-
-
- For our broader methodology, this means that a valid QEM representation provides a foundation for statistical analysis without automatically establishing the validity of any particular statistical model applied to it.
-
- ## **10. Relationship to ACMG Validator**
-
- SGA-QEM provides the general evidence representation standard. ACMG Validator supplies a domain-specific implementation through structured ACMG/AMP evidence documentation, criterion-specific rules, documentary validation and provenance.
-
- The ACMG-specific QEM catalogue translates questions about qualifying ACMG evidence into explicitly defined negative rules. However, these rules are an application of the standard, rather than part of the standard itself.
-
- ACMG Validator introduces additional documentary requirements, including separate evidence references, reviewer attestations and sign-off requirements. These are implementation-specific safeguards that go beyond the minimal QEM specification.
-
- The distinction should be preserved in the final article: SGA-QEM establishes the general convention, while ACMG Validator establishes one practical implementation for genetic evidence.
-
- ## **11. Relationship to QuantBayes**
-
- The QEM standard provides a consistent input representation for downstream evidence quantification. QuantBayes provides a statistical methodology that can operate on that representation.
-
- Their responsibilities remain distinct. QEM defines whether an entry constitutes qualifying evidence under a declared rule. QuantBayes estimates evidence sufficiency under a specified statistical model.
-
- Neither the QEM standard nor the number of qualifying matrix entries establishes the probability that a genetic variant is pathogenic, that it explains a patient's phenotype or that a clinical decision is correct.
-
- The scientific validity of these subsequent conclusions depends on additional evidence, assumptions and inference methods.
-
- ## **12. Relationship to Rule 1 and the ground-truth postulate**
-
- The QEM standard addresses a particular part of the broader problem described in the twelve-state genotype–phenotype formalism: the representation of available evidence without confusing it with interpretation or underlying biological truth.
-
- A qualifying evidence entry does not assert that a causal hypothesis is true. It establishes that a defined evidence requirement has been satisfied according to the declared rule.
-
- The distinction between an observed contradiction, an unresolved assessment and qualifying evidence exists before any statistical interpretation is performed.
-
- By requiring explicit rule semantics and providing for the preservation of raw outcomes, QEM establishes a technical foundation upon which more advanced scientific inference can be built without inadvertently discarding these distinctions.
-
- The standard does not attempt to solve the entire inference problem. Its contribution is to ensure that the evidence representation has a defined, reproducible meaning.
-
- ## **13. Normative stability**
-
- SGA-QEM-1.0 is a normative standard published by the Swiss Genomics Association. The terms MUST, MUST NOT, SHOULD and MAY are interpreted according to RFC 2119.
-
- Future revisions must preserve backward compatibility of the binary semantics.&#x20;
-
- Pasted text(20261125-104921).txt
-
-
-
- This provides an important safeguard for long-term evidence interoperability. A matrix entry must not silently acquire a different meaning when software or standards are updated.
-
- ## **14. Source register**
-
- | Resource                  | Reference                                                                                                           |
- | ------------------------- | ------------------------------------------------------------------------------------------------------------------- |
- | Standard name             | Qualifying Evidence Matrix standard for verifiable evidence                                                         |
- | Standard identifier       | SGA-QEM-1.0                                                                                                         |
- | Publishing organisation   | Swiss Genomics Association                                                                                          |
- | Publication year          | 2025                                                                                                                |
- | Publication DOI           | [10.5281/zenodo.17936587](https://doi.org/10.5281/zenodo.17936587?utm_source=chatgpt.com)                           |
- | Zenodo badge DOI supplied | [10.5281/zenodo.17936586](https://doi.org/10.5281/zenodo.17936586?utm_source=chatgpt.com)                           |
- | Standard webpage          | [SGA-QEM](https://www.swissgenomicsassociation.ch/pages/sga_qem/?utm_source=chatgpt.com)                            |
- | Normative document        | [PDF](https://www.swissgenomicsassociation.ch/assets/release/sga_qem/latest/sga_qem_1.0.pdf?utm_source=chatgpt.com) |
- | Source repository         | [GitHub](https://github.com/swissgenomicsassociation/sga_qem?utm_source=chatgpt.com)                                |
- | Normative terminology     | [RFC 2119](https://www.rfc-editor.org/rfc/rfc2119?utm_source=chatgpt.com)                                           |
-
- **Recommended citation**
-
- Swiss Genomics Association. (2025). *Qualifying Evidence Matrix standard for verifiable evidence* (SGA-QEM-1.0). Zenodo. [https://doi.org/10.5281/zenodo.17936587](https://doi.org/10.5281/zenodo.17936587?utm_source=chatgpt.com).
-
- The two supplied Zenodo DOI identifiers have been retained separately. Their respective release and concept DOI roles have not been independently verified.
-
- ## **Central contribution to retain for the final article**
-
- The SGA-QEM standard establishes the semantics of qualifying evidence before any interpretation or statistical analysis is undertaken. It requires explicitly defined negative evidence rules, distinguishes confirmed weakening conditions from unavailable assessments, and provides a deterministic representation of qualifying evidence availability. By separating the analytical matrix from the original evidence record, the standard permits computational simplification while preserving the information required for scientific reinterpretation. Its independence from domain-specific rules and statistical methods makes it a foundational component of a professional evidence architecture, upon which ACMG Validator and QuantBayes can operate without conflating evidence availability, scientific interpretation and biological truth. 
