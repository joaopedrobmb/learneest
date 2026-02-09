import { ArrowRightIcon } from "./icons";

type HeroProps = {
  onPrimaryCta: () => void;
};

const cards = [
  { label: "Planned Time", value: "16h", detail: "This week" },
  { label: "Actual Time", value: "14h 20m", detail: "Tracked focus time" },
  { label: "Pomodoro", value: "11 cycles", detail: "Avg 28m deep focus" },
  { label: "Consistency", value: "6 days", detail: "Current streak" },
];

export default function Hero({ onPrimaryCta }: HeroProps) {
  return (
    <section id="top" className="relative overflow-hidden py-20 sm:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="animate-rise">
          <p className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
            Plan better. Track truth.
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            Study with structure and see your real progress.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Learneest helps you compare planned vs actual study sessions,
            measure real study time, and build consistency with a workflow
            students can actually sustain.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onPrimaryCta}
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Join waitlist
              <ArrowRightIcon className="h-4 w-4" />
            </button>
            <a
              href="#how-it-works"
              className="focus-ring rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:border-slate-400"
            >
              See how it works
            </a>
          </div>
        </div>

        <div className="animate-rise rounded-3xl border border-slate-200 bg-white p-5 shadow-soft [animation-delay:120ms]">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-semibold text-ink">Dashboard Preview</p>
            <p className="text-xs text-muted">Today</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {cards.map((card) => (
              <div
                key={card.label}
                className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-muted">
                  {card.label}
                </p>
                <p className="mt-2 text-2xl font-semibold text-ink">
                  {card.value}
                </p>
                <p className="mt-1 text-xs text-muted">{card.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
            Planned vs actual gap narrowed by 18% this week.
          </div>
        </div>
      </div>
    </section>
  );
}
