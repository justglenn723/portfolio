import React, { useState } from "react";
import {
  MessageSquare,
  PhoneCall,
  Calendar,
  MapPin,
  ArrowUpRight,
  Check,
  ChevronDown,
  Globe,
  Palette,
  Video,
  Zap,
  Mail,
  Menu,
  X,
  Sparkles
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

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#tools", label: "Tools" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" }
];

const FAQS = [
  {
    q: "What platforms and tools do you specialize in?",
    a: "GoHighLevel (GHL) is my core platform for CRM, funnels, and workflow automation, paired with ClickUp for project management, Closebot for AI-driven chat, and Canva/Photoshop/Premiere Pro for creative work."
  },
  {
    q: "How fast can you turn around a funnel or workflow build?",
    a: "A standard funnel or automation build typically takes 3-7 business days depending on complexity, integrations required, and revision rounds."
  },
  {
    q: "Do you work with agencies as well as individual businesses?",
    a: "Yes — I've supported marketing agencies, coaches, SaaS founders, and local businesses, building both client-facing funnels and internal operational systems."
  },
  {
    q: "Can you take over an existing GHL account or workflow?",
    a: "Absolutely. I regularly audit existing sub-accounts, clean up broken automations, and rebuild workflows without disrupting live campaigns."
  },
  {
    q: "How do we get started?",
    a: "Book a slot on my calendar or message me directly on WhatsApp/Messenger — we'll go over your goals and current setup, then I'll scope the build."
  }
];

const TAB_META = {
  funnels: { label: "Funnels", icon: Globe, accent: "teal" },
  graphics: { label: "Graphics", icon: Palette, accent: "amber" },
  videos: { label: "Videos", icon: Video, accent: "purple" },
  automations: { label: "Workflows", icon: Zap, accent: "blue" }
} as const;

type TabKey = keyof typeof TAB_META;

