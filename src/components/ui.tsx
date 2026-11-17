import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "../utils/cn";
import type { ServiceIcon } from "../data";

/* ---------- hash router ---------- */
export function useRoute() {
  const get = () => window.location.hash.replace(/^#\/?/, "");
  const [route, setRoute] = useState(get());
  useEffect(() => {
    const on = () => setRoute(get());
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  return route;
}

export function goHome(section?: string) {
  if (window.location.hash.replace(/^#\/?/, "") === "" || !window.location.hash.startsWith("#/")) {
    // already on home
    if (section) document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  window.location.hash = "";
  setTimeout(() => {
    if (section) document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  }, 120);
}

/* ---------- logo ---------- */
export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-full",
          dark ? "bg-marigold text-forest" : "bg-forest text-marigold"
        )}
      >
        <Sprout className="h-5 w-5" />
      </span>
      <span
        className={cn(
          "font-display text-xl font-semibold leading-none",
          dark ? "text-paper" : "text-forest"
        )}
      >
        webmasters<span className={dark ? "text-marigold" : "text-clay"}>.garden</span>
      </span>
    </span>
  );
}

/* ---------- scroll reveal ---------- */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Comp = Tag as "div";
  return (
    <Comp
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn("reveal", shown && "in", className)}
      style={{ ["--d" as string]: `${delay}ms` }}
    >
      {children}
    </Comp>
  );
}

/* ---------- animated counter ---------- */
export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [v, setV] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 1600;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          setV(Math.round(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return (
    <span ref={ref}>
      {v}
      {suffix}
    </span>
  );
}

/* ---------- section heading ---------- */
export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className={cn(
        "mb-5 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em]",
        light ? "text-marigold" : "text-moss"
      )}
    >
      <span className={cn("h-px w-8", light ? "bg-marigold" : "bg-moss")} />
      {children}
    </p>
  );
}

/* ---------- icons ---------- */
export function Arrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
export function Phone({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
    </svg>
  );
}
export function Check({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}
export function Sprout({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 21v-9" />
      <path d="M12 12C12 8 9 5.5 4.5 5.5 4.5 10 7.5 12 12 12Z" />
      <path d="M12 14c0-3 2.5-5 7-5 0 3.5-2.5 5-7 5Z" />
    </svg>
  );
}

export function ServiceGlyph({ id, className }: { id: ServiceIcon; className?: string }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg viewBox="0 0 32 32" className={className} {...p}>
      {id === "design" && (
        <>
          <path d="M16 4c-6.6 0-12 4.6-12 10.3C4 18 6.6 19 9 19h2.2c1.4 0 2 1.1 1.6 2.3-.6 1.7.4 3.7 2.6 3.7 6.2 0 12.6-4.5 12.6-11.2C28 8 22.9 4 16 4Z" />
          <circle cx="10" cy="12" r="1.4" />
          <circle cx="15.5" cy="9" r="1.4" />
          <circle cx="21" cy="11.5" r="1.4" />
        </>
      )}
      {id === "code" && (
        <>
          <path d="m11 10-6 6 6 6M21 10l6 6-6 6M18 7l-4 18" />
        </>
      )}
      {id === "cart" && (
        <>
          <path d="M4 6h4l2.5 13h13L26 10H9" />
          <circle cx="12" cy="25" r="1.8" />
          <circle cx="22" cy="25" r="1.8" />
        </>
      )}
      {id === "speed" && (
        <>
          <path d="M5 22a11 11 0 1 1 22 0" />
          <path d="m16 22 6-8" />
          <circle cx="16" cy="22" r="1.5" />
        </>
      )}
      {id === "care" && (
        <>
          <path d="M16 4 6 8v7c0 6 4 10.5 10 13 6-2.5 10-7 10-13V8L16 4Z" />
          <path d="m11.5 16 3.5 3.5 6-7" />
        </>
      )}
      {id === "mobile" && (
        <>
          <rect x="9" y="3.5" width="14" height="25" rx="3" />
          <path d="M14 24.5h4" />
        </>
      )}
    </svg>
  );
}

/* ---------- botanical illustrations ---------- */
export function Leaf({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 160" className={className} style={style} aria-hidden>
      <path d="M50 158C50 110 48 70 50 6" stroke="currentColor" strokeWidth="1.5" fill="none" opacity=".6" />
      <path d="M50 6C86 38 92 102 50 152 8 102 14 38 50 6Z" fill="currentColor" opacity=".9" />
      <path d="M50 30 70 62M50 56 74 92M50 84 68 112M50 40 30 70M50 66 26 98M50 94 32 120" stroke="#f5f0e4" strokeWidth="1.2" opacity=".35" fill="none" />
    </svg>
  );
}

export function HeroPlant({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 420 520" className={className} aria-hidden>
      {/* sun */}
      <circle cx="318" cy="120" r="78" fill="#f2b441" />
      <circle cx="318" cy="120" r="102" fill="none" stroke="#f2b441" strokeWidth="1.5" strokeDasharray="2 8" className="animate-spin-slow" style={{ transformOrigin: "318px 120px" }} />
      {/* stem group sways */}
      <g className="animate-sway" style={{ transformOrigin: "210px 440px" }}>
        <path d="M210 440C206 360 214 290 208 200C204 150 214 110 212 70" stroke="#1b3a2b" strokeWidth="6" fill="none" strokeLinecap="round" />
        {/* leaves */}
        <path d="M208 380C150 372 104 332 96 276 154 282 200 322 208 380Z" fill="#2f6b4a" />
        <path d="M211 320C268 316 316 276 322 220 266 224 218 262 211 320Z" fill="#a9c3a1" />
        <path d="M208 260C160 248 128 212 126 166 172 174 204 208 208 260Z" fill="#1b3a2b" />
        <path d="M210 200C254 192 286 160 292 118 248 124 216 154 210 200Z" fill="#2f6b4a" />
        {/* leaf veins */}
        <path d="M208 380C170 350 130 316 100 280M211 320C250 290 290 258 318 224M208 260C180 230 152 198 130 170" stroke="#f5f0e4" strokeWidth="1.5" fill="none" opacity=".45" />
        {/* bloom */}
        <g transform="translate(212 62)">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
            <ellipse key={a} cx="0" cy="-26" rx="12" ry="26" fill="#d9714b" transform={`rotate(${a})`} />
          ))}
          <circle r="16" fill="#12271d" />
          <circle r="7" fill="#f2b441" />
        </g>
      </g>
      {/* pot */}
      <path d="M130 440h160l-18 70H148Z" fill="#d9714b" />
      <rect x="120" y="428" width="180" height="24" rx="6" fill="#c25e3b" />
      <path d="M150 478h120" stroke="#f5f0e4" strokeWidth="2" opacity=".35" strokeLinecap="round" />
      {/* sparkles */}
      <g fill="#12271d">
        <path d="M60 150l3 10 10 3-10 3-3 10-3-10-10-3 10-3z" />
        <path d="M360 330l2 7 7 2-7 2-2 7-2-7-7-2 7-2z" />
        <path d="M80 360l2 7 7 2-7 2-2 7-2-7-7-2 7-2z" />
      </g>
    </svg>
  );
}
