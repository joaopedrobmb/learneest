import {
  CalendarIcon,
  ClockIcon,
  FileTextIcon,
  TimerIcon,
  TrendingUpIcon,
  UsersIcon,
} from "./icons";

const features = [
  {
    icon: CalendarIcon,
    title: "Weekly Planning",
    description:
      "Organize your subjects and set realistic goals for each week.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: TimerIcon,
    title: "Integrated Pomodoro",
    description: "Pomodoro timer that automatically logs time to your history.",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: ClockIcon,
    title: "Time Tracking",
    description: "Record how much time you actually dedicated to each subject.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: TrendingUpIcon,
    title: "Planned vs Actual",
    description:
      "See the difference between what you planned and what you actually studied.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: FileTextIcon,
    title: "Study Notes",
    description:
      "Organize your materials with notes in plain text or Markdown.",
    color: "from-teal-500 to-green-500",
  },
  {
    icon: UsersIcon,
    title: "Community (coming soon)",
    description: "Connect with other students and share your progress.",
    color: "from-yellow-500 to-orange-500",
  },
];

export function Features() {
  return (
    <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Everything you need to study better
          </h2>
          <p className="text-xl text-gray-600">
            Simple and effective tools in one place
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="rounded-xl bg-white p-6 transition-shadow hover:shadow-lg"
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${feature.color}`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
