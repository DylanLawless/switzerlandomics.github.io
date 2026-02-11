---
title: "Archipelago"
date: 2026-01-01
math: mathjax
weight: 1
---

Manhattan plots are for GWAS. 
Archipelago plots are for complex variant association studies.

Archipelago connects variant set association tests and single-variant tests (e.g. GWAS) into a single, interpretable genomic view, without changing how either analysis is performed.

<img src="/images/archipelago/logo_and_illustration.jpeg"
     style="width:100%; height:auto; display:block; margin-left:auto; margin-right:auto;">

<div class="download-actions">
  <a class="download-card"
     href="https://cran.r-project.org/package=archipelago"
     aria-label="R package on CRAN">
    <span class="download-icon" aria-hidden="true">R</span>
    <span class="download-text">
      <span class="download-title">R package</span>
      <span class="download-sub">CRAN installation</span>
    </span>
  </a>

  <a class="download-card"
     href="https://github.com/DylanLawless/archipelago"
     aria-label="Source code">
    <span class="download-icon" aria-hidden="true">↗</span>
    <span class="download-text">
      <span class="download-title">Source code</span>
      <span class="download-sub">GitHub repository</span>
    </span>
  </a>
</div>

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
        <span class="price-strike">Industry</span>
      </div>
      <div class="price-line">
        <span class="price-strike">Restricted</span>
      </div>
    </div>
  </div>

  <div class="licence-section licence-current">
    <div class="licence-title">Now</div>
    <div class="licence-free">Free</div>
    <div class="licence-caption">MIT licence.</div>
    <div class="licence-caption">Open source.</div>
  </div>

  <div class="licence-section licence-why">
    <div class="licence-title">Why</div>
    <p class="licence-why-text">
      Archipelago is an interpretation layer. Visual standards for large-scale association studies must be reusable across projects, institutions, and publications.
    </p>
  </div>
</div>

<br>

Archipelago does not perform association testing.  

It does not replace GWAS, RVAT, or VSAT methods. 
It visualises results you already trust.

Variant set association tests are powerful but lack intrinsic genomic coordinates. Single-variant GWAS provides spatial context but misses aggregated effects. Archipelago assigns each variant set a meaningful genomic position derived from its constituent variants, enabling joint interpretation of set-level and variant-level signals in a familiar genome-wide frame.

<!-- archipelago_logo_hex.png -->
 

<img src="/images/archipelago/archipelago_plot_ukbb_subset.png"
     style="width:100%; height:auto; display:block; margin-left:auto; margin-right:auto;">

**Archipelago plots in BioBank-scale analysis**. Pan-UK Biobank (n=469,382) platelet distribution width trait using WES GWAS and DeepRVAT gene-level VSAT (data trimmed at 1e-75 for distracting outliers) (Clarke et al. 2024; Karczewski et al. 2024). GWAS background downsampled. For more examples see the citation below. 

---

## When Archipelago is most useful

Archipelago is useful whenever variant collapse is used and an association signal is present.

It applies equally to small cohorts and large population studies. As with any GWAS or RVAT, usefulness depends on detectability, not on sample size alone. Variant collapse increases power within genes, pathways, or other sets; Archipelago then maps those set-level signals back to their underlying genomic drivers.

Archipelago is therefore most informative when set-level and single-variant results need to be interpreted together in genomic context, rather than read as disconnected rankings.

This holds for focused disease cohorts as well as biobank-scale sequencing studies.

---

## Validated use cases

Archipelago has been validated across three complementary settings:

**1000 Genomes (1KG)**  
Small cohort validation demonstrating conceptual correctness and controlled behaviour in pathway-level VSAT combined with GWAS.

**Pan-UK Biobank with DeepRVAT**  
Hundreds of thousands of individuals, millions of SNPs, and gene-level rare variant association tests integrated with GWAS, demonstrating scalability and interpretability.

**UK Biobank WGS UTR PheWAS**  
Whole-genome sequencing with rare non-coding burden, showing how set-level UTR signals map back to individual GWAS variants in a clinically interpretable positive control.

These settings demonstrate Archipelago's ability to unify association signals across variant resolution and genetic architecture.

---

## Installation

Install the released R package from CRAN:

```r
install.packages("archipelago")
library(archipelago)
````

Source: [cran.r-project archipelago](https://cran.r-project.org/package=archipelago) (for installation see below).  
![CRAN status](https://www.r-pkg.org/badges/version/archipelago)
![CRAN downloads](https://cranlogs.r-pkg.org/badges/grand-total/archipelago)

---

## Example workflow

Provide two inputs:

* Variant set association test results.
* Single-variant association results annotated with a shared set identifier.

Generate an integrated plot:

```r
archipelago_plot(vsat_results, variant_results)
```

Archipelago returns a publication-ready figure suitable for dense genome-wide studies.

### Demo 

```r
install.packages("archipelago")
library(archipelago)

??archipelago()

# example data
data("vsat_pval", package = "archipelago")
data("variant_pval", package = "archipelago")

head(vsat_pval)
# e.g. SKAT-O results
#   set_ID           P
# 1      1 0.002039443
# 2      2 0.003459603
# 3      3 0.060544051

head(variant_pval)
# e.g. GWAS results
#   set_ID     BP         P CHR    SNP
# 1      1 351696 0.9211610   6 351696
# 2      2 988282 0.8652950   9 988282
# 3      3 929171 0.6916336  12 929171

p_basic <- archipelago_plot(
  df1 = vsat_pval,
  df2 = variant_pval,
  output_path = tempfile(),
  output_raw  = tempfile()
)

print(p_basic)
```

---

## Citation

If you use Archipelago, please cite the published article.

**Manuscript**

Lawless, Dylan, et al. "[Archipelago method for variant set association test statistics](https://www.medrxiv.org/content/10.1101/2025.03.17.25324111v1)" *Genetic Epidemiology* (2026).\\
[Preprint](https://doi.org/10.1101/2025.03.17.25324111) | 
[DOI](https://doi.org/10.1002/gepi.70025) |
[PDF](https://onlinelibrary.wiley.com/doi/epdf/10.1002/gepi.70025) | 
[Repository](https://github.com/DylanLawless/archipelago) |
[Application](https://switzerlandomics.ch/technologies/archipelago/) (this page).


<pre class="code-copy">
@article{2025lawlessArchipelagoMethodVariant,
  author  = {Lawless, Dylan and Saadat, Ali and Oumelloul, Mariam Ait and Schlapbach, Luregn J. and Fellay, Jacques},
  title   = {Archipelago Method for Variant Set Association Test Statistics},
  journal = {Genetic Epidemiology},
  volume  = {50},
  number  = {1},
  pages   = {e70025},
  year    = {2026},
  doi     = {10.1002/gepi.70025},
  url     = {https://onlinelibrary.wiley.com/doi/abs/10.1002/gepi.70025}
}
</pre>

---

## Licence

Archipelago is released under the MIT Licence.
It may be used, modified, and embedded in research and commercial pipelines without restriction.


