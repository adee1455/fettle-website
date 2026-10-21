"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RadialSimulator from "./components/RadialSimulator";
import BentoFeatures from "./components/BentoFeatures";
import PresetCatalogue from "./components/PresetCatalogue";
import GatekeeperGuide from "./components/GatekeeperGuide";
import DownloadBanner from "./components/DownloadBanner";
import Footer from "./components/Footer";
import DownloadModal from "./components/DownloadModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownload = () => {
    // 1. Confetti burst
    try {
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.55 },
        colors: ["#2563eb", "#3b82f6", "#60a5fa", "#93c5fd", "#fbbf24"],
      });
    } catch {
      // Ignored if canvas not ready
    }

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
    }, 200);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] selection:bg-blue-500/20 selection:text-blue-600">
      <Navbar onDownloadClick={handleDownload} />
      
      <main className="flex-1">
        <Hero onDownloadClick={handleDownload} />
        <RadialSimulator />
        <BentoFeatures />
        <PresetCatalogue />
        <GatekeeperGuide />
        <DownloadBanner onDownloadClick={handleDownload} />
      </main>

      <Footer />

      <DownloadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
