# Mini-Heroku PaaS

[Live workbench](https://akr246.github.io/series/lab/mini-paas/)

Build a deployment configuration for a Node application.

## Implemented scope
Deployment planner. Exports Docker and Compose configuration; no container hosting control plane.

## Source and local run
Implementation: [modules/6.mjs](../modules/6.mjs), handler 30.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/mini-paas/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
Exports Docker and Compose configuration; no container hosting control plane. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
