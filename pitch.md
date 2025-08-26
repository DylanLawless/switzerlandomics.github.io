---
title: Quant seed funding pitch
layout: page
description: Pitch
description: Seed funding pitch
permalink: "/pitch/"
intro_image_absolute: true
intro_image_hide_on_mobile: false
---

---

<!-- Icon source -->
<!-- https://icon-sets.iconify.design/material-symbols/page-2.html?icon-filter=slide -->

**Company:** Switzerland Omics GmbH/Sàrl (in formation) [switzerlandomics.ch](https://switzerlandomics.ch).

**Product:** Quant is the missing layer that makes genomics work.
Interpretable, actionable, and accountable
(<a href="/technologies/quant/">see product page</a>).

**Founders:** 12 years of PhD+ experience in applied genomics and statistical modelling. 
Backed by federal funding, national-scale clinical studies, and six years of development across UZH, EPFL, and ETH Zurich. 
Supported by senior advisors with academic, commercial, and regulatory expertise.

**Stage:** Pre-incorporation.  

**Grant requested:** CHF 75,000 for legal setup and secure infrastructure.

---

<div class="quant-slideshow">
  <img src="/images/pitch_deck/pitch_deck_01/Slide1.png" class="quant-slide" alt="Slide 1">
  <img src="/images/pitch_deck/pitch_deck_01/Slide2.png" class="quant-slide" alt="Slide 2">
  <img src="/images/pitch_deck/pitch_deck_01/Slide3.png" class="quant-slide" alt="Slide 3">
  <img src="/images/pitch_deck/pitch_deck_01/Slide4.png" class="quant-slide" alt="Slide 4">
  <img src="/images/pitch_deck/pitch_deck_01/Slide5.png" class="quant-slide" alt="Slide 5">
  <img src="/images/pitch_deck/pitch_deck_01/Slide6.png" class="quant-slide" alt="Slide 6">
  <img src="/images/pitch_deck/pitch_deck_01/Slide7.png" class="quant-slide" alt="Slide 7">
  <img src="/images/pitch_deck/pitch_deck_01/Slide8.png" class="quant-slide" alt="Slide 8">
  <img src="/images/pitch_deck/pitch_deck_01/Slide9.png" class="quant-slide" alt="Slide 9">
  <img src="/images/pitch_deck/pitch_deck_01/Slide10.png" class="quant-slide" alt="Slide 10">

  <div class="quant-controls">
    <button onclick="quantPrevSlide()">← Previous</button>
    <button onclick="quantNextSlide()">Next →</button>
  </div>
</div>

<style>
  .quant-slideshow {
    margin: 2rem 0;
  }
  .quant-slide {
    display: none;
    width: 100%;
    height: auto;
  }
  .quant-slide.quant-active {
    display: block;
  }
  .quant-controls {
    text-align: center;
    margin-top: 0.5rem;
  }
  .quant-controls button {
    background: #eee;
    border: none;
    padding: 0.4rem 0.8rem;
    margin: 0 0.4rem;
    cursor: pointer;
  }
</style>

<script>
  const quantSlides = document.querySelectorAll('.quant-slide');
  let quantCurrent = 0;

  function quantShowSlide(index) {
    quantSlides.forEach((slide, i) => {
      slide.classList.toggle('quant-active', i === index);
    });
  }

  function quantNextSlide() {
    quantCurrent = (quantCurrent + 1) % quantSlides.length;
    quantShowSlide(quantCurrent);
  }

  function quantPrevSlide() {
    quantCurrent = (quantCurrent - 1 + quantSlides.length) % quantSlides.length;
    quantShowSlide(quantCurrent);
  }

  // Show first slide on load
  quantShowSlide(quantCurrent);
</script>

---

## <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M1 21h22L12 2zm12-3h-2v-2h2zm0-4h-2v-4h2z"/></svg> The gap

Genomic sequencing is fast and affordable. But interpretation remains the bottleneck.

Clinical and pharmaceutical decisions depend on variant interpretation - yet current methods are fragmented, uncertain, and incomplete.

> This is a 100-year-old problem requiring data and algorithms. Despite decades of theory, no complete solution existed until now.

---

## <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91c4.59-1.15 8-5.86 8-10.91V5zm-1.06 13.54L7.4 12l1.41-1.41l2.12 2.12l4.24-4.24l1.41 1.41z"/></svg> Our solution
Quant (<a href="/technologies/quant/">product page</a>)
is the first calibrated, genome-wide framework that turns raw variant evidence into interpretable, probabilistic Bayesian conclusions.
It is a statistical engine and product suite.
It consists of three interoperable tools:

- **Quant database**: pre-computed genome-wide priors.  
- **Quant scan**: prepares and structures customer input.  
- **Quant calc**: performs probabilistic inference and outputs credible intervals.

Capabilities:

- Genome and variant-level confidence outputs with full uncertainty accounting.  
- Tailored priors for dominant, recessive, and X-linked models in disease.  
- Integration of trusted databases including allele frequencies and clincal genetics.  
- Validated on national-scale disease datasets.

---

## <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 16q1.875 0 3.188-1.312T16.5 11.5t-1.312-3.187T12 7T8.813 8.313T7.5 11.5t1.313 3.188T12 16m0-1.8q-1.125 0-1.912-.788T9.3 11.5t.788-1.912T12 8.8t1.913.788t.787 1.912t-.787 1.913T12 14.2m0 4.8q-3.65 0-6.65-2.037T1 11.5q1.35-3.425 4.35-5.462T12 4t6.65 2.038T23 11.5q-1.35 3.425-4.35 5.463T12 19"/></svg> Vision  
Quant brings a generational shift in how genetic variation is understood.
* Our long-term goal is to license Quant across diagnostics, drug pipelines, and commercial genomics.  
* A free tier is popularising our work through open-source, academically licensed software and datasets.  
* We continue to build complementary products, including **PanelAppRex AI** (curated gene panels), **Dante** (AI-assisted clinical reporting), and related public/private databases to support scalable growth.

---

## <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2 22q0-2.775.738-4.737T4.624 14T7.2 11.987T10 11V8q-3.425-.425-5.712-2.113T2 2h20q0 2.2-2.287 3.888T14 8v3q1.375.275 2.8.988T19.375 14t1.888 3.263T22 22h-6v-2h3.875q-.45-3.8-2.838-5.5T12 12.8t-5.038 1.7T4.125 20H8v2zm10 0q-.825 0-1.412-.587T10 20q0-.425.163-.775t.437-.625q.6-.6 2.025-1.263T16 16q-.7 1.95-1.35 3.375T13.4 21.4q-.275.275-.625.438T12 22"/></svg> Traction  
- Used in national rare disease diagnostics (Switzerland).
- Users of our documentation, codebase, and datasets.
- 2000+ online users.
- 300+ database users (i.e. downloads suitable for professionals).

---

## <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9 3V1h6v2zm2 11h2V8h-2zm1 8q-1.85 0-3.488-.712T5.65 19.35t-1.937-2.863T3 13t.713-3.488T5.65 6.65t2.863-1.937T12 4q1.55 0 2.975.5t2.675 1.45l1.4-1.4l1.4 1.4l-1.4 1.4Q20 8.6 20.5 10.025T21 13q0 1.85-.713 3.488T18.35 19.35t-2.863 1.938T12 22m0-2q2.9 0 4.95-2.05T19 13t-2.05-4.95T12 6T7.05 8.05T5 13t2.05 4.95T12 20m0-7"/></svg> Product maturity

- 6 years of development at UZH, EPFL, ETH Zurich.  
- Peer-reviewed publications and cohort-scale validation.  
- Ready-to-use tools: **Quant db**, **Quant scan**, **Quant calc**, **QV database**, **PanelAppRex AI**.

---

## <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2 20V4h20v16zm6-3h2v-1h1q.425 0 .713-.288T12 15v-3q0-.425-.288-.712T11 11H8v-1h4V8h-2V7H8v1H7q-.425 0-.712.288T6 9v3q0 .425.288.713T7 13h3v1H6v2h2zm8-.75l2-2h-4zM14 10h4l-2-2z"/></svg> Use of funds

| Purpose                    | CHF |
| ---------------------------| --------------:|
| Legal registration (GmbH)  |         3'000  |
| Legal setup and banking    |         2'000  |
| Secure Swiss cloud servers |        10'000  |
| Secure off-site NAS 20TB   |         5'000  |
| Launch of public Quant     |         3'000  |
| Initial capital            |        20'000  |
| Other (hardware, ops)      |        23'500  |
| Partial salary             |         8'500  |
| ---------------------------| --------------:|
| **Total**                  |    **75'000**  |

*Covers full legal and operational setup and enables release of our full suite. 
Includes [audit-compliant financials](https://docs.switzerlandomics.ch/pages/financial_management.html) and [secure data infrastructure planning](https://docs.switzerlandomics.ch/pages/storage_architecture_plan.html).*

---

## <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8.075 20q-.275 0-.512-.137t-.363-.388L5.25 16H6.7l1 2H10v-1H8.3l-1-2H4.7l-1.425-2.5q-.05-.125-.087-.25T3.15 12q0-.1.125-.5L4.7 9h2.6l1-2H10V6H7.7l-1 2H5.25L7.2 4.525q.125-.25.362-.387T8.076 4H10.5q.425 0 .713.288T11.5 5v4H10l-1 1h2.5v3H9.3l-1-2H6l-1 1h2.7l1 2h2.8v5q0 .425-.288.713T10.5 20zm5.425 0q-.425 0-.712-.288T12.5 19v-5h2.8l1-2H19l-1-1h-2.3l-1 2h-2.2v-3H15l-1-1h-1.5V5q0-.425.288-.712T13.5 4h2.425q.275 0 .513.138t.362.387L18.75 8H17.3l-1-2H14v1h1.7l1 2h2.6l1.425 2.5q.05.125.088.25t.037.25q0 .1-.125.5L19.3 15h-2.6l-1 2H14v1h2.3l1-2h1.45l-1.95 3.475q-.125.25-.363.388t-.512.137z"/></svg> Scientific and regulatory foundation

- Independent development with open-access, peer-reviewed validation.  
- Prior art discovery confirming **freedom to operate**.  
- Public documentation; auditable code, data, and financials.  
- **Regulation-ready** for CH, EU, and US (EudraLex, ICH, FDA).

---

## <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m9.675 13.7l.875-2.85L8.25 9h2.85l.9-2.8l.9 2.8h2.85l-2.325 1.85l.875 2.85l-2.3-1.775zM6 23v-7.725q-.95-1.05-1.475-2.4T4 10q0-3.35 2.325-5.675T12 2t5.675 2.325T20 10q0 1.525-.525 2.875T18 15.275V23l-6-2zm6-7q2.5 0 4.25-1.75T18 10t-1.75-4.25T12 4T7.75 5.75T6 10t1.75 4.25T12 16"/></svg> Impact

* **Research partnerships**  
Joint exploration of inference models, variant priors, or statistical architectures.

* **Technology integration**  
Embed Quant, PanelAppRex AI, or other tools into internal pipelines with production-ready code, formats, and documentation.

* **Co-development**  
Build custom datasets, metrics, or systems, grounded in shared standards, calibrated evidence, and mutual accountability.

---

## <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2.1 11.1L0 9q2.375-2.425 5.488-3.713T12 4q.6 0 1.2.038t1.2.112l-1.5 2.9q-.225-.025-.45-.038T12 7Q9.2 7 6.637 8.063T2.1 11.1m4.25 4.25l-2.1-2.15q1.425-1.425 3.275-2.225t3.875-.925l-1.6 3.275q-.975.275-1.85.788t-1.6 1.237m4.95 4.5q-.825-.275-1.2-1.037t0-1.513l6-12.2q.1-.2.3-.262t.4.012t.3.263t.05.387L13.9 18.65q-.2.825-.987 1.175t-1.613.025m6.35-4.5q-.175-.175-.337-.312t-.363-.288l.8-3.125q.525.35 1.038.738t.962.837zm4.225-4.225q-.8-.725-1.638-1.375T18.45 8.6l.7-3q1.35.65 2.575 1.5T24 9z"/></svg> Who it's for

We collaborate with partners who build:

- AI models for genomic interpretation.  
- Pharmacogenomics systems.  
- Genome editing and design platforms.  
- Large-scale population reference datasets.  
- Clinical diagnostics and variant pipelines.  
- Digital twin platforms for personalised simulation.  

---

## <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17q.825 0 1.413-.587T14 15t-.587-1.412T12 13t-1.412.588T10 15t.588 1.413T12 17m-8 5V8h9V6q0-2.075 1.463-3.537T18 1t3.538 1.463T23 6h-2q0-1.25-.875-2.125T18 3t-2.125.875T15 6v2h5v14z"/></svg> Request

We seek:

- CHF 75,000 seed grant for company registration and launch infrastructure.  
- Collaboration with investors, institutions, and partners ready to scale robust genomic interpretation.  



