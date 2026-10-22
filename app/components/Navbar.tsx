"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
  onDownloadClick: () => void;
}

export default function Navbar({ onDownloadClick }: NavbarProps) {
  return (
    <header className="w-[min(980px,calc(100%-40px))] mx-auto h-16 flex items-center gap-2">
      {/* Brand logo & wordmark */}
      <Link href="/" className="flex items-center gap-2.5 font-bold text-[0.95rem] tracking-[-0.03em] mr-auto text-[var(--fg)]">
        <span className="w-[22px] h-[22px] rounded-[6px] bg-[var(--fg)] text-[var(--bg)] grid place-items-center text-[11px] font-extrabold">
          F
        </span>
        <span>Fettle</span>
      </Link>

      {/* Nav Links */}
      <nav className="hidden sm:flex items-center gap-1">
        <a
          href="#try"
          className="text-[0.825rem] font-medium text-[var(--muted)] hover:text-[var(--fg)] px-2.5 py-1.5 transition-colors"
        >
          Try
        </a>
        <a
          href="#how"
          className="text-[0.825rem] font-medium text-[var(--muted)] hover:text-[var(--fg)] px-2.5 py-1.5 transition-colors"
        >
          How
        </a>
        <a
          href="#formats"
          className="text-[0.825rem] font-medium text-[var(--muted)] hover:text-[var(--fg)] px-2.5 py-1.5 transition-colors"
        >
          Formats
        </a>
        <a
          href="#privacy"
          className="text-[0.825rem] font-medium text-[var(--muted)] hover:text-[var(--fg)] px-2.5 py-1.5 transition-colors"
        >
          Privacy
        </a>
        <a
          href="https://github.com/adee1455/fettle"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[0.825rem] font-medium text-[var(--muted)] hover:text-[var(--fg)] px-2.5 py-1.5 transition-colors"
        >
          GitHub
        </a>
      </nav>

      <div className="flex items-center gap-2.5">
        <ThemeToggle />
        <button
          onClick={onDownloadClick}
          type="button"
          className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-[8px] text-[0.8rem] font-semibold bg-[var(--ink)] text-[var(--ink-fg)] hover:opacity-90 active:scale-95 transition-all cursor-pointer"
        >
          Download
        </button>
      </div>
    </header>
  );
}
