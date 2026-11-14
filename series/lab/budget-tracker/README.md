# Personal Budget Tracker

[Live workbench](https://akr246.github.io/series/lab/budget-tracker/)

Record income and expenses and inspect category balances.

## Implemented scope
Local app. Data stays in this browser; export a backup.

## Source and local run
Implementation: [modules/7.mjs](../modules/7.mjs), handler 32.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/budget-tracker/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
Data stays in this browser; export a backup. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
