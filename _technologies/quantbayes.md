---
title: "QuantBayes"
date: 2025-01-01T00:00:01+10:00
math: mathjax
weight: 1
---

Gives genomics a shared evidence language.
Every variant. Every pipeline. Every institution.

It does not estimate pathogenicity.
It does not replace your analysis tools. It connects them.

QuantBayes measures how complete and verifiable the evidence is for any variant that your pipeline selects, using a lightning-fast and universal standard that behaves the same everywhere. Laboratories keep their own technology and gain a transparent, reproducible measure of evidence that can move across hospitals, platforms, and countries.

A strongly supported variant might score **0.95 with a 95% credible interval from 0.91 to 0.98**.
A weaker result might score **0.32 with a wider interval**.
The numbers are universal and independent of the pipeline that produced the candidate.

This separates variant discovery from evidence assessment and gives genomics a common, auditable evidence scale that leaves existing systems untouched.

<img src="/images/quantbayes/qv_bayes_short.png" style="width:100 percent; height:auto;">
***Figure 1. From siloed workflows to a universal evidence model***.

---

## Download

<div class="table-responsive" markdown="block">
| OS | File | SHA256 |
| --- | --- | --- |
| R_package | [quantbayes_v0.1.0_R.tar.gz](https://zenodo.org/records/17919369/files/quantbayes_v0.1.0_R.tar.gz?download=1){:download="quantbayes_v0.1.0_R.tar.gz"} | `dfa919d1848070cf8125d49eb029dbfd49d09558cd84deb7d50c1a6c188f1f63` |
| Linux_x86_64 | [quantbayes_v1.0.0_linux_x86_64.tar.gz](https://zenodo.org/records/17919369/files/quantbayes_v1.0.0_linux_x86_64.tar.gz?download=1){:download="quantbayes_v1.0.0_linux_x86_64.tar.gz"} | `440c5d92354285a5b7790d19f017205a849ecb76a4fc80804f726d420f06080d` |
| macOS_universal | [quantbayes_v1.0.0_macos_universal.tar.gz](https://zenodo.org/records/17919369/files/quantbayes_v1.0.0_macos_universal.tar.gz?download=1){:download="quantbayes_v1.0.0_macos_universal.tar.gz"} | `ab8824f0c29fce57328a3037677dbc20768b5a9d388fda1215362d1d3b99291e` |
| macOS_x86_64 | [quantbayes_v1.0.0_macos_x86_64.tar.gz](https://zenodo.org/records/17919369/files/quantbayes_v1.0.0_macos_x86_64.tar.gz?download=1){:download="quantbayes_v1.0.0_macos_x86_64.tar.gz"} | `c15d4ac299d4f557941b1a8518e75c44fd026cf9908edf8e85475b9f9e056035` |
{: .table .table-hover}
</div>

Source code is available in the public repository. The universal macOS binary runs natively on both Intel x86_64 based Macs and Apple silicon arm64 systems. The R package quantbayes is available on CRAN and provides the same core model with optional visualisation tools. The release fork of the R package source can be on [GitHub](https://github.com/DylanLawless/src-quantbayes_package). Downloadable dev [README.html](https://zenodo.org/records/17919369/files/README.html?download=1) file.
Download links are hosted by [Zenodo](https://zenodo.org/records/17919369).

**Verify checksums**

`shasum -a 256 quantbayes_v1.0.0_*.tar.gz`


---


## Installation

QuantBayes is distributed as a standalone binary. It runs directly from the extracted directory, with no system installation and no administrator privileges. This model is compatible with macOS, Linux, HPC environments, and shared compute clusters.

**Download and extract**

`tar -xzf quantbayes_v1.0.0_<platform>.tar.gz`\\
`cd quantbayes`

This creates a directory containing:  
```
quantbayes        (the binary)
quantbayes.1      (manual page)
LICENSE
README.md
```

**Run QuantBayes directly**  
`./quantbayes example_data/test_matrix_01.txt --report`

QuantBayes does not need to be copied into system locations.
You may keep it in any folder where you have execute permissions.

**macOS note**

macOS attaches a quarantine flag to downloaded binaries. 
This behaviour applies to all unsigned scientific software on macOS.
If you see a security warning the first time you run QuantBayes, remove the flag with:  
`xattr -d com.apple.quarantine quantbayes`

**Linux and HPC note**

Most HPC clusters do not allow sudo. QuantBayes can be placed in your home directory or project space and used as is.
Cluster administrators may optionally expose it through an environment module, without any special configuration:\\
`module load quantbayes`

**Optional: add QuantBayes to your PATH**

For convenience:\\
`mkdir -p $HOME/.local/bin`\\
`cp quantbayes $HOME/.local/bin/`\\
`export PATH="$HOME/.local/bin:$PATH"`

To make this permanent, add the export line to `.bashrc` or `.zshrc`.

The manual page can be viewed on most modern macOS and Linux systems:\\
`man -l quantbayes.1`

On systems where man -l is not available (common on HPC clusters):\\
`groff -Tutf8 -man quantbayes.1 | less -R`

---

## Quick start

Run and include a human readable summary:  
`./quantbayes example_data/test_matrix_01.txt --report --out sample1`

Minimal run on the example matrix:  
`./quantbayes example_data/test_matrix_01.txt`

Generate JSON outputs:  
`./quantbayes example_data/test_matrix_01.txt --json`

QuantBayes writes:

* per variant summaries
* global summaries
* optional human readable reports

---

## Example: clinical genetics

A patient was evaluated for genetic disease using Whole Genome Sequencing, which produced a ranked set of candidate variants from a standard prioritisation workflow. QuantBayes assessed the independent evidence available for each candidate using the binary evidence matrix derived from the Evidence Standard rules. These rules cover domains such as inheritance consistency when parental data are available and functional evidence supporting the proposed mechanism.

> For the leading candidate, the posterior evidence sufficiency **$$\theta$$** and its 95 percent credible interval were **0.731 (0.549 to 0.879)**, with a **percentile of 99.88** relative to all evaluated variants in the genome. The global distribution of evidence sufficiency had a mean **$$\theta$$** with a 95 percent credible interval of **0.52 (0.38 to 0.65)**. These values describe how complete the available evidence is, not the probability of pathogenicity.
> 
> **Clinical scenario**: autosomal recessive cystic fibrosis.\\
> **Candidate**: NC_000007.14: g.117559592_117559594delCTT.\\
> **Gene**: *CFTR*.\\
> **QuantBayes $$\theta$$ (theta) 95% CrI**: 0.731 (0.549-0.879).\\
> **Percentile**: 99.88.
> 
> Higher values indicate that most required evidence elements are available.
> Lower values indicate sparse or incomplete support.

---

<div class="table-responsive" markdown="block">
| <span style="white-space: nowrap; display:inline-block; min-width:260px;">variant_id</span> | k  | m  | theta mean | theta lower | theta upper | percentile |
| -------------------------------------------------------- | -- | -- | ---------- | ----------- | ----------- | ---------- |
| <span style="white-space: nowrap; display:inline-block; min-width:260px;">7-117559592-CTT--_AR</span> | 18 | 24 | 0.7308 | 0.5487 | 0.8793 | 99.875 |
| <span style="white-space: nowrap; display:inline-block; min-width:260px;">6-72183475-CG-N_AR</span>   | 18 | 24 | 0.7308 | 0.5487 | 0.8793 | 99.875 |
| <span style="white-space: nowrap; display:inline-block; min-width:260px;">1-14682421-G-A_AD</span>    | 17 | 24 | 0.6923 | 0.5061 | 0.8505 | 99.375 |
| <span style="white-space: nowrap; display:inline-block; min-width:260px;">7-751853912-C-T_AR</span>   | 17 | 24 | 0.6923 | 0.5061 | 0.8505 | 99.375 |
| ... | ... | ... | ... | ... | ... | ... |

{: .table .table-hover}
</div>
***Table 1. QuantBayes results table**. variant_id is the identifier used in the upstream analysis.
k is the number of evidence rules supported by data.
m is the total number of rules evaluated.
theta mean is the posterior expectation of evidence sufficiency.
theta lower and theta upper are the bounds of its credible interval.
percentile shows how the variant ranks relative to all evaluated variants.*

---

<img src="/images/quantbayes/quantbayes_example.png" style="width:100 percent; height:auto;">

***Figure 2: Global evidence sufficiency distribution with candidate overlay**. The grey background shows the genome wide mixture of theta. Overlay lines mark the top prioritised candidates. The red point marks the variant with the strongest evidence sufficiency credible interval.*

---

## Preparing an evidence matrix

QuantBayes expects that candidate variants are first identified by upstream tools or service providers such as [Exomiser](https://exomiser.readthedocs.io), [VarSome](https://varsome.com), [SOPHiA GENETICS](https://www.sophiagenetics.com), or standard clinical pipelines. 
These systems provide analysis results for each variant, but they do not need to disclose internal algorithms or proprietary models. QuantBayes operates on an independent and verifiable evidence checklist, so each candidate can be evaluated in a standardised and reproducible way regardless of how it was generated or prioritised upstream.
To make results comparable across institutions, the Swiss Genomics Association provides a national-scale 


This standard defines how raw annotations map to binary evidence rules. Each rule evaluates one independent domain of support. A short example:

<div class="table-responsive" markdown="block">
| <span style="white-space: nowrap; display:inline-block; min-width:260px;">flag</span> | raw_value | meaning            | interpreted |
| ------------------------------------------------------------------------------------ | ---------- | ------------------- | ----------- |
| <span style="white-space: nowrap; display:inline-block; min-width:260px;">flag_moi_parent_conflict_AD</span> | TRUE       | MOI_conflict        | 0           |
| <span style="white-space: nowrap; display:inline-block; min-width:260px;">flag_moi_parent_conflict_AD</span> | FALSE      | no_conflict         | 1           |
| <span style="white-space: nowrap; display:inline-block; min-width:260px;">flag_moi_parent_conflict_AD</span> | NA         | not_recorded        | 1           |
| <span style="white-space: nowrap; display:inline-block; min-width:260px;">flag_uniprot_hits_any_feature</span> | TRUE       | feature_present     | 1           |
| <span style="white-space: nowrap; display:inline-block; min-width:260px;">flag_uniprot_hits_any_feature</span> | FALSE      | no_known_feature    | NA          |
| <span style="white-space: nowrap; display:inline-block; min-width:260px;">flag_uniprot_hits_any_feature</span> | NA         | missing_flag        | 0           |
{: .table .table-hover}
</div>


Applying these mappings creates the binary evidence matrix that QuantBayes reads.

---

## Matrix input example

The QuantBayes distribution provides an example input database at `tests/data/test_matrix_01.txt`. The first rows are:

<div class="table-responsive" markdown="block">
| 1    | 1    | 0    | 0    | 1    | 1    | 1    | 1    | 1    | 1     | 1     | 1     | 1     | 1     | 1     | NA    | 1     | 1     |
| 1    | 0    | 1    | 0    | 0    | 1    | 1    | 1    | 1    | 1     | 1     | 1     | NA    | NA    | NA    | NA    | NA    | NA    |
| 1    | 1    | 0    | 0    | 1    | 1    | 1    | 1    | 1    | 1     | 1     | 1     | NA    | NA    | NA    | NA    | NA    | NA    |
{: .table .table-hover}
</div>

Each row is a variant. Each column is an evidence rule. A one indicates support. A zero indicates absence or contradiction. NA indicates information that was not available. QuantBayes converts NA to zero internally to maintain universal behaviour.

---

## Method overview

A very simple overview is that QuantBayes models the number of supported evidence items (k) out of (m) using a Beta Binomial update. The posterior
$$\theta \mid k \sim \mathrm{Beta}(1 + k,\; 1 + m - k)$$
provides a reproducible measure of evidence sufficiency, expressed through a posterior mean, a credible interval, and a percentile. 
These values describe how complete and verifiable the available evidence is for each variant. 
They do not estimate pathogenicity.

<img src="/images/quantbayes/qv_quant.png" style="width:100 percent; height:auto;">

***Figure 3. A graphical overview of quantbayes on the Quant Evidence Standard**. The method provides a clear, quantitative measure of how well each variant is supported by the scientific evidence required for Mendelian disease interpretation. Starting from the binary evidence matrix defined by the Qualifying Variant Evidence Standard, Quant ES applies a principled statistical model to measure the completeness of the available evidence. This separates Whole Genome Sequencing outputs from downstream interpretation and delivers a universal, uncertainty-calibrated assessment of evidential credibility.*

---

## The R package

The CRAN package quantbayes implements the same algorithm and adds plotting functions for exploration:

```
install.packages("quantbayes")
library(quantbayes)
x <- as.matrix(read.table("matrix.txt"))
res <- quant_es_core(x)
```

Plots include global theta distributions, credible intervals, and evidence matrices.

---

## Validation

QuantBayes includes a test dataset and example scripts. Running them confirms that the installation matches the reference outputs to floating point precision.

---

## Citation

The quantitative omic epidemiology group, et al. "[A Bayesian model for quantifying genomic variant evidence sufficiency in Mendelian disease](https://www.medrxiv.org/content/10.64898/2025.12.02.25341503v1)" *medRxiv* preprint (2025).\\
[DOI](https://doi.org/10.1101/2025.12.02.25341503) |
[PDF](https://www.medrxiv.org/content/10.64898/2025.12.02.25341503v1.full.pdf) |
[Application](https://switzerlandomics.ch/technologies/quantbayes/)


---

## Licence

QuantBayes is provided under the MIT Licence. A permissive licence ensures that the statistical framework can be inspected, reproduced, and integrated into clinical and research workflows without restrictions. Open availability supports consistent use across institutions and simplifies independent verification.
