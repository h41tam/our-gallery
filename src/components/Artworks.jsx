import { motion } from "framer-motion";
import Sparkles from "./Sparkles.jsx";

/**
 * Photo displays for each chapter!
 * 
 * HOW TO ADD YOUR PHOTOS:
 * 1. Drop your images into the /public/photos folder
 * 2. Update the photo arrays below with your image filenames
 */

// Replace these with your own photo filenames!
const chapter1Photos = [
  "/photos/conv-1.jpeg",
  "/photos/conv-2.jpeg",
  "/photos/conv-3.jpeg"
];
const chapter2Photos = [
  "/photos/first-date-1.jpeg",
  "/photos/first-date-2.jpeg",
  "/photos/first-date-3.jpeg",
  "/photos/first-date-4.jpeg"
];
const chapter3Photos = [
  "/photos/memories-1.jpeg",
  "/photos/memories-2.jpeg",
  "/photos/memories-3.jpeg",
  "/photos/memories-4.jpeg"
];
const chapter4Photos = [
  "/photos/ily-1.jpeg",
  "/photos/ily-2.jpeg"
];
const chapter5Photos = [
  "/photos/dream-1.jpg",
  "/photos/dream-2.jpg",
  "/photos/dream-3.jpg"
];

// Photo container component with fallback
// Use objectFit: "contain" (no cropping), "cover" (fill the space), "none" (original size)
function PhotoItem({ src, alt, className, objectFit = "contain" }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`h-full w-full ${objectFit === "cover" ? "object-cover" : objectFit === "none" ? "object-none" : "object-contain"} rounded shadow-lg`}
        onError={(e) => {
          // Fallback if image not found
          e.target.style.display = 'none';
          e.target.nextElementSibling.style.display = 'flex';
        }}
      />
      {/* Fallback placeholder when no photo is added */}
      <div className="hidden h-full w-full items-center justify-center bg-gradient-to-br from-[#1a1408] via-[#0a0a0a] to-[#050505] rounded shadow-lg border border-[#d4af37]/20">
        <p className="text-[#b8912a] text-center text-sm handwritten px-4">
          {alt}
        </p>
      </div>
    </div>
  );
}

// Photo grid component that organizes based on photo count
// Options example: { objectFit: "cover", photoClasses: ["h-[90%]", "", ""], gaps: "gap-4" }
function PhotoDisplay({ photos, options = {} }) {
  const { 
    objectFit = "contain", 
    photoClasses = [], 
    gap = "gap-3" 
  } = options;
  
  if (photos.length === 4) {
    // 4 photos: 2x2 grid
    return (
      <div className="relative h-full w-full bg-[#0a0a0a] p-4 overflow-hidden">
        <div className={`h-full w-full grid grid-cols-2 grid-rows-2 ${gap}`}>
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <PhotoItem 
                src={photo} 
                alt={`Photo ${index + 1}`} 
                className={`h-full w-full ${photoClasses[index] || ""}`} 
                objectFit={objectFit}
              />
            </motion.div>
          ))}
        </div>
        <Sparkles count={3} />
      </div>
    );
  } else if (photos.length === 3) {
    // 3 photos: first two side by side, third below
    return (
      <div className="relative h-full w-full bg-[#0a0a0a] p-4 overflow-hidden">
        <div className={`h-full w-full flex flex-col ${gap}`}>
          <div className={`flex-1 flex ${gap}`}>
            {photos.slice(0, 2).map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-1"
              >
                <PhotoItem 
                  src={photo} 
                  alt={`Photo ${index + 1}`} 
                  className={`h-full w-full ${photoClasses[index] || ""}`}
                  objectFit={objectFit}
                />
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`h-[42%] ${photoClasses[2] || ""}`}
          >
            <PhotoItem 
              src={photos[2]} 
              alt="Photo 3" 
              className="h-full w-full" 
              objectFit={objectFit}
            />
          </motion.div>
        </div>
        <Sparkles count={3} />
      </div>
    );
  } else if (photos.length === 2) {
    // 2 photos: side by side
    return (
      <div className="relative h-full w-full bg-[#0a0a0a] p-4 overflow-hidden">
        <div className={`h-full w-full flex ${gap}`}>
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex-1 ${photoClasses[index] || ""}`}
            >
              <PhotoItem 
                src={photo} 
                alt={`Photo ${index + 1}`} 
                className="h-full w-full" 
                objectFit={objectFit}
              />
            </motion.div>
          ))}
        </div>
        <Sparkles count={3} />
      </div>
    );
  } else {
    // 1 photo: full size
    return (
      <div className="relative h-full w-full bg-[#0a0a0a] p-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className={`h-full w-full ${photoClasses[0] || ""}`}
        >
          <PhotoItem 
            src={photos[0]} 
            alt="Photo 1" 
            className="h-full w-full" 
            objectFit={objectFit}
          />
        </motion.div>
        <Sparkles count={3} />
      </div>
    );
  }
}

// Example: To adjust for chapter1, add an options object:
// export function ArtBeginning() {
//   return <PhotoDisplay 
//     photos={chapter1Photos} 
//     options={{ 
//       objectFit: "contain", // or "cover" for cropped, "none" for original
//       gap: "gap-4", // larger gap between photos
//       photoClasses: [
//         "h-[95%]", // make first photo a bit smaller
//         "", 
//         "w-[95%]" // make third photo a bit narrower
//       ]
//     }} 
//   />;
// }

export function ArtBeginning() {
  return <PhotoDisplay photos={chapter1Photos} />;
}

export function ArtConversation() {
  return <PhotoDisplay photos={chapter2Photos} />;
}

export function ArtMoments() {
  return <PhotoDisplay photos={chapter3Photos} />;
}

export function ArtThingsILove() {
  return <PhotoDisplay photos={chapter4Photos} />;
}

export function ArtDreams() {
  return <PhotoDisplay photos={chapter5Photos} />;
}
