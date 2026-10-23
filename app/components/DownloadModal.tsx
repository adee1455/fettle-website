"use client";

import { CheckCircle2, Download, ExternalLink, ShieldCheck, X } from "lucide-react";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)" }}>
      <div
        className="relative w-full max-w-lg rounded-[22px] border border-[var(--line)] shadow-[var(--shadow-xl)] p-7"
        style={{ background: "var(--elev)" }}
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          type="button"
          aria-label="Close"
          className="absolute top-4 right-4 p-1.5 rounded-[8px] text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--bg-soft)] transition cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="flex items-start gap-3.5 mb-5">
          <div className="w-10 h-10 rounded-[12px] flex items-center justify-center shrink-0" style={{ background: "var(--ok-soft)", color: "var(--ok)" }}>
            <CheckCircle2 className="w-5.5 h-5.5" />
          </div>
          <div>
            <h3 className="text-[1.15rem] font-bold tracking-[-0.02em] text-[var(--fg)]">Your download has started!</h3>
            <p className="text-[0.85rem] text-[var(--muted)] mt-0.5">
              <strong className="text-[var(--fg)] font-medium">Fettle-macOS.dmg</strong> is downloading directly to your Mac.
            </p>
          </div>
        </div>

        {/* Manual fallback links */}
        <div className="p-3.5 rounded-[12px] mb-4 border border-[var(--line)] flex items-center justify-between text-[0.8rem]" style={{ background: "var(--bg-subtle)" }}>
          <span className="text-[var(--muted)]">Didn't start automatically?</span>
          <div className="flex items-center gap-3">
            <a href="/download" download className="flex items-center gap-1 font-semibold text-[var(--blue)] hover:underline">
              <Download className="w-3.5 h-3.5" /> Direct DMG
            </a>
            <span className="w-px h-4 bg-[var(--line)]" />
            <a href="/download?format=zip" download className="font-semibold text-[var(--blue)] hover:underline">ZIP Archive</a>
          </div>
        </div>

        {/* First-time launch instructions */}
        <div className="rounded-[14px] border border-[var(--line)] overflow-hidden mb-5" style={{ background: "var(--bg-soft)" }}>
          <div className="px-4 py-3 border-b border-[var(--line)] flex items-center justify-between" style={{ background: "var(--bg-subtle)" }}>
            <span className="text-[0.74rem] font-semibold tracking-wide text-[var(--fg)] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[var(--blue)]" /> First Launch Guide
            </span>
            <span className="text-[0.72rem] text-[var(--muted)]">One-time only</span>
          </div>
          <div className="p-4 space-y-3 text-[0.84rem]">
            <div className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-[var(--blue)] text-white text-[0.7rem] font-bold grid place-items-center shrink-0 mt-0.5">1</span>
              <p className="text-[var(--muted)] leading-relaxed">
                Drag <strong className="text-[var(--fg)]">Fettle.app</strong> into your Applications folder.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-[var(--blue)] text-white text-[0.7rem] font-bold grid place-items-center shrink-0 mt-0.5">2</span>
              <p className="text-[var(--muted)] leading-relaxed">
                Hold <kbd className="px-1.5 py-0.5 rounded bg-[var(--elev)] border border-[var(--line)] text-[0.72rem] font-mono text-[var(--fg)]">Control ⌃</kbd> while clicking Fettle.app in Finder, then choose <strong className="text-[var(--fg)]">Open</strong>.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-[var(--ok)] text-white text-[0.7rem] font-bold grid place-items-center shrink-0 mt-0.5">3</span>
              <p className="text-[var(--muted)] leading-relaxed">
                Click <strong className="text-[var(--fg)]">Open Anyway</strong> (or allow under <strong className="text-[var(--fg)]">System Settings → Privacy &amp; Security</strong> on Sequoia). macOS saves this permanently.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-1">
          <a href="https://github.com/adee1455/fettle" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[0.8rem] text-[var(--muted)] hover:text-[var(--fg)] transition-colors">
            <ExternalLink className="w-3.5 h-3.5" /> View on GitHub
          </a>
          <button
            onClick={onClose}
            type="button"
            className="px-5 py-2 rounded-[10px] text-[0.875rem] font-semibold bg-[var(--fg)] text-[var(--bg)] hover:opacity-90 transition cursor-pointer shadow-[var(--shadow-xs)]"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
