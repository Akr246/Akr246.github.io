# Arya Project Lab

[Live catalog](https://akr246.github.io/series/lab/) · [Portfolio](https://akr246.github.io/series/)

50 browser-first workbenches in one monorepo, plus four attributed resource guides. **These are portfolio prototypes, not 50 production services.** The catalog and each project identify local-only, simulated, and unconnected features. No payment processing, cloud infrastructure, LLM provider, remote collaboration server or physical device is deployed by this collection.

## Run

From repository root: `python3 -m http.server 8000`. Open http://localhost:8000/series/lab/.

No installation or build step required. Source modules run directly in the browser. Rebuild entry pages with `node series/lab/build.mjs`. Run tests with `node --test series/lab/tests.mjs`.

Data is in localStorage; exports are offered where relevant. Browser-local data is not a cloud backup. WebAuthn, media, WebRTC and service workers require HTTPS or localhost and compatible browsers. PDF extraction downloads PDF.js 4.10.38 from jsDelivr; scanned documents require OCR. Fonts use Google Fonts with system fallbacks.

## Projects and exact scope

| # | Live workbench | Mode | Limitations |
|---|---|---|---|
| 1 | [Chat with Your PDFs](https://akr246.github.io/series/lab/pdf-chat/) | Local retrieval • no LLM | PDF text extraction and keyword ranking; scanned PDFs require OCR, and no generative model is connected. |
| 2 | [AI Pull-Request Reviewer](https://akr246.github.io/series/lab/pr-reviewer/) | Rule-based prototype | Deterministic checks, not an AI code review or a comprehensive security audit. |
| 3 | [Offline Voice Assistant](https://akr246.github.io/series/lab/voice-assistant/) | Browser voice prototype | Speech synthesis uses installed voices. Optional speech recognition may use a browser cloud service; fully offline recognition is not supplied. |
| 4 | [Text-to-SQL Analyst](https://akr246.github.io/series/lab/text-to-sql/) | Constrained analyst | Supports total sales, category totals and top products; no general LLM or database connection. |
| 5 | [Multi-Agent Researcher](https://akr246.github.io/series/lab/researcher/) | Workflow prototype | Stages use deterministic text processing, not autonomous AI agents or live web research. |
| 6 | [Collaborative Whiteboard](https://akr246.github.io/series/lab/whiteboard/) | Same-browser collaboration | Uses same-origin browser storage events; no remote multi-user server. |
| 7 | [Live Co-Editing Notes](https://akr246.github.io/series/lab/co-editing-notes/) | Same-browser collaboration | Last-write-wins synchronization in one browser; no CRDT or remote sessions. |
| 8 | [Video Meeting App](https://akr246.github.io/series/lab/video-meeting/) | WebRTC prototype | Manual offer/answer exchange; no hosted signaling or TURN relay. Network restrictions may block calls. |
| 9 | [Live Quiz Game](https://akr246.github.io/series/lab/quiz-game/) | Local game | Scores are stored in this browser; no hosted multiplayer room. |
| 10 | [Live Bidding Auction](https://akr246.github.io/series/lab/auction/) | Same-browser simulation | No money, remote bidding, identity checks or server-enforced auction. |
| 11 | [Link Shortener with Analytics](https://akr246.github.io/series/lab/link-shortener/) | Browser utility | Links encode their destination and may be longer; analytics are browser-local, not a global short-link service. |
| 12 | [API Rate Limiter](https://akr246.github.io/series/lab/rate-limiter/) | Algorithm simulator | Demonstrates rate limiting in memory; does not protect a hosted API. |
| 13 | [Webhook Inspector](https://akr246.github.io/series/lab/webhook-inspector/) | Payload workbench | Does not expose a public webhook receiver. |
| 14 | [Feature-Flag Service](https://akr246.github.io/series/lab/feature-flags/) | Local evaluation engine | No hosted flag API or authenticated administration. |
| 15 | [Terminal Dashboard (TUI)](https://akr246.github.io/series/lab/terminal-dashboard/) | Browser terminal | Shows browser and project data, not host OS metrics or shell access. |
| 16 | [Multi-Tenant SaaS Starter](https://akr246.github.io/series/lab/saas-starter/) | Local architecture demo | Tenant separation is browser namespacing, not secure server authorization. |
| 17 | [Appointment Booking App](https://akr246.github.io/series/lab/booking/) | Local booking tool | Availability and bookings exist only in this browser. |
| 18 | [E-Signature Tool](https://akr246.github.io/series/lab/e-signature/) | Local signing tool | No identity verification, trust service or legally qualified signature. |
| 19 | [Customer Support Inbox](https://akr246.github.io/series/lab/support-inbox/) | Local workflow | Replies are saved locally, not sent to customers. |
| 20 | [Admin Panel Generator](https://akr246.github.io/series/lab/admin-generator/) | Local generator | Exports schema and records; no database or authenticated admin backend. |
| 21 | [Product Analytics Dashboard](https://akr246.github.io/series/lab/product-analytics/) | Local analysis | Uses sample or pasted data, not production tracking. |
| 22 | [Nightly ETL Pipeline](https://akr246.github.io/series/lab/etl-pipeline/) | ETL workbench | Browser runs are manual. A scheduler example is included; no nightly server job is deployed. |
| 23 | [Live Event Stream](https://akr246.github.io/series/lab/event-stream/) | Same-browser stream | Local tab events only; no Kafka or hosted event broker. |
| 24 | [Price & Page Change Tracker](https://akr246.github.io/series/lab/change-tracker/) | Snapshot comparison | No background scraping; paste snapshots manually. |
| 25 | [Log Search Dashboard](https://akr246.github.io/series/lab/log-search/) | Local analysis | Reads pasted JSON lines; no remote log ingestion. |
| 26 | [CI/CD Pipeline from Scratch](https://akr246.github.io/series/lab/cicd/) | Configuration generator | The generated workflow must be installed in a repository to run on GitHub. |
| 27 | [Microservices on Kubernetes](https://akr246.github.io/series/lab/kubernetes/) | Manifest generator | No Kubernetes cluster is provisioned. |
| 28 | [Terraform Cloud Network](https://akr246.github.io/series/lab/terraform/) | Infrastructure generator | No cloud resources are created; applying Terraform requires your cloud account. |
| 29 | [Uptime Monitor](https://akr246.github.io/series/lab/uptime-monitor/) | Browser probe | CORS errors are inconclusive. Monitoring stops when the page closes. |
| 30 | [Mini-Heroku PaaS](https://akr246.github.io/series/lab/mini-paas/) | Deployment planner | Exports Docker and Compose configuration; no container hosting control plane. |
| 31 | [Expense Splitter](https://akr246.github.io/series/lab/expense-splitter/) | Local app | Uses integer cents; no bank transfers. |
| 32 | [Personal Budget Tracker](https://akr246.github.io/series/lab/budget-tracker/) | Local app | Data stays in this browser; export a backup. |
| 33 | [Checkout and Payments](https://akr246.github.io/series/lab/checkout/) | Payment simulation | No real payments, card collection or payment provider connection. |
| 34 | [Headless Storefront](https://akr246.github.io/series/lab/storefront/) | Local storefront | Static catalog and local cart; no inventory server or order fulfillment. |
| 35 | [Usage-Based Billing Engine](https://akr246.github.io/series/lab/usage-billing/) | Local billing calculator | Creates estimates, not charges or tax invoices. |
| 36 | [Gamified Habit Tracker](https://akr246.github.io/series/lab/habit-tracker/) | Local app | Uses local dates and browser storage. |
| 37 | [Spaced-Repetition Flashcards](https://akr246.github.io/series/lab/flashcards/) | Local app | Review progress is stored in this browser. |
| 38 | [Clinic Appointments and Records](https://akr246.github.io/series/lab/clinic/) | Synthetic-data demo | No secure medical-record backend. Do not enter real patient details. |
| 39 | [Developer Community Platform](https://akr246.github.io/series/lab/community/) | Local community prototype | Posts are stored only in your browser; not a public community. |
| 40 | [Job Application Kanban](https://akr246.github.io/series/lab/job-kanban/) | Local app | No job-board integration or automatic application submissions. |
| 41 | [Auth Service with Passkeys](https://akr246.github.io/series/lab/passkeys/) | WebAuthn demonstration | No server challenge verification, account system or production authentication service. |
| 42 | [Team Secrets Manager](https://akr246.github.io/series/lab/secrets/) | Local encryption prototype | No team sharing or audited vault service. Use demonstration secrets only. |
| 43 | [Vulnerability Scan Dashboard](https://akr246.github.io/series/lab/vulnerability-dashboard/) | Report viewer | Does not scan a deployed target or certify safety. |
| 44 | [Peer-to-Peer File Sharing](https://akr246.github.io/series/lab/file-sharing/) | WebRTC prototype | No signaling server or TURN relay. 5 MB demo limit; restrictive networks may fail. |
| 45 | [Bot-Proof Signup Form](https://akr246.github.io/series/lab/signup/) | Anti-bot demonstration | Client checks are bypassable; no bot-proof claim or real account creation. |
| 46 | [Offline-First Notes with Sync](https://akr246.github.io/series/lab/offline-notes/) | Local app | Service worker caches the app. Sync is same-browser only; no cloud synchronization. |
| 47 | [Multi-Stop Route Planner](https://akr246.github.io/series/lab/route-planner/) | Coordinate planner | Straight-line distances, not road routing or traffic-aware navigation. |
| 48 | [IoT Sensor Dashboard](https://akr246.github.io/series/lab/iot-dashboard/) | Sensor simulator | Synthetic telemetry; no physical IoT device connection. |
| 49 | [Smart Home Hub](https://akr246.github.io/series/lab/smart-home/) | Home simulator | Controls virtual devices only. |
| 50 | [Live GPS Fleet Tracker](https://akr246.github.io/series/lab/fleet-tracker/) | Fleet simulator | Positions are simulated, not real GPS tracking. |

## Resources

- [LLMs-from-scratch](https://akr246.github.io/series/lab/resources/llms-from-scratch.html) — Sebastian Raschka
- [awesome-llm-apps](https://akr246.github.io/series/lab/resources/awesome-llm-apps.html) — Shubham Saboo and contributors
- [ai-engineering-hub](https://akr246.github.io/series/lab/resources/ai-engineering-hub.html) — patchy631 and contributors
- [Project Ideas and Resources](https://akr246.github.io/series/lab/resources/project-ideas.html) — Arya Project Lab

## Deployment

Served as static files by the existing GitHub Pages deployment. All workbenches use dedicated directory URLs so refresh and deep links work. The original portfolio receives a separate Project Lab link; its existing assets and attribution are preserved.

## License

Original code under this directory is MIT licensed. This license does not relicense the surrounding portfolio template, PDF resources or linked third-party repositories.
