import { ArrowRightIcon, SparklesIcon } from "./icons";
import { HeroPlanningIllustration } from "./Illustrations";

type HeroProps = {
  onPrimaryClick: () => void;
};

export function Hero({ onPrimaryClick }: HeroProps) {
  return (
    <section id="top" className="px-4 pb-16 pt-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-blue-700">
              <SparklesIcon className="h-4 w-4" />
              <span className="text-sm">Track your real learning progress</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl font-bold leading-tight text-gray-900 lg:text-6xl">
                Plan, track, and{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  master your studies
                </span>
              </h1>
              <p className="text-xl text-gray-600">
                Learneest helps you organize your study time, compare what you
                planned vs. what you actually studied, and see your real
                learning progress. Stay accountable and achieve your goals.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={onPrimaryClick}
                className="group flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-white transition-shadow hover:shadow-xl"
              >
                Start Planning for Free
                <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="#how-it-works"
                className="rounded-lg border-2 border-gray-300 px-8 py-4 text-center text-gray-700 transition-colors hover:border-gray-400"
              >
                See How It Works
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-gray-900">5k+</div>
                <div className="text-sm text-gray-600">Active students</div>
              </div>
              <div className="h-12 w-px bg-gray-300" />
              <div>
                <div className="text-3xl font-bold text-gray-900">2M+</div>
                <div className="text-sm text-gray-600">Study hours tracked</div>
              </div>
              <div className="h-12 w-px bg-gray-300" />
              <div>
                <div className="text-3xl font-bold text-gray-900">87%</div>
                <div className="text-sm text-gray-600">
                  Goal completion rate
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <HeroPlanningIllustration />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/20 to-purple-100/20" />
            </div>

            <div className="absolute -bottom-6 -left-2 rounded-xl border border-gray-100 bg-white p-6 shadow-xl sm:-left-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Stay on Track
                  </div>
                  <div className="text-sm text-gray-600">
                    See your real vs planned progress
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
