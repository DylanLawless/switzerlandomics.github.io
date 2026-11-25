# **Communicating the concept to a general audience**

The central challenge is to make the reader understand why receiving an answer is different from receiving a verifiable account of how that answer was established.

Most people intuitively understand evidence when presented with an everyday problem. We should establish that intuition before introducing genetics, algorithms, data standards or Bayesian statistics. Once the reader understands the problem, the purpose of each technical component should become almost self-evident.

## **1. Storyboard transcription**

### **Scene 1. Who ate the pie?**

**Who ate the pie?**

The dog or aliens?

A simple guide to evidence-based conclusions.

### **Scene 2. Establish the observation**

**Start with what happened.**

A warm apple pie was left on the table. Later, some of it was gone.

### **Scene 3. Investigate the evidence**

**Do not guess. Check.**

- Reachable pie.
- - Hungry dog.
- - Past food theft.
- - Dog-like bite marks.
- - No alien trace.
-
- Four observations are marked as confirmed. The fifth remains unconfirmed.
-
- ### **Scene 4. Evaluate the first explanation**
-
- **The dog fits.**
-
- The evidence points in the same direction. No extraordinary event is needed.
-
- ### **Scene 5. Consider alternative explanations**
-
- **The aliens remain possible.**
-
- But possible is not the same as supported.
-
- The alternative explanation lacks documented supporting observations: a visit, a trace or a witness.
-
- ### **Scene 6. Update our belief**
-
- **So we update our confidence.**
-
- Not to 100 percent. But very high.
-
- High confidence, not certainty.
-
- ### **Scene 7. Reach an evidence-based conclusion**
-
- **Evidence turns possibilities into conclusions.**
-
- Many answers can be imagined. The useful question is: which one is best supported?
-
- That is how trust becomes measurable.
-
- ## **2. The story in paragraph format**
-
- A freshly baked apple pie was left on the table. When we returned, some of it was gone. Who ate it? Perhaps it was the dog, or perhaps aliens visited the kitchen. Both are imaginable explanations, but we need evidence to distinguish between them. We establish that the dog could reach the pie, was hungry, had previously stolen food and that the bite marks resemble those of a dog. We find no established evidence supporting the alien explanation. The available observations favour the dog hypothesis, although we cannot establish with absolute certainty what happened. Our conclusion is conditional on the evidence we have collected.
-
- Now imagine that someone else investigated the missing pie and simply told us that the dog ate it. We might agree with their conclusion, but we would have no way of knowing how thoroughly they investigated it. Did they examine the bite marks? Did they establish that the dog could reach the table? Did they consider another explanation? Did they find contradictory evidence and disregard it? Without the record of their investigation, we cannot independently assess the basis of their conclusion.
-
- ## **3. The critical transition to the real problem**
-
- The second paragraph is where the analogy becomes particularly valuable for our article.
-
- Imagine a hospital receives a genetic diagnosis from a company using a proprietary algorithm or an artificial intelligence system. The company reports that a particular genetic variant explains a patient's disease. The algorithm may be excellent, and its conclusion may be correct. But how does the hospital establish which scientific and technical evidence was actually assessed?
-
- Was the sequencing quality sufficient? Were the parental genotypes investigated? Was the inheritance pattern evaluated? Were contradictory scientific observations considered? Were alternative genetic explanations examined? Which information was unavailable?
-
- The company does not necessarily need to disclose its proprietary algorithm. It does, however, need a means of communicating the verifiable evidence underlying its conclusion.
-
- **We can protect the intellectual property of an analytical system while making the evidential basis of its conclusions independently assessable.**
-
- This is the practical problem that our evidence architecture addresses.
-
- ## **4. Preserving Rule 1 within the analogy**
-
- The existing storyboard is an effective introduction to evidence-based reasoning. However, our particular contribution requires one additional distinction.
-
- Consider three possible investigation records:
-
- | Evidence question               | Investigator A | Investigator B | Investigator C |
- | ------------------------------- | -------------- | -------------- | -------------- |
- | Could the dog reach the pie?    | Yes            | Yes            | Yes            |
- | Was the dog hungry?             | Yes            | Not checked    | Yes            |
- | Has the dog stolen food before? | Yes            | Not checked    | Yes            |
- | Were the bite marks consistent? | Yes            | Not checked    | No             |
- | Final conclusion                | The dog        | The dog        | The dog        |
-
- All three investigators reach the same conclusion. Yet their evidential records are substantially different.
-
- Investigator A has several supporting observations. Investigator B has left important questions unanswered. Investigator C has encountered potentially contradictory evidence.
-
- If we record only the final conclusion, these differences disappear.
-
- If we record only positive evidence, we still cannot distinguish an unanswered question from a finding that contradicts the conclusion.
-
- This is precisely the information that professional evidence systems must preserve.
-
- There is also a subtle distinction in the original storyboard's reference to alien traces. Not searching for alien traces, searching and finding none, and finding evidence that rules out an alien visit are three different circumstances. The storyboard can remain simple, but our accompanying explanation should preserve that distinction.
-
- ## **5. Introducing our technical solutions naturally**
-
- Once the reader understands the three investigators, we can introduce our work without requiring any prior technical knowledge.
-
- **SGA-QEM**
-
- Establish a common convention for recording whether qualifying evidence is available.
-
- **ACMG Validator**
-
- Ensure genetic evidence reviews explicitly document the outcomes of individual assessments, including what was not established.
-
- **Semantic data architecture**
-
- Retain the observations, their meanings, sources and context so that other people and computers can understand and examine them.
-
- **QuantBayes**
-
- Quantify how much qualifying evidence is available, with an explicit representation of statistical uncertainty.
-
- Each component answers a question that the reader now understands. We introduce the technology only after establishing why it is needed.
-
- ## **6. The counterfactual principle**
-
- A particularly important part of professional scientific reasoning is establishing what evidence could have changed our conclusion.
-
- If the dog could not reach the table, would we still blame it? If the bite marks were inconsistent with those of a dog, would we reconsider? If another animal was observed in the kitchen, would we investigate it?
-
- The credibility of an investigation depends partly on whether it was capable of reaching a different conclusion when confronted with different evidence.
-
- In computational science, we can formalise these questions, define their possible outcomes and preserve the results in a reproducible representation. We cannot guarantee that every conceivable counterfactual has been considered, but we can make the scope of the investigation explicit and verify the assessments required by the declared model.
-
- This transforms an otherwise opaque conclusion into something that can be scientifically examined.
-
- ## **7. Recommended delivery for the blog**
-
- I would structure the final piece as a short progression through connected paragraphs:
-
- 1. **An everyday story.** Who ate the pie?
- 2. **The problem of trust.** Three investigators reach the same conclusion through different investigations.
- 3. **The clinical relevance.** A hospital receives a diagnosis from a proprietary algorithm or AI.
- 4. **The missing infrastructure.** How can the evidence be documented, exchanged, verified and quantified?
- 5. **Our solution.** Introduce SGA-QEM, ACMG Validator, the underlying data architecture and QuantBayes.
- 6. **The professional outcome.** Communicating a scientific conclusion together with a verifiable account of its evidential basis.
-
- The twelve-state formalism can remain an intellectual foundation and an optional reference for technically interested readers. We do not need to teach the formalism to communicate why it matters.
-
- ## **8. The message the reader should be able to repeat**
-
- If someone reads the article and explains it to a colleague the following day, we want them to be able to say something as simple as:
-
- > Two systems can give you exactly the same diagnosis, but one may have investigated the evidence thoroughly while the other has overlooked important information. We developed a way to record what was checked, what was found, what remains unknown and how much qualifying evidence is available. This allows the evidence behind a result to be independently assessed, even when the algorithm that produced it is private.
-
- That is the central narrative. Everything else explains how we made it technically possible.


