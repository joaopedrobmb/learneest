import { useId } from "react";

type LogoProps = {
  className?: string;
};

export function Logo({ className = "w-8 h-8" }: LogoProps) {
  const gradientId = useId();

  const bodyGradient = `${gradientId}-body`;
  const headGradient = `${gradientId}-head`;
  const wingGradient = `${gradientId}-wing`;
  const eyeGradient = `${gradientId}-eye`;
  const beakGradient = `${gradientId}-beak`;
  const chestGradient = `${gradientId}-chest`;

  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <ellipse
        cx="100"
        cy="120"
        rx="55"
        ry="65"
        fill={`url(#${bodyGradient})`}
      />

      <path
        d="M 55 110 Q 35 100 30 120 Q 35 140 50 145 Q 55 135 55 120 Z"
        fill={`url(#${wingGradient})`}
      />
      <path
        d="M 145 110 Q 165 100 170 120 Q 165 140 150 145 Q 145 135 145 120 Z"
        fill={`url(#${wingGradient})`}
      />

      <circle cx="100" cy="80" r="50" fill={`url(#${headGradient})`} />

      <path
        d="M 70 40 Q 65 25 75 35 Q 78 45 75 50 Z"
        fill={`url(#${bodyGradient})`}
      />
      <path
        d="M 130 40 Q 135 25 125 35 Q 122 45 125 50 Z"
        fill={`url(#${bodyGradient})`}
      />

      <circle cx="85" cy="75" r="18" fill="white" />
      <circle cx="115" cy="75" r="18" fill="white" />
      <circle cx="85" cy="75" r="12" fill={`url(#${eyeGradient})`} />
      <circle cx="115" cy="75" r="12" fill={`url(#${eyeGradient})`} />

      <circle cx="87" cy="73" r="6" fill="#1a1a1a" />
      <circle cx="117" cy="73" r="6" fill="#1a1a1a" />

      <circle cx="83" cy="70" r="3" fill="white" opacity="0.8" />
      <circle cx="113" cy="70" r="3" fill="white" opacity="0.8" />

      <path d="M 100 85 L 95 95 L 105 95 Z" fill={`url(#${beakGradient})`} />

      <ellipse
        cx="100"
        cy="140"
        rx="30"
        ry="35"
        fill={`url(#${chestGradient})`}
        opacity="0.3"
      />

      <path
        d="M 90 175 Q 85 185 90 190 Q 95 185 95 175 Z"
        fill={`url(#${wingGradient})`}
        opacity="0.6"
      />
      <path
        d="M 100 178 Q 95 188 100 193 Q 105 188 105 178 Z"
        fill={`url(#${wingGradient})`}
        opacity="0.6"
      />
      <path
        d="M 110 175 Q 105 185 110 190 Q 115 185 115 175 Z"
        fill={`url(#${wingGradient})`}
        opacity="0.6"
      />

      <path
        d="M 85 175 L 82 185 M 85 175 L 88 185 M 85 175 L 85 185"
        stroke={`url(#${beakGradient})`}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 115 175 L 112 185 M 115 175 L 118 185 M 115 175 L 115 185"
        stroke={`url(#${beakGradient})`}
        strokeWidth="2"
        strokeLinecap="round"
      />

      <defs>
        <linearGradient id={bodyGradient} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>

        <linearGradient id={headGradient} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>

        <linearGradient id={wingGradient} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>

        <linearGradient id={eyeGradient} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>

        <linearGradient id={beakGradient} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>

        <linearGradient id={chestGradient} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e0e7ff" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function LogoColored({ className = "w-8 h-8" }: LogoProps) {
  return <Logo className={className} />;
}

export function LogoSimple({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <ellipse cx="100" cy="120" rx="55" ry="65" fill="currentColor" />
      <path
        d="M 55 110 Q 35 100 30 120 Q 35 140 50 145 Q 55 135 55 120 Z"
        fill="currentColor"
      />
      <path
        d="M 145 110 Q 165 100 170 120 Q 165 140 150 145 Q 145 135 145 120 Z"
        fill="currentColor"
      />
      <circle cx="100" cy="80" r="50" fill="currentColor" />
      <path d="M 70 40 Q 65 25 75 35 Q 78 45 75 50 Z" fill="currentColor" />
      <path
        d="M 130 40 Q 135 25 125 35 Q 122 45 125 50 Z"
        fill="currentColor"
      />
      <circle cx="85" cy="75" r="18" fill="white" />
      <circle cx="115" cy="75" r="18" fill="white" />
      <circle cx="85" cy="75" r="10" fill="currentColor" />
      <circle cx="115" cy="75" r="10" fill="currentColor" />
      <circle cx="87" cy="73" r="5" fill="white" opacity="0.5" />
      <circle cx="117" cy="73" r="5" fill="white" opacity="0.5" />
    </svg>
  );
}
