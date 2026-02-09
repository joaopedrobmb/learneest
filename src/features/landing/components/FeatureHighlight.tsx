import { useEffect, useState } from "react";
import {
  CheckIcon,
  FileTextIcon,
  PauseIcon,
  PlayIcon,
  TimerIcon,
} from "./icons";

export function FeatureHighlight() {
  const [activeTab, setActiveTab] = useState<"pomodoro" | "notes">("pomodoro");
  const [time, setTime] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (isRunning && time > 0) {
      interval = setInterval(() => setTime((value) => value - 1), 1000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning, time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Powerful tools{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              built for focus
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Study smarter with integrated Pomodoro timer and smart note-taking
          </p>
        </div>

        <div className="mb-8 flex justify-center gap-4">
          <button
            type="button"
            onClick={() => setActiveTab("pomodoro")}
            className={`flex items-center gap-2 rounded-lg px-6 py-3 transition-all ${
              activeTab === "pomodoro"
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            <TimerIcon className="h-5 w-5" />
            Pomodoro Timer
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("notes")}
            className={`flex items-center gap-2 rounded-lg px-6 py-3 transition-all ${
              activeTab === "notes"
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            <FileTextIcon className="h-5 w-5" />
            Study Notes
          </button>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            {activeTab === "pomodoro" ? (
              <div className="rounded-2xl border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-purple-50 p-8">
                <div className="rounded-xl bg-white p-8 shadow-lg">
                  <div className="mb-6 text-center">
                    <h3 className="mb-2 text-2xl font-semibold text-gray-900">
                      Focus Session
                    </h3>
                    <p className="text-gray-600">
                      Studying: Advanced Mathematics
                    </p>
                  </div>

                  <div className="mb-8 flex justify-center">
                    <div className="relative">
                      <div className="flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-purple-100">
                        <div className="flex h-44 w-44 items-center justify-center rounded-full bg-white">
                          <span className="text-5xl font-bold text-gray-900">
                            {String(minutes).padStart(2, "0")}:
                            {String(seconds).padStart(2, "0")}
                          </span>
                        </div>
                      </div>
                      <svg
                        className="absolute left-0 top-0 h-48 w-48 -rotate-90"
                        viewBox="0 0 192 192"
                        aria-hidden="true"
                      >
                        <circle
                          cx="96"
                          cy="96"
                          r="92"
                          stroke="url(#pomodoro-gradient)"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={`${(time / (25 * 60)) * 580} 580`}
                          className="transition-all duration-1000"
                        />
                        <defs>
                          <linearGradient
                            id="pomodoro-gradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#9333ea" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  <div className="flex justify-center gap-4">
                    <button
                      type="button"
                      onClick={() => setIsRunning((value) => !value)}
                      className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 text-white transition-shadow hover:shadow-lg"
                    >
                      {isRunning ? (
                        <>
                          <PauseIcon className="h-5 w-5" />
                          Pause
                        </>
                      ) : (
                        <>
                          <PlayIcon className="h-5 w-5" />
                          Start
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setTime(25 * 60);
                        setIsRunning(false);
                      }}
                      className="rounded-lg border-2 border-gray-300 px-8 py-3 text-gray-700 transition-colors hover:border-gray-400"
                    >
                      Reset
                    </button>
                  </div>

                  <div className="mt-6 rounded-lg border border-green-200 bg-green-50 p-4">
                    <div className="flex items-center gap-2 text-green-700">
                      <CheckIcon className="h-5 w-5" />
                      <span className="text-sm font-medium">
                        Time automatically tracked to your progress
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border-2 border-teal-100 bg-gradient-to-br from-teal-50 to-green-50 p-8">
                <div className="overflow-hidden rounded-xl bg-white shadow-lg">
                  <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-50 p-3">
                    <button
                      type="button"
                      className="rounded border border-gray-300 bg-white px-3 py-1 text-sm hover:bg-gray-50"
                    >
                      <strong>B</strong>
                    </button>
                    <button
                      type="button"
                      className="rounded border border-gray-300 bg-white px-3 py-1 text-sm hover:bg-gray-50"
                    >
                      <em>I</em>
                    </button>
                    <button
                      type="button"
                      className="rounded border border-gray-300 bg-white px-3 py-1 text-sm hover:bg-gray-50"
                    >
                      H1
                    </button>
                    <div className="mx-2 h-6 w-px bg-gray-300" />
                    <span className="text-sm text-gray-500">
                      Markdown supported
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="mb-4 text-xl font-semibold text-gray-900">
                      Calculus - Chapter 3 Notes
                    </h3>
                    <div className="space-y-3 text-gray-700">
                      <p className="font-semibold text-gray-900">
                        ## Key Concepts
                      </p>
                      <p>- Derivatives represent the rate of change</p>
                      <p>- The power rule: d/dx(x^n) = nx^(n-1)</p>
                      <p className="italic text-gray-500">
                        *Remember to practice chain rule examples*
                      </p>
                      <p className="mt-4 font-semibold text-gray-900">
                        ## Example Problem
                      </p>
                      <p className="rounded bg-gray-100 p-2 font-mono text-sm">
                        f(x) = 3x² + 2x - 1
                      </p>
                      <p>Check: **Important for exam** ✓</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-gray-200 bg-gray-50 p-3">
                    <span className="text-sm text-gray-500">
                      Last edited: 2 minutes ago
                    </span>
                    <button
                      type="button"
                      className="text-sm font-medium text-blue-600 hover:text-blue-700"
                    >
                      Save Note
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="order-1 space-y-6 lg:order-2">
            {activeTab === "pomodoro" ? (
              <>
                <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-red-700">
                  <TimerIcon className="h-4 w-4" />
                  <span className="text-sm">Integrated Pomodoro</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Focus with Pomodoro, track automatically
                </h3>
                <p className="text-lg text-gray-600">
                  Use the built-in Pomodoro timer to maintain focus during your
                  study sessions. Every completed session is automatically
                  logged to your personal tracking, giving you accurate data
                  without extra effort.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-700">
                    <CheckIcon className="mt-0.5 h-6 w-6 shrink-0 text-green-500" />
                    <span>
                      <strong>Automatic time tracking</strong> - Focus on
                      studying, we&apos;ll handle the logging
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <CheckIcon className="mt-0.5 h-6 w-6 shrink-0 text-green-500" />
                    <span>
                      <strong>Customizable intervals</strong> - Adjust work and
                      break times to your preference
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <CheckIcon className="mt-0.5 h-6 w-6 shrink-0 text-green-500" />
                    <span>
                      <strong>Subject-based sessions</strong> - Link each
                      Pomodoro to specific subjects or topics
                    </span>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-teal-700">
                  <FileTextIcon className="h-4 w-4" />
                  <span className="text-sm">Smart Study Notes</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Organize your knowledge with smart notes
                </h3>
                <p className="text-lg text-gray-600">
                  Take notes during or after your study sessions with full
                  support for plain text and Markdown formatting. Keep all your
                  materials organized by subject, topic, or date.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-700">
                    <CheckIcon className="mt-0.5 h-6 w-6 shrink-0 text-green-500" />
                    <span>
                      <strong>Markdown support</strong> - Format your notes with
                      headers, lists, code blocks, and more
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <CheckIcon className="mt-0.5 h-6 w-6 shrink-0 text-green-500" />
                    <span>
                      <strong>Link to study sessions</strong> - Attach notes to
                      specific subjects and time periods
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <CheckIcon className="mt-0.5 h-6 w-6 shrink-0 text-green-500" />
                    <span>
                      <strong>Search and organize</strong> - Find your notes
                      quickly with powerful search and tags
                    </span>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
