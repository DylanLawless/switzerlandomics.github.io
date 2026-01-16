---
title: "Evidence ratio"
date: 2026-01-01
math: mathjax
weight: 2
---

Provides a standard way to report statistical evidence. 
Works across clinical and biomedical analyses. 
Enables results to be compared, stored, and reused across studies.

Evidence Ratio defines how evidence strength is reported, independent of how analyses are performed.

<div class="download-actions">
  <a class="download-card"
     href="https://github.com/DylanLawless/src-evidenceratio_package"
     aria-label="Source code">
    <span class="download-icon" aria-hidden="true">↗</span>
    <span class="download-text">
      <span class="download-title">Source code</span>
      <span class="download-sub">GitHub repository</span>
    </span>
  </a>

<a class="download-card"
   href="#installation"
   aria-label="R package installation">
  <span class="download-icon" aria-hidden="true">R</span>
  <span class="download-text">
    <span class="download-title">R package</span>
    <span class="download-sub">Installation</span>
  </span>
</a>

</div>

<!-- <div class="licence-box licence-box-1"> -->
<!--   <div class="licence-section licence-current"> -->
<!--     <div class="licence-title">Licence</div> -->
<!--     <div class="licence-free">Free</div> -->
<!--     <div class="licence-caption">Open source.</div> -->
<!--     <div class="licence-caption">MIT licence.</div> -->
<!--   </div> -->
<!-- </div> -->
<!---->
<!-- <br> -->

<div class="licence-box licence-box-3">
  <div class="licence-section licence-previous">
    <div class="licence-title">Previously</div>

    <div class="licence-prices">
      <div class="price-line">
        <span class="price-strike">Academic</span>
      </div>
      <div class="price-line">
        <span class="price-strike">CHF 0 / year</span>
      </div>

      <div class="price-line" style="margin-top:8px;">
        <span class="price-strike">Small laboratories</span>
      </div>
      <div class="price-line">
        <span class="price-strike">CHF 600 / year</span>
      </div>

      <div class="price-line" style="margin-top:8px;">
        <span class="price-strike">Large industry</span>
      </div>
      <div class="price-line">
        <span class="price-strike">CHF 1,000+ / year</span>
      </div>
    </div>

    <!-- <div class="licence-caption">Typical licensing tiers</div> -->
  </div>

  <div class="licence-section licence-current">
    <div class="licence-title">Now</div>
    <div class="licence-free">Free</div>
    <div class="licence-caption">Open licence.</div>
    <div class="licence-caption">Forever.</div>
  </div>

  <div class="licence-section licence-why">
    <div class="licence-title">Why</div>
    <p class="licence-why-text">
      Evidence ratio adopts a shared evidence standard. Foundational tools must be unrestricted so results can move safely between laboratories, hospitals, and national programmes.
    </p>
    <a href="/why-open" class="licence-why-link">
      Read more
    </a>
  </div>
</div>

<br>

Evidence Ratio does not change how analyses are run. 
It standardises how their evidence is reported.

<img src="/images/evidenceratio/evidenceratio_logo_red_hex.png"
     class="evidenceratio-hero"
     alt="Evidence Ratio logo">

---

## Installation

Until the package is available on CRAN, you can install the development version directly from GitHub.

Option 1: install from GitHub

```r
install.packages("devtools")
devtools::install_github("DylanLawless/src-evidenceratio_package")
```

Option 2: install from a local clone

If you have cloned the repository locally:

```r
install.packages("devtools")
devtools::install("path/to/evidenceratio_package", upgrade = "never", clean = TRUE)
```

Verify installation

```r
library(evidenceratio)
help(package = "evidenceratio")
```

---

## What Evidence Ratio does

Clinical trials and biomedical studies analyse heterogeneous endpoints using appropriate statistical models. These analyses are methodologically sound, but their results are reported in incompatible formats.

Evidence Ratio introduces a single likelihood based evidence scale that accompanies existing effect estimates and uncertainty intervals. This scale behaves consistently across outcomes, models, and studies.

The result is a shared evidence unit that travels cleanly between trials, endpoints, databases, and institutions.

---

## What Evidence Ratio does not do

Evidence Ratio does not replace statistical models.  
It does not define decision thresholds.  
It does not assess clinical or practical importance.  
It does not perform multiplicity correction.  
It does not replace effect sizes or uncertainty intervals.

Evidence Ratio operates only at the level of reporting.

---

## Conceptual role

Each statistical result contains three distinct components.

Magnitude is captured by the _effect estimate_.  
Precision is captured by the _uncertainty interval_.  
Evidence is captured by a _likelihood ratio_ comparing an explicit effect model with a no effect model.

