# Smart Home Hub

[Live workbench](https://akr246.github.io/series/lab/smart-home/)

Control virtual rooms and evaluate simple automation rules.

## Implemented scope
Home simulator. Controls virtual devices only.

## Source and local run
Implementation: [modules/10.mjs](../modules/10.mjs), handler 49.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/smart-home/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
Controls virtual devices only. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
