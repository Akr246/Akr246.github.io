# Developer Community Platform

[Live workbench](https://akr246.github.io/series/lab/community/)

Create local discussion posts, comments and votes.

## Implemented scope
Local community prototype. Posts are stored only in your browser; not a public community.

## Source and local run
Implementation: [modules/8.mjs](../modules/8.mjs), handler 39.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/community/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
Posts are stored only in your browser; not a public community. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
