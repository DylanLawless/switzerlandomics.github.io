---
layout: page
title: Association testing
---
* TOC
{:toc}

## Introduction to sequence kernel association test (SKAT)

The Sequence Kernel Association Test (SKAT) is a specialised statistical method tailored for analysing the relationship between groups of genetic variants and phenotypes, such as diseases. Traditional methods like Generalised Linear Models (GLM) are versatile but may not efficiently capture the complex genetic architectures that involve multiple variants. SKAT addresses this by employing kernel functions and multiple test methods, providing a robust framework for joint analysis of genetic data.

### Why SKAT over GLM?

GLM is broadly applicable across various data types, fitting different distributions through logistic, Poisson, and other regression models. However, in genetic studies, particularly where multiple variants influence a phenotype collectively, GLM's individual variant analysis might miss important biological insights. SKAT, in contrast, evaluates the cumulative effect of multiple variants using advanced statistical techniques like kernel functions, which measure similarities in high-dimensional spaces, and specialised test methods, enhancing the detection power for complex genetic traits.

### The advantages of using SKAT

1. **Joint analysis capability:** SKAT can assess the joint effect of multiple genetic variants, providing a more holistic view of their impact on phenotypes. This is crucial for understanding polygenic traits where multiple variants contribute to a phenotype in a non-linear manner.
   
2. **Handling of rare variants:** SKAT is particularly effective in analysing rare variants that might be overlooked in single-variant analyses due to their low frequency but potentially high impact on the phenotype.

3. **Flexibility in modelling:** Through different kernel functions, SKAT can model non-linear and complex relationships between genetic variants and phenotypes. This flexibility allows it to adapt to various genetic architectures, offering a tailored analysis that can lead to more accurate biological interpretations.

4. **Statistical power:** By considering the aggregate effect of variants within a gene or a region, SKAT can enhance the statistical power of association tests, especially in cases where individual variant effects are too small to detect reliably.

SKAT thus stands out as a powerful tool for genetic researchers aiming to uncover the intricate connections between genetic variants and complex traits, making it an essential technique in the field of genetic epidemiology.

## Data notation

Assume we have $$n$$ subjects sequenced in a region with $$p$$ variant sites observed. The covariates include age, gender, and the top principal components of genetic variation to control population stratification.

For each subject $$i$$:

- $$y_i$$: Phenotype variable
- $$X_i = (X_{i1}, X_{i2}, ..., X_{im})$$: Vector of covariates
- $$G_i = (G_{i1}, G_{i2}, ..., G_{ip})$$: Genotypes for $$p$$ variants

We generally assume an additive genetic model where $$G_{ij}$$ can be 0, 1, or 2, representing the number of minor alleles. Dominant and recessive models are also considered.

## Example data representation

Here's how we might organise the data for 200 subjects, with 10 variant sites and three covariates (age, gender, and PC1):

**Table: General Data Representation**

| Subject | Phenotype ($$y_i$$) | Covariates ($$X_i$$) | Genotypes ($$G_i$$) |
|---------|---------------------|----------------------|---------------------|
| 1       | $$y_1$$             | $$X_{11}, X_{12}, ..., X_{1m}$$ | $$G_{11}, G_{12}, ..., G_{1p}$$ |
| 2       | $$y_2$$             | $$X_{21}, X_{22}, ..., X_{2m}$$ | $$G_{21}, G_{22}, ..., G_{2p}$$ |
| ...     | ...                 | ...                  | ...                 |
| $$i$$   | $$y_i$$             | $$X_{i1}, X_{i2}, ..., X_{im}$$ | $$G_{i1}, G_{i2}, ..., G_{ip}$$ |
| ...     | ...                 | ...                  | ...                 |
| $$n$$   | $$y_n$$             | $$X_{n1}, X_{n2}, ..., X_{nm}$$ | $$G_{n1}, G_{n2}, ..., G_{np}$$ |

**Table: Clinical Example of Data Representation for SKAT**

