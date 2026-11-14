# Nightly ETL Pipeline

[Live workbench](https://akr246.github.io/series/lab/etl-pipeline/)

Clean CSV rows, deduplicate and export the resulting dataset.

## Implemented scope
ETL workbench. Browser runs are manual. A scheduler example is included; no nightly server job is deployed.

## Source and local run
Implementation: [modules/5.mjs](../modules/5.mjs), handler 22.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/etl-pipeline/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
Browser runs are manual. A scheduler example is included; no nightly server job is deployed. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
