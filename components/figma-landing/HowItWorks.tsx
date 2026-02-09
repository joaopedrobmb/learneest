import { CheckCircleIcon, ClockIcon, TargetIcon } from "./icons";

const steps = [
  {
    icon: TargetIcon,
    number: "01",
    title: "Plan Your Studies",
    description:
      "Create a realistic study schedule with specific goals for each subject. Set how many hours you want to dedicate to each topic.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: ClockIcon,
    number: "02",
    title: "Track Your Time",
    description:
      "Log your actual study sessions as they happen. Record what you studied, for how long, and add notes about your progress.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: CheckCircleIcon,
    number: "03",
    title: "Compare & Improve",
    description:
      "See the difference between your plans and reality. Use insights to adjust your schedule, build better habits, and achieve your goals.",
    color: "from-green-500 to-emerald-500"
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            How <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Learneest works</span>
          </h2>
          <p className="text-xl text-gray-600">Three simple steps to take control of your learning journey</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                {index < steps.length - 1 ? (
                  <div className="absolute left-1/2 top-16 z-0 hidden h-0.5 w-full bg-gradient-to-r from-gray-300 to-gray-200 md:block" />
                ) : null}

                <div className="relative z-10">
                  <div className="mb-6 flex justify-center">
                    <div className={`flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br ${step.color} shadow-lg`}>
                      <Icon className="h-12 w-12 text-white" />
                    </div>
                  </div>

                  <div className="mb-4 text-center">
                    <span className="text-6xl font-bold text-gray-100">{step.number}</span>
                  </div>

                  <div className="text-center">
                    <h3 className="mb-3 text-2xl font-semibold text-gray-900">{step.title}</h3>
                    <p className="leading-relaxed text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-white transition-shadow hover:shadow-xl"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  );
}
