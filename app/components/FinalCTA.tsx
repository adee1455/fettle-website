"use client";

import React from "react";

interface FinalCTAProps {
  onDownloadClick: () => void;
}

export default function FinalCTA({ onDownloadClick }: FinalCTAProps) {
  return (
    <section className="text-center pt-24 pb-12 wrap" id="download">
      <h2 className="text-[clamp(1.7rem,3.5vw,2.3rem)] font-bold tracking-[-0.035em] mb-2.5 text-[var(--fg)]">
        Get Fettle for Mac
      </h2>
      <p className="text-[var(--muted)] max-w-[26rem] mx-auto mb-6 text-[1.02rem]">
        Minimal native utility for Apple Silicon &amp; Intel. Free, private, open source.
      </p>

      <div className="flex flex-wrap gap-4 justify-center items-center">
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
          href="https://github.com/adee1455/fettle"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--blue)] font-semibold text-[0.9rem] hover:underline"
        >
          View source on GitHub →
        </a>
      </div>

      <p className="text-[0.78rem] text-[var(--faint)] mt-4">
        Requires macOS 14.0 or later · Universal (Apple Silicon &amp; Intel)
      </p>
    </section>
  );
}
