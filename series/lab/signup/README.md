# Bot-Proof Signup Form

[Live workbench](https://akr246.github.io/series/lab/signup/)

Explore honeypot and timing checks on a signup form.

## Implemented scope
Anti-bot demonstration. Client checks are bypassable; no bot-proof claim or real account creation.

## Source and local run
Implementation: [modules/9.mjs](../modules/9.mjs), handler 45.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/signup/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
Client checks are bypassable; no bot-proof claim or real account creation. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
