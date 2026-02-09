import SectionTitle from "./SectionTitle";

const metrics = [
  { label: "Planned vs actual accuracy", value: "86%" },
  { label: "Real study time this week", value: "14h 20m" },
  { label: "Consistency streak", value: "6 days" }
];

const barData = [34, 48, 40, 56, 52, 64, 70];

export default function ProgressSection() {
  return (
    <section id="progress" className="py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionTitle
            eyebrow="Progress"
            title="Progress that feels real"
            description="Track metrics that reflect actual study behavior: real study time, planned vs actual accuracy, and consistency history across day and week."
          />
          <div className="mt-8 grid gap-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-card">
                <span className="text-sm font-medium text-muted">{metric.label}</span>
                <span className="text-sm font-semibold text-ink">{metric.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <p className="text-sm font-semibold text-ink">Day/Week History (Mock)</p>
          <p className="mt-1 text-xs text-muted">Real study time trend over the last 7 days</p>

          <svg viewBox="0 0 360 190" className="mt-6 w-full" role="img" aria-label="Weekly real study time chart">
            <line x1="22" y1="160" x2="338" y2="160" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="22" y1="120" x2="338" y2="120" stroke="#e2e8f0" strokeWidth="1" />
            <line x1="22" y1="80" x2="338" y2="80" stroke="#e2e8f0" strokeWidth="1" />

            {barData.map((height, index) => {
              const x = 36 + index * 44;
              const y = 160 - height;
              return <rect key={x} x={x} y={y} width="22" height={height} rx="7" fill="#0f766e" opacity="0.88" />;
            })}

            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
              <text key={day} x={47 + index * 44} y="178" textAnchor="middle" fontSize="10" fill="#64748b">
                {day}
              </text>
            ))}
          </svg>

          <div className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm text-muted">
            Habit signal: You studied on 6 of 7 days and improved planned vs actual alignment across the week.
          </div>
        </div>
      </div>
    </section>
  );
}
