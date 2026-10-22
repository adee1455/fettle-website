"use client";

import { useEffect, useState, useRef } from "react";
import confetti from "canvas-confetti";

interface FileItem {
  id: string;
  name: string;
  type: string;
}

const FILES: FileItem[] = [
  { id: "1", name: "photo.png", type: "PNG" },
  { id: "2", name: "clip.mp4", type: "MP4" },
  { id: "3", name: "deck.pdf", type: "PDF" },
];

const SLICES = [
  { id: "webp", label: "WebP",  out: "webp",  path: "M100,100 L100,18 A82,82 0 0,1 158,42 Z",  tx: 128, ty: 45 },
  { id: "jpeg", label: "JPEG",  out: "jpeg",  path: "M100,100 L158,42 A82,82 0 0,1 182,100 Z", tx: 156, ty: 74 },
  { id: "pdf",  label: "PDF",   out: "pdf",   path: "M100,100 L182,100 A82,82 0 0,1 158,158 Z", tx: 153, ty: 130 },
  { id: "50%",  label: "50%",   out: "50%",   path: "M100,100 L158,158 A82,82 0 0,1 100,182 Z", tx: 117, ty: 163 },
  { id: "mp3",  label: "MP3",   out: "mp3",   path: "M100,100 L100,182 A82,82 0 0,1 42,158 Z",  tx: 54,  ty: 163 },
  { id: "heic", label: "HEIC",  out: "heic",  path: "M100,100 L42,158 A82,82 0 0,1 18,100 Z",  tx: 28,  ty: 130 },
  { id: "exif", label: "EXIF",  out: "exif",  path: "M100,100 L18,100 A82,82 0 0,1 42,42 Z",   tx: 32,  ty: 74 },
  { id: "dup",  label: "Copy",  out: "copy",  path: "M100,100 L42,42 A82,82 0 0,1 100,18 Z",   tx: 65,  ty: 45 },
];

