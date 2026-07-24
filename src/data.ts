import { 
  FunnelProject, 
  GraphicsProject, 
  VideoProject, 
  AutomationProject, 
  Experience, 
  Education, 
  SkillGroup 
} from "./types";

export const GLENN_INFO = {
  name: "Glenn Jhune L. Polia",
  title: "Systems Automation & Funnel Builder",
  subtitle: "GoHighLevel Specialist & Digital Creative",
  location: "Cebu, Philippines",
  bio: "Empowering agency owners, coaches, and SaaS businesses by building high-converting GoHighLevel funnel systems, complex multi-channel automated workflows, professional graphic designs, and high-retention video edits. I combine technical automation logic with modern visual aesthetics to grow digital businesses.",
  
  contactLinks: {
    messenger: "https://www.facebook.com/glenn.polia7?mibextid=ZbWKwL",
    whatsapp: "https://wa.me/639388589282",
    calendar: "https://calendar.app.google/TaT2imNBG9WA8jqz6",
    email: "glennpolia9@gmail.com"
  }
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "GHL & CRM Automation",
    items: [
      "GoHighLevel (GHL) Architecture",
      "Lead Nurture Workflows & Pipelines",
      "Closebot AI & Chatbot Integrations",
      "Twilio, Mailgun & SMTP Setup",
      "Zapier & Webhook Connections"
    ]
  },
  {
    category: "Funnel & Visual Design",
    items: [
      "High-Converting Funnel Layouts",
      "Adobe Photoshop & Illustrator",
      "Canva Pro & Brand Asset Kits",
      "Figma Wireframing & Prototyping",
      "Responsive Web Design & Custom CSS"
    ]
  },
  {
    category: "Video Editing & Post-Production",
    items: [
      "Adobe Premiere Pro",
      "CapCut Pro & Kinetic Typography",
      "Sound Design & Audio Enhancements",
      "High-Retention Short Form (Reels/TikToks)",
      "VSL (Video Sales Letters) & Long Form"
    ]
  }
];

export const FUNNEL_PROJECTS: FunnelProject[] = [
  {
    id: "funnel-build-1",
    title: "GoHighLevel Funnel Build 1",
    type: "Live Client Funnel",
    platform: "GoHighLevel",
    niche: "Client Project",
    description: "A live funnel built and deployed in GoHighLevel. View the full working build via the link below.",
    features: [],
    gradient: "from-teal-500/20 to-blue-500/10",
    visualConcept: "Live GoHighLevel funnel build.",
    liveUrl: "https://app.gohighlevel.com/v2/preview/T7r63z5lkenUyB7ZqSSq?notrack=true"
  },
  {
    id: "funnel-build-2",
    title: "GoHighLevel Funnel Build 2",
    type: "Live Client Funnel",
    platform: "GoHighLevel",
    niche: "Client Project",
    description: "A live funnel built and deployed in GoHighLevel. View the full working build via the link below.",
    features: [],
    gradient: "from-amber-500/20 to-orange-500/10",
    visualConcept: "Live GoHighLevel funnel build.",
    liveUrl: "https://app.gohighlevel.com/v2/preview/4Kldl6gfh04SWEOXoLm8?notrack=true"
  },
  {
    id: "funnel-build-3",
    title: "GoHighLevel Funnel Build 3",
    type: "Live Client Funnel",
    platform: "GoHighLevel",
    niche: "Client Project",
    description: "A live funnel built and deployed in GoHighLevel. View the full working build via the link below.",
    features: [],
    gradient: "from-pink-500/20 to-rose-500/10",
    visualConcept: "Live GoHighLevel funnel build.",
    liveUrl: "https://app.gohighlevel.com/v2/preview/8P91zxwp8ZsMdXbOqibF?notrack=true"
  },
  {
    id: "funnel-build-4",
    title: "GoHighLevel Funnel Build 4",
    type: "Live Client Funnel",
    platform: "GoHighLevel",
    niche: "Client Project",
    description: "A live funnel built and deployed in GoHighLevel. View the full working build via the link below.",
    features: [],
    gradient: "from-purple-500/20 to-indigo-500/10",
    visualConcept: "Live GoHighLevel funnel build.",
    liveUrl: "https://app.gohighlevel.com/v2/preview/7W6Ieb6PAlZJ4UOelx4T"
  },
  {
    id: "funnel-build-5",
    title: "GoHighLevel Funnel Build 5",
    type: "Live Client Funnel",
    platform: "GoHighLevel",
    niche: "Client Project",
    description: "A live funnel built and deployed in GoHighLevel. View the full working build via the link below.",
    features: [],
    gradient: "from-emerald-500/20 to-teal-500/10",
    visualConcept: "Live GoHighLevel funnel build.",
    liveUrl: "https://app.gohighlevel.com/v2/preview/f08rWhxfie91HDwC43CV?notrack=true"
  }
];

