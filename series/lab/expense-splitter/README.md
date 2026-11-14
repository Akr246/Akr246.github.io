# Expense Splitter

[Live workbench](https://akr246.github.io/series/lab/expense-splitter/)

Split shared costs and calculate settlement transfers.

## Implemented scope
Local app. Uses integer cents; no bank transfers.

## Source and local run
Implementation: [modules/7.mjs](../modules/7.mjs), handler 31.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/expense-splitter/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
Uses integer cents; no bank transfers. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
