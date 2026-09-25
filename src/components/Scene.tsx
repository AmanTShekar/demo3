export function MountainSilhouette() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1]" aria-hidden="true">
      <svg viewBox="0 0 1440 180" preserveAspectRatio="none" className="block h-[120px] w-full sm:h-[170px]">
        <path
          d="M0 180V96l90-38 70 26 110-52 96 40 84-28 120 56 90-30 110-64 96 48 90-24 120 40 84-20 130 62 100-44 140 34V180Z"
          fill="#0b211c"
          opacity="0.92"
        />
        <path
          d="M205 65l65-31 42 18-25 4-17 15-18-8-20 12-15-8-18 10Z
             M764 60l67-39 51 26-28 2-19 15-21-8-18 12-17-8-15 9Z
             M1154 73l66-32 49 18-25 5-19 12-19-7-21 11-15-7-16 9Z"
          fill="#f8fbf7"
          opacity="0.9"
        />
      </svg>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-[70px] w-full sm:h-[100px]"
      >
        <path
          d="M0 120V64l120-30 90 22 130-44 110 36 90-20 140 48 100-26 120 30 90-16 150 40 100-24 120 30 90-14V120Z"
          fill="#071814"
        />
      </svg>
    </div>
  );
}

export function Snowman() {
  return (
    <div className="pointer-events-none absolute right-5 bottom-6 z-[2] hidden sm:block" aria-hidden="true">
      <svg viewBox="0 0 100 130" className="h-28 w-24 drop-shadow-lg">
        <ellipse cx="50" cy="119" rx="34" ry="7" fill="#061612" opacity="0.35" />
        <circle cx="50" cy="91" r="28" fill="#f8fbf7" />
        <circle cx="50" cy="55" r="22" fill="#fff" />
        <circle cx="43" cy="51" r="3" fill="#142c25" />
        <circle cx="58" cy="51" r="3" fill="#142c25" />
        <path d="M48 57l17 4-16 5z" fill="#d8863a" />
        <path d="M41 67c6 5 13 5 19 0" fill="none" stroke="#142c25" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M30 73c12 7 29 7 40 0l-2 12c-12 6-26 6-36 0z" fill="#b94f42" />
        <circle cx="50" cy="87" r="3" fill="#142c25" />
        <circle cx="50" cy="101" r="3" fill="#142c25" />
        <path d="M31 87L12 78M69 87l19-10" stroke="#7a4c2d" strokeWidth="3" strokeLinecap="round" />
        <path d="M31 37c4-14 36-14 39 0z" fill="#b94f42" />
        <path d="M27 38h47" stroke="#f8fbf7" strokeWidth="5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export function Snowfall({
  count = 26,
  className = "absolute inset-0",
}: {
  count?: number;
  className?: string;
}) {
  const flakes = Array.from({ length: count }).map((_, i) => ({
    left: (i * 37 + 13) % 100,
    size: 3 + (i % 4),
    delay: (i % 11) * 0.9,
    duration: 7 + (i % 6),
    opacity: 0.35 + ((i % 5) * 0.12),
  }));
  return (
    <div className={`pointer-events-none overflow-hidden ${className}`} aria-hidden="true">
      {flakes.map((f, i) => (
        <span
          key={i}
          className="snow"
          style={{
            left: `${f.left}%`,
            width: f.size,
            height: f.size,
            opacity: f.opacity,
            animationDelay: `${f.delay}s`,
            animationDuration: `${f.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

export function MistBand() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-24 z-[1] h-40 overflow-hidden sm:bottom-28" aria-hidden="true">
      <div className="mist-a absolute inset-x-[-10%] top-6 h-16 rounded-[100%] bg-mist/25" />
      <div className="mist-b absolute inset-x-[-14%] top-16 h-20 rounded-[100%] bg-glacier/30" />
      <div className="mist-a absolute inset-x-[-8%] top-28 h-12 rounded-[100%] bg-mist/20" />
    </div>
  );
}
