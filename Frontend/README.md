# Ayush Tiwari — Portfolio

A full-stack developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Tech Stack

- **React 18** + **Vite** — fast dev/build tooling
- **Tailwind CSS v4** — utility-first styling, CSS-variable-based theming
- **Framer Motion** — page-load and scroll-triggered animations
- **lucide-react** — icon set

## Project Structure

```
src/
├── components/        # All section components (Hero, About, Projects, etc.)
├── context/            # ThemeContext for dark/light mode
├── data/
│   └── content.js      # ALL editable site content lives here
├── App.jsx             # Assembles all sections
├── main.jsx             # React entry point
└── index.css            # Design tokens (colors, fonts) + global styles
```

## Editing Content

Almost everything you'd want to change — name, tagline, project descriptions, skills,
services, testimonial — lives in **`src/data/content.js`**. You shouldn't need to touch
component files to update text.

### Swapping in the real testimonial

Open `src/data/content.js` and find the `testimonial` object:

```js
export const testimonial = {
  isPlaceholder: true,   // change to false once you add the real quote
  quote: "...",
  name: "Kavya Tiwari",
  role: "Founder, The Coffee Comfort",
};
```

### Adding project screenshots later

Currently projects use a styled "browser frame" with a live-link preview instead of
screenshots. If you'd rather use real screenshots:
1. Add images to `src/assets/`
2. Open `src/components/Projects.jsx` and replace the `BrowserFrame` background area
   with an `<img>` tag pointing to your asset.

## Run Locally

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`.

## Build for Production

```bash
npm run build
```

Output goes to `dist/`.

## Deploy to Vercel

**Option A — Vercel CLI**
```bash
npm install -g vercel
vercel
```
Follow the prompts. Vercel auto-detects Vite projects — no config needed.

**Option B — GitHub + Vercel Dashboard**
1. Push this project to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Click Deploy.

## Custom Domain

After deploying, add a custom domain under Vercel → Project → Settings → Domains.

Suggested domain options:
- `ayushtiwari.dev`
- `ayushtiwari.in`
- `iamayush.dev`
- `ayush.codes`

`.dev` reads well for developers; `.in` is a solid, often cheaper option if you want
to signal you're India-based for local clients.