---

## **1. Begin from the reader's perspective**

We have spent considerable time developing these technologies, so their relationship and purpose are already familiar to us. The reader, however, encounters everything for the first time.

We should assume they do not know what ACMG/AMP means, what a genetic variant is, how scientific evidence is represented in software or why any of this requires a new technical solution.

Following the principles in Claude Hopkins' *Scientific Advertising*, we should communicate the practical value to the reader before describing our technologies. Be specific, avoid boasting and explain the problem in terms the reader can recognise.

Our first objective is to give the reader an understanding of the problem that they can apply themselves.

## **2. Establish exactly what we want the reader to understand**

There are three progressively deeper concepts.

| Concept                     | What the reader should understand                                                                                     |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Evidence-based reasoning    | We reach conclusions by examining evidence.                                                                           |
| Verifiable reasoning        | Someone else must be able to establish what evidence we examined and what we found.                                   |
| Professional implementation | Our systems must preserve this information systematically, including evidence that could have changed the conclusion. |

Most people already understand the first concept. We should therefore introduce it briefly and devote more attention to the second and third.

Our contribution is not the invention of evidence-based reasoning. It is the development of technical infrastructure that preserves its essential scientific principles when implemented in computer systems.

## **3. Give the pie story a more precise purpose**

The dog and aliens story establishes how we reason from observations. However, if we simply tell the story and conclude that the dog probably ate the pie, we have taught the reader something they already know.

