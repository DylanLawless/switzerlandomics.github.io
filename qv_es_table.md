---
title: QV ES
layout: page
description: QV ES
---

**QV ES evidence interpretation table (rare single case interpretation)**

Each rule maps raw flags (TRUE, FALSE, NA) to binary evidence indicators based on whether the observed data contradict the underlying hypothesis.  
Rule names describe what a TRUE flag detects.  
A value of 1 indicates that no contradiction is observed.  
Missing data (NA) never counts as evidence present.

| rule name                                   | flag  | meaning                                                                 | X_ij |
|--------------------------------------------|-------|-------------------------------------------------------------------------|------|
| gnomad flag present                        | TRUE  | at least one gnomAD quality or annotation flag is present               | 0    |
| gnomad flag present                        | FALSE | no gnomAD flags observed                                                | 1    |
| gnomad flag present                        | NA    | gnomAD flag status unavailable                                          | 0    |
| acmg benign evidence present               | TRUE  | ACMG benign evidence code detected                                      | 0    |
| acmg benign evidence present               | FALSE | no ACMG benign evidence detected                                        | 1    |
| acmg benign evidence present               | NA    | ACMG evidence unavailable                                               | 0    |
| ppie requirement unmet                    | TRUE  | patient or public involvement requirement not fulfilled                 | 0    |
| ppie requirement unmet                    | FALSE | PPIE requirement fulfilled or not applicable                            | 1    |
| ppie requirement unmet                    | NA    | PPIE status not recorded                                                | 0    |
| proband genotype invalid                  | TRUE  | proband genotype missing or non interpretable                           | 0    |
| proband genotype invalid                  | FALSE | proband genotype valid                                                  | 1    |
| proband genotype invalid                  | NA    | proband genotype unavailable                                            | 0    |
| parent gt unavailable mother              | TRUE  | maternal genotype unavailable                                          | 0    |
| parent gt unavailable mother              | FALSE | maternal genotype available                                            | 1    |
| parent gt unavailable mother              | NA    | availability unknown                                                    | 0    |
| parent gt unavailable father              | TRUE  | paternal genotype unavailable                                          | 0    |
| parent gt unavailable father              | FALSE | paternal genotype available                                            | 1    |
| parent gt unavailable father              | NA    | availability unknown                                                    | 0    |
| parent gt unavailable any                 | TRUE  | at least one parental genotype unavailable                              | 0    |
| parent gt unavailable any                 | FALSE | both parental genotypes available                                      | 1    |
| parent gt unavailable any                 | NA    | availability unknown                                                    | 0    |
| parent gt homozygous                      | TRUE  | a parent is homozygous for the variant                                  | 0    |
| parent gt homozygous                      | FALSE | no parent homozygous for the variant                                    | 1    |
| parent gt homozygous                      | NA    | parental genotype unavailable                                          | 0    |
| parent gt mechanistically inconsistent ar | TRUE  | parental genotypes contradict autosomal recessive inheritance           | 0    |
| parent gt mechanistically inconsistent ar | FALSE | no contradiction with autosomal recessive inheritance observed          | 1    |
| parent gt mechanistically inconsistent ar | NA    | parental genotype unavailable                                          | 0    |
| unaffected relative homozygous alt | TRUE  | unaffected parent or close relative carries the same homozygous ALT | 0 |
| unaffected relative homozygous alt | FALSE | no unaffected relative with the same genotype observed              | 1 |
| unaffected relative homozygous alt | NA    | phenotype or genotype information unavailable                       | 0 |
| compound het phase inconsistent           | TRUE  | phase or configuration contradicts compound heterozygosity              | 0    |
| compound het phase inconsistent           | FALSE | no phase contradiction observed                                        | 1    |
| compound het phase inconsistent           | NA    | phase information unavailable                                          | 0    |
| denovo mechanism excluded                 | TRUE  | parental genotypes exclude a de novo mechanism                          | 0    |
| denovo mechanism excluded                 | FALSE | de novo mechanism not excluded                                         | 1    |
| denovo mechanism excluded                 | NA    | parental genotypes unavailable                                        | 0    |
| population frequency common               | TRUE  | population frequency incompatible with rare disease                    | 0    |
| population frequency common               | FALSE | population frequency compatible with rare disease                      | 1    |
| population frequency common               | NA    | population frequency unavailable                                       | 0    |
| population frequency unavailable          | TRUE  | no population frequency information available                          | 0    |
| population frequency unavailable          | FALSE | population frequency available                                        | 1    |
| population frequency unavailable          | NA    | population frequency unknown                                          | 0    |
| transcript not expressed in controls      | TRUE  | transcript not detected in any control sample                          | 0    |
| transcript not expressed in controls      | FALSE | transcript detected in controls                                        | 1    |
| transcript not expressed in controls      | NA    | control expression unavailable                                         | 0    |
| transcript not quantifiable in patient    | TRUE  | patient transcript not quantifiable                                    | 0    |
| transcript not quantifiable in patient    | FALSE | patient transcript quantifiable                                        | 1    |
| transcript not quantifiable in patient    | NA    | patient expression unavailable                                         | 0    |
| transcript non canonical                  | TRUE  | variant does not affect MANE or curated clinical transcript             | 0    |
| transcript non canonical                  | FALSE | variant affects MANE or curated clinical transcript                    | 1    |
| transcript non canonical                  | NA    | transcript relevance unknown                                           | 0    |
| genedisease validity weak                | TRUE  | ClinGen gene disease validity not strong or definitive                  | 0    |
| genedisease validity weak                | FALSE | ClinGen gene disease validity strong or definitive                      | 1    |
| genedisease validity weak                | NA    | ClinGen validity unavailable                                           | 0    |
| omim inconsistency                        | TRUE  | OMIM disease entry missing or mode of inheritance mismatch              | 0    |
| omim inconsistency                        | FALSE | OMIM disease entry present with matching inheritance                   | 1    |
| omim inconsistency                        | NA    | OMIM information unavailable                                           | 0    |
| lof mechanism inconsistent               | TRUE  | loss of function mechanism inconsistent with known gene biology         | 0    |
| lof mechanism inconsistent               | FALSE | loss of function consistent with known gene mechanism                  | 1    |
| lof mechanism inconsistent               | NA    | loss of function context unavailable                                   | 0    |
| clinvar benign conflict                  | TRUE  | ClinVar contains benign or conflicting interpretations                 | 0    |
| clinvar benign conflict                  | FALSE | no benign conflict in ClinVar                                          | 1    |
| clinvar benign conflict                  | NA    | ClinVar information unavailable                                       | 0    |
| phenotype mismatch                       | TRUE  | phenotype similarity below threshold                                   | 0    |
| phenotype mismatch                       | FALSE | phenotype similarity sufficient                                       | 1    |
| phenotype mismatch                       | NA    | phenotype information unavailable                                     | 0    |
| disease spectrum mismatch                | TRUE  | clinical presentation inconsistent with known disease spectrum          | 0    |
| disease spectrum mismatch                | FALSE | clinical presentation consistent                                      | 1    |
| disease spectrum mismatch                | NA    | disease spectrum information unavailable                               | 0    |
| present in controls                      | TRUE  | variant observed in unrelated controls                                 | 0    |
| present in controls                      | FALSE | variant absent from controls                                           | 1    |
| present in controls                      | NA    | control data unavailable                                               | 0    |
| hgmd support absent                      | TRUE  | no HGMD disease association                                            | 0    |
| hgmd support absent                      | FALSE | HGMD disease association reported                                      | 1    |
| hgmd support absent                      | NA    | HGMD data unavailable                                                  | 0    |
| literature mechanism discordant          | TRUE  | published mechanism conflicts with proposed effect                     | 0    |
| literature mechanism discordant          | FALSE | published evidence concordant                                          | 1    |
| literature mechanism discordant          | NA    | literature evidence unavailable                                       | 0    |

