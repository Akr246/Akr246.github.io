# CI/CD Pipeline from Scratch

[Live workbench](https://akr246.github.io/series/lab/cicd/)

Generate a GitHub Actions validation pipeline and inspect stages.

## Implemented scope
Configuration generator. The generated workflow must be installed in a repository to run on GitHub.

## Source and local run
Implementation: [modules/6.mjs](../modules/6.mjs), handler 26.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/cicd/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
The generated workflow must be installed in a repository to run on GitHub. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
