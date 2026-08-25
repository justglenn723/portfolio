import React, { useEffect, useRef, useState } from "react";
import { Plus, Globe, Palette, Video, Zap, Users } from "lucide-react";
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

const { messenger, whatsapp, calendar, email } = GLENN_INFO.contactLinks;
const whatsappDigits = whatsapp.replace(/\D/g, "");
const phoneDisplay = "+" + whatsappDigits.replace(/(\d{2})(\d{3})(\d{3})(\d{4})/, "$1 $2 $3 $4");

const TICKER_ITEMS = [
  "GoHighLevel",
  "Funnel Design",
  "Closebot AI",
  "Workflow Automation",
  "Graphic Design",
  "Video Editing",
  "ClickUp"
];

const CHIPS = [
  "GoHighLevel Specialist",
  "Funnel & Web Design",
  "Closebot AI Integration",
  "Workflow Automation",
  "Video Editing"
];

const INDUSTRIES = [
  "Finance",
  "Health & Wellness",
  "Real Estate",
  "Coaching & Agencies",
  "Retail / E-commerce",
  "Home Services"
];

const SERVICE_ICONS = [Zap, Palette, Video];

const TOTAL_PROJECTS =
  FUNNEL_PROJECTS.length + GRAPHICS_PROJECTS.length + VIDEO_PROJECTS.length + AUTOMATION_PROJECTS.length;

const YEARS_EXPERIENCE = "2+";

const TOOLS: { name: string; logo?: string }[] = [
  { name: "GoHighLevel", logo: "https://cdn.prod.website-files.com/5f15081919fdf673994ab5fd/6697e68b90253f000eed3a7c_HighLevel-Logo-(PNG).png" },
  { name: "ClickUp", logo: "https://cdn.simpleicons.org/clickup/8a9598" },
  { name: "Zapier", logo: "https://cdn.simpleicons.org/zapier/8a9598" },
  { name: "Stripe", logo: "https://cdn.simpleicons.org/stripe/8a9598" },
  { name: "Mailgun", logo: "https://cdn.simpleicons.org/mailgun/8a9598" },
  { name: "Canva" },
  { name: "CapCut" },
  { name: "Twilio" },
  { name: "Closebot AI" }
];

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#tools", label: "Tools" },
  { href: "#portfolio-funnels", label: "Projects" },
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

function IconArrowRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function IconExternal() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.18 6.18l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconWhatsapp() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function IconMessenger() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

