# Team Secrets Manager

[Live workbench](https://akr246.github.io/series/lab/secrets/)

Encrypt a text vault using a password and export ciphertext.

## Implemented scope
Local encryption prototype. No team sharing or audited vault service. Use demonstration secrets only.

## Source and local run
Implementation: [modules/9.mjs](../modules/9.mjs), handler 42.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/secrets/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
No team sharing or audited vault service. Use demonstration secrets only. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
