"use client";

import { useState } from "react";
import { Check, Copy, ExternalLink, ShieldCheck, Terminal } from "lucide-react";

export default function GatekeeperGuide() {
  const [copied, setCopied] = useState(false);
  const terminalCmd = "xattr -cr /Applications/Fettle.app";

  const handleCopy = () => {
    navigator.clipboard.writeText(terminalCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="gatekeeper" className="pt-20 wrap">
      <div className="bg-[var(--elev)] border border-[var(--line)] rounded-[18px] p-6 sm:p-8 shadow-xs">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-[0.72rem] font-semibold uppercase tracking-wider text-[var(--muted)] bg-[var(--bg-soft)] px-2.5 py-1 rounded-full">
            First-time launch on macOS
          </span>
          <h2 className="text-[1.4rem] sm:text-[1.65rem] font-bold tracking-[-0.03em] mt-3 mb-2 text-[var(--fg)]">
            Opening Fettle for the first time
          </h2>
          <p className="text-[0.875rem] text-[var(--muted)] leading-relaxed m-0">
            Because Fettle is free, community open source (and not signed with an annual $99 Apple Enterprise subscription), macOS Gatekeeper verifies it on first run.
          </p>
        </div>

        {/* 3 Step Visual Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          <div className="p-4 rounded-[12px] bg-[var(--bg-soft)] border border-[var(--line)]">
            <div className="w-6 h-6 rounded-full bg-[var(--blue)] text-white font-bold text-xs grid place-items-center mb-2">
              1
            </div>
            <h3 className="text-[0.85rem] font-bold text-[var(--fg)] mb-1">
              Drag to Applications
            </h3>
            <p className="text-[0.78rem] text-[var(--muted)] leading-normal m-0">
              Open <span className="font-mono font-medium text-[var(--fg)]">Fettle-macOS.dmg</span> and drag Fettle into Applications.
            </p>
          </div>

          <div className="p-4 rounded-[12px] bg-[var(--bg-soft)] border border-[var(--line)]">
            <div className="w-6 h-6 rounded-full bg-[var(--blue)] text-white font-bold text-xs grid place-items-center mb-2">
              2
            </div>
            <h3 className="text-[0.85rem] font-bold text-[var(--fg)] mb-1">
              Right-Click &rarr; Open
            </h3>
            <p className="text-[0.78rem] text-[var(--muted)] leading-normal m-0">
              Right-click (or Control-click) <span className="font-mono font-medium text-[var(--fg)]">Fettle.app</span> and choose <strong>Open</strong>.
            </p>
          </div>

          <div className="p-4 rounded-[12px] bg-[var(--bg-soft)] border border-[var(--line)]">
            <div className="w-6 h-6 rounded-full bg-[var(--blue)] text-white font-bold text-xs grid place-items-center mb-2">
              3
            </div>
            <h3 className="text-[0.85rem] font-bold text-[var(--fg)] mb-1">
              Click &ldquo;Open Anyway&rdquo;
            </h3>
            <p className="text-[0.78rem] text-[var(--muted)] leading-normal m-0">
              macOS saves this preference permanently. You will never be asked again!
            </p>
          </div>
        </div>

        {/* Terminal Alternative Card */}
        <div className="p-3.5 rounded-[12px] bg-[var(--ink)] text-[var(--ink-fg)] font-mono text-xs">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5 opacity-80">
              <Terminal className="w-3.5 h-3.5 text-[var(--blue)]" />
              <span className="font-sans text-[0.75rem] font-medium">Or one-liner in Terminal:</span>
            </div>
            <button
              onClick={handleCopy}
              type="button"
              className="flex items-center gap-1 text-[0.7rem] bg-[color-mix(in_srgb,var(--ink-fg)_15%,transparent)] hover:bg-[color-mix(in_srgb,var(--ink-fg)_25%,transparent)] px-2 py-0.5 rounded transition cursor-pointer"
            >
              {copied ? <Check className="w-3 h-3 text-[var(--ok)]" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? "Copied" : "Copy"}</span>
            </button>
          </div>

          <div className="bg-[color-mix(in_srgb,var(--ink-fg)_8%,transparent)] p-2 rounded text-[var(--ok)] select-all break-all">
            {terminalCmd}
          </div>
        </div>

        {/* Audit link */}
        <div className="mt-4 pt-3 border-t border-[var(--line)] flex flex-wrap items-center justify-between gap-2 text-[0.75rem] text-[var(--muted)]">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[var(--ok)]" />
            <span>100% open source Swift code.</span>
          </div>
          <a
            href="https://github.com/adee1455/fettle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--blue)] hover:underline inline-flex items-center gap-1 font-medium"
          >
            Audit on GitHub <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
