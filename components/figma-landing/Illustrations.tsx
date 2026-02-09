export function HeroPlanningIllustration() {
  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-6">
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-indigo-300/20 blur-2xl" />
      <div className="absolute -left-12 bottom-8 h-36 w-36 rounded-full bg-sky-300/20 blur-2xl" />

      <div className="relative mx-auto mt-3 max-w-md rounded-2xl border border-blue-100 bg-white p-5 shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-semibold text-gray-900">Weekly Study Plan</p>
          <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">Week 8</span>
        </div>

        <div className="space-y-3">
          {[
            { subject: "Calculus", planned: "3h", actual: "2h 45m", done: true },
            { subject: "Physics", planned: "2h", actual: "2h 20m", done: true },
            { subject: "Chemistry", planned: "2h", actual: "1h 30m", done: false }
          ].map((item) => (
            <div key={item.subject} className="rounded-xl border border-gray-100 bg-gray-50 p-3">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-800">{item.subject}</p>
                <span className={`text-xs font-semibold ${item.done ? "text-emerald-600" : "text-amber-600"}`}>
                  {item.done ? "on track" : "adjust"}
                </span>
              </div>
              <div className="mt-2 flex items-center justify-between text-xs text-gray-600">
                <span>Planned: {item.planned}</span>
                <span>Actual: {item.actual}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <svg viewBox="0 0 420 140" className="absolute bottom-6 left-6 right-6" aria-hidden="true">
        <defs>
          <linearGradient id="hero-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <rect x="0" y="18" width="420" height="110" rx="14" fill="white" opacity="0.9" />
        <path d="M20 98 C 70 70, 120 84, 170 58 C 210 38, 260 54, 310 42 C 340 34, 380 40, 400 26" stroke="url(#hero-line)" strokeWidth="4" fill="none" />
        <circle cx="170" cy="58" r="5" fill="#3b82f6" />
        <circle cx="310" cy="42" r="5" fill="#8b5cf6" />
        <text x="20" y="42" fill="#475569" fontSize="12">Planned vs actual trend</text>
      </svg>
    </div>
  );
}

export function AboutProgressIllustration() {
  return (
    <div className="relative h-[450px] w-full overflow-hidden rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-6 shadow-2xl">
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-indigo-300/20 blur-2xl" />
      <div className="absolute bottom-4 left-4 h-28 w-28 rounded-full bg-sky-300/20 blur-2xl" />

      <div className="relative grid h-full grid-cols-5 gap-4">
        <div className="col-span-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-900">Real Study Time</p>
            <span className="text-xs text-gray-500">Last 7 days</span>
          </div>

          <svg viewBox="0 0 260 180" className="w-full" aria-hidden="true">
            {[0, 1, 2, 3].map((row) => (
              <line key={row} x1="12" y1={32 + row * 35} x2="248" y2={32 + row * 35} stroke="#e2e8f0" strokeWidth="1" />
            ))}
            {[42, 90, 68, 112, 98, 130, 146].map((height, index) => {
              const x = 24 + index * 32;
              return <rect key={x} x={x} y={170 - height} width="18" height={height} rx="6" fill="#4f46e5" opacity="0.88" />;
            })}
          </svg>
        </div>

        <div className="col-span-2 flex flex-col gap-4">
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">Consistency</p>
            <p className="mt-2 text-2xl font-bold text-emerald-900">6 days</p>
            <p className="text-xs text-emerald-700">current streak</p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">Planned vs Actual</p>
            <p className="mt-2 text-2xl font-bold text-blue-900">86%</p>
            <p className="text-xs text-blue-700">weekly alignment</p>
          </div>

          <div className="rounded-2xl border border-violet-100 bg-violet-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-violet-700">Focus Cycles</p>
            <p className="mt-2 text-2xl font-bold text-violet-900">11</p>
            <p className="text-xs text-violet-700">completed today</p>
          </div>
        </div>
      </div>
    </div>
  );
}
