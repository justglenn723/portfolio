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
    messenger: "https://m.me/glennjhune.polia", // Replace with your real Messenger link/username
    whatsapp: "https://wa.me/639171234567",       // Replace with your real WhatsApp link
    calendar: "https://calendar.google.com/calendar/u/0/r/week", // Replace with your real Google Calendar link
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
    id: "saas-onboarding",
    title: "SaaS Client Onboarding Funnel",
    type: "Onboarding & Subscription Portal",
    platform: "GoHighLevel / Custom CSS",
    niche: "B2B Software / Marketing Agency",
    description: "A highly streamlined, multi-step customer acquisition and onboarding funnel. Features integrated subscription billing with Stripe, custom styled responsive forms, and automated email/SMS welcome journeys.",
    features: [
      "Custom CSS styled inputs for premium look and feel",
      "Stripe payment integration with dynamic coupon support",
      "Interactive onboarding questionnaire mapping data directly to GHL custom fields",
      "Instant agency-branded client welcome portal delivery"
    ],
    gradient: "from-teal-500/20 to-blue-500/10",
    visualConcept: "Modern multi-step visual cards, progress indicators, minimalist order checkout, and custom glowing focus borders."
  },
  {
    id: "high-ticket-coaching",
    title: "High-Ticket VSL & Booking Funnel",
    type: "VSL & Application Funnel",
    platform: "GoHighLevel / Vimeo",
    niche: "Consulting & High-Ticket Coaching",
    description: "Built to maximize application rates for premium consultancies. Embeds an auto-playing high-definition VSL with deferred call-to-action buttons, moving prospects seamlessly into a calendar booking framework.",
    features: [
      "Deferred booking button trigger syncing with the video timestamp",
      "GoHighLevel booking calendar custom theme matching corporate branding",
      "Automated WhatsApp & Email follow-ups to maximize calendar attendance",
      "Interactive qualitative survey before session confirmation"
    ],
    gradient: "from-amber-500/20 to-orange-500/10",
    visualConcept: "Dark premium VSL player, high-contrast headline blocks, client testimonial cards, and a golden highlight calendar element."
  },
  {
    id: "med-spa-leadgen",
    title: "Local Aesthetic Clinic Funnel",
    type: "Lead Gen & Coupon Funnel",
    platform: "GoHighLevel / Mobile Responsive",
    niche: "Local Business / Medical Spa",
    description: "A localized hyper-converting lead generation page featuring a 20% off introductory voucher. Combines simple, beautiful mobile layout cards with automated GHL calendar booking to convert traffic into real appointments.",
    features: [
      "Ultra-fast loading times optimized for local mobile browsing",
      "Automatic voucher code generation emailed and SMS'd to users",
      "Direct connection to local salon management calendar",
      "Custom FAQ section with accordion triggers to overcome standard objections"
    ],
    gradient: "from-pink-500/20 to-rose-500/10",
    visualConcept: "Clean layout, soft aesthetic pastel imagery, reviews carousel, and a prominent floating primary offer button."
  }
];

