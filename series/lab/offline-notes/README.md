# Offline-First Notes with Sync

[Live workbench](https://akr246.github.io/series/lab/offline-notes/)

Keep notes offline and sync across browser tabs.

## Implemented scope
Local app. Service worker caches the app. Sync is same-browser only; no cloud synchronization.

## Source and local run
Implementation: [modules/10.mjs](../modules/10.mjs), handler 46.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/offline-notes/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
Service worker caches the app. Sync is same-browser only; no cloud synchronization. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
