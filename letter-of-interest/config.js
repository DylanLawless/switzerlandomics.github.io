window.LOI_CONFIG = {
  mode: "live",
  apiBaseUrl: "https://switzerland-omics-interest.cold-leaf-e00d.workers.dev",
  turnstileSiteKey: "",
  demoInvitation: {
    invitationId: "demo-invitation",
    email: "",
    recipientName: "",
    organisation: "",
    statementVersion: "2026-02",
    expiresAt: "2099-12-31T23:59:59Z",
    availableAreas: [
      {
        key: "data-provenance",
        label: "genomic data provenance and interoperability",
        implementation: "Omics schema"
      },
      {
        key: "analysis-criteria",
        label: "reproducible genomic analysis criteria",
        implementation: "Qualifying Variant Framework + QVSS"
      },
      {
        key: "variant-interpretation",
        label: "variant interpretation and reporting",
        implementation: "ACMG Validator"
      },
      {
        key: "clinical-family-history",
        label: "structured clinical family history",
        implementation: "Pedigree"
      },
      {
        key: "evidence-verification",
        label: "evidence reliability and verification",
        implementation: "QuantBayes + QEM"
      },
      {
        key: "open-infrastructure",
        label: "open genomic standards and community infrastructure",
        implementation: "General interest"
      }
    ]
  }
};
