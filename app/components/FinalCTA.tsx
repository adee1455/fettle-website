"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import GithubIcon from "./GithubIcon";

interface FinalCTAProps {
  onDownloadClick: () => void;
}

export default function FinalCTA({ onDownloadClick }: FinalCTAProps) {
  return (
    <section className="pt-24 pb-10" id="download">
      <div className="container">
        <div
          className="relative rounded-[28px] overflow-hidden p-12 sm:p-20 text-center border border-[var(--line)] shadow-[var(--shadow-xl)]"
          style={{ background: "var(--elev)" }}
        >
          {/* Ambient glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-0"
          >
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-25"
              style={{
                background: `radial-gradient(ellipse, color-mix(in srgb, var(--blue) 60%, transparent) 0%, transparent 70%)`,
              }}
            />
          </div>

          <div className="relative z-10 max-w-xl mx-auto">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.045em] leading-[1.05] mb-4 text-[var(--fg)]">
              Get Fettle for Mac
            </h2>
            <p className="text-[var(--muted)] text-[1.05rem] leading-relaxed mb-10">
              Minimal native utility — free, private, open source. Runs silently in your menu bar.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8">
              <button
                onClick={onDownloadClick}
                type="button"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-[12px] bg-[var(--blue)] text-white font-semibold text-[1rem] hover:bg-[var(--blue-hover)] active:scale-[0.98] transition-all duration-150 cursor-pointer shadow-[0_4px_20px_color-mix(in_srgb,var(--blue)_30%,transparent)]"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 15 2.94 8.78 4.97 5.65c1.02-1.59 2.73-2.59 4.62-2.62 1.42-.03 2.76.96 3.64.96.87 0 2.51-1.18 4.23-.99.71.04 2.72.29 4 2.19-.1.07-2.39 1.4-2.37 4.19.03 3.32 2.92 4.43 2.95 4.44-.03.07-.45 1.56-1.48 3.08zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download for Mac — Free
                <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                href="https://github.com/adee1455/fettle"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--muted)] font-semibold text-[0.95rem] hover:text-[var(--fg)] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                View source on GitHub
              </a>
            </div>

            <p className="text-[0.78rem] text-[var(--faint)]">
              Requires macOS 14.0 or later · Universal Binary (Apple Silicon &amp; Intel) · MIT License
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
