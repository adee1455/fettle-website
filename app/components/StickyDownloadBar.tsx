"use client";

import { useEffect, useState } from "react";

interface StickyDownloadBarProps {
  onDownloadClick: () => void;
}

export default function StickyDownloadBar({ onDownloadClick }: StickyDownloadBarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 380);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      role="region"
      aria-label="Download Fettle"
      className={`fixed left-0 right-0 bottom-0 z-40 border-t border-[var(--line)] transition-transform duration-300 ${visible ? "translate-y-0" : "translate-y-full"}`}
      style={{ background: "color-mix(in srgb, var(--bg) 88%, transparent)", backdropFilter: "blur(20px) saturate(1.4)", WebkitBackdropFilter: "blur(20px) saturate(1.4)" }}
    >
      <div className="container h-[60px] flex items-center gap-3">
        {/* Product line — hidden on small screens */}
        <div className="hidden sm:flex items-center gap-3 mr-auto">
          <div className="w-7 h-7 rounded-[7px] flex items-center justify-center bg-[var(--fg)]">
            <span className="text-[var(--bg)] font-black text-[11px]">F</span>
          </div>
          <span className="text-[0.85rem] text-[var(--muted)]">
            <strong className="text-[var(--fg)] font-semibold">Fettle</strong> · Free forever · Desktop + Finder
          </span>
        </div>

        <div className="sm:hidden mr-auto text-[0.85rem] font-semibold text-[var(--fg)]">Fettle for Mac</div>

        {/* Compatibility tags */}
        <div className="hidden md:flex items-center gap-2 text-[0.72rem] text-[var(--faint)]">
          <span>macOS 14+</span>
          <span>·</span>
          <span>Apple Silicon &amp; Intel</span>
          <span>·</span>
          <span>Free &amp; Open Source</span>
        </div>

        {/* CTA */}
        <button
          onClick={onDownloadClick}
          type="button"
          className="ml-auto sm:ml-0 inline-flex items-center gap-2 px-4 py-2 rounded-[8px] bg-[var(--blue)] text-white text-[0.85rem] font-semibold hover:bg-[var(--blue-hover)] active:scale-95 transition-all cursor-pointer shadow-[var(--shadow-sm)]"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 15 2.94 8.78 4.97 5.65c1.02-1.59 2.73-2.59 4.62-2.62 1.42-.03 2.76.96 3.64.96.87 0 2.51-1.18 4.23-.99.71.04 2.72.29 4 2.19-.1.07-2.39 1.4-2.37 4.19.03 3.32 2.92 4.43 2.95 4.44-.03.07-.45 1.56-1.48 3.08zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          Download
        </button>
      </div>
    </div>
  );
}
