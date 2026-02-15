---
title: "Founders of sequencing by expansion SBX"
layout: page
description: "How Sequencing by Expansion moved from chemistry concept to startup development and became part of modern sequencing infrastructure through integration into Roche’s platform efforts."
date: 2026-02-14
category: founder-stories

tags:
  - sequencing
  - genomics
  - nanopore
  - sbx

entities:
  people:
    - Mark Kokoris
    - Allan Stephan
    - Bob McRuer
    - Stephen Rose
    - Heiner Dreismann
  software:
  organisations:
    - Stratos Genomics
    - Roche Diagnostics
    - Genia Technologies
    - Broad Institute
    - Wellcome Sanger Institute
  projects:
    - SBX
  formats:
    - DNA
    - VCF
---

<p>{{ page.date | date: "%Y-%m-%d" }}</p>

> TLDR: SBX solved nanopore sequencing's signal problem by expanding DNA into easier-to-read molecules rather than improving sensors. Stratos Genomics spent over a decade proving the chemistry, survived through staged funding and partnerships rather than product sales, and ultimately reached global deployment through acquisition by Roche, where the technology became part of a larger sequencing platform strategy.

How Sequencing by Expansion moved from chemistry concept to startup development and became part of modern sequencing infrastructure through integration into Roche’s platform efforts.

By the mid 2000s, sequencing costs were falling, but measurement limits remained. Sequencing by synthesis (SBS) platforms required repeated chemistry cycles, while nanopore sequencing promised direct electrical reading of DNA yet struggled with signal resolution. DNA bases are chemically similar and closely spaced, making direct discrimination inside nanopores difficult at high speed.

Most groups pursued improved direct measurement. Sequencing by Expansion (SBX) instead proposed transforming DNA into something easier to read. Rather than measuring compact DNA directly, the sequence is converted into a longer surrogate molecule carrying expanded reporter units. This molecule, later called the Xpandomer, preserves sequence order while producing clearer signals during nanopore measurement.

At the time, this approach appeared counterintuitive. Expanding DNA seemed chemically complex, and many experts doubted polymerases could be engineered to synthesise such large modified substrates efficiently. The central challenge was not only reading DNA differently, but inventing chemistry, enzymes, and workflows that did not yet exist.

| Item                              | Details                                                                                                                      |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Technology                        | Sequencing by Expansion (SBX)                                                                                                |
| Primary developers                | Mark Kokoris, Bob McRuer and Stratos Genomics engineering teams                                                              |
| Company formed                    | Stratos Genomics, 2007                                                                                                       |
| Founders                          | Allan Stephan (CEO), Mark Kokoris (CSO), Bob McRuer (CTO)                                                                    |
| Location                          | Seattle, USA                                                                                                                 |
| Funding model                     | Venture investment, government grants including SBIR and defence research support, and later strategic investment from Roche |
| Business model before acquisition | Development of sequencing chemistry intended for licensing or platform integration rather than selling instruments           |
| Licensing model                   | Proprietary chemistry and platform technology                                                                                |
| Pricing model                     | Not publicly disclosed; positioned toward ultra-low-cost sequencing but no commercial pricing existed pre acquisition        |
| Distribution model                | Technology later integrated into Roche sequencing platform development                                                       |
| Maintenance and support           | Platform support and deployment expected through Roche instrument infrastructure                                             |
| Adoption scale                    | Evaluated through collaborations with Broad Institute, Wellcome Sanger Institute, Genentech and other research partners      |
| Current status                    | SBX technology integrated into Roche sequencing development efforts                                                          |

Early work at Stratos Genomics focused simply on proving expansion chemistry was possible. Laboratory conditions were modest, progress slow, and resources limited. The team first needed to show DNA could be converted into expanded molecules while retaining sequence accuracy.

By 2012, short reads were demonstrated through nanopores. By 2013, reads exceeded two hundred bases. These demonstrations confirmed feasibility but did not yet show commercial scalability. The company then simplified chemistry by replacing large probe libraries with four expandable nucleotides, called X NTPs. Polymerases had to be redesigned to incorporate these large substrates, and additional cofactors, later described as PEM components, were discovered to enable longer synthesis.

Progress required simultaneous advances:

• synthesis chemistry
• polymerase engineering
• nucleotide design
• nanopore measurement control
• reporter optimisation

Each improvement depended on the others, making development iterative and uncertain. Progress occurred over years without product revenue, placing pressure on funding and survival. Venture financing, research grants, and partnerships allowed continued work, but commercial success remained uncertain.

Context also mattered. During this period Oxford Nanopore Technologies attracted attention by demonstrating portable nanopore sequencing. ONT solved important portability and accessibility challenges, but scaling accuracy and throughput economically remained difficult. SBX attacked the same measurement problem differently, seeking to improve signal clarity through chemistry rather than relying solely on sensor improvement.

