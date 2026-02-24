import WaitlistForm from "./WaitlistForm";

export default function FinalCTA() {
  return (
    <section id="waitlist" className="py-20">
      <div className="section-shell">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft sm:p-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand">
                Start With Consistency
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Join the Learneest waitlist
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Be among the first students to organize planned vs actual
                sessions and measure real study time in one clear workflow.
              </p>
            </div>
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
}
