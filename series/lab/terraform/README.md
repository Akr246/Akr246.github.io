# Terraform Cloud Network

[Live workbench](https://akr246.github.io/series/lab/terraform/)

Generate a VPC and subnet configuration with input checks.

## Implemented scope
Infrastructure generator. No cloud resources are created; applying Terraform requires your cloud account.

## Source and local run
Implementation: [modules/6.mjs](../modules/6.mjs), handler 28.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/terraform/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
No cloud resources are created; applying Terraform requires your cloud account. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
