import React, { useEffect, useRef, useState } from "react";
import { Zap, Tag, Target, MessageSquare, Clock, Bell, CheckSquare, Bot, GitBranch, Mail, CalendarCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { AutomationProject, GraphicsProject, WorkflowStep, WorkflowStepKind } from "./types";

/* ─────────────────────────────────────
   Workflow canvas — drawn to look like the
   GoHighLevel workflow builder
───────────────────────────────────── */

const STEP_ICONS: Record<WorkflowStepKind, any> = {
  trigger: Zap,
  tag: Tag,
  opportunity: Target,
  sms: MessageSquare,
  email: Mail,
  wait: Clock,
  notify: Bell,
  task: CheckSquare,
  ai: Bot
};

function useInView<T extends HTMLElement>(threshold = 0.25) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function WfNode({ step, index }: { step: WorkflowStep; index: number }) {
  const Icon = STEP_ICONS[step.kind];
  return (
    <div className={`wf-node wf-${step.kind}`} style={{ "--i": index } as React.CSSProperties}>
      {step.kind === "trigger" && <span className="wf-node-badge">Trigger</span>}
      <span className="wf-node-icon" aria-hidden="true">
        <Icon size={15} />
      </span>
      <span className="wf-node-text">
        <span className="wf-node-action">{step.action}</span>
        <span className="wf-node-detail">{step.detail}</span>
      </span>
    </div>
  );
}

function WfLine() {
  return <span className="wf-line" aria-hidden="true" />;
}

export function WorkflowCanvas({ project }: { project: AutomationProject }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);
  let i = 0;
  const node = (s: WorkflowStep) => <WfNode step={s} index={i++} />;
  const withLines = (steps: WorkflowStep[]) =>
    steps.map((s, idx) => (
      <React.Fragment key={idx}>
        {idx > 0 && <WfLine />}
        {node(s)}
      </React.Fragment>
    ));

  return (
    <div ref={ref} className={`wf-canvas ${inView ? "is-running" : ""}`}>
      <div className="wf-toolbar" aria-hidden="true">
        <span className="wf-toolbar-dot" />
        <span className="wf-toolbar-dot" />
        <span className="wf-toolbar-dot" />
        <span className="wf-toolbar-title">Workflow · {project.title}</span>
        <span className="wf-toolbar-status">Published</span>
      </div>
      <div className="wf-flow">
        {withLines(project.steps)}
        {project.branch && (
          <>
            <WfLine />
            <div className="wf-cond" style={{ "--i": i++ } as React.CSSProperties}>
              <GitBranch size={14} aria-hidden="true" />
              <span>
                <span className="wf-node-action">If/Else</span>
                <span className="wf-node-detail">{project.branch.condition}</span>
              </span>
            </div>
            <div className="wf-branches">
              <div className="wf-col">
                <span className="wf-pill wf-yes">Yes</span>
                {withLines(project.branch.yes)}
                <span className="wf-line wf-grow" aria-hidden="true" />
              </div>
              <div className="wf-col">
                <span className="wf-pill wf-no">No</span>
                {withLines(project.branch.no)}
                <span className="wf-line wf-grow" aria-hidden="true" />
              </div>
            </div>
          </>
        )}
        {project.after && project.after.length > 0 && (
          <>
            <WfLine />
            {withLines(project.after)}
          </>
        )}
        <WfLine />
        <span className="wf-end">END</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────
   AI booking assistant demo — an example
   conversation playing out with the CRM
   updating beside it
───────────────────────────────────── */

type ChatEvent =
  | { from: "lead" | "ai"; text: string; stage?: number; log?: string[] };

const CHAT_SCRIPT: ChatEvent[] = [
  { from: "lead", text: "Hi! I saw your ad. How much is a consultation?", stage: 0, log: ["Form submitted", "Tag added: new lead"] },
  { from: "ai", text: "Hi Sarah, thanks for reaching out! The first consultation is free. Want me to find you a time this week?", stage: 1, log: ["AI assistant replied"] },
  { from: "lead", text: "Yes please, Thursday afternoon works." },
  { from: "ai", text: "I have Thursday at 2:00 PM or 4:30 PM open. Which one works better for you?", log: ["Checked calendar availability"] },
  { from: "lead", text: "2 PM please" },
  { from: "ai", text: "Done! You're booked for Thursday at 2:00 PM. You'll get a reminder the day before.", stage: 2, log: ["Appointment booked: Thu 2:00 PM", "Opportunity moved to Booked"] }
];

const STAGES = ["New Lead", "Contacted", "Booked"];

export function AiBookingDemo() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const [shown, setShown] = useState(0);
  const [typing, setTyping] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (reduced) {
      setShown(CHAT_SCRIPT.length);
      return;
    }
    if (!inView) return;
    let timer: number;
    if (shown >= CHAT_SCRIPT.length) {
      timer = window.setTimeout(() => setShown(0), 5000);
      return () => window.clearTimeout(timer);
    }
    const next = CHAT_SCRIPT[shown];
    if (next.from === "ai") {
      setTyping(true);
      timer = window.setTimeout(() => {
        setTyping(false);
        setShown((n) => n + 1);
      }, 1700);
    } else {
      timer = window.setTimeout(() => setShown((n) => n + 1), shown === 0 ? 600 : 1300);
    }
    return () => window.clearTimeout(timer);
  }, [inView, shown, reduced]);

  useEffect(() => {
    const el = chatRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: reduced ? "auto" : "smooth" });
  }, [shown, typing, reduced]);

  const visible = CHAT_SCRIPT.slice(0, shown);
  const stage = visible.reduce((s, e) => (e.stage !== undefined ? e.stage : s), -1);
  const log = visible.flatMap((e) => e.log ?? []);

  return (
    <div ref={ref} className="ai-demo">
      <div className="ai-phone">
        <div className="ai-phone-head">
          <span className="ai-avatar" aria-hidden="true">
            <Bot size={16} />
          </span>
          <span>
            <strong>AI Booking Assistant</strong>
            <span className="ai-online">Online · replies by SMS</span>
          </span>
        </div>
        <div className="ai-chat" ref={chatRef} aria-live="polite">
          {visible.map((m, idx) => (
            <div key={idx} className={`ai-msg ai-${m.from}`}>
              {m.text}
            </div>
          ))}
          {typing && (
            <div className="ai-msg ai-ai ai-typing" aria-label="AI assistant is typing">
              <span />
              <span />
              <span />
            </div>
          )}
        </div>
      </div>

      <div className="ai-crm">
        <div className="ai-panel">
          <div className="ai-panel-title">Sales Pipeline</div>
          <ol className="ai-stages">
            {STAGES.map((s, idx) => (
              <li key={s} className={idx === stage ? "is-current" : idx < stage ? "is-done" : ""}>
                <span className="ai-stage-dot" aria-hidden="true" />
                {s}
              </li>
            ))}
          </ol>
          <div className="ai-contact">
            <span className="ai-contact-avatar" aria-hidden="true">S</span>
            <span>
              <strong>Sarah M.</strong>
              <span className="ai-contact-sub">{stage >= 2 ? "Booked · Thu 2:00 PM" : stage >= 0 ? "Lead · Facebook ad" : "Waiting for a new lead"}</span>
            </span>
            {stage >= 2 && <CalendarCheck size={18} className="ai-contact-check" aria-hidden="true" />}
          </div>
        </div>
        <div className="ai-panel">
          <div className="ai-panel-title">Workflow Activity</div>
          <ul className="ai-log">
            {log.length === 0 && <li className="ai-log-empty">Waiting for a trigger…</li>}
            {log.map((l, idx) => (
              <li key={idx}>
                <Zap size={12} aria-hidden="true" />
                {l}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────
   Ad creatives carousel: manual only (scroll, drag, swipe, arrows, keys).
   Slides shrink toward the edges and grow as they reach the center.
───────────────────────────────────── */

export function AdCarousel({ items }: { items: GraphicsProject[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const drag = useRef({ active: false, moved: false, startX: 0, startLeft: 0 });
  const [active, setActive] = useState(0);

  // Scale and fade each slide by its distance from the track's center.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const box = track.getBoundingClientRect();
      const center = box.left + box.width / 2;
      let closest = 0;
      let closestDist = Infinity;
      slideRefs.current.forEach((slide, i) => {
        if (!slide) return;
        const r = slide.getBoundingClientRect();
        const dist = Math.abs(r.left + r.width / 2 - center);
        const t = Math.min(dist / (box.width / 2), 1); // 0 at center, 1 at the edge
        slide.style.setProperty("--ad-scale", String(1 - t * 0.4));
        slide.style.setProperty("--ad-fade", String(1 - t * 0.55));
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });
      setActive(closest);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    // Start on the middle item so there is a smaller slide at each edge.
    const mid = slideRefs.current[Math.floor(items.length / 2)];
    if (mid) track.scrollLeft = mid.offsetLeft + mid.offsetWidth / 2 - track.clientWidth / 2;
    update();
    track.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      track.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, [items.length]);

  const goTo = (i: number) => {
    const track = trackRef.current;
    const slide = slideRefs.current[Math.max(0, Math.min(items.length - 1, i))];
    if (!track || !slide) return;
    track.scrollTo({ left: slide.offsetLeft + slide.offsetWidth / 2 - track.clientWidth / 2, behavior: "smooth" });
  };

  // Mouse drag (touch and trackpads already scroll natively).
  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !trackRef.current) return;
    drag.current = { active: true, moved: false, startX: e.clientX, startLeft: trackRef.current.scrollLeft };
    trackRef.current.classList.add("is-dragging");
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d.active || !trackRef.current) return;
    const dx = e.clientX - d.startX;
    if (Math.abs(dx) > 4) d.moved = true;
    trackRef.current.scrollLeft = d.startLeft - dx;
  };
  const endDrag = () => {
    const d = drag.current;
    if (!d.active) return;
    d.active = false;
    trackRef.current?.classList.remove("is-dragging");
    if (d.moved) goTo(active);
  };

  const current = items[active];
  return (
    <div className="ad-carousel">
      <div className="ad-stage">
        <button type="button" className="ad-arrow ad-prev" onClick={() => goTo(active - 1)} disabled={active === 0} aria-label="Previous ad set">
          <ChevronLeft size={20} aria-hidden="true" />
        </button>
        <div
          ref={trackRef}
          className="ad-track"
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Ad creatives. Scroll, drag, or use the arrow keys to browse."
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") { e.preventDefault(); goTo(active + 1); }
            if (e.key === "ArrowLeft") { e.preventDefault(); goTo(active - 1); }
          }}
        >
          {items.map((item, i) => (
            <div
              key={item.id}
              ref={(el) => { slideRefs.current[i] = el; }}
              className={`ad-slide ${i === active ? "is-active" : ""}`}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${items.length}: ${item.title}`}
              onClick={() => { if (!drag.current.moved && i !== active) goTo(i); }}
            >
              <img src={item.imageUrl} alt={`Ad creatives from the ${item.title} project`} draggable={false} loading="lazy" />
            </div>
          ))}
        </div>
        <button type="button" className="ad-arrow ad-next" onClick={() => goTo(active + 1)} disabled={active === items.length - 1} aria-label="Next ad set">
          <ChevronRight size={20} aria-hidden="true" />
        </button>
      </div>

      <div className="ad-dots" aria-hidden="true">
        {items.map((item, i) => (
          <span key={item.id} className={i === active ? "is-active" : ""} />
        ))}
      </div>

      {current && (
        <div className="ad-caption" key={current.id}>
          <div className="project-cat-tag">
            <span className="project-cat-dot" />
            {current.category}
          </div>
          <h4 className="project-title">{current.title}</h4>
          <p className="project-desc">{current.description}</p>
          <div className="project-tags">
            {current.software.map((tag) => (
              <span key={tag} className="project-tag">{tag}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
