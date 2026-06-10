# Founder stories writing guide

Guide for producing consistent, readable, and informative founder stories for the Switzerland Omics public blog.

These pages document how scientific and technical infrastructure moved from research into real-world adoption. They are not company strategy documents and they are not biographies. They are operational histories of how ideas became systems people rely on.

---

## Purpose of founder pages

Each page should help readers understand:

* what technical or operational bottleneck existed,
* how it was removed,
* who built the solution,
* how adoption spread,
* how commercialisation worked,
* how pricing and licensing operated,
* and what persisted afterwards.

Readers should leave with clearer understanding of how infrastructure succeeds.

---

## Blog integration rules

### Filename format

All founder stories must follow:

```

YYYY-MM-DD-founders-topic.md

```

Example:

```

2026-02-07-founders-phred-phrap-consed.md

```

Files live in:

```

/_blog/

```

---

### Title rules

All pages begin with:

```

Founders of <topic>

```

Do not use colons in titles.

Correct:

```

Founders of Phred Phrap Consed

```

Avoid:

```

Founders: Phred–Phrap–Consed

```

The site layout renders the page title automatically, so the article body must **not repeat the title** as a Markdown heading.

---

### Article opening format

The article body must begin by repeating the page description as the opening paragraph, followed immediately by the article text.

Structure:

```

---

title: "Founders of Topic Name"
description: "Short description of infrastructure and impact"
-------------------------------------------------------------

<p>{{ page.date | date: "%Y-%m-%d" }}</p> (this is usually the same as the metadata date)

Short description of infrastructure and impact.

Article text begins here.

````

This ensures the page renders consistently as:

Title (rendered by layout)  
Description (first paragraph)  
Article content

No H1 heading should appear in the article body.

---

### Required YAML front matter

Every post must start with:

```yaml
---
title: "Founders of Topic Name"
layout: page
description: "Short description of infrastructure and impact"
date: YYYY-MM-DD
category: founder-stories

tags:
  - sequencing
  - example-topic

entities:
  people:
  software:
  organisations:
  projects:
  formats:
---
````

Entities allow later indexing of people and software.

---

## Narrative flow

Articles should follow natural narrative, not rigid headings.

Most stories move through four phases.

### 1. Situation and tension

Describe the operational constraint before the breakthrough.

Readers must see the pressure for change.

---

### 2. Breakthrough and builders

Introduce builders and technical decisions.

Focus on decisions and methods, not biography.

---

### 3. Adoption and spread

Explain how adoption actually occurred.

Adoption is usually pragmatic.

Avoid hero narratives.

---

### 4. Consequence and legacy

Explain what persisted after tools or companies evolved or declined.

Infrastructure survives as standards and workflows.

---

## Structural anchors

### Compact facts table

Each article must include one concise table with:

* founders or developers
* institutions
* first release period
* licensing model
* pricing model or typical pricing
* distribution mechanism
* adoption scale
* maintenance or support model
* primary use
* current status

Pricing should be included when publicly known. If unknown, state:

```
Not publicly disclosed
```

---

## Required informational elements

Each story must include:

* original bottleneck
* technical change introduced
* adoption mechanism
* commercial model
* pricing or funding model if known
* distribution mechanism
* maintenance or support model
* long-term consequence

These do not need explicit headings but must appear.

---

## Markdown article skeleton

```
Short description repeated from YAML description.

Opening paragraphs describing situation and shift.

| Fact table |

Narrative paragraphs describing adoption and spread.

Paragraph describing business, licensing, and pricing.

Paragraph describing long-term consequence.

Closing paragraph describing lasting lesson.

## Links

Reference links.
```

Writers may adjust pacing, but all elements should appear.

---

## Voice and tone

Tone should be calm, factual, and precise.

Avoid:

* marketing language
* exaggerated claims
* motivational framing
* hero worship

Prefer:

* operational clarity
* measured consequence
* evidence-based statements
* readable technical prose

Stories should feel inevitable in retrospect.


---

## Evidence handling

Writers must preserve uncertainty rather than smoothing it into narrative.

Use direct language for confirmed facts. Qualify company-reported metrics, announced product targets, unresolved legal claims, secondary-source financing details, and inferred strategic motives.

Preferred phrasing:

- Company-reported revenue
- Announced specifications
- Shipping was targeted for
- Pricing was not publicly disclosed
- The public record does not confirm
- Secondary sources report, but primary confirmation was not found

Avoid converting uncertain material into fact. Do not use database values, investor profiles, press speculation, or interview memories as primary evidence unless the uncertainty is visible in the article.

---

## Avoid repeated series language

Do not reuse the same adoption phrase across articles. Replace generic statements such as “adoption spread pragmatically” with the specific mechanism:

- laboratories adopted it because outputs matched existing workflows
- clinical services adopted it because licensing enabled regulated use
- software spread because it reduced repeated local scripting
- platforms spread because consumables and support made operations reliable
- databases persisted because curation turned scattered literature into reusable Infrastructure

---

## Quality checklist

Before publication:

* Is the original constraint clear?
* Is adoption explained clearly?
* Are commercial mechanics visible?
* Is pricing or funding model described if known?
* Is tone factual rather than promotional?
* Is the story readable without specialist knowledge?

If any answer is no, revise.

---

## Final rule

A founder page should read like a precise briefing written by someone who understands both the technology and how it actually reached the world.

Clear. Human. Durable.

A neutral framing question you can reuse across stories is:
How did this move from idea or research into something people were willing to pay for, and what concrete path turned early work into a sustainable commercial product?


