import { projects } from "../data";
import { PHONE, PHONE_HREF } from "../data";
import { Arrow, Check, Eyebrow, Phone, Reveal } from "../components/ui";
import { ProjectArt } from "../components/Mockups";

export default function Case({ slug }: { slug: string }) {
  const idx = projects.findIndex((p) => p.slug === slug);
  const p = projects[idx];

  if (!p) {
    return (
      <div className="mx-auto max-w-3xl px-6 pb-32 pt-48 text-center">
        <h1 className="font-display text-5xl text-forest">This plot is empty</h1>
        <p className="mt-4 text-ink/60">We couldn't find that case study.</p>
        <a href="#/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-paper">
          Back to home
        </a>
      </div>
    );
  }

  const next = projects[(idx + 1) % projects.length];

  return (
    <article>
      {/* hero */}
      <header className="mx-auto max-w-6xl px-6 pb-14 pt-32 sm:pt-40">
        <a href="#/" className="animate-fade-up group inline-flex items-center gap-2 text-sm font-medium text-moss">
          <Arrow className="h-4 w-4 rotate-180 transition group-hover:-translate-x-1" /> Back to home
        </a>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <div>
            <p className="animate-fade-up mb-4 text-xs font-medium uppercase tracking-[0.2em] text-clay">{p.category}</p>
            <h1 className="animate-fade-up font-display text-5xl font-medium leading-[0.98] text-forest sm:text-7xl" style={{ animationDelay: "80ms" }}>
              {p.name}
            </h1>
            <p className="animate-fade-up mt-5 text-xl text-ink/65" style={{ animationDelay: "160ms" }}>
              {p.tagline}
            </p>
            <ul className="animate-fade-up mt-6 flex flex-wrap gap-2" style={{ animationDelay: "220ms" }}>
              {p.stack.map((s) => (
                <li key={s} className="rounded-full bg-cream px-4 py-1.5 text-sm text-forest ring-1 ring-forest/15">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <p className="animate-fade-up text-lg leading-relaxed text-ink/75" style={{ animationDelay: "280ms" }}>
            {p.overview}
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6">
        <div className="group">
          <ProjectArt slug={p.slug} tone={p.tone} className="h-[22rem] rounded-[2.5rem] sm:h-[30rem]" />
        </div>
      </div>

      {/* goals + built */}
      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-3xl bg-cream p-8 ring-1 ring-forest/10 sm:p-10">
            <Eyebrow>The brief</Eyebrow>
            <h2 className="font-display text-3xl font-medium text-forest sm:text-4xl">Goals</h2>
            <ul className="mt-6 space-y-4">
              {p.goals.map((g, i) => (
                <li key={g} className="flex gap-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-mint font-display text-sm text-forest">
                    {i + 1}
                  </span>
                  <span className="text-ink/80">{g}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="h-full rounded-3xl bg-forest p-8 text-paper sm:p-10">
            <Eyebrow light>The harvest</Eyebrow>
            <h2 className="font-display text-3xl font-medium sm:text-4xl">What we built</h2>
            <ul className="mt-6 space-y-4">
              {p.built.map((b) => (
                <li key={b} className="flex gap-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-marigold text-forest">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-paper/85">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* results */}
      <section className="mx-auto max-w-4xl px-6 pb-20 text-center">
        <Reveal>
          <Eyebrow>Results</Eyebrow>
          <p className="font-display text-3xl font-light leading-snug text-forest sm:text-4xl">
            <span className="text-clay">“</span>
            {p.results}
            <span className="text-clay">”</span>
          </p>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <Reveal>
          <div className="grain relative overflow-hidden rounded-[2.5rem] bg-moss p-10 text-center text-paper sm:p-16">
            <h2 className="font-display text-4xl font-medium sm:text-5xl">{p.cta.title}</h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-paper/80">{p.cta.text}</p>
            <a
              href={PHONE_HREF}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-marigold px-8 py-4 font-display text-xl text-forest transition hover:bg-paper"
            >
              <Phone className="h-5 w-5" /> {PHONE}
            </a>
          </div>
        </Reveal>
      </section>

      {/* next */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <a
          href={`#/work/${next.slug}`}
          className="group flex items-center justify-between gap-6 border-t border-forest/15 pt-8"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-forest/50">Next case study</p>
            <p className="mt-2 font-display text-4xl text-forest transition group-hover:text-clay sm:text-6xl">{next.name}</p>
          </div>
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-forest text-paper transition group-hover:translate-x-2 group-hover:bg-clay">
            <Arrow className="h-6 w-6" />
          </span>
        </a>
      </section>
    </article>
  );
}
