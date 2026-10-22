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

  const terminalCmd = "xattr -cr /Applications/Fettle.app";

  const copyCommand = () => {
    navigator.clipboard.writeText(terminalCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-lg rounded-[16px] bg-[var(--elev)] border border-[var(--line)] shadow-[var(--shadow)] p-6 sm:p-7 text-[var(--fg)]"
        role="dialog"
        aria-modal="true"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close dialog"
          className="absolute top-4 right-4 p-1.5 rounded-full text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--bg-soft)] transition cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-full bg-[color-mix(in_srgb,var(--ok)_15%,transparent)] text-[var(--ok)] flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-[1.15rem] font-bold tracking-tight">Your download is starting!</h3>
            <p className="text-[0.825rem] text-[var(--muted)]">
              Fettle-macOS.dmg is downloading directly in your browser.
            </p>
          </div>
        </div>

        {/* Direct links if download didn't start */}
        <div className="p-3 mb-4 rounded-[10px] bg-[var(--bg-soft)] border border-[var(--line)] text-xs text-[var(--muted)] flex items-center justify-between">
          <span>Didn&apos;t start automatically?</span>
          <div className="flex items-center gap-2.5">
            <a
              href="/download"
              download
              className="font-semibold text-[var(--blue)] hover:underline flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" />
              Direct DMG
            </a>
            <span className="text-[var(--faint)]">•</span>
            <a
              href="/download?format=zip"
              download
              className="font-semibold text-[var(--blue)] hover:underline"
            >
              ZIP
            </a>
          </div>
        </div>

        {/* First time launch notice */}
        <div className="space-y-3.5">
          <div className="rounded-[10px] border border-[var(--line)] bg-[var(--bg-soft)] p-3.5 text-xs">
            <h4 className="font-semibold text-[var(--fg)] mb-1 flex items-center gap-1.5">
              <span></span> First-Time Launch on macOS Sonoma / Sequoia
            </h4>
            <p className="text-[var(--muted)] leading-relaxed mb-2">
              Because Fettle is free, independent open-source software, macOS Gatekeeper will verify it on first run:
            </p>
            <ol className="text-[var(--muted)] space-y-1 list-decimal list-inside pl-0.5">
              <li>Drag <strong>Fettle.app</strong> into your Applications folder.</li>
              <li>
                <strong>Right-click</strong> Fettle.app &rarr; click <strong>Open</strong> &rarr; click <strong>Open Anyway</strong>.
              </li>
            </ol>
          </div>

          {/* Terminal bypass shortcut */}
          <div className="rounded-[10px] bg-[var(--ink)] text-[var(--ink-fg)] p-3 font-mono text-xs">
            <div className="flex items-center justify-between mb-1 text-[var(--faint)] text-[11px]">
              <span className="flex items-center gap-1">
                <Terminal className="w-3.5 h-3.5 text-[var(--blue)]" /> Or run in Terminal:
              </span>
              <button
                onClick={copyCommand}
                type="button"
                className="flex items-center gap-1 text-[var(--ink-fg)] bg-[color-mix(in_srgb,var(--ink-fg)_15%,transparent)] hover:bg-[color-mix(in_srgb,var(--ink-fg)_25%,transparent)] px-2 py-0.5 rounded transition cursor-pointer"
              >
                <Copy className="w-3 h-3" />
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
            <code className="text-[var(--ok)] select-all block break-all font-mono text-[11px]">
              {terminalCmd}
            </code>
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-5 flex items-center justify-between pt-3 border-t border-[var(--line)] text-xs text-[var(--muted)]">
          <a
            href="https://github.com/adee1455/fettle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--fg)] flex items-center gap-1 transition"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            View repository on GitHub
          </a>
          <button
            onClick={onClose}
            type="button"
            className="px-3.5 py-1.5 rounded-[8px] bg-[var(--ink)] text-[var(--ink-fg)] font-semibold hover:opacity-90 transition cursor-pointer"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
