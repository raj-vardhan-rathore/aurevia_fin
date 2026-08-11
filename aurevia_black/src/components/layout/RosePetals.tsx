const PETALS = Array.from({ length: 10 }, (_, i) => i);

/**
 * A handful of small, softly-drifting petal shapes. Purely decorative and
 * disabled automatically under prefers-reduced-motion (global CSS freezes
 * all animations for that preference).
 */
export function RosePetals() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {PETALS.map((i) => {
        const left = (i * 97) % 100;
        const duration = 10 + (i % 5) * 2.5;
        const delay = (i % 6) * 1.4;
        const size = 6 + (i % 3) * 3;
        return (
          <svg
            key={i}
            viewBox="0 0 24 24"
            className="absolute animate-petal text-wine"
            style={{
              left: `${left}%`,
              top: `${-10 - (i % 4) * 6}%`,
              width: size,
              height: size,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          >
            <path
              d="M12 2C7 6 5 10 5 13.5A7 7 0 0 0 12 20.5A7 7 0 0 0 19 13.5C19 10 17 6 12 2Z"
              fill="currentColor"
            />
          </svg>
        );
      })}
    </div>
  );
}