/* ─────────────────────────────────────
   Reveal wrapper — mirrors the reference
   site's IntersectionObserver behavior
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

interface ProjectCardProps {
  category: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  linkUrl?: string;
  linkLabel?: string;
  placeholderIcon: any;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  category,
  title,
  description,
  tags,
  imageUrl,
  linkUrl,
  linkLabel,
  placeholderIcon: PlaceholderIcon
}) => {
  return (
    <Reveal className="project-card">
      <div className="project-thumb">
        {imageUrl ? (
          <img src={imageUrl} alt={title} referrerPolicy="no-referrer" />
        ) : (
          <div className="project-thumb-placeholder">
            <PlaceholderIcon />
          </div>
        )}
        {linkUrl && (
          <div className="project-thumb-overlay">
            <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="project-view-btn">
              {linkLabel || "View Live"}
              <IconExternal />
            </a>
          </div>
        )}
      </div>
      <div className="project-body">
        <div className="project-cat-tag">
          <span className="project-cat-dot" />
          {category}
        </div>
        <div className="project-title">{title}</div>
        <p className="project-desc">{description}</p>
        {tags.length > 0 && (
          <div className="project-tags">
            {tags.map((tag, idx) => (
              <span key={idx} className="project-tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Reveal>
  );
};

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + "px";
      cursor.style.top = my + "px";
    };
    document.addEventListener("mousemove", onMove);

    const animate = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    const grow = () => {
      cursor.style.width = "18px";
      cursor.style.height = "18px";
      ring.style.width = "52px";
      ring.style.height = "52px";
    };
    const shrink = () => {
      cursor.style.width = "10px";
      cursor.style.height = "10px";
      ring.style.width = "36px";
      ring.style.height = "36px";
    };
    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a,button,.faq-q,.service-card,.tool-card,.project-card")) grow();
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a,button,.faq-q,.service-card,.tool-card,.project-card")) shrink();
    };
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />

      <div className="blob b1" />
      <div className="blob b2" />
      <div className="blob b3" />

      {mobileOpen && (
        <div className="mobile-menu open">
          <button className="mobile-close" onClick={closeMobile} aria-label="Close menu">
            ✕
          </button>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMobile}>
              {link.label}
            </a>
          ))}
        </div>
      )}

      <nav id="navbar" className={scrolled ? "scrolled" : ""}>
        <a href="#hero" className="nav-logo">
          Glenn<span>.</span>Polia
        </a>
        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <a href={calendar} target="_blank" rel="noopener noreferrer" className="nav-cta">
          Book A Call
        </a>
        <button className="hamburger" onClick={() => setMobileOpen(true)} aria-label="Open menu">
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* ═══════════ HERO ═══════════ */}
      <section id="hero">
        <div className="hero-main">
        <div className="hero-left">
          <div className="hero-tag">
            <span className="tag-dot" />
            Open to New Projects
          </div>
          <h1 className="hero-title">
            I Help Agencies &amp; Coaches
            <br />
            <em>Scale</em> With
            <br />
            <strong>Automation.</strong>
          </h1>
          <p className="hero-bio">{GLENN_INFO.bio}</p>
          <div className="ticker-wrap">
            <div className="ticker">
              {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
                <React.Fragment key={idx}>
                  <span>{item}</span>
                  <span className="sep">&middot;</span>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="hero-cta">
            <a href={calendar} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Book A Call
              <IconArrowRight />
            </a>
            <a href={`tel:+${whatsappDigits}`} className="btn btn-ghost">
              <IconPhone />
              Call Me
            </a>
          </div>
          <div className="chip-stack">
            {CHIPS.map((chip, idx) => (
              <span key={idx} className="chip">
                {chip}
              </span>
            ))}
          </div>
          <div className="hero-meta">
            <div className="social-stack">
              <a href={messenger} target="_blank" rel="noopener noreferrer" className="soc-icon" title="Messenger">
                <IconMessenger />
              </a>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="soc-icon" title="WhatsApp">
                <IconWhatsapp />
              </a>
            </div>
            <a href={`tel:+${whatsappDigits}`} className="contact-pill">
              <IconPhone />
              {phoneDisplay}
            </a>
          </div>
        </div>

        <div className="hero-center">
          <div className="photo-wrap">
            <img className="photo-img" src="/glenn-hero.jpg" alt={GLENN_INFO.name} />
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
          <div className="scroll-hint">
            <div className="scroll-line" />
            Explore Portfolio
          </div>
          <div className="avail">
            <div className="avail-dot" />
            Available for new projects
          </div>
        </div>
      </section>

      {/* ═══════════ ABOUT ═══════════ */}
      <section id="about">
        <div className="divider" />
        <div className="section-inner">
          <div className="section-label">About Me</div>
          <div className="about-grid">
            <Reveal variant="reveal-left" className="about-photo-col">
              <div className="about-img-wrap">
                <img src="/glenn-hero.jpg" alt={GLENN_INFO.name} />
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
                  <div className="stat-badge-num">{TOTAL_PROJECTS}+</div>
                  <div className="stat-badge-label">Projects</div>
                </div>
              </div>
            </Reveal>
            <Reveal variant="reveal-right" className="about-text-col">
              <div className="section-label">I'm Glenn</div>
              <h2 className="about-heading">
                A {GLENN_INFO.title} Who <em>Gets Results.</em>
              </h2>
              <p className="about-body">{GLENN_INFO.bio}</p>
              <div>
                <div className="section-label" style={{ marginBottom: 12 }}>
                  Industries I've Worked With
                </div>
                <div className="industries">
                  {INDUSTRIES.map((ind, idx) => (
                    <span key={idx} className="ind-tag">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
              <div className="hero-cta">
                <a href={calendar} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Book A Call
                  <IconArrowRight />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════ EXPERIENCE ═══════════ */}
      <section id="experience" style={{ background: "var(--bg2)" }}>
        <div className="divider" />
        <div className="section-inner">
          <Reveal variant="reveal" className="section-label">
            Experience
          </Reveal>
          <Reveal variant="reveal" as="h2" className="section-title">
            Professional <em>Timeline</em>
          </Reveal>
          <div style={{ marginTop: 52, display: "flex", flexDirection: "column", gap: 32, maxWidth: 720 }}>
            {EXPERIENCES.map((exp, idx) => (
              <Reveal key={idx} variant="reveal" style={{ borderLeft: "1px solid var(--border)", paddingLeft: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                  <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.15rem", fontWeight: 600 }}>
                    {exp.role} <span style={{ color: "var(--muted)", fontWeight: 400 }}>&mdash; {exp.company}</span>
                  </span>
                  <span style={{ fontSize: ".72rem", color: "var(--dimmed)", letterSpacing: ".08em" }}>{exp.period}</span>
                </div>
                <ul style={{ marginTop: 10, paddingLeft: 18, display: "flex", flexDirection: "column", gap: 6 }}>
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx} style={{ fontSize: ".84rem", color: "var(--muted)", lineHeight: 1.7, fontWeight: 300 }}>
                      {b}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
            <Reveal variant="reveal" style={{ borderLeft: "1px solid var(--border)", paddingLeft: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.15rem", fontWeight: 600 }}>
                  {EDUCATION_INFO.degree}
                </span>
                <span style={{ fontSize: ".72rem", color: "var(--dimmed)", letterSpacing: ".08em" }}>{EDUCATION_INFO.period}</span>
              </div>
              <p style={{ fontSize: ".84rem", color: "var(--muted)", marginTop: 6 }}>{EDUCATION_INFO.school}</p>
              <ul style={{ marginTop: 10, paddingLeft: 18, display: "flex", flexDirection: "column", gap: 6 }}>
                {EDUCATION_INFO.bullets?.map((b, idx) => (
                  <li key={idx} style={{ fontSize: ".84rem", color: "var(--muted)", lineHeight: 1.7, fontWeight: 300 }}>
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════ SERVICES ═══════════ */}
      <section id="services">
        <div className="divider" />
        <div className="section-inner">
          <Reveal variant="reveal" className="section-label">
            My Services
          </Reveal>
          <Reveal variant="reveal" as="h2" className="section-title">
            What I Can Do <em>For You</em>
          </Reveal>
          <Reveal variant="reveal" as="p" className="section-sub">
            A focused set of GoHighLevel, automation, and creative services built to help agencies and coaches scale.
          </Reveal>
          <div className="services-grid">
            {SKILL_GROUPS.map((group, idx) => {
              const Icon = SERVICE_ICONS[idx % SERVICE_ICONS.length];
              return (
                <Reveal key={idx} variant="reveal" className="service-card">
                  <div className="service-num">{String(idx + 1).padStart(2, "0")}</div>
                  <div className="service-icon">
                    <Icon />
                  </div>
                  <div className="service-name">{group.category}</div>
                  <p className="service-desc">{group.items.join(" • ")}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ TOOLS ═══════════ */}
      <section id="tools">
        <div className="divider" />
        <div className="section-inner">
          <Reveal variant="reveal" className="section-label">
            Digital Tools
          </Reveal>
          <Reveal variant="reveal" as="h2" className="section-title">
            My <em>Tech Stack</em>
          </Reveal>
          <Reveal variant="reveal" as="p" className="section-sub">
            Platforms and software I use daily to build, automate, and ship client work.
          </Reveal>
          <div className="tools-grid">
            {TOOLS.map((tool, idx) => (
              <Reveal key={idx} variant="reveal" className="tool-card">
                {tool.logo ? (
                  <img className="tool-logo" src={tool.logo} alt={tool.name} loading="lazy" />
                ) : (
                  <div className="tool-icon">{tool.name[0]}</div>
                )}
                <div className="tool-name">{tool.name}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PORTFOLIO — FUNNELS ═══════════ */}
      <section id="portfolio-funnels" style={{ background: "var(--bg2)" }}>
        <div className="divider" />
        <div className="section-inner">
          <Reveal variant="reveal" className="section-label">
            Portfolio
          </Reveal>
          <Reveal variant="reveal" as="h2" className="section-title">
            GoHighLevel <em>Funnels</em>
          </Reveal>
          <Reveal variant="reveal" as="p" className="section-sub">
            Live funnel builds — click through to view each one in action.
          </Reveal>
          <div className="portfolio-grid">
            {FUNNEL_PROJECTS.map((fun) => (
              <ProjectCard
                key={fun.id}
                category={fun.type}
                title={fun.title}
                description={fun.description}
                tags={[fun.platform]}
                linkUrl={fun.liveUrl}
                linkLabel="View Live"
                placeholderIcon={Globe}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PORTFOLIO — GRAPHICS ═══════════ */}
      <section id="portfolio-graphics">
        <div className="divider" />
        <div className="section-inner">
          <Reveal variant="reveal" className="section-label">
            Portfolio
          </Reveal>
          <Reveal variant="reveal" as="h2" className="section-title">
            Graphics &amp; <em>Design</em>
          </Reveal>
          <Reveal variant="reveal" as="p" className="section-sub">
            Ad creatives and branding work across finance, retail, health, and real estate.
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
                linkUrl={gph.driveLink}
                linkLabel="View Full Size"
                placeholderIcon={Palette}
              />
            ))}
          </div>
          {GRAPHICS_PROJECTS[0]?.driveLink && (
            <div className="portfolio-more">
              <a href={GRAPHICS_PROJECTS[0].driveLink} target="_blank" rel="noopener noreferrer" className="more-link">
                View More Graphics Work
                <IconArrowRight />
              </a>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════ PORTFOLIO — VIDEOS ═══════════ */}
      <section id="portfolio-videos" style={{ background: "var(--bg2)" }}>
        <div className="divider" />
        <div className="section-inner">
          <Reveal variant="reveal" className="section-label">
            Portfolio
          </Reveal>
          <Reveal variant="reveal" as="h2" className="section-title">
            Video <em>Editing</em>
          </Reveal>
          <Reveal variant="reveal" as="p" className="section-sub">
            Short-form ad edits built for retention, watch time, and paid social performance.
          </Reveal>
          <div className="portfolio-grid">
            {VIDEO_PROJECTS.map((vid) => (
              <ProjectCard
                key={vid.id}
                category={`${vid.duration} • ${vid.platform}`}
                title={vid.title}
                description={vid.description}
                tags={vid.software}
                linkUrl={vid.driveLink}
                linkLabel="Watch Reels"
                placeholderIcon={Video}
              />
            ))}
          </div>
          {VIDEO_PROJECTS[0]?.driveLink && (
            <div className="portfolio-more">
              <a href={VIDEO_PROJECTS[0].driveLink} target="_blank" rel="noopener noreferrer" className="more-link">
                Watch Full Video Reel Collection
                <IconArrowRight />
              </a>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════ PORTFOLIO — WORKFLOWS ═══════════ */}
      <section id="portfolio-workflows">
        <div className="divider" />
        <div className="section-inner">
          <Reveal variant="reveal" className="section-label">
            Portfolio
          </Reveal>
          <Reveal variant="reveal" as="h2" className="section-title">
            Automation <em>Workflows</em>
          </Reveal>
          <Reveal variant="reveal" as="p" className="section-sub">
            GoHighLevel workflow builds — trigger logic, actions, and business impact.
          </Reveal>
          <div className="portfolio-grid">
            {AUTOMATION_PROJECTS.map((aut) => (
              <ProjectCard
                key={aut.id}
                category={`Trigger: ${aut.trigger}`}
                title={aut.title}
                description={`${aut.description} ${aut.businessImpact}`}
                tags={aut.software}
                imageUrl="/assets/automation-workflow.svg"
                placeholderIcon={Zap}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section id="faq" style={{ background: "var(--bg2)" }}>
        <div className="divider" />
        <div className="section-inner">
          <Reveal variant="reveal" className="section-label">
            FAQ
          </Reveal>
          <Reveal variant="reveal" as="h2" className="section-title">
            Common <em>Questions</em>
          </Reveal>
          <Reveal variant="reveal" as="p" className="section-sub">
            Everything you need to know before we start working together.
          </Reveal>
          <div className="faq-wrap" style={{ marginTop: 52 }}>
            {FAQS.map((faq, idx) => (
              <div key={idx} className={`faq-item ${openFaq === idx ? "open" : ""}`}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                  <span className="faq-q-text">{faq.q}</span>
                  <span className="faq-icon">
                    <Plus size={14} />
                  </span>
                </button>
                <div className="faq-a">
                  <div className="faq-a-inner">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CONTACT ═══════════ */}
      <section id="contact">
        <div className="divider" />
        <div className="section-inner">
          <Reveal variant="reveal" className="section-label">
            Get In Touch
          </Reveal>
          <div className="contact-grid">
            <Reveal variant="reveal-left" className="contact-info">
              <h2 className="contact-heading">
                Let's Build Something <em>Great Together.</em>
              </h2>
              <p className="contact-body">
                Ready to scale your funnels and automations? Whether you need a full GHL build or just one specific
                service — I'm here to help.
              </p>
              <div className="contact-items">
                <a href={`tel:+${whatsappDigits}`} className="contact-item">
                  <div className="contact-item-icon">
                    <IconPhone />
                  </div>
                  <div>
                    <div className="contact-item-label">Phone</div>
                    <div className="contact-item-val">{phoneDisplay}</div>
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
                <a href={messenger} target="_blank" rel="noopener noreferrer" className="contact-item">
                  <div className="contact-item-icon">
                    <IconMessenger />
                  </div>
                  <div>
                    <div className="contact-item-label">Messenger</div>
                    <div className="contact-item-val">Chat directly</div>
                  </div>
                </a>
                <a href={`mailto:${email}`} className="contact-item">
                  <div className="contact-item-icon">
                    <Users size={18} color="var(--accent)" />
                  </div>
                  <div>
                    <div className="contact-item-label">Email</div>
                    <div className="contact-item-val">{email}</div>
                  </div>
                </a>
              </div>
            </Reveal>
            <Reveal variant="reveal-right" className="big-cta-card">
              <div className="cta-card-title">
                Ready to <em>get started?</em>
                <br />
                Let's talk strategy.
              </div>
              <p className="cta-card-sub">
                Book a free discovery call and let's map out how I can help you scale. No pressure, just a conversation
                about your goals and how automation can get you there.
              </p>
              <div className="cta-card-btns">
                <a href={calendar} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Book A Free Call
                  <IconArrowRight />
                </a>
                <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                  Message on WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-logo">
          Glenn<span>.</span>Polia
        </div>
        <div className="footer-copy">&copy; {new Date().getFullYear()} {GLENN_INFO.name}. All rights reserved.</div>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio-funnels">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </>
  );
}
