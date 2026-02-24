import { BarChartIcon, CalendarIcon, PlayIcon } from "./icons";

const steps = [
  {
    icon: CalendarIcon,
    title: "Plan",
    description:
      "Create your study schedule with subjects, topics, and weekly goals.",
  },
  {
    icon: PlayIcon,
    title: "Execute",
    description:
      "Use the integrated Pomodoro or manually log your study sessions.",
  },
  {
    icon: BarChartIcon,
    title: "Analyze",
    description:
      "Compare planned vs actual and identify patterns in your learning.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            How does it work?
          </h2>
          <p className="text-xl text-gray-600">
            Three simple steps to study better
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="text-center">
                <div className="relative mb-6">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-purple-100">
                    <Icon className="h-10 w-10 text-blue-600" />
                  </div>
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
