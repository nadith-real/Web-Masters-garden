import { cn } from "../utils/cn";

const toneBg: Record<string, string> = {
  clay: "bg-clay",
  moss: "bg-moss",
  sage: "bg-sage",
  marigold: "bg-marigold",
};

function Browser({ children, url, className }: { children: React.ReactNode; url: string; className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-xl bg-cream shadow-2xl shadow-forest/25 ring-1 ring-forest/10", className)}>
      <div className="flex items-center gap-1.5 border-b border-forest/10 bg-paper-2 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-clay/70" />
        <span className="h-2 w-2 rounded-full bg-marigold/80" />
        <span className="h-2 w-2 rounded-full bg-moss/60" />
        <span className="ml-3 truncate rounded-full bg-cream px-3 py-0.5 text-[9px] text-forest/50">{url}</span>
      </div>
      {children}
    </div>
  );
}

/* Lumina — fashion storefront */
function Lumina() {
  return (
    <Browser url="lumina.fashion">
      <div className="p-3">
        <div className="mb-2 flex items-center justify-between text-[8px] font-medium tracking-[0.25em] text-forest">
          <span>LUMINA</span>
          <span className="flex gap-2 text-forest/50"><i>New</i><i>Women</i><i>Men</i><i>Bag (2)</i></span>
        </div>
        <div className="grid grid-cols-5 gap-2">
          <div className="col-span-3 flex flex-col justify-end rounded-lg bg-[#e9c9b4] p-3" style={{ minHeight: 120 }}>
            <p className="font-display text-lg leading-none text-forest">Autumn<br />Edit</p>
            <span className="mt-2 w-fit rounded-full bg-forest px-2 py-0.5 text-[7px] text-paper">Shop now</span>
          </div>
          <div className="col-span-2 grid gap-2">
            <div className="rounded-lg bg-forest p-2"><div className="h-10 rounded bg-clay/80" /></div>
            <div className="rounded-lg bg-sage/60 p-2"><div className="h-10 rounded bg-cream/70" /></div>
          </div>
        </div>
        <div className="mt-2 grid grid-cols-4 gap-2">
          {["#d9714b", "#12271d", "#f2b441", "#a9c3a1"].map((c, i) => (
            <div key={c}>
              <div className="aspect-[3/4] rounded-md" style={{ background: c, opacity: 0.85 }} />
              <div className="mt-1 h-1 w-3/4 rounded bg-forest/20" />
              <div className="mt-0.5 text-[7px] text-forest/60">${(48 + i * 22).toFixed(0)}</div>
            </div>
          ))}
        </div>
      </div>
    </Browser>
  );
}

