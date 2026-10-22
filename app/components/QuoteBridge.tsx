import React from "react";

export default function QuoteBridge() {
  return (
    <div className="w-[min(920px,calc(100%-32px))] mx-auto -mt-5 relative z-20 px-4">
      <figure className="rounded-[16px] p-6 sm:p-7 shadow-[var(--shadow-lg)] border border-[var(--line)] grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-5 items-center" style={{ background: "var(--elev)" }}>
        <div>
          <div className="flex gap-1 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-amber-400">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <blockquote className="m-0 text-[1rem] text-[var(--muted)] leading-[1.55]">
            "Tired of <strong className="text-[var(--fg)] font-semibold">uploading a PNG just to convert it</strong>. Shift-drag on the Desktop — done. Files never leave the machine."
          </blockquote>
          <div className="text-[0.78rem] text-[var(--faint)] mt-3">
            <span className="font-semibold text-[var(--fg)]">Adee</span> · maker · Fettle
          </div>
        </div>

        <a
          href="https://github.com/adee1455/fettle"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 whitespace-nowrap px-4 py-2 rounded-[8px] text-[0.875rem] font-semibold border border-[var(--line)] text-[var(--fg)] hover:bg-[var(--bg-soft)] hover:border-[var(--muted)] transition-all"
        >
          View on GitHub →
        </a>
      </figure>
    </div>
  );
}
