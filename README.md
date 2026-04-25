# Olive Frontend

A modern, responsive landing page for **Olive**, a food scanner app that helps families instantly identify harmful ingredients and get expert-backed nutrition insights while shopping for groceries.

## Overview

This project is a faithful recreation of the Olive marketing site, built with a clean component architecture and a warm, food-friendly visual identity. The page highlights the product's core value proposition with a hero section, social proof, dual call-to-action buttons, and an interactive phone mockup that previews the in-app scan experience.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 with design tokens
- **UI Primitives:** Radix UI + shadcn/ui
- **Icons:** Lucide React
- **Fonts:** Instrument Serif (headings) and DM Sans (body), loaded via `next/font`

## Features

- Sticky top navigation with custom pear/leaf logo and primary CTA
- Hero section with social-proof avatar stack and a "3k+" trust badge
- Large editorial-style headline and supporting copy
- Dual CTAs for iOS download and community sign-up
- Detailed phone mockup showcasing a real product scan result, score, and "Oliver Says" expert commentary
- Fully responsive layout, mobile-first
- Accessible markup with semantic HTML and proper alt text

## Project Structure

```
app/
  layout.tsx          # Root layout, font setup, metadata
  page.tsx            # Landing page composition
  globals.css         # Design tokens and Tailwind theme
components/
  olive/
    navbar.tsx        # Top navigation
    olive-logo.tsx    # Brand mark
    hero.tsx          # Hero section with trust badge and CTAs
    phone-mockup.tsx  # In-app preview mockup
public/
  images/             # Avatars, product imagery, illustrations
```

## Getting Started

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

Or with npm / yarn / bun:

```bash
npm install && npm run dev
yarn && yarn dev
bun install && bun dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `dev` — Start the local development server with HMR
- `build` — Create a production build
- `start` — Run the production build
- `lint` — Run ESLint over the codebase

## Design System

The visual language is driven by a small, focused palette defined as CSS custom properties in `app/globals.css`:

- **Primary:** deep olive green (brand)
- **Accent:** soft sage
- **Background:** warm cream
- **Foreground:** near-black for high contrast
- **Muted:** subtle neutrals for secondary text and borders

Typography pairs a refined serif for display headings with a clean geometric sans for body copy, keeping the interface friendly and editorial without feeling busy.

## Deployment

The project is optimized for deployment on [Vercel](https://vercel.com). Pushing to the main branch will trigger an automatic production deployment when the project is connected.

## License

This project is provided for demonstration and educational purposes.
