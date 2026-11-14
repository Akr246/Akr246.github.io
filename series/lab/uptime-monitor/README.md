# Uptime Monitor

[Live workbench](https://akr246.github.io/series/lab/uptime-monitor/)

Measure browser-reachable URLs and record response history.

## Implemented scope
Browser probe. CORS errors are inconclusive. Monitoring stops when the page closes.

## Source and local run
Implementation: [modules/6.mjs](../modules/6.mjs), handler 29.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/uptime-monitor/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
CORS errors are inconclusive. Monitoring stops when the page closes. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
