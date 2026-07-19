import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Google GenAI client
let ai: GoogleGenAI | null = null;
try {
  if (process.env.GEMINI_API_KEY) {
    ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  } else {
    console.warn("WARNING: GEMINI_API_KEY is not defined. AI Chat features will run in demo/offline mode.");
  }
} catch (error) {
  console.error("Failed to initialize Google GenAI SDK:", error);
}

const GLENN_RESUME_INFO = `
You are the AI Professional Assistant representing Glenn Jhune L. Polia.
Your goal is to answer questions about Glenn's professional experience, skills, achievements, and capabilities, behaving as his friendly, helpful, and highly intelligent representative.
Keep your answers professional, concise, enthusiastic, and direct.

Here is Glenn's detailed resume information:

### General Information
- Name: Glenn Jhune L. Polia
- Professional Titles: Virtual Assistant, GoHighLevel (GHL) Specialist, Information Systems Graduate
- Core Focus: CRM Management, Workflow Automation, ClickUp, Funnel & Website Building, Closebot Integration, Graphic Design & Video Editing.

### Professional Summary
Glenn is a results-driven Virtual Assistant and BS Information Systems graduate with 2 years of experience supporting US-based businesses. He is highly skilled in GoHighLevel (GHL), ClickUp, workflow automation, Closebot integration, website design, funnel building, graphic design, and video editing. He is highly experienced in CRM management, business process optimization, and administrative support with strong problem-solving and communication skills.

### Core Skills
- GoHighLevel (GHL) CRM Management
- Workflow Automation in GHL (pipelines, triggers, custom actions, integrations)
- ClickUp Project Management & Task Coordination
- Funnels & Website Designing (custom branding, responsive layouts, sales funnels)
- Closebot Integration (AI-driven automated customer communications)
- Graphic Design & Video Editing (marketing creatives, branding materials, promo videos)
- Data Management & Administrative Support
- Microsoft Office Suite, Computer Literacy
- Problem Solving & High-level Communication

### Work Experience
1. Virtual Assistant – NewWine (June 2024 – Present)
   - Supported US-based businesses through virtual assistance and CRM management.
   - Specialized in GoHighLevel (GHL), including workflow automation, pipelines, and client management.
   - Built and managed high-converting funnels, websites, and automated systems to improve operational efficiency.
   - Utilized ClickUp for task management, project coordination, and workflow tracking.
   - Integrated and managed Closebot systems for automated, AI-driven customer communication.
   - Created graphic designs and edited videos for marketing and branding purposes.
2. Infection Prevention and Control Team – Dotties, Butuan (October 2021)
   - Assisted in monitoring workplace health and safety compliance.
   - Supported administrative and coordination tasks for the prevention team.

### Education
- Bachelor of Science in Information Systems
  - Institution: Caraga State University – Main Campus
  - Duration: 2019 – 2023
  - Honor: Cum Laude

### Eligibility
- Civil Service Eligible (Honor Graduate Eligibility)
- Eligibility Number: 100115230770

### Awards & Achievements
- Cum Laude Graduate
- Dean's Lister (2022 & 2023)
- Outstanding Award in Mathematics
- Loyalty Award

### Trainings & Seminars
- DICT Online Courses Achiever
- Digital Marketing Channels and Funnel
- Canva for Graphic Design
- Data Privacy and Good Governance
- Microsoft Productivity Tools
- Certificate of Participation in Design Thinking Workshop
- Certificate of Participation in Navigatalks: FAME Representative

### Reference
- CARLOS R. NEIS II
  - Title: City Information & Unified Result-Based Risk Management Plan Section Head
  - Organization: LGU Butuan - CSWD
  - Contact: 09382911698
  - Email: carlos.neisii@gmail.com

### Contacting Glenn
Visitors can send message inquiries directly using the website's Interactive Message Center.
`;

// API routes first
app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Invalid messages format. Expected an array of message objects." });
  }

  // Fallback demo response if Gemini API is not available
  if (!ai) {
    const lastMsg = messages[messages.length - 1]?.content?.toLowerCase() || "";
    let demoReply = "Hello! I'm Glenn's AI Assistant. Currently, my live AI brain is in demo mode, but I can tell you that Glenn is a Cum Laude Information Systems graduate and a specialized GoHighLevel CRM & Automation virtual assistant with 2 years of experience. How can I help you learn more about his background?";
    
    if (lastMsg.includes("skills") || lastMsg.includes("core")) {
      demoReply = "Glenn specializes in GoHighLevel CRM Management, workflow automation, ClickUp project tracking, Closebot AI chat integrations, custom funnel/website design, graphic design, and video editing.";
    } else if (lastMsg.includes("experience") || lastMsg.includes("work")) {
      demoReply = "Glenn currently serves as a Virtual Assistant for NewWine (June 2024 - Present), building funnels, managing CRMs, automating GHL pipelines, and integrating Closebot AI. He also supported workplace safety compliance in Butuan City in 2021.";
    } else if (lastMsg.includes("contact") || lastMsg.includes("email") || lastMsg.includes("hire")) {
      demoReply = "You can contact Glenn directly via the contact form on this website, or check his reference: Carlos R. Neis II (carlos.neisii@gmail.com).";
    } else if (lastMsg.includes("education") || lastMsg.includes("college") || lastMsg.includes("laude")) {
      demoReply = "Glenn graduated Cum Laude with a Bachelor of Science in Information Systems from Caraga State University (Class of 2023).";
    }
    
    return res.json({ text: demoReply });
  }

  try {
    // Format messages for the @google/genai SDK
    // The format is an array of objects: { role: 'user' | 'model', parts: [{ text: string }] }
    const formattedContents = messages.map((m: any) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }]
    }));

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: formattedContents,
      config: {
        systemInstruction: GLENN_RESUME_INFO,
        temperature: 0.7,
      },
    });

    const replyText = response.text || "I'm sorry, I couldn't formulate a response. Please try again.";
    res.json({ text: replyText });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: "Failed to communicate with AI model.", details: error.message });
  }
});

// A dummy mock database of contact inquiries
const inquiries: any[] = [];

app.post("/api/inquiry", (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }
  const newInquiry = {
    id: Date.now().toString(),
    name,
    email,
    subject: subject || "No Subject",
    message,
    timestamp: new Date().toISOString()
  };
  inquiries.push(newInquiry);
  res.json({ success: true, inquiry: newInquiry });
});

app.get("/api/inquiries", (req, res) => {
  // Returns inquiries (great for demonstrating administrative capabilities)
  res.json({ inquiries });
});

// Serve static assets or mount Vite middleware
async function setupVite() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Setting up Vite in development mode...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Serving static assets in production mode...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

setupVite().catch(err => {
  console.error("Vite setup error:", err);
});
