---
title: "Amino acids and codons"
layout: tech
permalink: /codon/
show_call_box: false
weight: 99
technology_group: structured-genomics
content_width: wide
content_alignment: left
description: "A clinical genetics reference for DNA, RNA, codons, amino acid abbreviations and protein consequences."
summary: "Quick reference for translating DNA and RNA codons into amino acids and understanding common protein notation used in clinical genetics."
---

<style>
#aa-viewer {
  width: 100%;
  height: clamp(300px, 32vw, 420px);
  position: relative;
  overflow: hidden;
  background: #fff;
}

.codon-switch {
  display: inline-flex;
  overflow: hidden;
  margin: 0.25rem 0 0.5rem;
  border: 1px solid #d8d8dd;
  border-radius: 999px;
  background: #fff;
}

.codon-switch button {
  appearance: none;
  border: 0;
  border-right: 1px solid #d8d8dd;
  padding: 0.45rem 0.9rem;
  background: #fff;
  color: #2f2f41;
  font: inherit;
  font-size: 0.9rem;
  line-height: 1;
  cursor: pointer;
}

.codon-switch button:last-child {
  border-right: 0;
}

.codon-switch button[aria-pressed="true"] {
  background: #2f2f41;
  color: #fff;
}

.codon-switch button:focus-visible {
  outline: 2px solid #e5262f;
  outline-offset: -2px;
}
</style>

**A quick reference for DNA, RNA, codons and amino acid notation used in clinical genetics.**

## DNA to RNA to protein

Protein-coding DNA is transcribed into RNA. The RNA sequence is read in groups of three nucleotides, called **codons**. Each codon specifies an amino acid or a translation stop.

<div class="table-wrapper" markdown="1">
|                                | Sequence      |
| ------------------------------ | ------------- |
| **DNA coding strand, 5′ → 3′** | `ATG GAA TGG` |
| **mRNA, 5′ → 3′**              | `AUG GAA UGG` |
| **Amino acids**                | `Met Glu Trp` |
| **One-letter code**            | `M E W`       |
{: .table .table-hover}

</div>

**DNA → RNA → codons → amino acids → protein**

For a DNA coding sequence, the corresponding mRNA sequence is the same except that RNA uses **uracil (U)** instead of **thymine (T)**.

## DNA and RNA bases

<div class="table-wrapper" markdown="1">
| DNA         | RNA         |
| ----------- | ----------- |
| A, adenine  | A, adenine  |
| C, cytosine | C, cytosine |
| G, guanine  | G, guanine  |
| T, thymine  | U, uracil   |
{: .table .table-hover}
</div>

The example above refers to the **DNA coding strand**. The DNA template strand is complementary to the resulting RNA sequence.

## Amino acid reference

Clinical genetics commonly uses both three-letter and one-letter amino acid abbreviations. Select an amino acid to inspect its three-dimensional chemical structure.

<div class="row align-items-start">

<div class="col-12 col-lg-7" markdown="1">

