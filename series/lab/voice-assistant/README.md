# Offline Voice Assistant

[Live workbench](https://akr246.github.io/series/lab/voice-assistant/)

Speak typed commands and run a small set of local actions.

## Implemented scope
Browser voice prototype. Speech synthesis uses installed voices. Optional speech recognition may use a browser cloud service; fully offline recognition is not supplied.

## Source and local run
Implementation: [modules/1.mjs](../modules/1.mjs), handler 3.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/voice-assistant/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
Speech synthesis uses installed voices. Optional speech recognition may use a browser cloud service; fully offline recognition is not supplied. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
