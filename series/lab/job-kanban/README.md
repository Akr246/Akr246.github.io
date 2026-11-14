# Job Application Kanban

[Live workbench](https://akr246.github.io/series/lab/job-kanban/)

Track applications across stages and export your board.

## Implemented scope
Local app. No job-board integration or automatic application submissions.

## Source and local run
Implementation: [modules/8.mjs](../modules/8.mjs), handler 40.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/job-kanban/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
No job-board integration or automatic application submissions. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
