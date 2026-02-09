import { BoltIcon, LockIcon, PhoneIcon } from "./icons";

const badges = [
  { icon: LockIcon, title: "Privacy-friendly" },
  { icon: PhoneIcon, title: "Mobile-first" },
  { icon: BoltIcon, title: "Fast setup" },
];

export default function CredibilityStrip() {
  return (
    <section className="py-8">
      <div className="section-shell rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-sm font-medium text-muted">
            Built for students who value consistency and measurable effort.
          </p>
          <div className="flex flex-wrap gap-3">
            {badges.map((badge) => (
              <span
                key={badge.title}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-ink"
              >
                <badge.icon className="h-4 w-4 text-brand" />
                {badge.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
