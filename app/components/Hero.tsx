"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Check, ChevronRight, Download, Shield, Sparkles, Zap } from "lucide-react";
import GithubIcon from "./GithubIcon";

interface HeroProps {
  onDownloadClick: () => void;
}

export default function Hero({ onDownloadClick }: HeroProps) {
  const [downloadCount, setDownloadCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/stats")
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.totalDownloads === "number" && data.totalDownloads > 0) {
          setDownloadCount(data.totalDownloads);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[450px] bg-gradient-to-tr from-blue-400/15 via-indigo-300/15 to-transparent dark:from-blue-600/10 dark:via-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Release Announcement Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-800/60 text-xs font-medium text-blue-700 dark:text-blue-300 mb-8 backdrop-blur-xs hover:border-blue-300 dark:hover:border-blue-700 transition shadow-xs">
          <span className="flex h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
          <span>v0.1.0 is now live for Apple Silicon &amp; Intel</span>
          <ChevronRight className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08] mb-6">
          Your files,{" "}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 dark:from-blue-400 dark:via-indigo-300 dark:to-blue-200 bg-clip-text text-transparent">
            in good shape.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
          The native macOS file utility you trigger without switching windows. Hold{" "}
          <kbd className="px-2 py-0.5 text-xs font-mono font-semibold rounded bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 shadow-xs">
            Shift
          </kbd>{" "}
          in Finder, pick your format from the radial wheel, and convert in place. 100% offline, zero cloud uploads.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <button
            onClick={onDownloadClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-base shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all duration-200 group active:scale-[0.98] cursor-pointer"
          >
            <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
            <span>Download for macOS</span>
            <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <a
            href="https://github.com/adee1455/fettle"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/90 text-slate-800 dark:text-slate-100 font-semibold text-base border border-slate-200/90 dark:border-white/10 shadow-xs hover:border-slate-300 dark:hover:border-white/20 transition-all duration-200"
          >
            <GithubIcon className="w-5 h-5" />
            <span>View on GitHub</span>
          </a>
        </div>

        {/* Subtext and Compatibility Chips */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-500" /> Apple Silicon &amp; Intel
          </span>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <span className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-500" /> macOS 14.0+ (Sonoma &amp; Sequoia)
          </span>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <span className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-blue-500" /> 100% Free &amp; Open Source
          </span>
          {downloadCount !== null && downloadCount > 0 && (
            <>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 font-medium bg-slate-100 dark:bg-slate-800/80 px-2.5 py-0.5 rounded-full">
                <Sparkles className="w-3 h-3 text-amber-500" />
                {downloadCount.toLocaleString()} downloads
              </span>
            </>
          )}
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-16 max-w-4xl mx-auto text-left">
          <div className="p-4 rounded-xl bg-white/70 dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-800/80 shadow-xs backdrop-blur-xs">
            <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
              <Zap className="w-4 h-4" />
            </div>
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white">0ms Window Switch</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Triggers in-place right at your cursor in Finder.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/70 dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-800/80 shadow-xs backdrop-blur-xs">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
              <Shield className="w-4 h-4" />
            </div>
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white">100% Offline</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Uses Apple Image I/O &amp; PDFKit. Never touches the internet.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/70 dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-800/80 shadow-xs backdrop-blur-xs">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-3">
              <Sparkles className="w-4 h-4" />
            </div>
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white">In-Place Output</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Files appear in the same folder with collision safety.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/70 dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-800/80 shadow-xs backdrop-blur-xs">
            <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3">
              <span className="text-xs font-bold font-mono">⌘</span>
            </div>
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white">Menu Bar Native</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Silent LSUIElement, fast hotkeys &amp; ~18MB RAM footprint.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
