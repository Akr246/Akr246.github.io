# Feature-Flag Service

[Live workbench](https://akr246.github.io/series/lab/feature-flags/)

Evaluate deterministic user rollouts and export configuration.

## Implemented scope
Local evaluation engine. No hosted flag API or authenticated administration.

## Source and local run
Implementation: [modules/3.mjs](../modules/3.mjs), handler 14.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/feature-flags/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
No hosted flag API or authenticated administration. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
