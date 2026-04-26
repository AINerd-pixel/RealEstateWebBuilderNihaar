# Nihaar Real Estate Website

A modern luxury real estate marketing website built with React, TypeScript, and Tailwind CSS. Features animated sections for showcasing services, portfolio, stats, and a contact form.

## Tech Stack

- **React 19** — UI framework
- **TypeScript** — type safety
- **Vite** — dev server and bundler
- **Tailwind CSS v4** — styling
- **Motion** — animations
- **Lucide React** — icons
- **Express** — lightweight backend server

## Project Structure

```
src/
├── App.tsx               # Root component, page layout
├── main.tsx              # Entry point
├── index.css             # Global styles
└── components/
    ├── Navbar.tsx        # Top navigation
    ├── Hero.tsx          # Landing hero section
    ├── Showcase.tsx      # Device mockup showcase
    ├── Stats.tsx         # Key metrics / statistics
    ├── Services.tsx      # Services offered
    ├── Portfolio.tsx     # Property portfolio showcase
    ├── Contact.tsx       # Contact form
    └── Footer.tsx        # Page footer
```

## Getting Started

**Prerequisites:** Node.js 18+

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

   The app runs at `http://localhost:3000`.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server on port 3000 |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | Type-check with TypeScript |
| `npm run clean` | Remove `dist/` directory |
