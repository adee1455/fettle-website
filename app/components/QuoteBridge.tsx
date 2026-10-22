import React from "react";

export default function QuoteBridge() {
  return (
    <div className="w-[min(880px,calc(100%-24px))] mx-auto -mt-7 relative z-20">
      <figure className="bg-[var(--elev)] border border-[var(--line)] rounded-[14px] p-5 sm:p-6 shadow-[var(--shadow)] grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 items-center">
        <div>
          <p className="m-0 text-[0.95rem] text-[var(--muted)] leading-[1.45]">
            “Tired of <strong className="text-[var(--fg)] font-semibold">uploading a PNG just to convert it</strong>. Shift-drag on the Desktop — done. Files never leave the machine.”
          </p>
          <div className="text-[0.75rem] text-[var(--faint)] mt-2">
            <b className="text-[var(--fg)] font-semibold">Adee</b> · maker · Fettle
          </div>
        </div>

        <a
          href="https://github.com/adee1455/fettle"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1 px-3.5 py-2 rounded-[8px] text-[0.8rem] font-semibold border border-[var(--line)] text-[var(--fg)] hover:bg-[var(--bg-soft)] transition-colors"
        >
          <span>GitHub</span>
          <span>→</span>
        </a>
      </figure>
    </div>
  );
}
