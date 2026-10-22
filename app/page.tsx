"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DesktopStage from "./components/DesktopStage";
import QuoteBridge from "./components/QuoteBridge";
import HowSection from "./components/HowSection";
import FormatsSection from "./components/FormatsSection";
import PrivacySection from "./components/PrivacySection";
import GatekeeperGuide from "./components/GatekeeperGuide";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import StickyDownloadBar from "./components/StickyDownloadBar";
import DownloadModal from "./components/DownloadModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownload = () => {
    // 1. Confetti burst
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.55 },
        colors: ["#2B6BFF", "#4C82FF", "#0D8A55", "#FF6154"],
      });
    } catch {}

    // 2. Trigger browser download directly from site (/download)
    const link = document.createElement("a");
    link.href = "/download";
    link.download = "Fettle-macOS.dmg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // 3. Open Gatekeeper / download helper modal
    setTimeout(() => {
      setIsModalOpen(true);
    }, 180);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--fg)] selection:bg-[var(--blue)] selection:text-white">
      <Navbar onDownloadClick={handleDownload} />

      <main className="flex-1">
        <Hero onDownloadClick={handleDownload} />
        <DesktopStage />
        <QuoteBridge />
        <HowSection />
        <FormatsSection />
        <PrivacySection />
        <GatekeeperGuide />
        <FinalCTA onDownloadClick={handleDownload} />
      </main>

      <Footer />

      <StickyDownloadBar onDownloadClick={handleDownload} />

      <DownloadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
