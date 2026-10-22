import React from "react";

export default function HowSection() {
  return (
    <section className="pt-28 pb-10" id="how">
      <div className="container">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-[var(--faint)] mb-4">
            How it works
          </p>
          <h2 className="section-heading mb-4">
            One gesture. Anywhere your files live.
          </h2>
          <p className="section-lead">
            Desktop or Finder — select files, hold Shift, and the radial wheel blooms right at your cursor.
            Context-aware slices. No windows to manage.
          </p>
        </div>

        {/* Two steps */}
        <div className="flex flex-col gap-8">
          {/* Step 1: Real Native Radial Menu Screenshot */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center rounded-[20px] border border-[var(--line)] overflow-hidden shadow-[var(--shadow-sm)]" style={{ background: "var(--elev)" }}>
            <div className="p-8 sm:p-10">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--blue-soft)] text-[var(--blue)] text-[0.8rem] font-bold mb-5">
                1
              </div>
              <h3 className="text-[1.4rem] font-bold tracking-[-0.03em] mb-3 text-[var(--fg)]">
                Shift-drag. Pick a slice.
              </h3>
              <p className="text-[var(--muted)] text-[0.975rem] leading-relaxed mb-6">
                Hold Shift while dragging in Finder or on your Desktop. The native radial HUD blooms directly anchored to your cursor. Tap hotkeys <kbd className="font-mono text-xs px-1.5 py-0.5 rounded bg-[var(--bg-soft)] border border-[var(--line)]">1</kbd>–<kbd className="font-mono text-xs px-1.5 py-0.5 rounded bg-[var(--bg-soft)] border border-[var(--line)]">3</kbd> or release on a node to convert in place.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Shift · open", "1–8 · trigger", "Esc · dismiss", "⌘Z · undo"].map((k) => (
                  <span key={k} className="keychip">{k}</span>
                ))}
              </div>
            </div>

            {/* Real Screenshot Preview */}
            <div className="p-4 sm:p-6 flex items-center justify-center overflow-hidden bg-[#0c0d12] relative min-h-[280px]">
              <div className="relative w-full max-w-[340px] rounded-xl overflow-hidden shadow-2xl border border-white/10 group">
                <img
                  src="/screenshots/radial-menu.png"
                  alt="Real Native Fettle Radial HUD"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-semibold text-white/90 border border-white/10">
                  Native macOS HUD
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Action Picker */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center rounded-[20px] border border-[var(--line)] overflow-hidden shadow-[var(--shadow-sm)]" style={{ background: "var(--elev)" }}>
            {/* Action picker mock */}
            <div className="p-8 sm:p-10 flex items-center justify-center order-last md:order-first" style={{ background: "var(--bg-soft)", borderRight: "1px solid var(--line)" }}>
              <div className="w-full max-w-[280px] rounded-[12px] overflow-hidden border border-[var(--line)] shadow-[var(--shadow-lg)]" style={{ background: "var(--elev)" }}>
                {/* Picker search bar */}
                <div className="flex items-center gap-2.5 px-3.5 py-2.5 border-b border-[var(--line)]" style={{ background: "var(--bg-subtle)" }}>
                  <svg className="w-3.5 h-3.5 text-[var(--faint)] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 6.5 6.5a7.5 7.5 0 0 0 10.15 10.15z" />
                  </svg>
                  <span className="text-[0.8rem] text-[var(--faint)]">Search actions…</span>
                </div>

                {[
                  { label: "Convert to WebP",  ext: ".webp", suggested: true },
                  { label: "Convert to JPEG",  ext: ".jpg" },
                  { label: "Resize 50%",       ext: ".png" },
                  { label: "Strip EXIF",       ext: "meta" },
                  { label: "Images → PDF",     ext: ".pdf" },
                ].map((row, i) => (
                  <div
                    key={row.label}
                    className={`flex items-center gap-2 px-3.5 py-2.5 text-[0.85rem] ${i < 4 ? "border-b border-[var(--line)]" : ""} ${row.suggested ? "bg-[var(--blue-soft)]" : "hover:bg-[var(--bg-subtle)]"}`}
                  >
                    <span className={`flex-1 font-medium ${row.suggested ? "text-[var(--fg)]" : "text-[var(--muted)]"}`}>{row.label}</span>
                    {row.suggested && (
                      <span className="text-[0.6rem] font-bold uppercase tracking-wider text-[var(--blue)] px-1.5 py-0.5 rounded bg-[var(--elev)]">
                        Suggested
                      </span>
                    )}
                    <span className="text-[0.75rem] text-[var(--faint)] font-mono">{row.ext}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 sm:p-10">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--blue-soft)] text-[var(--blue)] text-[0.8rem] font-bold mb-5">
                2
              </div>
              <h3 className="text-[1.4rem] font-bold tracking-[-0.03em] mb-3 text-[var(--fg)]">
                Or open the Action Picker.
              </h3>
              <p className="text-[var(--muted)] text-[0.975rem] leading-relaxed mb-6">
                Press Return or ⌘R to open a searchable picker. Suggested conversions appear first — based on the file type you selected. Navigate with ↑ ↓ and confirm with Return.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Return / ⌘R", "↑ ↓ navigate", "Return · execute"].map((k) => (
                  <span key={k} className="keychip">{k}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
