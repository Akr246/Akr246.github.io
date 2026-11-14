# Appointment Booking App

[Live workbench](https://akr246.github.io/series/lab/booking/)

Reserve available time slots and export calendar invitations.

## Implemented scope
Local booking tool. Availability and bookings exist only in this browser.

## Source and local run
Implementation: [modules/4.mjs](../modules/4.mjs), handler 17.
Shared UI and storage helpers: [core.mjs](../core.mjs).

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/series/lab/booking/`. No build or API key required. PDF reader needs CDN access. Secure browser features require HTTPS or localhost.

## Production gap
Availability and bookings exist only in this browser. Review input validation, accessibility, observability, persistence, authorization and deployment requirements before treating this as a production service.

MIT license applies to this original Project Lab implementation.
