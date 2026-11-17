import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { reviews } from "../data";
import { Eyebrow, Leaf, Reveal } from "./ui";

const DURATION = 7000;

const toneRing: Record<string, string> = {
  moss: "bg-moss",
  clay: "bg-clay",
  marigold: "bg-marigold",
  sage: "bg-sage",
};

function Stars({ n, className }: { n: number; className?: string }) {
  return (
    <span className={cn("inline-flex gap-0.5", className)} aria-label={`${n} out of 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5" aria-hidden>
          <path
            d="M10 1.6l2.5 5.1 5.6.8-4 3.9 1 5.6-5.1-2.7-5 2.7.9-5.6-4-3.9 5.6-.8z"
            fill={i <= n ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </span>
  );
}

function Monogram({ initials, tone, className }: { initials: string; tone: string; className?: string }) {
  return (
    <span
      className={cn(
        "flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-display text-lg font-semibold text-forest",
        toneRing[tone],
        className
      )}
    >
      {initials}
    </span>
  );
}

/* ---------- featured, auto-advancing ---------- */
function Featured() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [tick, setTick] = useState(0);
  const r = reviews[i];

  useEffect(() => {
    if (paused) return;
    const started = performance.now();
    let raf = 0;
    let last = -1;
    const loop = (t: number) => {
      const p = Math.min(1, (t - started) / DURATION);
      // throttle: only re-render when the bar visibly moves (~1%)
      const step = Math.round(p * 100);
      if (step !== last) {
        last = step;
        setTick(step / 100);
      }
      if (p >= 1) {
        setI((v) => (v + 1) % reviews.length);
        return;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [i, paused]);

  const go = (n: number) => {
    setI((n + reviews.length) % reviews.length);
    setTick(0);
  };

  return (
    <div
      className="relative overflow-hidden rounded-[2.5rem] bg-cream p-8 ring-1 ring-forest/10 sm:p-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Leaf className="absolute -right-8 -top-10 h-52 rotate-[20deg] text-mint" />

      <div className="relative">
        <span className="font-display text-[7rem] leading-[0.5] text-clay/25">“</span>

        <blockquote key={i} className="animate-fade-up -mt-6 max-w-3xl">
          <p className="font-display text-2xl font-light leading-snug text-forest sm:text-[2.1rem] sm:leading-[1.25]">
            {r.quote}
          </p>
        </blockquote>

        <div key={`${i}-meta`} className="animate-fade-up mt-8 flex flex-wrap items-center gap-5">
          <Monogram initials={r.initials} tone={r.tone} />
          <div>
            <p className="font-display text-xl font-medium text-forest">{r.name}</p>
            <p className="text-sm text-ink/60">
              {r.role} · {r.company}
            </p>
          </div>
          <div className="ml-auto flex flex-col items-end gap-1.5">
            <Stars n={r.rating} className="text-marigold" />
            <span className="text-xs uppercase tracking-[0.18em] text-ink/45">Verified client</span>
          </div>
        </div>

        {/* controls */}
        <div className="mt-9 flex items-center gap-4 border-t border-forest/10 pt-6">
          <button
            onClick={() => go(i - 1)}
            aria-label="Previous review"
            className="flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-forest/20 transition hover:bg-forest hover:text-paper"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6" /></svg>
          </button>
          <button
            onClick={() => go(i + 1)}
            aria-label="Next review"
            className="flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-forest/20 transition hover:bg-forest hover:text-paper"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
          </button>

          <div className="flex flex-1 gap-1.5">
            {reviews.map((_, n) => (
              <button
                key={n}
                onClick={() => go(n)}
                aria-label={`Go to review ${n + 1}`}
                className="group relative h-6 flex-1"
              >
                <span className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 overflow-hidden rounded-full bg-forest/10">
                  <span
                    className={cn("block h-full rounded-full bg-moss transition-all", n < i ? "w-full" : n === i ? "" : "w-0")}
                    style={n === i ? { width: `${tick * 100}%` } : undefined}
                  />
                </span>
              </button>
            ))}
          </div>

          <span className="hidden shrink-0 font-display text-sm text-ink/50 sm:block">
            {String(i + 1).padStart(2, "0")} / {String(reviews.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---------- scattered postcard wall ---------- */
const rotations = ["-2.4deg", "1.8deg", "-1.2deg", "2.6deg", "-2deg", "1.4deg"];

function Postcard({ r, i }: { r: (typeof reviews)[number]; i: number }) {
  const [hover, setHover] = useState(false);
  return (
    <figure
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="h-full rounded-2xl border border-forest/10 bg-paper p-6 transition-[transform,box-shadow] duration-500 will-change-transform"
      style={{
        transform: hover ? "rotate(0deg) translateY(-10px) scale(1.02)" : `rotate(${rotations[i]})`,
        boxShadow: hover ? "0 24px 48px -18px rgba(18,39,29,.35)" : "0 2px 8px -4px rgba(18,39,29,.18)",
      }}
    >
      <div className="flex items-center justify-between">
        <Stars n={r.rating} className="text-clay" />
        <span className="font-display text-xs text-ink/35">0{i + 1}</span>
      </div>
      <blockquote className="mt-4 text-[15px] leading-relaxed text-ink/80">
        {r.quote.length > 165 ? `${r.quote.slice(0, 165).trimEnd()}…` : r.quote}
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-forest/10 pt-4">
        <Monogram initials={r.initials} tone={r.tone} className="h-9 w-9 text-sm" />
        <div className="min-w-0">
          <p className="truncate font-medium text-forest">{r.name}</p>
          <p className="truncate text-xs text-ink/55">{r.company}</p>
        </div>
      </figcaption>
    </figure>
  );
}

function Wall() {
  const list = reviews.slice(0, 6);
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((r, i) => (
        <Reveal key={r.name} delay={(i % 3) * 110}>
          <Postcard r={r} i={i} />
        </Reveal>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const avg = (reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1);
  const [tab, setTab] = useState<"rail" | "wall">("rail");

  return (
    <section id="reviews" className="grain relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
      <Leaf className="absolute -left-10 top-1/3 h-64 rotate-[-30deg] text-sage/40 animate-sway" />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-8">
          <div>
            <Eyebrow>Kind words</Eyebrow>
            <h2 className="max-w-xl font-display text-4xl font-medium leading-[1.03] text-forest sm:text-6xl">
              What our clients <em className="font-light italic text-moss">say</em>
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <div>
              <p className="font-display text-5xl font-medium text-forest">{avg}</p>
              <Stars n={5} className="mt-1 text-marigold" />
            </div>
            <div className="h-12 w-px bg-forest/15" />
            <p className="max-w-[9rem] text-sm leading-snug text-ink/60">
              average rating across 60+ client reviews
            </p>
          </div>
        </Reveal>

        <Reveal>
          <Featured />
        </Reveal>

        <div className="mt-14 flex items-center justify-between gap-4">
          <p className="font-display text-2xl text-forest">More notes from the garden</p>
          <div className="hidden rounded-full bg-cream p-1 ring-1 ring-forest/10 sm:flex">
            {([
              ["rail", "Rail"],
              ["wall", "Wall"],
            ] as const).map(([t, label]) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm capitalize transition",
                  tab === t ? "bg-forest text-paper" : "text-forest/70 hover:text-forest"
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div>{tab === "wall" ? <Wall /> : <Rail />}</div>
      </div>
    </section>
  );
}

/* horizontal snap rail of the remaining reviews */
function Rail() {
  const rest = reviews.slice(4);
  return (
    <div className="-mx-6 mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 [scrollbar-width:thin]">
      {rest.map((r, i) => (
        <figure
          key={r.name}
          className="group w-[19rem] shrink-0 snap-start rounded-2xl bg-forest p-6 text-paper transition duration-500 hover:-translate-y-1.5 hover:bg-forest-2 sm:w-[22rem]"
        >
          <div className="flex items-center justify-between">
            <Stars n={r.rating} className="text-marigold" />
            <span className="font-display text-xs text-paper/35">0{i + 5}</span>
          </div>
          <blockquote className="mt-4 font-display text-lg font-light leading-snug">{r.quote}</blockquote>
          <figcaption className="mt-6 flex items-center gap-3 border-t border-paper/15 pt-4">
            <Monogram initials={r.initials} tone={r.tone} className="h-9 w-9 text-sm" />
            <div className="min-w-0">
              <p className="truncate font-medium">{r.name}</p>
              <p className="truncate text-xs text-paper/55">
                {r.role} · {r.company}
              </p>
            </div>
          </figcaption>
        </figure>
      ))}
      <div className="flex w-[19rem] shrink-0 snap-start items-center justify-center rounded-2xl border border-dashed border-forest/25 p-6 text-center sm:w-[22rem]">
        <p className="text-sm text-ink/60">
          Scroll for more →
          <span className="mt-2 block font-display text-base text-forest">
            {reviews.length} reviews and counting
          </span>
        </p>
      </div>
    </div>
  );
}
