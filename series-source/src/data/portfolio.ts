export type Palette={from:string;via:string;to:string;accent:string};
export type Metric={value:string;label:string};
export type Project={id:string;title:string;year:string;genre:string;logline:string;stack:string[];build:string[];features:string[];metrics:Metric[];github?:string;palette:Palette;motif:'shield'|'flow'|'tenants'};
export type Achievement={id:string;title:string;org:string;detail:string;laurel:string;link?:string};
export type Certification={issuer:string;name:string;link:string};
export type Skill={name:string;mono:string;note?:string};
export type SkillCategory={id:string;title:string;subtitle:string;skills:Skill[]};
export type Episode={code:string;title:string;description:string;tags:string[];runtime:string;palette:Palette};
export type Season={number:number;title:string;period:string;synopsis:string;episodes:Episode[]};
export type TopPick={label:string;title:string;detail:string;palette:Palette};
export type IntroSlide={kicker:string;title:string;lines:string[];chips?:string[]};
export const profile = {
  "fullName": "Arya K. Ravi",
  "displayName": "Arya K. Ravi",
  "firstName": "ARYA",
  "seriesTag": "THE SERIES",
  "originalLabel": "AN ARYA ORIGINAL",
  "role": "Aspiring Associate Product Manager",
  "tagline": [
    "Product Strategy",
    "Psychology",
    "AI for Business"
  ],
  "intro": "A psychology graduate and MBA in AI for Business candidate connecting human insight, product thinking and data. Experience across academic operations, technical programme delivery and talent transformation.",
  "location": "Bengaluru, India",
  "email": "akr24698@gmail.com",
  "links": {
    "linkedin": "https://www.linkedin.com/in/akr246",
    "github": "/series/assets/knowledge.pdf"
  },
  "resumePdf": "/series/assets/arya-resume.pdf",
  "portrait": {
    "src": "/series/assets/arya-monogram.svg",
    "srcSet": "",
    "alt": "Arya K. Ravi cinematic monogram"
  },
  "interests": [
    "AI Product Management",
    "Human-centred Design",
    "AI Ethics & Governance"
  ]
};
export const education = [
  {
    "school": "BITS Pilani",
    "place": "WILP",
    "degree": "MBA in AI for Business",
    "period": "May 2026 – Present",
    "score": "Pursuing"
  },
  {
    "school": "Mangalore University",
    "place": "Mangaluru",
    "degree": "MSc Psychology",
    "period": "2019 – 2023",
    "score": "Completed"
  },
  {
    "school": "University of Calicut",
    "place": "Sahrdaya College of Advanced Studies",
    "degree": "BSc Psychology",
    "period": "Undergraduate foundation",
    "score": "Completed"
  }
];
export const experience = [
  {
    "company": "CHRIST University",
    "role": "Academic Product & Operations Manager",
    "period": "September 2025 – Present",
    "place": "Bengaluru · Part time",
    "points": [
      "Defined workflows and coordinated cross-functional academic initiatives.",
      "Supported programme data quality, validation and reporting. Role titles follow the supplied résumé."
    ]
  },
  {
    "company": "Align Technē",
    "role": "Technical Program Manager (Operations)",
    "period": "July 2024 – January 2025",
    "place": "Remote · APAC",
    "points": [
      "Coordinated agile delivery across distributed teams.",
      "Scoped requirements and explored GenAI workflow automation."
    ]
  },
  {
    "company": "Omnicom Media Group",
    "role": "Product & Talent Transformation Trainee",
    "period": "November 2023 – June 2024",
    "place": "Hybrid",
    "points": [
      "Supported onboarding workflows, internal stakeholders and structured feedback.",
      "Used SQL and Tableau to explore onboarding friction."
    ]
  }
];
export const projects: Project[] = [
  {
    "id": "akamai",
    "title": "The Human Side of Change",
    "year": "2026",
    "genre": "Academic • Psychology • Strategy",
    "logline": "An organisational behaviour study of workforce restructuring, employee trust and retention at Akamai.",
    "stack": [
      "Action research",
      "Psychological contract",
      "Organisational justice"
    ],
    "build": [
      "Individual academic study by Arya K. Ravi, July 2026.",
      "Examined restructuring through psychological contract, Herzberg, Maslow, equity and organisational justice frameworks.",
      "Proposed clearer communication, workload optimisation and attention to job security. These are academic recommendations, not implemented outcomes."
    ],
    "features": [
      "Psychological safety",
      "Motivation and hygiene factors",
      "Employee commitment",
      "Retention recommendations"
    ],
    "metrics": [
      {
        "value": "5",
        "label": "core OB frameworks"
      },
      {
        "value": "3",
        "label": "recommendation themes"
      }
    ],
    "github": "/series/assets/akamai-research.pdf",
    "palette": {
      "from": "#24060b",
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a"
    },
    "motif": "shield"
  },
  {
    "id": "lego",
    "title": "LEGO: The Next Chapter",
    "year": "2026",
    "genre": "Academic • Marketing • AI",
    "logline": "Four connected lenses on LEGO’s digital marketing, customer relationships and brand evolution.",
    "stack": [
      "Segmentation",
      "CRM",
      "4 Ps to 4 Es",
      "D2C marketing"
    ],
    "build": [
      "Individual situated-learning project by Arya K. Ravi, August 2026.",
      "Connected dynamic segmentation, digital repositioning, experience-led marketing and sustainability.",
      "Proposed a Builder Lifecycle model, phased pilot and experience-based loyalty. Not a deployed LEGO product or client engagement."
    ],
    "features": [
      "Lifecycle modelling proposal",
      "First-party identity and loyalty",
      "Digital brand repositioning",
      "Clear sustainability disclosure"
    ],
    "metrics": [
      {
        "value": "4",
        "label": "marketing themes"
      },
      {
        "value": "4",
        "label": "proposed rollout quarters"
      },
      {
        "value": "2",
        "label": "proposed pilot markets"
      }
    ],
    "github": "/series/assets/lego-strategy.pdf",
    "palette": {
      "from": "#1c1003",
      "via": "#6b3c06",
      "to": "#0a0806",
      "accent": "#ffb547"
    },
    "motif": "tenants"
  },
  {
    "id": "finance",
    "title": "Two Companies. Two Engines.",
    "year": "2026",
    "genre": "Group study • Finance • Analytics",
    "logline": "YASKAWA versus FANUC: the business economics behind financial ratios.",
    "stack": [
      "Ratio analysis",
      "DuPont",
      "Common-size statements",
      "Cash conversion cycle"
    ],
    "build": [
      "Co-authored by Arko Goswami, Arya K. Ravi, Deepthi Prakash and Yajnesh P. Individual responsibilities are not specified in the supplied report.",
      "Analysed statements described as sourced from S&P Capital IQ Pro across the report’s FY2022–FY2026 period.",
      "Compared margins, asset turnover and surplus-cash effects. Academic findings are not independently audited."
    ],
    "features": [
      "DuPont decomposition",
      "Constant-currency comparison",
      "Operating versus headline ROCE",
      "Working-capital and SWOT synthesis"
    ],
    "metrics": [
      {
        "value": "2",
        "label": "companies compared"
      },
      {
        "value": "4",
        "label": "co-authors"
      },
      {
        "value": "5",
        "label": "fiscal years in report"
      }
    ],
    "github": "/series/assets/financial-analysis.pdf",
    "palette": {
      "from": "#04121f",
      "via": "#0f4c6e",
      "to": "#05080d",
      "accent": "#4cc9ff"
    },
    "motif": "flow"
  },
  {
    "id": "workflow",
    "title": "Less Tracking. More Progress.",
    "year": "2024–25",
    "genre": "Professional • AI • Operations",
    "logline": "An LLM workflow prototype for requirements tracking and clearer cross-team delivery.",
    "stack": [
      "LLMs",
      "PRDs",
      "User stories",
      "Acceptance criteria"
    ],
    "build": [
      "At Align Technē, designed an AI workflow prototype and scoped requirements for validation, as described in the résumé.",
      "Results are self-reported in the résumé; underlying measurement data and internal deliverables were not supplied."
    ],
    "features": [
      "Requirement tracking",
      "Cross-team handoff clarity",
      "Beta validation",
      "Technical scoping"
    ],
    "metrics": [
      {
        "value": "40%",
        "label": "less tracking effort — résumé-reported"
      },
      {
        "value": "25%",
        "label": "validation improvement — résumé-reported"
      }
    ],
    "github": "/series/assets/arya-resume.pdf",
    "palette": {
      "from": "#120822",
      "via": "#3d1a6e",
      "to": "#07060c",
      "accent": "#b98bff"
    },
    "motif": "shield"
  },
  {
    "id": "analytics",
    "title": "From Signals to Decisions",
    "year": "2023–24",
    "genre": "Professional • Data • Product",
    "logline": "SQL and Tableau dashboards connecting onboarding friction to prioritised improvements.",
    "stack": [
      "SQL",
      "Tableau",
      "Funnel analysis",
      "Cohort retention"
    ],
    "build": [
      "At Omnicom Media Group, built onboarding analytics and synthesised telemetry into backlog recommendations, as described in the résumé.",
      "Results are self-reported in the résumé; source dashboards and cohort data were not supplied."
    ],
    "features": [
      "Onboarding visibility",
      "Friction identification",
      "Prioritised recommendations",
      "Feedback loops"
    ],
    "metrics": [
      {
        "value": "18%",
        "label": "conversion improvement — résumé-reported"
      },
      {
        "value": "18%",
        "label": "retention improvement — résumé-reported"
      }
    ],
    "github": "/series/assets/arya-resume.pdf",
    "palette": {
      "from": "#03150f",
      "via": "#0d5a40",
      "to": "#050a08",
      "accent": "#46e3a8"
    },
    "motif": "flow"
  }
];
export const achievements: Achievement[] = [
  {
    "id": "0",
    "title": "MSc Psychology",
    "org": "Mangalore University",
    "detail": "A foundation in behaviour, assessment, counselling and research.",
    "laurel": "Education"
  },
  {
    "id": "1",
    "title": "AI for Business",
    "org": "BITS Pilani · WILP",
    "detail": "Pursuing an MBA connecting AI applications with business decisions.",
    "laurel": "In progress"
  },
  {
    "id": "2",
    "title": "Programme Delivery",
    "org": "Align Technē",
    "detail": "Coordinating technical work across distributed APAC teams.",
    "laurel": "Experience"
  },
  {
    "id": "3",
    "title": "Strategy in Practice",
    "org": "Academic studies",
    "detail": "Individual studies of LEGO marketing and Akamai organisational behaviour.",
    "laurel": "Research"
  },
  {
    "id": "4",
    "title": "Collaborative Analysis",
    "org": "MBA group project",
    "detail": "Co-authored a financial comparison of YASKAWA and FANUC.",
    "laurel": "Teamwork"
  }
];
export const certifications: Certification[] = [
  {
    "issuer": "Google",
    "name": "Data Analytics",
    "link": "/series/assets/arya-resume.pdf"
  },
  {
    "issuer": "IBM",
    "name": "Key Tech Foundations for GenAI",
    "link": "/series/assets/arya-resume.pdf"
  },
  {
    "issuer": "PMI",
    "name": "GenAI Overview for Project Managers",
    "link": "/series/assets/arya-resume.pdf"
  }
];
export const skillCategories: SkillCategory[] = [
  {
    "id": "product",
    "title": "Product Strategy",
    "subtitle": "From problem to priority",
    "skills": [
      {
        "name": "PRDs",
        "mono": "PR"
      },
      {
        "name": "User research",
        "mono": "Us"
      },
      {
        "name": "Roadmaps",
        "mono": "Ro"
      },
      {
        "name": "A/B testing",
        "mono": "A/"
      }
    ]
  },
  {
    "id": "delivery",
    "title": "Delivery",
    "subtitle": "Connecting teams",
    "skills": [
      {
        "name": "Agile / Scrum",
        "mono": "Ag"
      },
      {
        "name": "Jira",
        "mono": "Ji"
      },
      {
        "name": "Stakeholder management",
        "mono": "St"
      },
      {
        "name": "Notion",
        "mono": "No"
      }
    ]
  },
  {
    "id": "data",
    "title": "Data & Analytics",
    "subtitle": "Evidence for decisions",
    "skills": [
      {
        "name": "SQL",
        "mono": "SQ"
      },
      {
        "name": "Tableau",
        "mono": "Ta"
      },
      {
        "name": "Looker",
        "mono": "Lo"
      },
      {
        "name": "Excel",
        "mono": "Ex"
      }
    ]
  },
  {
    "id": "platforms",
    "title": "Platforms",
    "subtitle": "Operational visibility",
    "skills": [
      {
        "name": "Salesforce",
        "mono": "Sa"
      },
      {
        "name": "Google Sheets",
        "mono": "Go"
      },
      {
        "name": "Slack",
        "mono": "Sl"
      },
      {
        "name": "Product analytics",
        "mono": "Pr"
      }
    ]
  },
  {
    "id": "ai",
    "title": "AI & Automation",
    "subtitle": "Intelligent workflows",
    "skills": [
      {
        "name": "GenAI",
        "mono": "Ge"
      },
      {
        "name": "LLMs",
        "mono": "LL"
      },
      {
        "name": "Claude",
        "mono": "Cl"
      },
      {
        "name": "Workflow optimisation",
        "mono": "Wo"
      }
    ]
  },
  {
    "id": "people",
    "title": "Human Insight",
    "subtitle": "Psychology foundation",
    "skills": [
      {
        "name": "Behavioural research",
        "mono": "Be"
      },
      {
        "name": "Counselling",
        "mono": "Co"
      },
      {
        "name": "Organisational behaviour",
        "mono": "Or"
      },
      {
        "name": "Research methods",
        "mono": "Re"
      }
    ]
  },
  {
    "id": "interests",
    "title": "Next Chapter",
    "subtitle": "Interests and ongoing learning",
    "skills": [
      {
        "name": "AI product management",
        "mono": "AI"
      },
      {
        "name": "Responsible AI",
        "mono": "Re"
      },
      {
        "name": "Enterprise risk",
        "mono": "En"
      },
      {
        "name": "AI strategy",
        "mono": "AI"
      }
    ]
  }
];
export const skillEvidence: Record<string,string[]> = {
  "SQL": [
    "Onboarding analytics described in the résumé"
  ],
  "Tableau": [
    "Product analytics project at Omnicom"
  ],
  "PRDs": [
    "AI workflow prototype at Align Technē"
  ],
  "Organisational behaviour": [
    "Akamai academic case study"
  ],
  "GenAI": [
    "IBM and PMI learning listed in résumé"
  ]
};
export const seasons: Season[] = [
  {
    "number": 1,
    "title": "Understanding People",
    "period": "Psychology foundations",
    "synopsis": "Learning how behaviour, motivation and context shape experiences.",
    "episodes": [
      {
        "code": "S01 E01",
        "title": "The Foundation",
        "description": "BSc Psychology at the University of Calicut.",
        "tags": [
          "Psychology",
          "Behaviour"
        ],
        "runtime": "Undergraduate",
        "palette": {
          "from": "#24060b",
          "via": "#6e0d1d",
          "to": "#09070a",
          "accent": "#ff3d5a"
        }
      },
      {
        "code": "S01 E02",
        "title": "The Human Lens",
        "description": "MSc Psychology at Mangalore University.",
        "tags": [
          "Research",
          "Counselling"
        ],
        "runtime": "2019 – 2023",
        "palette": {
          "from": "#1c1003",
          "via": "#6b3c06",
          "to": "#0a0806",
          "accent": "#ffb547"
        }
      }
    ]
  },
  {
    "number": 2,
    "title": "Making Work Better",
    "period": "2023 – 2024",
    "synopsis": "Talent transformation and onboarding analytics.",
    "episodes": [
      {
        "code": "S02 E01",
        "title": "The Experience Designer",
        "description": "Supported onboarding and structured feedback at Omnicom.",
        "tags": [
          "Onboarding",
          "Stakeholders"
        ],
        "runtime": "Nov 2023 – Jun 2024",
        "palette": {
          "from": "#1c1003",
          "via": "#6b3c06",
          "to": "#0a0806",
          "accent": "#ffb547"
        }
      },
      {
        "code": "S02 E02",
        "title": "The Data Storyteller",
        "description": "Explored funnels with SQL and Tableau.",
        "tags": [
          "SQL",
          "Tableau"
        ],
        "runtime": "Professional project",
        "palette": {
          "from": "#04121f",
          "via": "#0f4c6e",
          "to": "#05080d",
          "accent": "#4cc9ff"
        }
      }
    ]
  },
  {
    "number": 3,
    "title": "Connecting Teams",
    "period": "2024 – 2025",
    "synopsis": "Programme management at Align Technē.",
    "episodes": [
      {
        "code": "S03 E01",
        "title": "The Programme Manager",
        "description": "Coordinated delivery across APAC teams.",
        "tags": [
          "Agile",
          "Delivery"
        ],
        "runtime": "Jul 2024 – Jan 2025",
        "palette": {
          "from": "#04121f",
          "via": "#0f4c6e",
          "to": "#05080d",
          "accent": "#4cc9ff"
        }
      },
      {
        "code": "S03 E02",
        "title": "The Workflow Thinker",
        "description": "Scoped an LLM requirements-tracking prototype.",
        "tags": [
          "PRDs",
          "LLMs"
        ],
        "runtime": "Professional project",
        "palette": {
          "from": "#120822",
          "via": "#3d1a6e",
          "to": "#07060c",
          "accent": "#b98bff"
        }
      }
    ]
  },
  {
    "number": 4,
    "title": "People, Product & AI",
    "period": "2025 – Present",
    "synopsis": "Academic operations, an MBA and business strategy.",
    "episodes": [
      {
        "code": "S04 E01",
        "title": "The Operator",
        "description": "Academic operations at CHRIST University.",
        "tags": [
          "Operations",
          "Data quality"
        ],
        "runtime": "Sep 2025 – Present",
        "palette": {
          "from": "#120822",
          "via": "#3d1a6e",
          "to": "#07060c",
          "accent": "#b98bff"
        }
      },
      {
        "code": "S04 E02",
        "title": "The Business Learner",
        "description": "MBA in AI for Business at BITS Pilani.",
        "tags": [
          "MBA",
          "AI"
        ],
        "runtime": "May 2026 – Present",
        "palette": {
          "from": "#03150f",
          "via": "#0d5a40",
          "to": "#050a08",
          "accent": "#46e3a8"
        }
      },
      {
        "code": "S04 E03",
        "title": "The Researcher",
        "description": "LEGO, Akamai and YASKAWA versus FANUC studies.",
        "tags": [
          "Marketing",
          "OB",
          "Finance"
        ],
        "runtime": "2026",
        "palette": {
          "from": "#24060b",
          "via": "#6e0d1d",
          "to": "#09070a",
          "accent": "#ff3d5a"
        }
      }
    ]
  },
  {
    "number": 5,
    "title": "What Comes Next",
    "period": "In progress",
    "synopsis": "Working towards Associate Product Manager opportunities.",
    "episodes": [
      {
        "code": "S05 E01",
        "title": "The Next Chapter",
        "description": "Bringing human insight to useful AI products.",
        "tags": [
          "Product",
          "Responsible AI"
        ],
        "runtime": "Career direction",
        "palette": {
          "from": "#03150f",
          "via": "#0d5a40",
          "to": "#050a08",
          "accent": "#46e3a8"
        }
      }
    ]
  }
];
export const topPicks: TopPick[] = [
  {
    "label": "Human lens",
    "title": "Psychology",
    "detail": "MSc foundation in behaviour",
    "palette": {
      "from": "#24060b",
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a"
    }
  },
  {
    "label": "Business direction",
    "title": "AI for Business",
    "detail": "MBA · BITS Pilani · Pursuing",
    "palette": {
      "from": "#1c1003",
      "via": "#6b3c06",
      "to": "#0a0806",
      "accent": "#ffb547"
    }
  },
  {
    "label": "Marketing study",
    "title": "LEGO",
    "detail": "Customer relationships and digital strategy",
    "palette": {
      "from": "#04121f",
      "via": "#0f4c6e",
      "to": "#05080d",
      "accent": "#4cc9ff"
    }
  },
  {
    "label": "People study",
    "title": "Akamai",
    "detail": "Trust and organisational change",
    "palette": {
      "from": "#120822",
      "via": "#3d1a6e",
      "to": "#07060c",
      "accent": "#b98bff"
    }
  },
  {
    "label": "Group research",
    "title": "YASKAWA × FANUC",
    "detail": "Four-person financial analysis",
    "palette": {
      "from": "#03150f",
      "via": "#0d5a40",
      "to": "#050a08",
      "accent": "#46e3a8"
    }
  },
  {
    "label": "Professional project",
    "title": "AI Workflows",
    "detail": "Requirements-tracking prototype",
    "palette": {
      "from": "#24060b",
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a"
    }
  },
  {
    "label": "Data tools",
    "title": "SQL + Tableau",
    "detail": "Funnel visibility and decisions",
    "palette": {
      "from": "#1c1003",
      "via": "#6b3c06",
      "to": "#0a0806",
      "accent": "#ffb547"
    }
  },
  {
    "label": "Delivery",
    "title": "APAC Teams",
    "detail": "Technical programme management",
    "palette": {
      "from": "#04121f",
      "via": "#0f4c6e",
      "to": "#05080d",
      "accent": "#4cc9ff"
    }
  },
  {
    "label": "Learning",
    "title": "Google · IBM · PMI",
    "detail": "Learning listed in résumé",
    "palette": {
      "from": "#120822",
      "via": "#3d1a6e",
      "to": "#07060c",
      "accent": "#b98bff"
    }
  },
  {
    "label": "Next chapter",
    "title": "Product Management",
    "detail": "Aspiring Associate Product Manager",
    "palette": {
      "from": "#03150f",
      "via": "#0d5a40",
      "to": "#050a08",
      "accent": "#46e3a8"
    }
  }
];
export const introSlides: IntroSlide[] = [
  {
    "kicker": "The foundation",
    "title": "People first.",
    "lines": [
      "MSc Psychology · Mangalore University",
      "Understanding behaviour and human needs."
    ]
  },
  {
    "kicker": "The experience",
    "title": "Make work better.",
    "lines": [
      "Omnicom · Talent transformation",
      "Align Technē · Programme delivery",
      "CHRIST · Academic operations"
    ]
  },
  {
    "kicker": "The toolkit",
    "title": "Evidence into action.",
    "lines": [
      "PRDs, user research and roadmaps",
      "SQL, Tableau and product analytics",
      "GenAI workflow exploration"
    ]
  },
  {
    "kicker": "Selected work",
    "title": "Five Originals.",
    "lines": [
      "LEGO · Marketing strategy",
      "Akamai · Organisational behaviour",
      "YASKAWA × FANUC · Group analysis",
      "AI workflows and onboarding analytics"
    ]
  },
  {
    "kicker": "Always learning",
    "title": "AI for Business.",
    "lines": [
      "MBA · BITS Pilani WILP · Pursuing",
      "Google Data Analytics",
      "IBM & PMI GenAI learning"
    ]
  },
  {
    "kicker": "The next chapter",
    "title": "Build with purpose.",
    "lines": [
      "Aspiring Associate Product Manager",
      "Bengaluru, India",
      "Human insight. Product thinking. AI possibilities."
    ]
  }
];
export type ProfileId = 'arya' | 'recruiter' | 'developer' | 'creative' | 'projectlab';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  { id: 'projectlab', name: 'Project Lab', blurb: 'Episode 3 · All 50 interactive demos', color: '#b5264f', order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'] },
  {
    id: 'arya',
    name: 'Arya',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'originals', 'skills', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Product Builder',
    blurb: 'Methods, projects & resources',
    color: '#46e3a8',
    order: ['skills', 'journey', 'originals', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: {"from": "#120822", "via": "#3d1a6e", "to": "#07060c", "accent": "#b98bff"} },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: {"from": "#1c1003", "via": "#6b3c06", "to": "#0a0806", "accent": "#ffb547"} },
  originals: { nav: 'All Projects', card: 'All Projects', meta: `50 demos + ${projects.length} case studies • Episode 03`, palette: {"from": "#24060b", "via": "#6e0d1d", "to": "#09070a", "accent": "#ff3d5a"} },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: {"from": "#03150f", "via": "#0d5a40", "to": "#050a08", "accent": "#46e3a8"} },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: {"from": "#04121f", "via": "#0f4c6e", "to": "#05080d", "accent": "#4cc9ff"} },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: {"from": "#24060b", "via": "#6e0d1d", "to": "#09070a", "accent": "#ff3d5a"} },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: {"from": "#120822", "via": "#3d1a6e", "to": "#07060c", "accent": "#b98bff"} },
};

