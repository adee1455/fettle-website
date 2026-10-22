import React from "react";

const POINTS = [
  {
    icon: "🔒",
    title: "100% on your Mac",
    desc: "Every conversion happens on-device using Apple Image I/O, PDFKit, and AVFoundation. No network call is ever made for your files.",
  },
  {
    icon: "📁",
    title: "Collision-safe output",
    desc: "Converted files land right beside your originals. If the name exists, Fettle auto-increments — `photo (1).webp` — never overwrites.",
  },
  {
    icon: "⚖️",
    title: "MIT open source",
    desc: "Every line of Swift is publicly auditable on GitHub. No tracking, no telemetry, no analytics embedded in the app.",
  },
];

export default function PrivacySection() {
  return (
    <section className="pt-24 pb-6" id="privacy">
      <div className="container">
        <div className="rounded-[24px] overflow-hidden border border-[var(--line)] shadow-[var(--shadow-md)]" style={{ background: "var(--elev)" }}>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left — Headline */}
            <div className="p-10 sm:p-14 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[var(--line)]">
              <p className="text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-[var(--faint)] mb-4">
                Privacy-first
              </p>
              <h2 className="text-[clamp(1.5rem,3vw,2.1rem)] font-extrabold tracking-[-0.04em] leading-[1.12] mb-5 text-[var(--fg)]">
                It converts the file — not a copy in the cloud.
              </h2>
              <p className="text-[var(--muted)] text-[1rem] leading-relaxed">
                No account required. No upload. Your files never leave the machine. Not during conversion, not ever.
              </p>
            </div>

            {/* Right — Points */}
            <div className="flex flex-col divide-y divide-[var(--line)]">
              {POINTS.map((p) => (
                <div key={p.title} className="p-7 sm:p-8 flex gap-4 items-start">
                  <div
                    className="w-9 h-9 rounded-[10px] flex items-center justify-center text-[1.1rem] shrink-0 mt-0.5"
                    style={{ background: "var(--ok-soft)" }}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="text-[0.95rem] font-bold mb-1 text-[var(--fg)]">{p.title}</h3>
                    <p className="text-[0.85rem] text-[var(--muted)] leading-relaxed m-0">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
