## **1. The purpose of the article**

The article should read as a short scientific position piece supported by existing technical work, rather than a software announcement, literature review or technical tutorial.

We want two very different readers to arrive at the same understanding. A member of the public should understand why the problem matters. An experienced clinical geneticist should recognise why its resolution is technically and scientifically necessary.

The central argument is that **a well-designed scientific interpretation framework requires an equally well-designed computational implementation.** If the implementation discards scientifically meaningful information, it undermines the principles of the original framework.

Our contribution is to make the more rigorous approach practical, reproducible and accessible.

## **2. Define the bottleneck precisely**

The strongest argument is that conventional representations of genetic classifications can be intrinsically insufficient for independent verification.

Consider a record containing five applied ACMG/AMP criteria. Even if those five assignments are entirely correct, we cannot reconstruct the assessment of the remaining criteria from that record.

We cannot determine whether relevant evidence was sought and found absent, contradicted the interpretation, was unavailable, was deemed inapplicable or was never assessed.

**Once these distinctions are discarded, no subsequent statistical method or artificial intelligence system can reliably reconstruct them from the classification alone.**

This is the computational bottleneck. It exists independently of the quality of the original analysis.

We can make this argument without claiming that every previous laboratory or software implementation was deficient. The limitation follows directly from the information that a positive-only representation fails to retain. A claim about how widespread that practice is would require a separate comparative assessment.

## **3. Order of the foundational pillars**

I would retain our original order. It follows the logical dependencies of the solution rather than the chronology of software development.

# **01**

**SGA-QEM**

Define how qualifying evidence is represented.

# **02**

**ACMG Validator**

Apply these principles to professional genetic evidence review.

# **03**

**Semantic data architecture**

Preserve the meaning of the investigation across systems and institutions.

# **04**

**QuantBayes**

Quantify how much qualifying evidence is available.

**Professional genetic interpretation**

A scientific conclusion accompanied by its documented evidence, scope, assumptions and uncertainty.

Each pillar should have a distinct intellectual purpose. The reader should understand why removing any one of them would leave an unresolved problem.

## **4. The appropriate level of detail**

### **Pillar 1. A standard for verifiable evidence**

**SGA-QEM**

The first paragraph should establish the general scientific principle: evidence should only be accrued when a defined requirement has been explicitly evaluated and satisfied.

We should explain the negative orientation of evidence rules in ordinary language. We actively investigate conditions that could undermine the evidence. An assessment that was never performed cannot contribute qualifying evidence.

The distinction between finding a contradiction and being unable to perform an assessment must remain available in the original record, even when both contribute zero to a subsequent calculation.

This paragraph establishes the standard's general applicability beyond genetics.

