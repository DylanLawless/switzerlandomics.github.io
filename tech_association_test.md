---
layout: page
title:   Sequence Kernel Association Test
---

## Data Notation

- Assume $$ n $$ subjects are sequenced in a region with \( p \) variant sites observed.
- Covariates might include age, gender, and top principal components of genetic variation for controlling population stratification.
- For the \( i \)-th subject,
  - \( y_i \) denotes the phenotype variable,
  - \( X_i = (X_{i1}, X_{i2}, ..., X_{im}) \) the covariates,
  - \( G_i = (G_{i1}, G_{i2}, ..., G_{ip}) \) the genotypes for the \( p \) variants within the region.
- Typically, we assume an additive genetic model and let \( G_{ij} = 0, 1, \) or \( 2 \) represent the number of copies of the minor allele.
- Dominant and recessive models can also be considered.

For example, let's consider that we have sequenced 200 subjects and only have 10 variant sites in a particular genomic region. We have three covariates: age, gender, and the first principal component of genetic variation (PC1).

```markdown
| Subject | Phenotype (\( y_i \)) | Covariates (\( X_i \))      | Genotypes (\( G_i \))                |
|---------|-----------------------|-----------------------------|--------------------------------------|
| 1       | \( y_1 \)             | \( X_{11}, X_{12}, ..., X_{1m} \) | \( G_{11}, G_{12}, ..., G_{1p} \) |
| 2       | \( y_2 \)             | \( X_{21}, X_{22}, ..., X_{2m} \) | \( G_{21}, G_{22}, ..., G_{2p} \) |
| ...     | ...                   | ...                         | ...                                  |
| \( i \) | \( y_i \)             | \( X_{i1}, X_{i2}, ..., X_{im} \) | \( G_{i1}, G_{i2}, ..., G_{ip} \) |
| ...     | ...                   | ...                         | ...                                  |
| \( n \) | \( y_n \)             | \( X_{n1}, X_{n2}, ..., X_{nm} \) | \( G_{n1}, G_{n2}, ..., G_{np} \) |
```

*Table: Tabular representation of the data for \( n \) subjects, each with their phenotype, covariates, and genotypes for \( p \) variants within the region.*

## Linear SKAT Model and Test

To analyze this data using a statistical model, we consider the phenotype as a continuous trait, employing a linear model described by:

\[
y_i = \alpha_0 + \alpha'X_i + \beta'G_i + \epsilon_i
\]

- \( \alpha_0 \) is an intercept term,
- \( \alpha \) is the vector of regression coefficients for the covariates,
- \( \beta \) is the vector of regression coefficients for the genetic variants in the region.

For dichotomous traits like blood pressure (high or normal), a logistic model is used:

\[
\text{logit} P(y_i = 1) = \alpha_0 + \alpha'X_i + \beta'G_i
\]

Here, \( P(y_i = 1) \) represents the probability of the \( i \)-th subject having high blood pressure.

### SKAT Analysis

SKAT improves test power by assuming each \( \beta_j \) follows an arbitrary distribution with mean zero and variance \( w_j\tau \), where \( \tau \) is a variance component and \( w_j \) is a pre-specified weight for variant \( j \).

The SKAT model tests whether the gene variants influence the phenotype, adjusting for covariates, corresponding to the null hypothesis \( H_0: \beta = 0 \).

### Example Calculation

Given a matrix \( G \) of genotypes and a diagonal matrix \( W \) of weights, we compute the kernel matrix \( K \) as follows:

\[
K = GWG'
\]

where \( K(G_i, G_j) = \sum_{k=1}^{p} w_k G_{ik} G_{jk} \) measures the genetic similarity between subjects based on their genotypes adjusted by variant weights.

This analytical framework allows for a robust examination of the influences of multiple genetic variants on diseases such as high blood pressure, providing insights that are crucial for advancing personalized  medicine.


