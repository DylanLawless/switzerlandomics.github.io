# Pedigree changelog

## v1.0.5

* Improved the deterministic auto-layout engine to reduce dog-legged edges, favour straight vertical family connections, and preserve symmetry across parent-child relationships.
* Added bidirectional layout refinement so child positions can influence parent placement, while still respecting pinned nodes and avoiding same-generation overlap.
* Improved child spacing rules so one child is centred between parents, two children align beneath the parent pair, and larger sibships are placed symmetrically.
* Preserved partner-with-child adjacency during auto-layout so partners are kept close where this improves relationship clarity.
* Reworked the application layout to remove the right-side navigator column and give the pedigree canvas more working space.
* Moved the Layout controls below the plot, before the legend, with Focus figure and Auto-layout kept as the most accessible actions.
* Moved People and Warnings to the bottom of the left inspector column while preserving their existing behaviour.
* Linked the version pill to the Pedigree changelog.

## v1.0.4

- Smart deterministic auto-layout to prevent blocking nodes and relationship lines and minimise partner distances.
- In relationships, the PLINK parental role is hidden when roles are clear and only show for ambiguous parent-role cases. The roles of Father and Mother are used when known or safely inferable. They fall back to Parent 1 and Parent 2 when ambiguous.

## v1.0.3

- Added relationship creation from the Relationships panel, including linking the selected individual to an existing person, adding a new partner and adding children to a specific relationship.
- Added the Pedigree tutorial page.

## v1.0.2

- Added two known historical example templates: the Gurgy Neolithic ancient-DNA community pedigree from Rivollat et al., Nature 2023, and the CEPH1463 reference family pedigree. The Gurgy template was reconstructed from the published figure and supplementary data to generate ped/fam and may require further correction.

## v1.0.1

- Added left-panel controls for twin type and relationship details, including monozygotic twins, consanguinity, ended relationships, no children, infertility and PLINK parental roles.
- Added pedigree rendering for ended relationships, no-children markers and infertility annotations.
- Hid the twin and multiple-birth panel unless a twin or multiple-birth group is present.

## v1.0.0

- Added support for recording and displaying multiple genetic variants per individual.
- Added variant-specific fields for inheritance, phase, classification and genomic notation.
- Added public export counter display. Note: The public export counter was introduced after the first 1,000 validated uses, as measured through Google Analytics. To preserve continuity, the counter was initialised at 1,000 and continues from that baseline.

## v0.0.1

- Initial release.
