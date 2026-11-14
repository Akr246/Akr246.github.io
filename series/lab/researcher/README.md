# Multi-Agent Researcher

[Live workbench](https://akr246.github.io/series/lab/researcher/)

Compare supplied sources through planner, evidence and critique stages.

## Implemented scope
Workflow prototype. Stages use deterministic text processing, not autonomous AI agents or live web research.

## Source and local run
Implementation: [modules/1.mjs](../modules/1.mjs), handler 5.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/researcher/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
Stages use deterministic text processing, not autonomous AI agents or live web research. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
