"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import GithubIcon from "./GithubIcon";

interface HeroProps {
  onDownloadClick: () => void;
}

export default function Hero({ onDownloadClick }: HeroProps) {
  const [downloadCount, setDownloadCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/stats")
      .then((r) => r.json())
      .then((d) => {
        if (typeof d.totalDownloads === "number" && d.totalDownloads > 0) {
          setDownloadCount(d.totalDownloads);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {/* Large ambient glow */}
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at 50% 20%, color-mix(in srgb, var(--blue) 40%, transparent) 0%, transparent 70%)",
          }}
        />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(var(--fg) 1px, transparent 1px), linear-gradient(90deg, var(--fg) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container text-center">
        {/* Launch badge */}
        <div className="inline-flex items-center gap-2 mb-7 px-3.5 py-1.5 rounded-full bg-[var(--elev)] border border-[var(--line)] shadow-[var(--shadow-sm)] text-[0.75rem] font-medium text-[var(--muted)] hover:border-[var(--muted)] transition-colors cursor-default">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--ok)] opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--ok)]" />
          </span>
          <span>v0.1.0 — now live for Apple Silicon &amp; Intel</span>
          <ArrowRight className="w-3 h-3 text-[var(--faint)]" />
        </div>

        {/* Main headline */}
        <h1 className="mx-auto max-w-[14ch] text-[clamp(2.8rem,7vw,5rem)] font-extrabold tracking-[-0.05em] leading-[1.02] mb-6">
          <span className="text-[var(--fg)]">Convert files </span>
          <br />
          <span
            className="inline-block"
            style={{
              background: `linear-gradient(135deg, var(--blue) 0%, color-mix(in srgb, var(--blue) 70%, #8B5CF6) 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            where they are.
          </span>
        </h1>

        {/* Subtext */}
        <p className="mx-auto max-w-[38rem] text-[1.1rem] text-[var(--muted)] leading-[1.65] mb-10">
          Shift-drag on the <strong className="text-[var(--fg)] font-semibold">Desktop or Finder</strong>. A radial
          menu appears and converts files beside your originals — in milliseconds,
          using native Apple frameworks. Nothing ever leaves your Mac.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14">
          <button
            onClick={onDownloadClick}
            type="button"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-[12px] bg-[var(--blue)] text-white text-[1rem] font-semibold hover:bg-[var(--blue-hover)] active:scale-[0.98] transition-all duration-150 cursor-pointer shadow-[0_4px_20px_color-mix(in_srgb,var(--blue)_30%,transparent)]"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 15 2.94 8.78 4.97 5.65c1.02-1.59 2.73-2.59 4.62-2.62 1.42-.03 2.76.96 3.64.96.87 0 2.51-1.18 4.23-.99.71.04 2.72.29 4 2.19-.1.07-2.39 1.4-2.37 4.19.03 3.32 2.92 4.43 2.95 4.44-.03.07-.45 1.56-1.48 3.08zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download for Mac — Free
            <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <a
            href="#try"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[12px] bg-[var(--elev)] text-[var(--fg)] text-[1rem] font-semibold border border-[var(--line)] hover:border-[var(--muted)] hover:bg-[var(--bg-soft)] transition-all duration-150 shadow-[var(--shadow-sm)]"
          >
            Try the gesture ↓
          </a>

          <a
            href="https://github.com/adee1455/fettle"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-3.5 rounded-[12px] text-[var(--muted)] text-[1rem] font-medium hover:text-[var(--fg)] transition-colors"
          >
            <GithubIcon className="w-4.5 h-4.5" />
            GitHub
          </a>
        </div>

        {/* Meta chips */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            { icon: "✦", label: "100% Free & Open Source" },
            { icon: "⬡", label: "Apple Silicon & Intel" },
            { icon: "⬦", label: "macOS 14+ (Sonoma & Sequoia)" },
            { icon: "↯", label: "100% Offline · No Cloud" },
          ].map((chip) => (
            <span
              key={chip.label}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[0.75rem] font-medium text-[var(--muted)] bg-[var(--elev)] border border-[var(--line)]"
            >
              <span className="text-[var(--faint)] text-[10px]">{chip.icon}</span>
              {chip.label}
            </span>
          ))}
          {downloadCount !== null && downloadCount > 0 && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[0.75rem] font-semibold text-[var(--fg)] bg-[var(--bg-soft)] border border-[var(--line)]">
              ⬇ {downloadCount.toLocaleString()} downloads
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
