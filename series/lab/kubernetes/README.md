# Microservices on Kubernetes

[Live workbench](https://akr246.github.io/series/lab/kubernetes/)

Generate Deployment and Service manifests with resource limits.

## Implemented scope
Manifest generator. No Kubernetes cluster is provisioned.

## Source and local run
Implementation: [modules/6.mjs](../modules/6.mjs), handler 27.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/kubernetes/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
No Kubernetes cluster is provisioned. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