export const GRAPHICS_PROJECTS: GraphicsProject[] = [
  {
    id: "finance-ads",
    title: "High-Converting Finance Ad Creatives",
    category: "GRAPHICS DESIGN",
    software: ["Canva", "Social Media", "Branding"],
    description: "Designed scroll-stopping visuals for financial services, focusing on trust, clarity, and strong call-to-actions to boost lead generation and client conversions.",
    details: [
      "High-contrast layout pairing professional corporate tones with bright accent lines.",
      "Engineered for rapid pattern-interruption on high-velocity social feeds.",
      "Integrated dynamic text elements and trusted credential badges.",
      "Strict alignment with financial services compliance and trust guidelines."
    ],
    gradient: "from-emerald-500/20 to-blue-500/10",
    visualConcept: "Every financial decision should be driven by what you value.",
    imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=600&q=80",
    driveLink: "https://drive.google.com/drive/folders/1udsoxDFvqPYAIzjlGN88ZYb06xBAx7UJ?usp=sharing"
  },
  {
    id: "movement-life-watch",
    title: "Watch Visual Campaigns",
    category: "GRAPHICS DESIGN",
    software: ["Photoshop", "Ad Creative"],
    description: "Produced high-end, detail-focused creatives that emphasize craftsmanship, elegance, and exclusivity to elevate brand perception and desirability.",
    details: [
      "Cinematic lighting overlays highlighting pristine product craftsmanship.",
      "Elegant typography pairing high-fashion serif with clean neo-grotesque copy.",
      "Responsive card containers optimized for vertical mobile formats.",
      "Engineered specifically for luxury direct-to-consumer e-commerce brands."
    ],
    gradient: "from-amber-500/20 to-orange-500/10",
    visualConcept: "For Movement For Life — Wear it at the gym, office, or on the go.",
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    driveLink: "https://drive.google.com/drive/folders/1udsoxDFvqPYAIzjlGN88ZYb06xBAx7UJ?usp=sharing"
  },
  {
    id: "dry-eyes-health",
    title: "Engaging Health & Wellness Campaign Designs",
    category: "GRAPHICS DESIGN",
    software: ["Canva", "Logo Design"],
    description: "Developed clean, informative, and visually appealing creatives that communicate health benefits effectively while building credibility and audience trust.",
    details: [
      "High-impact medical warning symbols that draw immediate visual attention.",
      "Warm, empathetic color palettes that reduce patient skepticism.",
      "Bold headlines targeting pain-point solutions with visual hierarchies.",
      "Optimized for local chiropractic, physiological, and clinical client acquisitions."
    ],
    gradient: "from-pink-500/20 to-rose-500/10",
    visualConcept: "Making Your Dry Eyes a Thing of the Past.",
    imageUrl: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=600&q=80",
    driveLink: "https://drive.google.com/drive/folders/1udsoxDFvqPYAIzjlGN88ZYb06xBAx7UJ?usp=sharing"
  },
  {
    id: "cleaning-profits",
    title: "Futuristic AI Branding & Ad Creatives",
    category: "GRAPHICS DESIGN",
    software: ["Photoshop", "Thumbnail"],
    description: "Crafted sleek and innovative designs that reflect cutting-edge technology, making complex AI solutions visually appealing and easy to understand.",
    details: [
      "Rich, vibrant purple gradients highlighting autonomous technological interfaces.",
      "Clean, high-impact badge arrays that increase user click-through rates.",
      "Direct value proposition framing targeting local service company owners.",
      "Integrated custom mockups showcasing client-facing dashboard systems."
    ],
    gradient: "from-purple-500/20 to-indigo-500/10",
    visualConcept: "Double Your Cleaning Profits Without Working More.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    driveLink: "https://drive.google.com/drive/folders/1udsoxDFvqPYAIzjlGN88ZYb06xBAx7UJ?usp=sharing"
  },
  {
    id: "real-estate-scroll",
    title: "Premium Real Estate Marketing Visuals",
    category: "GRAPHICS DESIGN",
    software: ["Canva", "Email Banner"],
    description: "Created modern and elegant property graphics that highlight key selling points, helping listings stand out and attract qualified buyers.",
    details: [
      "Strategic headline layout framing built to disrupt traditional real estate feeds.",
      "Modern architectural outline framing emphasizing structural sophistication.",
      "High-contrast typography pairing displaying authoritative pricing values.",
      "Responsive assets configured specifically for multi-channel email campaigns."
    ],
    gradient: "from-yellow-600/20 to-amber-600/10",
    visualConcept: "You're Wasting Time Scrolling — Build Something Real.",
    imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80",
    driveLink: "https://drive.google.com/drive/folders/1udsoxDFvqPYAIzjlGN88ZYb06xBAx7UJ?usp=sharing"
  },
  {
    id: "graphic-sample-6",
    title: "High-Converting Agency & Coaching Visuals",
    category: "GRAPHICS DESIGN",
    software: ["Photoshop", "Brand Kit"],
    description: "High-retention graphics designed for elite agencies and online educators. Tailored layouts optimized for peak conversion rates and professional authority.",
    details: [
      "Abstract modern artwork creating a distinct, high-end editorial vibe.",
      "Symmetry-based composition grid guiding the reader's eye naturally.",
      "Minimalist margin spacing highlighting critical business branding.",
      "Tailored for premium service providers looking to double booking rates."
    ],
    gradient: "from-blue-500/20 to-teal-500/10",
    visualConcept: "Graphic Sample - Standardizing Elite Agency Materials.",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    driveLink: "https://drive.google.com/drive/folders/1udsoxDFvqPYAIzjlGN88ZYb06xBAx7UJ?usp=sharing"
  }
];

export const VIDEO_PROJECTS: VideoProject[] = [
  {
    id: "retention-shorts",
    title: "High-Retention TikToks & Reels Collection",
    duration: "30-60 Seconds",
    platform: "Instagram Reels & TikTok",
    style: "Alex Hormozi / Fast-Paced Infotainment",
    software: ["CapCut Pro", "Adobe Premiere Pro", "Audacity"],
    description: "A series of high-performing short-form video content designed specifically to keep viewer attention. Features kinetic animated captions, punchy sound effects, zoom zooms, and strategic B-roll visual insertions.",
    bullets: [
      "Achieved average audience retention rates over 85% on 45-second videos.",
      "Dynamic multi-colored kinetic captions with emojis highlighting critical terms.",
      "Perfect audio leveling, blending background trending tracks with clear, crisp vocal tracks.",
      "Strategic visual jokes, green-screen assets, and fast jump-cuts to hold visual interest."
    ],
    gradient: "from-emerald-500/20 to-teal-500/10"
  },
  {
    id: "longform-youtube",
    title: "Business Explainer & Strategy YouTube Edits",
    duration: "8-12 Minutes",
    platform: "YouTube",
    style: "Cinematic Documentary Explainer",
    software: ["Premiere Pro", "After Effects", "Adobe Photoshop"],
    description: "Long-form editorial edits focused on presenting complex business case studies. Integrates custom motion graphics, professional lower-thirds, smooth transitions, and multi-layered soundscapes.",
    bullets: [
      "Custom sound effects (whooshes, page-turns, ambient wind) matching graphic motion",
      "Designed clickable, high-CTR thumbnail assets matching the video's aesthetic",
      "Dynamic color grading maximizing warmth and visual clarity for speakers",
      "Chapter marker templates and automated intro templates built for ease-of-use"
    ],
    gradient: "from-sky-500/20 to-blue-500/10"
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
