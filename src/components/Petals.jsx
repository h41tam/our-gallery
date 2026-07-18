import { useMemo } from "react";

/** Slow-falling gold flower petals for the final room. */
export default function Petals({ count = 30 }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 10 + Math.random() * 10,
        size: 10 + Math.random() * 12,
      })),
    [count],
  );

  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
