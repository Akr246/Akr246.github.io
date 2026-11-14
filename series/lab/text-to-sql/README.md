# Text-to-SQL Analyst

[Live workbench](https://akr246.github.io/series/lab/text-to-sql/)

Translate supported questions into SQL over a sample sales dataset.

## Implemented scope
Constrained analyst. Supports total sales, category totals and top products; no general LLM or database connection.

## Source and local run
Implementation: [modules/1.mjs](../modules/1.mjs), handler 4.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/text-to-sql/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
Supports total sales, category totals and top products; no general LLM or database connection. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
