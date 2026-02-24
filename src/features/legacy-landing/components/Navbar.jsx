import { Logo } from "../../../shared/brand/Logo";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#progress", label: "Progress" },
  { href: "#future", label: "Future" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar({ onJoinWaitlist }) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur">
      <div className="section-shell py-3">
        <div className="flex items-center justify-between gap-4">
          <a
            href="#top"
            className="focus-ring inline-flex items-center gap-2 rounded-full"
            aria-label="Learneest home"
          >
            <Logo className="h-8 w-8" />
            <span className="text-lg font-semibold tracking-tight text-ink">
              Learneest
            </span>
          </a>

          <button
            type="button"
            onClick={onJoinWaitlist}
            className="focus-ring whitespace-nowrap rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Join waitlist
          </button>
        </div>

        <nav
          aria-label="Primary"
          className="mt-3 flex gap-5 overflow-x-auto pb-1"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring whitespace-nowrap rounded-md text-sm font-medium text-muted transition hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
