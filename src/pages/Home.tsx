import { useState } from "react";
import { cn } from "../utils/cn";
import {
  PHONE,
  PHONE_HREF,
  process,
  projects,
  services,
  stats,
  tools,
  values,
} from "../data";
import {
  Arrow,
  Check,
  Counter,
  Eyebrow,
  HeroPlant,
  Leaf,
  Phone,
  Reveal,
  ServiceGlyph,
  goHome,
} from "../components/ui";
import { ProjectArt } from "../components/Mockups";
import Testimonials from "../components/Testimonials";

/* ================= HERO ================= */
function Hero() {
  return (
    <section className="grain relative overflow-hidden pt-32 sm:pt-40">
      <Leaf className="absolute -left-10 top-40 h-64 rotate-[-30deg] text-sage/60 animate-sway" />
      <Leaf className="absolute right-[-30px] top-[52%] h-48 rotate-[40deg] text-mint animate-sway" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <p className="animate-fade-up mb-7 inline-flex items-center gap-2 rounded-full bg-forest/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-moss ring-1 ring-forest/10">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-clay" />
            Premium web design & development
          </p>
          <h1
            className="animate-fade-up font-display text-[2.9rem] font-medium leading-[0.98] text-forest sm:text-7xl lg:text-[5.4rem]"
            style={{ animationDelay: "80ms" }}
          >
            We cultivate{" "}
            <em className="relative font-light italic text-moss">
              digital gardens
              <svg viewBox="0 0 300 14" className="absolute -bottom-2 left-0 h-3 w-full text-marigold" preserveAspectRatio="none">
                <path d="M2 9C60 2 120 2 180 6S270 10 298 3" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
              </svg>
            </em>{" "}
            that grow brands.
          </h1>
          <p
            className="animate-fade-up mt-8 max-w-xl text-lg leading-relaxed text-ink/70"
            style={{ animationDelay: "180ms" }}
          >
            Webmasters Garden crafts high-performance websites and web applications that blend beautiful
            design with rock-solid engineering. From concept to launch — and beyond.
          </p>
          <div className="animate-fade-up mt-9 flex flex-wrap items-center gap-4" style={{ animationDelay: "280ms" }}>
            <button
              onClick={() => goHome("contact")}
              className="group inline-flex items-center gap-3 rounded-full bg-forest px-7 py-4 font-medium text-paper shadow-xl shadow-forest/20 transition hover:bg-moss"
            >
              Start your project
              <Arrow className="h-5 w-5 transition group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => goHome("work")}
              className="inline-flex items-center gap-2 rounded-full border border-forest/25 px-7 py-4 font-medium text-forest transition hover:border-forest hover:bg-forest/5"
            >
              View our work
            </button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="absolute inset-6 rounded-[40%_60%_55%_45%/50%_40%_60%_50%] bg-mint" />
          <HeroPlant className="relative mx-auto h-auto w-full max-w-[400px]" />
          <div className="animate-floaty absolute -left-2 bottom-16 hidden rounded-2xl bg-cream px-4 py-3 shadow-xl ring-1 ring-forest/10 sm:block">
            <p className="text-[10px] uppercase tracking-widest text-forest/50">Lighthouse</p>
            <p className="font-display text-2xl font-semibold text-moss">100<span className="text-sm text-forest/40"> / 100</span></p>
          </div>
        </div>
      </div>

      {/* stats */}
      <div className="relative mx-auto mt-16 max-w-6xl px-6 pb-20 sm:mt-20">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-forest/10 ring-1 ring-forest/10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-cream/80 px-6 py-7 backdrop-blur">
              <p className="font-display text-4xl font-medium text-forest sm:text-5xl">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-sm text-ink/60">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= MARQUEE ================= */
function Marquee() {
  const row = [...tools, ...tools];
  return (
    <div className="overflow-hidden border-y border-forest/15 bg-forest py-5 text-paper">
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-2xl font-light italic">
            {t}
            <Leaf className="h-6 w-4 text-marigold" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ================= SERVICES ================= */
function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-14 grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <Eyebrow>What we grow</Eyebrow>
            <h2 className="font-display text-4xl font-medium leading-[1.05] text-forest sm:text-6xl">
              Our <em className="font-light italic text-moss">services</em>
            </h2>
          </div>
          <p className="max-w-md text-lg text-ink/65 md:justify-self-end">
            From pixel-perfect design to scalable architecture — we plant the seeds of digital success.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 100}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-cream p-7 ring-1 ring-forest/10 transition duration-500 hover:-translate-y-1.5 hover:bg-forest hover:shadow-2xl hover:shadow-forest/20">
                <div className="mb-8 flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-mint text-forest transition duration-500 group-hover:rotate-6 group-hover:bg-marigold">
                    <ServiceGlyph id={s.id} className="h-7 w-7" />
                  </span>
                  <span className="font-display text-sm text-forest/30 transition group-hover:text-paper/40">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-medium text-forest transition group-hover:text-paper">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-ink/65 transition group-hover:text-paper/70">
                  {s.blurb}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-full bg-paper px-3 py-1 text-xs text-forest/80 ring-1 ring-forest/10 transition group-hover:bg-paper/10 group-hover:text-paper group-hover:ring-paper/15"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= PROCESS ================= */
function Process() {
  const [active, setActive] = useState(0);
  const step = process[active];
  return (
    <section id="process" className="grain relative scroll-mt-20 overflow-hidden bg-forest py-24 text-paper sm:py-32">
      <Leaf className="absolute -right-8 top-10 h-72 rotate-[25deg] text-moss/40 animate-sway" />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="mb-14 max-w-2xl">
          <Eyebrow light>How we work</Eyebrow>
          <h2 className="font-display text-4xl font-medium leading-[1.05] sm:text-6xl">
            Our <em className="font-light italic text-marigold">cultivation</em> process
          </h2>
          <p className="mt-5 text-lg text-paper/65">
            A refined process that turns ideas into thriving digital experiences.
          </p>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          {/* selector */}
          <Reveal>
            <ol className="relative space-y-3">
              {process.map((p, i) => (
                <li key={p.n}>
                  <button
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className={cn(
                      "flex w-full items-center gap-5 rounded-2xl border px-5 py-4 text-left transition duration-300",
                      i === active
                        ? "border-marigold bg-paper/[0.07]"
                        : "border-paper/10 hover:border-paper/30"
                    )}
                  >
                    <span
                      className={cn(
                        "font-display text-3xl transition",
                        i === active ? "text-marigold" : "text-paper/30"
                      )}
                    >
                      {p.n}
                    </span>
                    <span className="flex-1">
                      <span className="block font-display text-xl">{p.title}</span>
                      <span className="text-xs uppercase tracking-[0.2em] text-paper/45">{p.stage}</span>
                    </span>
                    <Arrow className={cn("h-5 w-5 transition", i === active ? "translate-x-0 text-marigold" : "-translate-x-2 opacity-0")} />
                  </button>
                </li>
              ))}
            </ol>
          </Reveal>

          {/* growth visual + detail */}
          <Reveal delay={150}>
            <div className="relative overflow-hidden rounded-3xl bg-forest-2 p-8 ring-1 ring-paper/10 sm:p-10">
              <div className="flex items-end justify-between gap-6">
                <div key={active} className="animate-fade-up max-w-sm">
                  <p className="text-xs uppercase tracking-[0.25em] text-marigold">Stage {step.n} · {step.stage}</p>
                  <h3 className="mt-3 font-display text-4xl">{step.title}</h3>
                  <p className="mt-4 leading-relaxed text-paper/70">{step.text}</p>
                </div>
                <GrowthStage stage={active} />
              </div>
              <div className="mt-8 flex gap-2">
                {process.map((_, i) => (
                  <span key={i} className={cn("h-1 flex-1 rounded-full transition-all duration-500", i <= active ? "bg-marigold" : "bg-paper/15")} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function GrowthStage({ stage }: { stage: number }) {
  return (
    <svg viewBox="0 0 120 140" className="h-36 w-28 shrink-0 sm:h-44 sm:w-32" aria-hidden>
      <ellipse cx="60" cy="130" rx="46" ry="8" fill="#12271d" />
      <path d="M14 128c20-8 72-8 92 0" stroke="#d9714b" strokeWidth="5" strokeLinecap="round" />
      {stage === 0 && (
        <>
          <ellipse cx="60" cy="118" rx="9" ry="6" fill="#f2b441" />
          <path d="M54 112c2-3 10-3 12 0" stroke="#12271d" strokeWidth="1.5" fill="none" />
        </>
      )}
      {stage >= 1 && (
        <g className="animate-sway" style={{ transformOrigin: "60px 126px" }}>
          <path d={stage === 1 ? "M60 126C60 110 60 100 60 90" : "M60 126C58 90 62 60 60 30"} stroke="#a9c3a1" strokeWidth="4" strokeLinecap="round" fill="none" />
          {stage === 1 ? (
            <>
              <path d="M60 96C42 96 32 86 32 74 46 76 58 84 60 96Z" fill="#2f6b4a" />
              <path d="M60 92C76 90 86 80 86 68 72 70 62 78 60 92Z" fill="#a9c3a1" />
            </>
          ) : (
            <>
              <path d="M60 100C40 100 26 88 24 72 42 74 58 86 60 100Z" fill="#2f6b4a" />
              <path d="M60 78C80 78 94 66 96 50 78 52 62 64 60 78Z" fill="#a9c3a1" />
              <path d="M60 60C46 58 38 48 38 38 50 40 58 48 60 60Z" fill="#2f6b4a" />
            </>
          )}
        </g>
      )}
      {stage >= 2 && (
        <g className="animate-sway" style={{ transformOrigin: "60px 126px" }}>
          <g transform="translate(60 26)">
            {[0, 60, 120, 180, 240, 300].map((a) => (
              <ellipse key={a} cy="-11" rx="6" ry="12" fill="#d9714b" transform={`rotate(${a})`} />
            ))}
            <circle r="6" fill="#f2b441" />
          </g>
        </g>
      )}
      {stage === 3 && (
        <g>
          <circle cx="30" cy="40" r="7" fill="#f2b441" />
          <circle cx="92" cy="30" r="5" fill="#d9714b" />
          <circle cx="98" cy="86" r="7" fill="#f2b441" />
          <path d="M30 40l2-4M92 30l2-4M98 86l2-4" stroke="#12271d" strokeWidth="1.5" />
        </g>
      )}
    </svg>
  );
}

/* ================= WORK ================= */
function Work() {
  return (
    <section id="work" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="font-display text-4xl font-medium leading-[1.05] text-forest sm:text-6xl">
              Gardens we've <em className="font-light italic text-moss">grown</em>
            </h2>
          </div>
          <p className="max-w-sm text-lg text-ink/65">
            A glimpse into some of the digital experiences we've carefully cultivated.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 120} className={cn(i === 0 || i === 3 ? "md:col-span-1" : "")}>
              <a
                href={`#/work/${p.slug}`}
                className="group block overflow-hidden rounded-[2rem] bg-cream ring-1 ring-forest/10 transition duration-500 hover:shadow-2xl hover:shadow-forest/15"
              >
                <ProjectArt slug={p.slug} tone={p.tone} className="h-72 sm:h-80" />
                <div className="p-7">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-moss">{p.category}</p>
                  <div className="mt-2 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-3xl font-medium text-forest">{p.name}</h3>
                      <p className="mt-1 text-ink/60">{p.tagline}</p>
                    </div>
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest text-paper transition duration-500 group-hover:rotate-[-45deg] group-hover:bg-clay">
                      <Arrow className="h-5 w-5" />
                    </span>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <li key={t} className="rounded-full bg-paper px-3 py-1 text-xs text-forest/80 ring-1 ring-forest/10">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= ABOUT ================= */
function About() {
  return (
    <section id="about" className="scroll-mt-20 pb-24 sm:pb-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-mint p-8 sm:p-14">
          <Leaf className="absolute -right-6 -top-10 h-56 rotate-[20deg] text-sage/70" />
          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_1fr]">
            <Reveal>
              <Eyebrow>About us</Eyebrow>
              <h2 className="font-display text-4xl font-medium leading-[1.05] text-forest sm:text-6xl">
                We are digital <em className="font-light italic text-moss">gardeners</em>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-forest/75">
                At Webmasters Garden, we believe every brand deserves a digital presence that feels alive —
                thoughtfully designed, meticulously built, and ready to grow.
              </p>
              <p className="mt-4 leading-relaxed text-forest/70">
                Founded by a team of designers and engineers who share a passion for craft, we combine
                aesthetic sensibility with technical excellence. We don't just build websites; we cultivate
                digital ecosystems that evolve with your business.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {tools.slice(0, 6).map((t) => (
                  <span key={t} className="rounded-full bg-forest px-4 py-1.5 text-sm text-paper">
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>

            <div className="space-y-4">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={i * 120}>
                  <div className="flex gap-5 rounded-3xl bg-cream/90 p-6 shadow-sm ring-1 ring-forest/5 transition hover:-translate-y-1 hover:shadow-xl">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest font-display text-lg text-marigold">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-medium text-forest">{v.title}</h3>
                      <p className="mt-1 text-ink/65">{v.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= CONTACT / PLANNER ================= */
const goals = ["New website", "Web app", "Online store", "Redesign", "Mobile / PWA", "Ongoing care"];
const extras = ["UI/UX design", "Brand identity", "SEO", "Payments", "API integration", "Analytics"];

function Contact() {
  const [goal, setGoal] = useState<string>("New website");
  const [picked, setPicked] = useState<string[]>(["UI/UX design"]);
  const [copied, setCopied] = useState(false);

  const toggle = (e: string) =>
    setPicked((p) => (p.includes(e) ? p.filter((x) => x !== e) : [...p, e]));

  const brief = `Hi Webmasters Garden! I'd like to plant: ${goal}${
    picked.length ? ` — with ${picked.join(", ")}` : ""
  }.`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(brief);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <section id="contact" className="grain relative scroll-mt-20 overflow-hidden bg-forest py-24 text-paper sm:py-32">
      <div className="absolute -left-40 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-moss/25 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <Reveal>
          <Eyebrow light>Get in touch</Eyebrow>
          <h2 className="font-display text-5xl font-medium leading-[1] sm:text-7xl">
            Let's start <em className="font-light italic text-marigold">something great</em>
          </h2>
          <p className="mt-6 max-w-md text-lg text-paper/70">
            Ready to grow your digital presence? Call us directly and let's discuss your project.
          </p>

          <a
            href={PHONE_HREF}
            className="group mt-9 inline-flex items-center gap-4 rounded-full bg-marigold py-3 pl-3 pr-8 text-forest shadow-xl shadow-black/20 transition hover:bg-paper"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-marigold transition group-hover:rotate-12">
              <Phone className="h-5 w-5" />
            </span>
            <span className="font-display text-2xl font-medium sm:text-3xl">{PHONE}</span>
          </a>

          <ul className="mt-10 space-y-3 text-paper/70">
            <li className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-paper/10">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></svg>
              </span>
              Working remotely worldwide
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-paper/10">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
              </span>
              Available 24/7
            </li>
          </ul>
        </Reveal>

        {/* planner */}
        <Reveal delay={150}>
          <div className="rounded-[2rem] bg-cream p-6 text-forest shadow-2xl shadow-black/30 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-clay">Plant your idea</p>
            <h3 className="mt-2 font-display text-3xl font-medium">Sketch your project first</h3>
            <p className="mt-2 text-sm text-ink/60">
              Pick what you're after — we'll shape a quick brief you can read to us on the call.
            </p>

            <p className="mt-6 text-sm font-medium">I'm looking for…</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {goals.map((g) => (
                <button
                  key={g}
                  onClick={() => setGoal(g)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm ring-1 transition",
                    goal === g
                      ? "bg-forest text-paper ring-forest"
                      : "bg-paper text-forest/80 ring-forest/15 hover:ring-forest/50"
                  )}
                >
                  {g}
                </button>
              ))}
            </div>

            <p className="mt-6 text-sm font-medium">Add a few extras</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {extras.map((e) => {
                const on = picked.includes(e);
                return (
                  <button
                    key={e}
                    onClick={() => toggle(e)}
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm ring-1 transition",
                      on
                        ? "bg-marigold text-forest ring-marigold"
                        : "bg-paper text-forest/80 ring-forest/15 hover:ring-forest/50"
                    )}
                  >
                    {on && <Check className="h-3.5 w-3.5" />}
                    {e}
                  </button>
                );
              })}
            </div>

            <div className="mt-7 rounded-2xl border border-dashed border-forest/25 bg-paper p-4">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-forest/50">Your brief</p>
              <p className="mt-1.5 font-display text-lg leading-snug">{brief}</p>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={PHONE_HREF}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-forest px-6 py-3.5 font-medium text-paper transition hover:bg-moss"
              >
                <Phone className="h-4 w-4" /> Call to discuss
              </a>
              <button
                onClick={copy}
                className="rounded-full px-6 py-3.5 font-medium text-forest ring-1 ring-forest/25 transition hover:bg-forest/5"
              >
                {copied ? "Copied ✓" : "Copy brief"}
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Process />
      <Work />
      <Testimonials />
      <About />
      <Contact />
    </>
  );
}
