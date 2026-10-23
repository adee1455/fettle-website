"use client";

import { useEffect, useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

type ViewMode = "video" | "radial_screenshot" | "app_screenshot";

export default function DesktopStage() {
  const [viewMode, setViewMode] = useState<ViewMode>("video");

  // Video Player state
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(30.8);

  // Autoplay automatically when section enters viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!videoRef.current) return;

        if (entry.isIntersecting && viewMode === "video") {
          videoRef.current.muted = true;
          setIsMuted(true);
          const playPromise = videoRef.current.play();
          if (playPromise !== undefined) {
            playPromise
              .then(() => setIsPlaying(true))
              .catch(() => {});
          }
        } else {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      },
      {
        threshold: 0.35, // triggers when 35% of the section is visible
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [viewMode]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const cur = videoRef.current.currentTime;
    const dur = videoRef.current.duration || 30.8;
    setCurrentTime(cur);
    setDuration(dur);
    setProgress((cur / dur) * 100);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * (videoRef.current.duration || 30.8);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <section ref={sectionRef} className="pt-4 pb-12" id="try">
      {/* View Switcher Tabs */}
      <div className="container mb-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-[var(--faint)]">
          Launch Walkthrough &amp; Real App UI
        </p>

        <div className="flex flex-wrap items-center justify-center gap-1 p-1 rounded-[12px] bg-[var(--bg-soft)] border border-[var(--line)] shadow-xs">
          <button
            onClick={() => setViewMode("video")}
            className={`px-3.5 py-1.5 rounded-[8px] text-[0.78rem] font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              viewMode === "video"
                ? "bg-[var(--elev)] text-[var(--fg)] shadow-xs"
                : "text-[var(--muted)] hover:text-[var(--fg)]"
            }`}
          >
            <Play className="w-3 h-3 fill-current text-[var(--blue)]" />
            Watch Promo (30s)
          </button>
          <button
            onClick={() => setViewMode("radial_screenshot")}
            className={`px-3.5 py-1.5 rounded-[8px] text-[0.78rem] font-semibold transition-all cursor-pointer ${
              viewMode === "radial_screenshot"
                ? "bg-[var(--elev)] text-[var(--fg)] shadow-xs"
                : "text-[var(--muted)] hover:text-[var(--fg)]"
            }`}
          >
             Native Radial HUD
          </button>
          <button
            onClick={() => setViewMode("app_screenshot")}
            className={`px-3.5 py-1.5 rounded-[8px] text-[0.78rem] font-semibold transition-all cursor-pointer ${
              viewMode === "app_screenshot"
                ? "bg-[var(--elev)] text-[var(--fg)] shadow-xs"
                : "text-[var(--muted)] hover:text-[var(--fg)]"
            }`}
          >
             App Window
          </button>
        </div>
      </div>

      {/* Mac window frame */}
      <div className="w-[min(940px,calc(100%-32px))] mx-auto rounded-[20px] overflow-hidden shadow-[var(--shadow-xl)] border border-[var(--line)]" style={{ background: "var(--win)" }}>
        {/* Titlebar */}
        <div className="h-11 flex items-center gap-2.5 px-4 border-b border-[var(--line)] relative" style={{ background: "var(--win-bar)" }}>
          <div className="flex gap-2 z-10">
            <span className="w-3 h-3 rounded-full bg-[#FF5F57] border border-black/[0.08] block" />
            <span className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-black/[0.08] block" />
            <span className="w-3 h-3 rounded-full bg-[#28C840] border border-black/[0.08] block" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-[0.72rem] font-medium text-[var(--muted)]">
              {viewMode === "video" && "Fettle — Official Launch Walkthrough (0:30)"}
              {viewMode === "radial_screenshot" && "Native macOS Radial HUD (Isolated Crop)"}
              {viewMode === "app_screenshot" && "Fettle for Mac (Clean Window)"}
            </span>
          </div>
        </div>

        {/* Video Mode: 16:9 Promo Video Player */}
        {viewMode === "video" && (
          <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden group select-none">
            <video
              ref={videoRef}
              src="/fettle-launch.mp4"
              poster="/video-poster.jpg"
              playsInline
              preload="auto"
              muted={isMuted}
              loop
              onTimeUpdate={handleTimeUpdate}
              onClick={togglePlay}
              className="w-full h-full object-contain cursor-pointer block"
            />

            {/* Top Right Floating Sound Toggle Pill */}
            <button
              onClick={toggleMute}
              type="button"
              className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-lg hover:scale-105"
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[var(--ok)]" />}
              <span>{isMuted ? "Click to unmute sound" : "Sound on"}</span>
            </button>

            {/* Big Center Play Overlay (when user pauses) */}
            {!isPlaying && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 bg-black/45 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer transition-all"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[var(--blue)] text-white flex items-center justify-center shadow-[0_0_50px_rgba(37,99,235,0.7)] hover:scale-105 transition-transform duration-200">
                  <Play className="w-8 h-8 sm:w-9 sm:h-9 fill-current ml-1" />
                </div>
                <span className="mt-3.5 text-xs sm:text-sm font-semibold text-white tracking-wide drop-shadow-md">
                  Click to play with sound
                </span>
                <span className="text-[11px] text-white/70 mt-1">
                  HD 1080p · 30 Seconds
                </span>
              </div>
            )}

            {/* Custom Frosted Bottom Controls Bar (Visible on Hover) */}
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/85 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col gap-2">
              {/* Progress Scrubber */}
              <div
                onClick={handleSeek}
                className="w-full h-1.5 hover:h-2.5 bg-white/20 rounded-full cursor-pointer relative transition-all"
              >
                <div
                  className="h-full bg-[var(--blue)] rounded-full relative"
                  style={{ width: `${progress}%` }}
                >
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-md block" />
                </div>
              </div>

              {/* Controls Strip */}
              <div className="flex items-center justify-between text-white text-xs">
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    type="button"
                    aria-label={isPlaying ? "Pause" : "Play"}
                    className="p-1 hover:text-[var(--blue)] transition cursor-pointer"
                  >
                    {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                  </button>
                  <button
                    onClick={toggleMute}
                    type="button"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                    className="p-1 hover:text-[var(--blue)] transition cursor-pointer flex items-center gap-1.5"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    <span className="text-[10px] uppercase font-bold opacity-75">{isMuted ? "Muted" : "Sound On"}</span>
                  </button>
                  <span className="font-mono text-[11px] opacity-80">
                    {formatTime(currentTime)} / {formatTime(duration || 30.8)}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleFullscreen}
                    type="button"
                    aria-label="Fullscreen"
                    className="p-1 hover:text-[var(--blue)] transition cursor-pointer"
                  >
                    <Maximize className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Real Screenshot View: Native Radial HUD */}
        {viewMode === "radial_screenshot" && (
          <div
            className="relative min-h-[480px] sm:min-h-[540px] flex items-center justify-center overflow-hidden p-8"
            style={{
              background: "radial-gradient(ellipse at 50% 50%, color-mix(in srgb, var(--blue) 12%, #14151a) 0%, #0c0d12 100%)"
            }}
          >
            <div className="relative max-w-[440px] w-full flex items-center justify-center">
              <img
                src="/screenshots/radial-menu.png"
                alt="Real Fettle macOS Native Radial Menu Screenshot"
                width={764}
                height={764}
                className="w-full h-auto object-contain transition-transform hover:scale-105 duration-300 drop-shadow-[0_25px_60px_rgba(0,0,0,0.7)]"
              />
            </div>
            <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full text-xs text-white/90 font-medium shadow-lg">
               Real Native Retina HUD
            </div>
          </div>
        )}

        {/* Real Screenshot View: App Window */}
        {viewMode === "app_screenshot" && (
          <div
            className="relative min-h-[480px] sm:min-h-[540px] flex items-center justify-center overflow-hidden p-6 sm:p-12"
            style={{
              background: "radial-gradient(ellipse at 50% 50%, color-mix(in srgb, var(--blue) 8%, #14151a) 0%, #0c0d12 100%)"
            }}
          >
            <div className="relative max-w-[880px] w-full">
              <img
                src="/screenshots/fettle-main-window.png"
                alt="Real Fettle macOS App Window Screenshot"
                width={1888}
                height={1302}
                className="w-full h-auto object-contain transition-transform hover:scale-[1.01] duration-300 drop-shadow-[0_30px_70px_rgba(0,0,0,0.7)] rounded-[14px]"
              />
            </div>
            <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full text-xs text-white/90 font-medium shadow-lg">
               Native SwiftUI Window
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
