# Checkout and Payments

[Live workbench](https://akr246.github.io/series/lab/checkout/)

Calculate a cart total and create a demo receipt.

## Implemented scope
Payment simulation. No real payments, card collection or payment provider connection.

## Source and local run
Implementation: [modules/7.mjs](../modules/7.mjs), handler 33.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/checkout/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
No real payments, card collection or payment provider connection. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
