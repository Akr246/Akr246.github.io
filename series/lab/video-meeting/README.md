# Video Meeting App

[Live workbench](https://akr246.github.io/series/lab/video-meeting/)

Start a camera preview and connect a peer using manual signaling.

## Implemented scope
WebRTC prototype. Manual offer/answer exchange; no hosted signaling or TURN relay. Network restrictions may block calls.

## Source and local run
Implementation: [modules/2.mjs](../modules/2.mjs), handler 8.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/video-meeting/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
Manual offer/answer exchange; no hosted signaling or TURN relay. Network restrictions may block calls. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
