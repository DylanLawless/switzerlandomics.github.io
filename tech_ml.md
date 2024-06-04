---
layout: page
title: Advanced ML-driven patient care prediction
---
* TOC
{:toc}

## Why use ML / AI for patient care?

### Overview
Our machine learning system utilises a combination of genetic, proteomic, and clinical data to provide predictive insights into patient care needs. Using multi-omic data integration, our models forecast critical healthcare events before they manifest, enhancing patient outcomes through proactive interventions.

### Data foundations
We employ the MIMIC (Medical Information Mart for Intensive Care) III database, leveraging extensive patient records that include demographics, lab results, and treatment details. This rich dataset facilitates realistic and varied training scenarios for our predictive models.

### Predictive modelling techniques
Our approach incorporates several advanced machine learning techniques:
- **Classification for early mortality prediction:** Utilising patient data from the early hours of admission to predict mortality risks.
- **Time-series analysis for decompensation:** Real-time detection of physiological decompensation, using models that manage sequential data to anticipate patient status deterioration.
- **Regression models for length of stay:** Forecasting the duration of hospital stays through regression analysis, aiding in resource allocation and discharge planning.
- **Multi-label classification for phenotype identification:** Detecting complex, multi-system diseases by classifying patient data across multiple labels to describe their phenotypic characteristics.

### Benchmarks and evaluations
The models are benchmarked using the MIMIC-III dataset to address four critical healthcare predictions:
- Mortality prediction from early admission data.
- Real-time detection of physiological decompensation.
- Forecasting the length of stay for hospitalised patients.
- Phenotype classification for acute care.

These benchmarks serve as standard assessments to gauge the efficacy of our predictive models against established healthcare challenges.

### Implementation and integration
Our AI system is designed to integrate seamlessly with hospital information systems, providing real-time alerts and insights directly to healthcare providers. This integration supports a proactive approach to patient care, allowing medical staff to act swiftly on the predictions provided by our system.

### Contribution to healthcare AI
By providing these advanced tools and detailed benchmarks, we contribute to the ongoing enhancement of AI applications in healthcare. Our models are designed to offer not only predictions but also actionable insights that are vital for timely and effective patient interventions.

This structured approach ensures that the information is easy to navigate and understand, catering to technical and medical professionals seeking to implement AI-driven solutions in healthcare settings.

Here's a refined version of the section with British spelling and grammar, using sentence-case headings without numbering:

## How we do it

### Technical setup and data preparation

In the following example, we employ the MIMIC-III Benchmarks, a suite designed to harness the extensive data from the MIMIC-III (Medical Information Mart for Intensive Care) database for robust machine learning applications. MIMIC-III is a freely accessible critical care database that aggregates detailed health data from a large tertiary care hospital. It includes vital signs, medications, lab measurements, notes, and more, supporting a broad spectrum of research and clinical applications.


* [MIMIC-III original paper](https://www.nature.com/articles/sdata201635) [1].
* [MIMIC-III Clinical Database](https://physionet.org/content/mimiciii/1.4/) [2].

The benchmarks crafted from MIMIC-III data facilitate four primary inpatient clinical prediction tasks, which are critical in healthcare machine learning:
1. Predicting mortality from early admission data,
2. Real-time detection of physiologic decompensation,
3. Forecasting the length of stay,
4. Classifying phenotypes for acute care.

These tasks mirror significant machine learning challenges and allow for extensive testing and improvement of predictive models in healthcare. Each task uses the wealth of ICU data to train models that can predict vital healthcare outcomes, thereby enhancing patient care through data-driven insights.


### Environment setup
- Install Miniconda and create a dedicated environment for the project.
- Install necessary Python packages from `requirements.txt`.

### Data acquisition
- Obtain the MIMIC-III dataset from the PhysioNet platform.

### Data extraction
- Use the `extract_subjects` script to generate directories for each SUBJECT_ID, extracting and storing ICU stays, diagnoses, and events data.

### Data validation
- Execute the `validate_events` script to cleanse the data, ensuring all entries have valid ICU stay IDs and remove any events with missing information.

### Episode extraction
- Run the `extract_episodes_from_subjects` script to segment data into individual episodes based on ICU stays, categorising events and extracting relevant features.

### Dataset partitioning
- Employ the `split_train_and_test` script to divide the dataset into training and testing sets to ensure model evaluations are performed on unseen data.

### Model training and evaluation

### Task-specific dataset creation
- Utilise respective scripts like `create_in_hospital_mortality`, `create_decompensation`, etc., to prepare datasets tailored for specific predictive tasks.

### Model training
- Train models using LSTM networks or logistic regression as per the task requirement. Configure neural network settings like dimensions, timesteps, and epochs using scripts in `mimic3models`.

### Validation split
- Extract a validation set from the training data to fine-tune model parameters and prevent overfitting.

### Baseline evaluation
- Run baseline models provided within each task's directory to establish performance benchmarks.

### Custom model training
- For advanced configurations, adjust multitask learning parameters to balance the contributions of different predictive tasks using the multitask model script.

### Result compilation and analysis

### Generate predictions
- Execute task-specific evaluation scripts to predict outcomes using trained models.

### Calculate performance metrics
- Scripts automatically calculate key metrics like accuracy, AUC-ROC, etc., and summarise results in JSON format for easy analysis.

### Result analysis
- Analyse model performance, comparing against baseline models to assess improvements and identify potential areas for further refinement.

This structured approach to setting up, processing, and analysing ICU data with MIMIC-III benchmarks is designed to facilitate advanced research and development in predictive healthcare analytics. Each script is crafted to perform a specific part of the process, ensuring modularity and ease of use for researchers and developers.


## References 
1. Johnson, A., Pollard, T., Shen, L. et al. MIMIC-III, a freely accessible critical care database. Sci Data 3, 160035 (2016). <https://doi.org/10.1038/sdata.2016.35>
2. Johnson, A., Pollard, T., & Mark, R. (2016). MIMIC-III Clinical Database (version 1.4). PhysioNet. <https://doi.org/10.13026/C2XW26>.
