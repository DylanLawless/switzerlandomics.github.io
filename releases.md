---
title: Releases
layout: page
description: Releases
permalink: "/releases/"
intro_image_absolute: true
intro_image_hide_on_mobile: false
---

* **VCFheader browser**: Drag and drop web browser version of VCFheader.\
[Application](https://switzerlandomics.ch/technologies/vcfheader/browser) | Version: 0.1.0 | 2026-05-11

* **VCFheader R**: R package available on CRAN.\
[Application](https://switzerlandomics.ch/technologies/vcfheader/) | 
[CRAN](https://cran.r-project.org/package=vcfheader) | Version: 0.1.0 | 2026-03-07 | ![CRAN status](https://www.r-pkg.org/badges/version/vcfheader)
![CRAN downloads](https://cranlogs.r-pkg.org/badges/grand-total/vcfheader)

* **VCFheader MacOS and Linux**: Software packages.\
[Application](https://switzerlandomics.ch/technologies/vcfheader/) | Version: 0.1.0 | 2026-03-07  

* **Archipelago**: R package for summary and interpretation of variant set association test statistics (GitHub).\
[DOI](https://doi.org/10.1101/2025.03.17.25324111) | 
[PDF](https://www.medrxiv.org/content/10.1101/2025.03.17.25324111v2.full.pdf) | 
[Repository](https://github.com/DylanLawless/archipelago) | Version 0.1.0 | 2026-02-10 | 
[![CRAN version](https://www.r-pkg.org/badges/version/archipelago)](https://cran.r-project.org/package=archipelago) [![CRAN downloads](https://cranlogs.r-pkg.org/badges/grand-total/archipelago)](https://cran.r-project.org/package=archipelago)

* **Evidence ratio**: a universal metric for clinical trials and studies by standardising results on a likelihood-based evidence scale, described in [Lawless (2026)](https://cran.r-project.org/package=evidenceratio).  
[Application](https://switzerlandomics.ch/technologies/evidence_ratio/) | Version: 0.1.0 | 2026-01-21 | [![CRAN version](https://www.r-pkg.org/badges/version/evidenceratio)](https://cran.r-project.org/package=evidenceratio) [![CRAN downloads](https://cranlogs.r-pkg.org/badges/grand-total/evidenceratio)](https://cran.r-project.org/package=evidenceratio)

* **QuantBayes R**: R package available on CRAN.\
[Application](https://switzerlandomics.ch/technologies/quantbayes/) | 
[CRAN](https://cran.r-project.org/package=quantbayes) | Version: 0.1.0 | 2025-12-18 | [![CRAN version](https://www.r-pkg.org/badges/version/quantbayes)](https://cran.r-project.org/package=quantbayes) [![CRAN downloads](https://cranlogs.r-pkg.org/badges/grand-total/quantbayes)](https://cran.r-project.org/package=quantbayes)

* **QuantBayes MacOS and Linux**: Software packages on Zenodo.\
[Application](https://switzerlandomics.ch/technologies/quantbayes/) | 
[Zenodo](https://doi.org/10.5281/zenodo.17919369) | Version: 0.1.0 | 2025-12-13

* **Quant calc 001**: Base model with structured priors, full statistical framework, and real-world application. (Early access partners)

* **Quant calc 000**: Minimal prototype showcasing core Bayesian engine, public data, and open-source code.\
[DOI](https://doi.org/10.1101/2025.03.25.25324607) | 
[PDF](https://www.medrxiv.org/content/10.1101/2025.03.25.25324607v5.full.pdf) | 
[Video](https://player.vimeo.com/video/1103512246)  

* **PanelAppRex basic**: R setup and data for building an open-source base model (GitHub and Zenodo).\
[DOI](https://doi.org/10.1101/2025.03.20.25324319) | 
[PDF](https://www.medrxiv.org/content/10.1101/2025.03.20.25324319v3.full.pdf) | 
[Repository](https://github.com/DylanLawless/PanelAppRex) |
[Video](https://player.vimeo.com/video/1099451293) | 
[Application](https://switzerlandomics.ch/technologies/panelAppRexAi/) | 
[Dataset](https://doi.org/10.5281/zenodo.15736688) | 2025-06-25  

* **Qualifying variant (QV)**: The QV database offers an open, shareable, and reproducible framework for genomic interpretation.\
[DOI](https://doi.org/10.1101/2025.05.09.25324975) | 
[PDF](https://www.medrxiv.org/content/10.1101/2025.05.09.25324975v2.full.pdf) | 
[Video](https://player.vimeo.com/video/1083533047) | 
[Database](https://switzerlandomics.ch/technologies/qv_database/) | 2025-05-11

* **Genetic diagnosis of inborn-errors of immunity (IEI)**: open-source, world-leading database of IEI genetics provided as a subset of PanelAppRex for the community.\
[Homepage](https://iei-genetics.github.io) | 
[Database](https://iei-genetics.github.io/assets/iusis_iei_table_2025.html) | 
[Repository](https://github.com/DylanLawless/iei_genetics) | 2025-04-23  

## Media
<ul>
  {% assign releases = site.release | sort: 'date' | reverse %}
  {% for item in releases %}
    <li>
      <a href="{{ item.url }}">{{ item.title }}</a> — {{ item.date | date: "%Y-%m-%d" }}
    </li>
  {% endfor %}
</ul>

