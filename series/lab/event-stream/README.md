# Live Event Stream

[Live workbench](https://akr246.github.io/series/lab/event-stream/)

Publish local events and monitor a filtered stream.

## Implemented scope
Same-browser stream. Local tab events only; no Kafka or hosted event broker.

## Source and local run
Implementation: [modules/5.mjs](../modules/5.mjs), handler 23.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/event-stream/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
Local tab events only; no Kafka or hosted event broker. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
