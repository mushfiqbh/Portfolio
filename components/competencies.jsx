"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, GitBranch } from "lucide-react";
import Headline from "./sub/headline";
import { decisions, leadershipPractices, tabs, uiPatterns, uxPatterns } from "../constants/competencies";

function ArchitectureDiagram() {
  return (
    <div className="mt-8 border border-zinc-800/80 bg-black/10 p-5 sm:p-7" aria-label="Architecture diagram">
      <div className="mb-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-zinc-500">
        <GitBranch className="h-3.5 w-3.5 text-primary" />
        Boundary map
      </div>
      <div className="flex flex-col items-stretch gap-3 text-xs sm:flex-row sm:items-center sm:gap-2">
        {["Web", "Domain modules", "Data layer"].map((label, index) => (
          <div key={label} className="flex flex-1 items-center gap-2">
            <div className="flex min-h-12 flex-1 items-center justify-center border border-primary/40 px-3 text-center text-zinc-200">
              {label}
            </div>
            {index < 2 && <ArrowRight className="hidden h-4 w-4 shrink-0 text-primary sm:block" />}
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs leading-5 text-zinc-500">One deployable unit, explicit internal dependencies.</p>
    </div>
  );
}

function DecisionCard({ decision, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="border border-zinc-800/80 bg-gradient-box/30"
    >
      <button
        type="button"
        onClick={() => setExpanded((current) => !current)}
        aria-expanded={expanded}
        className="flex w-full items-start justify-between gap-5 p-5 text-left transition-colors hover:bg-white/[0.03] sm:p-7"
      >
        <span>
          <span className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-primary">{decision.category}</span>
          <span className="block text-xl font-semibold tracking-tight text-heading sm:text-2xl">{decision.title}</span>
          <span className="mt-3 block max-w-xl text-sm leading-6 text-zinc-400">{decision.summary}</span>
          <span className="mt-5 flex flex-wrap gap-2">
            {decision.technologies.map((technology) => (
              <span key={technology} className="border border-zinc-800 px-2.5 py-1 text-[10px] uppercase tracking-wider text-zinc-500">
                {technology}
              </span>
            ))}
          </span>
        </span>
        <span className="mt-1 shrink-0 border border-zinc-700 p-2 text-zinc-400" aria-hidden="true">
          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-zinc-800/80 px-5 pb-7 pt-6 sm:px-7">
              <div className="grid gap-7 text-sm leading-6 text-zinc-400 sm:grid-cols-2">
                <Detail label="Problem / context" text={decision.context} />
                <Detail label="Decision" text={decision.decision} emphasis />
                <Detail label="Constraints" items={decision.constraints} />
                <Detail label="Options considered" items={decision.options} />
                <Detail label="Why" text={decision.reasoning} />
                <Detail label="Trade-offs" items={decision.tradeoffs} />
              </div>
              {decision.diagram && <ArchitectureDiagram />}
              <div className="mt-8 border-l-2 border-primary/60 pl-4">
                <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-primary">Outcome</p>
                <p className="max-w-3xl text-sm leading-6 text-zinc-300">{decision.outcome}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

function Detail({ label, text, items, emphasis = false }) {
  return (
    <div>
      <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-zinc-500">{label}</p>
      {text && <p className={emphasis ? "text-zinc-200" : ""}>{text}</p>}
      {items && (
        <ul className="space-y-1.5">
          {items.map((item) => <li key={item}>• {item}</li>)}
        </ul>
      )}
    </div>
  );
}

function PatternPreview({ type }) {
  const previews = {
    disclosure: <><div className="flex items-center justify-between"><span>Attendance rules</span><ChevronDown className="h-3.5 w-3.5 text-primary" /></div><div className="mt-3 h-1.5 w-3/4 bg-primary/60" /></>,
    sync: <><div className="flex items-center gap-2"><span className="h-2 w-2 bg-primary" /><span>Saved just now</span></div><div className="mt-4 h-1.5 w-full bg-zinc-800"><div className="h-full w-4/5 bg-primary/60" /></div></>,
    empty: <><div className="mx-auto h-6 w-10 border border-primary/50" /><p className="mt-3 text-center text-zinc-300">No records yet</p><div className="mx-auto mt-3 h-1.5 w-20 bg-primary/60" /></>,
    error: <><div className="border-l-2 border-rose-400 px-3 py-2 text-rose-200">Could not save changes</div><div className="mt-3 h-1.5 w-16 bg-primary/60" /></>,
    form: <><div className="flex gap-1"><span className="h-1.5 flex-1 bg-primary" /><span className="h-1.5 flex-1 bg-zinc-700" /><span className="h-1.5 flex-1 bg-zinc-700" /></div><div className="mt-4 h-7 border border-zinc-700" /></>,
  };

  return <div className="min-h-28 border border-zinc-800 bg-black/10 p-4 text-xs text-zinc-500">{previews[type]}</div>;
}

function PatternCard({ pattern, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article layout initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.4, delay: index * 0.06 }} className="border border-zinc-800/80 bg-gradient-box/30">
      <button type="button" onClick={() => setExpanded((current) => !current)} aria-expanded={expanded} className="w-full p-5 text-left transition-colors hover:bg-white/[0.03] sm:p-7">
        <div className="mb-5 flex items-center justify-between gap-4">
          <span className="text-[10px] uppercase tracking-[0.2em] text-primary">{pattern.category}</span>
          <ChevronDown className={`h-4 w-4 shrink-0 text-zinc-400 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} aria-hidden="true" />
        </div>
        <PatternPreview type={pattern.preview} />
        <span className="mt-5 block text-xl font-semibold tracking-tight text-heading">{pattern.title}</span>
        <span className="mt-2 block text-sm leading-6 text-zinc-400">{pattern.summary}</span>
      </button>
      <AnimatePresence initial={false}>
        {expanded && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeOut" }} className="overflow-hidden">
          <div className="border-t border-zinc-800/80 px-5 pb-7 pt-6 sm:px-7">
            <div className="grid gap-7 text-sm leading-6 text-zinc-400 sm:grid-cols-2">
              <Detail label="User problem" text={pattern.problem} />
              <Detail label="Interaction" text={pattern.interaction} emphasis />
              <Detail label="Why this pattern" text={pattern.reasoning} />
              <Detail label="Key considerations" items={pattern.considerations} />
              <Detail label="Edge cases" items={pattern.edgeCases} />
            </div>
            <div className="mt-8 border-l-2 border-primary/60 pl-4">
              <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-primary">Outcome</p>
              <p className="text-sm leading-6 text-zinc-300">{pattern.outcome}</p>
            </div>
            <a href="#project" className="mt-7 inline-flex items-center gap-2 text-xs text-primary transition-colors hover:text-zinc-200">
              Applied in {pattern.project} <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.div>}
      </AnimatePresence>
    </motion.article>
  );
}

function UIPreview({ type }) {
  const previews = {
    table: <div className="space-y-2"><div className="flex gap-2"><span className="h-3 w-1/2 bg-primary/60" /><span className="h-3 w-1/4 bg-zinc-700" /></div>{["Student record", "Attendance", "Status"].map((label, index) => <div key={label} className="flex items-center gap-2 border-t border-zinc-800 pt-2 text-[10px]"><span className="w-1/3 text-zinc-300">{label}</span><span className="h-2 flex-1 bg-zinc-800" /><span className={`h-2 w-10 ${index === 2 ? "bg-primary/70" : "bg-zinc-700"}`} /></div>)}</div>,
    form: <div className="space-y-3"><div className="h-2 w-1/3 bg-zinc-500" /><div className="h-8 border border-primary/60 bg-primary/5" /><div className="h-2 w-1/4 bg-zinc-500" /><div className="h-8 border border-zinc-700" /><div className="ml-auto h-7 w-20 bg-primary/60" /></div>,
    dashboard: <div className="grid grid-cols-3 gap-2"><div className="col-span-2 h-12 border border-primary/40 p-2"><div className="h-2 w-1/3 bg-primary/70" /><div className="mt-3 h-1.5 w-3/4 bg-zinc-700" /></div><div className="h-12 border border-zinc-700 p-2"><div className="h-2 w-1/2 bg-zinc-500" /><div className="mt-3 h-1.5 w-2/3 bg-primary/50" /></div><div className="col-span-3 h-10 border border-zinc-800" /></div>,
    navigation: <div className="flex items-center justify-between border-b border-zinc-800 pb-3"><span className="text-zinc-200">Workspace</span><div className="flex gap-3 text-[10px]"><span className="text-primary">Overview</span><span className="text-zinc-600">Settings</span><span className="h-3 w-3 border border-zinc-500" /></div></div>,
    tokens: <div className="grid grid-cols-4 gap-2"><span className="h-7 bg-primary" /><span className="h-7 bg-zinc-200" /><span className="h-7 bg-zinc-700" /><span className="h-7 border border-zinc-600" /><span className="col-span-2 h-2 bg-zinc-500" /><span className="col-span-2 h-2 bg-zinc-800" /></div>,
    states: <div className="flex flex-wrap gap-2"><span className="border border-zinc-700 px-3 py-2 text-[10px] text-zinc-400">Default</span><span className="border border-primary px-3 py-2 text-[10px] text-primary">Focus</span><span className="border border-rose-400/70 px-3 py-2 text-[10px] text-rose-300">Error</span></div>,
  };
  return <div className="min-h-32 border border-zinc-800 bg-black/10 p-4 text-xs text-zinc-500">{previews[type]}</div>;
}

function UIPatternCard({ pattern, index }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.article layout initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.4, delay: index * 0.06 }} className="border border-zinc-800/80 bg-gradient-box/30">
      <button type="button" onClick={() => setExpanded((current) => !current)} aria-expanded={expanded} className="w-full p-5 text-left transition-colors hover:bg-white/[0.03] sm:p-7">
        <div className="mb-5 flex items-center justify-between gap-4"><span className="text-[10px] uppercase tracking-[0.2em] text-primary">{pattern.category}</span><ChevronDown className={`h-4 w-4 shrink-0 text-zinc-400 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} aria-hidden="true" /></div>
        <UIPreview type={pattern.preview} />
        <span className="mt-5 block text-xl font-semibold tracking-tight text-heading">{pattern.title}</span>
        <span className="mt-2 block text-sm leading-6 text-zinc-400">{pattern.summary}</span>
      </button>
      <AnimatePresence initial={false}>
        {expanded && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeOut" }} className="overflow-hidden"><div className="border-t border-zinc-800/80 px-5 pb-7 pt-6 sm:px-7">
          <div className="grid gap-7 text-sm leading-6 text-zinc-400 sm:grid-cols-2"><Detail label="Interface problem" text={pattern.problem} /><Detail label="Visual approach" text={pattern.interface} emphasis /><Detail label="Key characteristics" items={pattern.features} /><Detail label="States and behaviors" items={pattern.states} /><Detail label="Responsive behavior" text={pattern.responsiveBehavior} /><Detail label="Accessibility" text={pattern.accessibility} /></div>
          <div className="mt-7 grid gap-5 border-t border-zinc-800/80 pt-6 text-xs text-zinc-500 sm:grid-cols-2"><div><span className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-primary">Technologies</span>{pattern.technologies.join(" · ")}</div><div><span className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-primary">Design system context</span>{pattern.designSystem}</div></div>
          <a href="#project" className="mt-7 inline-flex items-center gap-2 text-xs text-primary transition-colors hover:text-zinc-200">Used in {pattern.project} <ArrowRight className="h-3.5 w-3.5" /></a>
        </div></motion.div>}
      </AnimatePresence>
    </motion.article>
  );
}

function LeadershipVisual({ type }) {
  const visuals = {
    decision: ["Constraints", "Options", "Decision", "Reference"],
    communication: ["System", "Boundary", "Consequence"],
    review: ["Behavior", "Boundary", "Convention"],
    mentoring: ["Context", "Questions", "Ownership"],
    documentation: ["Problem", "Decision", "Implementation"],
    process: ["Friction", "Experiment", "Improvement"],
  };

  return (
    <div className="flex min-h-28 items-center gap-2 border border-zinc-800 bg-black/10 p-4 sm:gap-3">
      {visuals[type].map((label, index) => (
        <div key={label} className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
          <span className={`flex min-h-10 flex-1 items-center justify-center border px-2 text-center text-[10px] ${index === visuals[type].length - 1 ? "border-primary/60 text-primary" : "border-zinc-700 text-zinc-400"}`}>
            {label}
          </span>
          {index < visuals[type].length - 1 && <ArrowRight className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />}
        </div>
      ))}
    </div>
  );
}

function LeadershipCard({ practice, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="border border-zinc-800/80 bg-gradient-box/30"
    >
      <button type="button" onClick={() => setExpanded((current) => !current)} aria-expanded={expanded} className="w-full p-5 text-left transition-colors hover:bg-white/[0.03] sm:p-7">
        <div className="mb-5 flex items-center justify-between gap-4">
          <span className="text-[10px] uppercase tracking-[0.2em] text-primary">{practice.category}</span>
          <ChevronDown className={`h-4 w-4 shrink-0 text-zinc-400 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} aria-hidden="true" />
        </div>
        <LeadershipVisual type={practice.visual} />
        <span className="mt-5 block text-xl font-semibold tracking-tight text-heading">{practice.title}</span>
        <span className="mt-2 block text-sm leading-6 text-zinc-400">{practice.summary}</span>
      </button>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeOut" }} className="overflow-hidden">
            <div className="border-t border-zinc-800/80 px-5 pb-7 pt-6 sm:px-7">
              <div className="grid gap-7 text-sm leading-6 text-zinc-400 sm:grid-cols-2">
                <Detail label="Context" text={practice.context} />
                <Detail label="Role and influence" text={practice.role} emphasis />
                <Detail label="Approach" text={practice.approach} />
                <Detail label="Impact" items={practice.impact} />
                <Detail label="Lessons learned" text={practice.lessons} />
                <div>
                  <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-zinc-500">Related decision</p>
                  <p>{practice.relatedDecision}</p>
                </div>
              </div>
              <div className="mt-7 border-t border-zinc-800/80 pt-6">
                <p className="mb-4 text-[10px] uppercase tracking-[0.18em] text-primary">Influence path</p>
                <div className="grid gap-2 sm:grid-cols-4">
                  {["Problem", "Investigation", "Discussion", "Result"].map((step, stepIndex) => (
                    <div key={step} className="flex items-center gap-2 text-xs text-zinc-400">
                      <span className="flex min-h-9 flex-1 items-center justify-center border border-zinc-800 px-2 text-center">{step}</span>
                      {stepIndex < 3 && <ArrowRight className="hidden h-3.5 w-3.5 text-primary sm:block" aria-hidden="true" />}
                    </div>
                  ))}
                </div>
              </div>
              <a href={practice.caseStudyLink} className="mt-7 inline-flex items-center gap-2 text-xs text-primary transition-colors hover:text-zinc-200">
                Applied to {practice.project} <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export default function Competencies() {
  const [activeTab, setActiveTab] = useState("Architecture Decisions");

  return (
    <section id="competencies" className="px-4 py-16 sm:px-6 lg:px-0">
      <Headline title="Competencies" subtitle="How I think about engineering" />
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex overflow-x-auto border-b border-zinc-800/80" role="tablist" aria-label="Competencies">
          {tabs.map((tab) => {
            const active = tab === activeTab;
            return (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={active}
                disabled={false}
                onClick={() => setActiveTab(tab)}
                className={`relative shrink-0 px-4 py-3 transition-colors first:pl-0 sm:px-6 ${active ? "text-primary" : "text-zinc-600"}`}
              >
                {tab}
                {active && <motion.span layoutId="competency-tab" className="absolute inset-x-0 bottom-0 h-px bg-primary" />}
              </button>
            );
          })}
        </div>
        {activeTab === "Architecture Decisions" ? (
          <div role="tabpanel" aria-label="Architecture Decisions" className="grid gap-5 lg:grid-cols-2">
            {decisions.map((decision, index) => <DecisionCard key={decision.title} decision={decision} index={index} />)}
          </div>
        ) : activeTab === "UX Patterns" ? (
          <div role="tabpanel" aria-label="UX Patterns" className="grid gap-5 lg:grid-cols-2">
            {uxPatterns.map((pattern, index) => <PatternCard key={pattern.title} pattern={pattern} index={index} />)}
          </div>
        ) : activeTab === "User Interface" ? (
          <div role="tabpanel" aria-label="User Interface" className="grid gap-5 lg:grid-cols-2">
            {uiPatterns.map((pattern, index) => <UIPatternCard key={pattern.title} pattern={pattern} index={index} />)}
          </div>
        ) : (
          <div role="tabpanel" aria-label="Technical Leadership" className="grid gap-5 lg:grid-cols-2">
            {leadershipPractices.map((practice, index) => <LeadershipCard key={practice.title} practice={practice} index={index} />)}
          </div>
        )}
      </div>
    </section>
  );
}