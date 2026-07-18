import { motion } from "framer-motion";
import Petals from "../components/Petals.jsx";
import Sparkles from "../components/Sparkles.jsx";

/**
 * The Greatest Masterpiece — final oversized frame with
 * falling petals, and the heartfelt birthday message.
 */
export default function FinalRoom() {
  return (
    <section className="relative flex min-h-[140vh] flex-col items-center justify-center overflow-hidden px-6 py-32">
      <Petals count={35} />
      <Sparkles count={10} />

      <motion.p
        initial={{ opacity: 0, letterSpacing: "0.2em" }}
        whileInView={{ opacity: 1, letterSpacing: "0.6em" }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="mb-8 text-[11px] uppercase text-[#b8912a]"
      >
        The Greatest Masterpiece
      </motion.p>

      {/* Oversized frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 60 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        className="frame-gold relative w-[min(85vw,700px)] aspect-[3/4]"
        data-cursor="hover"
      >
        <div className="frame-inner flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-[#12100a] via-[#0a0a0a] to-[#050505] p-8">
          {/* Mirror-like reflection: a soft glowing "you" */}
          <motion.div
            className="mb-8 h-32 w-32 rounded-full"
            style={{
              background:
                "radial-gradient(circle, #f4d47c 0%, #d4af37 40%, transparent 75%)",
              filter: "blur(6px)",
            }}
            animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <p className="handwritten text-3xl md:text-4xl text-center text-[#f7f5f2] leading-relaxed max-w-md">
            You are my favorite
            <br />
            story,
            <br />
            my favorite art.
          </p>
        </div>
      </motion.div>

      {/* Final message */}
      <div className="mt-24 max-w-2xl text-center">
        {[
          "Every moment with you is a treasure.",
          "Thank you for being you.",
          "Here's to all the beautiful chapters ahead."
        ].map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 * i }}
            className="font-serif text-2xl md:text-3xl italic text-[#f7f5f2]/85 mb-4 leading-relaxed"
          >
            {line}
          </motion.p>
        ))}

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 font-serif text-6xl md:text-8xl italic text-gold-gradient"
        >
          I Love You <span className="text-[#d4af37]">❤ .</span> 
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 2.4 }}
          className="mt-24 text-[10px] uppercase tracking-[0.6em] text-[#b8912a]"
        >
          Made by Haitam with love, just for you. Manal.
        </motion.p>
      </div>
    </section>
  );
}
