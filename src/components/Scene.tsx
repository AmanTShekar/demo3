export function MountainSilhouette() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1]" aria-hidden="true">
      <svg viewBox="0 0 1440 180" preserveAspectRatio="none" className="block h-[120px] w-full sm:h-[170px]">
        <path
          d="M0 180V96l90-38 70 26 110-52 96 40 84-28 120 56 90-30 110-64 96 48 90-24 120 40 84-20 130 62 100-44 140 34V180Z"
          fill="#0b211c"
          opacity="0.92"
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

export function Snowfall({ count = 26 }: { count?: number }) {
  const flakes = Array.from({ length: count }).map((_, i) => ({
    left: (i * 37 + 13) % 100,
    size: 3 + (i % 4),
    delay: (i % 11) * 0.9,
    duration: 7 + (i % 6),
    opacity: 0.35 + ((i % 5) * 0.12),
  }));
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
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
