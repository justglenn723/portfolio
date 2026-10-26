import React, { useEffect, useRef, useState } from "react";
import { Globe, Palette, Video, Zap, Users, Volume2, VolumeX, Briefcase, FileText, Download, ClipboardList } from "lucide-react";
import {
  GLENN_INFO,
  RESUME,
  SERVICE_GROUPS,
  PROCESS_STEPS,
  FUNNEL_PROJECTS,
  GRAPHICS_PROJECTS,
  VIDEO_PROJECTS,
  LIVE_REELS,
  AUTOMATION_PROJECTS,
  EXPERIENCES,
  EDUCATION_INFO,
  TRAININGS,
  ELIGIBILITY
} from "./data";
import { FunnelProject } from "./types";

const { messenger, whatsapp, calendar, email } = GLENN_INFO.contactLinks;
const whatsappDigits = whatsapp.replace(/\D/g, "");
const phoneDisplay = "+" + whatsappDigits.replace(/(\d{2})(\d{3})(\d{3})(\d{4})/, "$1 $2 $3 $4");

const CHIPS = [
  "GoHighLevel CRM",
  "Workflow Automation",
  "Funnels & Websites",
  "CloseBot Integration",
  "VA Operations"
];

// Industries taken from the projects shown on this page.
const INDUSTRIES = [
  "Real Estate",
  "Healthcare & Telehealth",
  "Credit Repair",
  "Supplements",
  "SaaS",
  "Network & Field Services"
];

const SERVICE_ICONS = [Zap, Globe, ClipboardList, Palette];

const YEARS_EXPERIENCE = "2+";

// Tools listed on the resume.
const TOOLS: { name: string; logo?: string }[] = [
  { name: "GoHighLevel", logo: "https://cdn.prod.website-files.com/5f15081919fdf673994ab5fd/6697e68b90253f000eed3a7c_HighLevel-Logo-(PNG).png" },
  { name: "CloseBot" },
  { name: "ClickUp", logo: "https://cdn.simpleicons.org/clickup/8a9598" },
  { name: "Canva" },
  { name: "CapCut" },
  { name: "Higgsfield" },
  { name: "Microsoft Office" }
];

const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" }
];

function IconArrowRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function IconExternal() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.18 6.18l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconWhatsapp() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function IconMessenger() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

