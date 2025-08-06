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

**Company:**  
Switzerland Omics GmbH/Sàrl (in formation)  
[switzerlandomics.ch](https://switzerlandomics.ch)

**Product:**  
Quant (<a href="/technologies/quant/">product page</a>)
is the missing layer that makes genomics work.
Interpretable, actionable, and accountable.

**Founders:**  
12 years of PhD-level experience in applied genomics and statistical modelling. 
Backed by federal funding, national-scale clinical studies, and six years of development across UZH, EPFL, and ETH Zurich. 
Supported by senior advisors with academic, commercial, and regulatory expertise.

**Stage:** Pre-incorporation.  
**Grant requested:** CHF 75,000 for legal setup and secure infrastructure.

---

## Pitch deck

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

## 🧭 The gap

Genomic sequencing is fast and affordable. But interpretation remains the bottleneck.

Clinical and pharmaceutical decisions depend on variant interpretation - yet current methods are fragmented, uncertain, and incomplete.

> This is a 100-year-old problem requiring data and algorithms. Despite decades of theory, no complete solution existed until now.

---

## 🧬 Our solution
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

## 📈 Vision  
Quant brings a generational shift in how genetic variation is understood.
* Our long-term goal is to license Quant across diagnostics, drug pipelines, and commercial genomics.  
* A free tier is popularising our work through open-source, academically licensed software and datasets.  
* We continue to build complementary products, including **PanelAppRex AI** (curated gene panels), **Dante** (AI-assisted clinical reporting), and related public/private databases to support scalable growth.

---

## 📍 Traction  
- Used in national rare disease diagnostics (Switzerland).
- Users of our documentation, codebase, and datasets.
- 2000+ online users.
- 300+ database users (i.e. downloads suitable for professionals).

---

## 🧱 Product maturity

- 6 years of development at UZH, EPFL, ETH Zurich.  
- Peer-reviewed publications and cohort-scale validation.  
- Ready-to-use tools: **Quant db**, **Quant scan**, **Quant calc**, **QV database**, **PanelAppRex AI**.

---

## 💰 Use of funds (CHF 75,000)

| Purpose                    | Estimate (CHF) |
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

*Covers full legal and operational setup and enables release of our full suite.*

---

## 🌍 Scientific and regulatory foundation

- Independent development with open-access, peer-reviewed validation.  
- Prior art discovery confirming **freedom to operate**.  
- Public documentation; auditable code, data, and financials.  
- **Regulation-ready** for CH, EU, and US (EudraLex, ICH, FDA).

---

## 🧪 Impact

* **Research partnerships**  
Joint exploration of inference models, variant priors, or statistical architectures.

* **Technology integration**  
Embed Quant, PanelAppRex AI, or other tools into internal pipelines with production-ready code, formats, and documentation.

* **Co-development**  
Build custom datasets, metrics, or systems, grounded in shared standards, calibrated evidence, and mutual accountability.

---

## 🤝 Who it's for

We collaborate with partners who build:

- AI models for genomic interpretation.  
- Pharmacogenomics systems.  
- Genome editing and design platforms.  
- Large-scale population reference datasets.  
- Clinical diagnostics and variant pipelines.  
- Digital twin platforms for personalised simulation.  

---

## ✅ Request

We seek:

- CHF 75,000 seed grant for company registration and launch infrastructure.  
- Collaboration with investors, institutions, and partners ready to scale robust genomic interpretation.  



