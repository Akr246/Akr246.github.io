# Collaborative Whiteboard

[Live workbench](https://akr246.github.io/series/lab/whiteboard/)

Draw, undo, export and synchronize strokes across local tabs.

## Implemented scope
Same-browser collaboration. Uses same-origin browser storage events; no remote multi-user server.

## Source and local run
Implementation: [modules/2.mjs](../modules/2.mjs), handler 6.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/whiteboard/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
Uses same-origin browser storage events; no remote multi-user server. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
