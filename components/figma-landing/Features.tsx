import {
  BarChartIcon,
  CalendarIcon,
  ClockIcon,
  FileTextIcon,
  MessageCircleIcon,
  SubjectsHubIcon,
  TargetIcon,
  TimerIcon,
  TrendingUpIcon
} from "./icons";

const features = [
  {
    icon: CalendarIcon,
    title: "Smart Study Planner",
    description: "Create detailed study schedules and set realistic goals for each subject and topic.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: TimerIcon,
    title: "Integrated Pomodoro",
    description:
      "Use the built-in Pomodoro timer to focus on your studies. Time tracked automatically goes into your personal progress.",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: ClockIcon,
    title: "Time Tracking",
    description: "Log your actual study sessions and see exactly how much time you spend on each subject.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: TrendingUpIcon,
    title: "Planned vs Actual",
    description: "Compare what you planned to study versus what you actually accomplished. Stay accountable.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: FileTextIcon,
    title: "Smart Study Notes",
    description:
      "Take notes during your study sessions with support for plain text and Markdown. Keep your materials organized.",
    color: "from-teal-500 to-green-500"
  },
  {
    icon: BarChartIcon,
    title: "Progress Analytics",
    description: "Visualize your learning progress with detailed charts, trends, and insights over time.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: TargetIcon,
    title: "Goal Management",
    description: "Set and track short-term and long-term study goals. Measure your success rate.",
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: MessageCircleIcon,
    title: "Social Learning (Soon)",
    description: "Connect with other students, share progress, and learn together in a focused community.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: SubjectsHubIcon,
    title: "Subjects Hub",
    description: "Centralize all subjects and topics in one structured place to keep your weekly study plan clear.",
    color: "from-sky-500 to-indigo-500"
  }
];

export function Features() {
  return (
    <section id="features" className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">master your studies</span>
          </h2>
          <p className="text-xl text-gray-600">
            From planning to tracking to analyzing, all the tools to take control of your learning journey.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-xl"
              >
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} transition-transform group-hover:scale-110`}
                >
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="leading-relaxed text-gray-600">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
