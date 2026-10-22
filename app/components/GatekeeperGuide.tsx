"use client";

import { useState } from "react";
import { Check, Copy, ExternalLink, ShieldCheck, Terminal } from "lucide-react";

export default function GatekeeperGuide() {
  const [copied, setCopied] = useState(false);
  const cmd = "xattr -cr /Applications/Fettle.app";

  const handleCopy = () => {
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="gatekeeper" className="pt-16 pb-2">
      <div className="container">
        <div className="rounded-[20px] border border-[var(--line)] overflow-hidden shadow-[var(--shadow-sm)]" style={{ background: "var(--elev)" }}>
          <div className="px-8 py-7 border-b border-[var(--line)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3" style={{ background: "var(--bg-subtle)" }}>
            <div>
              <h2 className="text-[1.2rem] font-bold tracking-[-0.025em] text-[var(--fg)]">
                First-time launch on macOS
              </h2>
              <p className="text-[0.85rem] text-[var(--muted)] mt-0.5">
                Fettle is free and community open source — not signed with an Apple Enterprise Developer certificate.
              </p>
            </div>
            <a
              href="https://github.com/adee1455/fettle"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-1.5 text-[0.8rem] font-medium text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" /> View source code
            </a>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {[
                { n: "1", title: "Drag to Applications", body: <span>Open <code className="font-mono text-[0.8rem] bg-[var(--bg-soft)] px-1.5 py-0.5 rounded">Fettle-macOS.dmg</code> and drag Fettle.app into /Applications.</span> },
                { n: "2", title: "Right-Click → Open", body: <span>Control-click Fettle.app in Finder and choose <strong>Open</strong> from the context menu.</span> },
                { n: "3", title: 'Click "Open Anyway"', body: <span>macOS saves this permanently — you will <strong>never be asked again</strong>.</span> },
              ].map((step) => (
                <div key={step.n} className="p-5 rounded-[14px] border border-[var(--line)]" style={{ background: "var(--bg-soft)" }}>
                  <div className="w-6 h-6 rounded-full bg-[var(--blue)] text-white text-[0.75rem] font-bold grid place-items-center mb-3">{step.n}</div>
                  <h3 className="text-[0.9rem] font-bold text-[var(--fg)] mb-1.5">{step.title}</h3>
                  <p className="text-[0.8rem] text-[var(--muted)] leading-relaxed m-0">{step.body}</p>
                </div>
              ))}
            </div>

            {/* Terminal */}
            <div className="rounded-[12px] overflow-hidden border border-[var(--line)]">
              <div className="px-4 py-2.5 flex items-center justify-between border-b border-[var(--line)]" style={{ background: "var(--bg-subtle)" }}>
                <div className="flex items-center gap-2 text-[0.75rem] text-[var(--muted)]">
                  <Terminal className="w-3.5 h-3.5" />
                  Or one-liner in Terminal:
                </div>
                <button onClick={handleCopy} type="button" className="flex items-center gap-1.5 text-[0.72rem] font-medium text-[var(--muted)] hover:text-[var(--fg)] cursor-pointer transition-colors">
                  {copied ? <Check className="w-3 h-3 text-[var(--ok)]" /> : <Copy className="w-3 h-3" />}
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
              <div className="px-5 py-4 font-mono text-[0.85rem] text-[var(--ok)] select-all break-all" style={{ background: "var(--ink)", color: "var(--ok)" }}>
                {cmd}
              </div>
            </div>

            <div className="flex items-center gap-2 mt-4 text-[0.78rem] text-[var(--muted)]">
              <ShieldCheck className="w-4 h-4 text-[var(--ok)] shrink-0" />
              100% open-source Swift code publicly auditable on GitHub.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
