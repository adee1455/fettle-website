import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] py-6 mt-16 text-[0.75rem] text-[var(--faint)]">
      <div className="wrap flex flex-wrap gap-3 justify-between items-center">
        <span>© 2026 Fettle · Files never leave your Mac</span>
        <div className="flex items-center gap-4">
          <a
            href="https://itsadee.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--fg)] transition-colors"
          >
            Crafted by Adee
          </a>
          <span>•</span>
          <a
            href="https://github.com/adee1455/fettle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--fg)] transition-colors font-medium text-[var(--muted)]"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
