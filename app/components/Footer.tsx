import Link from "next/link";
import Logo from "./Logo";
import GithubIcon from "./GithubIcon";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 dark:border-white/10 bg-white/50 dark:bg-[#0a0c12] py-12 text-slate-600 dark:text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-800">
          {/* Logo & Tagline */}
          <div className="flex items-center space-x-3">
            <Logo className="w-7 h-7" />
            <div>
              <span className="font-bold text-slate-900 dark:text-white text-sm">
                Fettle
              </span>
              <p className="text-[11px] text-slate-500">Your files, in good shape.</p>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-medium">
            <a
              href="#simulator"
              className="hover:text-slate-900 dark:hover:text-white transition"
            >
              Simulator
            </a>
            <a
              href="#features"
              className="hover:text-slate-900 dark:hover:text-white transition"
            >
              Features
            </a>
            <a
              href="#presets"
              className="hover:text-slate-900 dark:hover:text-white transition"
            >
              Presets
            </a>
            <a
              href="#gatekeeper"
              className="hover:text-slate-900 dark:hover:text-white transition"
            >
              Gatekeeper
            </a>
            <a
              href="/download"
              download
              className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
            >
              Download DMG
            </a>
            <a
              href="https://github.com/adee1455/fettle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 dark:hover:text-white flex items-center gap-1.5 transition"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              GitHub
            </a>
          </div>
        </div>

        {/* Bottom attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>
            Released under the{" "}
            <a
              href="https://github.com/adee1455/fettle/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-slate-700 dark:hover:text-slate-300"
            >
              MIT Open Source License
            </a>
            .
          </p>

          <p className="flex items-center gap-1">
            <span>Crafted by</span>
            <a
              href="https://itsadee.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Adee
            </a>
            <span>•</span>
            <a
              href="https://fettle.itsadee.com"
              className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
            >
              fettle.itsadee.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
