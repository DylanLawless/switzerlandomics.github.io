## Technical report: existing founder story pages

Note: this file is to be paired with `founder_stories_wiriting_guide.md` which provides the narrative and writing style. 

The existing founder stories follow a stable article format, with variation only when the topic requires more complex treatment, such as governance, litigation, acquisition history, staged technical development, or uncertain public records.

Standard founder stories are usually 900 to 1,200 words of body text. This range fits narrative-driven infrastructure histories such as ANNOVAR, dbNSFP, HGMD, Phred Phrap Consed, GRAIL, and Illumina. Longer pieces, usually 1,400 to 1,800 words, are appropriate when the public record requires a timeline, multiple tables, regulatory context, corporate separation, or a dense technical trajectory. The Illumina GRAIL governance piece and the Sentieon draft fall into this longer category.

For new standard founder stories, target 1,000 to 1,200 words. For richer company histories with substantial founding, technical, commercial, and adoption material, 1,200 to 1,500 words is appropriate. Shorter pages risk losing the commercial and maintenance detail that distinguishes these articles from simple technical summaries.

Every page opens with YAML front matter, followed by the rendered date and the YAML description repeated verbatim as the first paragraph. The article body does not repeat the title as an H1 heading. The narrative begins immediately after the repeated description, usually by establishing the operational bottleneck before introducing the technical or organisational shift.

The facts table is the central structural anchor. It usually appears after the opening situation has been established and before the detailed adoption narrative. Standard rows include founders or developers, institutions, first release or development period, licensing model, pricing model, distribution mechanism, adoption scale, maintenance or support model, primary use, and current status. Pricing should be included when known; otherwise use `Not publicly disclosed`.

Most pages use few or no section headings. Standard infrastructure histories usually proceed as continuous narrative and reserve headings for `## Links`, with `## References` added only when a longer citation trail is useful. Case-style pages may use section headings, timelines, decision maps, or additional tables when they improve clarity.

Paragraphs are typically three to five sentences. Bullet lists are avoided in ordinary narrative sections and used only when enumerating operational mechanisms, as in the GRAIL governance case. Headings use sentence case. British spelling is used throughout. Em-dashes are not used.

The preferred page shape is:

1. YAML front matter.
2. Rendered date.
3. Repeated description.
4. Opening paragraphs establishing the bottleneck and technical or organisational shift.
5. One compact facts table.
6. Narrative paragraphs covering builders, adoption, commercial model, pricing or funding, distribution, support, and maintenance.
7. Consequence and legacy paragraphs.
8. `## Links`, with `## References` only when needed.

The closing pattern usually has two beats. First, a lasting consequence is stated in operational terms. Second, a broader lesson is drawn at the level of infrastructure, adoption, or field-wide practice. This ending should be concise and factual, not motivational.

The tone is restrained and operational. Founders are not described as visionary, exceptional, or heroic. Decisions are described as practical, iterative, or pragmatic. Adoption is explained through workflow fit, reduced friction, licensing, distribution, support, and institutional need. Commercial outcomes are treated as consequences of operational utility, not as success narratives.

