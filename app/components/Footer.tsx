import React from "react";
import GithubIcon from "./GithubIcon";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--line)]">
      <div className="container py-8 flex flex-wrap items-center justify-between gap-5">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-[7px] overflow-hidden shrink-0 shadow-xs">
            <img
              src="/app-icon.png"
              alt="Fettle App Icon"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="font-bold text-[0.9rem] text-[var(--fg)] tracking-tight">Fettle</span>
            <p className="text-[0.7rem] text-[var(--faint)] m-0 leading-none mt-0.5">Your files, in good shape.</p>
          </div>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap items-center gap-5 text-[0.8rem] text-[var(--muted)]">
          <a href="#try" className="hover:text-[var(--fg)] transition-colors">Demo</a>
          <a href="#how" className="hover:text-[var(--fg)] transition-colors">How it works</a>
          <a href="#formats" className="hover:text-[var(--fg)] transition-colors">Formats</a>
          <a href="#privacy" className="hover:text-[var(--fg)] transition-colors">Privacy</a>
          <a href="/download" download className="font-semibold text-[var(--blue)] hover:underline">Download DMG</a>
          <a
            href="https://github.com/adee1455/fettle"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[var(--fg)] transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            GitHub
          </a>
        </nav>

        {/* Credit */}
        <div className="text-[0.72rem] text-[var(--faint)] flex items-center gap-2">
          <span>© 2026 Fettle · MIT License</span>
          <span>·</span>
          <a href="https://itsadee.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--fg)] transition-colors font-medium">
            crafted by Adee
          </a>
        </div>
      </div>
    </footer>
  );
}
