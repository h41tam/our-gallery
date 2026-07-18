import { useState, useEffect, useRef, useCallback } from "react";
import Cursor from "./components/Cursor.jsx";
import Spotlight from "./components/Spotlight.jsx";
import DustParticles from "./components/DustParticles.jsx";
import Entrance from "./sections/Entrance.jsx";
import Gallery from "./sections/Gallery.jsx";
import FinalRoom from "./sections/FinalRoom.jsx";
import { useLenis } from "./hooks/useLenis.js";
import { motion } from "framer-motion";

/**
 * Root of the birthday museum experience.
 * Locks scroll during the entrance, then unlocks the gallery.
 */
export default function App() {
  const [entered, setEntered] = useState(false);
  const audioRef = useRef(null);
  const [musicOn, setMusicOn] = useState(false);
  useLenis();

  // Lock body scroll while the entrance plays.
  if (typeof document !== "undefined") {
    document.body.style.overflow = entered ? "" : "hidden";
  }

  // Auto-play music when user enters the gallery
  useEffect(() => {
    const a = audioRef.current;
    if (!a || !entered) return;
    
    // Volume: 0 is silent, 1 is maximum, adjust this to change volume!
    a.volume = 0.05; // Change this value (0-1) to adjust volume!
    const play = () => a.play().then(() => setMusicOn(true)).catch(() => {});
    
    // Try to play after a short delay
    setTimeout(play, 1000);
  }, [entered]);

  const toggleMusic = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      a.play().then(() => setMusicOn(true)).catch(() => {});
    } else {
      a.pause();
      setMusicOn(false);
    }
  };

  const handleEnter = useCallback(() => {
    setEntered(true);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#090909] text-[#f7f5f2] grain">
      <Cursor />
      <Spotlight />
      <DustParticles />

      {/* Global music player - add your song to /public/music/ folder! */}
      <audio
        ref={audioRef}
        loop
        src="/music/music.mp3"
        onError={(e) => {
          // Fallback to the default piano music if your song isn't found
          e.target.src = "https://cdn.pixabay.com/download/audio/2022/03/15/audio_1b19051a9d.mp3?filename=relaxing-piano-music-24149.mp3";
        }}
      />

      <motion.button
        data-cursor="hover"
        onClick={toggleMusic}
        className="glass fixed bottom-8 right-8 z-50 rounded-full px-5 py-3 text-[10px] uppercase tracking-[0.3em] text-[#f7f5f2]/80 hover:text-[#f4d47c] transition"
        initial={{ opacity: 0 }}
        animate={{ opacity: entered ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {musicOn ? "♪ music on" : "♪ play music"}
      </motion.button>

      <Entrance onEnter={handleEnter} />

      <div
        style={{
          opacity: entered ? 1 : 0,
          transition: "opacity 2s ease 0.5s",
        }}
      >
        <Gallery />
        <FinalRoom />
      </div>
    </main>
  );
}
