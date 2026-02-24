function BaseIcon({ children, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function BookOpenIcon(props) {
  return (
    <BaseIcon {...props}>
      <path
        d="M17.04 1.12 L15.82 1.49 L14.92 1.98 L13.98 1.82 L12.88 1.82 L12.10 1.98 L11.12 1.37 L10.06 1.00 L10.10 1.82 L10.51 3.08 L10.02 4.06 L9.82 5.65 L9.57 6.51 L8.88 7.69 L7.41 9.45 L6.06 11.73 L4.88 14.63 L4.41 15.51 L3.86 16.49 L3.45 17.39 L3.08 18.16 L2.86 18.57 L2.69 18.90 L2.63 19.20 L2.63 19.45 L2.69 19.65 L2.82 19.82 L3.08 20.08 L3.45 20.29 L4.04 20.49 L4.86 20.61 L6.00 20.67 L7.57 20.63 L8.29 20.49 L9.31 20.18 L10.20 19.84 L10.84 19.49 L11.27 19.20 L11.65 18.90 L12.12 18.57 L12.57 18.12 L12.94 17.63 L13.25 17.10 L13.43 16.57 L13.51 16.00 L13.45 15.39 L13.27 14.73 L13.04 14.16 L12.94 13.71 L12.98 13.31 L13.10 12.90 L13.33 12.49 L13.69 12.12 L14.31 11.63 L15.20 10.98 L16.20 10.12 L16.96 9.12 L17.47 8.10 L17.80 6.90 L17.88 5.55 L17.72 4.04 L17.43 3.08 L17.16 2.24 L17.04 1.12 Z
        M9.94 16.67 L9.69 17.20 L9.61 17.29 L9.57 17.41 L9.37 17.65 L9.20 17.94 L8.39 18.80 L8.35 18.80 L7.94 19.16 L7.90 19.16 L7.49 19.39 L7.45 19.39 L7.16 19.55 L7.12 19.55 L6.86 19.65 L6.82 19.65 L6.65 19.71 L6.53 19.71 L6.33 19.73 L6.10 19.71 L5.96 19.69 L5.71 19.61 L5.53 19.53 L5.39 19.45 L5.24 19.35 L5.16 19.27 L5.10 19.18 L5.08 19.12 L5.08 19.04 L5.10 18.96 L5.16 18.86 L5.29 18.69 L5.47 18.47 L5.73 18.18 L6.06 17.82 L6.43 17.41 L6.86 16.94 L7.27 16.45 L7.61 16.10 L7.88 15.86 L8.12 15.71 L8.35 15.67 L8.61 15.69 L8.86 15.76 L9.10 15.88 L9.33 16.06 L9.57 16.29 L9.94 16.67 Z"
      />
    </BaseIcon>
  );
}

export function SubjectsHubIcon(props) {
  return (
    <BaseIcon {...props}>
      <rect x="3" y="7" width="10" height="12" rx="2" />
      <rect x="11" y="5" width="10" height="12" rx="2" />
      <path d="M6 11h4M6 14h3" />
      <path d="M14 9h4M14 12h4" />
      <path d="M8 5V4.5A1.5 1.5 0 0 1 9.5 3h3A1.5 1.5 0 0 1 14 4.5V5" />
    </BaseIcon>
  );
}

export function MenuIcon(props) {
  return (
    <BaseIcon {...props}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </BaseIcon>
  );
}

export function XIcon(props) {
  return (
    <BaseIcon {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </BaseIcon>
  );
}

export function ArrowRightIcon(props) {
  return (
    <BaseIcon {...props}>
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </BaseIcon>
  );
}

export function SparklesIcon(props) {
  return (
    <BaseIcon {...props}>
      <path d="m12 3 1.8 3.7L18 8.5l-3.2 2.6.9 4-3.7-2-3.7 2 .9-4L6 8.5l4.2-1.8z" />
    </BaseIcon>
  );
}

export function TargetIcon(props) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </BaseIcon>
  );
}

export function ClockIcon(props) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v6l4 2" />
    </BaseIcon>
  );
}

export function CheckCircleIcon(props) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.2 2.2 4.8-4.8" />
    </BaseIcon>
  );
}

