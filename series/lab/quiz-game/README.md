# Live Quiz Game

[Live workbench](https://akr246.github.io/series/lab/quiz-game/)

Answer timed questions and compare a local scoreboard.

## Implemented scope
Local game. Scores are stored in this browser; no hosted multiplayer room.

## Source and local run
Implementation: [modules/2.mjs](../modules/2.mjs), handler 9.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/quiz-game/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
Scores are stored in this browser; no hosted multiplayer room. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
