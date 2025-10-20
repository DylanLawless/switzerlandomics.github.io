---
title: Genomic Vault Pitch
layout: page
description: Pitch
description: Seed funding pitch
permalink: "/pitch_genomic_vault/"
intro_image_absolute: true
intro_image_hide_on_mobile: false
---

---

**Company:** Switzerland Omics [switzerlandomics.ch](https://switzerlandomics.ch)

**Product:** Genomic Vault is secure custody and controlled access for genomes. Private by default. Delivered professionally on demand
(<a href="https://genomicvault.switzerlandomics.ch">see product page</a>).

**Founders:** 12 years of PhD+ experience in applied genomics and statistical modelling. Backed by federal funding and national-scale studies across UZH, EPFL, and ETH Zurich.

**Stage:** Pre-incorporation.

**Request:** CHF xxx for Swiss hosting, legal setup, and scaling infrastructure.

---

<div class="quant-slideshow">
  <img src="/images/pitch_deck/pitch_deck_02/Slide1.png" class="quant-slide" alt="Slide 1">
  <img src="/images/pitch_deck/pitch_deck_02/Slide2.png" class="quant-slide" alt="Slide 2">
  <img src="/images/pitch_deck/pitch_deck_02/Slide3.png" class="quant-slide" alt="Slide 3">
  <img src="/images/pitch_deck/pitch_deck_02/Slide4.png" class="quant-slide" alt="Slide 4">
  <img src="/images/pitch_deck/pitch_deck_02/Slide5.png" class="quant-slide" alt="Slide 5">
  <img src="/images/pitch_deck/pitch_deck_02/Slide6.png" class="quant-slide" alt="Slide 6">
  <img src="/images/pitch_deck/pitch_deck_02/Slide7.png" class="quant-slide" alt="Slide 7">
  <img src="/images/pitch_deck/pitch_deck_02/Slide8.png" class="quant-slide" alt="Slide 8">
  <img src="/images/pitch_deck/pitch_deck_02/Slide9.png" class="quant-slide" alt="Slide 9">
  <img src="/images/pitch_deck/pitch_deck_02/Slide10.png" class="quant-slide" alt="Slide 10">
  <img src="/images/pitch_deck/pitch_deck_02/Slide11.png" class="quant-slide" alt="Slide 11">
  <img src="/images/pitch_deck/pitch_deck_02/Slide12.png" class="quant-slide" alt="Slide 12">
  <img src="/images/pitch_deck/pitch_deck_02/Slide13.png" class="quant-slide" alt="Slide 13">
  <img src="/images/pitch_deck/pitch_deck_02/Slide14.png" class="quant-slide" alt="Slide 14">
  <img src="/images/pitch_deck/pitch_deck_02/Slide15.png" class="quant-slide" alt="Slide 15">
  <img src="/images/pitch_deck/pitch_deck_02/Slide16.png" class="quant-slide" alt="Slide 16">
  <img src="/images/pitch_deck/pitch_deck_02/Slide17.png" class="quant-slide" alt="Slide 17">
  <img src="/images/pitch_deck/pitch_deck_02/Slide18.png" class="quant-slide" alt="Slide 18">
  <img src="/images/pitch_deck/pitch_deck_02/Slide19.png" class="quant-slide" alt="Slide 19">
  <img src="/images/pitch_deck/pitch_deck_02/Slide20.png" class="quant-slide" alt="Slide 20">


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

Genomics is now mainstream, yet data fragments across providers and time. There is no accountable custodian or standard supply chain. Families pay again for fresh work and care is delayed.

---

## <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91c4.59-1.15 8-5.86 8-10.91V5zm-1.06 13.54L7.4 12l1.41-1.41l2.12 2.12l4.24-4.24l1.41 1.41z"/></svg> Our solution

**Genomic Vault** keeps one secure record under the patient’s control.

* Long-term (+10 year) custody of raw files and derived sets in clinical formats
* Private by default with explicit, logged sharing to named recipients
* Standard delivery every time for clinics and research groups
* SPHN-compliant RDF metadata for hospital integration
* Swiss residency, encryption in transit and at rest, full audit trails
* Independent from analysis and from secondary data use

---

## <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 16q1.875 0 3.188-1.312T16.5 11.5t-1.312-3.187T12 7T8.813 8.313T7.5 11.5t1.313 3.188T12 16m0-1.8q-1.125 0-1.912-.788T9.3 11.5t.788-1.912T12 8.8t1.913.788t.787 1.912t-.787 1.913T12 14.2m0 4.8q-3.65 0-6.65-2.037T1 11.5q1.35-3.425 4.35-5.462T12 4t6.65 2.038T23 11.5q-1.35 3.425-4.35 5.463T12 19"/></svg> Vision  

A patient-owned supply chain for genomic data.
Trusted custody for individuals, clinics, research groups, and national programmes.
Better health insurance and better healthcare without disclosing genetic results.

---

## <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2 22q0-2.775.738-4.737T4.624 14T7.2 11.987T10 11V8q-3.425-.425-5.712-2.113T2 2h20q0 2.2-2.287 3.888T14 8v3q1.375.275 2.8.988T19.375 14t1.888 3.263T22 22h-6v-2h3.875q-.45-3.8-2.838-5.5T12 12.8t-5.038 1.7T4.125 20H8v2zm10 0q-.825 0-1.412-.587T10 20q0-.425.163-.775t.437-.625q.6-.6 2.025-1.263T16 16q-.7 1.95-1.35 3.375T13.4 21.4q-.275.275-.625.438T12 22"/></svg> Traction  

* Production portal live with account-based consent and logged sharing
* SPHN RDF metadata and TTL exports ready for hospital systems
* Rare disease special service running with selected cases
* Documentation and legal framework published

---

## <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9 3V1h6v2zm2 11h2V8h-2zm1 8q-1.85 0-3.488-.712T5.65 19.35t-1.937-2.863T3 13t.713-3.488T5.65 6.65t2.863-1.937T12 4q1.55 0 2.975.5t2.675 1.45l1.4-1.4l1.4 1.4l-1.4 1.4Q20 8.6 20.5 10.025T21 13q0 1.85-.713 3.488T18.35 19.35t-2.863 1.938T12 22m0-2q2.9 0 4.95-2.05T19 13t-2.05-4.95T12 6T7.05 8.05T5 13t2.05 4.95T12 20m0-7"/></svg> Product maturity

* Built on a decade of Swiss genomics programmes
* Security controls aligned to ISO 27001, 27017, 27018 roadmap
* Clear roles for controller and processor in institutional deployments

---

## <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2 20V4h20v16zm6-3h2v-1h1q.425 0 .713-.288T12 15v-3q0-.425-.288-.712T11 11H8v-1h4V8h-2V7H8v1H7q-.425 0-.712.288T6 9v3q0 .425.288.713T7 13h3v1H6v2h2zm8-.75l2-2h-4zM14 10h4l-2-2z"/></svg> Finance model

Our finance model combines direct custody revenue with long-term security through a Swiss federally guaranteed reserve bond. Sequencing partners deliver data directly into Genomic Vault, where each genome is preserved for a 10-year cycle under the same structure for institutions and private individuals alike. A portion of all fees funds the reserve bond, ensuring continuity and data protection even in the event of operational or market disruption. Over time, insurers will subsidise access as part of preventive healthcare funding, maintaining full privacy while reducing healthcare costs. This creates a transparent, stable, and legally grounded model for national-scale genomic custody.

---
<!---->
<!-- ## <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2 20V4h20v16zm6-3h2v-1h1q.425 0 .713-.288T12 15v-3q0-.425-.288-.712T11 11H8v-1h4V8h-2V7H8v1H7q-.425 0-.712.288T6 9v3q0 .425.288.713T7 13h3v1H6v2h2zm8-.75l2-2h-4zM14 10h4l-2-2z"/></svg> Use of funds -->
<!---->
<!-- | Purpose                        |        CHF | -->
<!-- | ------------------------------ | ---------: | -->
<!-- | Swiss hosting and backups      |    | -->
<!-- | Key management and monitoring  |    | -->
<!-- | Legal registration and counsel |    | -->
<!-- | Consent UX and portal polish   |    | -->
<!-- | Off-site encrypted storage     |    | -->
<!-- | Security review and hardening  |    | -->
<!-- | Initial capital and ops        |    | -->
<!-- | **Total**                      | **...** | -->
<!---->
<!-- --- -->

## Scientific and regulatory foundation

* revDSG, HGTA, GDPR alignment
* Independent development with public documentation
* Auditable code, data, and finances
* Clear path to ISO 27001, 27017, 27018. Diagnostic standards considered only if scope expands

---

## Impact

* **Patients:** privacy, custody, and fast access when needed
* **Clinics and research:** the same dataset delivered professionally every time
* **Insurers:** lower claim volatility by funding access, without receiving genomic profiles

---

## Who it is for

* Clinical laboratories and variant pipelines
* Research groups and biobanks
* Pharmacogenomics and trial sponsors
* Health insurers seeking compliant prevention programmes


<!-- ## Request -->
<!---->
<!-- Partnerships with clinics, research groups, and insurers, plus CHF 75,000 to complete secure launch and onboarding. -->

