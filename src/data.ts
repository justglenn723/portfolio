import {
  FunnelProject,
  GraphicsProject,
  VideoProject,
  AutomationProject,
  Experience,
  Education,
  ServiceGroup,
  ProcessStep
} from "./types";

// Source of truth for work history, education, and skills: public/resume.pdf.
// Keep this file consistent with the resume.

export const GLENN_INFO = {
  name: "Glenn Jhune L. Polia",
  title: "GoHighLevel Specialist",
  subtitle: "Virtual Assistant | GoHighLevel Specialist | Systems & Funnel Support",
  headline: "GoHighLevel Automation, Funnels & Virtual Assistance",
  intro:
    "I help businesses organize their CRM, build funnels and websites, automate repetitive tasks, and keep daily operations running smoothly.",
  about:
    "I'm a Virtual Assistant and BS Information Systems graduate with 2+ years of experience supporting business operations and US-based clients. Most of my work is in GoHighLevel: managing pipelines and contact records, building workflow automations, setting up funnels and websites, and helping with CloseBot integration. I also handle day-to-day admin, ClickUp task tracking, and reporting, and I can support marketing with graphic design and video editing.",
  portfolioUrl: "https://glennpolia.vercel.app/",

  contactLinks: {
    messenger: "https://www.facebook.com/glenn.polia7?mibextid=ZbWKwL",
    whatsapp: "https://wa.me/639388589282",
    calendar: "https://calendar.app.google/TaT2imNBG9WA8jqz6",
    email: "glennpolia9@gmail.com"
  }
};

export const RESUME = {
  url: "/resume.pdf",
  downloadName: "Glenn_Polia_Resume.pdf"
};

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    category: "CRM & Automation",
    summary: "Keep leads organized and follow-ups running without manual work.",
    items: [
      "GoHighLevel CRM and pipeline management",
      "Workflow automation (triggers, tags, follow-ups)",
      "CloseBot integration",
      "Contact record cleanup and organization"
    ]
  },
  {
    category: "Funnels & Websites",
    summary: "Pages that explain your offer clearly and capture leads.",
    items: [
      "Funnel building in GoHighLevel",
      "Landing pages",
      "Website design and updates"
    ]
  },
  {
    category: "VA Operations",
    summary: "Reliable support for the daily tasks that keep the business moving.",
    items: [
      "Data entry and data organization",
      "Administrative support and documentation",
      "Task coordination in ClickUp",
      "Sales records and weekly reporting"
    ]
  },
  {
    category: "Creative Support",
    summary: "Supporting marketing assets when you need them.",
    items: [
      "Graphic design for ads and social posts",
      "Short-form and long-form video editing (CapCut)",
      "AI-assisted creative work (Higgsfield)"
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "Understand the setup",
    text: "We go over your goals, your current GoHighLevel account or tools, and what needs to be built or fixed."
  },
  {
    title: "Plan the work",
    text: "I list the pages, pipelines, or workflows involved and confirm the details with you before building."
  },
  {
    title: "Build and test",
    text: "I build in your account and test each step, like form submissions, tags, and messages, before it goes live."
  },
  {
    title: "Hand over and support",
    text: "You get a short summary of what was done, and I stay available for changes and ongoing tasks."
  }
];