export const PORTFOLIO_DRIVE_LINK = "https://drive.google.com/drive/folders/1WQZUEGr-cHT2FILEXKqoYzb835eEurs4?usp=sharing";

export const GRAPHICS_PROJECTS: GraphicsProject[] = [
  {
    id: "credit-brigade",
    title: "Credit Brigade — Credit Repair Ad Creatives",
    category: "GRAPHICS DESIGN",
    software: ["Canva", "Social Media", "Branding"],
    description: "Scroll-stopping ad creatives for Credit Brigade, a credit repair service — built around trust, clarity, and direct calls-to-action to drive lead generation.",
    details: [
      "Checklist-style value props (boost credit scores, achieve financial freedom) for fast scannability.",
      "Consistent brand system (logo, navy/gold palette) applied across the ad set.",
      "Direct contact info (phone, email, site) embedded for immediate response.",
      "Quote-card and stat-driven variants tested alongside the checklist format."
    ],
    gradient: "from-blue-600/20 to-sky-500/10",
    visualConcept: "The True Value of Credit Repair.",
    imageUrl: "/assets/graphics/credit-brigade.png",
    driveLink: PORTFOLIO_DRIVE_LINK
  },
  {
    id: "eye-mazen-gummy",
    title: "Zen Nutrients — Eye-Mazen Gummy Campaign",
    category: "GRAPHICS DESIGN",
    software: ["Canva", "Photoshop", "Product Ad"],
    description: "A full ad creative set for The Eye-Mazen Gummy, a postbiotic eye-health supplement — covering hero claims, ingredient breakdowns, competitor comparisons, and lifestyle use-cases.",
    details: [
      "Bold headline creative built around the product's core claim (world's first postbiotic eye gummy).",
      "Ingredient/benefit breakdown cards translating clinical claims into consumer-friendly copy.",
      "Head-to-head competitor comparison table (Eye-Mazen vs. Brand A/B).",
      "Lifestyle scenarios (screen fatigue, video calls) tying the product to everyday use."
    ],
    gradient: "from-teal-500/20 to-orange-400/10",
    visualConcept: "See better, perform better.",
    imageUrl: "/assets/graphics/eye-mazen-gummy.png",
    driveLink: PORTFOLIO_DRIVE_LINK
  },
  {
    id: "7figure-builder",
    title: "7Figure Builder — Real Estate Course Funnel Ads",
    category: "GRAPHICS DESIGN",
    software: ["Canva", "Photoshop", "Ad Creative"],
    description: "Bold, typography-driven ad creatives for 7Figure Builder, a real estate/home-building education brand — designed to interrupt the scroll and drive free starter-kit signups.",
    details: [
      "High-contrast black/gold typographic hooks built for pattern interruption on social feeds.",
      "Founder-story creative pairing a personal photo with a direct testimonial hook.",
      "Consistent 'Download it, it's free' CTA across the ad set.",
      "House/key iconography reinforcing the real-estate build niche."
    ],
    gradient: "from-amber-600/20 to-yellow-500/10",
    visualConcept: "You're wasting time scrolling — build something real.",
    imageUrl: "/assets/graphics/7figure-builder.png",
    driveLink: PORTFOLIO_DRIVE_LINK
  }
];

export const VIDEO_PROJECTS: VideoProject[] = [
  {
    id: "hook-body-ad-reels",
    title: "Direct-Response Hook & Body Ad Reels",
    duration: "15-45 Seconds",
    platform: "Instagram Reels & TikTok",
    style: "UGC-Style Direct-Response Ads",
    software: ["CapCut Pro", "Adobe Premiere Pro"],
    description: "A batch of hook-and-body style short-form ad edits — multiple hook variations (talking-head openers) cut against shared body footage, built for fast A/B testing of paid social ad angles.",
    bullets: [
      "Multiple interchangeable hook openers edited to pair with the same body content for rapid ad testing.",
      "Punchy, retention-focused pacing suited for cold-audience paid social placements.",
      "Consistent captioning and pacing style across the full reel batch.",
      "Delivered as a ready-to-launch set for direct upload to ad accounts."
    ],
    gradient: "from-cyan-500/20 to-blue-500/10",
    driveLink: PORTFOLIO_DRIVE_LINK
  }
];