const ACCENT_CLASSES: Record<string, { text: string; bg: string; border: string; ring: string }> = {
  teal: { text: "text-teal-400", bg: "bg-teal-500/10", border: "border-teal-500/30", ring: "hover:border-teal-500/50" },
  amber: { text: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/30", ring: "hover:border-amber-500/50" },
  purple: { text: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/30", ring: "hover:border-purple-500/50" },
  blue: { text: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/30", ring: "hover:border-blue-500/50" }
};

const ALL_TOOLS = Array.from(
  new Set([
    "GoHighLevel",
    "ClickUp",
    "Closebot AI",
    "Twilio",
    "Zapier",
    "Stripe",
    ...GRAPHICS_PROJECTS.flatMap((g) => g.software),
    ...VIDEO_PROJECTS.flatMap((v) => v.software),
    ...AUTOMATION_PROJECTS.flatMap((a) => a.software)
  ])
);

function Initials({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("");
  return (
    <div className="h-40 w-40 md:h-52 md:w-52 rounded-3xl bg-gradient-to-br from-amber-400/20 to-amber-600/5 border border-amber-400/30 flex items-center justify-center shadow-[0_8px_40px_rgba(251,191,36,0.15)]">
      <span className="text-5xl md:text-6xl font-display font-semibold text-amber-300 tracking-wide">
        {initials}
      </span>
    </div>
  );
}

export default function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>("funnels");
  const [selectedFunnel, setSelectedFunnel] = useState<string>(FUNNEL_PROJECTS[0].id);
  const [selectedVideo, setSelectedVideo] = useState<string>(VIDEO_PROJECTS[0].id);
  const [selectedAutomation, setSelectedAutomation] = useState<string>(AUTOMATION_PROJECTS[0].id);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const { messenger, whatsapp, calendar, email } = GLENN_INFO.contactLinks;

  return (
    <div className="min-h-screen bg-[#0a0e17] text-[#e4e4e7] font-sans selection:bg-amber-400/20 selection:text-white overflow-x-hidden antialiased">

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0e17]/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <div className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.6)]" />
            <span className="text-sm font-semibold tracking-wide text-white font-display">
              {GLENN_INFO.name}
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-widest text-zinc-400 hover:text-amber-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href={calendar}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 text-amber-300 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all active:scale-[0.98]"
            >
              <Calendar className="h-3.5 w-3.5" />
              Book a Call
            </a>
          </div>

          <button
            className="md:hidden text-zinc-300"
            onClick={() => setMobileNavOpen((v: boolean) => !v)}
            aria-label="Toggle navigation"
          >
            {mobileNavOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileNavOpen && (
          <div className="md:hidden border-t border-white/5 px-6 py-4 flex flex-col gap-4 bg-[#0a0e17]">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileNavOpen(false)}
                className="text-sm text-zinc-300 hover:text-amber-400"
              >
                {link.label}
              </a>
            ))}
            <a
              href={calendar}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 bg-amber-400/10 border border-amber-400/30 text-amber-300 px-4 py-2.5 rounded-xl text-xs font-semibold"
            >
              <Calendar className="h-3.5 w-3.5" />
              Book a Call
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28 flex flex-col items-center text-center gap-8">
        <span className="flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-amber-400/80 font-mono">
          <MapPin className="h-3 w-3" />
          {GLENN_INFO.location} &bull; Remote Available
        </span>

        <h1 className="text-4xl md:text-6xl font-display font-semibold text-white leading-tight max-w-3xl">
          I Help Agencies &amp; Coaches{" "}
          <span className="text-amber-400">Scale With Automation</span>
        </h1>

        <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-light max-w-2xl">
          {GLENN_INFO.bio}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <a
            href={calendar}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-[#0a0e17] px-6 py-3 rounded-xl text-sm font-semibold transition-all active:scale-[0.98]"
          >
            <Calendar className="h-4 w-4" />
            Book a Strategy Call
          </a>
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all active:scale-[0.98]"
          >
            <PhoneCall className="h-4 w-4" />
            Message on WhatsApp
          </a>
        </div>

        <Initials name={GLENN_INFO.name} />
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-amber-400/80 font-mono block mb-2">About</span>
            <h2 className="text-2xl font-display font-semibold text-white">{GLENN_INFO.title}</h2>
            <p className="text-xs text-zinc-500 mt-1">{GLENN_INFO.subtitle}</p>
          </div>
          <div className="md:col-span-2 space-y-6">
            <p className="text-sm text-zinc-400 leading-relaxed font-light">{GLENN_INFO.bio}</p>
            <div className="border-t border-white/5 pt-6">
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-4 font-mono block">Professional Timeline</span>
              <div className="space-y-6 pl-4 border-l border-white/10">
                {EXPERIENCES.map((exp, idx) => (
                  <div key={idx} className="relative space-y-1.5">
                    <div className="absolute -left-[21px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#0a0e17] border border-amber-400/60" />
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="text-sm font-semibold text-white">
                        {exp.role} <span className="text-zinc-500 font-normal">&mdash; {exp.company}</span>
                      </h4>
                      <span className="text-[10px] font-mono text-zinc-500">{exp.period}</span>
                    </div>
                    <ul className="space-y-1 pl-4 list-disc text-xs text-zinc-400 font-light">
                      {exp.bullets.map((b, bIdx) => (
                        <li key={bIdx}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-white/5 pt-6">
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2 font-mono block">Education</span>
              <div className="bg-white/[0.02] border border-white/5 p-4 rounded-xl space-y-1.5">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-sm font-semibold text-white">{EDUCATION_INFO.degree}</h4>
                  <span className="text-[10px] font-mono text-amber-400 shrink-0">{EDUCATION_INFO.period}</span>
                </div>
                <p className="text-xs text-zinc-500">{EDUCATION_INFO.school}</p>
                <ul className="space-y-1 pl-4 list-disc text-xs text-zinc-400 font-light">
                  {EDUCATION_INFO.bullets?.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-t border-white/5 bg-white/[0.015]">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[0.3em] text-amber-400/80 font-mono block mb-2">Services</span>
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-white">What I Bring to Your Business</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SKILL_GROUPS.map((group, idx) => (
              <div key={idx} className="bg-[#0d1119] border border-white/5 rounded-2xl p-6 space-y-4 hover:border-amber-400/20 transition-colors">
                <span className="text-sm font-semibold text-amber-400 block">{group.category}</span>
                <ul className="space-y-2">
                  {group.items.map((item, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2 text-xs text-zinc-400 font-light">
                      <Check className="h-3.5 w-3.5 text-amber-400/70 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section id="tools" className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="text-center mb-10">
            <span className="text-[10px] uppercase tracking-[0.3em] text-amber-400/80 font-mono block mb-2">Tools</span>
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-white">Platforms &amp; Software I Work In</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5">
            {ALL_TOOLS.map((tool, idx) => (
              <span
                key={idx}
                className="text-xs font-mono text-zinc-300 bg-white/[0.03] border border-white/10 px-3.5 py-2 rounded-lg"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="border-t border-white/5 bg-white/[0.015]">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="text-center mb-10">
            <span className="text-[10px] uppercase tracking-[0.3em] text-amber-400/80 font-mono block mb-2">Portfolio</span>
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-white">Recent Work</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {(Object.keys(TAB_META) as TabKey[]).map((key) => {
              const meta = TAB_META[key];
              const Icon = meta.icon;
              const accent = ACCENT_CLASSES[meta.accent];
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all border ${
                    isActive ? `${accent.bg} ${accent.text} ${accent.border}` : "text-zinc-500 border-transparent hover:text-zinc-300"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {meta.label}
                </button>
              );
            })}
          </div>

          {/* FUNNELS */}
          {activeTab === "funnels" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {FUNNEL_PROJECTS.map((fun) => (
                <div
                  key={fun.id}
                  onClick={() => setSelectedFunnel(fun.id === selectedFunnel ? "" : fun.id)}
                  className={`cursor-pointer bg-[#0d1119] border rounded-2xl overflow-hidden flex flex-col transition-all ${
                    selectedFunnel === fun.id ? "border-teal-500/40" : "border-white/5 hover:border-white/15"
                  }`}
                >
                  <div className={`aspect-[16/10] bg-gradient-to-br ${fun.gradient} flex items-center justify-center border-b border-white/5`}>
                    <Globe className="h-10 w-10 text-teal-400/60" />
                  </div>
                  <div className="p-5 space-y-2">
                    <span className="text-[10px] font-mono text-teal-400 uppercase tracking-widest">{fun.platform}</span>
                    <h3 className="text-sm font-semibold text-white">{fun.title}</h3>
                    <p className="text-xs text-zinc-500">{fun.niche}</p>
                    {selectedFunnel === fun.id && (
                      <div className="pt-3 space-y-3 border-t border-white/5 mt-3">
                        <p className="text-xs text-zinc-400 font-light leading-relaxed">{fun.description}</p>
                        <ul className="space-y-1.5">
                          {fun.features.map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-[11px] text-zinc-400 font-light">
                              <Check className="h-3 w-3 text-teal-400 shrink-0 mt-0.5" />
                              {feat}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* GRAPHICS */}
          {activeTab === "graphics" && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {GRAPHICS_PROJECTS.map((gph) => (
                  <div
                    key={gph.id}
                    className="bg-[#0d1119] border border-white/5 rounded-2xl overflow-hidden flex flex-col group hover:border-amber-500/20 transition-all"
                  >
                    <div className="aspect-[4/3] w-full relative overflow-hidden bg-zinc-950 border-b border-white/5">
                      <img
                        src={gph.imageUrl}
                        alt={gph.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase">{gph.category}</span>
                        <h3 className="text-sm font-semibold text-white">{gph.title}</h3>
                        <p className="text-xs text-zinc-400 font-light leading-relaxed">{gph.description}</p>
                      </div>
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {gph.software.map((sw, idx) => (
                          <span key={idx} className="text-[10px] font-mono text-zinc-500 bg-white/[0.03] px-2 py-0.5 rounded border border-white/5">
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

          {/* VIDEOS */}
          {activeTab === "videos" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {VIDEO_PROJECTS.map((vid) => (
                <div
                  key={vid.id}
                  onClick={() => setSelectedVideo(vid.id === selectedVideo ? "" : vid.id)}
                  className={`cursor-pointer bg-[#0d1119] border rounded-2xl overflow-hidden flex flex-col transition-all ${
                    selectedVideo === vid.id ? "border-purple-500/40" : "border-white/5 hover:border-white/15"
                  }`}
                >
                  <div className={`aspect-[16/9] bg-gradient-to-br ${vid.gradient} flex items-center justify-center border-b border-white/5`}>
                    <Video className="h-10 w-10 text-purple-400/60" />
                  </div>
                  <div className="p-5 space-y-2">
                    <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">{vid.duration} &bull; {vid.platform}</span>
                    <h3 className="text-sm font-semibold text-white">{vid.title}</h3>
                    <p className="text-xs text-zinc-500">{vid.style}</p>
                    {selectedVideo === vid.id && (
                      <div className="pt-3 space-y-3 border-t border-white/5 mt-3">
                        <p className="text-xs text-zinc-400 font-light leading-relaxed">{vid.description}</p>
                        <ul className="space-y-1.5">
                          {vid.bullets.map((b, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-[11px] text-zinc-400 font-light">
                              <Check className="h-3 w-3 text-purple-400 shrink-0 mt-0.5" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* WORKFLOWS */}
          {activeTab === "automations" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {AUTOMATION_PROJECTS.map((aut) => (
                <div
                  key={aut.id}
                  onClick={() => setSelectedAutomation(aut.id === selectedAutomation ? "" : aut.id)}
                  className={`cursor-pointer bg-[#0d1119] border rounded-2xl overflow-hidden flex flex-col transition-all ${
                    selectedAutomation === aut.id ? "border-blue-500/40" : "border-white/5 hover:border-white/15"
                  }`}
                >
                  <div className="aspect-[16/9] bg-gradient-to-br from-blue-500/20 to-indigo-500/10 flex items-center justify-center border-b border-white/5">
                    <Zap className="h-10 w-10 text-blue-400/60" />
                  </div>
                  <div className="p-5 space-y-2">
                    <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">Trigger: {aut.trigger}</span>
                    <h3 className="text-sm font-semibold text-white">{aut.title}</h3>
                    {selectedAutomation === aut.id && (
                      <div className="pt-3 space-y-3 border-t border-white/5 mt-3">
                        <p className="text-xs text-zinc-400 font-light leading-relaxed">{aut.description}</p>
                        <div className="bg-emerald-950/10 border border-emerald-500/20 p-3 rounded-xl">
                          <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-wider block font-semibold mb-1">Business Impact</span>
                          <p className="text-[11px] text-zinc-300 font-light">{aut.businessImpact}</p>
                        </div>
                        <ul className="space-y-1.5">
                          {aut.actions.map((act, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-[11px] text-zinc-400 font-light">
                              <Check className="h-3 w-3 text-blue-400 shrink-0 mt-0.5" />
                              {act}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="text-center mb-10">
            <span className="text-[10px] uppercase tracking-[0.3em] text-amber-400/80 font-mono block mb-2">FAQ</span>
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-white">Common Questions</h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-[#0d1119] border border-white/5 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="text-sm font-medium text-white">{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 text-amber-400 shrink-0 transition-transform ${openFaq === idx ? "rotate-180" : ""}`} />
                </button>
                {openFaq === idx && (
                  <p className="px-5 pb-5 text-xs text-zinc-400 font-light leading-relaxed">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-white/5 bg-white/[0.015]">
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 md:py-20 text-center space-y-8">
          <Sparkles className="h-6 w-6 text-amber-400 mx-auto" />
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-white">
            Let's Build Your Next Funnel or Automation
          </h2>
          <p className="text-sm text-zinc-400 font-light max-w-xl mx-auto">
            Pick whichever works best for you — I typically respond within a few hours.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <a
              href={calendar}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-5 bg-amber-400/5 border border-amber-400/20 hover:border-amber-400/50 hover:bg-amber-400/10 rounded-2xl transition"
            >
              <Calendar className="h-5 w-5 text-amber-400" />
              <span className="text-xs font-semibold text-white">Google Calendar</span>
            </a>
            <a
              href={messenger}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-5 bg-[#0084FF]/5 border border-[#0084FF]/20 hover:border-[#0084FF]/50 hover:bg-[#0084FF]/10 rounded-2xl transition"
            >
              <MessageSquare className="h-5 w-5 text-[#0084FF]" />
              <span className="text-xs font-semibold text-white">Messenger</span>
            </a>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-5 bg-[#25D366]/5 border border-[#25D366]/20 hover:border-[#25D366]/50 hover:bg-[#25D366]/10 rounded-2xl transition"
            >
              <PhoneCall className="h-5 w-5 text-[#25D366]" />
              <span className="text-xs font-semibold text-white">WhatsApp</span>
            </a>
          </div>

          <a href={`mailto:${email}`} className="inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-amber-400 transition">
            <Mail className="h-3.5 w-3.5" />
            {email}
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between text-[10px] text-white/30 font-mono tracking-widest uppercase gap-4">
        <div>&copy; {new Date().getFullYear()} {GLENN_INFO.name.toUpperCase()}</div>
        <a href={calendar} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-amber-400 transition">
          Book a call <ArrowUpRight className="h-3 w-3" />
        </a>
      </footer>

    </div>
  );
}
