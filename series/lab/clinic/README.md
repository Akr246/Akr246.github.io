# Clinic Appointments and Records

[Live workbench](https://akr246.github.io/series/lab/clinic/)

Explore a clinic workflow using fictional patient records.

## Implemented scope
Synthetic-data demo. No secure medical-record backend. Do not enter real patient details.

## Source and local run
Implementation: [modules/8.mjs](../modules/8.mjs), handler 38.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/clinic/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
No secure medical-record backend. Do not enter real patient details. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
