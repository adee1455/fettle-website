import React from "react";

export default function FormatsSection() {
  return (
    <section className="pt-24 wrap" id="formats">
      <h2 className="text-[clamp(1.55rem,3vw,2rem)] font-bold tracking-[-0.035em] text-center mb-2.5 leading-[1.15] text-[var(--fg)]">
        What it reaches for
      </h2>
      <p className="text-center text-[var(--muted)] max-w-[30rem] mx-auto mb-9 text-[1.02rem]">
        Images first — then PDFs, media, and quick file actions. Optional local FFmpeg / ImageMagick / qpdf.
      </p>

      {/* Unequal 3-Tile Grid */}
      <div className="grid grid-cols-1 md:grid-cols-[1.35fr_1fr_1fr] gap-3">
        {/* Lead Tile (Images) */}
        <div className="bg-[var(--fg)] text-[var(--bg)] rounded-[14px] p-5 flex flex-col justify-between shadow-xs">
          <div>
            <h3 className="text-[1.05rem] font-bold tracking-[-0.02em] mb-1.5 text-[var(--bg)]">
              Images
            </h3>
            <p className="text-[0.875rem] text-[color-mix(in_srgb,var(--bg)_75%,transparent)] leading-relaxed m-0">
              PNG ↔ JPEG, WebP, HEIC → JPEG, 50% resize, strip EXIF. The daily conversions.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-[color-mix(in_srgb,var(--bg)_15%,transparent)] text-[0.7rem] font-mono text-[color-mix(in_srgb,var(--bg)_60%,transparent)]">
            Apple Image I/O
          </div>
        </div>

        {/* Tile 2 (PDF & Docs) */}
        <div className="bg-[var(--elev)] border border-[var(--line)] rounded-[14px] p-5 flex flex-col justify-between shadow-xs">
          <div>
            <h3 className="text-[1.05rem] font-bold tracking-[-0.02em] mb-1.5 text-[var(--fg)]">
              PDF &amp; docs
            </h3>
            <p className="text-[0.875rem] text-[var(--muted)] leading-relaxed m-0">
              Merge, split, images → PDF, text / RTF → PDF.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-[var(--line)] text-[0.7rem] font-mono text-[var(--faint)]">
            Apple PDFKit
          </div>
        </div>

        {/* Tile 3 (Media & Files) */}
        <div className="bg-[var(--elev)] border border-[var(--line)] rounded-[14px] p-5 flex flex-col justify-between shadow-xs">
          <div>
            <h3 className="text-[1.05rem] font-bold tracking-[-0.02em] mb-1.5 text-[var(--fg)]">
              Media &amp; files
            </h3>
            <p className="text-[0.875rem] text-[var(--muted)] leading-relaxed m-0">
              MP4, extract audio, thumbnails. Reveal, copy path, duplicate.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-[var(--line)] text-[0.7rem] font-mono text-[var(--faint)]">
            Apple AVFoundation
          </div>
        </div>
      </div>
    </section>
  );
}
