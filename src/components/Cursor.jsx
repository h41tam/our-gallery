import { useEffect, useRef } from "react";

/**
 * Glowing golden custom cursor with a trailing ring.
 * Hovering `[data-cursor="hover"]` elements enlarges the ring.
 */
export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let scale = 1;
    let rafId;

    const move = (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
    };

    const over = (e) => {
      if (e.target.closest('[data-cursor="hover"]')) scale = 1.8;
      else scale = 1;
    };

    const tick = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      ring.style.transform = `translate(${rx - 20}px, ${ry - 20}px) scale(${scale})`;
      rafId = requestAnimationFrame(tick);
    };
    tick();

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />
    </>
  );
}
