# Gamified Habit Tracker

[Live workbench](https://akr246.github.io/series/lab/habit-tracker/)

Track daily habits, earn points and calculate streaks.

## Implemented scope
Local app. Uses local dates and browser storage.

## Source and local run
Implementation: [modules/8.mjs](../modules/8.mjs), handler 36.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/habit-tracker/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
Uses local dates and browser storage. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
