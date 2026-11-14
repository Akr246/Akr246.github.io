# Multi-Tenant SaaS Starter

[Live workbench](https://akr246.github.io/series/lab/saas-starter/)

Switch demo tenants and manage isolated local task lists.

## Implemented scope
Local architecture demo. Tenant separation is browser namespacing, not secure server authorization.

## Source and local run
Implementation: [modules/4.mjs](../modules/4.mjs), handler 16.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/saas-starter/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
Tenant separation is browser namespacing, not secure server authorization. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
