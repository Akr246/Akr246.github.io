# Auth Service with Passkeys

[Live workbench](https://akr246.github.io/series/lab/passkeys/)

Create and exercise a browser WebAuthn credential.

## Implemented scope
WebAuthn demonstration. No server challenge verification, account system or production authentication service.

## Source and local run
Implementation: [modules/9.mjs](../modules/9.mjs), handler 41.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/passkeys/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
No server challenge verification, account system or production authentication service. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
