import React, { useEffect, useRef, useState } from "react";
import { Zap, Tag, Target, MessageSquare, Clock, Bell, CheckSquare, Bot, GitBranch, Mail, CalendarCheck } from "lucide-react";
import { AutomationProject, WorkflowStep, WorkflowStepKind } from "./types";

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