/* ─────────────────────────────────────
   Reveal wrapper — fades sections in
   once they scroll into view
───────────────────────────────────── */
function Reveal({
  as: Tag = "div",
  variant = "reveal",
  className = "",
  children,
  ...rest
}: {
  as?: any;
  variant?: "reveal" | "reveal-left" | "reveal-right";
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`${variant} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

function SectionHeading({ label, title, accent, sub }: { label: string; title: string; accent: string; sub?: string }) {
  return (
    <>
      <Reveal variant="reveal" className="section-label">
        {label}
      </Reveal>
      <Reveal variant="reveal" as="h2" className="section-title">
        {title} <em>{accent}</em>
      </Reveal>
      {sub && (
        <Reveal variant="reveal" as="p" className="section-sub">
          {sub}
        </Reveal>
      )}
    </>
  );
}

interface ProjectCardProps {
  category: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  imageAlt?: string;
  linkUrl?: string;
  linkLabel?: string;
  placeholderIcon: any;
  children?: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  category,
  title,
  description,
  tags,
  imageUrl,
  imageAlt,
  linkUrl,
  linkLabel,
  placeholderIcon: PlaceholderIcon,
  children
}) => {
  return (
    <Reveal as="article" className="project-card">
      <div className="project-thumb">
        {imageUrl ? (
          <img src={imageUrl} alt={imageAlt ?? `Screenshot of ${title}`} loading="lazy" referrerPolicy="no-referrer" />
        ) : (
          <div className="project-thumb-placeholder">
            <PlaceholderIcon aria-hidden="true" />
          </div>
        )}
      </div>
      <div className="project-body">
        <div className="project-cat-tag">
          <span className="project-cat-dot" />
          {category}
        </div>
        <h4 className="project-title">{title}</h4>
        <p className="project-desc">{description}</p>
        {children}
        {tags.length > 0 && (
          <div className="project-tags">
            {tags.map((tag, idx) => (
              <span key={idx} className="project-tag">
                {tag}
              </span>
            ))}
          </div>
        )}
        {linkUrl && (
          <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="project-link">
            {linkLabel || "View Live"}
            <span className="sr-only"> (opens in a new tab)</span>
            <IconExternal />
          </a>
        )}
      </div>
    </Reveal>
  );
};

function CaseStudyDetails({ project }: { project: FunnelProject }) {
  const rows: { label: string; value?: string }[] = [
    { label: "Goal", value: project.goal },
    { label: "My role", value: project.role },
    { label: "Result", value: project.result }
  ];
  const filled = rows.filter((r) => r.value);
  if (!filled.length && !project.delivered?.length) return null;
  return (
    <dl className="case-details">
      {filled.map((r) => (
        <div key={r.label} className="case-row">
          <dt>{r.label}</dt>
          <dd>{r.value}</dd>
        </div>
      ))}
      {project.delivered && project.delivered.length > 0 && (
        <div className="case-row">
          <dt>Delivered</dt>
          <dd>{project.delivered.join(", ")}</dd>
        </div>
      )}
    </dl>
  );
}

const LiveReelPlayer: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.play().catch(() => {});
  }, [index]);

  const advance = () => {
    setIndex((i) => (i + 1) % LIVE_REELS.length);
  };

  const blockSeekKeys = (e: React.KeyboardEvent<HTMLVideoElement>) => {
    if (["ArrowLeft", "ArrowRight", "Home", "End", " ", "k", "K", "j", "J", "l", "L"].includes(e.key)) {
      e.preventDefault();
    }
  };

  const current = LIVE_REELS[index];

  return (
    <Reveal className="live-reel">
      <div className="live-reel-frame">
        <video
          key={current.id}
          ref={videoRef}
          src={current.src}
          autoPlay
          muted={muted}
          playsInline
          preload="metadata"
          tabIndex={-1}
          onEnded={advance}
          onKeyDown={blockSeekKeys}
          onContextMenu={(e) => e.preventDefault()}
          controlsList="nodownload noremoteplayback nofullscreen"
          disablePictureInPicture
          className="live-reel-video"
          aria-label={`Video editing sample: ${current.label}`}
        />
        <div className="live-reel-badge">
          <span className="live-reel-dot" />
          LIVE
        </div>
        <button
          type="button"
          className="live-reel-mute"
          onClick={() => setMuted((m) => !m)}
          aria-label={muted ? "Unmute" : "Mute"}
        >
          {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
        <div className="live-reel-caption">
          Now Airing &middot; {current.label}
        </div>
      </div>
      <div className="live-reel-dots" aria-hidden="true">
        {LIVE_REELS.map((reel, i) => (
          <span key={reel.id} className={`live-reel-tick ${i === index ? "is-active" : ""}`} />
        ))}
      </div>
    </Reveal>
  );
};

function ResumeButtons({ compact = false }: { compact?: boolean }) {
  return (
    <>
      <a href={RESUME.url} target="_blank" rel="noopener noreferrer" className={compact ? "btn btn-ghost" : "btn btn-primary"}>
        <FileText size={15} aria-hidden="true" />
        View Resume
        <span className="sr-only"> (PDF, opens in a new tab)</span>
      </a>
      <a href={RESUME.url} download={RESUME.downloadName} className="btn btn-ghost">
        <Download size={15} aria-hidden="true" />
        Download Resume (PDF)
      </a>
    </>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <div className="blob b1" aria-hidden="true" />
      <div className="blob b2" aria-hidden="true" />
      <div className="blob b3" aria-hidden="true" />

      {mobileOpen && (
        <div className="mobile-menu open" id="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu">
          <button className="mobile-close" onClick={closeMobile} aria-label="Close menu">
            ✕
          </button>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMobile}>
              {link.label}
            </a>
          ))}
          <a href={RESUME.url} target="_blank" rel="noopener noreferrer" onClick={closeMobile} className="mobile-resume">
            View Resume (PDF)
          </a>
        </div>
      )}

      <header>
        <nav id="navbar" className={scrolled ? "scrolled" : ""} aria-label="Main">
          <a href="#hero" className="nav-logo" aria-label="Glenn Polia, back to top">
            Glenn<span>.</span>Polia
          </a>
          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <a href={RESUME.url} target="_blank" rel="noopener noreferrer" className="nav-cta">
            <FileText size={14} aria-hidden="true" />
            View Resume
            <span className="sr-only"> (PDF, opens in a new tab)</span>
          </a>
          <button
            className="hamburger"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </header>

      <main id="main">
        {/* ═══════════ HERO ═══════════ */}
        <section id="hero" aria-labelledby="hero-title">
          <div className="hero-main">
            <div className="hero-left">
              <div className="hero-tag">
                <span className="tag-dot" />
                Open to New Projects
              </div>
              <h1 className="hero-title" id="hero-title">
                <em>GoHighLevel</em> Automation, Funnels &amp; <strong>Virtual Assistance</strong>
              </h1>
              <p className="hero-bio">{GLENN_INFO.intro}</p>
              <div className="hero-cta">
                <a href="#work" className="btn btn-primary">
                  View My Work
                  <IconArrowRight />
                </a>
                <a href={RESUME.url} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                  <FileText size={15} aria-hidden="true" />
                  View Resume
                  <span className="sr-only"> (PDF, opens in a new tab)</span>
                </a>
                <a href="#contact" className="btn btn-ghost">
                  Contact Me
                </a>
              </div>
              <ul className="chip-stack" aria-label="Core skills">
                {CHIPS.map((chip, idx) => (
                  <li key={idx} className="chip">
                    {chip}
                  </li>
                ))}
              </ul>
              <div className="hero-meta">
                <div className="social-stack">
                  <a href={messenger} target="_blank" rel="noopener noreferrer" className="soc-icon" aria-label="Message me on Messenger">
                    <IconMessenger />
                  </a>
                  <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="soc-icon" aria-label="Message me on WhatsApp">
                    <IconWhatsapp />
                  </a>
                </div>
                <a href={`mailto:${email}`} className="contact-pill">
                  <Users size={13} aria-hidden="true" />
                  {email}
                </a>
              </div>
            </div>

            <div className="hero-center">
              <div className="photo-wrap">
                <img className="photo-img" src="/glenn-hero.jpg" alt={`Portrait of ${GLENN_INFO.name}`} />
                <div className="photo-fade" />
                <div className="photo-glow" />
              </div>
              <div className="name-badge">
                {GLENN_INFO.title}
                <strong>{GLENN_INFO.name}</strong>
              </div>
            </div>
          </div>

          <div className="hero-bottom">
            <a href="#work" className="scroll-hint">
              <div className="scroll-line" />
              See Projects
            </a>
            <div className="avail">
              <div className="avail-dot" />
              Available for new projects
            </div>
          </div>
        </section>

        {/* ═══════════ SELECTED WORK ═══════════ */}
        <section id="work" style={{ background: "var(--bg2)" }}>
          <div className="divider" />
          <div className="section-inner">
            <SectionHeading
              label="Selected Work"
              title="Projects &"
              accent="Builds"
              sub="Funnels I built in GoHighLevel, the way I structure automations, and the creative work that supports them."
            />

            <div id="portfolio-funnels" className="work-group">
              <Reveal as="h3" className="work-group-title">
                <Globe size={18} aria-hidden="true" /> GoHighLevel Funnels
              </Reveal>
              <div className="portfolio-grid">
                {FUNNEL_PROJECTS.map((fun) => (
                  <ProjectCard
                    key={fun.id}
                    category={`${fun.type} · ${fun.niche}`}
                    title={fun.title}
                    description={fun.description}
                    tags={[fun.platform]}
                    imageUrl={fun.imageUrl}
                    imageAlt={`Screenshot of the ${fun.title} funnel`}
                    linkUrl={fun.liveUrl}
                    linkLabel="View Funnel Preview"
                    placeholderIcon={Globe}
                  >
                    <CaseStudyDetails project={fun} />
                  </ProjectCard>
                ))}
              </div>
            </div>

            <div id="portfolio-workflows" className="work-group">
              <Reveal as="h3" className="work-group-title">
                <Zap size={18} aria-hidden="true" /> Automation Workflows
              </Reveal>
              <Reveal as="p" className="work-group-note">
                These are sample designs that show how I plan GoHighLevel workflows step by step.
              </Reveal>
              <div className="workflow-grid">
                {AUTOMATION_PROJECTS.map((aut) => (
                  <ProjectCard
                    key={aut.id}
                    category={aut.label}
                    title={aut.title}
                    description={aut.description}
                    tags={aut.software}
                    imageUrl="/assets/automation-workflow.svg"
                    imageAlt="Illustration of a workflow diagram"
                    placeholderIcon={Zap}
                  >
                    <p className="workflow-trigger">
                      <strong>Trigger:</strong> {aut.trigger}
                    </p>
                    <ol className="workflow-steps">
                      {aut.logic.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ol>
                  </ProjectCard>
                ))}
              </div>
            </div>

            <div id="portfolio-graphics" className="work-group">
              <Reveal as="h3" className="work-group-title">
                <Palette size={18} aria-hidden="true" /> Graphic Design
              </Reveal>
              <div className="portfolio-grid">
                {GRAPHICS_PROJECTS.map((gph) => (
                  <ProjectCard
                    key={gph.id}
                    category={gph.category}
                    title={gph.title}
                    description={gph.description}
                    tags={gph.software}
                    imageUrl={gph.imageUrl}
                    imageAlt={`Ad creatives from the ${gph.title} project`}
                    placeholderIcon={Palette}
                  />
                ))}
              </div>
              {GRAPHICS_PROJECTS[0]?.driveLink && (
                <div className="portfolio-more">
                  <a href={GRAPHICS_PROJECTS[0].driveLink} target="_blank" rel="noopener noreferrer" className="more-link">
                    View More Design Work
                    <span className="sr-only"> (Google Drive, opens in a new tab)</span>
                    <IconArrowRight />
                  </a>
                </div>
              )}
            </div>

            <div id="portfolio-videos" className="work-group">
              <Reveal as="h3" className="work-group-title">
                <Video size={18} aria-hidden="true" /> Video Editing
              </Reveal>
              <div className="live-reel-layout">
                <LiveReelPlayer />
                {VIDEO_PROJECTS.map((vid) => (
                  <Reveal key={vid.id} className="live-reel-info">
                    <div className="project-cat-tag">
                      <span className="project-cat-dot" />
                      {vid.duration} &middot; {vid.platform}
                    </div>
                    <h4 className="project-title">{vid.title}</h4>
                    <p className="project-desc">{vid.description}</p>
                    <ul className="live-reel-bullets">
                      {vid.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                    {vid.software.length > 0 && (
                      <div className="project-tags">
                        {vid.software.map((tag, idx) => (
                          <span key={idx} className="project-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    {vid.driveLink && (
                      <a href={vid.driveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                        Watch More Edits
                        <span className="sr-only"> (Google Drive, opens in a new tab)</span>
                        <IconExternal />
                      </a>
                    )}
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ SERVICES ═══════════ */}
        <section id="services">
          <div className="divider" />
          <div className="section-inner">
            <SectionHeading
              label="Services"
              title="How I Can"
              accent="Help"
              sub="GoHighLevel and automation work comes first, with VA and creative support around it."
            />
            <div className="services-grid">
              {SERVICE_GROUPS.map((group, idx) => {
                const Icon = SERVICE_ICONS[idx % SERVICE_ICONS.length];
                return (
                  <Reveal key={idx} variant="reveal" className="service-card">
                    <div className="service-num" aria-hidden="true">{String(idx + 1).padStart(2, "0")}</div>
                    <div className="service-icon">
                      <Icon aria-hidden="true" />
                    </div>
                    <h3 className="service-name">{group.category}</h3>
                    <p className="service-desc">{group.summary}</p>
                    <ul className="service-list">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════ PROCESS ═══════════ */}
        <section id="process" style={{ background: "var(--bg2)" }}>
          <div className="divider" />
          <div className="section-inner">
            <SectionHeading label="Process" title="How I" accent="Work" />
            <ol className="process-grid">
              {PROCESS_STEPS.map((step, idx) => (
                <Reveal as="li" key={step.title} className="process-step">
                  <span className="process-num" aria-hidden="true">{String(idx + 1).padStart(2, "0")}</span>
                  <h3 className="process-title">{step.title}</h3>
                  <p className="process-text">{step.text}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ═══════════ TOOLS ═══════════ */}
        <section id="tools">
          <div className="divider" />
          <div className="section-inner">
            <SectionHeading
              label="Tools"
              title="Tools &"
              accent="Skills"
              sub="The platforms I use for CRM work, task tracking, and creative support."
            />
            <ul className="tools-grid">
              {TOOLS.map((tool, idx) => (
                <Reveal as="li" key={idx} variant="reveal" className="tool-card">
                  {tool.logo ? (
                    <img className="tool-logo" src={tool.logo} alt="" loading="lazy" />
                  ) : (
                    <div className="tool-icon" aria-hidden="true">{tool.name[0]}</div>
                  )}
                  <div className="tool-name">{tool.name}</div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══════════ ABOUT + EXPERIENCE ═══════════ */}
        <section id="about" style={{ background: "var(--bg2)" }}>
          <div className="divider" />
          <div className="section-inner">
            <div className="section-label">About Me</div>
            <div className="about-grid">
              <Reveal variant="reveal-left" className="about-photo-col">
                <div className="about-img-wrap">
                  <img src="/glenn-hero.jpg" alt={`Portrait of ${GLENN_INFO.name}`} loading="lazy" />
                  <div className="about-img-overlay" />
                  <div className="about-img-border" />
                  <div className="about-corner tl" />
                  <div className="about-corner tr" />
                  <div className="about-corner bl" />
                  <div className="about-corner br" />
                </div>
                <div className="stat-badges">
                  <div className="stat-badge">
                    <div className="stat-badge-num">{YEARS_EXPERIENCE}</div>
                    <div className="stat-badge-label">Years Exp.</div>
                  </div>
                  <div className="stat-badge">
                    <div className="stat-badge-num">BSIS</div>
                    <div className="stat-badge-label">Cum Laude</div>
                  </div>
                </div>
              </Reveal>
              <Reveal variant="reveal-right" className="about-text-col">
                <h2 className="about-heading">
                  Hi, I'm Glenn. I keep your <em>systems</em> and daily work organized.
                </h2>
                <p className="about-body">{GLENN_INFO.about}</p>
                <div>
                  <h3 className="mini-label">Industries in my project work</h3>
                  <ul className="industries">
                    {INDUSTRIES.map((ind, idx) => (
                      <li key={idx} className="ind-tag">
                        {ind}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            <div className="timeline-wrap">
              <Reveal as="h3" className="work-group-title">
                <Briefcase size={18} aria-hidden="true" /> Professional Experience
              </Reveal>
              <div className="timeline">
                {EXPERIENCES.map((exp, idx) => (
                  <Reveal key={idx} variant="reveal" className="timeline-item">
                    <div className="timeline-head">
                      <span className="timeline-role">
                        {exp.role} <span className="timeline-org">&middot; {exp.company}</span>
                      </span>
                      <span className="timeline-period">{exp.period}</span>
                    </div>
                    {exp.location && <p className="timeline-loc">{exp.location}</p>}
                    <ul className="timeline-bullets">
                      {exp.bullets.map((b, bIdx) => (
                        <li key={bIdx}>{b}</li>
                      ))}
                    </ul>
                  </Reveal>
                ))}
              </div>

              <div className="edu-grid">
                <Reveal className="edu-card">
                  <h3 className="mini-label">Education</h3>
                  <p className="timeline-role">{EDUCATION_INFO.degree}</p>
                  <p className="timeline-loc">{EDUCATION_INFO.school}</p>
                  <p className="timeline-loc">
                    {EDUCATION_INFO.period}
                    {EDUCATION_INFO.honors && <> &middot; {EDUCATION_INFO.honors}</>}
                  </p>
                  <h3 className="mini-label" style={{ marginTop: 22 }}>Eligibility</h3>
                  <p className="timeline-loc">{ELIGIBILITY}</p>
                </Reveal>
                <Reveal className="edu-card">
                  <h3 className="mini-label">Training</h3>
                  <ul className="timeline-bullets">
                    {TRAININGS.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ RESUME ═══════════ */}
        <section id="resume">
          <div className="divider" />
          <div className="section-inner">
            <Reveal className="resume-card">
              <div className="resume-icon" aria-hidden="true">
                <FileText size={28} />
              </div>
              <div className="resume-text">
                <div className="section-label">Resume</div>
                <h2 className="contact-heading">
                  My <em>Resume</em>
                </h2>
                <p className="contact-body">
                  A one-page PDF with my professional summary, core skills, work experience, education, training, and
                  eligibility. It covers the same history shown on this page.
                </p>
                <div className="hero-cta">
                  <ResumeButtons />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══════════ CONTACT ═══════════ */}
        <section id="contact" style={{ background: "var(--bg2)" }}>
          <div className="divider" />
          <div className="section-inner">
            <div className="section-label">Contact</div>
            <div className="contact-grid">
              <Reveal variant="reveal-left" className="contact-info">
                <h2 className="contact-heading">
                  Need help with your <em>GoHighLevel</em> account?
                </h2>
                <p className="contact-body">
                  Send me a message about what you need, whether it's a funnel, a workflow, CRM cleanup, or ongoing VA
                  support.
                </p>
                <div className="contact-items">
                  <a href={`mailto:${email}`} className="contact-item">
                    <div className="contact-item-icon">
                      <Users size={18} color="var(--accent)" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="contact-item-label">Email</div>
                      <div className="contact-item-val">{email}</div>
                    </div>
                  </a>
                  <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="contact-item">
                    <div className="contact-item-icon">
                      <IconWhatsapp />
                    </div>
                    <div>
                      <div className="contact-item-label">WhatsApp</div>
                      <div className="contact-item-val">{phoneDisplay}</div>
                    </div>
                  </a>
                  <a href={`tel:+${whatsappDigits}`} className="contact-item">
                    <div className="contact-item-icon">
                      <IconPhone />
                    </div>
                    <div>
                      <div className="contact-item-label">Phone</div>
                      <div className="contact-item-val">{phoneDisplay}</div>
                    </div>
                  </a>
                  <a href={messenger} target="_blank" rel="noopener noreferrer" className="contact-item">
                    <div className="contact-item-icon">
                      <IconMessenger />
                    </div>
                    <div>
                      <div className="contact-item-label">Messenger</div>
                      <div className="contact-item-val">Chat directly</div>
                    </div>
                  </a>
                </div>
              </Reveal>
              <Reveal variant="reveal-right" className="big-cta-card">
                <div className="cta-card-title">
                  Prefer to <em>talk it through?</em>
                </div>
                <p className="cta-card-sub">
                  Book a short call to go over your goals and current setup. You can also grab my resume if you're
                  reviewing candidates.
                </p>
                <div className="cta-card-btns">
                  <a href={calendar} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Book A Call
                    <IconArrowRight />
                  </a>
                  <a href={`mailto:${email}`} className="btn btn-ghost">
                    Contact Me
                  </a>
                </div>
                <div className="cta-card-btns">
                  <ResumeButtons compact />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-logo">
          Glenn<span>.</span>Polia
        </div>
        <div className="footer-copy">&copy; {new Date().getFullYear()} {GLENN_INFO.name}. All rights reserved.</div>
        <nav className="footer-links" aria-label="Footer">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href={RESUME.url} target="_blank" rel="noopener noreferrer">Resume</a>
          <a href="#contact">Contact</a>
        </nav>
      </footer>
    </>
  );
}
