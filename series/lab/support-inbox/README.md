# Customer Support Inbox

[Live workbench](https://akr246.github.io/series/lab/support-inbox/)

Triage tickets, assign priority and write replies.

## Implemented scope
Local workflow. Replies are saved locally, not sent to customers.

## Source and local run
Implementation: [modules/4.mjs](../modules/4.mjs), handler 19.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/support-inbox/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
Replies are saved locally, not sent to customers. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