export const FUNNEL_PROJECTS: FunnelProject[] = [
  {
    id: "funnel-build-1",
    title: "Ruben & Arthur: 2026 Partnership Kit",
    type: "Funnel Build",
    platform: "GoHighLevel",
    niche: "Real Estate / Media Kit",
    description:
      "A social media collaboration media kit and partnership funnel positioning \"The Brothers Building America\" for brand and builder partnerships.",
    goal: "Present the brand to potential partners and collect partnership inquiries.",
    role: "Built the funnel pages in GoHighLevel.",
    liveUrl: "https://app.gohighlevel.com/v2/preview/T7r63z5lkenUyB7ZqSSq?notrack=true",
    imageUrl: "/assets/funnels/ruben-arthur-partnership.png"
  },
  {
    id: "funnel-build-2",
    title: "Burn Bright Pro: Instagram Comment Automation",
    type: "Funnel Build",
    platform: "GoHighLevel",
    niche: "SaaS / Business Automation",
    description:
      "A landing page for an all-in-one automation platform that turns Instagram post comments into conversation and sales opportunities.",
    goal: "Explain the product and move visitors toward signing up.",
    role: "Built the landing page in GoHighLevel.",
    liveUrl: "https://app.gohighlevel.com/v2/preview/4Kldl6gfh04SWEOXoLm8?notrack=true",
    imageUrl: "/assets/funnels/burn-bright-pro-ig.png"
  },
  {
    id: "funnel-build-3",
    title: "VelaMD: Dermatology Telehealth Funnel",
    type: "Funnel Build",
    platform: "GoHighLevel",
    niche: "Healthcare / Telehealth",
    description:
      "A dermatology telehealth funnel with a clear three-step \"How It Works\" section explaining online consultations and prescriptions.",
    goal: "Help visitors understand the online process and start a consultation.",
    role: "Built the funnel pages in GoHighLevel.",
    liveUrl: "https://app.gohighlevel.com/v2/preview/8P91zxwp8ZsMdXbOqibF?notrack=true",
    imageUrl: "/assets/funnels/vela-md-how-it-works.png"
  },
  {
    id: "funnel-build-4",
    title: "GLP-1 Demo Clinic: Weight Loss Funnel",
    type: "Funnel Build",
    platform: "GoHighLevel",
    niche: "Healthcare / Weight Loss",
    description:
      "A medical weight loss funnel promoting GLP-1 programs, structured to drive consultation sign-ups.",
    goal: "Drive consultation sign-ups for a weight loss program.",
    role: "Built the funnel pages in GoHighLevel.",
    liveUrl: "https://app.gohighlevel.com/v2/preview/7W6Ieb6PAlZJ4UOelx4T",
    imageUrl: "/assets/funnels/glp1-demo-clinic.png"
  },
  {
    id: "funnel-build-5",
    title: "SMARTLink Services: Network Infrastructure",
    type: "Funnel Build",
    platform: "GoHighLevel",
    niche: "B2B / Field Services",
    description:
      "A lead-generation funnel for a broadband, fiber, and network installation company, built to turn visitors into project inquiries.",
    goal: "Collect project inquiries from businesses that need network installation.",
    role: "Built the funnel pages in GoHighLevel.",
    liveUrl: "https://app.gohighlevel.com/v2/preview/f08rWhxfie91HDwC43CV?notrack=true",
    imageUrl: "/assets/funnels/smartlink-services.png"
  }
];

export const PORTFOLIO_DRIVE_LINK = "https://drive.google.com/drive/folders/1WQZUEGr-cHT2FILEXKqoYzb835eEurs4?usp=sharing";

export const GRAPHICS_PROJECTS: GraphicsProject[] = [
  {
    id: "credit-brigade",
    title: "Credit Brigade: Credit Repair Ad Creatives",
    category: "Graphic Design",
    software: ["Canva", "Social Media", "Branding"],
    description:
      "Ad creatives for a credit repair service, built around trust, clear benefits, and a direct call to action.",
    details: [
      "Checklist-style benefits for quick scanning.",
      "Consistent logo and navy/gold palette across the ad set.",
      "Contact details placed for a fast response."
    ],
    imageUrl: "/assets/graphics/credit-brigade.png",
    driveLink: PORTFOLIO_DRIVE_LINK
  },
  {
    id: "eye-mazen-gummy",
    title: "Zen Nutrients: Eye-Mazen Gummy Campaign",
    category: "Graphic Design",
    software: ["Canva", "Product Ad"],
    description:
      "An ad creative set for an eye-health supplement covering the main claim, ingredient breakdowns, a comparison table, and everyday use cases.",
    details: [
      "Headline creative built around the product's main claim.",
      "Ingredient and benefit cards written in plain language.",
      "Comparison and lifestyle variants for testing."
    ],
    imageUrl: "/assets/graphics/eye-mazen-gummy.png",
    driveLink: PORTFOLIO_DRIVE_LINK
  },
  {
    id: "7figure-builder",
    title: "7Figure Builder: Real Estate Course Ads",
    category: "Graphic Design",
    software: ["Canva", "Ad Creative"],
    description:
      "Typography-driven ad creatives for a home-building education brand, designed to drive free starter-kit sign-ups.",
    details: [
      "High-contrast black and gold text hooks for social feeds.",
      "Founder-story variant with a personal photo.",
      "Consistent free-download call to action."
    ],
    imageUrl: "/assets/graphics/7figure-builder.png",
    driveLink: PORTFOLIO_DRIVE_LINK
  }
];

export const VIDEO_PROJECTS: VideoProject[] = [
  {
    id: "hook-body-ad-reels",
    title: "Hook & Body Ad Reels",
    duration: "Short-form ads",
    platform: "Instagram Reels & TikTok",
    style: "UGC-style ads",
    software: ["CapCut"],
    description:
      "A batch of short-form ad edits: several hook openers cut against the same body footage so different ad angles can be tested.",
    bullets: [
      "Interchangeable hook openers paired with shared body content.",
      "Fast pacing suited to paid social placements.",
      "Consistent captions and pacing across the batch."
    ],
    driveLink: PORTFOLIO_DRIVE_LINK
  }
];

export interface LiveReel {
  id: string;
  label: string;
  src: string;
}

