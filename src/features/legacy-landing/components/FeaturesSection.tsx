import SectionTitle from "./SectionTitle";
import { CheckIcon } from "./icons";

const features = [
  "Authentication",
  "Subjects management",
  "Study session planning",
  "Integrated Pomodoro timer",
  "Automatic tracking of real study time",
  "Planned vs actual comparison",
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20">
      <div className="section-shell">
        <SectionTitle
          eyebrow="MVP Features"
          title="Everything needed to organize study and track reality"
          description="Learneest combines planning and execution so students can stop guessing and start improving based on real study time and consistent routines."
        />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <li
              key={feature}
              className="animate-rise rounded-2xl border border-slate-200 bg-white p-5 shadow-card"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="inline-flex rounded-xl bg-emerald-50 p-2 text-emerald-700">
                <CheckIcon className="h-5 w-5" />
              </div>
              <p className="mt-4 text-base font-semibold text-ink">{feature}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Keep planned vs actual visible in one place and tighten your
                study consistency over time.
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
