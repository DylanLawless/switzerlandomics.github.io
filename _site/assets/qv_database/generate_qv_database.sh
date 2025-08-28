#!/bin/bash
# Navigate to the correct directory
cd ../../_technologies

# Start by creating a new Markdown file with front matter
cat > qv_database.md <<EOF
---
title: "Qualifying Variant database"
date: 2025-01-01T00:00:01+10:00
weight: 1
---

<!-- Enhancing precision in genomic interpretation through FAIR data, open and reproducible analysis criteria. -->
The open standard for variant interpretation, with trusted QV sets to enhance clarity and reproducibility in WGS.

The Qualifying Variant (QV) Database offers an open, shareable, and reproducible framework for genomic interpretation. Central to this framework are the QV criteria YAML files, which define specific genomic variant criteria used within analysis pipelines. These files provide structured, machine-readable definitions that standardise how variants are selected and interpreted across different genomic studies, ensuring consistency and reproducibility in genetic analysis. Demonstrated effectively in our validation case studies, these files facilitate streamlined and accurate variant interpretation, critical for both research and clinical diagnostics.
FAIR data is that which meets the principles of findability, accessibility, interoperability, and reusability
([Wilkinson et al 2016](https://doi.org/10.1038%2FSDATA.2016.18)).


## Public QV database

<div class="table-responsive" markdown="block">
| View Link | Direct Download | Filename | SHA256 |
| --------- | --------------- | -------- | ------ |
EOF

# Iterate through each YAML file in the assets/qv_database directory
for file in ../assets/qv_database/*.yaml; do
    checksum=$(shasum -a 256 "$file" | awk '{print $1}')
    filename=$(basename "$file")
    echo "| [View](/assets/qv_database/$filename) | [Download](/assets/qv_database/$filename){:download=\"$filename\"} | ${filename} | \`${checksum}\` |" >> qv_database.md
done

# Close the table, add classes, close wrapper, then append additional content after the table
cat >> qv_database.md <<'EOF'
{: .table .table-hover}

</div>

<div class="submission-message">
  <h2>Build or submit a public QV file</h2>
  <div class="button-row">
    <a href="/pages/qv_builder" class="button-link">Open QV builder »</a>
    <a href="/assets/qv_submission" class="button-link">Open submission form »</a>
  </div>
<br>
  <p>Submissions will be reviewed before publication. We recommend the YAML layout for its human and machine readable format. This simple key value pair structure makes your data easy to understand and process. Submissions in other suitable formats are also accepted.</p>
</div>

<div style="padding:56.25% 0 0 0;position:relative;">
  <iframe src="https://player.vimeo.com/video/1083533047?badge=0&autopause=0&player_id=0&app_id=58479"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          style="position:absolute;top:0;left:0;width:100%;height:100%;"
          title="Qualifying variants"></iframe>
</div>
<script src="https://player.vimeo.com/api/player.js"></script>
EOF
