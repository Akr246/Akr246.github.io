# API Rate Limiter

[Live workbench](https://akr246.github.io/series/lab/rate-limiter/)

Experiment with a token bucket and inspect accepted requests.

## Implemented scope
Algorithm simulator. Demonstrates rate limiting in memory; does not protect a hosted API.

## Source and local run
Implementation: [modules/3.mjs](../modules/3.mjs), handler 12.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/rate-limiter/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
Demonstrates rate limiting in memory; does not protect a hosted API. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
