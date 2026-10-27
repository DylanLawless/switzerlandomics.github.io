---
title: "Pedigree Desktop"
date: 2026-10-27T00:00:01+01:00
layout: page
permalink: /technologies/pedigree/desktop-purchase/
weight: 3
---

Pedigree Desktop is built for clinicians, geneticists, researchers, and other professionals who need to work with pedigree and genetic data **offline**, with **secure local storage** and full control over where their records are kept.

Developed with feedback from clinicians in Switzerland and internationally, the desktop edition combines the Switzerland Omics pedigree builder with a persistent local case library.

Your pedigree database stays on your computer. No cloud account is required, and pedigree, clinical, and genetic data remain offline.

<style>
.stripe-purchase {
  width: 100%;
  box-sizing: border-box;
  margin: 1.5rem 0 2.5rem;
  padding: 2.5rem 1.5rem;

  border: 1px solid #dedede;
  border-radius: 14px;
  background: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
}

.stripe-purchase-scale {
  display: flex;
  justify-content: center;
  align-items: flex-start;

  transform: scale(1.35);
  transform-origin: top center;

  margin-bottom: 5rem;
}

.stripe-purchase stripe-buy-button {
  display: block;
}

@media (max-width: 640px) {
  .stripe-purchase {
    padding: 1.5rem 0.75rem;
  }

  .stripe-purchase-scale {
    transform: scale(1);
    margin-bottom: 0;
  }
}
</style>

<div class="stripe-purchase">
  <div class="stripe-purchase-scale">

    <script async src="https://js.stripe.com/v3/buy-button.js"></script>

    <!-- Test CHF 2 product -->
    <stripe-buy-button
      buy-button-id="buy_btn_1UV6LR2MuWhgHdB6qz3wRITz"
      publishable-key="pk_live_51RHMa52MuWhgHdB68R2P58CJu2YtBR6fOCHE28yaSapxKGbafxhmUMFuQ8fowJud5Gbt01k5lXbztuJQnqI93XGI00HGGGyhdA">
    </stripe-buy-button>

    <!-- Real CHF 29 product
    <stripe-buy-button
      buy-button-id="buy_btn_1UV5yQ2MuWhgHdB65XDCYrMe"
      publishable-key="pk_live_51RHMa52MuWhgHdB68R2P58CJu2YtBR6fOCHE28yaSapxKGbafxhmUMFuQ8fowJud5Gbt01k5lXbztuJQnqI93XGI00HGGGyhdA">
    </stripe-buy-button>
    -->

  </div>
</div>

## Private by design

Pedigree Desktop is designed for environments where sensitive patient and family information must remain locally controlled.

The application uses a local SQL database to store your pedigree library. There is no hosted Switzerland Omics patient database and no cloud synchronisation of your pedigree records.

Your local library can contain pedigrees, family relationships, clinical annotations, genetic variants, notes, and associated case information without transferring those records to an online service.

No internet connection is required for normal use after the application has been downloaded.

---

## Your database stays with you

The pedigree library is stored locally and can be backed up using your own storage procedures.

You can export or move the library when required, including to another computer or to storage managed within a secure hospital, laboratory, or clinical computing environment.

If your organisation provides a managed hospital or laboratory network environment, you or your IT department can configure the database location to use approved network storage.

This makes the desktop edition suitable for professionals who want control over where their working database is stored and how it is backed up.

---

## Desktop edition

Pedigree Desktop includes:

* persistent local SQLite pedigree database
* private case and pedigree library
* local backup and library portability
* macOS and Linux applications
* offline operation after download
* local import and export
* no cloud account required
* no upload of pedigree, clinical, or genetic data to Switzerland Omics

Your purchase includes both the macOS and Linux versions.

---

## Who is it for?

Pedigree Desktop is intended for doctors, clinical geneticists, genetic counsellors, laboratory scientists, researchers, and other professionals who maintain pedigree records and prefer their working database to remain local.

It is particularly useful where an online database is undesirable or where data need to remain within an organisation-controlled computing environment.

---

## Web or Desktop?

The Switzerland Omics web pedigree builder remains available free of charge for creating pedigrees directly in the browser.

Use the **web version** when you want immediate access to the pedigree builder without maintaining a persistent case database.

Choose **Pedigree Desktop** when you want a private, persistent local library that you can revisit, back up, export, and manage on your own systems.

<div class="download-actions">

  <a class="download-card"
     href="https://switzerlandomics.ch/technologies/pedigree/"
     aria-label="Open the free pedigree builder">
    <span class="download-icon" aria-hidden="true">↗</span>
    <span class="download-text">
      <span class="download-title">Open web version</span>
      <span class="download-sub">Use the pedigree builder online</span>
    </span>
  </a>

</div>

---

Pedigree Desktop is licensed to the purchaser for their own use. Redistribution or resale of the installation files is not permitted.
