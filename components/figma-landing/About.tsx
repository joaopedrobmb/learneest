import { CheckCircleIcon } from "./icons";
import { AboutProgressIllustration } from "./Illustrations";

const benefits = [
  "See the gap between planning and reality",
  "Build consistent study habits over time",
  "Data-driven insights into your learning patterns",
  "Accountability through progress tracking",
  "Flexible scheduling that adapts to your life",
  "Future: Learn together with a focused community"
];

type AboutProps = {
  onCtaClick: () => void;
};

export function About({ onCtaClick }: AboutProps) {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <AboutProgressIllustration />
            </div>

            <div className="absolute -bottom-8 -right-2 max-w-xs rounded-xl border border-gray-100 bg-white p-6 shadow-2xl sm:-right-8">
              <div className="text-center">
                <div className="mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent">
                  3.2x
                </div>
                <div className="text-sm text-gray-600">more productive when tracking planned vs actual study time</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                Turn study plans into{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">real progress</span>
              </h2>
              <p className="text-lg text-gray-600">
                Most students struggle with the gap between what they plan to study and what they actually do.
                Learneest makes this gap visible, helping you build better habits and stay accountable to your goals.
                Start as a personal productivity tool, and eventually connect with others who share your learning
                journey.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircleIcon className="mt-0.5 h-6 w-6 shrink-0 text-green-500" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button
                type="button"
                onClick={onCtaClick}
                className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-white transition-shadow hover:shadow-xl"
              >
                Start Tracking Your Progress
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
