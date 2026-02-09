import SectionTitle from "./SectionTitle";

const steps = [
  {
    title: "Create your subjects and goals",
    text: "Set up what you need to study this week and define a realistic target for real study time."
  },
  {
    title: "Plan focused sessions",
    text: "Block sessions with estimated duration and preferred Pomodoro rhythm for each subject."
  },
  {
    title: "Track actual execution",
    text: "Run your sessions with the timer and record what was really completed in each block."
  },
  {
    title: "Review planned vs actual",
    text: "Use daily and weekly history to adjust your schedule and reinforce consistency."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="section-shell">
        <SectionTitle
          eyebrow="How It Works"
          title="A simple loop that improves study consistency"
          description="Plan, execute, compare planned vs actual, and adjust. Learneest keeps the cycle clear so progress becomes visible."
        />

        <ol className="mt-10 grid gap-4 md:grid-cols-2">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white">
                {index + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
