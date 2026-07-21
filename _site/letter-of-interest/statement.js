/*
 * Obsolete compatibility file.
 *
 * The letter-of-interest page no longer loads statement.js.
 * The canonical statement text and versioning are defined in the
 * Cloudflare Worker, and the live form uses the invitation returned
 * by the Worker as the source of truth.
 */
window.LOI_STATEMENTS = window.LOI_STATEMENTS || {};
