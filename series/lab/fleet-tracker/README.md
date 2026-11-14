# Live GPS Fleet Tracker

[Live workbench](https://akr246.github.io/series/lab/fleet-tracker/)

Visualize moving vehicles on a coordinate plot and inspect status.

## Implemented scope
Fleet simulator. Positions are simulated, not real GPS tracking.

## Source and local run
Implementation: [modules/10.mjs](../modules/10.mjs), handler 50.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/fleet-tracker/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
Positions are simulated, not real GPS tracking. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
