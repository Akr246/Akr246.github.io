# IoT Sensor Dashboard

[Live workbench](https://akr246.github.io/series/lab/iot-dashboard/)

Explore sensor readings, thresholds and CSV export.

## Implemented scope
Sensor simulator. Synthetic telemetry; no physical IoT device connection.

## Source and local run
Implementation: [modules/10.mjs](../modules/10.mjs), handler 48.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/iot-dashboard/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
Synthetic telemetry; no physical IoT device connection. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
