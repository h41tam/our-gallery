import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * A single full-viewport exhibition room. Provides parallax scroll motion.
 */
export default function Room({ chapter, title, children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.96]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0.2],
  );

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen w-full flex-col items-center justify-center px-6 py-32"
    >
      <motion.div
        style={{ y, scale, opacity }}
        className="relative flex w-full flex-col items-center gap-16"
      >
        {(chapter || title) && (
          <div className="text-center">
            {chapter && (
              <motion.p
                initial={{ opacity: 0, letterSpacing: "0.1em" }}
                whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
                viewport={{ once: true }}
                transition={{ duration: 1.4 }}
                className="mb-4 text-[10px] uppercase text-[#b8912a]"
              >
                {chapter}
              </motion.p>
            )}
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-5xl md:text-7xl italic text-gold-gradient"
              >
                {title}
              </motion.h2>
            )}
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
}
