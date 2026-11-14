# Link Shortener with Analytics

[Live workbench](https://akr246.github.io/series/lab/link-shortener/)

Generate portable encoded links and count local visits.

## Implemented scope
Browser utility. Links encode their destination and may be longer; analytics are browser-local, not a global short-link service.

## Source and local run
Implementation: [modules/3.mjs](../modules/3.mjs), handler 11.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/link-shortener/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
Links encode their destination and may be longer; analytics are browser-local, not a global short-link service. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
