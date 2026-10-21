"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Download, Star } from "lucide-react";
import Logo from "./Logo";
import GithubIcon from "./GithubIcon";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
  onDownloadClick: () => void;
}

export default function Navbar({ onDownloadClick }: NavbarProps) {
  const [stars, setStars] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);

    // Fetch live stars from stats API
    fetch("/api/stats")
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.stars === "number") {
          setStars(data.stars);
        }
      })
      .catch(() => {});

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "glass-nav py-3 shadow-xs"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center space-x-2.5 group">
          <Logo className="w-8 h-8 group-hover:scale-105 transition-transform duration-200" />
          <span className="font-semibold text-lg tracking-tight text-slate-900 dark:text-white">
            Fettle
          </span>
          <span className="hidden sm:inline-block text-[11px] font-medium tracking-wide px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-900/50">
            v0.1.0
          </span>
        </Link>

        {/* Navigation links */}
        <nav className="hidden md:flex items-center space-x-7 text-sm font-medium text-slate-600 dark:text-slate-300">
          <a
            href="#simulator"
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Live Simulator
          </a>
          <a
            href="#features"
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Features
          </a>
          <a
            href="#presets"
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Presets
          </a>
          <a
            href="#gatekeeper"
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Gatekeeper
          </a>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center space-x-3">
          {/* GitHub Star Pill */}
          <a
            href="https://github.com/adee1455/fettle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View on GitHub"
            className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium rounded-full border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition shadow-xs"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <span className="text-slate-300 dark:text-slate-600">|</span>
            <span className="flex items-center gap-1 text-amber-500 font-semibold">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              {stars !== null ? stars : "Star"}
            </span>
          </a>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Primary CTA */}
          <button
            onClick={onDownloadClick}
            className="inline-flex items-center space-x-1.5 px-4 py-2 text-xs sm:text-sm font-semibold rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download</span>
          </button>
        </div>
      </div>
    </header>
  );
}