| Subject | Phenotype | Covariates       | Genotypes           |
|---------|-----------|------------------|---------------------|
| 1       | High BP   | Male, 45, PC1    | 0, 1, 2, ..., 2     |
| 2       | Normal BP | Female, 30, PC1  | 2, 0, 1, ..., 0     |
| 3       | High BP   | Male, 55, PC1    | 1, 1, 0, ..., 1     |
| 4       | Normal BP | Female, 40, PC1  | 0, 2, 2, ..., 1     |

## Linear SKAT model and test

To analyse the data, we employ either a linear or logistic regression model depending on the nature of the phenotype (continuous or dichotomous).

**Linear Model:**

$$y_i = \alpha_0 + \alpha'X_i + \beta'G_i + \epsilon_i$$

This model is used when phenotypes are continuous, such as blood pressure measured in mmHg.

**Logistic Model (for dichotomous phenotypes like high blood pressure):**

$$\text{logit}(P(y_i = 1)) = \alpha_0 + \alpha'X_i + \beta'G_i$$

Here, $$P(y_i = 1)$$ denotes the probability of the $$i$$-th subject having high blood pressure.

## Objective

The goal is to assess whether genetic variants influence the phenotype while adjusting for covariates. This involves testing the null hypothesis $$H_0: \beta = 0$$, suggesting no effect from the genetic variants.

## Advantages of SKAT

SKAT offers improved testing power by assuming each $$\beta_j$$ follows a distribution with mean zero and variance $$w_j\tau$$. The test is powerful especially for complex genetic data where the effect of individual variants may be small.

## Statistical analysis

After fitting the null model, SKAT computes the variance component score statistic:

$$Q = (y - \hat{\mu})'K(y - \hat{\mu})$$

Here, $$K$$ is the kernel matrix computed as $$K = GWG'$$, reflecting the weighted genetic similarities among subjects. This allows for an efficient and powerful analysis of genetic association, accommodating complex models of genetic effects.

---

## Implications of SKAT results and next steps

Upon successfully identifying an association between genetic variants and a phenotype using the Sequence Kernel Association Test (SKAT), researchers can advance to the next critical phase of genetic research—validating the biological mechanisms responsible for this association. The results from SKAT provide a robust basis for further exploration due to their comprehensive analysis of joint genetic effects, particularly in cohorts with similar phenotypic traits.

### Understanding SKAT Results

SKAT results highlight groups of variants within genes or genomic regions that collectively influence a phenotype. This is particularly valuable in cases involving polygenic traits, where multiple, possibly rare, variants contribute to disease phenotypes. By aggregating the effects of these variants, SKAT can pinpoint potential genetic regions of interest that might not be detectable through single-variant analysis methods.

### Validating biological mechanisms

Once an association is established, the next step involves several approaches to validate the biological mechanisms:

1. **Functional studies:** Laboratory experiments, such as gene expression and protein function studies, can be conducted to explore how identified variants affect biological pathways. These studies help in understanding the functional roles of the variants and their contribution to the phenotype.

2. **Replication studies:** Running the same genetic tests on different cohorts confirms the reproducibility of the results. Replication is crucial for verifying the genetic association's validity across diverse populations.

3. **Integrative genomics:** Utilising bioinformatics tools to integrate the genetic data with other omics data (like transcriptomics, proteomics) provides a comprehensive view of how genetic variations influence biological processes at different levels.

4. **Systems biology approaches:** These approaches involve the construction of networks that integrate various biological data types. They help in identifying interactions between multiple genes and their products, shedding light on the complex systems governing phenotypic traits.

5. **Clinical trials:** If the genetic variants are linked to potential therapeutic targets, clinical trials can be initiated to test interventions based on these targets. Such trials can provide evidence on the clinical relevance of the genetic findings.

By following these validation steps, researchers can move from statistical associations to a deeper understanding of the genetic bases of diseases. This process not only enhances our understanding of genetic epidemiology but also opens up new avenues for personalised medicine, where genetic information can guide individual treatment plans. Thus, the findings from SKAT testing are not just endpoints but starting points for broader scientific and clinical explorations.
