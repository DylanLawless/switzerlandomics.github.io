---
title: Releases
layout: page
description: Releases
permalink: "/releases/"
intro_image_absolute: true
intro_image_hide_on_mobile: false
---

* **Quant calc 001**: Base model with structured priors, full statistical framework, and real-world application. (Early access partners)

* **Quant calc 000**: Minimal prototype showcasing core Bayesian engine, public data, and open-source code.\
[DOI](https://doi.org/10.1101/2025.03.25.25324607) | 
[PDF](https://www.medrxiv.org/content/10.1101/2025.03.25.25324607v5.full.pdf) | 
[Video](https://player.vimeo.com/video/1103512246)  

* **Qualifying variant (QV)**: The QV database offers an open, shareable, and reproducible framework for genomic interpretation.\
[DOI](https://doi.org/10.1101/2025.05.09.25324975) | 
[PDF](https://www.medrxiv.org/content/10.1101/2025.05.09.25324975v2.full.pdf) | 
[Video](https://player.vimeo.com/video/1083533047) | 
[Database](https://switzerlandomics.ch/technologies/qv_database/)  

* **Archipelago**: R package for summary and interpretation of variant set association test statistics (GitHub).\
[DOI](https://doi.org/10.1101/2025.03.17.25324111) | 
[PDF](https://www.medrxiv.org/content/10.1101/2025.03.17.25324111v2.full.pdf) | 
[Repository](https://github.com/DylanLawless/archipelago)  

* **PanelAppRex basic**: R setup and data for building an open-source base model (GitHub and Zenodo).\
[DOI](https://doi.org/10.1101/2025.03.20.25324319) | 
[PDF](https://www.medrxiv.org/content/10.1101/2025.03.20.25324319v3.full.pdf) | 
[Repository](https://github.com/DylanLawless/PanelAppRex) |
[Video](https://player.vimeo.com/video/1099451293) | 
[Application](https://switzerlandomics.ch/technologies/panelAppRexAi/) | 
[Dataset](https://doi.org/10.5281/zenodo.15736688)  


* **Genetic diagnosis of inborn-errors of immunity (IEI)**: open-source, world-leading database of IEI genetics provided as a subset of PanelAppRex for the community.\
[Homepage](https://iei-genetics.github.io) | 
[Database](https://iei-genetics.github.io/assets/iusis_iei_table_2025.html) | 
[Repository](https://github.com/DylanLawless/iei_genetics)  





## Media
<ul>
  {% assign releases = site.release | sort: 'date' | reverse %}
  {% for item in releases %}
    <li>
      <a href="{{ item.url }}">{{ item.title }}</a> — {{ item.date | date: "%Y-%m-%d" }}
    </li>
  {% endfor %}
</ul>

