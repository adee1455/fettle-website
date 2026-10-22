import React from "react";

export default function HowSection() {
  return (
    <section className="pt-24 wrap" id="how">
      <h2 className="text-[clamp(1.55rem,3vw,2rem)] font-bold tracking-[-0.035em] text-center mb-2.5 leading-[1.15] text-[var(--fg)]">
        One gesture. Anywhere your files live.
      </h2>
      <p className="text-center text-[var(--muted)] max-w-[30rem] mx-auto mb-10 text-[1.02rem]">
        Desktop or Finder — select, drag, hold Shift. Context-aware slices. Esc dismisses.
      </p>

      {/* Split A: Shift-drag */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center mb-14 text-left">
        <div>
          <h3 className="text-[1.35rem] font-bold tracking-[-0.03em] mb-2.5 text-[var(--fg)]">
            Shift-drag. Pick a slice.
          </h3>
          <p className="text-[var(--muted)] text-[0.975rem] mb-4 leading-relaxed">
            Hold Shift (or ⌘ / ⌃) while dragging. Tap 1–9 or release on a slice. Works on the Desktop and in Finder windows.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-[0.75rem] font-semibold px-2.5 py-1.5 rounded-[8px] bg-[var(--bg-soft)] text-[var(--fg)]">
              Shift · open
            </span>
            <span className="text-[0.75rem] font-semibold px-2.5 py-1.5 rounded-[8px] bg-[var(--bg-soft)] text-[var(--fg)]">
              1–9 · trigger
            </span>
            <span className="text-[0.75rem] font-semibold px-2.5 py-1.5 rounded-[8px] bg-[var(--bg-soft)] text-[var(--fg)]">
              Esc · dismiss
            </span>
          </div>
        </div>

        <div className="bg-[var(--bg-soft)] border border-[var(--line)] rounded-[16px] p-5 min-h-[220px] grid place-items-center">
          <svg
            viewBox="0 0 200 200"
            width="180"
            height="180"
            className="drop-shadow-[0_10px_24px_rgba(0,0,0,0.1)]"
          >
            <path d="M100,100 L100,22 A78,78 0 0,1 155,45 Z" fill="var(--slice-on)" />
            <path d="M100,100 L155,45 A78,78 0 0,1 178,100 Z" fill="var(--slice)" />
            <path d="M100,100 L178,100 A78,78 0 0,1 155,155 Z" fill="var(--slice)" />
            <path d="M100,100 L155,155 A78,78 0 0,1 100,178 Z" fill="var(--slice)" />
            <path d="M100,100 L100,178 A78,78 0 0,1 45,155 Z" fill="var(--slice)" />
            <path d="M100,100 L45,155 A78,78 0 0,1 22,100 Z" fill="var(--slice)" />
            <path d="M100,100 L22,100 A78,78 0 0,1 45,45 Z" fill="var(--slice)" />
            <path d="M100,100 L45,45 A78,78 0 0,1 100,22 Z" fill="var(--slice)" />
            <circle cx="100" cy="100" r="28" fill="var(--elev)" stroke="var(--line)" />
            <text
              x="100"
              y="104"
              textAnchor="middle"
              fontSize="10"
              fontWeight="600"
              fill="var(--faint)"
              className="font-sans"
            >
              Shift
            </text>
          </svg>
        </div>
      </div>

      {/* Split B: Action Picker */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center text-left">
        <div className="w-full bg-[var(--elev)] rounded-[12px] border border-[var(--line)] overflow-hidden shadow-xs">
          <div className="flex items-center gap-2.5 px-3.5 py-3 border-b border-[var(--line)] text-[0.85rem] bg-[color-mix(in_srgb,var(--blue)_10%,transparent)]">
            <span className="font-medium text-[var(--fg)]">Convert to WebP</span>
            <span className="ml-auto text-[0.6rem] font-bold uppercase tracking-wider text-[var(--blue)] bg-[var(--elev)] px-1.5 py-0.5 rounded">
              Suggested
            </span>
            <span className="text-[var(--faint)] text-[0.78rem]">.webp</span>
          </div>
          <div className="flex items-center justify-between px-3.5 py-3 border-b border-[var(--line)] text-[0.85rem] text-[var(--fg)]">
            <span>Convert to JPEG</span>
            <span className="text-[var(--faint)] text-[0.78rem]">.jpg</span>
          </div>
          <div className="flex items-center justify-between px-3.5 py-3 border-b border-[var(--line)] text-[0.85rem] text-[var(--fg)]">
            <span>Resize 50%</span>
            <span className="text-[var(--faint)] text-[0.78rem]">.png</span>
          </div>
          <div className="flex items-center justify-between px-3.5 py-3 border-b border-[var(--line)] text-[0.85rem] text-[var(--fg)]">
            <span>Strip EXIF</span>
            <span className="text-[var(--faint)] text-[0.78rem]">meta</span>
          </div>
          <div className="flex items-center justify-between px-3.5 py-3 text-[0.85rem] text-[var(--fg)]">
            <span>Images → PDF</span>
            <span className="text-[var(--faint)] text-[0.78rem]">.pdf</span>
          </div>
        </div>

        <div>
          <h3 className="text-[1.35rem] font-bold tracking-[-0.03em] mb-2.5 text-[var(--fg)]">
            Or open the Action Picker.
          </h3>
          <p className="text-[var(--muted)] text-[0.975rem] mb-4 leading-relaxed">
            Return or ⌘R. Suggested conversions first. Search by format. Full keyboard — ↑ ↓ Return.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-[0.75rem] font-semibold px-2.5 py-1.5 rounded-[8px] bg-[var(--bg-soft)] text-[var(--fg)]">
              Return / ⌘R
            </span>
            <span className="text-[0.75rem] font-semibold px-2.5 py-1.5 rounded-[8px] bg-[var(--bg-soft)] text-[var(--fg)]">
              ↑ ↓ navigate
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
