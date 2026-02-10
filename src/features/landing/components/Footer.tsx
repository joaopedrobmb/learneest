import { Logo } from "../../../shared/brand/Logo";
import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from "./icons";

export function Footer() {
  return (
    <footer className="bg-gray-900 px-4 py-12 text-gray-300 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Logo className="h-10 w-10" />
              <span className="text-xl font-semibold text-white">
                Learneest
              </span>
            </div>
            <p className="text-sm text-gray-400">
              A free study platform, made by students for students.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Get Started
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="transition-colors hover:text-white"
                >
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="transition-colors hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:hello@learneest.com"
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <MailIcon className="h-4 w-4" />
                  hello@learneest.com
                </a>
              </li>
            </ul>
            <div className="mt-4 flex gap-4">
              <a
                href="#"
                className="transition-colors hover:text-white"
                aria-label="GitHub"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="transition-colors hover:text-white"
                aria-label="Twitter"
              >
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="transition-colors hover:text-white"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Learneest. Made with 🦉 for
            students.
          </p>
        </div>
      </div>
    </footer>
  );
}
