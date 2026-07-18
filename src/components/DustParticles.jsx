import { useMemo } from "react";

/** Floating dust motes for ambient museum atmosphere. */
export default function DustParticles({ count = 40 }) {
  const dust = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 6,
        duration: 6 + Math.random() * 8,
        size: 1 + Math.random() * 2,
      })),
    [count],
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {dust.map((d) => (
        <span
          key={d.id}
          className="dust"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
