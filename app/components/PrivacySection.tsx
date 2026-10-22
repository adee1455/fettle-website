import React from "react";

export default function PrivacySection() {
  return (
    <section className="mt-16 wrap" id="privacy">
      <div className="bg-[var(--elev)] border border-[var(--line)] rounded-[18px] p-8 sm:p-10 text-center shadow-xs">
        <h2 className="text-[clamp(1.5rem,3vw,1.9rem)] font-bold tracking-[-0.03em] mb-2 text-[var(--fg)]">
          It converts the file — not a copy in the cloud.
        </h2>
        <p className="text-[var(--muted)] max-w-[32rem] mx-auto text-[0.975rem] leading-relaxed mb-6">
          No account. No upload. Native Image I/O, PDFKit, AVFoundation. Originals stay put; output lands beside them.
        </p>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[0.85rem] font-medium text-[var(--muted)]">
          <span className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--ok)]" />
            100% on your Mac
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--ok)]" />
            Collision-safe names
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--ok)]" />
            Open source · MIT
          </span>
        </div>
      </div>
    </section>
  );
}
