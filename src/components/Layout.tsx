import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { PHONE, PHONE_HREF } from "../data";
import { Arrow, Logo, Phone, goHome } from "./ui";

const links = [
  { id: "services", label: "Services" },
  { id: "process", label: "Process" },
  { id: "work", label: "Work" },
  { id: "reviews", label: "Reviews" },
  { id: "about", label: "About" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    goHome(id);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 pl-5 transition-all duration-300 sm:px-5",
          scrolled || open
            ? "bg-cream/85 shadow-lg shadow-forest/10 ring-1 ring-forest/10 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <button onClick={() => goHome()} aria-label="Home">
          <Logo />
        </button>

        <nav className="hidden items-center gap-5 md:flex lg:gap-8">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="group relative text-sm font-medium text-forest/80 transition hover:text-forest"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-clay transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => go("contact")}
            className="hidden items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-paper transition hover:bg-moss sm:inline-flex"
          >
            Get a Quote <Arrow className="h-4 w-4" />
          </button>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-forest text-paper md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="animate-fade-up mx-auto mt-2 max-w-6xl rounded-3xl bg-cream/95 p-4 shadow-xl ring-1 ring-forest/10 backdrop-blur-xl md:hidden">
          {[...links, { id: "contact", label: "Get a Quote" }].map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left font-display text-2xl text-forest hover:bg-paper-2"
            >
              {l.label}
              <Arrow className="h-5 w-5 text-clay" />
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest text-paper">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo dark />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper/60">
              A design & development studio cultivating high-performance websites, web apps and online
              stores — working remotely, worldwide.
            </p>
          </div>
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-marigold">Explore</p>
            <ul className="space-y-2.5 text-sm text-paper/75">
              {links.map((l) => (
                <li key={l.id}>
                  <button onClick={() => goHome(l.id)} className="transition hover:text-marigold">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-marigold">Say hello</p>
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 text-lg font-display text-paper hover:text-marigold">
              <Phone className="h-4 w-4" /> {PHONE}
            </a>
            <p className="mt-2 text-sm text-paper/60">Available 24/7 · Remote worldwide</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-paper/10 pt-6 text-xs text-paper/50 sm:flex-row sm:items-center">
          <p>© 2026 Webmasters Garden. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#/privacy" className="hover:text-marigold">Privacy Policy</a>
            <a href="#/terms" className="hover:text-marigold">Terms of Service</a>
            <button onClick={() => goHome()} className="hover:text-marigold">Home</button>
          </div>
        </div>
      </div>
      <div className="pointer-events-none select-none overflow-hidden whitespace-nowrap px-6 text-center font-display text-[17vw] font-semibold leading-[0.7] tracking-tighter text-paper/[0.04]">
        garden
      </div>
    </footer>
  );
}

export function CookieNotice() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("wg-cookie")) {
      const t = setTimeout(() => setShow(true), 1800);
      return () => clearTimeout(t);
    }
  }, []);
  if (!show) return null;
  const close = () => {
    try { localStorage.setItem("wg-cookie", "1"); } catch { /* ignore */ }
    setShow(false);
  };
  return (
    <div className="animate-fade-up fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-md rounded-2xl bg-forest p-4 text-paper shadow-2xl ring-1 ring-paper/10 sm:left-auto sm:right-6 sm:mx-0">
      <p className="text-sm leading-relaxed text-paper/80">
        We use essential cookies to keep the garden tidy. See our{" "}
        <a href="#/privacy" className="text-marigold underline underline-offset-2">privacy policy</a>.
      </p>
      <button onClick={close} className="mt-3 rounded-full bg-marigold px-4 py-1.5 text-sm font-medium text-forest hover:bg-paper">
        Got it
      </button>
    </div>
  );
}
