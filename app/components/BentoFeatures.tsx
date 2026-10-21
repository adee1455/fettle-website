"use client";

import { Shield, Zap, Sparkles, Command, Check, HardDrive, Cpu, Lock } from "lucide-react";

export default function BentoFeatures() {
  return (
    <section id="features" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-blue-200/60 dark:border-blue-900/40">
            Engineered for macOS
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mt-4 mb-4">
            Built for speed, privacy, and zero friction.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Every feature in Fettle is crafted as a native citizen of macOS Sonoma and Sequoia.
          </p>
        </div>

        {/* 4-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Shift-Trigger Velocity (Large 7-col) */}
          <div className="md:col-span-7 rounded-3xl bg-white dark:bg-[#10131c] border border-slate-200/80 dark:border-white/10 p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Shift-Trigger Velocity
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                No apps to open, no browser tabs to wait for, no window-switching. Hold Shift in Finder over any file, flick your cursor in the direction of the desired format, and release.
              </p>
            </div>

            {/* Visual Finder interaction mockup */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 text-xs font-mono space-y-2">
              <div className="flex items-center justify-between text-slate-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Finder Selection
                </span>
                <span className="text-[11px]">0.02s trigger time</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-blue-500 font-bold">📄 hero_cover.heic</span>
                  <span className="text-[10px] text-slate-400">(18.4 MB)</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-sans font-semibold">
                  <span>&rarr; hero_cover.webp</span>
                  <span className="text-[10px] bg-emerald-100 dark:bg-emerald-950 px-1.5 py-0.5 rounded">
                    -82%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: 100% Offline & Private (5-col) */}
          <div className="md:col-span-5 rounded-3xl bg-white dark:bg-[#10131c] border border-slate-200/80 dark:border-white/10 p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                100% Offline &amp; Private
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                Your personal photos, confidential PDFs, and raw media never leave your Mac. Zero telemetry, zero cloud APIs, zero network permissions requested.
              </p>
            </div>

            {/* Apple Framework pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700">
                 Image I/O
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700">
                 PDFKit
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700">
                 AVFoundation
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700">
                 CoreGraphics
              </span>
            </div>
          </div>

          {/* Card 3: In-Place Output Intelligence (5-col) */}
          <div className="md:col-span-5 rounded-3xl bg-white dark:bg-[#10131c] border border-slate-200/80 dark:border-white/10 p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-6">
                <HardDrive className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                In-Place Output Intelligence
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                No hunting through your messy Downloads folder. Output files are placed in the exact same directory alongside your original, with automatic collision resolution.
              </p>
            </div>

            <div className="space-y-2 text-xs font-mono text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/60 p-3.5 rounded-xl border border-slate-200/60 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-blue-500" />
                <span>Original: contract_final.docx</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span>Output: contract_final.pdf</span>
              </div>
            </div>
          </div>

          {/* Card 4: Silent Native Menu Bar Utility (7-col) */}
          <div className="md:col-span-7 rounded-3xl bg-white dark:bg-[#10131c] border border-slate-200/80 dark:border-white/10 p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/70 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-6">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Silent Menu Bar Native
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                Operates silently in the macOS status bar (`LSUIElement`) with an ultra-lean 18MB memory footprint. Supports Launch at Login, instant number hotkeys (`1`–`8`), and `Esc` dismissal.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 text-center">
                <span className="text-xl font-bold text-slate-900 dark:text-white block font-mono">
                  ~18 MB
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">RAM footprint</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 text-center">
                <span className="text-xl font-bold text-slate-900 dark:text-white block font-mono">
                  1–8
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">Hotkey execution</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 text-center">
                <span className="text-xl font-bold text-slate-900 dark:text-white block font-mono">
                  0%
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">Idle CPU usage</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
