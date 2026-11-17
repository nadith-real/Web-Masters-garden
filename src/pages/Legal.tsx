import { useEffect, useRef, useState } from "react";
import { cn } from "../utils/cn";
import { LAST_UPDATED, PHONE, PHONE_HREF, privacy, terms, type LegalDoc } from "../data";
import { Arrow, Check, Leaf, Phone, Reveal } from "../components/ui";

const glance: Record<string, { label: string; value: string; sub: string }[]> = {
  privacy: [
    { label: "Last updated", value: LAST_UPDATED, sub: "Reviewed on every change" },
    { label: "Applies to", value: "This website", sub: "webmasters.garden" },
    { label: "Data collected", value: "Limited", sub: "Contact + technical data" },
    { label: "Contact form", value: "None", sub: "We are reached by phone" },
  ],
  terms: [
    { label: "Last updated", value: LAST_UPDATED, sub: "Reviewed on every change" },
    { label: "Governing law", value: "Sri Lanka", sub: "Exclusive jurisdiction" },
    { label: "Scope agreed", value: "In writing", sub: "Before any work begins" },
    { label: "Liability cap", value: "Fees paid", sub: "Per project claim" },
  ],
};

const highlights: Record<string, string[]> = {
  privacy: [
    "We never sell your personal information.",
    "Contact details are kept only as long as needed to serve you.",
    "You can ask us to access, correct or delete your data at any time.",
  ],
  terms: [
    "Scope, timeline and fees are always agreed in writing first.",
    "Deliverable rights transfer to you on full payment.",
    "Either party may end a project per the project agreement.",
  ],
};

