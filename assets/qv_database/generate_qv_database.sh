#!/bin/bash
# Navigate to the correct directory
cd ~/web/switzerlandomics.github.io/_technologies

# Start by creating a new Markdown file with front matter
cat > qv_database.md <<EOF
---
title: "Qualifying Variant database"
date: 2025-01-01T00:00:01+10:00
weight: 1
---

Enhancing precision in genomic interpretation through FAIR data, open and reproducible analysis criteria.

The Qualifying Variant (QV) Database offers an open, shareable, and reproducible framework for genomic interpretation. Central to this framework are the QV criteria YAML files, which define specific genomic variant criteria used within analysis pipelines. These files provide structured, machine-readable definitions that standardise how variants are selected and interpreted across different genomic studies, ensuring consistency and reproducibility in genetic analysis. Demonstrated effectively in our validation case studies, these files facilitate streamlined and accurate variant interpretation, critical for both research and clinical diagnostics.
FAIR data is data which meets the FAIR principles of findability, accessibility, interoperability, and reusability
([Wilkinson et al 2016](https://doi.org/10.1038%2FSDATA.2016.18)).

## QV YAML Files SHA256 Checksums

| View Link | Direct Download | Filename | SHA256 |
| --------- | --------------- | -------- | ------ |
EOF

# Iterate through each YAML file in the assets/qv_database directory
for file in ../assets/qv_database/*.yaml; do
    # Compute SHA256 checksum
    checksum=$(shasum -a 256 "$file" | awk '{print $1}')
    # Extract filename for hyperlink
    filename=$(basename "$file")
    # Format row in markdown table with view, download links, filename, and SHA256
    echo "| [View](/assets/qv_database/$filename) | [Download](/assets/qv_database/$filename){:download=\"$filename\"} | ${filename} | \`${checksum}\` |" >> qv_database.md
done

