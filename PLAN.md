# Fettle Website Architecture & Implementation Blueprint
**Target URL:** [fettle.itsadee.com](https://fettle.itsadee.com)  
**Location:** `/Users/adee/Web-Development/Fettle-website`  
**Brand:** *Your files, in good shape.*  
**Stack:** Next.js 15 (App Router), React 19, Tailwind CSS, Framer Motion, Lucide React

---

## 1. Design System & Aesthetics

- **Theme:** Minimal, premium macOS dark mode (`#08090C` canvas with subtle indigo/sapphire glow).
- **Glassmorphism:** Frosted borders (`border-white/10`), ultra-thin cards (`bg-white/[0.03] backdrop-blur-md`).
- **Typography:** Inter / SF Pro Display for headlines, Inter for body, Geist Mono / SF Mono for shortcuts & format badges.
- **Micro-interactions:** Spring physics matching macOS Sonoma / Sequoia animations via `framer-motion`.

---

## 2. Component Architecture

```
app/
├── layout.tsx             # Root layout, metadata, OpenGraph tags, favicon
├── page.tsx               # Main landing page
├── globals.css            # Custom glow utilities, noise layer, Tailwind tokens
└── components/
    ├── Navbar.tsx         # Sticky frosted navigation bar with GitHub star pill & CTA
    ├── Hero.tsx           # Tagline, headline, direct DMG download button, release pill
    ├── RadialSimulator.tsx# Interactive web simulation of Fettle's Finder radial menu
    ├── BentoFeatures.tsx  # 4-card bento grid (Shift-drag, 100% offline, in-place, menu bar)
    ├── PresetCatalogue.tsx# Searchable & tabbed directory of 40+ supported conversions
    ├── GatekeeperGuide.tsx# Transparent, collapsible 3-step guide for first-time launch
    ├── DownloadBanner.tsx # Final high-converting download CTA card
    └── Footer.tsx         # Open source MIT badge, author attribution (Adee), repository link
```

---

## 3. Key Features of the Landing Page

### A. Hero & Direct Download
- Announcement badge: `v0.1.0 is now live for Apple Silicon →` (links to GitHub release).
- Headline: **Your files, in good shape.**
- Direct one-click download for `Fettle-macOS.dmg` pointing to the GitHub Release.
- Secondary link to open-source GitHub repository (`adee1455/fettle`).

### B. Interactive Radial Menu Simulator (`RadialSimulator.tsx`)
- An interactive component allowing visitors to test the radial menu directly in the browser:
  - Simulated Finder files (`photo.heic`, `document.docx`, `video.mov`).
  - Interactive "Hold Shift" toggle or drag gesture.
  - 8-slice SVG radial ring that animates open with spring physics.
  - Hovering slices displays format badges (`WEBP`, `JPEG`, `PDF`, `PNG`) and number shortcuts (`1`–`8`).
  - Clicking a slice plays a subtle completion sound and displays a simulated "Show in Finder" toast.

### C. Bento Feature Grid (`BentoFeatures.tsx`)
1. **Shift-Drag Velocity:** Instant cursor-anchored HUD without window switching.
2. **100% Offline & Private:** Built entirely on native Apple frameworks (Image I/O, PDFKit, AVFoundation). Zero cloud uploads.
3. **In-Place Output Intelligence:** Converted files land right alongside originals with collision protection (`photo (1).webp`).
4. **Keyboard & Menu Bar Native:** Operates silently in the menu bar (`LSUIElement`). Hotkeys `1`–`9`, `Esc`, `⌘R`.

### D. Preset Directory (`PresetCatalogue.tsx`)
- Tabbed filters: **Images**, **Documents & PDF**, **Media**, **File Actions**.
- Clear before $\rightarrow$ after cards displaying input and output capabilities.

### E. Gatekeeper First-Launch Guide (`GatekeeperGuide.tsx`)
- Friendly explanation for macOS Sonoma & Sequoia:
  - Drag to Applications.
  - Right-click `Fettle.app` $\rightarrow$ Open $\rightarrow$ Open Anyway.
  - Or terminal command: `xattr -cr /Applications/Fettle.app`.

---

## 4. Initialization & Execution Commands

When ready to develop this website:

```bash
cd /Users/adee/Web-Development/Fettle-website

# 1. Initialize Next.js with Tailwind CSS & TypeScript
npx create-next-app@latest . --typescript --tailwind --app --eslint --use-bun

# 2. Install animation & icon dependencies
bun add framer-motion lucide-react clsx tailwind-merge canvas-confetti
bun add -d @types/canvas-confetti

# 3. Start local development server
bun dev
```

---

## 5. Deployment Setup

- **DNS:** Configure CNAME on `itsadee.com`: `fettle` $\rightarrow$ `cname.vercel-dns.com` (or Cloudflare Pages).
- **Target Release Assets:**
  - DMG: `https://github.com/adee1455/fettle/releases/latest/download/Fettle-macOS.dmg`
  - Zip: `https://github.com/adee1455/fettle/releases/latest/download/Fettle-macOS.zip`
