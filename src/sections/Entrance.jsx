import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Cinematic entrance: fade-in quotes, then museum doors open and the
 * camera moves forward. Calls `onEnter` when the sequence finishes.
 */
export default function Entrance({ onEnter }) {
  // CUSTOMIZE THESE QUOTES!
  const quotes = [
    "Every love story is a masterpiece.",
    "Welcome to our gallery."
  ];

  const [phase, setPhase] = useState(0);
  const hasStartedRef = useRef(false);
  // 0: quote 1, 1: quote 2, 2: quote fades out, 3: doors visible,
  // 4: doors opening, 5: done

  useEffect(() => {
    if (hasStartedRef.current) return;
    hasStartedRef.current = true;

    const timers = [
      setTimeout(() => setPhase(1), 3200),
      // Let the second quote finish and fully fade before doors appear.
      setTimeout(() => setPhase(2), 6800),
      setTimeout(() => setPhase(3), 8200),
      setTimeout(() => setPhase(4), 9400),
      setTimeout(() => {
        setPhase(5);
        onEnter && onEnter();
      }, 12800),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onEnter]);

  if (phase === 5) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505] overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: phase >= 4 ? 0 : 1 }}
      transition={{ duration: 3, delay: phase >= 4 ? 2 : 0 }}
    >
      {/* Quotes */}
      <AnimatePresence mode="wait">
        {phase < 2 && (
          <motion.div
            key={phase}
            initial={{ opacity: 0, y: 20, letterSpacing: "0.05em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.15em" }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="px-8 text-center"
          >
            <p className="font-serif text-3xl md:text-5xl italic text-[#f7f5f2]/90 max-w-3xl leading-relaxed">
              {quotes[phase]}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Doors */}
      {phase >= 3 && (
        <>
          <motion.div
            className="door left"
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: phase >= 4 ? "-100%" : 0, opacity: 1 }}
            transition={{ duration: 3.2, ease: [0.65, 0, 0.35, 1] }}
          />
          <motion.div
            className="door right"
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: phase >= 4 ? "100%" : 0, opacity: 1 }}
            transition={{ duration: 3.2, ease: [0.65, 0, 0.35, 1] }}
          />

          {/* Light behind doors */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 4 ? 1 : 0 }}
            transition={{ duration: 3, delay: 0.5 }}
          >
            <div
              className="h-[90vh] w-[90vh] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(244,212,124,0.35) 0%, rgba(212,175,55,0.1) 40%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />
          </motion.div>
        </>
      )}
    </motion.div>
  );
}
