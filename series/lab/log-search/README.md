# Log Search Dashboard

[Live workbench](https://akr246.github.io/series/lab/log-search/)

Filter structured logs by severity and search text.

## Implemented scope
Local analysis. Reads pasted JSON lines; no remote log ingestion.

## Source and local run
Implementation: [modules/5.mjs](../modules/5.mjs), handler 25.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/log-search/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
Reads pasted JSON lines; no remote log ingestion. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
