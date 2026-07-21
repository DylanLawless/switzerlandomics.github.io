---
layout: tech
title: "Swiss-UK genomic interoperability project"
description: "Building the open foundation for genomic information to work across organisations, systems and borders."
permalink: /pages/swiss-uk-genomics/
---


Building the open foundation for genomic information to work across organisations, systems, and borders.

Genomics spans sequencing, analysis, interpretation, clinical care, research and drug discovery. But when genomic information moves between independent organisations and systems, the provenance, analysis context and evidence needed to understand and evaluate it do not always move with it.

The result is bespoke integration, repeated translation, and repeated verification.

---

## Switzerland-UK funding opportunity

<figure>
  <img
    src="{{ '/images/swiss-uk-genomics/swiss-uk-genomics-funding-banner.png' | relative_url }}"
    alt="Innosuisse and Innovate UK"
  >
  <figcaption>
    <strong>Figure</strong>. Switzerland-UK bilateral call for projects, supported by Innosuisse and Innovate UK.
  </figcaption>
</figure>

Swiss and UK participants are invited to submit proposals for joint research and development projects that lead to innovative applications and products with strong commercial potential in both Switzerland and the UK.
This bilateral call is open exclusively to Swiss and UK partners and aims to strengthen cross-border innovation collaboration.
This project is being developed for the Switzerland-UK bilateral call, supported by Innosuisse and Innovate UK.
For more information see the [Innosuisse, Swiss Innovation Agency](https://www.innosuisse.admin.ch/en/switzerland-uk-call-for-projects) call page.

---

## The project

We are bringing together Swiss and UK partners to build and validate an **open interoperability layer for genomic information**.

The project will provide shared representations, mappings, reference implementations and conformance tests for the information that must remain connected across genomic workflows:

**Provenance → Analysis criteria → Variant interpretation → Clinical context → Supporting evidence**

> **Standardise the handoff, not the algorithm.**

Genome centres, laboratories, hospitals, research organisations and companies remain free to use their own instruments, algorithms, databases and products. The shared layer provides a common way for independent systems to exchange and reuse genomic information without losing the context needed to understand, reproduce and independently evaluate it.

## Partner participation

**We are seeking partners across healthcare, genomics, academia and industry to validate, implement and adopt the shared foundation across real Swiss and UK workflows.**

Partners can contribute at different points in the genomic information chain, including data generation, analysis, clinical use, software implementation, standards development and independent validation.

## From working foundations to shared infrastructure

We have already developed and tested open standards and reference implementations across each major layer of this chain:

**SPHN Omics · QV + QVSS · ACMG Validator · Pedigree · QuantBayes + QEM**

These provide existing scientific, technical and adoption proof. The project will connect and extend these foundations, address remaining interoperability gaps and validate them through independent use across Swiss and UK healthcare, academia and industry.

## Outcome

Success will be demonstrated when independent Swiss and UK organisations can produce, exchange and consume interoperable genomic information without requiring the same vendor or software stack.

The resulting standards and reference implementations will remain open to the wider community. Healthcare and industry can build their own products, algorithms and services on top of the common foundation.

**Shared infrastructure reduces repeated integration. Open implementations accelerate adoption. Common interfaces expand the ecosystem for every compatible provider.**

---

## Existing foundations and reference implementations

The project starts from working, scientifically grounded implementations rather than from a blank specification. Together, these demonstrate key parts of the interoperability layer that the Swiss-UK project will connect, extend and validate across independent organisations.

## 1. Genomic data provenance & interoperability

**Omics semantic implementation**

### Give omics data a shared language.

Maps genomic and omics data into shared semantic structures so hospitals, laboratories, researchers and companies can exchange and reuse information consistently across systems.

Open, ready-to-use mappings and converters for FAIR representations including SPHN-compliant RDF, SQL and other machine-readable formats.

### Implementation & social proof

* SIB Personalized Health Informatics Group, SPHN Omics Guidelines: https://sphn-semantic-framework.readthedocs.io/en/latest/concepts_guidelines/omics_guidelines.html
* Switzerland Omics SPHN implementation: https://genomicvault.switzerlandomics.ch/rdf/sphn_compliance
* SPHN-compliant genomic metadata conversion for clinical and research integration
* Ready-to-use implementation for data generated by genome centres and other omics providers

### Science & standards

van der Horst E, Unni D, Kopmels F, Armida J, Touré V, Franke W, Crameri K, Cirillo E, Österle S. *Bridging Clinical and Genomic Knowledge: An Extension of the SPHN RDF Schema for Seamless Integration and FAIRification of Omics Data.* Preprints.org (2023). DOI: https://doi.org/10.20944/preprints202312.0373.v1.

---

## 2. Reproducible genomic analysis

**Qualifying Variant Framework + QVSS**

### Make genomic analysis criteria portable.

Records the rules used to select genetic variants in a standardised, reusable format, making analyses easier to reproduce, audit and transfer across tools and providers.

Open normative standard with reference implementations for creating and applying human-readable and machine-readable Qualifying Variant specifications.

### Implementation & social proof

* Qualifying Variant database: https://switzerlandomics.ch/technologies/qv_database/
* Open normative standard: [SGA-QVSS-1.0.0](https://www.swissgenomicsassociation.ch/pages/sga_qvss)

### Science & standards

* [Qualifying Variant database](https://switzerlandomics.ch/technologies/qv_database/): reusable criteria for reproducible genomic analysis, described in [Lawless et al. (2026)](https://doi.org/10.1093/bioinformatics/btaf676), *Bioinformatics*.
* [SGA-QVSS-1.0.0](https://www.swissgenomicsassociation.ch/pages/sga_qvss): the Qualifying Variant Set Standard defines a portable, auditable and reusable representation of rule-based criteria for qualifying records of genetic variation. [![DOI](https://zenodo.org/badge/1258109244.svg)](https://doi.org/10.5281/zenodo.20553446)

---

## 3. Variant interpretation & reporting

**ACMG Validator**

### Make variant interpretation consistently reportable.

Structures ACMG/AMP evidence review so criteria, evidence, caveats, completeness and classification decisions are recorded consistently and can be inspected across providers.

Free, open access browser implementation with private local processing and structured PDF, HTML, JSON and Markdown report export.

### Implementation & social proof

* Working ACMG/AMP implementation: https://switzerlandomics.ch/technologies/acmg-validator/
* Capabilities: structured multi-variant review, evidence recording, completeness checking and internal consistency validation
* Outputs: PDF, HTML, JSON and Markdown
* Live web platform: https://switzerlandomics.ch/technologies/acmg-validator/

### Science & standards

Richards S, et al. *Standards and guidelines for the interpretation of sequence variants: a joint consensus recommendation of the American College of Medical Genetics and Genomics and the Association for Molecular Pathology.* Genetics in Medicine (2015). DOI: https://doi.org/10.1038/gim.2015.30.

Tavtigian SV, Harrison SM, Boucher KM, Biesecker LG. *Fitting a naturally scaled point system to the ACMG/AMP variant classification guidelines.* Human Mutation (2020). DOI: https://doi.org/10.1002/humu.24088.

---

## 4. Clinical family context

**Pedigree**

### Make family history portable.

Records pedigrees, relationships, phenotype and genomic findings in a structured, standardised format so clinical family history can be understood and reused across systems.

Free, open access implementation based on established scientific pedigree nomenclature and interoperable healthcare standards including HL7 FHIR.

### Implementation & social proof

* Application: https://switzerlandomics.ch/technologies/pedigree/
* User exports: 2,073 as of July 2026
* User support statements: to add

### Science & standards

Bennett RL, Steinhaus KA, Uhrich SB, et al. *Recommendations for standardized human pedigree nomenclature.* American Journal of Human Genetics. 1995;56:745–752.

Bennett RL, French KS, Resta RG, Doyle DL. *Standardized Human Pedigree Nomenclature: Update and Assessment of the Recommendations of the National Society of Genetic Counselors.* Journal of Genetic Counseling. 2008;17:424–433. https://doi.org/10.1007/s10897-008-9169-9

Bennett RL, French KS, Resta RG, Austin J. *Practice resource-focused revision: Standardized pedigree nomenclature update centered on sex and gender inclusivity.* Journal of Genetic Counseling. 2022;31:1238–1248. https://doi.org/10.1002/jgc4.1621

---

## 5. Evidence reliability & verification

**QuantBayes + QEM**

### Make the evidence behind precision medicine verifiable.

Measures verifiable evidence completeness, making genomic results easier to inspect and compare across providers.

Available as an open source engine for macOS, Linux and R, with a web platform, community profiles and API access.

### Implementation & social proof

* Open source R package and engine: https://switzerlandomics.ch/technologies/quantbayes/
* Open source macOS/Linux engine: https://switzerlandomics.ch/technologies/quantbayes/
* CRAN package downloads: 1,302 as of July 2026
* Desktop software downloads: 793 as of July 2026: https://zenodo.org/records/17919369
* QuantBayes Studio: https://quantbayes.com/
* Open normative standard: [SGA-QEM-1.0.0](https://www.swissgenomicsassociation.ch/pages/sga_qem)
* [QuantBayes engine](/technologies/quantbayes/): quantifies genomic variant evidence sufficiency with Bayesian posterior intervals. [![CRAN version](https://www.r-pkg.org/badges/version/quantbayes)](https://cran.r-project.org/package=quantbayes) [![CRAN downloads](https://cranlogs.r-pkg.org/badges/grand-total/quantbayes)](https://cran.r-project.org/package=quantbayes) [![Zenodo DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.17919369.svg)](https://doi.org/10.5281/zenodo.17919369)

### Science & standards

* Quant Group, et al. *A Bayesian model for quantifying genomic variant evidence sufficiency in Mendelian disease.* medRxiv (2025). DOI: https://doi.org/10.64898/2025.12.02.25341503.
* [SGA-QEM-1.0.0](https://www.swissgenomicsassociation.ch/pages/sga_qem): the Qualifying Evidence Matrix defines a minimal binary matrix for recording whether verifiable evidence is present or absent for evaluated items. [![DOI](https://zenodo.org/badge/1116700370.svg)](https://doi.org/10.5281/zenodo.17936586)

---


## Deployment and accessibility

| Implementation | Public access | Private / local use | Online | Offline secure | HPC / API | Desktop | Non-restrictive licence |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Omics schema | <span class="status-icon status-icon--check" role="img" aria-label="Publicly available" title="Publicly available"></span> | <span class="status-icon status-icon--check" role="img" aria-label="Available for private or local use" title="Available for private or local use"></span> | <span class="status-icon status-icon--cloud-check" role="img" aria-label="Available online" title="Available online"></span> | <span class="status-icon status-icon--shield-check" role="img" aria-label="Available for secure offline use" title="Available for secure offline use"></span> | <span class="status-icon status-icon--check" role="img" aria-label="HPC or API available" title="HPC or API available"></span> | <span class="status-icon status-icon--check" role="img" aria-label="Desktop available" title="Desktop available"></span> | <span class="status-icon status-icon--licence-check" role="img" aria-label="Non-restrictive licence" title="Non-restrictive licence"></span> |
| QV standard | <span class="status-icon status-icon--check" role="img" aria-label="Publicly available" title="Publicly available"></span> | <span class="status-icon status-icon--check" role="img" aria-label="Available for private or local use" title="Available for private or local use"></span> | <span class="status-icon status-icon--cloud-check" role="img" aria-label="Available online" title="Available online"></span> | <span class="status-icon status-icon--shield-check" role="img" aria-label="Available for secure offline use" title="Available for secure offline use"></span> | <span class="status-icon status-icon--check" role="img" aria-label="HPC or API available" title="HPC or API available"></span> | <span class="status-icon status-icon--check" role="img" aria-label="Desktop available" title="Desktop available"></span> | <span class="status-icon status-icon--licence-check" role="img" aria-label="Non-restrictive licence" title="Non-restrictive licence"></span> |
| ACMG validation | <span class="status-icon status-icon--check" role="img" aria-label="Publicly available" title="Publicly available"></span> | <span class="status-icon status-icon--check" role="img" aria-label="Available for private or local use" title="Available for private or local use"></span> | <span class="status-icon status-icon--cloud-check" role="img" aria-label="Available online" title="Available online"></span> | <span class="status-icon status-icon--shield-check" role="img" aria-label="Available for secure offline use" title="Available for secure offline use"></span> | <span class="status-icon status-icon--check" role="img" aria-label="HPC or API available" title="HPC or API available"></span> | <span class="status-icon status-icon--check" role="img" aria-label="Desktop available" title="Desktop available"></span> | <span class="status-icon status-icon--licence-check" role="img" aria-label="Non-restrictive licence" title="Non-restrictive licence"></span> |
| Pedigree | <span class="status-icon status-icon--check" role="img" aria-label="Publicly available" title="Publicly available"></span> | <span class="status-icon status-icon--check" role="img" aria-label="Available for private or local use" title="Available for private or local use"></span> | <span class="status-icon status-icon--cloud-check" role="img" aria-label="Available online" title="Available online"></span> | <span class="status-icon status-icon--shield-check" role="img" aria-label="Available for secure offline use" title="Available for secure offline use"></span> | <span class="status-icon status-icon--check" role="img" aria-label="Available via API" title="Available via API"></span> | <span class="status-icon status-icon--check" role="img" aria-label="Desktop available" title="Desktop available"></span> | <span class="status-icon status-icon--licence-check" role="img" aria-label="Non-restrictive licence" title="Non-restrictive licence"></span> |
| QEM standard | <span class="status-icon status-icon--check" role="img" aria-label="Publicly available" title="Publicly available"></span> | <span class="status-icon status-icon--check" role="img" aria-label="Available for private or local use" title="Available for private or local use"></span> | <span class="status-icon status-icon--cloud-check" role="img" aria-label="Available online" title="Available online"></span> | <span class="status-icon status-icon--shield-check" role="img" aria-label="Available for secure offline use" title="Available for secure offline use"></span> | <span class="status-icon status-icon--check" role="img" aria-label="HPC or API available" title="HPC or API available"></span> | <span class="status-icon status-icon--check" role="img" aria-label="Desktop available" title="Desktop available"></span> | <span class="status-icon status-icon--licence-check" role="img" aria-label="Non-restrictive licence" title="Non-restrictive licence"></span> |

---

## Adoption and validation partners

The project will be validated through independent implementation and use across Switzerland and the UK. Partners will contribute according to their role in the genomic information chain, demonstrating that the shared foundation works across different organisations, systems and commercial models.

| Partner   | Country        | Sector                     | Project role | Validation or adoption commitment                  |
| --------- | -------------- | -------------------------- | ------------ | -------------------------------------------------- |
| [Partner] | CH    | Genome centre / laboratory | Allow mapping | Omics schema, QV |
| [Partner] | CH    | Healthcare                 | Use mapping | Omics schema, Pedigree, QEM |
| [Partner] | CH    | Academia / research        | Use mapping | Omics schema, QV, ACMG |
| [Partner] | CH    | SME / industry             | Allow mapping | Omics schema, QV, QEM |
| [Partner] | UK | Genome centre / laboratory | Allow mapping | Omics schema, QV |
| [Partner] | UK | Healthcare                 | Use mapping | Omics schema, Pedigree, QEM |
| [Partner] | UK | Academia / research        | Use mapping | Omics schema, QV, ACMG |
| [Partner] | UK | SME / industry             | Allow mapping | Omics schema, QV, QEM |

The strongest partner commitments will demonstrate real adoption rather than general endorsement: producing conformant data, consuming another organisation's output, integrating a project standard, validating a reference implementation, or testing a cross-border genomic workflow.

<figure>
  <img
    src="{{ '/images/swiss-uk-genomics/sga_qv_es_A.png' | relative_url }}"
    alt="Innosuisse and Innovate UK"
  >
  <figcaption>
    <strong>Figure</strong>. Swiss Genomics Association.
  </figcaption>
</figure>


<figure>
  <img
    src="{{ '/images/swiss-uk-genomics/qem_and_quantbayes_extended.png' | relative_url }}"
    alt="Innosuisse and Innovate UK"
  >
  <figcaption>
    <strong>Figure</strong>. The qualifying evidence standard and evidence interpretation engine supports verifiable trust.
  </figcaption>
</figure>

<figure>
  <img
    src="{{ '/images/swiss-uk-genomics/acmg_validator_poster_2.png' | relative_url }}"
    alt="Innosuisse and Innovate UK"
  >
  <figcaption>
    <strong>Figure</strong>. ACMG validator.
  </figcaption>
</figure>


## Partners

* Swiss Genomics Association <https://www.swissgenomicsassociation.ch>


## Areas of focus

* Community standard consortium.
* Without conflict to user IP.
* Accreditation.
* Validation studies: research UKBB, AoU, 
* Validation studies: clinical cases, 
* Validation studies: industry with Illumina, Roche Axelios, 
* Validation studies: service, genome centres.

## Review criteria:

* The business need, technological challenge, or market opportunity behind your innovation
* The approach and focus of the innovation
* The project team, resources and their roles
* Target market and market awareness
* Outcomes and route to market
* Wider impact outside the project team
* Added Value

