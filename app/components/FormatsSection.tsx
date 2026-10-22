import React from "react";

const TILES = [
  {
    lead: true,
    title: "Images",
    desc: "PNG ↔ JPEG, WebP, HEIC → JPEG, 50% resize, strip EXIF metadata. The conversions you do every day.",
    framework: "Image I/O",
    extras: ["PNG → WebP", "HEIC → JPEG", "Strip EXIF", "50% Resize"],
    icon: "🖼",
  },
  {
    lead: false,
    title: "PDF & Docs",
    desc: "Merge, split pages, images → PDF, Word / RTF → PDF — using Apple PDFKit, no dependencies.",
    framework: "PDFKit",
    extras: ["Images → PDF", "PDF Merge", "PDF Split", "DOCX → PDF"],
    icon: "📄",
  },
  {
    lead: false,
    title: "Media & Files",
    desc: "Extract audio from video, convert to MP4, grab thumbnails. Reveal, copy path, duplicate safely.",
    framework: "AVFoundation",
    extras: ["Extract MP3", "MOV → MP4", "Thumbnail", "Copy Path"],
    icon: "🎬",
  },
];

export default function FormatsSection() {
  return (
    <section className="pt-28" id="formats">
      <div className="container">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-[var(--faint)] mb-4">
            Formats & Actions
          </p>
          <h2 className="section-heading mb-4">What it reaches for</h2>
          <p className="section-lead">
            40+ built-in conversion presets using native Apple frameworks. No extra installs unless you want FFmpeg / ImageMagick.
          </p>
        </div>

        {/* Unequal tile grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-4">
          {TILES.map((tile) => (
            <div
              key={tile.title}
              className={`rounded-[18px] p-7 flex flex-col gap-4 border transition-shadow hover:shadow-[var(--shadow-md)] ${
                tile.lead
                  ? "bg-[var(--fg)] border-transparent text-[var(--bg)]"
                  : "bg-[var(--elev)] border-[var(--line)] text-[var(--fg)]"
              }`}
            >
              <div>
                <div className={`text-3xl mb-4`}>{tile.icon}</div>
                <h3 className="text-[1.15rem] font-bold tracking-[-0.02em] mb-2">
                  {tile.title}
                </h3>
                <p className={`text-[0.875rem] leading-relaxed ${tile.lead ? "text-[color-mix(in_srgb,var(--bg)_65%,transparent)]" : "text-[var(--muted)]"}`}>
                  {tile.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {tile.extras.map((tag) => (
                  <span
                    key={tag}
                    className={`text-[0.7rem] font-semibold px-2.5 py-1 rounded-full border ${
                      tile.lead
                        ? "border-[color-mix(in_srgb,var(--bg)_20%,transparent)] text-[color-mix(in_srgb,var(--bg)_75%,transparent)]"
                        : "border-[var(--line)] text-[var(--muted)]"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className={`pt-3 border-t text-[0.7rem] font-mono ${
                tile.lead
                  ? "border-[color-mix(in_srgb,var(--bg)_15%,transparent)] text-[color-mix(in_srgb,var(--bg)_55%,transparent)]"
                  : "border-[var(--line)] text-[var(--faint)]"
              }`}>
                Apple {tile.framework}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
