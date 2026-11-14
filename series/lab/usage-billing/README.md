# Usage-Based Billing Engine

[Live workbench](https://akr246.github.io/series/lab/usage-billing/)

Calculate graduated tiers and deduplicate metered usage events.

## Implemented scope
Local billing calculator. Creates estimates, not charges or tax invoices.

## Source and local run
Implementation: [modules/7.mjs](../modules/7.mjs), handler 35.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/usage-billing/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
Creates estimates, not charges or tax invoices. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
