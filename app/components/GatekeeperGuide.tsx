"use client";

import { useState } from "react";
import { Check, Copy, ExternalLink, ShieldCheck, Terminal, AlertCircle } from "lucide-react";

export default function GatekeeperGuide() {
  const [copied, setCopied] = useState(false);
  const terminalCmd = "xattr -cr /Applications/Fettle.app";

  const handleCopy = () => {
    navigator.clipboard.writeText(terminalCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="gatekeeper" className="py-20 md:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-blue-200/60 dark:border-blue-900/40">
            macOS First-Launch Guide
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mt-4 mb-4">
            Opening Fettle for the first time
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Because Fettle is free, community-driven open source software (not signed with an annual $99 Apple Developer subscription), macOS Gatekeeper will verify it on initial launch.
          </p>
        </div>

        {/* Main Guide Card */}
        <div className="rounded-3xl bg-white dark:bg-[#11131c] border border-slate-200/90 dark:border-white/10 p-6 sm:p-10 shadow-lg">
          {/* 3 Step Visual Flow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center mb-3 shadow-xs">
                1
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                Install to Applications
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Open <span className="font-mono font-semibold text-slate-800 dark:text-slate-200">Fettle-macOS.dmg</span> and drag the Fettle icon into your Applications directory.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center mb-3 shadow-xs">
                2
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                Right-Click &rarr; Open
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                In Finder &rarr; Applications, <span className="font-semibold text-slate-900 dark:text-white">Right-click</span> (or Control-click) <span className="font-mono">Fettle.app</span> and choose <span className="font-semibold text-slate-900 dark:text-white">Open</span>.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center mb-3 shadow-xs">
                3
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                Click &ldquo;Open Anyway&rdquo;
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Click <span className="font-semibold text-slate-900 dark:text-white">Open Anyway</span>. macOS saves this permission permanently—you will never be asked again!
              </p>
            </div>
          </div>

          {/* Terminal Alternative Card */}
          <div className="p-5 rounded-2xl bg-slate-950 text-slate-100 border border-slate-800 font-mono">
            <div className="flex items-center justify-between mb-3 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Terminal className="w-4 h-4 text-blue-400" />
                <span className="font-sans font-semibold">Or bypass Gatekeeper in 1 second via Terminal:</span>
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg transition"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied to clipboard" : "Copy command"}</span>
              </button>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 text-emerald-400 text-xs sm:text-sm select-all break-all">
              {terminalCmd}
            </div>
            <p className="text-[11px] font-sans text-slate-400 mt-2">
              This clears the quarantine attribute added by macOS downloads without modifying the application bundle.
            </p>
          </div>

          {/* Open source assurance */}
          <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Full Swift source code is 100% open for public audit.</span>
            </div>
            <a
              href="https://github.com/adee1455/fettle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 font-medium"
            >
              Inspect repository on GitHub
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
