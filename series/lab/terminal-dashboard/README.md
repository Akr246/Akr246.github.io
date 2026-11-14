# Terminal Dashboard (TUI)

[Live workbench](https://akr246.github.io/series/lab/terminal-dashboard/)

Explore a keyboard-friendly terminal command interface.

## Implemented scope
Browser terminal. Shows browser and project data, not host OS metrics or shell access.

## Source and local run
Implementation: [modules/3.mjs](../modules/3.mjs), handler 15.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/terminal-dashboard/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
Shows browser and project data, not host OS metrics or shell access. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