<!-- A further lineage connection is important. In 2014 Roche acquired Genia Technologies, which had developed semiconductor based nanopore sensor arrays. Around the same period Roche began collaborating with and investing in Stratos Genomics. The combination of Genia’s scalable nanopore hardware and Stratos’ expansion chemistry later formed the basis for Roche’s sequencing development strategy. -->

A further lineage connection is important. In 2014 Roche acquired Genia Technologies, gaining semiconductor nanopore sensor arrays capable of large-scale parallel measurement. Around the same period Roche began collaborating with and investing in Stratos Genomics, whose expansion chemistry addressed the signal limitations of direct DNA measurement. Together, scalable nanopore hardware and expansion-based chemistry created a plausible path toward a new sequencing platform. These moves formed part of Roche’s longer-term effort to assemble a full sequencing infrastructure stack following the phase-out of its earlier 454 platform.

Strategically, these moves reflected coordinated leadership decisions inside Roche rather than isolated technology bets. At group level, CEO Severin Schwan had already positioned Roche around personalised healthcare, requiring tighter integration between diagnostics and therapeutic development, with genomics as core infrastructure. Within Roche Diagnostics, CEO Roland Diggelmann faced the growing need for internal sequencing capability rather than reliance on external platform suppliers, especially as oncology and molecular diagnostics workflows expanded. Operational execution of this sequencing strategy was largely driven through Roche Sequencing Solutions under Dan Zabrowski and associated leadership teams, who integrated assets from earlier acquisitions such as 454 and NimbleGen while assembling new platform components. For founders, the nuance is important: SBX did not succeed purely through technical merit, but because it entered an ecosystem where corporate strategy, diagnostics demand, and platform integration efforts were already aligned toward building long term sequencing infrastructure.

Stratos itself never sold sequencing instruments. Its strategy focused on developing chemistry that could integrate into larger sequencing platforms. Acquisition therefore represented a natural commercial outcome rather than failure to launch products.

In 2020 Roche acquired Stratos Genomics, moving SBX development from startup chemistry into larger instrument engineering programmes. Work then shifted from individual nanopore experiments toward large scale CMOS sensor arrays containing millions of sensors, enabling massive parallel sequencing potential.

A key public milestone followed when SBX methods were described in detail in a bioRxiv publication (Kokoris M. et al. 2025), marking the first full technical disclosure of chemistry and performance. This demonstrated that expansion based sequencing could function reproducibly and at scale, and showed the maturity of the engineering effort.

The paper clarified the technical foundations developed at Stratos prior to acquisition, including expandable nucleotides (XNTPs) enabling signal separation, engineered polymerases known as Xp Synthases capable of synthesising expanded molecules, specialised cofactors (PEMs) stabilising synthesis, and workflows optimised for accurate conversion and nanopore measurement. Together, these advances demonstrated that sequencing performance gains could arise from molecular and enzymatic engineering rather than sensor improvements alone.

Subsequent collaborative demonstrations showed extremely rapid sequencing workflows in controlled settings, including genome to variant outputs within hours. Large research institutions began evaluating potential applications across genomics and transcriptomics, though broad commercial deployment remains under development.

Commercialisation follows a familiar infrastructure pattern. Chemistry innovations emerge in startups, mature through partnerships, and are ultimately integrated into platforms operated by companies capable of building and maintaining global instrument fleets and service networks.

The lasting consequence is conceptual. Direct measurement is not always optimal. Transforming signals into forms easier to measure can enable scalability that direct sensing alone struggles to achieve. SBX illustrates how sequencing advances increasingly arise from integrated chemistry, enzymology, electronics, and computation rather than isolated improvements in one component.

Stratos survived because investors and partners believed the technical milestones justified continued funding until platform integration became possible.

The companies involved may change over time. The technical lineage persists as infrastructure evolves.

## Links

SBX primary technical publication (bioRxiv, 2025)
Kokoris M. et al. Sequencing by Expansion (SBX) – a novel, high-throughput single-molecule sequencing technology
<https://doi.org/10.1101/2025.02.19.639056>

Mark Kokoris, Roche Diagnostics profile
https://diagnostics.roche.com/global/en/contributors/mark-kokoris.html

Roche SBX technology overview
https://sequencing.roche.com/global/en/article-listing/sequencing-platform-technologies.html

Nanopore sequencing and SBX background (Roche)
https://sequencing.roche.com/global/en/article-listing/nanopore-sequencing.html

Roche investor update on SBX advances and sequencing world record (2025)
https://www.roche.com/investors/updates/inv-update-2025-10-16

Roche article: Inventing SBX – DNA sequencing breakthrough
https://www.roche.com/stories/sbx-next-generation-sequencing-technology

Historical Stratos Genomics website (archived)
https://web.archive.org/web/20150205000000/http://www.stratosgenomics.com/

AVENIO Edge System (Roche NGS automation platform)
https://sequencing.roche.com/global/en/products/group/avenio-edge-system.html

