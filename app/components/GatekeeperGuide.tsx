"use client";

import { CheckCircle2, ExternalLink, FolderDown, MousePointerClick, Settings2, ShieldCheck } from "lucide-react";

export default function GatekeeperGuide() {
  return (
    <section id="gatekeeper" className="pt-16 pb-4">
      <div className="container">
        <div
          className="rounded-[22px] border border-[var(--line)] overflow-hidden shadow-[var(--shadow-sm)] transition-all duration-300"
          style={{ background: "var(--elev)" }}
        >
          {/* Header */}
          <div
            className="px-6 sm:px-8 py-6 sm:py-7 border-b border-[var(--line)] flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            style={{ background: "var(--bg-subtle)" }}
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[0.72rem] font-semibold tracking-wide uppercase bg-[var(--blue-soft)] text-[var(--blue)] mb-2">
                First-time setup · 10 seconds
              </div>
              <h2 className="text-[1.3rem] sm:text-[1.45rem] font-bold tracking-[-0.025em] text-[var(--fg)]">
                Launching Fettle for the first time
              </h2>
              <p className="text-[0.875rem] text-[var(--muted)] mt-1 max-w-2xl leading-relaxed">
                Fettle is 100% free and open-source software. Because it is built independently without an Apple Developer subscription, macOS takes a quick one-time confirmation before running.
              </p>
            </div>

            <a
              href="https://github.com/adee1455/fettle"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start md:self-center px-3.5 py-2 rounded-[10px] text-[0.8rem] font-medium text-[var(--fg)] border border-[var(--line)] bg-[var(--elev)] hover:bg-[var(--bg-soft)] hover:border-[var(--line-strong)] transition-all shadow-[var(--shadow-xs)]"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[var(--muted)]" />
              <span>Auditable on GitHub</span>
            </a>
          </div>

          {/* 3 Step Cards */}
          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
              {/* Step 1 */}
              <div
                className="p-5 sm:p-6 rounded-[16px] border border-[var(--line)] flex flex-col justify-between transition-all duration-200 hover:border-[var(--line-strong)] hover:shadow-[var(--shadow-xs)]"
                style={{ background: "var(--bg-soft)" }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-7 h-7 rounded-full bg-[var(--blue)] text-white text-[0.8rem] font-bold grid place-items-center shadow-sm">
                      1
                    </span>
                    <div className="w-8 h-8 rounded-[10px] bg-[var(--blue-soft)] text-[var(--blue)] grid place-items-center">
                      <FolderDown className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-[0.98rem] font-bold text-[var(--fg)] mb-2 tracking-[-0.01em]">
                    Drag to Applications
                  </h3>
                  <p className="text-[0.84rem] text-[var(--muted)] leading-relaxed">
                    Open <span className="font-mono text-[0.78rem] text-[var(--fg)] bg-[var(--elev)] px-1.5 py-0.5 rounded border border-[var(--line)]">Fettle-macOS.dmg</span> and drag <strong>Fettle.app</strong> into your Applications folder.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[var(--line)]/60 text-[0.76rem] text-[var(--muted)] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--blue)]" />
                  Standard Mac installation
                </div>
              </div>

              {/* Step 2 */}
              <div
                className="p-5 sm:p-6 rounded-[16px] border border-[var(--line)] flex flex-col justify-between transition-all duration-200 hover:border-[var(--line-strong)] hover:shadow-[var(--shadow-xs)]"
                style={{ background: "var(--bg-soft)" }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-7 h-7 rounded-full bg-[var(--blue)] text-white text-[0.8rem] font-bold grid place-items-center shadow-sm">
                      2
                    </span>
                    <div className="w-8 h-8 rounded-[10px] bg-[var(--blue-soft)] text-[var(--blue)] grid place-items-center">
                      <MousePointerClick className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-[0.98rem] font-bold text-[var(--fg)] mb-2 tracking-[-0.01em]">
                    Control-Click → Open
                  </h3>
                  <p className="text-[0.84rem] text-[var(--muted)] leading-relaxed">
                    Hold <kbd className="px-1.5 py-0.5 rounded bg-[var(--elev)] border border-[var(--line)] text-[0.75rem] font-mono text-[var(--fg)]">⌃ Control</kbd> and click Fettle.app in Finder, then choose <strong>Open</strong> from the menu.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[var(--line)]/60 text-[0.76rem] text-[var(--muted)] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--blue)]" />
                  Bypasses default Gatekeeper check
                </div>
              </div>

              {/* Step 3 */}
              <div
                className="p-5 sm:p-6 rounded-[16px] border border-[var(--line)] flex flex-col justify-between transition-all duration-200 hover:border-[var(--line-strong)] hover:shadow-[var(--shadow-xs)]"
                style={{ background: "var(--bg-soft)" }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-7 h-7 rounded-full bg-[var(--ok)] text-white text-[0.8rem] font-bold grid place-items-center shadow-sm">
                      3
                    </span>
                    <div className="w-8 h-8 rounded-[10px] bg-[var(--ok-soft)] text-[var(--ok)] grid place-items-center">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-[0.98rem] font-bold text-[var(--fg)] mb-2 tracking-[-0.01em]">
                    Click "Open Anyway"
                  </h3>
                  <p className="text-[0.84rem] text-[var(--muted)] leading-relaxed">
                    Click <strong>Open Anyway</strong> on the prompt. If on macOS Sequoia, you can also approve it in <strong>System Settings → Privacy &amp; Security</strong>. macOS saves this permanently.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[var(--line)]/60 text-[0.76rem] text-[var(--ok)] font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--ok)]" />
                  One-time authorization only
                </div>
              </div>
            </div>

            {/* macOS Sequoia Callout & Privacy Banner */}
            <div
              className="mt-6 p-4 sm:p-5 rounded-[16px] border border-[var(--line)] flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4"
              style={{ background: "var(--bg-subtle)" }}
            >
              {/* Sequoia Tip */}
              <div className="flex items-start gap-3 flex-1">
                <div className="w-9 h-9 rounded-[10px] bg-[var(--blue-soft)] text-[var(--blue)] flex items-center justify-center shrink-0 mt-0.5">
                  <Settings2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[0.88rem] font-semibold text-[var(--fg)] flex items-center gap-2">
                    <span>On macOS 15 Sequoia?</span>
                    <span className="text-[0.7rem] px-2 py-0.5 rounded-full bg-[var(--elev)] border border-[var(--line)] text-[var(--muted)] font-normal">
                      System Settings Method
                    </span>
                  </h4>
                  <p className="text-[0.8rem] text-[var(--muted)] mt-0.5 leading-relaxed">
                    If the dialog doesn&apos;t show &ldquo;Open Anyway&rdquo;, open <strong className="text-[var(--fg)]">System Settings</strong> → <strong className="text-[var(--fg)]">Privacy &amp; Security</strong>, scroll down to Security, and click <strong className="text-[var(--fg)]">Open Anyway</strong>.
                  </p>
                </div>
              </div>

              {/* Privacy Pill */}
              <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-[12px] border border-[var(--line)] bg-[var(--elev)] shrink-0 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[var(--ok)] shrink-0" />
                <span className="text-[0.78rem] font-medium text-[var(--muted)]">
                  100% Offline &amp; On-Device · Zero Telemetry
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
