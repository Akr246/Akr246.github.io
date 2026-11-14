# Webhook Inspector

[Live workbench](https://akr246.github.io/series/lab/webhook-inspector/)

Validate pasted JSON and inspect headers and payload types.

## Implemented scope
Payload workbench. Does not expose a public webhook receiver.

## Source and local run
Implementation: [modules/3.mjs](../modules/3.mjs), handler 13.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/webhook-inspector/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
Does not expose a public webhook receiver. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
