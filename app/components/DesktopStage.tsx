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
  { id: "webp", label: "WebP", out: "webp", path: "M100,100 L100,18 A82,82 0 0,1 158,42 Z", tx: 128, ty: 46 },
  { id: "jpeg", label: "JPEG", out: "jpeg", path: "M100,100 L158,42 A82,82 0 0,1 182,100 Z", tx: 154, ty: 76 },
  { id: "pdf", label: "PDF", out: "pdf", path: "M100,100 L182,100 A82,82 0 0,1 158,158 Z", tx: 150, ty: 130 },
  { id: "50%", label: "50%", out: "50%", path: "M100,100 L158,158 A82,82 0 0,1 100,182 Z", tx: 118, ty: 162 },
  { id: "mp3", label: "MP3", out: "mp3", path: "M100,100 L100,182 A82,82 0 0,1 42,158 Z", tx: 56, ty: 162 },
  { id: "heic", label: "HEIC", out: "heic", path: "M100,100 L42,158 A82,82 0 0,1 18,100 Z", tx: 30, ty: 130 },
  { id: "exif", label: "EXIF", out: "exif", path: "M100,100 L18,100 A82,82 0 0,1 42,42 Z", tx: 34, ty: 76 },
  { id: "merge", label: "Merge", out: "merge", path: "M100,100 L42,42 A82,82 0 0,1 100,18 Z", tx: 66, ty: 46 },
];

