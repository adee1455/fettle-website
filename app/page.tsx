"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
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
    try {
      confetti({
        particleCount: 55,
        spread: 65,
        origin: { y: 0.5 },
        colors: ["#2563EB", "#4B79FF", "#0D8A55", "#FF6154", "#FEBC2E"],
        disableForReducedMotion: true,
      });
    } catch {}

    const link = document.createElement("a");
    link.href = "/download";
    link.download = "Fettle-macOS.dmg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => setIsModalOpen(true), 200);
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--bg)", color: "var(--fg)" }}>
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
      <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
