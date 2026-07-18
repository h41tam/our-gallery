import { useState } from "react";
import { motion } from "framer-motion";

/**
 * Ornate gold picture frame with hover 3D tilt and click-to-reveal note.
 * Props:
 *  - children: content of the artwork (image or composed scene)
 *  - title: caption below the frame
 *  - note: hidden message shown on click
 *  - width/height in tailwind classes
 */
export default function Frame({
  children,
  title,
  subtitle,
  note,
  className = "w-[min(85vw,780px)] aspect-[4/5]",
}) {
  const [open, setOpen] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: py * -8, y: px * 8 });
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <motion.div
        data-cursor="hover"
        onMouseMove={onMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        onClick={() => note && setOpen((v) => !v)}
        style={{
          transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: "preserve-3d",
        }}
        className={`frame-gold ${className} transition-transform duration-300 ease-out ${note ? "cursor-none" : ""}`}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="frame-inner h-full w-full bg-[#0a0a0a]">
          {children}

          {/* Hidden note overlay */}
          {note && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center p-8 text-center"
              initial={false}
              animate={{
                opacity: open ? 1 : 0,
                backdropFilter: open ? "blur(12px)" : "blur(0px)",
              }}
              style={{
                background: open ? "rgba(9,9,9,0.75)" : "transparent",
                pointerEvents: open ? "auto" : "none",
              }}
              transition={{ duration: 0.6 }}
            >
              <p className="handwritten text-2xl md:text-3xl leading-relaxed text-ivory">
                {note}
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>

      {(title || subtitle) && (
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          {subtitle && (
            <p className="mb-2 text-[10px] uppercase tracking-[0.4em] text-gold-soft text-[#b8912a]">
              {subtitle}
            </p>
          )}
          {title && (
            <h3 className="font-serif text-3xl md:text-4xl italic text-ivory text-[#f7f5f2]">
              {title}
            </h3>
          )}
          {note && (
            <p className="mt-3 text-xs uppercase tracking-[0.3em] text-[#f7f5f2]/40">
              — tap the artwork —
            </p>
          )}
        </motion.div>
      )}
    </div>
  );
}
