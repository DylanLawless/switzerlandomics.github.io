# **Guide to writing: Professional implementation of ACMG/AMP criteria**

**Foundational principle.** Rule 1: nuance exists. Oversimplification can remove scientifically meaningful distinctions and repeatedly reintroduce errors that a well-designed framework was intended to prevent. The twelve-state genotype–phenotype formalism demonstrates why biological truth, measurement, interpretation and reporting must remain distinct. Although this formalism is a more advanced topic, it establishes the intellectual foundation for our approach.

**The problem.** The ACMG/AMP framework was designed to accommodate nuanced genetic evidence. However, its practical implementation frequently regresses towards recording positive criterion assignments alone, losing information about evidence that is absent, unavailable, contradictory, insufficient or not evaluated. Our objective is to develop systems in which these distinctions are preserved by design rather than relying on individual users to remember them.

**The foundational stepping stones.**

1. **SGA-QEM standard.** Establish a general standard for representing evidence explicitly and consistently, independent of its intended application.
2. **ACMG Validator.** Provide equivalent implementations through the browser, CLI and R package, requiring explicit documentation of what evidence is and is not available, rather than recording only satisfied criteria.
3. **Semantic data architecture.** Establish the underlying data representation needed to preserve the meaning, status and provenance of evidence, using QEM to support consistent and complete documentation.
4. **QuantBayes.** Provide a general-purpose method for quantifying the available evidence for individual genetic variants, while remaining agnostic to the purpose for which that evidence is collected or subsequently used.

**The scientific and ethical objective.** Together, these components establish the technical foundations for a defensible Bayesian interpretation of genetic evidence. They preserve the distinction between what is known, what remains unknown and what can reasonably be inferred. In clinical genetics, this allows us to make a transparent statement: here is our result, and here is our decision, conditional on the evidence currently available and the assumptions, scope and limitations of our test and model.

The final piece should explain this progression in short, connected paragraphs, using the forthcoming technical source material to substantiate each component. The central narrative is how professional implementation prevents the loss of scientific nuance and the subsequent regression towards oversimplified interpretation.
