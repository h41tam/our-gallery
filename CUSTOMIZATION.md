# Customization Guide

Welcome! Follow these simple steps to make this gallery your own!

## Step 1: Add Your Photos

1. Go to the `/public/photos/` folder
2. Drop all your photos into this folder
3. Open `/src/components/Artworks.jsx` and update the photo arrays with your actual filenames:

```javascript
// Example:
const chapter1Photos = [
  "/photos/our-first-date.jpg",
  "/photos/that-day-at-the-park.jpg",
  "/photos/our-first-selfie.jpg"
];
```

## Step 2: Add Your Music

1. Go to the `/public/music/` folder
2. Add your song file (MP3 format works best!)
3. Rename your song to `your-song.mp3` OR open `/src/App.jsx` and update the audio src to match your filename:

```javascript
src="/music/your-favorite-song.mp3"
```

## Step 3: Customize the Text

Update the text in these files to tell your own story:

- `/src/sections/Entrance.jsx` - The opening quotes
- `/src/sections/Gallery.jsx` - Chapter titles and notes
- `/src/sections/FinalRoom.jsx` - The final birthday message

## Step 4: Run It!

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser!
