# Product Analytics Dashboard

[Live workbench](https://akr246.github.io/series/lab/product-analytics/)

Inspect event counts, users and conversion from JSON events.

## Implemented scope
Local analysis. Uses sample or pasted data, not production tracking.

## Source and local run
Implementation: [modules/5.mjs](../modules/5.mjs), handler 21.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/product-analytics/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
Uses sample or pasted data, not production tracking. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
