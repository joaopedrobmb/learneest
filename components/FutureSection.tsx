import SectionTitle from "./SectionTitle";

const bullets = [
  "Follow friends",
  "Share summaries and flashcards",
  "View friends' progress",
  "Light gamification: streaks, goals, optional rankings"
];

export default function FutureSection() {
  return (
    <section id="future" className="py-20">
      <div className="section-shell grid gap-8 lg:grid-cols-2 lg:items-center">
        <SectionTitle
          eyebrow="Coming Later"
          title="Future: a study-focused social layer"
          description="After the core learning workflow is stable, Learneest will add social tools that support accountability and exchange between students."
        />

        <div className="rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-50 to-cyan-50 p-8 shadow-card">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-700">Long-term Vision</p>
          <ul className="mt-4 space-y-3">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-sm text-slate-700">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" aria-hidden="true" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-slate-600">These features are planned for later phases and depend on user feedback and adoption.</p>
        </div>
      </div>
    </section>
  );
}
