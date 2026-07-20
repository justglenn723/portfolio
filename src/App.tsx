import React, { useState } from "react";
import { 
  MessageSquare, 
  PhoneCall, 
  Calendar, 
  MapPin, 
  Award, 
  Layers, 
  ArrowUpRight, 
  ExternalLink, 
  Compass, 
  Cpu, 
  Hammer, 
  BookOpen, 
  CheckCircle,
  Copy,
  Sliders,
  Check,
  ShieldCheck,
  Smartphone,
  ChevronDown,
  Info,
  Globe,
  Palette,
  Video,
  Zap,
  Play,
  SlidersHorizontal,
  Plus,
  Mail,
  FileText,
  Activity
} from "lucide-react";
import { 
  GLENN_INFO, 
  SKILL_GROUPS, 
  FUNNEL_PROJECTS, 
  GRAPHICS_PROJECTS, 
  VIDEO_PROJECTS, 
  AUTOMATION_PROJECTS, 
  EXPERIENCES, 
  EDUCATION_INFO 
} from "./data";

export default function App() {
  // Contact state coordinates for testing easily in the preview
  const [messengerLink, setMessengerLink] = useState(GLENN_INFO.contactLinks.messenger);
  const [whatsappLink, setWhatsappLink] = useState(GLENN_INFO.contactLinks.whatsapp);
  const [calendarLink, setCalendarLink] = useState(GLENN_INFO.contactLinks.calendar);

  // Active Main Portfolio Tab
  // "funnels" | "graphics" | "videos" | "automations"
  const [activeTab, setActiveTab] = useState<"funnels" | "graphics" | "videos" | "automations">("funnels");

  // Secondary sub-selections inside tabs
  const [selectedFunnel, setSelectedFunnel] = useState<string>(FUNNEL_PROJECTS[0].id);
  const [selectedGraphic, setSelectedGraphic] = useState<string>(GRAPHICS_PROJECTS[0].id);
  const [selectedVideo, setSelectedVideo] = useState<string>(VIDEO_PROJECTS[0].id);
  const [selectedAutomation, setSelectedAutomation] = useState<string>(AUTOMATION_PROJECTS[0].id);

  // State to toggle live embedded calendar frame
  const [showEmbeddedCalendar, setShowEmbeddedCalendar] = useState(false);

  // Simple copy to clipboard helper
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#070708] text-[#e4e4e7] flex flex-col font-sans selection:bg-teal-500/20 selection:text-white overflow-x-hidden antialiased">
      
      {/* Top Navigation / Status Header */}
      <header className="border-b border-white/5 px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4 sticky top-0 bg-[#070708]/90 backdrop-blur-md z-40">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.6)] animate-pulse"></div>
          <div className="text-xs font-bold tracking-[0.3em] uppercase text-white font-display">
            {GLENN_INFO.name} <span className="text-white/40 font-light">&bull; {GLENN_INFO.title}</span>
          </div>
        </div>
        
        {/* Strictly Limited Clickable Contact Points */}
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <a
            href={messengerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#0084FF]/10 hover:bg-[#0084FF]/20 border border-[#0084FF]/20 text-[#0084FF] px-4 py-1.5 rounded-xl text-[11px] font-medium tracking-wider uppercase transition-all active:scale-[0.98] font-mono"
            id="btn-messenger"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            Messenger
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 text-[#25D366] px-4 py-1.5 rounded-xl text-[11px] font-medium tracking-wider uppercase transition-all active:scale-[0.98] font-mono"
            id="btn-whatsapp"
          >
            <PhoneCall className="h-3.5 w-3.5" />
            WhatsApp
          </a>
          <a
            href={calendarLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-teal-400/10 hover:bg-teal-400/20 border border-teal-400/20 text-teal-400 px-4 py-1.5 rounded-xl text-[11px] font-medium tracking-wider uppercase transition-all active:scale-[0.98] font-mono"
            id="btn-calendar"
          >
            <Calendar className="h-3.5 w-3.5" />
            Book GCal
          </a>
        </div>
      </header>

      {/* Grid Layout Framework */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-0">
        
        {/* LEFT PANEL: Identity, Core Strengths & Experience Timeline */}
        <section className="lg:col-span-5 border-r border-white/5 p-8 md:p-12 flex flex-col justify-between space-y-12 lg:h-[calc(100vh-76px)] lg:overflow-y-auto custom-scrollbar">
          <div className="space-y-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-3 block font-mono">
                Based in {GLENN_INFO.location} &bull; Remote Available
              </span>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-extralight tracking-tight text-white leading-tight mb-6">
                Glenn Jhune<br />
                <span className="font-semibold text-teal-400">Polia</span>
              </h1>
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-light pr-4">
                {GLENN_INFO.bio}
              </p>
            </div>

            {/* Core credentials card */}
            <div className="space-y-6">
              
              {/* Specialized Skill Category Stack */}
              <div className="border-t border-white/5 pt-6">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-3 font-mono block">Specialized Core Capabilities</span>
                <div className="space-y-2">
                  {SKILL_GROUPS.map((group, idx) => (
                    <div key={idx} className="bg-[#0c0c0e] border border-white/5 p-3 rounded-xl">
                      <span className="text-[9px] font-mono font-semibold text-teal-400 tracking-wider uppercase block mb-1">
                        {group.category}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {group.items.map((item, sIdx) => (
                          <span key={sIdx} className="text-[9px] text-zinc-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Block */}
              <div className="border-t border-white/5 pt-6">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2 font-mono block">Education &amp; Background</span>
                <div className="bg-[#0c0c0e] border border-white/5 p-4 rounded-xl space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-xs font-semibold text-white">{EDUCATION_INFO.degree}</h4>
                    <span className="text-[9px] font-mono text-teal-400 shrink-0 bg-teal-500/5 px-2 py-0.5 rounded border border-teal-500/10">
                      {EDUCATION_INFO.period}
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-500">{EDUCATION_INFO.school}</p>
                  <ul className="space-y-1 pl-3 list-disc text-[10px] text-zinc-400 font-light">
                    {EDUCATION_INFO.bullets?.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Timeline Experience */}
              <div className="border-t border-white/5 pt-6">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-4 font-mono block">Professional Timeline</span>
                <div className="space-y-6 pl-3 border-l border-white/5 ml-1">
                  {EXPERIENCES.map((exp, idx) => (
                    <div key={idx} className="relative space-y-1.5">
                      <div className="absolute -left-[17px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#070708] border border-teal-400/50 flex items-center justify-center">
                        <div className="h-1 w-1 rounded-full bg-teal-400" />
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h4 className="text-xs font-semibold text-white">
                          {exp.role} <span className="text-zinc-500 font-normal">&mdash; {exp.company}</span>
                        </h4>
                        <span className="text-[9px] font-mono text-zinc-500">{exp.period}</span>
                      </div>
                      <ul className="space-y-1 pl-3 list-disc text-[10px] text-zinc-400 font-light">
                        {exp.bullets.map((b, bIdx) => (
                          <li key={bIdx}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Prompt constraint notice */}
          <div className="bg-[#0c0c0e] border border-white/5 rounded-2xl p-4 text-[11px] text-zinc-500 flex gap-2.5 items-start leading-relaxed mt-4">
            <Info className="h-3.5 w-3.5 text-teal-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white/70 block mb-0.5">Strictly Guided Clickability</strong>
              As requested, clicking capabilities on this portfolio are narrowed down directly to booking consultations via your Google Calendar, starting direct WhatsApp, or Facebook Messenger.
            </div>
          </div>
        </section>

        {/* RIGHT PANEL: High-fidelity Portfolio Sections */}
        <section className="lg:col-span-7 flex flex-col lg:h-[calc(100vh-76px)] lg:overflow-y-auto custom-scrollbar">
          
          {/* Main Showcase Header & Navigation Tabs */}
          <div className="p-6 md:p-8 border-b border-white/5 sticky top-0 bg-[#070708]/95 backdrop-blur-sm z-30">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 block font-mono mb-1">Interactive Catalog</span>
                <h2 className="text-xl font-light text-white font-display">Crafted Production Cases</h2>
              </div>
              
              {/* Showcase Tabs */}
              <div className="flex flex-wrap gap-1 bg-[#0c0c0e] p-1 rounded-xl border border-white/5">
                <button
                  onClick={() => setActiveTab("funnels")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-semibold tracking-wider uppercase transition-all ${
                    activeTab === "funnels" 
                      ? "bg-teal-500/10 text-teal-400 border border-teal-500/20" 
                      : "text-zinc-500 hover:text-zinc-300 border border-transparent"
                  }`}
                >
                  <Globe className="h-3 w-3" />
                  Funnels
                </button>
                <button
                  onClick={() => setActiveTab("graphics")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-semibold tracking-wider uppercase transition-all ${
                    activeTab === "graphics" 
                      ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" 
                      : "text-zinc-500 hover:text-zinc-300 border border-transparent"
                  }`}
                >
                  <Palette className="h-3 w-3" />
                  Graphics
                </button>
                <button
                  onClick={() => setActiveTab("videos")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-semibold tracking-wider uppercase transition-all ${
                    activeTab === "videos" 
                      ? "bg-purple-500/10 text-purple-400 border border-purple-500/20" 
                      : "text-zinc-500 hover:text-zinc-300 border border-transparent"
                  }`}
                >
                  <Video className="h-3 w-3" />
                  Videos
                </button>
                <button
                  onClick={() => setActiveTab("automations")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-semibold tracking-wider uppercase transition-all ${
                    activeTab === "automations" 
                      ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" 
                      : "text-zinc-500 hover:text-zinc-300 border border-transparent"
                  }`}
                >
                  <Zap className="h-3 w-3" />
                  Workflows
                </button>
              </div>
            </div>
          </div>

          {/* Tab Content Canvas */}
          <div className="p-6 md:p-10 flex-1 space-y-8">
            
            {/* TAB 1: WEBSITE & FUNNEL PROJECTS */}
            {activeTab === "funnels" && (
              <div className="space-y-6 animate-fade-in">
                
                {/* Internal selectors */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {FUNNEL_PROJECTS.map((fun) => (
                    <button
                      key={fun.id}
                      onClick={() => setSelectedFunnel(fun.id)}
                      className={`p-3 rounded-xl text-left border transition-all ${
                        selectedFunnel === fun.id
                          ? "bg-teal-500/5 border-teal-500/40 text-white"
                          : "bg-[#0b0b0d] hover:bg-white/5 border-white/5 text-zinc-500"
                      }`}
                    >
                      <span className="text-[8px] font-mono text-teal-400 uppercase tracking-widest block mb-0.5">{fun.platform}</span>
                      <h4 className="text-xs font-semibold truncate text-zinc-100">{fun.title}</h4>
                      <span className="text-[9px] text-zinc-500 truncate block">{fun.niche}</span>
                    </button>
                  ))}
                </div>

                {/* Main Detailed Card */}
                {FUNNEL_PROJECTS.filter(f => f.id === selectedFunnel).map((fun) => (
                  <div key={fun.id} className="bg-[#0b0b0d] border border-white/5 rounded-2xl p-6 md:p-8 space-y-6">
                    
                    {/* Simulated visual layout wireframe/mockup container */}
                    <div className="aspect-[16/9] bg-zinc-950 rounded-xl relative overflow-hidden border border-white/5 flex flex-col justify-between p-4">
                      
                      {/* Technical visual elements */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:16px_16px]" />
                      <div className="absolute inset-0 bg-radial-gradient-teal opacity-20 pointer-events-none" />

                      {/* Header bar */}
                      <div className="flex items-center justify-between border-b border-white/5 pb-2 z-10">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-red-500/60" />
                          <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
                          <span className="w-2 h-2 rounded-full bg-green-500/60" />
                          <span className="text-[9px] font-mono text-zinc-500 ml-1.5 uppercase">{fun.title.replace(/\s+/g, '-').toLowerCase()}.html</span>
                        </div>
                        <span className="text-[8px] font-mono text-teal-400 bg-teal-500/5 border border-teal-500/10 px-2 py-0.5 rounded">
                          PORT 3000 DEV ACTIVE
                        </span>
                      </div>

                      {/* Schematic content outline */}
                      <div className="flex-1 flex gap-3 my-3 z-10 opacity-60">
                        {/* Sidebar Mock */}
                        <div className="w-1/4 border border-white/5 rounded p-1.5 flex flex-col justify-between">
                          <div className="space-y-1">
                            <div className="h-1.5 w-full bg-teal-400/20 rounded" />
                            <div className="h-1 w-2/3 bg-white/5 rounded" />
                            <div className="h-1 w-1/2 bg-white/5 rounded" />
                          </div>
                          <div className="h-2 w-full bg-teal-400/10 rounded" />
                        </div>
                        {/* Body content Mock */}
                        <div className="flex-1 border border-white/5 rounded p-2 flex flex-col justify-between relative">
                          <div className="space-y-1.5">
                            <div className="h-2.5 w-1/3 bg-white/10 rounded" />
                            <div className="h-1 w-full bg-white/5 rounded" />
                            <div className="h-1 w-full bg-white/5 rounded" />
                            <div className="h-1 w-4/5 bg-white/5 rounded" />
                          </div>
                          <div className="grid grid-cols-2 gap-1">
                            <div className="h-3 bg-teal-400/20 rounded" />
                            <div className="h-3 bg-white/5 rounded" />
                          </div>
                        </div>
                      </div>

                      {/* Bottom concept tags */}
                      <div className="flex items-center justify-between text-[8px] font-mono text-zinc-500 z-10 border-t border-white/5 pt-2">
                        <span>WIREFRAME RESOLUTION: RESPONSIVE SCREEN</span>
                        <span className="text-teal-400">DESIGNED VIA GOHIGHLEVEL PORTAL</span>
                      </div>
                    </div>

                    {/* Metadata & Writeup */}
                    <div className="space-y-4">
                      <div>
                        <span className="text-[10px] font-mono text-teal-400 uppercase tracking-widest">{fun.type}</span>
                        <h3 className="text-xl font-light text-white mt-1 font-display">
                          {fun.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 text-[10px] text-zinc-500 mt-1 font-mono">
                          <span>Platform: {fun.platform}</span>
                          <span>&bull;</span>
                          <span>Niche: {fun.niche}</span>
                        </div>
                      </div>

                      <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-light">
                        {fun.description}
                      </p>

                      <div className="space-y-2">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500">Conversion Implementations:</span>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {fun.features.map((feat, idx) => (
                            <div key={idx} className="flex gap-2.5 items-start text-xs text-zinc-400 bg-white/[0.02] p-3 rounded-xl border border-white/5">
                              <Check className="h-3.5 w-3.5 text-teal-400 shrink-0 mt-0.5" />
                              <span className="font-light">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Layout guidelines snippet */}
                      <div className="bg-black/40 border border-white/5 rounded-xl p-4 text-[11px] font-mono">
                        <span className="text-zinc-500 block mb-1 uppercase text-[9px] tracking-wider">&lt; Layout Concept Mapping &gt;</span>
                        <span className="text-zinc-400">"{fun.visualConcept}"</span>
                      </div>
                    </div>

                  </div>
                ))}

              </div>
            )}

            {/* TAB 2: GRAPHICS & DESIGN WORK */}
            {activeTab === "graphics" && (
              <div className="space-y-8 animate-fade-in">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-amber-500/5 border border-amber-500/10 p-5 rounded-2xl">
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                      <Palette className="h-4 w-4 text-amber-400" />
                      Client Ad Creatives Archive
                    </h3>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">
                      All high-definition source files, vectors, PSD templates, and exported PNGs are hosted inside the shared Google Drive directory.
                    </p>
                  </div>
                  <a
                    href="https://drive.google.com/drive/folders/1udsoxDFvqPYAIzjlGN88ZYb06xBAx7UJ?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 flex items-center gap-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs px-4 py-2 rounded-xl transition font-mono uppercase tracking-wider"
                  >
                    Open Full Drive Folder
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                {/* 6 Grid Ads Creatives Showcase */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {GRAPHICS_PROJECTS.map((gph) => (
                    <div 
                      key={gph.id} 
                      className="bg-[#0b0b0d] border border-white/5 rounded-2xl overflow-hidden flex flex-col group transition-all duration-300 hover:border-amber-500/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)]"
                    >
                      {/* Image Frame */}
                      <div className="aspect-[4/3] w-full relative overflow-hidden bg-zinc-950 border-b border-white/5">
                        <img 
                          src={gph.imageUrl} 
                          alt={gph.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        
                        {/* Overlay with Dark Backdrop and View Button */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-black/30 to-black/50 opacity-90 transition-all duration-300 flex flex-col justify-between p-4">
                          <div className="flex justify-between items-start">
                            <span className="text-[8px] font-mono tracking-widest text-white/30 uppercase">AD PORTFOLIO</span>
                            <span className="text-[8px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded text-amber-400">
                              PSD / CANVA
                            </span>
                          </div>

                          <div className="text-center my-auto px-2">
                            <p className="text-[11px] font-medium text-white/90 italic tracking-wide leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                              "{gph.visualConcept}"
                            </p>
                          </div>

                          <div className="flex justify-center">
                            <a 
                              href={gph.driveLink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 bg-black/80 hover:bg-black border border-white/10 hover:border-white/30 text-white text-[10px] font-mono uppercase tracking-wider px-3.5 py-2 rounded-xl transition-all shadow-[0_4px_12px_rgba(0,0,0,0.6)] hover:scale-102 active:scale-98"
                            >
                              VIEW FULL SIZE
                              <ArrowUpRight className="h-3.5 w-3.5 text-amber-400" />
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Content Box */}
                      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest text-amber-400 uppercase font-semibold">
                            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                            {gph.category}
                          </div>

                          <h3 className="text-sm font-semibold text-zinc-100 group-hover:text-amber-400 transition-colors duration-300">
                            {gph.title}
                          </h3>

                          <p className="text-[11px] text-zinc-400 leading-relaxed font-light">
                            {gph.description}
                          </p>
                        </div>

                        {/* Badges / Pill tags */}
                        <div className="flex flex-wrap gap-1 pt-1">
                          {gph.software.map((sw, idx) => (
                            <span 
                              key={idx} 
                              className="text-[9px] font-mono text-zinc-500 bg-white/[0.01] px-2 py-0.5 rounded border border-white/5"
                            >
                              {sw}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: VIDEO EDITS */}
            {activeTab === "videos" && (
              <div className="space-y-6 animate-fade-in">
                
                {/* Selector tabs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {VIDEO_PROJECTS.map((vid) => (
                    <button
                      key={vid.id}
                      onClick={() => setSelectedVideo(vid.id)}
                      className={`p-3 rounded-xl text-left border transition-all ${
                        selectedVideo === vid.id
                          ? "bg-purple-500/5 border-purple-500/40 text-white"
                          : "bg-[#0b0b0d] hover:bg-white/5 border-white/5 text-zinc-500"
                      }`}
                    >
                      <span className="text-[8px] font-mono text-purple-400 uppercase tracking-widest block mb-0.5">{vid.duration} &bull; {vid.platform}</span>
                      <h4 className="text-xs font-semibold truncate text-zinc-100">{vid.title}</h4>
                    </button>
                  ))}
                </div>

                {/* Display details */}
                {VIDEO_PROJECTS.filter(v => v.id === selectedVideo).map((vid) => (
                  <div key={vid.id} className="bg-[#0b0b0d] border border-white/5 rounded-2xl p-6 md:p-8 space-y-6">
                    
                    {/* Timeline Editing Suite Mock */}
                    <div className="bg-zinc-950 rounded-xl border border-white/5 p-4 space-y-3 font-mono text-[9px] text-zinc-500 relative overflow-hidden">
                      <div className="absolute inset-0 bg-radial-gradient-purple opacity-10 pointer-events-none" />

                      <div className="flex items-center justify-between border-b border-white/5 pb-2">
                        <div className="flex items-center gap-1.5">
                          <Play className="h-3 w-3 text-purple-400 fill-purple-400" />
                          <span className="text-white/80 font-semibold uppercase">{vid.title.toUpperCase()}</span>
                        </div>
                        <span className="text-purple-400 bg-purple-500/5 px-2 py-0.5 rounded border border-purple-500/10">
                          TIMELINE EXPORT READY
                        </span>
                      </div>

                      {/* Tracks */}
                      <div className="space-y-1.5 relative z-10">
                        {/* Video Layer */}
                        <div className="flex gap-1 items-center">
                          <span className="w-6 text-zinc-600 shrink-0">V1</span>
                          <div className="flex-1 grid grid-cols-12 gap-1 bg-white/5 p-1 rounded">
                            <div className="col-span-4 bg-purple-500/20 text-purple-300 p-1 text-center rounded border border-purple-500/10">Intro_Hook.mp4</div>
                            <div className="col-span-5 bg-purple-500/10 text-purple-300/70 p-1 text-center rounded border border-purple-500/5">Case_Strategy.mp4</div>
                            <div className="col-span-3 bg-purple-500/20 text-purple-300 p-1 text-center rounded border border-purple-500/10">Outro_CTA.mp4</div>
                          </div>
                        </div>

                        {/* Subtitles Layer */}
                        <div className="flex gap-1 items-center">
                          <span className="w-6 text-zinc-600 shrink-0">TXT</span>
                          <div className="flex-1 grid grid-cols-12 gap-1 bg-white/[0.02] p-1 rounded">
                            <div className="col-span-2 bg-yellow-400/10 text-yellow-300 text-center rounded border border-yellow-400/20">CAPTION</div>
                            <div className="col-span-3 bg-yellow-400/10 text-yellow-300 text-center rounded border border-yellow-400/20">DYNAMIC</div>
                            <div className="col-span-4 bg-yellow-400/10 text-yellow-300 text-center rounded border border-yellow-400/20">TRANSITION</div>
                            <div className="col-span-3 bg-yellow-400/10 text-yellow-300 text-center rounded border border-yellow-400/20">BOOST</div>
                          </div>
                        </div>

                        {/* Audio Layer */}
                        <div className="flex gap-1 items-center">
                          <span className="w-6 text-zinc-600 shrink-0">A1</span>
                          <div className="flex-1 bg-teal-500/5 p-1 rounded relative h-6 flex items-center">
                            <div className="absolute inset-0 flex items-center justify-around px-2 opacity-30">
                              <div className="h-2 w-1 bg-teal-400 rounded-full" />
                              <div className="h-4 w-1 bg-teal-400 rounded-full" />
                              <div className="h-3 w-1 bg-teal-400 rounded-full" />
                              <div className="h-1 w-1 bg-teal-400 rounded-full" />
                              <div className="h-4 w-1 bg-teal-400 rounded-full" />
                              <div className="h-3 w-1 bg-teal-400 rounded-full" />
                              <div className="h-2 w-1 bg-teal-400 rounded-full" />
                            </div>
                            <span className="ml-2 text-teal-400/80 font-mono text-[8px] z-10">MASTER_VOCALS_ENHANCED.wav</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center text-[8px] text-zinc-600 border-t border-white/5 pt-2">
                        <span>TOTAL TIMELINE LENGTH: {vid.duration}</span>
                        <span>EDITED IN: {vid.software.join(", ")}</span>
                      </div>
                    </div>

                    {/* Meta & descriptions */}
                    <div className="space-y-4">
                      <div>
                        <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">{vid.style}</span>
                        <h3 className="text-xl font-light text-white mt-1 font-display">{vid.title}</h3>
                        <p className="text-[10px] text-zinc-500 font-mono mt-0.5">Platform: {vid.platform} &bull; Software Stack: {vid.software.join(" + ")}</p>
                      </div>

                      <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-light">
                        {vid.description}
                      </p>

                      <div className="space-y-2">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500">Retention Strategies Implemented:</span>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {vid.bullets.map((b, idx) => (
                            <div key={idx} className="flex gap-2.5 items-start text-xs text-zinc-400 bg-white/[0.02] p-3 rounded-xl border border-white/5">
                              <Check className="h-3.5 w-3.5 text-purple-400 shrink-0 mt-0.5" />
                              <span className="font-light">{b}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                ))}

              </div>
            )}

            {/* TAB 4: AUTOMATION WORKFLOWS */}
            {activeTab === "automations" && (
              <div className="space-y-6 animate-fade-in">
                
                {/* Selector */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {AUTOMATION_PROJECTS.map((aut) => (
                    <button
                      key={aut.id}
                      onClick={() => setSelectedAutomation(aut.id)}
                      className={`p-3 rounded-xl text-left border transition-all ${
                        selectedAutomation === aut.id
                          ? "bg-blue-500/5 border-blue-500/40 text-white"
                          : "bg-[#0b0b0d] hover:bg-white/5 border-white/5 text-zinc-500"
                      }`}
                    >
                      <span className="text-[8px] font-mono text-blue-400 uppercase tracking-widest block mb-0.5">TRIGGER: {aut.trigger.substring(0, 25)}...</span>
                      <h4 className="text-xs font-semibold truncate text-zinc-100">{aut.title}</h4>
                    </button>
                  ))}
                </div>

                {/* Display details */}
                {AUTOMATION_PROJECTS.filter(a => a.id === selectedAutomation).map((aut) => (
                  <div key={aut.id} className="bg-[#0b0b0d] border border-white/5 rounded-2xl p-6 md:p-8 space-y-6">
                    
                    {/* Interactive workflow step-by-step logic visualizer */}
                    <div className="bg-zinc-950 rounded-xl border border-white/5 p-5 space-y-4 relative overflow-hidden">
                      <div className="absolute inset-0 bg-radial-gradient-blue opacity-10 pointer-events-none" />
                      
                      <div className="flex justify-between items-center text-[8px] font-mono border-b border-white/5 pb-2.5 text-zinc-500 z-10 relative">
                        <span>CR-908 PIPELINE DIAGRAM</span>
                        <span className="text-blue-400 uppercase bg-blue-500/5 px-2 py-0.5 rounded border border-blue-500/10">GHL WORKFLOW CONSOLE</span>
                      </div>

                      {/* Visual Flow chart nodes */}
                      <div className="space-y-3 z-10 relative">
                        {/* Trigger Node */}
                        <div className="flex flex-col items-center">
                          <div className="bg-blue-500/10 border border-blue-500/40 text-blue-300 rounded-lg p-2 px-3 text-center w-full max-w-sm">
                            <span className="text-[8px] uppercase text-zinc-500 font-mono block">TRIGGER EVENT</span>
                            <span className="text-[10px] font-mono font-semibold">{aut.trigger}</span>
                          </div>
                          <div className="h-4 w-px bg-blue-500/30 border-dashed border-l" />
                        </div>

                        {/* Action Steps Sequence List */}
                        {aut.logic.slice(1, -1).map((logicStep, idx) => (
                          <div key={idx} className="flex flex-col items-center">
                            <div className="bg-white/[0.03] border border-white/5 hover:border-white/10 text-zinc-300 rounded-lg p-2.5 px-3.5 w-full max-w-sm flex items-start gap-2.5">
                              <span className="h-4.5 w-4.5 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center font-mono text-[9px] shrink-0 mt-0.5">
                                {idx + 1}
                              </span>
                              <div className="text-left font-mono text-[10px] font-light leading-relaxed">
                                {logicStep}
                              </div>
                            </div>
                            <div className="h-4 w-px bg-blue-500/30 border-dashed border-l" />
                          </div>
                        ))}

                        {/* Outcome Node */}
                        <div className="flex flex-col items-center">
                          <div className="bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 rounded-lg p-2 px-3 text-center w-full max-w-sm">
                            <span className="text-[8px] uppercase text-zinc-500 font-mono block">AUTOMATED OUTCOME</span>
                            <span className="text-[10px] font-mono font-semibold">{aut.logic[aut.logic.length - 1]}</span>
                          </div>
                        </div>

                      </div>

                      <div className="flex justify-between items-center text-[8px] text-zinc-600 pt-2 border-t border-white/5">
                        <span>INTEGRATED TOOLS: {aut.software.join(", ")}</span>
                        <span className="text-emerald-400 font-mono">100% RELIABILITY RATING</span>
                      </div>
                    </div>

                    {/* Metadata */}
                    <div className="space-y-4">
                      <div>
                        <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">Workflow Architecture</span>
                        <h3 className="text-xl font-light text-white mt-1 font-display">{aut.title}</h3>
                        <p className="text-[10px] text-zinc-500 font-mono mt-0.5">Trigger: {aut.trigger}</p>
                      </div>

                      <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-light">
                        {aut.description}
                      </p>

                      <div className="bg-emerald-950/10 border border-emerald-500/20 p-4 rounded-xl space-y-1">
                        <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-wider block font-semibold">Projected Business Impact:</span>
                        <p className="text-xs text-zinc-300 font-light">
                          {aut.businessImpact}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500">Pipeline Actions Deployed:</span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {aut.actions.map((act, idx) => (
                            <div key={idx} className="flex gap-2.5 items-center text-xs text-zinc-400 bg-white/[0.02] p-3 rounded-xl border border-white/5">
                              <CheckCircle className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                              <span className="font-light">{act}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                ))}

              </div>
            )}

          </div>

          {/* THE APPOINTMENT PORTAL (Using Glenn's Google Calendar) */}
          <div className="p-6 md:p-10 space-y-8 bg-zinc-950/40 border-t border-white/5" id="appointment-desk">
            <div className="flex items-center justify-between">
              <h2 className="text-[10px] uppercase tracking-[0.4em] text-white/40">Consultation &amp; Project Setting</h2>
              <span className="text-[10px] font-mono text-white/30">SECURE DISPATCH</span>
            </div>

            <div className="bg-[#0b0b0d] border border-white/5 rounded-3xl p-6 md:p-8 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Book a CRM &amp; Funnel Strategy Consultation</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  Let's audit your current sales funnel, isolate automation bottlenecks, and diagram GHL workflow blueprints custom-tailored to your business niche. Click any portal to initiate contact.
                </p>
              </div>

              {/* Direct Booking Portal Options */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                
                {/* Google Calendar Link */}
                <a
                  href={calendarLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col justify-between p-4 bg-teal-500/5 border border-teal-500/15 hover:border-teal-500/40 hover:bg-teal-500/10 rounded-2xl transition group text-left h-36"
                >
                  <Calendar className="h-6 w-6 text-teal-400" />
                  <div>
                    <span className="text-xs font-semibold text-white block mb-0.5 group-hover:text-teal-400 transition-colors">Google Calendar</span>
                    <span className="text-[10px] text-white/40 block">Propose slots instantly</span>
                  </div>
                </a>

                {/* Messenger link */}
                <a
                  href={messengerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col justify-between p-4 bg-[#0084FF]/5 border border-[#0084FF]/15 hover:border-[#0084FF]/40 hover:bg-[#0084FF]/10 rounded-2xl transition group text-left h-36"
                >
                  <MessageSquare className="h-6 w-6 text-[#0084FF]" />
                  <div>
                    <span className="text-xs font-semibold text-white block mb-0.5 group-hover:text-[#0084FF] transition-colors">Facebook Messenger</span>
                    <span className="text-[10px] text-white/40 block">Chat direct in seconds</span>
                  </div>
                </a>

                {/* WhatsApp Link */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col justify-between p-4 bg-[#25D366]/5 border border-[#25D366]/15 hover:border-[#25D366]/40 hover:bg-[#25D366]/10 rounded-2xl transition group text-left h-36"
                >
                  <PhoneCall className="h-6 w-6 text-[#25D366]" />
                  <div>
                    <span className="text-xs font-semibold text-white block mb-0.5 group-hover:text-[#25D366] transition-colors">WhatsApp Portal</span>
                    <span className="text-[10px] text-white/40 block">Secure direct dialing</span>
                  </div>
                </a>

              </div>

              {/* Dynamic Google Calendar Embed View Toggle */}
              <div className="border-t border-white/5 pt-6 flex flex-col items-center">
                <button
                  onClick={() => setShowEmbeddedCalendar(!showEmbeddedCalendar)}
                  className="text-xs font-mono text-teal-400 hover:text-teal-300 transition flex items-center gap-2"
                >
                  <Calendar className="h-4 w-4" />
                  {showEmbeddedCalendar ? "Hide Embedded Schedule Frame" : "Toggle Embedded Calendar Booking View"}
                  <ChevronDown className={`h-3 w-3 transition-transform ${showEmbeddedCalendar ? "rotate-180" : ""}`} />
                </button>

                {showEmbeddedCalendar && (
                  <div className="w-full mt-6 bg-[#030304] border border-white/5 rounded-2xl overflow-hidden h-[450px] relative animate-fade-in">
                    
                    <div className="absolute inset-0 flex flex-col">
                      <div className="bg-[#0c0c0e] border-b border-white/5 px-4 py-2.5 flex items-center justify-between text-[11px] font-mono text-white/40">
                        <span>HTTPS://CALENDAR.GOOGLE.COM/EMBED/{GLENN_INFO.name.replace(/\s+/g, "").toLowerCase()}</span>
                        <span className="text-emerald-400">SECURE CALENDAR IFRAME</span>
                      </div>
                      <iframe 
                        src="https://calendar.google.com/calendar/embed?src=en.philippines%23holiday%40group.v.calendar.google.com&ctz=Asia%2FManila" 
                        className="w-full flex-1 border-0 bg-white"
                        style={{ filter: "invert(0.9) hue-rotate(180deg)" }}
                        title="Google Calendar Booking Frame"
                      />
                    </div>

                  </div>
                )}
              </div>

            </div>
          </div>

          {/* DYNAMIC SETTINGS CONSOLE (For testing custom coordinates effortlessly) */}
          <div className="p-6 md:p-8 border-t border-white/5 bg-[#09090b] space-y-6">
            <div className="flex items-center gap-2 text-white/40">
              <Sliders className="h-4 w-4 text-teal-400" />
              <span className="text-xs font-mono uppercase tracking-widest">Administrative Coordinates Console</span>
            </div>

            <p className="text-xs text-zinc-500 leading-relaxed font-light">
              This interactive coordinate manager allows you to test custom redirect hyperlinks for your live Messenger, WhatsApp, and Google Calendar buttons in real-time.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-wider text-zinc-500 font-mono block">Your Messenger Link</label>
                <input 
                  type="text"
                  value={messengerLink}
                  onChange={(e) => setMessengerLink(e.target.value)}
                  className="w-full bg-[#030304] border border-white/5 focus:border-teal-500 rounded-lg px-3 py-2 text-xs outline-none font-mono text-white/80"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-wider text-zinc-500 font-mono block">Your WhatsApp Link</label>
                <input 
                  type="text"
                  value={whatsappLink}
                  onChange={(e) => setWhatsappLink(e.target.value)}
                  className="w-full bg-[#030304] border border-white/5 focus:border-teal-500 rounded-lg px-3 py-2 text-xs outline-none font-mono text-white/80"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-wider text-zinc-500 font-mono block">Google Calendar Link</label>
                <input 
                  type="text"
                  value={calendarLink}
                  onChange={(e) => setCalendarLink(e.target.value)}
                  className="w-full bg-[#030304] border border-white/5 focus:border-teal-500 rounded-lg px-3 py-2 text-xs outline-none font-mono text-white/80"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-3 border-t border-white/5 gap-3 text-[11px]">
              <span className="text-zinc-500">
                Type your custom links above, then try clicking the buttons at the top or bottom to test!
              </span>
              <button
                onClick={() => {
                  setMessengerLink(GLENN_INFO.contactLinks.messenger);
                  setWhatsappLink(GLENN_INFO.contactLinks.whatsapp);
                  setCalendarLink(GLENN_INFO.contactLinks.calendar);
                }}
                className="text-teal-400 hover:text-teal-300 font-mono"
              >
                Reset default coordinates
              </button>
            </div>
          </div>

        </section>
      </main>

      {/* Footer copyright */}
      <footer className="border-t border-white/5 py-8 px-6 md:px-12 bg-[#050506] flex flex-col sm:flex-row items-center justify-between text-[10px] text-white/30 font-mono tracking-widest uppercase gap-4">
        <div>
          &copy; {new Date().getFullYear()} {GLENN_INFO.name.toUpperCase()} &bull; CRM AUTOMATION &amp; SYSTEMS BUILDER
        </div>
        <div className="flex space-x-6">
          <span>PORTFOLIO SITE SECURED</span>
          <span>PORT 3000 ACTIVE</span>
        </div>
      </footer>

    </div>
  );
}