The interesting part begins when somebody else investigates the incident.

Imagine three people independently report:

> The dog ate the pie. The bite marks resemble those of a dog.

All three provide the same conclusion and the same supporting evidence. But their investigations were different.

| Investigation                      | Person A | Person B    | Person C |
| ---------------------------------- | -------- | ----------- | -------- |
| Bite marks resemble those of a dog | Yes      | Yes         | Yes      |
| Dog could reach the pie            | Yes      | Not checked | No       |
| Other animals had access           | No       | Not checked | Yes      |
| Final conclusion                   | The dog  | The dog     | The dog  |

This is a more revealing example because even the **reported supporting evidence is identical**.

The reader can immediately understand why the full investigation matters. The additional information could substantially change their confidence in the conclusion.

We should allow the reader to discover this problem through the example rather than beginning with an abstract explanation of evidence semantics.

## **4. Introduce the counterfactual principle without technical language**

The underlying scientific principle is that we must consider observations that could change our conclusion.

If we believe the dog ate the pie, we should investigate whether the dog could actually reach it. We should also record the result, regardless of whether it supports our explanation.

A particularly useful distinction is between three statements:

- We checked and found no problem.
- We checked and found a problem.
- We did not check.

These statements are easy for anyone to understand. Yet their distinction is fundamental to the systems we have developed.

We can introduce the word *counterfactual* later, if necessary. The reader should understand the concept before encountering its terminology.

## **5. Transfer that understanding to clinical genetics**

Only after the reader understands the everyday example should we introduce the clinical application.

A patient undergoes genetic testing because their doctors want to establish the cause of a disease. The laboratory examines their DNA and identifies a genetic change that might explain their condition.

The patient and their doctor receive a report.

At this point, the reader should already recognise the questions that naturally arise. What was investigated? What was found? What could have contradicted the explanation? What remains unknown?

We can then introduce a concrete example: parental DNA.

A laboratory may propose an explanation based on how a genetic change was inherited. However, there is a considerable difference between establishing the inheritance pattern from parental DNA and making an interpretation when parental DNA is unavailable.

The reader does not need to understand Mendelian genetics to appreciate that distinction.

## **6. Explain ACMG/AMP before explaining its implementation**

We should give the existing scientific framework appropriate credit.

The ACMG/AMP guidelines provide a structured set of criteria for evaluating whether genetic changes contribute to disease. Different types of evidence have different meanings and strengths, and evidence can support either a pathogenic or benign interpretation.

The problem arises when these carefully designed scientific criteria are implemented in software that primarily records which criteria were satisfied.

The distinction is important because we are not arguing that the ACMG/AMP framework is fundamentally deficient. We are addressing the loss of information that can occur during its practical implementation.

