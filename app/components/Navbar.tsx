"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Download, Star, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import GithubIcon from "./GithubIcon";

interface NavbarProps {
  onDownloadClick: () => void;
}

export default function Navbar({ onDownloadClick }: NavbarProps) {
  const [stars, setStars] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);

    fetch("/api/stats")
      .then((r) => r.json())
      .then((d) => typeof d.stars === "number" && setStars(d.stars))
      .catch(() => {});

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#try", label: "Demo" },
    { href: "#how", label: "How it works" },
    { href: "#formats", label: "Formats" },
    { href: "#privacy", label: "Privacy" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "nav-frosted shadow-[0_1px_24px_rgba(0,0,0,0.07)]" : "bg-transparent"
        }`}
      >
        <div className="container h-[66px] flex items-center gap-6">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-3 mr-auto group"
          >
            {/* Real Fettle App Icon */}
            <div className="relative w-9 h-9 rounded-[10px] overflow-hidden shrink-0 shadow-[var(--shadow-sm)] group-hover:scale-105 transition-transform duration-200">
              <img
                src="/app-icon.png"
                alt="Fettle App Icon"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-2.5">
              <span className="font-bold text-[17px] tracking-[-0.03em] text-[var(--fg)]">
                Fettle
              </span>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide bg-[var(--blue-soft)] text-[var(--blue)] border border-[var(--blue)] border-opacity-20">
                v0.1.0
              </span>
            </div>
          </Link>

          {/* Desktop Nav links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 rounded-[8px] text-[0.875rem] font-medium text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--bg-soft)] transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2.5">
            {/* GitHub star pill */}
            <a
              href="https://github.com/adee1455/fettle"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 px-3 py-1.5 rounded-[8px] text-[0.8rem] font-medium border border-[var(--line)] text-[var(--muted)] hover:text-[var(--fg)] hover:border-[var(--muted)] hover:bg-[var(--bg-soft)] transition-all duration-150"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
              {stars !== null && (
                <>
                  <span className="w-px h-3.5 bg-[var(--line)]" />
                  <span className="flex items-center gap-1 text-[var(--fg)] font-semibold">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    {stars > 0 ? stars : "Star"}
                  </span>
                </>
              )}
            </a>

            <ThemeToggle />

            {/* Download CTA */}
            <button
              onClick={onDownloadClick}
              type="button"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-[8px] bg-[var(--fg)] text-[var(--bg)] text-[0.875rem] font-semibold hover:opacity-85 active:scale-95 transition-all duration-150 cursor-pointer shadow-[var(--shadow-sm)]"
            >
              <Download className="w-3.5 h-3.5" />
              Download
            </button>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="sm:hidden p-2 rounded-[8px] text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--bg-soft)] transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="sm:hidden border-t border-[var(--line)] bg-[var(--elev)] px-5 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 rounded-[8px] text-[0.9rem] font-medium text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--bg-soft)] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="h-px bg-[var(--line)] my-2" />
            <button
              onClick={() => { setMobileOpen(false); onDownloadClick(); }}
              type="button"
              className="flex items-center gap-2 px-3 py-2.5 rounded-[8px] bg-[var(--fg)] text-[var(--bg)] font-semibold text-[0.9rem] cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download for Mac
            </button>
          </div>
        )}
      </header>
    </>
  );
}
