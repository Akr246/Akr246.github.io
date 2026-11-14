export const labProjects = [
  {
    "id": 1,
    "title": "Chat with Your PDFs",
    "slug": "pdf-chat",
    "description": "Extract passages from a PDF and search with source page citations.",
    "mode": "Local retrieval • no LLM",
    "limitation": "PDF text extraction and keyword ranking; scanned PDFs require OCR, and no generative model is connected.",
    "category": "AI & LLM Apps",
    "module": 1
  },
  {
    "id": 2,
    "title": "AI Pull-Request Reviewer",
    "slug": "pr-reviewer",
    "description": "Inspect a pasted diff for risky patterns and produce a review.",
    "mode": "Rule-based prototype",
    "limitation": "Deterministic checks, not an AI code review or a comprehensive security audit.",
    "category": "AI & LLM Apps",
    "module": 1
  },
  {
    "id": 3,
    "title": "Offline Voice Assistant",
    "slug": "voice-assistant",
    "description": "Speak typed commands and run a small set of local actions.",
    "mode": "Browser voice prototype",
    "limitation": "Speech synthesis uses installed voices. Optional speech recognition may use a browser cloud service; fully offline recognition is not supplied.",
    "category": "AI & LLM Apps",
    "module": 1
  },
  {
    "id": 4,
    "title": "Text-to-SQL Analyst",
    "slug": "text-to-sql",
    "description": "Translate supported questions into SQL over a sample sales dataset.",
    "mode": "Constrained analyst",
    "limitation": "Supports total sales, category totals and top products; no general LLM or database connection.",
    "category": "AI & LLM Apps",
    "module": 1
  },
  {
    "id": 5,
    "title": "Multi-Agent Researcher",
    "slug": "researcher",
    "description": "Compare supplied sources through planner, evidence and critique stages.",
    "mode": "Workflow prototype",
    "limitation": "Stages use deterministic text processing, not autonomous AI agents or live web research.",
    "category": "AI & LLM Apps",
    "module": 1
  },
  {
    "id": 6,
    "title": "Collaborative Whiteboard",
    "slug": "whiteboard",
    "description": "Draw, undo, export and synchronize strokes across local tabs.",
    "mode": "Same-browser collaboration",
    "limitation": "Uses same-origin browser storage events; no remote multi-user server.",
    "category": "Real-Time & Collaboration",
    "module": 2
  },
  {
    "id": 7,
    "title": "Live Co-Editing Notes",
    "slug": "co-editing-notes",
    "description": "Edit shared notes across two tabs and export Markdown.",
    "mode": "Same-browser collaboration",
    "limitation": "Last-write-wins synchronization in one browser; no CRDT or remote sessions.",
    "category": "Real-Time & Collaboration",
    "module": 2
  },
  {
    "id": 8,
    "title": "Video Meeting App",
    "slug": "video-meeting",
    "description": "Start a camera preview and connect a peer using manual signaling.",
    "mode": "WebRTC prototype",
    "limitation": "Manual offer/answer exchange; no hosted signaling or TURN relay. Network restrictions may block calls.",
    "category": "Real-Time & Collaboration",
    "module": 2
  },
  {
    "id": 9,
    "title": "Live Quiz Game",
    "slug": "quiz-game",
    "description": "Answer timed questions and compare a local scoreboard.",
    "mode": "Local game",
    "limitation": "Scores are stored in this browser; no hosted multiplayer room.",
    "category": "Real-Time & Collaboration",
    "module": 2
  },
  {
    "id": 10,
    "title": "Live Bidding Auction",
    "slug": "auction",
    "description": "Bid against a reserve price in a synchronized local auction.",
    "mode": "Same-browser simulation",
    "limitation": "No money, remote bidding, identity checks or server-enforced auction.",
    "category": "Real-Time & Collaboration",
    "module": 2
  },
  {
    "id": 11,
    "title": "Link Shortener with Analytics",
    "slug": "link-shortener",
    "description": "Generate portable encoded links and count local visits.",
    "mode": "Browser utility",
    "limitation": "Links encode their destination and may be longer; analytics are browser-local, not a global short-link service.",
    "category": "Developer Tools",
    "module": 3
  },
  {
    "id": 12,
    "title": "API Rate Limiter",
    "slug": "rate-limiter",
    "description": "Experiment with a token bucket and inspect accepted requests.",
    "mode": "Algorithm simulator",
    "limitation": "Demonstrates rate limiting in memory; does not protect a hosted API.",
    "category": "Developer Tools",
    "module": 3
  },
  {
    "id": 13,
    "title": "Webhook Inspector",
    "slug": "webhook-inspector",
    "description": "Validate pasted JSON and inspect headers and payload types.",
    "mode": "Payload workbench",
    "limitation": "Does not expose a public webhook receiver.",
    "category": "Developer Tools",
    "module": 3
  },
  {
    "id": 14,
    "title": "Feature-Flag Service",
    "slug": "feature-flags",
    "description": "Evaluate deterministic user rollouts and export configuration.",
    "mode": "Local evaluation engine",
    "limitation": "No hosted flag API or authenticated administration.",
    "category": "Developer Tools",
    "module": 3
  },
  {
    "id": 15,
    "title": "Terminal Dashboard (TUI)",
    "slug": "terminal-dashboard",
    "description": "Explore a keyboard-friendly terminal command interface.",
    "mode": "Browser terminal",
    "limitation": "Shows browser and project data, not host OS metrics or shell access.",
    "category": "Developer Tools",
    "module": 3
  },
  {
    "id": 16,
    "title": "Multi-Tenant SaaS Starter",
    "slug": "saas-starter",
    "description": "Switch demo tenants and manage isolated local task lists.",
    "mode": "Local architecture demo",
    "limitation": "Tenant separation is browser namespacing, not secure server authorization.",
    "category": "SaaS & Business",
    "module": 4
  },
  {
    "id": 17,
    "title": "Appointment Booking App",
    "slug": "booking",
    "description": "Reserve available time slots and export calendar invitations.",
    "mode": "Local booking tool",
    "limitation": "Availability and bookings exist only in this browser.",
    "category": "SaaS & Business",
    "module": 4
  },
  {
    "id": 18,
    "title": "E-Signature Tool",
    "slug": "e-signature",
    "description": "Draw a signature and export a document with its SHA-256 hash.",
    "mode": "Local signing tool",
    "limitation": "No identity verification, trust service or legally qualified signature.",
    "category": "SaaS & Business",
    "module": 4
  },
  {
    "id": 19,
    "title": "Customer Support Inbox",
    "slug": "support-inbox",
    "description": "Triage tickets, assign priority and write replies.",
    "mode": "Local workflow",
    "limitation": "Replies are saved locally, not sent to customers.",
    "category": "SaaS & Business",
    "module": 4
  },
  {
    "id": 20,
    "title": "Admin Panel Generator",
    "slug": "admin-generator",
    "description": "Generate a usable CRUD form from a JSON schema.",
    "mode": "Local generator",
    "limitation": "Exports schema and records; no database or authenticated admin backend.",
    "category": "SaaS & Business",
    "module": 4
  },
  {
    "id": 21,
    "title": "Product Analytics Dashboard",
    "slug": "product-analytics",
    "description": "Inspect event counts, users and conversion from JSON events.",
    "mode": "Local analysis",
    "limitation": "Uses sample or pasted data, not production tracking.",
    "category": "Data & Analytics",
    "module": 5
  },
  {
    "id": 22,
    "title": "Nightly ETL Pipeline",
    "slug": "etl-pipeline",
    "description": "Clean CSV rows, deduplicate and export the resulting dataset.",
    "mode": "ETL workbench",
    "limitation": "Browser runs are manual. A scheduler example is included; no nightly server job is deployed.",
    "category": "Data & Analytics",
    "module": 5
  },
  {
    "id": 23,
    "title": "Live Event Stream",
    "slug": "event-stream",
    "description": "Publish local events and monitor a filtered stream.",
    "mode": "Same-browser stream",
    "limitation": "Local tab events only; no Kafka or hosted event broker.",
    "category": "Data & Analytics",
    "module": 5
  },
  {
    "id": 24,
    "title": "Price & Page Change Tracker",
    "slug": "change-tracker",
    "description": "Compare saved page snapshots and track price differences.",
    "mode": "Snapshot comparison",
    "limitation": "No background scraping; paste snapshots manually.",
    "category": "Data & Analytics",
    "module": 5
  },
  {
    "id": 25,
    "title": "Log Search Dashboard",
    "slug": "log-search",
    "description": "Filter structured logs by severity and search text.",
    "mode": "Local analysis",
    "limitation": "Reads pasted JSON lines; no remote log ingestion.",
    "category": "Data & Analytics",
    "module": 5
  },
  {
    "id": 26,
    "title": "CI/CD Pipeline from Scratch",
    "slug": "cicd",
    "description": "Generate a GitHub Actions validation pipeline and inspect stages.",
    "mode": "Configuration generator",
    "limitation": "The generated workflow must be installed in a repository to run on GitHub.",
    "category": "DevOps & Cloud",
    "module": 6
  },
  {
    "id": 27,
    "title": "Microservices on Kubernetes",
    "slug": "kubernetes",
    "description": "Generate Deployment and Service manifests with resource limits.",
    "mode": "Manifest generator",
    "limitation": "No Kubernetes cluster is provisioned.",
    "category": "DevOps & Cloud",
    "module": 6
  },
  {
    "id": 28,
    "title": "Terraform Cloud Network",
    "slug": "terraform",
    "description": "Generate a VPC and subnet configuration with input checks.",
    "mode": "Infrastructure generator",
    "limitation": "No cloud resources are created; applying Terraform requires your cloud account.",
    "category": "DevOps & Cloud",
    "module": 6
  },
  {
    "id": 29,
    "title": "Uptime Monitor",
    "slug": "uptime-monitor",
    "description": "Measure browser-reachable URLs and record response history.",
    "mode": "Browser probe",
    "limitation": "CORS errors are inconclusive. Monitoring stops when the page closes.",
    "category": "DevOps & Cloud",
    "module": 6
  },
  {
    "id": 30,
    "title": "Mini-Heroku PaaS",
    "slug": "mini-paas",
    "description": "Build a deployment configuration for a Node application.",
    "mode": "Deployment planner",
    "limitation": "Exports Docker and Compose configuration; no container hosting control plane.",
    "category": "DevOps & Cloud",
    "module": 6
  },
  {
    "id": 31,
    "title": "Expense Splitter",
    "slug": "expense-splitter",
    "description": "Split shared costs and calculate settlement transfers.",
    "mode": "Local app",
    "limitation": "Uses integer cents; no bank transfers.",
    "category": "Fintech & Commerce",
    "module": 7
  },
  {
    "id": 32,
    "title": "Personal Budget Tracker",
    "slug": "budget-tracker",
    "description": "Record income and expenses and inspect category balances.",
    "mode": "Local app",
    "limitation": "Data stays in this browser; export a backup.",
    "category": "Fintech & Commerce",
    "module": 7
  },
  {
    "id": 33,
    "title": "Checkout and Payments",
    "slug": "checkout",
    "description": "Calculate a cart total and create a demo receipt.",
    "mode": "Payment simulation",
    "limitation": "No real payments, card collection or payment provider connection.",
    "category": "Fintech & Commerce",
    "module": 7
  },
  {
    "id": 34,
    "title": "Headless Storefront",
    "slug": "storefront",
    "description": "Filter a product catalog and manage a persistent shopping cart.",
    "mode": "Local storefront",
    "limitation": "Static catalog and local cart; no inventory server or order fulfillment.",
    "category": "Fintech & Commerce",
    "module": 7
  },
  {
    "id": 35,
    "title": "Usage-Based Billing Engine",
    "slug": "usage-billing",
    "description": "Calculate graduated tiers and deduplicate metered usage events.",
    "mode": "Local billing calculator",
    "limitation": "Creates estimates, not charges or tax invoices.",
    "category": "Fintech & Commerce",
    "module": 7
  },
  {
    "id": 36,
    "title": "Gamified Habit Tracker",
    "slug": "habit-tracker",
    "description": "Track daily habits, earn points and calculate streaks.",
    "mode": "Local app",
    "limitation": "Uses local dates and browser storage.",
    "category": "Health, Learning & Community",
    "module": 8
  },
  {
    "id": 37,
    "title": "Spaced-Repetition Flashcards",
    "slug": "flashcards",
    "description": "Create cards and schedule reviews using recall ratings.",
    "mode": "Local app",
    "limitation": "Review progress is stored in this browser.",
    "category": "Health, Learning & Community",
    "module": 8
  },
  {
    "id": 38,
    "title": "Clinic Appointments and Records",
    "slug": "clinic",
    "description": "Explore a clinic workflow using fictional patient records.",
    "mode": "Synthetic-data demo",
    "limitation": "No secure medical-record backend. Do not enter real patient details.",
    "category": "Health, Learning & Community",
    "module": 8
  },
  {
    "id": 39,
    "title": "Developer Community Platform",
    "slug": "community",
    "description": "Create local discussion posts, comments and votes.",
    "mode": "Local community prototype",
    "limitation": "Posts are stored only in your browser; not a public community.",
    "category": "Health, Learning & Community",
    "module": 8
  },
  {
    "id": 40,
    "title": "Job Application Kanban",
    "slug": "job-kanban",
    "description": "Track applications across stages and export your board.",
    "mode": "Local app",
    "limitation": "No job-board integration or automatic application submissions.",
    "category": "Health, Learning & Community",
    "module": 8
  },
  {
    "id": 41,
    "title": "Auth Service with Passkeys",
    "slug": "passkeys",
    "description": "Create and exercise a browser WebAuthn credential.",
    "mode": "WebAuthn demonstration",
    "limitation": "No server challenge verification, account system or production authentication service.",
    "category": "Security & Auth",
    "module": 9
  },
  {
    "id": 42,
    "title": "Team Secrets Manager",
    "slug": "secrets",
    "description": "Encrypt a text vault using a password and export ciphertext.",
    "mode": "Local encryption prototype",
    "limitation": "No team sharing or audited vault service. Use demonstration secrets only.",
    "category": "Security & Auth",
    "module": 9
  },
  {
    "id": 43,
    "title": "Vulnerability Scan Dashboard",
    "slug": "vulnerability-dashboard",
    "description": "Triage imported npm audit findings by severity.",
    "mode": "Report viewer",
    "limitation": "Does not scan a deployed target or certify safety.",
    "category": "Security & Auth",
    "module": 9
  },
  {
    "id": 44,
    "title": "Peer-to-Peer File Sharing",
    "slug": "file-sharing",
    "description": "Transfer a file over a WebRTC data channel with manual signaling.",
    "mode": "WebRTC prototype",
    "limitation": "No signaling server or TURN relay. 5 MB demo limit; restrictive networks may fail.",
    "category": "Security & Auth",
    "module": 9
  },
  {
    "id": 45,
    "title": "Bot-Proof Signup Form",
    "slug": "signup",
    "description": "Explore honeypot and timing checks on a signup form.",
    "mode": "Anti-bot demonstration",
    "limitation": "Client checks are bypassable; no bot-proof claim or real account creation.",
    "category": "Security & Auth",
    "module": 9
  },
  {
    "id": 46,
    "title": "Offline-First Notes with Sync",
    "slug": "offline-notes",
    "description": "Keep notes offline and sync across browser tabs.",
    "mode": "Local app",
    "limitation": "Service worker caches the app. Sync is same-browser only; no cloud synchronization.",
    "category": "Mobile, Maps & IoT",
    "module": 10
  },
  {
    "id": 47,
    "title": "Multi-Stop Route Planner",
    "slug": "route-planner",
    "description": "Order coordinates using a nearest-neighbor route heuristic.",
    "mode": "Coordinate planner",
    "limitation": "Straight-line distances, not road routing or traffic-aware navigation.",
    "category": "Mobile, Maps & IoT",
    "module": 10
  },
  {
    "id": 48,
    "title": "IoT Sensor Dashboard",
    "slug": "iot-dashboard",
    "description": "Explore sensor readings, thresholds and CSV export.",
    "mode": "Sensor simulator",
    "limitation": "Synthetic telemetry; no physical IoT device connection.",
    "category": "Mobile, Maps & IoT",
    "module": 10
  },
  {
    "id": 49,
    "title": "Smart Home Hub",
    "slug": "smart-home",
    "description": "Control virtual rooms and evaluate simple automation rules.",
    "mode": "Home simulator",
    "limitation": "Controls virtual devices only.",
    "category": "Mobile, Maps & IoT",
    "module": 10
  },
  {
    "id": 50,
    "title": "Live GPS Fleet Tracker",
    "slug": "fleet-tracker",
    "description": "Visualize moving vehicles on a coordinate plot and inspect status.",
    "mode": "Fleet simulator",
    "limitation": "Positions are simulated, not real GPS tracking.",
    "category": "Mobile, Maps & IoT",
    "module": 10
  }
];
export const labCategories = ["AI & LLM Apps","Real-Time & Collaboration","Developer Tools","SaaS & Business","Data & Analytics","DevOps & Cloud","Fintech & Commerce","Health, Learning & Community","Security & Auth","Mobile, Maps & IoT"];
