# Price & Page Change Tracker

[Live workbench](https://akr246.github.io/series/lab/change-tracker/)

Compare saved page snapshots and track price differences.

## Implemented scope
Snapshot comparison. No background scraping; paste snapshots manually.

## Source and local run
Implementation: [modules/5.mjs](../modules/5.mjs), handler 24.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/change-tracker/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
No background scraping; paste snapshots manually. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
