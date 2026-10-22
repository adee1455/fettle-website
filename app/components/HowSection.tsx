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
            Two ways to convert. Zero friction.
          </h2>
          <p className="section-lead">
            Trigger the HUD right where your files live with Shift-drag, or open Fettle for dedicated drop zones and batch jobs.
          </p>
        </div>

        {/* Two steps */}
        <div className="flex flex-col gap-8">
          {/* Step 1: Real Native Radial Menu Screenshot */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center rounded-[24px] border border-[var(--line)] overflow-hidden shadow-[var(--shadow-sm)]" style={{ background: "var(--elev)" }}>
            <div className="lg:col-span-5 p-8 sm:p-12">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--blue-soft)] text-[var(--blue)] text-[0.8rem] font-bold mb-5">
                1
              </div>
              <h3 className="text-[1.5rem] font-bold tracking-[-0.03em] mb-3 text-[var(--fg)]">
                Shift-drag. Pick a slice.
              </h3>
              <p className="text-[var(--muted)] text-[1rem] leading-relaxed mb-6">
                Hold Shift while dragging files in Finder or on your Desktop. The native radial HUD blooms directly anchored to your cursor. Tap hotkeys <kbd className="font-mono text-xs px-2 py-0.5 rounded bg-[var(--bg-soft)] border border-[var(--line)] font-semibold text-[var(--fg)]">1</kbd>–<kbd className="font-mono text-xs px-2 py-0.5 rounded bg-[var(--bg-soft)] border border-[var(--line)] font-semibold text-[var(--fg)]">3</kbd> or release on a node to convert in place.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Shift · trigger", "1–3 · hotkeys", "Esc · dismiss"].map((k) => (
                  <span key={k} className="keychip">{k}</span>
                ))}
              </div>
            </div>

            {/* Real Screenshot Preview (Spacious & High-Res) */}
            <div
              className="lg:col-span-7 p-6 sm:p-10 flex items-center justify-center overflow-hidden relative min-h-[360px] sm:min-h-[420px]"
              style={{
                background: "radial-gradient(ellipse at 50% 50%, color-mix(in srgb, var(--blue) 12%, #14151a) 0%, #0c0d12 100%)",
                borderLeft: "1px solid var(--line)"
              }}
            >
              <div className="relative w-full max-w-[390px] flex items-center justify-center group">
                <img
                  src="/screenshots/radial-menu.png"
                  alt="Real Native Fettle Radial HUD"
                  width={764}
                  height={764}
                  className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
                />
                <div className="absolute -bottom-2 right-0 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[11px] font-semibold text-white/90 border border-white/15 shadow-lg">
                  Native macOS HUD
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Main Window & Drop Zone */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center rounded-[24px] border border-[var(--line)] overflow-hidden shadow-[var(--shadow-sm)]" style={{ background: "var(--elev)" }}>
            {/* Real Screenshot of Main App Window (Full Width & Crisp) */}
            <div
              className="lg:col-span-7 p-6 sm:p-10 flex items-center justify-center order-last lg:order-first overflow-hidden relative min-h-[360px] sm:min-h-[420px]"
              style={{
                background: "radial-gradient(ellipse at 50% 50%, color-mix(in srgb, var(--blue) 8%, #14151a) 0%, #0c0d12 100%)",
                borderRight: "1px solid var(--line)"
              }}
            >
              <div className="relative w-full max-w-[560px] flex items-center justify-center group">
                <img
                  src="/screenshots/fettle-main-window.png"
                  alt="Real Fettle macOS App Window"
                  width={1888}
                  height={1302}
                  className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] drop-shadow-[0_25px_60px_rgba(0,0,0,0.6)] rounded-[14px]"
                />
                <div className="absolute -bottom-2 right-0 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[11px] font-semibold text-white/90 border border-white/15 shadow-lg">
                  Fettle Main Window
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-12">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--blue-soft)] text-[var(--blue)] text-[0.8rem] font-bold mb-5">
                2
              </div>
              <h3 className="text-[1.5rem] font-bold tracking-[-0.03em] mb-3 text-[var(--fg)]">
                Or drop files into the app window.
              </h3>
              <p className="text-[var(--muted)] text-[1rem] leading-relaxed mb-6">
                Prefer a dedicated workspace or converting multiple files at once? Drag and drop directly into the Fettle drop zone. Inspect loaded files, track real-time job queues, and generate collision-safe in-place outputs.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Drag & Drop", "Batch jobs", "In-place output"].map((k) => (
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
