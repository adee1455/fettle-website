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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg rounded-2xl bg-white dark:bg-[#131620] border border-slate-200/90 dark:border-white/10 shadow-2xl p-6 sm:p-8 text-slate-900 dark:text-slate-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with success badge */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold tracking-tight">Your download is starting!</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Fettle-macOS.dmg will begin downloading in your browser.
            </p>
          </div>
        </div>

        {/* Direct links if download didn't start */}
        <div className="p-3.5 mb-5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 flex items-center justify-between">
          <span>Didn&apos;t start automatically?</span>
          <div className="flex items-center space-x-3">
            <a
              href="/download"
              download
              className="font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" />
              Direct DMG
            </a>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <a
              href="/download?format=zip"
              download
              className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              ZIP
            </a>
          </div>
        </div>

        {/* First time launch notice */}
        <div className="space-y-4">
          <div className="rounded-xl border border-amber-200 dark:border-amber-900/50 bg-amber-50/70 dark:bg-amber-950/20 p-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-1.5 flex items-center gap-1.5">
              <span>⚠️</span> First-Time Launch on macOS Sonoma / Sequoia
            </h4>
            <p className="text-xs text-amber-900/80 dark:text-amber-300/80 leading-relaxed mb-3">
              Because Fettle is free, independent open-source software (and not signed with a $99/yr Apple Enterprise Developer account), macOS Gatekeeper will verify it on first run:
            </p>
            <ol className="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 list-decimal list-inside pl-1">
              <li>Drag <strong>Fettle.app</strong> into your Applications folder.</li>
              <li>
                <strong>Right-click</strong> Fettle.app &rarr; click <strong>Open</strong> &rarr; click <strong>Open Anyway</strong>.
              </li>
            </ol>
          </div>

          {/* Terminal bypass shortcut */}
          <div className="rounded-xl bg-slate-950 text-slate-200 p-3.5 font-mono text-xs border border-slate-800">
            <div className="flex items-center justify-between mb-1.5 text-slate-400 text-[11px]">
              <span className="flex items-center gap-1">
                <Terminal className="w-3.5 h-3.5 text-blue-400" /> Or run in Terminal:
              </span>
              <button
                onClick={copyCommand}
                className="flex items-center gap-1 text-slate-300 hover:text-white px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 transition"
              >
                <Copy className="w-3 h-3" />
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <code className="text-emerald-400 select-all block break-all">{terminalCmd}</code>
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
          <a
            href="https://github.com/adee1455/fettle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 dark:hover:text-white flex items-center gap-1 transition"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            View source on GitHub
          </a>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition shadow-xs"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