export const AUTOMATION_PROJECTS: AutomationProject[] = [
  {
    id: "lead-to-booking",
    title: "Complete Lead-to-Booking GHL Workflow",
    trigger: "New Contact Opt-In Form",
    actions: [
      "Assign User Tags",
      "Dispatch Internal Slack/SMS Notification",
      "Deploy 4-Part Interactive Text Sequence",
      "Trigger Closebot AI Booking Nurse"
    ],
    software: ["GoHighLevel Workflows", "Closebot AI", "Twilio", "Zapier"],
    description: "A bulletproof lead management pipeline designed to eliminate manual appointment setting. When a lead enters, GHL registers the contact, assigns an agent, and launches a conversation. If the prospect answers, Closebot AI automatically picks up, handles objections, checks available slots via API, and books the call.",
    businessImpact: "Boosts booked calls by 42% by maintaining immediate response times 24 hours a day, 7 days a week.",
    logic: [
      "Trigger: Contact submitted form on Landing page",
      "Action: tag prospect as 'Lead - Cold', update opportunity card in Sales Pipeline",
      "Condition: Is it during standard business hours? If Yes, dispatch immediate interactive SMS. If No, queue for 8:30 AM next morning.",
      "Action: Enable webhook linking to Closebot AI. Monitor incoming text messages.",
      "Loop: AI responds to questions, proposes open calendar slots, processes the live calendar reservation, and moves the GHL opportunity status to 'Booked'."
    ]
  },
  {
    id: "review-booster",
    title: "Automated Review Generator Engine",
    trigger: "Opportunity Status Changed to 'Completed'",
    actions: [
      "Wait 4 Hours",
      "Check Internal Feedback Survey",
      "Conditionally Send Google Review Request"
    ],
    software: ["GoHighLevel Workflows", "Mailgun", "Twilio API"],
    description: "An automated reputation management system that filters client satisfaction before asking for reviews. Sends an internal rating request (1-5 stars). If the rating is 4 or 5 stars, it redirects them automatically to Google Reviews with pre-filled parameters. If 3 stars or lower, it triggers an internal ticket for client relations rescue.",
    businessImpact: "Protects reputation from low ratings while aggressively accumulating positive 5-star Google reviews automatically.",
    logic: [
      "Trigger: Opportunity updated to 'Completed' in pipeline",
      "Action: Wait 4 hours to let the service settle with the client",
      "Action: Send elegant customer feedback SMS with simple 1-5 selection",
      "Condition: If customer selects 4 or 5 stars, send follow-up: 'Thank you! Could you share your experience on our Google Profile?' with a direct redirect link",
      "Condition: If customer selects 3 stars or below, send: 'We're so sorry to hear that. An agency manager will reach out within 1 hour' and assign high-priority tasks to the support team"
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Lead Systems Automation Specialist",
    company: "Apex Automation Agencies",
    period: "2024 - Present",
    location: "Remote / Cebu, Philippines",
    bullets: [
      "Architected over 80+ GHL workflows, reducing lead response times to under 60 seconds with advanced webhook and AI routing.",
      "Built and deployed custom funnel systems for coaches, agency owners, and SaaS startups with continuous high conversion optimization.",
      "Integrated third-party systems like Closebot AI, Stripe, Zapier, Twilio, and Mailgun to create hands-free booking experiences."
    ]
  },
  {
    role: "Senior Digital Designer & Video Editor",
    company: "Horizon Media Labs",
    period: "2022 - 2024",
    location: "Cebu, Philippines",
    bullets: [
      "Created high-performing graphic assets, carousel packs, and sales deck layouts for diverse premium consulting clients.",
      "Edited high-retention video shorts (Reels, TikToks) generating millions of combined organic views across client profiles.",
      "Configured customized client membership portals and course structures directly within GoHighLevel CRMs."
    ]
  }
];

export const EDUCATION_INFO: Education = {
  degree: "Bachelor of Science in Information Technology",
  school: "University of Cebu",
  period: "2018 - 2022",
  bullets: [
    "Specialized in Database Management and Web Development Systems",
    "Recipient of Academic Excellence Recognition in Multi-media Systems Design"
  ]
};