**We should distinguish the quality of a scientific framework from the quality of its implementation.**

This also gives the article its title and purpose.

## **7. Introduce the commercial and AI problem**

Once the reader understands the clinical problem, we can explain why it becomes particularly important as genetic analysis is increasingly conducted through commercial software and AI systems.

Imagine that a hospital purchases a genetic analysis service. The company uses a private algorithm to generate its results. Its algorithm may represent years of development and valuable intellectual property.

The hospital does not necessarily need to inspect that algorithm. But it needs to establish which evidence was assessed, what was found and which limitations remain.

Without a common way to exchange that information, the hospital may have to accept the conclusion on trust or repeat parts of the investigation.

This is where the reader begins to understand the practical value of our work: independent assessment, evidence reuse, interoperability and protection of intellectual property.

We should avoid presenting commercial algorithms as inherently problematic. Our approach is designed to allow them to operate while making their evidential outputs more useful.

## **8. Introduce the technologies as answers to questions**

Rather than presenting our technologies as a list of products, we should introduce each one when the reader encounters the problem it addresses.

Question 1

**How do we agree on what counts as available evidence?**

[SGA-QEM](https://www.swissgenomicsassociation.ch/pages/sga_qem/?utm_source=chatgpt.com) establishes a common standard for representing qualifying evidence.

Question 2

**How do we ensure these distinctions are recorded during genetic interpretation?**

[ACMG Validator](https://switzerlandomics.ch/technologies/acmg-validator/?utm_source=chatgpt.com) provides structured evidence review and documentary validation.

Question 3

**How can another person or computer examine that evidence later?**

The underlying data architecture preserves the original assessments, their meanings, sources and context.

Question 4

**How much qualifying evidence do we actually have?**

[QuantBayes](https://switzerlandomics.ch/technologies/quantbayes/?utm_source=chatgpt.com) provides a statistical estimate of evidence sufficiency, including uncertainty.

By this stage, the reader should understand why each component exists before learning how it works.

## **9. Be careful about what we claim to have solved**

Rule 1 is particularly important here. In communicating our solution simply, we must not introduce another oversimplification.

We have developed the infrastructure to document, exchange, validate and quantify evidence under explicitly defined scientific requirements.

This does not guarantee that every conceivable scientific question has been investigated, that every recorded observation is correct or that the final diagnosis is true.

However, it makes the declared scope of the investigation, its documented findings and its unresolved components available for independent examination.

Similarly, we must preserve the distinction between how much evidence is available and what that evidence tells us. QuantBayes quantifies the former. Genetic interpretation addresses the latter.

These distinctions are central to the professional nature of the work.

## **10. Proposed structure of the introduction**

I would aim for approximately 300 to 400 words, organised into five connected paragraphs.

| Paragraph | Purpose                                                                                                                        |
| --------- | ------------------------------------------------------------------------------------------------------------------------------ |
| 1         | Introduce the missing pie and the familiar process of investigating evidence.                                                  |
| 2         | Show how identical conclusions can conceal substantially different investigations.                                             |
| 3         | Transfer the principle to genetic testing using a concrete clinical example.                                                   |
| 4         | Introduce ACMG/AMP and the problem of preserving its scientific distinctions in software, including private algorithms and AI. |
| 5         | Establish the purpose of our work and transition into the technical components.                                                |

No equations, schema definitions, software version numbers or advanced Bayesian terminology are needed in the introduction. They become useful later, once the reader understands what they accomplish.

## **11. The central message**

There is a stronger and more specific message here than simply saying that scientific conclusions should be evidence-based.

**When we receive a scientific conclusion, we should also be able to establish what was investigated, what was found, what could have changed the conclusion and what remains unknown.**

Our work makes this information a structured, verifiable and quantitatively assessable part of genetic analysis.

That is the idea around which I would build the entire article. The dog story, ACMG/AMP framework, SGA-QEM standard, ACMG Validator, data architecture and QuantBayes all serve to explain and implement that same principle.
