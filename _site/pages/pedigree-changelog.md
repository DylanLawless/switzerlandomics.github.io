# Pedigree changelog

## v1.0.9

### Layout and relationship editing
* Improved auto-layout to keep parents, partners and children together as coherent family units.
* Improved relationship line routing to separate overlapping connections and clearly bridge unrelated line crossings.
* Expanded visual parent-child relationship editing across the full pedigree canvas.

## v1.0.8

### Visual relationship editing
* Added direct relationship editing on the pedigree canvas using draggable connection points.
* Added visual creation and rewiring of parent-child and partner relationships.
* Added sibling relationship handling through shared parentage.
* Added direct relationship editing and deletion by selecting relationship lines.
* Added a compact person editor directly on the canvas.

### Canvas workspace
* Added a focused full-screen canvas workspace for building and editing pedigrees.
* Added Auto-layout and full-screen controls alongside Zoom and Fit.
* Kept Family history notes available in the focused workspace for rapid note taking during consultations.

## v1.0.7

### Pedigree notation
* Added support for multiple equivalent individuals using an exact number or `n`.
* Added ongoing pregnancy, SAB, ECT, TOP, stillbirth, gestational age, and fetal sex annotations.
* Added adoption brackets, dashed adoptive descent lines, and multi-colour relationship edges.

### Parentage and assisted reproduction
* Added separate biological and adoptive parentage.
* Added sperm-donor, ovum-donor, gestational-carrier, and intended-parent roles.
* Kept donor and gestational relationships distinct from partner relationships.

### Data exchange
* Added FHIR support for pregnancy outcomes, adoption, assisted reproduction, and grouped individuals.
* Preserved complete native project data for exact FHIR round-trip exchange.
* Prevented unsupported relationship semantics from being misrepresented in PLINK exports.

### Compatibility and layout
* Preserved compatibility with schema version 7 and historical templates.
* Improved layout stability for large and complex pedigrees.
* Improved generation placement, subtree movement, and automatic pedigree identifier handling.


## v1.0.6

* Added mutli-color edge support.
* Auto-layout gets difficult in large complex trees. Updated to a new coordinate algorithm with better stableId ordering.
* Partners now share a generation by default, unless one partner is an ancestor or descendant of the other.
* When one partner is moved down, parent generations can also move down so the subtree stays coherent.
* Legacy generated labels such as I-1, II-3, p_III_2 no longer drive layout ordering.
* Legacy generated labels no longer override the current autoId display.

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