export function TimerIcon(props) {
  return (
    <BaseIcon {...props}>
      <path d="M9 2h6" />
      <path d="M12 9v4" />
      <circle cx="12" cy="14" r="8" />
    </BaseIcon>
  );
}

export function FileTextIcon(props) {
  return (
    <BaseIcon {...props}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h6" />
    </BaseIcon>
  );
}

export function PlayIcon(props) {
  return (
    <BaseIcon {...props}>
      <path d="m8 6 10 6-10 6z" fill="currentColor" stroke="none" />
    </BaseIcon>
  );
}

export function PauseIcon(props) {
  return (
    <BaseIcon {...props}>
      <path d="M8 6h3v12H8zM13 6h3v12h-3z" fill="currentColor" stroke="none" />
    </BaseIcon>
  );
}

export function CheckIcon(props) {
  return (
    <BaseIcon {...props}>
      <path d="m5 12 4 4 10-10" />
    </BaseIcon>
  );
}

export function CalendarIcon(props) {
  return (
    <BaseIcon {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </BaseIcon>
  );
}

export function BarChartIcon(props) {
  return (
    <BaseIcon {...props}>
      <path d="M4 20V10M10 20V6M16 20v-8M22 20H2" />
    </BaseIcon>
  );
}

export function TrendingUpIcon(props) {
  return (
    <BaseIcon {...props}>
      <path d="m3 17 6-6 4 4 8-8" />
      <path d="M14 7h7v7" />
    </BaseIcon>
  );
}

export function MessageCircleIcon(props) {
  return (
    <BaseIcon {...props}>
      <path d="M21 12a8.5 8.5 0 0 1-8.5 8.5H4l2.3-3.8A8.5 8.5 0 1 1 21 12Z" />
    </BaseIcon>
  );
}

export function BellIcon(props) {
  return (
    <BaseIcon {...props}>
      <path d="M15 18H9" />
      <path d="M18 16v-5a6 6 0 1 0-12 0v5l-2 2h16z" />
    </BaseIcon>
  );
}

export function UsersIcon(props) {
  return (
    <BaseIcon {...props}>
      <path d="M16 19a4 4 0 0 0-8 0" />
      <circle cx="12" cy="11" r="3" />
      <path d="M22 19a4 4 0 0 0-3-3.87M2 19a4 4 0 0 1 3-3.87" />
    </BaseIcon>
  );
}

export function ZapIcon(props) {
  return (
    <BaseIcon {...props}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </BaseIcon>
  );
}

export function MailIcon(props) {
  return (
    <BaseIcon {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </BaseIcon>
  );
}

export function GithubIcon(props) {
  return (
    <BaseIcon {...props}>
      <path d="M9 19c-4 1.2-4-2-6-2" />
      <path d="M15 21v-3.5a3.3 3.3 0 0 0-1-2.6c3.3-.4 6.8-1.6 6.8-7.1a5.6 5.6 0 0 0-1.5-3.9 5.2 5.2 0 0 0-.1-3.9S18 0 15 2a13 13 0 0 0-6 0C6 0 4.8 0 4.8 0a5.2 5.2 0 0 0-.1 3.9 5.6 5.6 0 0 0-1.5 3.9c0 5.5 3.5 6.7 6.8 7.1a3.3 3.3 0 0 0-1 2.6V21" />
    </BaseIcon>
  );
}

export function TwitterIcon(props) {
  return (
    <BaseIcon {...props}>
      <path d="M22 5.8c-.7.3-1.5.5-2.3.6a4 4 0 0 0 1.7-2.2 8.1 8.1 0 0 1-2.6 1 4 4 0 0 0-6.8 3.7A11.3 11.3 0 0 1 3 4.9a4 4 0 0 0 1.2 5.3 4 4 0 0 1-1.8-.5v.1a4 4 0 0 0 3.2 3.9 4 4 0 0 1-1.8.1 4 4 0 0 0 3.7 2.8A8.1 8.1 0 0 1 2 18.3a11.4 11.4 0 0 0 6.2 1.8c7.4 0 11.5-6.1 11.5-11.4v-.5A8 8 0 0 0 22 5.8" />
    </BaseIcon>
  );
}

export function LinkedinIcon(props) {
  return (
    <BaseIcon {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 11v6M8 8v.01M12 17v-3.5a2.5 2.5 0 0 1 5 0V17" />
    </BaseIcon>
  );
}