/* Nova — analytics dashboard */
function Nova() {
  const bars = [38, 52, 44, 68, 58, 82, 70, 94, 76, 100];
  return (
    <Browser url="app.nova-analytics.io">
      <div className="flex">
        <div className="w-10 shrink-0 space-y-2 bg-forest p-2">
          <div className="h-5 w-5 rounded bg-marigold" />
          {[0, 1, 2, 3].map((i) => <div key={i} className="h-1.5 w-5 rounded bg-paper/25" />)}
        </div>
        <div className="flex-1 p-3">
          <div className="mb-2 grid grid-cols-3 gap-2">
            {[["Live users", "12.4k"], ["Events/s", "3,208"], ["Latency", "182ms"]].map(([a, b]) => (
              <div key={a} className="rounded-md bg-paper p-2">
                <p className="text-[7px] text-forest/50">{a}</p>
                <p className="font-display text-sm leading-tight text-forest">{b}</p>
              </div>
            ))}
          </div>
          <div className="rounded-md bg-paper p-2">
            <div className="flex h-20 items-end gap-1">
              {bars.map((h, i) => (
                <div key={i} className="flex-1 rounded-t-sm bg-moss" style={{ height: `${h}%`, opacity: 0.45 + i * 0.055 }} />
              ))}
            </div>
            <svg viewBox="0 0 100 20" className="-mt-[88px] h-20 w-full" preserveAspectRatio="none">
              <polyline points="0,15 12,12 24,14 36,8 48,10 60,5 72,7 84,3 100,1" fill="none" stroke="#d9714b" strokeWidth="1.2" />
            </svg>
          </div>
          <div className="mt-2 space-y-1">
            {[80, 60, 70].map((w, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-clay" />
                <span className="h-1.5 rounded bg-forest/15" style={{ width: `${w}%` }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Browser>
  );
}

/* Evergreen — real estate */
function Evergreen() {
  return (
    <Browser url="evergreenrealty.com">
      <div>
        <div className="relative h-24 overflow-hidden bg-forest-2">
          <svg viewBox="0 0 200 80" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMax slice">
            <rect width="200" height="80" fill="#1b3a2b" />
            <circle cx="160" cy="22" r="12" fill="#f2b441" />
            <path d="M0 80V52l30-14 24 10 28-20 30 18 36-14 52 20v28Z" fill="#2f6b4a" />
            <path d="M70 80V50l18-12 18 12v30Z" fill="#f5f0e4" />
            <rect x="82" y="60" width="12" height="20" fill="#d9714b" />
            <rect x="96" y="56" width="6" height="6" fill="#f2b441" />
          </svg>
          <div className="absolute left-3 top-3 text-[8px] tracking-[0.25em] text-paper">EVERGREEN</div>
          <div className="absolute bottom-2 left-3 font-display text-base leading-none text-paper">Find your<br />place to grow</div>
        </div>
        <div className="flex gap-1 bg-paper p-2">
          {["Location", "Type", "Price"].map((l) => (
            <div key={l} className="flex-1 rounded bg-cream px-2 py-1 text-[7px] text-forest/60">{l}</div>
          ))}
          <div className="rounded bg-clay px-2 py-1 text-[7px] text-white">Search</div>
        </div>
        <div className="grid grid-cols-3 gap-2 p-2">
          {["#a9c3a1", "#e9c9b4", "#d6e5cf"].map((c, i) => (
            <div key={i}>
              <div className="h-10 rounded" style={{ background: c }} />
              <div className="mt-1 h-1 w-4/5 rounded bg-forest/20" />
              <div className="mt-0.5 text-[7px] font-medium text-moss">$ {(1.2 + i * 0.7).toFixed(1)}M</div>
            </div>
          ))}
        </div>
      </div>
    </Browser>
  );
}

/* Pulse — mobile booking */
function Pulse() {
  return (
    <div className="relative mx-auto flex h-full w-full items-center justify-center py-2">
      {/* back phone */}
      <div className="absolute left-[8%] top-6 w-[38%] rotate-[-8deg] rounded-[1.4rem] bg-forest p-1.5 shadow-2xl shadow-forest/30">
        <div className="rounded-[1.1rem] bg-paper p-2" style={{ aspectRatio: "9/17" }}>
          <p className="text-[7px] text-forest/50">Today</p>
          <p className="font-display text-sm leading-tight text-forest">Your plan</p>
          <div className="mt-2 flex h-14 items-center justify-center rounded-lg bg-forest">
            <svg viewBox="0 0 60 30" className="h-8 w-14"><polyline points="0,15 10,15 15,4 22,26 28,10 34,18 40,15 60,15" fill="none" stroke="#f2b441" strokeWidth="2" strokeLinejoin="round" /></svg>
          </div>
          <div className="mt-2 space-y-1">
            {[1, 2, 3].map((i) => <div key={i} className="h-3 rounded bg-forest/10" />)}
          </div>
        </div>
      </div>
      {/* front phone */}
      <div className="relative z-10 ml-[18%] w-[42%] rotate-[4deg] rounded-[1.4rem] bg-forest p-1.5 shadow-2xl shadow-forest/40">
        <div className="rounded-[1.1rem] bg-cream p-2" style={{ aspectRatio: "9/17" }}>
          <div className="flex items-center justify-between text-[7px] text-forest/60"><span>PULSE</span><span>● ● ●</span></div>
          <p className="mt-1 font-display text-sm leading-tight text-forest">Book a class</p>
          <div className="mt-1.5 flex gap-1">
            {["M", "T", "W", "T", "F"].map((d, i) => (
              <span key={i} className={cn("flex h-4 flex-1 items-center justify-center rounded text-[7px]", i === 2 ? "bg-clay text-white" : "bg-paper text-forest/60")}>{d}</span>
            ))}
          </div>
          {[["07:00", "Vinyasa", "3 spots"], ["12:30", "HIIT 45", "Full"], ["18:00", "Strength", "8 spots"]].map(([t, n, s]) => (
            <div key={t} className="mt-1.5 flex items-center gap-1.5 rounded-lg bg-paper p-1.5">
              <span className="text-[7px] font-medium text-moss">{t}</span>
              <div className="flex-1"><p className="text-[8px] font-medium text-forest">{n}</p><p className="text-[6px] text-forest/50">{s}</p></div>
              <span className={cn("rounded-full px-1.5 py-0.5 text-[6px]", s === "Full" ? "bg-forest/10 text-forest/50" : "bg-forest text-paper")}>{s === "Full" ? "Wait" : "Book"}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProjectArt({ slug, tone, className }: { slug: string; tone: string; className?: string }) {
  return (
    <div className={cn("relative flex items-center justify-center overflow-hidden p-6 sm:p-8", toneBg[tone], className)}>
      {/* decorative rings */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-forest/15" />
      <div className="pointer-events-none absolute -bottom-20 -left-10 h-60 w-60 rounded-full border border-forest/10" />
      <div className="relative w-full max-w-[420px] transition-transform duration-700 group-hover:scale-[1.04] group-hover:-rotate-1">
        {slug === "lumina-fashion" && <Lumina />}
        {slug === "nova-analytics" && <Nova />}
        {slug === "evergreen-realty" && <Evergreen />}
        {slug === "pulse-fitness" && <Pulse />}
      </div>
    </div>
  );
}
