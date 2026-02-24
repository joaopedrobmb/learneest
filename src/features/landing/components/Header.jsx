import { useState } from "react";
import { Logo } from "../../../shared/brand/Logo";
import { MenuIcon, XIcon } from "./icons";

export function Header({ onCtaClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCta = () => {
    if (onCtaClick) {
      onCtaClick();
      return;
    }
    document
      .getElementById("features")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo className="h-10 w-10" />
            <span className="text-xl font-semibold text-gray-900">
              Learneest
            </span>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-gray-600 transition-colors hover:text-gray-900"
            >
              Features
            </a>
            <a
              href="#how"
              className="text-gray-600 transition-colors hover:text-gray-900"
            >
              How it works
            </a>
            <a
              href="#about"
              className="text-gray-600 transition-colors hover:text-gray-900"
            >
              About
            </a>
            <button
              type="button"
              onClick={handleCta}
              className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 text-white transition-shadow hover:shadow-lg"
            >
              Get Started
            </button>
          </div>

          <button
            type="button"
            className="text-gray-600 transition-colors hover:text-gray-900 md:hidden"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen((value) => !value)}
          >
            {isMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMenuOpen ? (
          <div className="space-y-4 py-4 md:hidden">
            <a
              href="#features"
              className="block text-gray-600 transition-colors hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how"
              className="block text-gray-600 transition-colors hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              How it works
            </a>
            <a
              href="#about"
              className="block text-gray-600 transition-colors hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <button
              type="button"
              onClick={() => {
                setIsMenuOpen(false);
                handleCta();
              }}
              className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 text-white transition-shadow hover:shadow-lg"
            >
              Get Started
            </button>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
