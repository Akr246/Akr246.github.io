# Admin Panel Generator

[Live workbench](https://akr246.github.io/series/lab/admin-generator/)

Generate a usable CRUD form from a JSON schema.

## Implemented scope
Local generator. Exports schema and records; no database or authenticated admin backend.

## Source and local run
Implementation: [modules/4.mjs](../modules/4.mjs), handler 20.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/admin-generator/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
Exports schema and records; no database or authenticated admin backend. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
