import { motion } from "framer-motion";

/** Slow-moving golden spotlight gradient for cinematic mood. */
export default function Spotlight() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden spotlight">
      <motion.div
        className="absolute -top-1/4 left-1/2 h-[80vh] w-[80vh] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.10) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{ x: ["-40%", "-60%", "-40%"], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 h-[60vh] w-[60vh] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