export const LIVE_REELS: LiveReel[] = [
  { id: "ad3", label: "Ad Variant 3 + Body", src: "/assets/videos/ad3-body-reel.mp4" },
  { id: "ad4", label: "Ad Variant 4 + Body", src: "/assets/videos/ad4-body-reel.mp4" },
  { id: "ad5", label: "Ad Variant 5 + Body", src: "/assets/videos/ad5-body-reel.mp4" },
  { id: "ad11", label: "Ad Variant 11 + Body", src: "/assets/videos/ad11-body-reel.mp4" }
];

// Sample workflow designs drawn with GoHighLevel's own trigger and action names.
// Replace with real client workflows when they can be shared.
export const AUTOMATION_PROJECTS: AutomationProject[] = [
  {
    id: "lead-to-booking",
    title: "Lead-to-Booking Workflow",
    label: "Sample workflow design",
    software: ["GoHighLevel Workflows", "CloseBot"],
    description:
      "A lead follow-up flow that tags new contacts, updates the pipeline, texts them right away or the next morning, and hands the conversation to CloseBot to help book a call.",
    steps: [
      { kind: "trigger", action: "Form Submitted", detail: "Opt-in Form" },
      { kind: "tag", action: "Add Contact Tag", detail: "new lead" },
      { kind: "opportunity", action: "Create/Update Opportunity", detail: "Sales Pipeline · New Lead" },
      { kind: "notify", action: "Internal Notification", detail: "Alert assigned user" }
    ],
    branch: {
      condition: "Within business hours?",
      yes: [{ kind: "sms", action: "Send SMS", detail: "Instant welcome text" }],
      no: [
        { kind: "wait", action: "Wait", detail: "Until 8:30 AM" },
        { kind: "sms", action: "Send SMS", detail: "Morning welcome text" }
      ]
    },
    after: [{ kind: "ai", action: "Add Contact Tag", detail: "closebot-on · AI takes over replies" }]
  },
  {
    id: "review-request",
    title: "Review Request Workflow",
    label: "Sample workflow design",
    software: ["GoHighLevel Workflows"],
    description:
      "A follow-up flow that asks customers for a quick rating after a job is done, sends happy customers to the Google review page, and alerts the team about unhappy ones.",
    steps: [
      { kind: "trigger", action: "Opportunity Status Changed", detail: "Status is Won" },
      { kind: "wait", action: "Wait", detail: "4 hours" },
      { kind: "sms", action: "Send SMS", detail: "Rate us from 1 to 5" },
      { kind: "wait", action: "Wait", detail: "Until customer replies" }
    ],
    branch: {
      condition: "Rating is 4 or 5?",
      yes: [{ kind: "sms", action: "Send SMS", detail: "Google review link" }],
      no: [
        { kind: "notify", action: "Internal Notification", detail: "Alert the team" },
        { kind: "task", action: "Add Task", detail: "Call the customer" }
      ]
    }
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Virtual Assistant | GoHighLevel Specialist",
    company: "NewWine",
    period: "June 2024 – Present",
    bullets: [
      "Support business operations for a US-based business through virtual assistance and CRM-related tasks.",
      "Manage GoHighLevel CRM functions, including pipelines, client records, and workflow automation.",
      "Build and maintain funnels, websites, and automated processes based on business requirements.",
      "Support task tracking and project coordination using ClickUp where required.",
      "Assist with CloseBot integration and automated customer communication workflows.",
      "Create graphic assets and edit video content for marketing and branding when needed."
    ]
  },
  {
    role: "Sales Associate / Sales Administration Support",
    company: "Bounty Plus Incorporated",
    period: "April 2024 – June 2024",
    location: "Butuan City, Philippines",
    bullets: [
      "Recorded sales transactions and documented revenue and product or service details.",
      "Prepared daily sales records and compiled weekly reports on sales performance and trends.",
      "Reviewed sales information to identify patterns and potential growth opportunities."
    ]
  },
  {
    role: "Infection Prevention and Control Team Assistant",
    company: "Dotties",
    period: "October 2021",
    location: "Butuan City, Philippines",
    bullets: [
      "Assisted with monitoring workplace health and safety compliance.",
      "Supported administrative and coordination tasks for the infection prevention team."
    ]
  }
];

export const EDUCATION_INFO: Education = {
  degree: "Bachelor of Science in Information Systems",
  school: "Caraga State University – Main Campus",
  period: "2019 – 2023",
  honors: "Cum Laude"
};

export const TRAININGS: string[] = [
  "DICT Online Courses Achiever",
  "Digital Marketing Channels and Funnel",
  "Canva for Graphic Design",
  "Data Privacy and Good Governance",
  "Microsoft Productivity Tools",
  "Design Thinking Workshop (Certificate of Participation)",
  "Navigatalks: FAME Representative (Certificate of Participation)"
];

export const ELIGIBILITY = "Civil Service Eligible – Honor Graduate Eligibility";
