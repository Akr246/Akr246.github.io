# Multi-Stop Route Planner

[Live workbench](https://akr246.github.io/series/lab/route-planner/)

Order coordinates using a nearest-neighbor route heuristic.

## Implemented scope
Coordinate planner. Straight-line distances, not road routing or traffic-aware navigation.

## Source and local run
Implementation: [modules/10.mjs](../modules/10.mjs), handler 47.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/route-planner/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
Straight-line distances, not road routing or traffic-aware navigation. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
