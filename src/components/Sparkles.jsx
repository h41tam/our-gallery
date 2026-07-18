import { useMemo } from "react";

/** Tiny twinkling sparkle overlay. */
export default function Sparkles({ count = 8 }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 2,
      })),
    [count],
  );
  return (
    <div className="pointer-events-none absolute inset-0">
      {items.map((s) => (
        <span
          key={s.id}
          className="sparkle"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
