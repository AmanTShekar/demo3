import type { ReactNode } from "react";

type P = { className?: string; strokeWidth?: number };

function S({ className = "h-5 w-5", strokeWidth = 1.8, children }: P & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function IconMountain({ className }: P) {
  return (
    <S className={className}>
      <path d="M3 19h18" />
      <path d="M5.5 19 10 10.5 13.5 17" />
      <path d="M12.5 17 16.5 9 20.5 19" />
    </S>
  );
}

export function IconCloudMist({ className }: P) {
  return (
    <S className={className}>
      <path d="M17.5 16H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      <path d="M5 19.5h14" />
      <path d="M8 22h8" />
    </S>
  );
}

export function IconFlame({ className }: P) {
  return (
    <S className={className}>
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5Z" />
    </S>
  );
}

export function IconCompass({ className }: P) {
  return (
    <S className={className}>
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </S>
  );
}

export function IconMapPin({ className }: P) {
  return (
    <S className={className}>
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </S>
  );
}

export function IconStar({ className = "h-4 w-4" }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
    </svg>
  );
}

export function IconUsers({ className }: P) {
  return (
    <S className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </S>
  );
}

export function IconCheck({ className = "h-4 w-4" }: P) {
  return (
    <S className={className} strokeWidth={2.2}>
      <path d="M20 6 9 17l-5-5" />
    </S>
  );
}

export function IconArrowRight({ className = "h-4 w-4" }: P) {
  return (
    <S className={className}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </S>
  );
}

export function IconArrowDown({ className }: P) {
  return (
    <S className={className}>
      <path d="M12 5v14" />
      <path d="m6 13 6 6 6-6" />
    </S>
  );
}

export function IconPlus({ className = "h-4 w-4" }: P) {
  return (
    <S className={className}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </S>
  );
}

export function IconMinus({ className = "h-4 w-4" }: P) {
  return (
    <S className={className}>
      <path d="M5 12h14" />
    </S>
  );
}

export function IconClose({ className = "h-5 w-5" }: P) {
  return (
    <S className={className}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </S>
  );
}

export function IconMenu({ className = "h-5 w-5" }: P) {
  return (
    <S className={className}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </S>
  );
}

export function IconCalendar({ className = "h-4 w-4" }: P) {
  return (
    <S className={className}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4" />
      <path d="M8 3v4" />
      <path d="M3 11h18" />
    </S>
  );
}

export function IconPhone({ className }: P) {
  return (
    <S className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
    </S>
  );
}

export function IconDiamond({ className = "h-2 w-2" }: P) {
  return (
    <svg viewBox="0 0 8 8" fill="currentColor" className={className} aria-hidden="true">
      <rect x="1.6" y="1.6" width="4.8" height="4.8" transform="rotate(45 4 4)" />
    </svg>
  );
}
