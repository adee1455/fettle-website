"use client";

import { ArrowRight, Download, Sparkles } from "lucide-react";
import GithubIcon from "./GithubIcon";

interface DownloadBannerProps {
  onDownloadClick: () => void;
}

export default function DownloadBanner({ onDownloadClick }: DownloadBannerProps) {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 text-white p-8 sm:p-14 shadow-2xl overflow-hidden text-center">
          {/* Subtle decorative glow overlay */}
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_60%)] pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-medium text-white/95 mb-6 border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              100% Free &amp; Open Source Utility
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Ready to put your files in good shape?
            </h2>

            <p className="text-blue-100 text-base sm:text-lg mb-8 leading-relaxed">
              Experience the fastest file conversions on macOS without opening another app or uploading sensitive documents to the cloud.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8">
              <button
                onClick={onDownloadClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white text-blue-700 font-bold text-base shadow-xl hover:bg-blue-50 active:scale-95 transition-all group cursor-pointer"
              >
                <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                <span>Download for macOS</span>
                <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                href="https://github.com/adee1455/fettle"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 backdrop-blur-sm transition-all"
              >
                <GithubIcon className="w-5 h-5" />
                <span>View on GitHub</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-blue-200">
              <span>Universal Binary (Apple Silicon &amp; Intel)</span>
              <span>•</span>
              <span>macOS Sonoma &amp; Sequoia</span>
              <span>•</span>
              <a
                href="/download?format=zip"
                download
                className="underline hover:text-white transition"
              >
                Download .ZIP archive instead
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
