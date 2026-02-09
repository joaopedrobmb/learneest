import { useState } from "react";
import { Logo } from "../../../shared/brand/Logo";
import { MenuIcon, XIcon } from "./icons";

type HeaderProps = {
  onCtaClick: () => void;
};

export function Header({ onCtaClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#top"
            className="flex items-center gap-2"
            aria-label="Learneest home"
          >
            <Logo className="h-9 w-9" />
            <span className="text-xl font-semibold text-gray-900">
              Learneest
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-gray-600 transition-colors hover:text-gray-900"
            >
              Features
            </a>
            <a
              href="#about"
              className="text-gray-600 transition-colors hover:text-gray-900"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-600 transition-colors hover:text-gray-900"
            >
              Contact
            </a>
            <button
              type="button"
              onClick={onCtaClick}
              className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 text-white transition-shadow hover:shadow-lg"
            >
              Get Started
            </button>
          </div>

          <button
            type="button"
            className="p-2 md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <XIcon className="h-6 w-6 text-gray-900" />
            ) : (
              <MenuIcon className="h-6 w-6 text-gray-900" />
            )}
          </button>
        </div>

        {isMenuOpen ? (
          <div className="border-t border-gray-100 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <a
                href="#features"
                className="text-gray-600 transition-colors hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#about"
                className="text-gray-600 transition-colors hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-600 transition-colors hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <button
                type="button"
                onClick={() => {
                  setIsMenuOpen(false);
                  onCtaClick();
                }}
                className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 text-white transition-shadow hover:shadow-lg"
              >
                Get Started
              </button>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
