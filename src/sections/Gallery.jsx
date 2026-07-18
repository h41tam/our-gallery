import { motion } from "framer-motion";
import Room from "../components/Room.jsx";
import Frame from "../components/Frame.jsx";
import {
  ArtBeginning,
  ArtConversation,
  ArtMoments,
  ArtThingsILove,
  ArtDreams,
} from "../components/Artworks.jsx";

/** All the exhibition rooms except the finale. */
export default function Gallery() {
  // CUSTOMIZE THESE TEXT VALUES TO MAKE IT YOUR OWN!
  const exhibitionIntro = {
    subtitle: "Our Story",
    title: "A Love",
    titleLine2: "Worth Framing",
    description: "Five chapters. Us. Take your time to read it — each frame holds a feeling. Tap them for a little note <3"
  };
  
  const chapters = [
    {
      chapter: "Chapter One",
      title: "How It Started",
      frameSubtitle: "Our First Conversation",
      frameTitle: "Shkon Msiftk Lya",
      frameNote: "I'll never forget the first time we talked. Everything started in that moment.",
      artwork: <ArtBeginning />
    },
    {
      chapter: "Chapter Two",
      title: "Fuck The Distance",
      frameSubtitle: "The first date",
      frameTitle: "Nzli, Ana Wslt",
      frameNote: "That day I came to your city. We started a new chapter. Dreams became goals.",
      artwork: <ArtConversation />
    },
    {
      chapter: "Chapter Three",
      title: "Favorite Moments",
      frameSubtitle: "All the little things",
      frameTitle: "Remember When",
      frameNote: "I can never favor some memories above the others, because every moment with you is special.",
      artwork: <ArtMoments />
    },
    {
      chapter: "Chapter Four",
      title: "Things I Love About You",
      frameSubtitle: "Everything",
      frameTitle: "Koulshi",
      frameNote: "Your presence brings joy upon everyone in your life and I am blessed to be with you. I love everything about you and soon enough you'll read a book about that",
      artwork: <ArtThingsILove />
    },
    {
      chapter: "Chapter Five",
      title: "Dreams Together",
      frameSubtitle: "Our future",
      frameTitle: "Ana Wyak Baby",
      frameNote: "I can't wait to build our future together. Get married, travel the world, and live together. One day at a time.",
      artwork: <ArtDreams />
    }
  ];

  return (
    <>
      {/* Museum entrance hallway */}
      <section className="relative flex min-h-screen items-center justify-center px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-6 text-[10px] uppercase tracking-[0.6em] text-[#b8912a]">
            {exhibitionIntro.subtitle}
          </p>
          <h1 className="font-serif text-6xl md:text-8xl italic text-gold-gradient leading-none">
            {exhibitionIntro.title}
            <br />
            {exhibitionIntro.titleLine2}
          </h1>
          <p className="mx-auto mt-10 max-w-md text-sm leading-loose text-[#f7f5f2]/50">
            {exhibitionIntro.description}
          </p>
          <motion.div
            className="mx-auto mt-16 h-16 w-px bg-gradient-to-b from-transparent via-[#d4af37] to-transparent"
            animate={{ scaleY: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </section>

      {chapters.map((chapter, index) => (
        <Room key={index} chapter={chapter.chapter} title={chapter.title}>
          <Frame
            subtitle={chapter.frameSubtitle}
            title={chapter.frameTitle}
            note={chapter.frameNote}
            className={index === 3 ? "w-[min(70vw,520px)] aspect-[3/4]" : undefined}
          >
            {chapter.artwork}
          </Frame>
        </Room>
      ))}
    </>
  );
}
