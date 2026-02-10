import { ArrowRightIcon } from "./icons";

type HeroProps = {
  onPrimaryClick?: () => void;
};

export function Hero({ onPrimaryClick }: HeroProps) {
  const handlePrimary = () => {
    if (onPrimaryClick) {
      onPrimaryClick();
      return;
    }
    document
      .getElementById("features")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">
          Organize your studies.{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Track your progress.
          </span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
          Learneest is a free platform to plan, track, and analyze your study
          sessions. Simple, focused, and made for students.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={handlePrimary}
            className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg text-white transition-shadow hover:shadow-lg"
          >
            Get Started
            <ArrowRightIcon className="h-5 w-5" />
          </button>
          <a
            href="#how"
            className="rounded-lg border-2 border-gray-300 px-8 py-4 text-lg text-gray-700 transition-colors hover:border-gray-400"
          >
            Learn More
          </a>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          100% free • No credit card required
        </p>
      </div>
    </section>
  );
}
