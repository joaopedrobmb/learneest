import { Logo } from "../brand/Logo";
import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from "./icons";

export function Footer() {
  return (
    <footer className="bg-gray-900 px-4 py-12 text-gray-300 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 grid md:grid-cols-2">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex items-center gap-2">
              <Logo className="h-9 w-9" />
              <span className="text-xl font-semibold text-white">
                Learneest
              </span>
            </div>
          </div>
          <p className="text-sm text-gray-400">
            A study platform focused on planning, tracking, and real learning
            progress.
          </p>
        </div>

        <div className="flex flex-col items-center justify-between border-t border-gray-800 pt-8">
          <div className="flex gap-4">
            <a
              href="mailto:joaopedrobmb@gmail.com"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-gray-700"
              aria-label="Email"
            >
              <MailIcon className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/joaopedrobmb/learneest"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-gray-700"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
