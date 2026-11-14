# E-Signature Tool

[Live workbench](https://akr246.github.io/series/lab/e-signature/)

Draw a signature and export a document with its SHA-256 hash.

## Implemented scope
Local signing tool. No identity verification, trust service or legally qualified signature.

## Source and local run
Implementation: [modules/4.mjs](../modules/4.mjs), handler 18.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/e-signature/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
No identity verification, trust service or legally qualified signature. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
