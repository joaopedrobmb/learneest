const links = [
  { href: "#", label: "Privacy" },
  { href: "#", label: "Terms" },
  { href: "#", label: "Contact" },
  { href: "https://github.com", label: "GitHub" }
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8">
      <div className="section-shell flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">© {new Date().getFullYear()} Learneest. Built for real progress.</p>
        <nav aria-label="Footer" className="flex flex-wrap items-center gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="focus-ring rounded-md text-sm text-muted transition hover:text-ink"
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