<div class="table-wrapper" markdown="1">
| Amino acid | 3-letter | 1-letter | DNA codons |
| --- | --- | --- | --- |
| [Alanine](#aa-viewer){: .aa-structure-link data-aa="alanine" aria-current="true" } | Ala | A | GCT, GCC, GCA, GCG |
| [Arginine](#aa-viewer){: .aa-structure-link data-aa="arginine" } | Arg | R | CGT, CGC, CGA, CGG, AGA, AGG |
| [Asparagine](#aa-viewer){: .aa-structure-link data-aa="asparagine" } | Asn | N | AAT, AAC |
| [Aspartic acid](#aa-viewer){: .aa-structure-link data-aa="aspartic-acid" } | Asp | D | GAT, GAC |
| [Cysteine](#aa-viewer){: .aa-structure-link data-aa="cysteine" } | Cys | C | TGT, TGC |
| [Glutamine](#aa-viewer){: .aa-structure-link data-aa="glutamine" } | Gln | Q | CAA, CAG |
| [Glutamic acid](#aa-viewer){: .aa-structure-link data-aa="glutamic-acid" } | Glu | E | GAA, GAG |
| [Glycine](#aa-viewer){: .aa-structure-link data-aa="glycine" } | Gly | G | GGT, GGC, GGA, GGG |
| [Histidine](#aa-viewer){: .aa-structure-link data-aa="histidine" } | His | H | CAT, CAC |
| [Isoleucine](#aa-viewer){: .aa-structure-link data-aa="isoleucine" } | Ile | I | ATT, ATC, ATA |
| [Leucine](#aa-viewer){: .aa-structure-link data-aa="leucine" } | Leu | L | TTA, TTG, CTT, CTC, CTA, CTG |
| [Lysine](#aa-viewer){: .aa-structure-link data-aa="lysine" } | Lys | K | AAA, AAG |
| [Methionine](#aa-viewer){: .aa-structure-link data-aa="methionine" } | Met | M | ATG |
| [Phenylalanine](#aa-viewer){: .aa-structure-link data-aa="phenylalanine" } | Phe | F | TTT, TTC |
| [Proline](#aa-viewer){: .aa-structure-link data-aa="proline" } | Pro | P | CCT, CCC, CCA, CCG |
| [Serine](#aa-viewer){: .aa-structure-link data-aa="serine" } | Ser | S | TCT, TCC, TCA, TCG, AGT, AGC |
| [Threonine](#aa-viewer){: .aa-structure-link data-aa="threonine" } | Thr | T | ACT, ACC, ACA, ACG |
| [Tryptophan](#aa-viewer){: .aa-structure-link data-aa="tryptophan" } | Trp | W | TGG |
| [Tyrosine](#aa-viewer){: .aa-structure-link data-aa="tyrosine" } | Tyr | Y | TAT, TAC |
| [Valine](#aa-viewer){: .aa-structure-link data-aa="valine" } | Val | V | GTT, GTC, GTA, GTG |
{: .table .table-hover}
</div>

</div>

<div class="col-12 col-lg-5 mt-4 mt-lg-0">

<aside class="border rounded bg-white" aria-live="polite">

<div class="p-3 border-bottom">
  <h3 id="aa-structure-name" class="mb-1">Alanine</h3>
  <p id="aa-structure-meta" class="text-muted mb-0">Ala · A</p>
</div>

<div
  id="aa-viewer"
  role="img"
  aria-label="Interactive three-dimensional structure of alanine"
></div>

<p id="aa-structure-status" class="small text-muted px-3 pb-3 mb-0">
  Loading 3D structure...
</p>

</aside>

</div>

</div>

## Genetic code

The standard genetic code is shown below. Select **RNA** or **DNA** to switch between mRNA codons and the corresponding coding-strand DNA codons.

<div class="codon-switch" role="group" aria-label="Genetic code sequence type">
  <button type="button" data-code-mode="rna" aria-pressed="true">RNA</button>
  <button type="button" data-code-mode="dna" aria-pressed="false">DNA</button>
</div>

<p id="genetic-code-mode-description" class="small text-muted">
  Showing mRNA codons. RNA uses uracil (U).
</p>

<div class="table-wrapper" markdown="1">
| First base | Second base U | Second base C | Second base A | Second base G |
| --- | --- | --- | --- | --- |
| **U** | UUU Phe (F)<br>UUC Phe (F)<br>UUA Leu (L)<br>UUG Leu (L) | UCU Ser (S)<br>UCC Ser (S)<br>UCA Ser (S)<br>UCG Ser (S) | UAU Tyr (Y)<br>UAC Tyr (Y)<br>UAA Stop<br>UAG Stop | UGU Cys (C)<br>UGC Cys (C)<br>UGA Stop<br>UGG Trp (W) |
| **C** | CUU Leu (L)<br>CUC Leu (L)<br>CUA Leu (L)<br>CUG Leu (L) | CCU Pro (P)<br>CCC Pro (P)<br>CCA Pro (P)<br>CCG Pro (P) | CAU His (H)<br>CAC His (H)<br>CAA Gln (Q)<br>CAG Gln (Q) | CGU Arg (R)<br>CGC Arg (R)<br>CGA Arg (R)<br>CGG Arg (R) |
| **A** | AUU Ile (I)<br>AUC Ile (I)<br>AUA Ile (I)<br>AUG Met (M) | ACU Thr (T)<br>ACC Thr (T)<br>ACA Thr (T)<br>ACG Thr (T) | AAU Asn (N)<br>AAC Asn (N)<br>AAA Lys (K)<br>AAG Lys (K) | AGU Ser (S)<br>AGC Ser (S)<br>AGA Arg (R)<br>AGG Arg (R) |
| **G** | GUU Val (V)<br>GUC Val (V)<br>GUA Val (V)<br>GUG Val (V) | GCU Ala (A)<br>GCC Ala (A)<br>GCA Ala (A)<br>GCG Ala (A) | GAU Asp (D)<br>GAC Asp (D)<br>GAA Glu (E)<br>GAG Glu (E) | GGU Gly (G)<br>GGC Gly (G)<br>GGA Gly (G)<br>GGG Gly (G) |
{: .table .table-hover #genetic-code-table}
</div>

## Start and stop codons

<div class="table-wrapper" markdown="1">
| Function | RNA codon | DNA coding sequence |
| --- | --- | --- |
| Start, methionine | AUG | ATG |
| Stop | UAA | TAA |
| Stop | UAG | TAG |
| Stop | UGA | TGA |
{: .table .table-hover}
</div>

`AUG` commonly initiates translation and also encodes methionine. Stop codons terminate translation and do not encode an amino acid.

## Clinical genetics

A nucleotide change can alter the codon and therefore the resulting protein sequence.

<div class="table-wrapper" markdown="1">
| | Reference | Alternate |
| --- | --- | --- |
| **DNA codon** | `TGG` | `TAG` |
| **RNA codon** | `UGG` | `UAG` |
| **Protein** | Trp | Stop |
{: .table .table-hover}
</div>

`TGG → TAG`

`Trp → Ter`

A single nucleotide change can therefore leave the amino acid unchanged, change one amino acid to another, introduce a stop codon or remove an existing start or stop signal.

## Variant consequences

A genomic variant can have different predicted consequences depending on the transcript and genomic feature it overlaps. Ensembl assigns Sequence Ontology (SO) consequence terms to each allele and transcript combination, so the same allele can have different consequences in different transcripts.

The table below is reproduced and reformatted from the [Ensembl Variation calculated variant consequences](https://www.ensembl.org/info/genome/variation/prediction/predicted_data.html) reference (Ensembl release 116, June 2026), retaining Ensembl's display colours, Sequence Ontology terms, descriptions, accessions, severity order and IMPACT labels.

**IMPACT is not pathogenicity.** Ensembl's HIGH, MODERATE, LOW and MODIFIER labels describe predicted molecular consequence and are separate from clinical variant classification. Ensembl also notes that its severity ordering is necessarily subjective.

![consequences.svg](/images/technologies/consequences.svg)

<div class="table-wrapper" markdown="1">
|  | Consequence | Description | SO accession | IMPACT |
| --- | --- | --- | --- | --- |
| <span style="display:inline-block;width:0.8rem;height:0.8rem;background:#ff0000;border:1px solid rgba(0,0,0,.15);vertical-align:-0.05rem;" aria-label="Ensembl colour #ff0000" title="Ensembl colour #ff0000"></span> | **Transcript ablation** | A feature ablation whereby the deleted region includes a transcript feature | [SO:0001893](http://www.sequenceontology.org/miso/current_svn/term/SO:0001893) | HIGH |
| <span style="display:inline-block;width:0.8rem;height:0.8rem;background:#FF581A;border:1px solid rgba(0,0,0,.15);vertical-align:-0.05rem;" aria-label="Ensembl colour #FF581A" title="Ensembl colour #FF581A"></span> | **Splice acceptor variant** | A splice variant that changes the 2 base region at the 3' end of an intron | [SO:0001574](http://www.sequenceontology.org/miso/current_svn/term/SO:0001574) | HIGH |
| <span style="display:inline-block;width:0.8rem;height:0.8rem;background:#FF581A;border:1px solid rgba(0,0,0,.15);vertical-align:-0.05rem;" aria-label="Ensembl colour #FF581A" title="Ensembl colour #FF581A"></span> | **Splice donor variant** | A splice variant that changes the 2 base region at the 5' end of an intron | [SO:0001575](http://www.sequenceontology.org/miso/current_svn/term/SO:0001575) | HIGH |
| <span style="display:inline-block;width:0.8rem;height:0.8rem;background:#ff0000;border:1px solid rgba(0,0,0,.15);vertical-align:-0.05rem;" aria-label="Ensembl colour #ff0000" title="Ensembl colour #ff0000"></span> | **Stop gained** | A sequence variant whereby at least one base of a codon is changed, resulting in a premature stop codon, leading to a shortened transcript | [SO:0001587](http://www.sequenceontology.org/miso/current_svn/term/SO:0001587) | HIGH |
| <span style="display:inline-block;width:0.8rem;height:0.8rem;background:#9400D3;border:1px solid rgba(0,0,0,.15);vertical-align:-0.05rem;" aria-label="Ensembl colour #9400D3" title="Ensembl colour #9400D3"></span> | **Frameshift variant** | A sequence variant which causes a disruption of the translational reading frame, because the number of nucleotides inserted or deleted is not a multiple of three | [SO:0001589](http://www.sequenceontology.org/miso/current_svn/term/SO:0001589) | HIGH |
| <span style="display:inline-block;width:0.8rem;height:0.8rem;background:#ff0000;border:1px solid rgba(0,0,0,.15);vertical-align:-0.05rem;" aria-label="Ensembl colour #ff0000" title="Ensembl colour #ff0000"></span> | **Stop lost** | A sequence variant where at least one base of the terminator codon (stop) is changed, resulting in an elongated transcript | [SO:0001578](http://www.sequenceontology.org/miso/current_svn/term/SO:0001578) | HIGH |
| <span style="display:inline-block;width:0.8rem;height:0.8rem;background:#ffd700;border:1px solid rgba(0,0,0,.15);vertical-align:-0.05rem;" aria-label="Ensembl colour #ffd700" title="Ensembl colour #ffd700"></span> | **Start lost** | A codon variant that changes at least one base of the canonical start codon | [SO:0002012](http://www.sequenceontology.org/miso/current_svn/term/SO:0002012) | HIGH |
| <span style="display:inline-block;width:0.8rem;height:0.8rem;background:#ff69b4;border:1px solid rgba(0,0,0,.15);vertical-align:-0.05rem;" aria-label="Ensembl colour #ff69b4" title="Ensembl colour #ff69b4"></span> | **Transcript amplification** | A feature amplification of a region containing a transcript | [SO:0001889](http://www.sequenceontology.org/miso/current_svn/term/SO:0001889) | HIGH |
| <span style="display:inline-block;width:0.8rem;height:0.8rem;background:#7f7f7f;border:1px solid rgba(0,0,0,.15);vertical-align:-0.05rem;" aria-label="Ensembl colour #7f7f7f" title="Ensembl colour #7f7f7f"></span> | **Feature elongation** | A sequence variant that causes the extension of a genomic feature, with regard to the reference sequence | [SO:0001907](http://www.sequenceontology.org/miso/current_svn/term/SO:0001907) | HIGH |
| <span style="display:inline-block;width:0.8rem;height:0.8rem;background:#7f7f7f;border:1px solid rgba(0,0,0,.15);vertical-align:-0.05rem;" aria-label="Ensembl colour #7f7f7f" title="Ensembl colour #7f7f7f"></span> | **Feature truncation** | A sequence variant that causes the reduction of a genomic feature, with regard to the reference sequence | [SO:0001906](http://www.sequenceontology.org/miso/current_svn/term/SO:0001906) | HIGH |
| <span style="display:inline-block;width:0.8rem;height:0.8rem;background:#ff69b4;border:1px solid rgba(0,0,0,.15);vertical-align:-0.05rem;" aria-label="Ensembl colour #ff69b4" title="Ensembl colour #ff69b4"></span> | **Inframe insertion** | An inframe non synonymous variant that inserts bases into in the coding sequence | [SO:0001821](http://www.sequenceontology.org/miso/current_svn/term/SO:0001821) | MODERATE |
| <span style="display:inline-block;width:0.8rem;height:0.8rem;background:#ff69b4;border:1px solid rgba(0,0,0,.15);vertical-align:-0.05rem;" aria-label="Ensembl colour #ff69b4" title="Ensembl colour #ff69b4"></span> | **Inframe deletion** | An inframe non synonymous variant that deletes bases from the coding sequence | [SO:0001822](http://www.sequenceontology.org/miso/current_svn/term/SO:0001822) | MODERATE |
| <span style="display:inline-block;width:0.8rem;height:0.8rem;background:#ffd700;border:1px solid rgba(0,0,0,.15);vertical-align:-0.05rem;" aria-label="Ensembl colour #ffd700" title="Ensembl colour #ffd700"></span> | **Missense variant** | A sequence variant, that changes one or more bases, resulting in a different amino acid sequence but where the length is preserved | [SO:0001583](http://www.sequenceontology.org/miso/current_svn/term/SO:0001583) | MODERATE |
| <span style="display:inline-block;width:0.8rem;height:0.8rem;background:#FF0080;border:1px solid rgba(0,0,0,.15);vertical-align:-0.05rem;" aria-label="Ensembl colour #FF0080" title="Ensembl colour #FF0080"></span> | **Protein altering variant** | A sequence_variant which is predicted to change the protein encoded in the coding sequence | [SO:0001818](http://www.sequenceontology.org/miso/current_svn/term/SO:0001818) | MODERATE |
| <span style="display:inline-block;width:0.8rem;height:0.8rem;background:#ff7f50;border:1px solid rgba(0,0,0,.15);vertical-align:-0.05rem;" aria-label="Ensembl colour #ff7f50" title="Ensembl colour #ff7f50"></span> | **Splice donor 5th base variant** | A sequence variant that causes a change at the 5th base pair after the start of the intron in the orientation of the transcript | [SO:0001787](http://www.sequenceontology.org/miso/current_svn/term/SO:0001787) | LOW |
| <span style="display:inline-block;width:0.8rem;height:0.8rem;background:#ff7f50;border:1px solid rgba(0,0,0,.15);vertical-align:-0.05rem;" aria-label="Ensembl colour #ff7f50" title="Ensembl colour #ff7f50"></span> | **Splice region variant** | A sequence variant in which a change has occurred within the region of the splice site, either within 1-3 bases of the exon or 3-8 bases of the intron | [SO:0001630](http://www.sequenceontology.org/miso/current_svn/term/SO:0001630) | LOW |
| <span style="display:inline-block;width:0.8rem;height:0.8rem;background:#ff7f50;border:1px solid rgba(0,0,0,.15);vertical-align:-0.05rem;" aria-label="Ensembl colour #ff7f50" title="Ensembl colour #ff7f50"></span> | **Splice donor region variant** | A sequence variant that falls in the region between the 3rd and 6th base after splice junction (5' end of intron) | [SO:0002170](http://www.sequenceontology.org/miso/current_svn/term/SO:0002170) | LOW |
| <span style="display:inline-block;width:0.8rem;height:0.8rem;background:#ff7f50;border:1px solid rgba(0,0,0,.15);vertical-align:-0.05rem;" aria-label="Ensembl colour #ff7f50" title="Ensembl colour #ff7f50"></span> | **Splice polypyrimidine tract variant** | A sequence variant that falls in the polypyrimidine tract at 3' end of intron between 17 and 3 bases from the end (acceptor -3 to acceptor -17) | [SO:0002169](http://www.sequenceontology.org/miso/current_svn/term/SO:0002169) | LOW |
| <span style="display:inline-block;width:0.8rem;height:0.8rem;background:#ff00ff;border:1px solid rgba(0,0,0,.15);vertical-align:-0.05rem;" aria-label="Ensembl colour #ff00ff" title="Ensembl colour #ff00ff"></span> | **Incomplete terminal codon variant** | A sequence variant where at least one base of the final codon of an incompletely annotated transcript is changed | [SO:0001626](http://www.sequenceontology.org/miso/current_svn/term/SO:0001626) | LOW |
| <span style="display:inline-block;width:0.8rem;height:0.8rem;background:#76ee00;border:1px solid rgba(0,0,0,.15);vertical-align:-0.05rem;" aria-label="Ensembl colour #76ee00" title="Ensembl colour #76ee00"></span> | **Start retained variant** | A sequence variant where at least one base in the start codon is changed, but the start remains | [SO:0002019](http://www.sequenceontology.org/miso/current_svn/term/SO:0002019) | LOW |
| <span style="display:inline-block;width:0.8rem;height:0.8rem;background:#76ee00;border:1px solid rgba(0,0,0,.15);vertical-align:-0.05rem;" aria-label="Ensembl colour #76ee00" title="Ensembl colour #76ee00"></span> | **Stop retained variant** | A sequence variant where at least one base in the terminator codon is changed, but the terminator remains | [SO:0001567](http://www.sequenceontology.org/miso/current_svn/term/SO:0001567) | LOW |
| <span style="display:inline-block;width:0.8rem;height:0.8rem;background:#76ee00;border:1px solid rgba(0,0,0,.15);vertical-align:-0.05rem;" aria-label="Ensembl colour #76ee00" title="Ensembl colour #76ee00"></span> | **Synonymous variant** | A sequence variant where there is no resulting change to the encoded amino acid | [SO:0001819](http://www.sequenceontology.org/miso/current_svn/term/SO:0001819) | LOW |
| <span style="display:inline-block;width:0.8rem;height:0.8rem;background:#458b00;border:1px solid rgba(0,0,0,.15);vertical-align:-0.05rem;" aria-label="Ensembl colour #458b00" title="Ensembl colour #458b00"></span> | **Coding sequence variant** | A sequence variant that changes the coding sequence | [SO:0001580](http://www.sequenceontology.org/miso/current_svn/term/SO:0001580) | MODIFIER |
| <span style="display:inline-block;width:0.8rem;height:0.8rem;background:#458b00;border:1px solid rgba(0,0,0,.15);vertical-align:-0.05rem;" aria-label="Ensembl colour #458b00" title="Ensembl colour #458b00"></span> | **Mature miRNA variant** | A transcript variant located with the sequence of the mature miRNA | [SO:0001620](http://www.sequenceontology.org/miso/current_svn/term/SO:0001620) | MODIFIER |
| <span style="display:inline-block;width:0.8rem;height:0.8rem;background:#7ac5cd;border:1px solid rgba(0,0,0,.15);vertical-align:-0.05rem;" aria-label="Ensembl colour #7ac5cd" title="Ensembl colour #7ac5cd"></span> | **5 prime UTR variant** | A UTR variant of the 5' UTR | [SO:0001623](http://www.sequenceontology.org/miso/current_svn/term/SO:0001623) | MODIFIER |
| <span style="display:inline-block;width:0.8rem;height:0.8rem;background:#7ac5cd;border:1px solid rgba(0,0,0,.15);vertical-align:-0.05rem;" aria-label="Ensembl colour #7ac5cd" title="Ensembl colour #7ac5cd"></span> | **3 prime UTR variant** | A UTR variant of the 3' UTR | [SO:0001624](http://www.sequenceontology.org/miso/current_svn/term/SO:0001624) | MODIFIER |
| <span style="display:inline-block;width:0.8rem;height:0.8rem;background:#32cd32;border:1px solid rgba(0,0,0,.15);vertical-align:-0.05rem;" aria-label="Ensembl colour #32cd32" title="Ensembl colour #32cd32"></span> | **Non coding transcript exon variant** | A sequence variant that changes non-coding exon sequence in a non-coding transcript | [SO:0001792](http://www.sequenceontology.org/miso/current_svn/term/SO:0001792) | MODIFIER |
| <span style="display:inline-block;width:0.8rem;height:0.8rem;background:#02599c;border:1px solid rgba(0,0,0,.15);vertical-align:-0.05rem;" aria-label="Ensembl colour #02599c" title="Ensembl colour #02599c"></span> | **Intron variant** | A transcript variant occurring within an intron | [SO:0001627](http://www.sequenceontology.org/miso/current_svn/term/SO:0001627) | MODIFIER |
| <span style="display:inline-block;width:0.8rem;height:0.8rem;background:#ff4500;border:1px solid rgba(0,0,0,.15);vertical-align:-0.05rem;" aria-label="Ensembl colour #ff4500" title="Ensembl colour #ff4500"></span> | **NMD transcript variant** | A variant in a transcript that is the target of NMD | [SO:0001621](http://www.sequenceontology.org/miso/current_svn/term/SO:0001621) | MODIFIER |
| <span style="display:inline-block;width:0.8rem;height:0.8rem;background:#32cd32;border:1px solid rgba(0,0,0,.15);vertical-align:-0.05rem;" aria-label="Ensembl colour #32cd32" title="Ensembl colour #32cd32"></span> | **Non coding transcript variant** | A transcript variant of a non coding RNA gene | [SO:0001619](http://www.sequenceontology.org/miso/current_svn/term/SO:0001619) | MODIFIER |
| <span style="display:inline-block;width:0.8rem;height:0.8rem;background:#458b00;border:1px solid rgba(0,0,0,.15);vertical-align:-0.05rem;" aria-label="Ensembl colour #458b00" title="Ensembl colour #458b00"></span> | **Coding transcript variant** | A transcript variant of a protein coding gene | [SO:0001968](http://www.sequenceontology.org/miso/current_svn/term/SO:0001968) | MODIFIER |
| <span style="display:inline-block;width:0.8rem;height:0.8rem;background:#a2b5cd;border:1px solid rgba(0,0,0,.15);vertical-align:-0.05rem;" aria-label="Ensembl colour #a2b5cd" title="Ensembl colour #a2b5cd"></span> | **Upstream gene variant** | A sequence variant located 5' of a gene | [SO:0001631](http://www.sequenceontology.org/miso/current_svn/term/SO:0001631) | MODIFIER |
| <span style="display:inline-block;width:0.8rem;height:0.8rem;background:#a2b5cd;border:1px solid rgba(0,0,0,.15);vertical-align:-0.05rem;" aria-label="Ensembl colour #a2b5cd" title="Ensembl colour #a2b5cd"></span> | **Downstream gene variant** | A sequence variant located 3' of a gene | [SO:0001632](http://www.sequenceontology.org/miso/current_svn/term/SO:0001632) | MODIFIER |
| <span style="display:inline-block;width:0.8rem;height:0.8rem;background:#a52a2a;border:1px solid rgba(0,0,0,.15);vertical-align:-0.05rem;" aria-label="Ensembl colour #a52a2a" title="Ensembl colour #a52a2a"></span> | **TFBS ablation** | A feature ablation whereby the deleted region includes a transcription factor binding site | [SO:0001895](http://www.sequenceontology.org/miso/current_svn/term/SO:0001895) | MODIFIER |
| <span style="display:inline-block;width:0.8rem;height:0.8rem;background:#a52a2a;border:1px solid rgba(0,0,0,.15);vertical-align:-0.05rem;" aria-label="Ensembl colour #a52a2a" title="Ensembl colour #a52a2a"></span> | **TFBS amplification** | A feature amplification of a region containing a transcription factor binding site | [SO:0001892](http://www.sequenceontology.org/miso/current_svn/term/SO:0001892) | MODIFIER |
| <span style="display:inline-block;width:0.8rem;height:0.8rem;background:#a52a2a;border:1px solid rgba(0,0,0,.15);vertical-align:-0.05rem;" aria-label="Ensembl colour #a52a2a" title="Ensembl colour #a52a2a"></span> | **TF binding site variant** | A sequence variant located within a transcription factor binding site | [SO:0001782](http://www.sequenceontology.org/miso/current_svn/term/SO:0001782) | MODIFIER |
| <span style="display:inline-block;width:0.8rem;height:0.8rem;background:#a52a2a;border:1px solid rgba(0,0,0,.15);vertical-align:-0.05rem;" aria-label="Ensembl colour #a52a2a" title="Ensembl colour #a52a2a"></span> | **Regulatory region ablation** | A feature ablation whereby the deleted region includes a regulatory region | [SO:0001894](http://www.sequenceontology.org/miso/current_svn/term/SO:0001894) | MODIFIER |
| <span style="display:inline-block;width:0.8rem;height:0.8rem;background:#a52a2a;border:1px solid rgba(0,0,0,.15);vertical-align:-0.05rem;" aria-label="Ensembl colour #a52a2a" title="Ensembl colour #a52a2a"></span> | **Regulatory region amplification** | A feature amplification of a region containing a regulatory region | [SO:0001891](http://www.sequenceontology.org/miso/current_svn/term/SO:0001891) | MODIFIER |
| <span style="display:inline-block;width:0.8rem;height:0.8rem;background:#a52a2a;border:1px solid rgba(0,0,0,.15);vertical-align:-0.05rem;" aria-label="Ensembl colour #a52a2a" title="Ensembl colour #a52a2a"></span> | **Regulatory region variant** | A sequence variant located within a regulatory region | [SO:0001566](http://www.sequenceontology.org/miso/current_svn/term/SO:0001566) | MODIFIER |
| <span style="display:inline-block;width:0.8rem;height:0.8rem;background:#636363;border:1px solid rgba(0,0,0,.15);vertical-align:-0.05rem;" aria-label="Ensembl colour #636363" title="Ensembl colour #636363"></span> | **Intergenic variant** | A sequence variant located in the intergenic region, between genes | [SO:0001628](http://www.sequenceontology.org/miso/current_svn/term/SO:0001628) | MODIFIER |
| <span style="display:inline-block;width:0.8rem;height:0.8rem;background:#636363;border:1px solid rgba(0,0,0,.15);vertical-align:-0.05rem;" aria-label="Ensembl colour #636363" title="Ensembl colour #636363"></span> | **Sequence variant** | A sequence_variant is a non exact copy of a sequence_feature or genome exhibiting one or more sequence_alteration | [SO:0001060](http://www.sequenceontology.org/miso/current_svn/term/SO:0001060) | MODIFIER |
{: .table .table-hover}
</div>



### Ensembl IMPACT labels

<div class="table-wrapper" markdown="1">

| IMPACT | Ensembl description |
| --- | --- |
| **HIGH** | The variant is assumed to have high (disruptive) impact in the protein, probably causing protein truncation, loss of function or triggering nonsense mediated decay. |
| **MODERATE** | A non-disruptive variant that might change protein effectiveness. |
| **LOW** | Assumed to be mostly harmless or unlikely to change protein behaviour. |
| **MODIFIER** | Usually non-coding variants or variants affecting non-coding genes, where predictions are difficult or there is no evidence of impact. |
{: .table .table-hover}

</div>


## HGVS notation

Protein changes are commonly represented using HGVS nomenclature.

For example:

`p.Trp24Ter`

means that tryptophan (`Trp`, `W`) at amino acid position 24 is replaced by a translation termination signal.

The corresponding coding DNA change is described separately using HGVS coding-sequence notation, for example:

`c.71G>A`

The exact relationship between genomic DNA, coding DNA and protein notation depends on the reference sequence, transcript and reading frame.

## Interpretation

A codon or amino acid consequence describes what a sequence variant changes. It does not by itself establish whether the variant is pathogenic or whether it explains a patient's phenotype.

Clinical variant interpretation additionally considers evidence such as population frequency, inheritance, phenotype, functional studies, segregation, gene-disease relationships and other relevant evidence.

## Mitochondrial genetic code

Human mitochondrial DNA uses a genetic code that differs at several codons from the standard genetic code shown above. Mitochondrial variants should therefore be interpreted using the appropriate mitochondrial genetic code.

## References

- National Center for Biotechnology Information. [The genetic codes](https://www.ncbi.nlm.nih.gov/Taxonomy/Utils/wprintgc.cgi)
- Human Genome Variation Society. [HGVS nomenclature](https://hgvs-nomenclature.org/)
- Ensembl. [Calculated variant consequences](https://www.ensembl.org/info/genome/variation/prediction/predicted_data.html). Ensembl release 116, June 2026.
- Sequence Ontology. [Sequence Ontology](http://www.sequenceontology.org/)
- National Library of Medicine. [PubChem](https://pubchem.ncbi.nlm.nih.gov/)

<script>
(function () {
  const table = document.getElementById("genetic-code-table");
  const buttons = Array.from(document.querySelectorAll("[data-code-mode]"));
  const description = document.getElementById("genetic-code-mode-description");

  if (!table || !buttons.length) {
    return;
  }

  const cells = Array.from(table.querySelectorAll("th, td"));

  cells.forEach(function (cell) {
    cell.dataset.rnaHtml = cell.innerHTML;
  });

  function toDna(html) {
    return html
      .replace(/\b[ACGU]{3}\b/g, function (codon) {
        return codon.replace(/U/g, "T");
      })
      .replace(/Second base U/g, "Second base T")
      .replace(/<strong>U<\/strong>/g, "<strong>T</strong>");
  }

  function setMode(mode) {
    const dna = mode === "dna";

    cells.forEach(function (cell) {
      cell.innerHTML = dna ? toDna(cell.dataset.rnaHtml) : cell.dataset.rnaHtml;
    });

    buttons.forEach(function (button) {
      button.setAttribute(
        "aria-pressed",
        button.dataset.codeMode === mode ? "true" : "false"
      );
    });

    if (description) {
      description.textContent = dna
        ? "Showing coding-strand DNA codons. DNA uses thymine (T)."
        : "Showing mRNA codons. RNA uses uracil (U).";
    }
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      setMode(button.dataset.codeMode);
    });
  });

  setMode("rna");
})();
</script>

<script src="https://3Dmol.org/build/3Dmol-min.js"></script>

<script>
(function () {
  const aminoAcids = {
    "alanine":       { name: "Alanine",       three: "Ala", one: "A", pubchem: "L-alanine" },
    "arginine":      { name: "Arginine",      three: "Arg", one: "R", pubchem: "L-arginine" },
    "asparagine":    { name: "Asparagine",    three: "Asn", one: "N", pubchem: "L-asparagine" },
    "aspartic-acid": { name: "Aspartic acid", three: "Asp", one: "D", pubchem: "L-aspartic acid" },
    "cysteine":      { name: "Cysteine",      three: "Cys", one: "C", pubchem: "L-cysteine" },
    "glutamine":     { name: "Glutamine",     three: "Gln", one: "Q", pubchem: "L-glutamine" },
    "glutamic-acid": { name: "Glutamic acid", three: "Glu", one: "E", pubchem: "L-glutamic acid" },
    "glycine":       { name: "Glycine",       three: "Gly", one: "G", pubchem: "glycine" },
    "histidine":     { name: "Histidine",     three: "His", one: "H", pubchem: "L-histidine" },
    "isoleucine":    { name: "Isoleucine",    three: "Ile", one: "I", pubchem: "L-isoleucine" },
    "leucine":       { name: "Leucine",       three: "Leu", one: "L", pubchem: "L-leucine" },
    "lysine":        { name: "Lysine",        three: "Lys", one: "K", pubchem: "L-lysine" },
    "methionine":    { name: "Methionine",    three: "Met", one: "M", pubchem: "L-methionine" },
    "phenylalanine": { name: "Phenylalanine", three: "Phe", one: "F", pubchem: "L-phenylalanine" },
    "proline":       { name: "Proline",       three: "Pro", one: "P", pubchem: "L-proline" },
    "serine":        { name: "Serine",        three: "Ser", one: "S", pubchem: "L-serine" },
    "threonine":     { name: "Threonine",     three: "Thr", one: "T", pubchem: "L-threonine" },
    "tryptophan":    { name: "Tryptophan",    three: "Trp", one: "W", pubchem: "L-tryptophan" },
    "tyrosine":      { name: "Tyrosine",      three: "Tyr", one: "Y", pubchem: "L-tyrosine" },
    "valine":        { name: "Valine",        three: "Val", one: "V", pubchem: "L-valine" }
  };

  const host = document.getElementById("aa-viewer");
  const titleEl = document.getElementById("aa-structure-name");
  const metaEl = document.getElementById("aa-structure-meta");
  const statusEl = document.getElementById("aa-structure-status");
  const links = Array.from(document.querySelectorAll(".aa-structure-link"));

  if (!host || !window.$3Dmol) {
    if (statusEl) {
      statusEl.textContent = "3D viewer unavailable.";
    }
    return;
  }

  const viewer = $3Dmol.createViewer(host, {
    backgroundColor: "white"
  });

  let requestId = 0;

  function setActiveLink(key) {
    links.forEach(function (link) {
      if (link.dataset.aa === key) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  async function fetchPubChem3D(compoundName) {
    const encoded = encodeURIComponent(compoundName);
    const url =
      "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/" +
      encoded +
      "/SDF?record_type=3d";

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("No 3D conformer returned");
    }

    return response.text();
  }

  async function showAminoAcid(key) {
    const amino = aminoAcids[key];

    if (!amino) {
      return;
    }

    const thisRequest = ++requestId;

    setActiveLink(key);

    titleEl.textContent = amino.name;
    metaEl.textContent = amino.three + " · " + amino.one;

    host.setAttribute(
      "aria-label",
      "Interactive three-dimensional structure of " +
        amino.name.toLowerCase()
    );

    statusEl.textContent = "Loading 3D structure...";

    viewer.clear();
    viewer.render();

    try {
      const sdf = await fetchPubChem3D(amino.pubchem);

      if (thisRequest !== requestId) {
        return;
      }

      viewer.clear();
      viewer.addModel(sdf, "sdf");

      viewer.setStyle(
        {},
        {
          stick: {
            radius: 0.13
          },
          sphere: {
            scale: 0.27
          }
        }
      );

      viewer.zoomTo();
      viewer.render();

      statusEl.textContent =
        "Drag to rotate · scroll to zoom · right-drag to translate";
    } catch (error) {
      if (thisRequest !== requestId) {
        return;
      }

      viewer.clear();
      viewer.render();

      statusEl.textContent =
        "The 3D structure could not be loaded from PubChem.";
    }
  }

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      showAminoAcid(link.dataset.aa);
    });
  });

  window.addEventListener("resize", function () {
    viewer.resize();
    viewer.render();
  });

  showAminoAcid("alanine");
})();
</script>


