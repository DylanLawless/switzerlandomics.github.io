# ACMG Validator changelog

## v1.1.0

### Review workflow
* Improved the structured workflow for variant context, gene structure, ACMG/AMP criteria, genotype-level review, and classification with sign-off.
* Added genotype-level review for both single-variant and multi-variant cases.
* Improved review-completeness and validation states to distinguish applied, non-contributing, incomplete, conflicting, and unassessed criteria.

### Clinical reporting
* Added a complete audit of all 28 ACMG/AMP criteria, including evidence status, applied strength, caveats, notes, and point contribution.
* Separated the compact on-screen report summary from the complete downloadable clinical record.
* Improved PDF, HTML, JSON, and Markdown reporting with case provenance, genotype interpretation, validation findings, and limitations.

### Gene structure
* Added per-variant gene structure snapshots with the displayed transcript and variant position.
* Embedded gene structure graphics directly in PDF and standalone HTML reports.
* Improved multi-variant handling so each variant can retain its own gene structure view.

### Evidence and provenance
* Expanded structured sample, sequencing, analysis, file, checksum, and sharing provenance.
* Improved external evidence import while preserving previously reviewed ACMG criteria.


## v1.0.0

* Added structured review of all ACMG/AMP pathogenic and benign evidence criteria with evidence status, strength modulation, caveats, and reviewer notes.
* Added point-based classification checking, reviewer classification, and sign-off.
* Added multi-variant case review and genotype-level interpretation.
* Added an interactive gene structure viewer and optional GeneBe evidence lookup.
* Added structured case provenance and JSON import.
* Added PDF, HTML, JSON, and Markdown report export.
* Implemented the core review workflow in the browser, with external services queried only for optional lookups.