export default function DesktopStage() {
  const [selectedFile, setSelectedFile] = useState<FileItem>(FILES[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSlice, setActiveSlice] = useState<string>("webp");
  const [toastTitle, setToastTitle] = useState<string | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const playClickSound = (freq = 640) => {
    try {
      if (!audioCtxRef.current) {
        const AudioClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioClass();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") ctx.resume();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch {
      // Audio not supported or blocked
    }
  };

  const handleConvert = (outFormat: string) => {
    playClickSound(880);
    const baseName = selectedFile.name.replace(/\.[^.]+$/, "");
    setToastTitle(`Converted · ${baseName}.${outFormat}`);
    setIsOpen(false);

    try {
      confetti({
        particleCount: 30,
        spread: 50,
        origin: { y: 0.65 },
        colors: ["#2B6BFF", "#4C82FF", "#0D8A55", "#FF6154"],
      });
    } catch {}

    setTimeout(() => {
      setToastTitle(null);
    }, 2800);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Shift" && !isOpen) {
        setIsOpen(true);
        playClickSound(520);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
      const num = parseInt(e.key, 10);
      if (num >= 1 && num <= 8) {
        const target = SLICES[num - 1];
        if (target) handleConvert(target.out);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedFile]);

  return (
    <div className="w-[min(880px,calc(100%-24px))] mx-auto mt-9" id="try">
      <div className="bg-[var(--win)] rounded-[14px] overflow-hidden border border-[var(--line)] shadow-[var(--shadow)]">
        {/* Titlebar */}
        <div className="h-10 bg-[var(--win-bar)] border-b border-[var(--line)] flex items-center gap-2 px-3.5 relative">
          <div className="flex gap-1.5">
            <i className="w-[11px] h-[11px] rounded-full bg-[#FF5F57] block border border-black/10" />
            <i className="w-[11px] h-[11px] rounded-full bg-[#FEBC2E] block border border-black/10" />
            <i className="w-[11px] h-[11px] rounded-full bg-[#28C840] block border border-black/10" />
          </div>
          <em className="absolute left-1/2 -translate-x-1/2 not-italic text-[0.72rem] font-medium text-[var(--muted)]">
            Desktop — try it
          </em>
        </div>

        {/* Desk Surface */}
        <div
          onClick={(e) => {
            const target = e.target as HTMLElement;
            if (target.closest(".file-card") || target.closest(".radial-menu")) return;
            setIsOpen(!isOpen);
            playClickSound(520);
          }}
          className="min-h-[400px] bg-[var(--desk)] relative overflow-hidden select-none cursor-default"
        >
          {/* Sample Files on Desktop */}
          <div className="absolute top-7 left-7 flex flex-col gap-3.5 z-10">
            {FILES.map((f) => {
              const isSelected = selectedFile.id === f.id;
              return (
                <div
                  key={f.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedFile(f);
                    playClickSound(600);
                  }}
                  className="w-[60px] text-center text-[0.62rem] text-[var(--muted)] cursor-pointer file-card group"
                >
                  <div
                    className={`w-[42px] h-[52px] mx-auto mb-1.5 rounded-[7px] bg-[var(--elev)] border border-[var(--line)] shadow-[0_6px_16px_rgba(0,0,0,0.08)] grid place-items-end justify-center pb-1.5 text-[0.55rem] font-bold text-[var(--blue)] transition-all ${
                      isSelected
                        ? "outline-2 outline-[var(--blue)] outline-offset-2"
                        : "group-hover:border-[var(--muted)]"
                    }`}
                  >
                    {f.type}
                  </div>
                  <span className={isSelected ? "font-semibold text-[var(--fg)]" : ""}>
                    {f.name.replace(/\.[^.]+$/, "")}
                  </span>
                </div>
              );
            })}
          </div>

          {/* 8-Slice Radial Wheel */}
          <div
            className={`radial-menu absolute top-1/2 left-[56%] -translate-x-1/2 -translate-y-1/2 w-[290px] h-[290px] transition-all duration-200 z-20 ${
              isOpen
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full drop-shadow-[0_14px_32px_rgba(0,0,0,0.14)]"
            >
              {SLICES.map((slice, i) => {
                const isCurrentActive = activeSlice === slice.id;
                return (
                  <g
                    key={slice.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleConvert(slice.out);
                    }}
                    onMouseEnter={() => {
                      setActiveSlice(slice.id);
                      playClickSound(700 + i * 30);
                    }}
                    className="cursor-pointer group"
                  >
                    <path
                      d={slice.path}
                      fill={isCurrentActive ? "var(--slice-on)" : "var(--slice)"}
                      className="transition-colors duration-100"
                    />
                    <text
                      x={slice.tx}
                      y={slice.ty}
                      fill={isCurrentActive ? "var(--slice-t-on)" : "var(--slice-t)"}
                      className="font-sans text-[11px] font-semibold pointer-events-none select-none transition-colors duration-100"
                    >
                      {slice.label}
                    </text>
                  </g>
                );
              })}

              {/* Center Hub */}
              <circle
                cx="100"
                cy="100"
                r="30"
                fill="var(--elev)"
                stroke="var(--line)"
                className="pointer-events-none"
              />
              <text
                x="100"
                y="104"
                textAnchor="middle"
                fill="var(--faint)"
                className="font-sans text-[10px] font-semibold pointer-events-none select-none"
              >
                Shift
              </text>
            </svg>
          </div>

          {/* Hint Pill */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 bottom-5 text-[0.75rem] font-medium text-[var(--muted)] bg-[color-mix(in_srgb,var(--elev)_90%,transparent)] border border-[var(--line)] px-3 py-1.5 rounded-full whitespace-nowrap transition-opacity duration-200 pointer-events-none ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          >
            Click a file · hold <kbd className="font-bold text-[var(--fg)] bg-[var(--bg-soft)] px-1.5 py-0.5 rounded">Shift</kbd> or click desk · press <kbd className="font-bold text-[var(--fg)] bg-[var(--bg-soft)] px-1.5 py-0.5 rounded">1</kbd>–<kbd className="font-bold text-[var(--fg)] bg-[var(--bg-soft)] px-1.5 py-0.5 rounded">8</kbd>
          </div>

          {/* macOS Toast Notification */}
          <div
            className={`absolute right-4 bottom-4 flex items-center gap-2.5 p-3 min-w-[200px] bg-[var(--elev)] border border-[var(--line)] rounded-[12px] shadow-[0_10px_28px_rgba(0,0,0,0.12)] transition-all duration-300 z-30 pointer-events-none ${
              toastTitle
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2.5"
            }`}
          >
            <div className="w-7 h-7 rounded-[8px] bg-[color-mix(in_srgb,var(--ok)_14%,transparent)] text-[var(--ok)] grid place-items-center shrink-0">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <div>
              <strong className="block text-[0.78rem] text-[var(--fg)]">
                {toastTitle || "Converted"}
              </strong>
              <span className="text-[0.7rem] text-[var(--muted)]">Show in Finder</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
