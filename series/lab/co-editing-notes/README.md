# Live Co-Editing Notes

[Live workbench](https://akr246.github.io/series/lab/co-editing-notes/)

Edit shared notes across two tabs and export Markdown.

## Implemented scope
Same-browser collaboration. Last-write-wins synchronization in one browser; no CRDT or remote sessions.

## Source and local run
Implementation: [modules/2.mjs](../modules/2.mjs), handler 7.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/co-editing-notes/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
Last-write-wins synchronization in one browser; no CRDT or remote sessions. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
