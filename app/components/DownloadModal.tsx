"use client";

import { useState } from "react";
import { CheckCircle2, Copy, Download, ExternalLink, Terminal, X } from "lucide-react";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const cmd = "xattr -cr /Applications/Fettle.app";

  const copy = () => {
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)" }}>
      <div
        className="relative w-full max-w-lg rounded-[20px] border border-[var(--line)] shadow-[var(--shadow-xl)] p-7"
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
            <h3 className="text-[1.15rem] font-bold tracking-[-0.02em] text-[var(--fg)]">Your download is starting!</h3>
            <p className="text-[0.85rem] text-[var(--muted)] mt-0.5">
              Fettle-macOS.dmg is downloading directly from this site.
            </p>
          </div>
        </div>

        {/* Manual fallback links */}
        <div className="p-3.5 rounded-[12px] mb-4 border border-[var(--line)] flex items-center justify-between text-[0.8rem]" style={{ background: "var(--bg-subtle)" }}>
          <span className="text-[var(--muted)]">Didn't start?</span>
          <div className="flex items-center gap-3">
            <a href="/download" download className="flex items-center gap-1 font-semibold text-[var(--blue)] hover:underline">
              <Download className="w-3.5 h-3.5" /> DMG
            </a>
            <span className="w-px h-4 bg-[var(--line)]" />
            <a href="/download?format=zip" download className="font-semibold text-[var(--blue)] hover:underline">ZIP</a>
          </div>
        </div>

        {/* Gatekeeper instructions */}
        <div className="rounded-[12px] border border-[var(--line)] overflow-hidden mb-4">
          <div className="px-4 py-3 border-b border-[var(--line)] flex items-center gap-2" style={{ background: "var(--bg-subtle)" }}>
            <span className="text-[0.72rem] font-semibold uppercase tracking-wider text-[var(--muted)]">
              ⚠ First-Time Launch — macOS Gatekeeper
            </span>
          </div>
          <div className="px-4 py-4">
            <ol className="text-[0.85rem] text-[var(--muted)] space-y-2 list-decimal list-inside">
              <li>Drag <strong className="text-[var(--fg)]">Fettle.app</strong> to Applications.</li>
              <li><strong className="text-[var(--fg)]">Right-click</strong> Fettle.app → <strong className="text-[var(--fg)]">Open</strong> → <strong className="text-[var(--fg)]">Open Anyway</strong>.</li>
            </ol>
          </div>
        </div>

        {/* Terminal command */}
        <div className="rounded-[12px] overflow-hidden border border-[var(--line)] mb-5">
          <div className="px-4 py-2.5 flex items-center justify-between border-b border-[var(--line)]" style={{ background: "var(--bg-subtle)" }}>
            <span className="flex items-center gap-1.5 text-[0.75rem] text-[var(--muted)]">
              <Terminal className="w-3.5 h-3.5" /> Or use Terminal:
            </span>
            <button onClick={copy} type="button" className="flex items-center gap-1.5 text-[0.72rem] font-medium text-[var(--muted)] hover:text-[var(--fg)] cursor-pointer transition-colors">
              <Copy className="w-3 h-3" />
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <div className="px-4 py-3 font-mono text-[0.8rem] text-[var(--ok)] select-all break-all" style={{ background: "var(--ink)", color: "var(--ok)" }}>
            {cmd}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <a href="https://github.com/adee1455/fettle" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[0.8rem] text-[var(--muted)] hover:text-[var(--fg)] transition-colors">
            <ExternalLink className="w-3.5 h-3.5" /> View on GitHub
          </a>
          <button
            onClick={onClose}
            type="button"
            className="px-4 py-2 rounded-[8px] text-[0.875rem] font-semibold bg-[var(--fg)] text-[var(--bg)] hover:opacity-85 transition cursor-pointer"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
