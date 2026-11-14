# Spaced-Repetition Flashcards

[Live workbench](https://akr246.github.io/series/lab/flashcards/)

Create cards and schedule reviews using recall ratings.

## Implemented scope
Local app. Review progress is stored in this browser.

## Source and local run
Implementation: [modules/8.mjs](../modules/8.mjs), handler 37.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/flashcards/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
Review progress is stored in this browser. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
