# AI Pull-Request Reviewer

[Live workbench](https://akr246.github.io/series/lab/pr-reviewer/)

Inspect a pasted diff for risky patterns and produce a review.

## Implemented scope
Rule-based prototype. Deterministic checks, not an AI code review or a comprehensive security audit.

## Source and local run
Implementation: [modules/1.mjs](../modules/1.mjs), handler 2.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/pr-reviewer/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
Deterministic checks, not an AI code review or a comprehensive security audit. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