function readingTime(doc: LegalDoc) {
  const text = doc.sections
    .map((s) => [s.p, s.after, ...(s.list ?? [])].filter(Boolean).join(" "))
    .join(" ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(2, Math.ceil(words / 220));
}

export default function Legal({ kind }: { kind: "privacy" | "terms" }) {
  const doc: LegalDoc = kind === "privacy" ? privacy : terms;
  const other =
    kind === "privacy"
      ? { href: "#/terms", label: "Terms of Service" }
      : { href: "#/privacy", label: "Privacy Policy" };

  const [first, ...rest] = doc.title.split(" ");
  const minutes = readingTime(doc);
  const count = doc.sections.length;

  const refs = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [tocOpen, setTocOpen] = useState(false);

  useEffect(() => {
    setActive(0);
    const nodes = refs.current.filter(Boolean) as HTMLElement[];
    if (!nodes.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const idx = nodes.indexOf(e.target as HTMLElement);
          if (idx >= 0) setActive(idx);
        });
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [doc]);

  const jump = (i: number) => {
    setTocOpen(false);
    refs.current[i]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <article className="relative w-full overflow-x-clip">
      {/* ---------- masthead ---------- */}
      <header className="grain relative overflow-hidden bg-forest pb-12 pt-28 text-paper sm:pb-16 sm:pt-36 lg:pt-40">
        <Leaf className="absolute -right-16 top-16 h-56 rotate-[22deg] text-moss/45 animate-sway sm:h-72" />
        <Leaf className="absolute -left-20 bottom-0 h-44 rotate-[200deg] text-moss/30 animate-sway sm:h-56" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-paper to-transparent sm:h-16" />

        <div className="relative mx-auto w-full max-w-5xl px-5 sm:px-6">
          <a href="#/" className="group inline-flex items-center gap-2 text-sm font-medium text-marigold">
            <Arrow className="h-4 w-4 rotate-180 transition group-hover:-translate-x-1" /> Back to home
          </a>

          <div className="mt-7 grid gap-7 sm:mt-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-end lg:gap-10">
            <div className="min-w-0">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-paper/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-paper/80 ring-1 ring-paper/15 sm:text-xs">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3Z" /></svg>
                Legal
              </p>
              <h1 className="font-display text-[2.6rem] font-medium leading-[0.98] sm:text-6xl lg:text-7xl">
                {first}
                {rest.length > 0 && (
                  <>
                    {" "}
                    <em className="font-light italic text-marigold">{rest.join(" ")}</em>
                  </>
                )}
              </h1>
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-paper/65 sm:text-base">
                {kind === "privacy"
                  ? "A plain-language account of what we collect, why we collect it, and how you stay in control."
                  : "The ground rules for working together — scope, payment, ownership and responsibility."}
              </p>
            </div>

            {/* static document meta — replaces the old scroll progress bar */}
            <div className="min-w-0 rounded-2xl bg-paper/[0.06] p-5 ring-1 ring-paper/15 backdrop-blur sm:rounded-3xl sm:p-6">
              <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-marigold sm:text-xs">Last updated</p>
                  <p className="mt-1 font-display text-lg sm:text-2xl">{LAST_UPDATED}</p>
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-marigold sm:text-xs">Read</p>
                  <p className="mt-1 font-display text-lg sm:text-2xl">≈ {minutes} min</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between gap-3 border-t border-paper/15 pt-4 text-[13px] text-paper/65">
                <span>{count} sections, no fine print</span>
                <a href={PHONE_HREF} className="inline-flex shrink-0 items-center gap-1.5 font-medium text-marigold hover:text-paper">
                  <Phone className="h-3.5 w-3.5" /> Ask us
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ---------- at a glance ---------- */}
      <section className="relative z-10 mx-auto w-full max-w-5xl px-5 sm:px-6">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-forest/12 ring-1 ring-forest/12 sm:rounded-3xl lg:grid-cols-4">
          {glance[kind].map((g, i) => (
            <Reveal key={g.label} delay={(i % 4) * 70} className="h-full min-w-0">
              <div className="h-full min-w-0 bg-cream px-4 py-4 sm:px-5 sm:py-6">
                <p className="text-[10px] uppercase tracking-[0.16em] text-ink/45 sm:text-[11px] sm:tracking-[0.18em]">{g.label}</p>
                <p className="mt-1.5 break-words font-display text-base font-medium leading-tight text-forest sm:mt-2 sm:text-xl lg:text-2xl">{g.value}</p>
                <p className="mt-1 hidden text-xs text-ink/55 sm:block">{g.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- body ---------- */}
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 px-5 py-12 sm:px-6 sm:py-16 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-14 lg:py-20">
        {/* desktop TOC */}
        <aside className="hidden min-w-0 lg:block">
          <div className="sticky top-28">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-clay">Contents</p>
            <ol className="space-y-0.5">
              {doc.sections.map((s, i) => (
                <li key={s.h} className="min-w-0">
                  <button
                    onClick={() => jump(i)}
                    className={cn(
                      "flex w-full items-start gap-2.5 border-l-2 py-1.5 pl-3 pr-2 text-left text-[13px] leading-snug transition",
                      i === active
                        ? "border-clay bg-cream/70 font-medium text-forest"
                        : "border-forest/15 text-ink/50 hover:border-forest/40 hover:text-forest"
                    )}
                  >
                    <span className={cn("font-display text-xs leading-5", i === active ? "text-clay" : "text-ink/35")}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0">{s.h}</span>
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </aside>

        {/* content column — min-w-0 prevents long content from widening the page */}
        <div className="min-w-0">
          {/* mobile / tablet contents (collapsible, no horizontal scroll) */}
          <div className="mb-7 lg:hidden">
            <button
              onClick={() => setTocOpen((o) => !o)}
              aria-expanded={tocOpen}
              className="flex w-full items-center justify-between gap-3 rounded-2xl bg-cream px-4 py-3.5 text-left ring-1 ring-forest/12"
            >
              <span className="min-w-0">
                <span className="block text-[10px] uppercase tracking-[0.18em] text-clay">Contents</span>
                <span className="mt-0.5 block truncate font-display text-lg text-forest">
                  {active + 1}. {doc.sections[active].h}
                </span>
              </span>
              <span className="flex items-center gap-2 text-xs text-ink/50">
                {count} sections
                <svg
                  viewBox="0 0 24 24"
                  className={cn("h-5 w-5 shrink-0 text-forest transition-transform", tocOpen && "rotate-180")}
                  fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </span>
            </button>

            {tocOpen && (
              <div className="animate-fade-up mt-2 overflow-hidden rounded-2xl bg-cream ring-1 ring-forest/12">
                <ol className="divide-y divide-forest/10">
                  {doc.sections.map((s, i) => (
                    <li key={s.h}>
                      <button
                        onClick={() => jump(i)}
                        className={cn(
                          "flex w-full items-start gap-3 px-4 py-3 text-left text-sm leading-snug transition",
                          i === active ? "bg-mint/60 font-medium text-forest" : "text-ink/70 hover:bg-paper"
                        )}
                      >
                        <span className={cn("font-display text-xs leading-5", i === active ? "text-clay" : "text-ink/35")}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="min-w-0">{s.h}</span>
                      </button>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>

          {/* key points */}
          <Reveal>
            <div className="mb-10 rounded-2xl bg-mint p-5 sm:mb-12 sm:rounded-3xl sm:p-8">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-moss sm:text-xs">In short</p>
              <ul className="mt-4 space-y-3">
                {highlights[kind].map((h) => (
                  <li key={h} className="flex min-w-0 gap-3 text-[15px] text-forest sm:text-base">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forest text-marigold">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="min-w-0 leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div>
            {doc.sections.map((s, i) => (
              <section
                key={s.h}
                ref={(el) => { refs.current[i] = el; }}
                id={`${kind}-${i + 1}`}
                className="scroll-mt-24 border-t border-forest/15 py-7 first:border-t-0 first:pt-0 sm:py-8"
              >
                <div className="flex min-w-0 items-baseline gap-3 sm:gap-4">
                  <span className="shrink-0 font-display text-xs text-clay sm:text-sm">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="min-w-0 break-words font-display text-2xl font-medium leading-tight text-forest sm:text-3xl lg:text-4xl">
                    {s.h}
                  </h2>
                </div>
                <div className="mt-3 min-w-0 sm:mt-4 sm:pl-8">
                  {s.p && <p className="break-words text-[15px] leading-relaxed text-ink/75 sm:text-[17px]">{s.p}</p>}
                  {s.list && (
                    <ul className="mt-4 space-y-2.5 sm:space-y-3">
                      {s.list.map((l) => (
                        <li key={l} className="flex min-w-0 gap-3 text-[15px] leading-relaxed text-ink/75 sm:text-base">
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-moss" />
                          <span className="min-w-0 break-words">{l}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {s.after && (
                    <p className="mt-4 break-words border-l-2 border-marigold pl-4 text-[15px] italic leading-relaxed text-ink/70">
                      {s.after}
                    </p>
                  )}
                </div>
              </section>
            ))}
          </div>

          {/* contact panel */}
          <Reveal>
            <div className="grain mt-12 min-w-0 overflow-hidden rounded-2xl bg-forest p-5 text-paper sm:mt-14 sm:rounded-[2rem] sm:p-8 lg:p-10">
              <div className="flex flex-col gap-6">
                <div className="min-w-0">
                  <h3 className="font-display text-2xl font-medium leading-tight sm:text-3xl">
                    Questions about <em className="font-light italic text-marigold">this {kind === "privacy" ? "policy" : "agreement"}?</em>
                  </h3>
                  <p className="mt-3 text-[15px] text-paper/70 sm:text-base">
                    Call us and we'll walk you through any part of it — no legal jargon required.
                  </p>
                </div>
                <a
                  href={PHONE_HREF}
                  className="group inline-flex w-full max-w-full items-center gap-3 rounded-full bg-marigold py-2.5 pl-2.5 pr-5 text-forest transition hover:bg-paper sm:w-auto sm:self-start sm:pr-6"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest text-marigold transition group-hover:rotate-12">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 truncate font-display text-lg sm:text-xl">{PHONE}</span>
                </a>
              </div>

              <div className="mt-7 flex flex-col gap-3 border-t border-paper/15 pt-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4">
                <a href={other.href} className="group inline-flex items-center gap-2 text-sm font-medium text-paper/80 transition hover:text-marigold">
                  Read our {other.label}
                  <Arrow className="h-4 w-4 shrink-0 transition group-hover:translate-x-1" />
                </a>
                <a href="#/" className="group inline-flex items-center gap-2 text-sm font-medium text-paper/80 transition hover:text-marigold">
                  Back to the garden
                  <Arrow className="h-4 w-4 shrink-0 transition group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </article>
  );
}
