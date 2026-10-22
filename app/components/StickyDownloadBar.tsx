"use client";

import React, { useEffect, useState } from "react";

interface StickyDownloadBarProps {
  onDownloadClick: () => void;
}

export default function StickyDownloadBar({ onDownloadClick }: StickyDownloadBarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when user scrolls past the hero section
      setVisible(window.scrollY > 280);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Download"
      className="fixed left-0 right-0 bottom-0 z-40 bg-[var(--sticky)] backdrop-blur-[14px] border-t border-[var(--line)] py-2.5 px-4 transition-all animate-in fade-in slide-in-from-bottom-2 duration-200"
    >
      <div className="w-[min(980px,100%)] mx-auto flex items-center gap-3">
        <div className="hidden sm:block text-[0.8rem] text-[var(--muted)] mr-auto">
          <strong className="text-[var(--fg)] font-semibold">Fettle</strong> · Free forever · Desktop + Finder
        </div>
        <div className="sm:hidden text-[0.8rem] text-[var(--muted)] mr-auto">
          <strong className="text-[var(--fg)] font-semibold">Fettle for Mac</strong>
        </div>

        <button
          onClick={onDownloadClick}
          type="button"
          className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-[8px] text-[0.8rem] font-semibold bg-[var(--blue)] text-white hover:bg-[var(--blue-hover)] transition-all cursor-pointer shadow-xs active:scale-95"
        >
          Download
        </button>
      </div>
    </div>
  );
}
