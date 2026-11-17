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
   Ad creatives carousel: manual only (scroll, drag, swipe, arrows, keys), loops forever.
   Slides shrink toward the edges and grow as they reach the center.
───────────────────────────────────── */

const COPIES = 3; // the middle copy is "home"; the outer copies let it loop seamlessly

export function AdCarousel({ items }: { items: GraphicsProject[] }) {
  // One slide per ad, remembering which project it belongs to
  const slides = items.flatMap((project, p) =>
    (project.images?.length ? project.images : project.imageUrl ? [project.imageUrl] : []).map((src, i) => ({ src, p, i }))
  );
  const n = slides.length;
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const drag = useRef({ active: false, moved: false, startX: 0, startLeft: 0 });
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);

  const centerOn = (i: number, smooth: boolean) => {
    const track = trackRef.current;
    const slide = slideRefs.current[i];
    if (!track || !slide) return;
    track.scrollTo({ left: slide.offsetLeft + slide.offsetWidth / 2 - track.clientWidth / 2, behavior: smooth ? "smooth" : "auto" });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track || !n) return;
    let frame = 0;
    let idle = 0;
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
      activeRef.current = closest;
      setActive(closest);
    };
    // Once scrolling settles in an outer copy, jump to the same slide in the middle copy (invisible).
    const recenter = () => {
      if (drag.current.active) return;
      const i = activeRef.current;
      if (i >= n && i < 2 * n) return;
      const a = slideRefs.current[0];
      const b = slideRefs.current[n];
      if (!a || !b) return;
      const shift = b.offsetLeft - a.offsetLeft;
      track.classList.add("is-jumping");
      track.scrollLeft += i < n ? shift : -shift;
      requestAnimationFrame(() => track.classList.remove("is-jumping"));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
      clearTimeout(idle);
      idle = window.setTimeout(recenter, 140);
    };
    centerOn(n + Math.floor(n / 2), false); // start in the middle copy, slides on both sides
    update();
    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
      clearTimeout(idle);
    };
  }, [n]);

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
    if (d.moved) centerOn(activeRef.current, true);
  };

  if (!n) return null;
  const current = slides[active % n];
  const project = items[current.p];
  const count = project.images?.length ?? 1;
  return (
    <div className="ad-carousel">
      <div className="ad-stage">
        <button type="button" className="ad-arrow ad-prev" onClick={() => centerOn(activeRef.current - 1, true)} aria-label="Previous ad">
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
            if (e.key === "ArrowRight") { e.preventDefault(); centerOn(activeRef.current + 1, true); }
            if (e.key === "ArrowLeft") { e.preventDefault(); centerOn(activeRef.current - 1, true); }
          }}
        >
          {Array.from({ length: COPIES }, (_, c) =>
            slides.map((slide, i) => {
              const idx = c * n + i;
              const home = c === 1;
              return (
                <div
                  key={idx}
                  ref={(el) => { slideRefs.current[idx] = el; }}
                  className={`ad-slide ${idx === active ? "is-active" : ""}`}
                  aria-hidden={home ? undefined : true}
                  onClick={() => { if (!drag.current.moved && idx !== activeRef.current) centerOn(idx, true); }}
                >
                  <img
                    src={slide.src}
                    alt={home ? `${items[slide.p].title}, ad ${slide.i + 1} of ${items[slide.p].images?.length ?? 1}` : ""}
                    draggable={false}
                    loading={home ? "eager" : "lazy"}
                  />
                </div>
              );
            })
          )}
        </div>
        <button type="button" className="ad-arrow ad-next" onClick={() => centerOn(activeRef.current + 1, true)} aria-label="Next ad">
          <ChevronRight size={20} aria-hidden="true" />
        </button>
      </div>

      <div className="ad-dots" aria-hidden="true">
        {items.map((item, p) => (
          <span key={item.id} className={p === current.p ? "is-active" : ""} />
        ))}
      </div>

      <div className="ad-caption" key={project.id}>
        <div className="project-cat-tag">
          <span className="project-cat-dot" />
          {project.category} &middot; Ad {current.i + 1} of {count}
        </div>
        <h4 className="project-title">{project.title}</h4>
        <p className="project-desc">{project.description}</p>
        <div className="project-tags">
          {project.software.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────
   Auto-moving strip (funnels): drifts slowly, loops forever, drag or swipe to move it.
   Pauses on hover, focus, touch, and for visitors who prefer reduced motion.
───────────────────────────────────── */

export function AutoMarquee({ children, speed = 28, label }: { children: React.ReactNode; speed?: number; label: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const setRef = useRef<HTMLDivElement>(null);
  const state = useRef({ pos: 0, last: 0, hover: false, focus: false, touchUntil: 0 });
  const drag = useRef({ active: false, moved: false, startX: 0, startPos: 0 });

  useEffect(() => {
    const track = trackRef.current;
    const set = setRef.current;
    if (!track || !set) return;
    // Cards drift in from the side, so skip the scroll-in fade and show them all.
    track.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => el.classList.add("visible"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const st = state.current;
    let frame = 0;
    let prev = performance.now();
    st.pos = track.scrollLeft;
    st.last = track.scrollLeft;
    const loopWidth = () => set.offsetWidth + parseFloat(getComputedStyle(track).columnGap || "0");
    const tick = (now: number) => {
      const dt = Math.min(now - prev, 64) / 1000;
      prev = now;
      // The visitor scrolled by wheel or swipe: follow them
      if (Math.abs(track.scrollLeft - st.last) > 1) st.pos = track.scrollLeft;
      const moving = !reduce.matches && !st.hover && !st.focus && !drag.current.active && now > st.touchUntil && !document.hidden;
      if (moving) st.pos += speed * dt;
      const w = loopWidth();
      if (w > 0) {
        if (st.pos >= w) st.pos -= w;
        if (st.pos < 0) st.pos += w;
      }
      if (Math.abs(track.scrollLeft - st.pos) > 0.5) track.scrollLeft = st.pos;
      st.last = track.scrollLeft;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [speed]);

  const st = state.current;
  const stopDrag = () => {
    drag.current.active = false;
    trackRef.current?.classList.remove("is-dragging");
  };
  return (
    <div
      ref={trackRef}
      className="marquee"
      role="region"
      aria-label={label}
      onPointerEnter={(e) => { if (e.pointerType === "mouse") st.hover = true; }}
      onPointerLeave={() => { st.hover = false; stopDrag(); }}
      onFocus={() => { st.focus = true; }}
      onBlur={() => { st.focus = false; }}
      onTouchStart={() => { st.touchUntil = Infinity; }}
      onTouchEnd={() => { st.touchUntil = performance.now() + 2000; }}
      onPointerDown={(e) => {
        if (e.pointerType !== "mouse") return;
        drag.current = { active: true, moved: false, startX: e.clientX, startPos: st.pos };
        trackRef.current?.classList.add("is-dragging");
      }}
      onPointerMove={(e) => {
        const d = drag.current;
        if (!d.active) return;
        const dx = e.clientX - d.startX;
        if (Math.abs(dx) > 4) d.moved = true;
        st.pos = d.startPos - dx;
      }}
      onPointerUp={stopDrag}
      onClickCapture={(e) => {
        // A drag should not also open a card's link
        if (drag.current.moved) { e.preventDefault(); e.stopPropagation(); drag.current.moved = false; }
      }}
    >
      <div ref={setRef} className="marquee-set">{children}</div>
      {/* Second copy makes the loop seamless; hidden from screen readers and keyboard */}
      <div className="marquee-set" aria-hidden="true" {...({ inert: "" } as any)}>{children}</div>
    </div>
  );
}
