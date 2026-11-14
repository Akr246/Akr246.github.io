# Chat with Your PDFs

[Live workbench](https://akr246.github.io/series/lab/pdf-chat/)

Extract passages from a PDF and search with source page citations.

## Implemented scope
Local retrieval • no LLM. PDF text extraction and keyword ranking; scanned PDFs require OCR, and no generative model is connected.

## Source and local run
Implementation: [modules/1.mjs](../modules/1.mjs), handler 1.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/pdf-chat/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
PDF text extraction and keyword ranking; scanned PDFs require OCR, and no generative model is connected. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