export default function DesktopStage() {
  const [viewMode, setViewMode] = useState<"interactive" | "radial_screenshot" | "app_screenshot">("interactive");
  const [selectedFile, setSelectedFile] = useState<FileItem>(FILES[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSlice, setActiveSlice] = useState<string>("webp");
  const [toastTitle, setToastTitle] = useState<string | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const playTone = (freq = 640, type: OscillatorType = "sine", dur = 0.08) => {
    try {
      if (!audioCtxRef.current) {
        const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AC();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") ctx.resume();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + dur);
    } catch {}
  };

  const handleConvert = (outFmt: string) => {
    playTone(880, "sine", 0.12);
    const base = selectedFile.name.replace(/\.[^.]+$/, "");
    setToastTitle(`Converted · ${base}.${outFmt}`);
    setIsOpen(false);

    try {
      confetti({ particleCount: 35, spread: 55, origin: { y: 0.7 },
        colors: ["#2563EB", "#4B79FF", "#0D8A55", "#FF6154", "#FEBC2E"] });
    } catch {}

    setTimeout(() => setToastTitle(null), 3000);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (viewMode !== "interactive") return;
      if (e.key === "Shift" && !isOpen) { setIsOpen(true); playTone(520, "triangle", 0.06); }
      if (e.key === "Escape") setIsOpen(false);
      const n = parseInt(e.key, 10);
      if (n >= 1 && n <= 8) handleConvert(SLICES[n - 1].out);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, selectedFile, viewMode]);

  return (
    <section className="pt-4 pb-8" id="try">
      {/* View Switcher Tabs */}
      <div className="container mb-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-[var(--faint)]">
          Live Preview &amp; Screenshots
        </p>

        <div className="flex items-center gap-1 p-1 rounded-[10px] bg-[var(--bg-soft)] border border-[var(--line)] shadow-xs">
          <button
            onClick={() => setViewMode("interactive")}
            className={`px-3 py-1.5 rounded-[7px] text-[0.78rem] font-semibold transition-all cursor-pointer ${
              viewMode === "interactive"
                ? "bg-[var(--elev)] text-[var(--fg)] shadow-xs"
                : "text-[var(--muted)] hover:text-[var(--fg)]"
            }`}
          >
            ⚡ Live Interactive Demo
          </button>
          <button
            onClick={() => setViewMode("radial_screenshot")}
            className={`px-3 py-1.5 rounded-[7px] text-[0.78rem] font-semibold transition-all cursor-pointer ${
              viewMode === "radial_screenshot"
                ? "bg-[var(--elev)] text-[var(--fg)] shadow-xs"
                : "text-[var(--muted)] hover:text-[var(--fg)]"
            }`}
          >
             Native Radial HUD
          </button>
          <button
            onClick={() => setViewMode("app_screenshot")}
            className={`px-3 py-1.5 rounded-[7px] text-[0.78rem] font-semibold transition-all cursor-pointer ${
              viewMode === "app_screenshot"
                ? "bg-[var(--elev)] text-[var(--fg)] shadow-xs"
                : "text-[var(--muted)] hover:text-[var(--fg)]"
            }`}
          >
             App Window
          </button>
        </div>
      </div>

      {/* Mac window */}
      <div className="w-[min(940px,calc(100%-32px))] mx-auto rounded-[20px] overflow-hidden shadow-[var(--shadow-xl)] border border-[var(--line)]" style={{ background: "var(--win)" }}>
        {/* Titlebar */}
        <div className="h-11 flex items-center gap-2.5 px-4 border-b border-[var(--line)] relative" style={{ background: "var(--win-bar)" }}>
          <div className="flex gap-2 z-10">
            <span className="w-3 h-3 rounded-full bg-[#FF5F57] border border-black/[0.08] block" />
            <span className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-black/[0.08] block" />
            <span className="w-3 h-3 rounded-full bg-[#28C840] border border-black/[0.08] block" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-[0.72rem] font-medium text-[var(--muted)]">
              {viewMode === "interactive" && "Desktop — try it"}
              {viewMode === "radial_screenshot" && "Native macOS Radial HUD (Isolated Crop)"}
              {viewMode === "app_screenshot" && "Fettle for Mac (Clean Window)"}
            </span>
          </div>

          {viewMode === "interactive" && (
            <div className="ml-auto z-10 flex items-center gap-1.5">
              {FILES.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setSelectedFile(f)}
                  className={`px-2.5 py-0.5 rounded text-[0.65rem] font-bold transition-all cursor-pointer ${
                    selectedFile.id === f.id
                      ? "bg-[var(--blue)] text-white"
                      : "bg-[var(--line)] text-[var(--muted)] hover:text-[var(--fg)]"
                  }`}
                >
                  {f.type}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Real Screenshot View: Native Radial HUD */}
        {viewMode === "radial_screenshot" && (
          <div className="relative min-h-[460px] flex items-center justify-center overflow-hidden p-8" style={{ background: "var(--desk)" }}>
            <div className="relative max-w-[380px] w-full flex items-center justify-center">
              <img
                src="/screenshots/radial-menu.png"
                alt="Real Fettle macOS Native Radial Menu Screenshot"
                className="w-full h-auto object-contain transition-transform hover:scale-105 duration-300"
              />
            </div>
            <div className="absolute top-4 right-4 bg-[var(--elev)]/90 backdrop-blur-md border border-[var(--line)] px-3 py-1.5 rounded-full text-xs text-[var(--fg)] font-medium shadow-xs">
               Real Native Retina HUD
            </div>
          </div>
        )}

        {/* Real Screenshot View: App Window */}
        {viewMode === "app_screenshot" && (
          <div className="relative min-h-[460px] flex items-center justify-center overflow-hidden p-6 sm:p-10" style={{ background: "var(--desk)" }}>
            <div className="relative max-w-[840px] w-full">
              <img
                src="/screenshots/fettle-main-window.png"
                alt="Real Fettle macOS App Window Screenshot"
                className="w-full h-auto object-contain transition-transform hover:scale-[1.01] duration-300"
              />
            </div>
            <div className="absolute top-4 right-4 bg-[var(--elev)]/90 backdrop-blur-md border border-[var(--line)] px-3 py-1.5 rounded-full text-xs text-[var(--fg)] font-medium shadow-xs">
               Native SwiftUI Window
            </div>
          </div>
        )}

        {/* Interactive Desktop Canvas */}
        {viewMode === "interactive" && (
          <div
            onClick={(e) => {
              const t = e.target as HTMLElement;
              if (t.closest(".file-card") || t.closest(".radial-wheel")) return;
              setIsOpen(!isOpen);
              playTone(520, "triangle", 0.06);
            }}
            className="relative min-h-[460px] cursor-default select-none"
            style={{ background: "var(--desk)" }}
          >
            {/* Files column */}
            <div className="absolute top-8 left-8 flex flex-col gap-5 z-10">
              {FILES.map((f) => {
                const selected = selectedFile.id === f.id;
                const colors: Record<string, string> = { PNG: "#2563EB", MP4: "#7C3AED", PDF: "#DC2626" };
                return (
                  <div
                    key={f.id}
                    onClick={(e) => { e.stopPropagation(); setSelectedFile(f); playTone(600, "sine", 0.05); }}
                    className="file-card w-[68px] text-center cursor-pointer group"
                  >
                    <div
                      className={`relative w-[48px] h-[60px] mx-auto mb-2 rounded-[9px] shadow-[var(--shadow-sm)] flex flex-col items-center justify-end pb-2 transition-all duration-150 ${
                        selected
                          ? "ring-2 ring-[var(--blue)] ring-offset-2 ring-offset-[var(--desk)] scale-105"
                          : "hover:scale-105"
                      }`}
                      style={{ background: "var(--elev)", border: "1px solid var(--line)" }}
                    >
                      <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-[var(--bg-soft)] border-b border-l border-[var(--line)] rounded-bl-[4px]" />
                      <span
                        className="text-[0.55rem] font-black tracking-wide"
                        style={{ color: colors[f.type] || "var(--blue)" }}
                      >
                        {f.type}
                      </span>
                    </div>
                    <span className={`text-[0.62rem] font-medium leading-tight block ${selected ? "text-[var(--fg)] font-semibold" : "text-[var(--muted)]"}`}>
                      {f.name.replace(/\.[^.]+$/, "")}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Radial wheel */}
            <div
              className={`radial-wheel absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] transition-all duration-200 z-20 ${
                isOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-90 pointer-events-none"
              }`}
            >
              <svg viewBox="0 0 200 200" className="w-full h-full" style={{ filter: "drop-shadow(0 16px 40px rgba(0,0,0,0.18))" }}>
                {SLICES.map((slice, i) => {
                  const active = activeSlice === slice.id;
                  return (
                    <g
                      key={slice.id}
                      onClick={(e) => { e.stopPropagation(); handleConvert(slice.out); }}
                      onMouseEnter={() => { setActiveSlice(slice.id); playTone(680 + i * 28, "sine", 0.04); }}
                      className="cursor-pointer"
                    >
                      <path
                        d={slice.path}
                        fill={active ? "var(--slice-on)" : "var(--slice)"}
                        stroke="var(--line)"
                        strokeWidth="0.5"
                        className="transition-colors duration-100"
                      />
                      <text
                        x={slice.tx}
                        y={slice.ty}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill={active ? "var(--slice-t-on)" : "var(--slice-t)"}
                        fontSize="11"
                        fontWeight="700"
                        fontFamily="inherit"
                        className="pointer-events-none select-none transition-colors duration-100"
                      >
                        {slice.label}
                      </text>
                    </g>
                  );
                })}

                <circle cx="100" cy="100" r="31" fill="var(--elev)" stroke="var(--line)" strokeWidth="1" />
                <text x="100" y="98" textAnchor="middle" fill="var(--muted)" fontSize="9.5" fontWeight="700" fontFamily="inherit">Shift</text>
                <text x="100" y="109" textAnchor="middle" fill="var(--faint)" fontSize="7.5" fontFamily="inherit">hold</text>
              </svg>
            </div>

            {/* Hint pill */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 bottom-6 transition-all duration-200 pointer-events-none ${
                isOpen ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"
              }`}
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[0.78rem] font-medium text-[var(--muted)] whitespace-nowrap shadow-[var(--shadow-md)] border border-[var(--line)]" style={{ background: "color-mix(in srgb, var(--elev) 90%, transparent)", backdropFilter: "blur(8px)" }}>
                <span>Click a file</span>
                <span className="w-px h-4 bg-[var(--line)]" />
                <span>Hold <kbd className="font-bold text-[var(--fg)] bg-[var(--bg-soft)] border border-[var(--line)] px-1.5 py-0.5 rounded text-[11px]">Shift</kbd> or click desk</span>
                <span className="w-px h-4 bg-[var(--line)]" />
                <span>Press <kbd className="font-bold text-[var(--fg)] bg-[var(--bg-soft)] border border-[var(--line)] px-1.5 py-0.5 rounded text-[11px]">1</kbd>–<kbd className="font-bold text-[var(--fg)] bg-[var(--bg-soft)] border border-[var(--line)] px-1.5 py-0.5 rounded text-[11px]">8</kbd></span>
              </div>
            </div>

            {/* macOS Toast */}
            <div
              className={`absolute right-5 bottom-5 z-30 pointer-events-none transition-all duration-300 ${
                toastTitle ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-3 scale-95"
              }`}
            >
              <div className="flex items-center gap-3 px-4 py-3 min-w-[220px] rounded-[14px] shadow-[var(--shadow-xl)] border border-[var(--line)]" style={{ background: "var(--elev)" }}>
                <div
                  className="w-8 h-8 rounded-[9px] flex items-center justify-center shrink-0"
                  style={{ background: "var(--ok-soft)", color: "var(--ok)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <strong className="block text-[0.8rem] font-semibold text-[var(--fg)]">
                    {toastTitle}
                  </strong>
                  <span className="text-[0.7rem] text-[var(--muted)]">Show in Finder</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
