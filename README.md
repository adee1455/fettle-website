<div align="center">

# Fettle Website
**The official landing page & download portal for [Fettle for Mac](https://github.com/adee1455/fettle)**

[![Live Site](https://img.shields.io/badge/website-fettle.itsadee.com-2563EB?style=flat-square)](https://fettle.itsadee.com)
[![Next.js 16](https://img.shields.io/badge/Next.js-16.4.2-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind-v4.0-38BDF8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![macOS Sonoma & Sequoia](https://img.shields.io/badge/macOS-14%2B%20(Apple%20Silicon%20%26%20Intel)-grey?style=flat-square&logo=apple)](https://fettle.itsadee.com)

<br />

<p align="center">
  A high-converting, performance-obsessed marketing landing page designed with macOS design language DNA—featuring an interactive desktop simulator, direct DMG delivery with zero-database download counting, and native Retina Display P3 UI showcases.
</p>

</div>

---

## 🌟 Highlights

- **🖥️ Interactive Desktop Stage**: An in-browser macOS desktop simulator allowing visitors to experience Fettle's signature Shift-drag radial HUD before downloading. Includes interactive drag demos and 1:1 tabs for real Retina app captures.
- **⚡ Direct Site-Hosted Download Routing (`/download`)**: 
  - Users download directly from `fettle.itsadee.com/download`.
  - Automatically resolves and `302`-redirects to the latest release `.dmg` (or `.zip`) hosted on GitHub Releases without requiring manual link updates.
- **📊 Zero-Database Live Download Counter (`/api/stats`)**:
  - Aggregates live total downloads across all GitHub release assets using the GitHub Releases API.
  - In-memory 1-hour cache prevents GitHub rate-limiting with zero database overhead.
- **🎨 macOS Warm Neutral Aesthetic**:
  - Default soft-warm light theme (`#F8F7F4`) with seamless dark mode toggle.
  - Frosted glass navigation, Apple System typography (`system-ui`), and custom SVG icon set matching macOS design standards.
- **🛡️ First-Time Launch Guide**: A non-technical, friendly 3-step walkthrough designed to help users bypass Gatekeeper in under 10 seconds without intimidating terminal commands.
- **📱 Fully Responsive & Accessible**: Optimized for mobile Safari, iPads, and high-density Retina displays.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org) with Turbopack |
| **UI Library** | [React 19](https://react.dev) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) + Vanilla CSS Variables |
| **Icons** | [Lucide React](https://lucide.dev) + Custom Apple/Fettle SVG Icons |
| **Language** | [TypeScript](https://www.typescriptlang.org) (Strict mode) |
| **Effects** | `canvas-confetti` for celebratory download triggers |
| **Deployment** | [Vercel](https://vercel.com) Edge Network |

---

## 📂 Project Architecture

```
fettle-website/
├── app/
│   ├── api/
│   │   └── stats/
│   │       └── route.ts         # GitHub API aggregation for release downloads & stars
│   ├── download/
│   │   └── route.ts             # 302 redirector to latest DMG/ZIP release asset
│   ├── components/
│   │   ├── DesktopStage.tsx     # macOS window mockup with live interactive gesture demo
│   │   ├── DownloadModal.tsx    # Non-intrusive post-download modal with Gatekeeper tips
│   │   ├── FettleLogo.tsx       # Crisp vector 4-node radial ring logo component
│   │   ├── FinalCTA.tsx         # Bottom conversion CTA section
│   │   ├── Footer.tsx           # Minimalistic site footer
│   │   ├── FormatsSection.tsx   # Interactive format compatibility matrix
│   │   ├── GatekeeperGuide.tsx  # Apple-style 3-step first launch guide
│   │   ├── GithubIcon.tsx       # GitHub brand SVG icon
│   │   ├── Hero.tsx             # Confident headline, live stats, and download CTA
│   │   ├── HowSection.tsx       # 2-step workflow breakdown with real Retina app UI
│   │   ├── Navbar.tsx           # Frosted top bar with theme toggle & GitHub star count
│   │   ├── PrivacySection.tsx   # On-device privacy & zero-telemetry guarantee
│   │   ├── QuoteBridge.tsx      # Editorial testimonial bridge
│   │   ├── StickyDownloadBar.tsx# Scroll-triggered sticky bottom download pill
│   │   └── ThemeToggle.tsx      # Smooth light/dark mode switcher
│   ├── favicon.ico              # Multi-resolution ICO (16x16, 32x32, 48x48)
│   ├── icon.png                 # 32x32 Next.js metadata icon
│   ├── apple-icon.png           # 180x180 Apple touch icon
│   ├── globals.css              # Color tokens, theme variables, and keyframe animations
│   ├── layout.tsx               # Root layout, metadata, and theme script
│   └── page.tsx                 # Main landing page composition
├── public/
│   ├── favicon.svg              # Scalable vector favicon
│   ├── screenshots/
│   │   ├── fettle-main-window.png # 1904x1384 Retina capture of Fettle main app window
│   │   └── radial-menu.png        # 700x700 Retina capture of native Radial HUD
│   └── app-icon.png             # 1024x1024 official macOS app icon
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v18.18+` or `v20+`
- **Package Manager**: `npm`, `pnpm`, or `bun`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/adee1455/fettle-website.git
   cd fettle-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📡 API Endpoints

### 1. `GET /download`
Redirects directly to the latest GitHub release binary:
- **`GET /download`** → Redirects to `Fettle-macOS.dmg` (default)
- **`GET /download?format=zip`** → Redirects to `Fettle-macOS.zip`

### 2. `GET /api/stats`
Returns cached GitHub release analytics without querying a database:
```json
{
  "totalDownloads": 1420,
  "stars": 128,
  "version": "v1.0.0",
  "dmgUrl": "https://github.com/adee1455/fettle/releases/download/v1.0.0/Fettle-macOS.dmg",
  "zipUrl": "https://github.com/adee1455/fettle/releases/download/v1.0.0/Fettle-macOS.zip"
}
```

---

## 🚢 Production Build & Deployment

To test a production build locally:

```bash
npm run build
npm run start
```

### Deploying to Vercel

The site is built specifically for zero-config deployment on Vercel:

1. Import the repository in [Vercel](https://vercel.com/new).
2. Framework Preset will be automatically detected as **Next.js**.
3. Deploy!

*(Optional: Set a `GITHUB_TOKEN` environment variable in Vercel settings if you expect extremely high traffic to increase GitHub API rate limits from 60 req/hr to 5,000 req/hr).*

---

## 🔗 Related Projects

- **[Fettle for Mac](https://github.com/adee1455/fettle)** — The native macOS Swift app repository.

---

## 📄 License

This website is open source under the **MIT License**.
