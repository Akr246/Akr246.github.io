# Live Bidding Auction

[Live workbench](https://akr246.github.io/series/lab/auction/)

Bid against a reserve price in a synchronized local auction.

## Implemented scope
Same-browser simulation. No money, remote bidding, identity checks or server-enforced auction.

## Source and local run
Implementation: [modules/2.mjs](../modules/2.mjs), handler 10.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/auction/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
No money, remote bidding, identity checks or server-enforced auction. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
