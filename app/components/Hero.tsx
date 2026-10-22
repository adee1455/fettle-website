"use client";

import { useEffect, useState } from "react";

interface HeroProps {
  onDownloadClick: () => void;
}

export default function Hero({ onDownloadClick }: HeroProps) {
  const [downloadCount, setDownloadCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/stats")
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.totalDownloads === "number" && data.totalDownloads > 0) {
          setDownloadCount(data.totalDownloads);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section className="text-center pt-12 pb-7 wrap">
      {/* Product Hunt / Release Badge */}
      <div className="inline-flex items-center gap-2 text-[0.72rem] font-semibold text-[var(--muted)] bg-[var(--elev)] border border-[var(--line)] px-3 py-1 rounded-full mb-5 shadow-xs">
        <svg
          width="13"
          height="13"
          viewBox="0 0 40 40"
          fill="currentColor"
          className="text-[#FF6154]"
        >
          <path d="M20 0C9 0 0 9 0 20s9 20 20 20 20-9 20-20S31 0 20 0zm6.6 22.2h-5.5V28h-5.2v-5.8H8.8v-5.1h7.1V12h5.2v5.1h5.5v5.1z" />
        </svg>
        <span>Featured on Product Hunt</span>
        <span className="text-[var(--faint)]">•</span>
        <span className="font-mono text-[var(--faint)]">v0.1.0</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-[clamp(2.4rem,6vw,3.6rem)] font-bold tracking-[-0.04em] leading-[1.08] mb-3.5 max-w-[16ch] mx-auto text-[var(--fg)]">
        Convert files <em className="not-italic text-[var(--blue)]">where they are.</em>
      </h1>

      {/* Subtitle */}
      <p className="text-[1.0625rem] text-[var(--muted)] max-w-[32rem] mx-auto mb-7 leading-[1.55]">
        Shift-drag on the Desktop or in Finder. A radial menu converts beside your originals — nothing leaves your Mac.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 justify-center items-center mb-3">
        <button
          onClick={onDownloadClick}
          type="button"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[10px] text-[0.9375rem] font-semibold bg-[var(--blue)] text-white hover:bg-[var(--blue-hover)] transition-all duration-150 hover:-translate-y-[1px] active:scale-[0.98] cursor-pointer shadow-sm"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 15 2.94 8.78 4.97 5.65c1.02-1.59 2.73-2.59 4.62-2.62 1.42-.03 2.76.96 3.64.96.87 0 2.51-1.18 4.23-.99.71.04 2.72.29 4 2.19-.1.07-2.39 1.4-2.37 4.19.03 3.32 2.92 4.43 2.95 4.44-.03.07-.45 1.56-1.48 3.08zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          <span>Download for Mac</span>
        </button>

        <a
          href="#try"
          className="inline-flex items-center justify-center px-5 py-3 rounded-[10px] text-[0.9375rem] font-semibold bg-transparent text-[var(--fg)] border border-[var(--line)] hover:bg-[var(--bg-soft)] transition-all duration-150 hover:-translate-y-[1px]"
        >
          Try the gesture
        </a>
      </div>

      {/* Meta caption */}
      <p className="text-[0.78rem] text-[var(--faint)]">
        Free · MIT · macOS 14+ · Apple Silicon · Your files, in good shape.
        {downloadCount !== null && downloadCount > 0 && (
          <span className="ml-2 font-medium text-[var(--muted)]">
            ({downloadCount.toLocaleString()} downloads)
          </span>
        )}
      </p>
    </section>
  );
}