Essential references: [SGA-QEM standard](https://www.swissgenomicsassociation.ch/pages/sga_qem/?utm_source=chatgpt.com) and [normative publication](https://doi.org/10.5281/zenodo.17936587?utm_source=chatgpt.com).

**Target: 80 to 100 words.**

### **Pillar 2. Professional implementation of ACMG/AMP criteria**

**ACMG Validator**

This is the central pillar of the article and deserves slightly more attention.

The reader should understand that we have implemented an evidence review system that explicitly accounts for all 28 original ACMG/AMP criteria, including their applicability, evidence status, strength, justification and sources.

We should emphasise that documenting an unavailable assessment is a legitimate scientific outcome. A complete review does not necessarily mean that complete evidence is available.

The browser, command-line software and R package bring the same documentary principles to individual professional assessments and large-scale computational workflows.

One sentence should distinguish documentary validation from automatic classification or verification of biological truth.

Essential references: [ACMG Validator](https://switzerlandomics.ch/technologies/acmg-validator/?utm_source=chatgpt.com), [software repository](https://github.com/DylanLawless/acmg-validator?utm_source=chatgpt.com) and [original ACMG/AMP guidelines](https://doi.org/10.1038/gim.2015.30?utm_source=chatgpt.com).

**Target: 100 to 130 words.**

### **Pillar 3. Preserving the meaning of evidence**

**Semantic data architecture**

This is potentially the least familiar concept for the general reader, but it is fundamental to the practical solution.

We should introduce it through the problem of transferring an investigation from one computer system or institution to another.

A computer must be able to distinguish evidence that was unavailable from evidence that contradicted an interpretation. It must also know which variant, patient context, evidence rule and source the assessment refers to.

We have developed structured, versioned evidence records that retain these distinctions and allow them to be exchanged, validated and stored independently of the original analysis software.

The reader does not need to understand JSON, SQL or schemas. Those details are available in the software documentation.

**Target: 80 to 100 words.**

### **Pillar 4. Quantifying available evidence**

**QuantBayes**

Having established how evidence is defined, documented and preserved, we can now quantify it.

QuantBayes provides a general Bayesian method for estimating how much qualifying evidence is available for each evaluated item under a defined set of evidence rules. It produces an estimate with statistical uncertainty and places that estimate in the context of other evaluated items.

The method was developed and evaluated in clinical genetics but is independent of the ACMG/AMP framework.

The essential distinction is that QuantBayes measures evidence sufficiency, rather than the probability that a particular scientific conclusion is correct.

Essential references: [QuantBayes](https://switzerlandomics.ch/technologies/quantbayes/?utm_source=chatgpt.com), [scientific manuscript](https://doi.org/10.64898/2025.12.02.25341503?utm_source=chatgpt.com) and [R package](https://cran.r-project.org/package=quantbayes?utm_source=chatgpt.com).

**Target: 80 to 100 words.**

## **5. The distinctions we cannot afford to omit**

Under Rule 1, even the shortest version of the article must preserve these distinctions.

| Concept               | What it establishes                                                        |
| --------------------- | -------------------------------------------------------------------------- |
| Review completeness   | Whether the required assessments have been accounted for.                  |
| Evidence availability | Whether qualifying scientific information exists.                          |
| Evidential strength   | How strongly an observation supports or contradicts an interpretation.     |
| Pathogenicity         | Whether a genetic variant is disease-causing in a defined context.         |
| Causal attribution    | Whether a genetic configuration explains a particular patient's condition. |
| Clinical decision     | What action is justified by the current state of knowledge.                |

These need not appear as a table in the published article. They should instead serve as our editorial checklist.

In particular, a professionally completed review can contain very little qualifying evidence, while a pathogenic classification can be justified by a small number of highly informative observations.

The architecture must accommodate both circumstances.

## **6. Establish credibility through specific, verifiable facts**

Following Hopkins' principles, we should demonstrate the substance of the work rather than describe it using superlatives.

Our argument is strengthened by the fact that the reader can inspect the normative evidence standard, use the browser application, examine the source code, run the R packages and read the scientific publications.

The components have been developed as independently usable resources and subsequently brought together for this application.

We should distinguish software validation, methodological evaluation and clinical validation. The available work supports the first two in their respective contexts, but we should not imply that the integrated architecture has already undergone comprehensive clinical validation or accreditation.

The specificity of the existing work is more persuasive than a broad claim of novelty.

## **7. How much technical information belongs in the article?**

I would omit mathematical equations entirely from the main text.

The QuantBayes manuscript already establishes the mathematical methodology. The QEM publication establishes the normative semantics. The ACMG Validator documentation establishes the software implementation.

Repeating these details would turn the article into a condensed technical manual and distract from its central scientific argument.

The important conceptual contribution of this article is **how these independently developed components work together to resolve a common problem.**

Inline links allow a specialist reader to investigate any claim immediately without imposing the same technical burden on everyone else.

## **8. Recommended final layout**

| Section                               | Approximate words |
| ------------------------------------- | ----------------- |
| Existing introduction                 | 350               |
| A standard for verifiable evidence    | 80                |
| Professional ACMG/AMP evidence review | 120               |
| Preserving the meaning of evidence    | 90                |
| Quantifying available evidence        | 90                |
| Professional genetic interpretation   | 100               |
| **Total**                             | **830**           |

Approximately 800 words should be sufficient. Four short foundational sections, each consisting of one substantial paragraph, followed by a conclusion.

No separate methods section, product feature lists, software version tables or extensive bibliography. References should appear naturally within the paragraphs.

## **9. The scientific and ethical conclusion**

The closing paragraph should return to the purpose of clinical genetics and explain what these foundations collectively enable.

The objective is to reach a position in which a professional can communicate:

> Here is our result. Here is the evidence upon which it is based, the assessments we performed, the information that remains unavailable and the limitations of our investigation. Given our current knowledge and interpretation model, this is the decision we can justify.

The more advanced twelve-state genotype–phenotype formalism can be referenced here as a continuation of the scientific work, without requiring the reader to understand it.

We should distinguish the infrastructure we have already developed from the broader objective of a fully specified Bayesian causal interpretation.

## **10. The overarching argument**

There is a simple reason why all four pillars are necessary.

Scientific rigour is often described as a responsibility of the investigator. Our work extends that responsibility to the design of the computational systems themselves.

A professional implementation should make it difficult to discard meaningful scientific information for convenience. It should accommodate uncertainty, preserve contradictory findings, expose missing assessments and allow evidence to be independently examined.

That is the position I would want an editor of *The American Journal of Human Genetics* or *The New England Journal of Medicine* to evaluate.

The scientific principle is familiar. The challenge has been making its consistent implementation practical. The four foundational pillars provide a concrete approach to doing so.
