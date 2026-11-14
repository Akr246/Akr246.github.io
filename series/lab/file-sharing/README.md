# Peer-to-Peer File Sharing

[Live workbench](https://akr246.github.io/series/lab/file-sharing/)

Transfer a file over a WebRTC data channel with manual signaling.

## Implemented scope
WebRTC prototype. No signaling server or TURN relay. 5 MB demo limit; restrictive networks may fail.

## Source and local run
Implementation: [modules/9.mjs](../modules/9.mjs), handler 44.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/file-sharing/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
No signaling server or TURN relay. 5 MB demo limit; restrictive networks may fail. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
