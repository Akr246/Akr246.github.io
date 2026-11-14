# Headless Storefront

[Live workbench](https://akr246.github.io/series/lab/storefront/)

Filter a product catalog and manage a persistent shopping cart.

## Implemented scope
Local storefront. Static catalog and local cart; no inventory server or order fulfillment.

## Source and local run
Implementation: [modules/7.mjs](../modules/7.mjs), handler 34.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/storefront/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
Static catalog and local cart; no inventory server or order fulfillment. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