Evidence Ratio formalises this evidence component and reports it on a common log10 scale. Existing analyses remain unchanged.

---

## Why this streamlines clinical trials

Clinical trials routinely report multiple endpoints analysed using different models. These results are difficult to compare side by side.
Evidence Ratio gives every endpoint the same evidence unit. This allows heterogeneous results to be aligned in a single table, forest plot, dashboard, or database.
This supports multi endpoint trials, platform trials, meta analysis, regulatory review, and secondary data reuse.

---

## Example output

Each result is reported using the same three quantities.

<div class="table-responsive" markdown="block">
| Effect estimate | Uncertainty interval (95 percent) | log10 evidence ratio |
| --- | --- | --- |
| −1.18 | [−1.62, −0.74] | 12.87 |
{: .table .table-hover}
</div>

The effect and interval remain on their native scale.
The evidence ratio provides a directly comparable measure of evidence support.

<div class="er-card">

  <div class="er-header">Effect estimate</div>

  <div class="er-scale-wrapper">
    <div class="er-estimate-center">−1.18</div>

    <div class="er-scale">
      <span class="er-bound">−1.62</span>

      <div class="er-line">
        <div class="er-point"></div>
      </div>

      <span class="er-bound">−0.74</span>
    </div>
  </div>

  <div class="er-evidence">
    <div class="er-evidence-value">12.87</div>
    <div class="er-evidence-label">log10 evidence ratio</div>
  </div>
</div>

---

## Unified reporting across analyses

<div class="table-responsive" markdown="block">
| Analysis type | Effect estimate | Uncertainty interval (95 percent) | log10 E(x) |
| --- | --- | --- | --- |
| One sample mean test | 0.42 | [0.21, 0.63] | 2.91 |
| Two sample mean test | −1.18 | [−1.62, −0.74] | 12.87 |
| Binary outcome association | 0.36 | [−0.22, 0.94] | 0.44 |
| Linear regression | −0.51 | [−1.19, 0.17] | 0.24 |
| Regression coefficient | −5.41 | [−6.18, −4.63] | 16.95 |
| Time to event analysis | −0.22 | [−0.52, 0.08] | 0.58 |
| Survival analysis | 0.88 | [0.61, 1.15] | 6.82 |
{: .table .table-hover}
</div>

Different outcome types retain their native effect measures while sharing a common evidence scale.

---


## Method overview

The evidence ratio is defined as a likelihood ratio comparing an effect model with a no effect model. It is reported on the log10 scale.
Under the null model, large evidence values are rare. This provides finite sample validity without introducing decision thresholds.
Further details are provided in the accompanying manuscript.

---

## Standards and implementation

Evidence Ratio is implemented in the `evidenceratio` R package.
It conforms to the Evidence Ratio Reporting Standard (SGA-ERRS-1.0), published by the Swiss Genomics Association.
<a href="https://www.swissgenomicsassociation.ch/pages/sga_errs/">
  View the ERRS standard
</a>

---

  <style>
    .er-card {
      max-width: 520px;
      margin: 2rem auto;
      padding: 1.6rem 1.8rem;
      border: 1px solid #e1e1eb;
      border-radius: 10px;
      background: #ffffff;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
      color: #2f2f41;
    }

    .er-header {
      font-size: 0.9rem;
      color: #6a6a7a;
      margin-bottom: 1.1rem;
    }

    .er-scale-wrapper {
      position: relative;
      margin-bottom: 0.9rem;
    }

    .er-estimate-center {
      position: absolute;
      top: -1.4rem;
      left: 50%;
      transform: translateX(-50%);
      font-size: 1.05rem;
      font-weight: 600;
      background: #ffffff;
      padding: 0 0.4rem;
      line-height: 1;
    }

    .er-scale {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      gap: 0.75rem;
    }

    .er-line {
      position: relative;
      height: 4px;
      background: #d8d8e5;
      border-radius: 2px;
    }

    .er-point {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 14px;
      height: 14px;
      background: #2f2f41;
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }

    .er-bound {
      font-size: 0.85rem;
      color: #6a6a7a;
      white-space: nowrap;
    }

    .er-evidence {
      margin-top: 1.4rem;
      text-align: right;
    }

    .er-evidence-value {
      font-size: 1.6rem;
      font-weight: 600;
      line-height: 1.1;
    }

    .er-evidence-label {
      font-size: 0.8rem;
      color: #6a6a7a;
    }

    @media (max-width: 480px) {
      .er-evidence {
        text-align: left;
      }
    }
  </style>

<style>
.evidenceratio-hero {
  width: 40%;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 768px) {
  .evidenceratio-hero {
    width: 50%;
  }
}
</style>
