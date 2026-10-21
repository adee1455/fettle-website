"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, 
  Image as ImageIcon, 
  Video, 
  Check, 
  Sparkles, 
  RefreshCw, 
  Volume2, 
  SlidersHorizontal, 
  ShieldCheck, 
  Copy,
  MousePointer2,
  FolderOpen
} from "lucide-react";
import confetti from "canvas-confetti";

interface MockFile {
  id: string;
  name: string;
  size: string;
  type: "image" | "doc" | "video";
  badge: string;
}

interface ActionNode {
  id: string;
  label: string;
  hotkey: string;
  icon: typeof ImageIcon;
  desc: string;
  outExt: string;
}

const ACTION_NODES: ActionNode[] = [
  { id: "webp", label: "WebP", hotkey: "1", icon: ImageIcon, desc: "Modern web image", outExt: ".webp" },
  { id: "jpeg", label: "JPEG", hotkey: "2", icon: ImageIcon, desc: "Universal photo", outExt: ".jpg" },
  { id: "png", label: "PNG", hotkey: "3", icon: ImageIcon, desc: "Lossless transparent", outExt: ".png" },
  { id: "pdf", label: "PDF", hotkey: "4", icon: FileText, desc: "Apple PDFKit export", outExt: ".pdf" },
  { id: "resize", label: "50% Scale", hotkey: "5", icon: SlidersHorizontal, desc: "Instant downscale", outExt: "_half.jpg" },
  { id: "audio", label: "Extract MP3", hotkey: "6", icon: Volume2, desc: "Extract audio track", outExt: ".mp3" },
  { id: "exif", label: "Strip EXIF", hotkey: "7", icon: ShieldCheck, desc: "Sanitize metadata", outExt: "_clean.jpg" },
  { id: "dup", label: "Duplicate", hotkey: "8", icon: Copy, desc: "Safe duplicate copy", outExt: " (copy).jpg" },
];

export default function RadialSimulator() {
  const [selectedFile, setSelectedFile] = useState<MockFile>({
    id: "1",
    name: "portrait_shot.heic",
    size: "14.2 MB",
    type: "image",
    badge: "HEIC",
  });

  const [files, setFiles] = useState<MockFile[]>([
    { id: "1", name: "portrait_shot.heic", size: "14.2 MB", type: "image", badge: "HEIC" },
    { id: "2", name: "pitch_deck.docx", size: "4.1 MB", type: "doc", badge: "DOCX" },
    { id: "3", name: "screen_demo.mov", size: "42.8 MB", type: "video", badge: "MOV" },
  ]);

  const [isShiftActive, setIsShiftActive] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<ActionNode | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Play subtle sound using Web Audio API
  const playSound = (frequency: number, type: OscillatorType = "sine", duration = 0.08) => {
    try {
      if (!audioContextRef.current) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioContextRef.current = new AudioContextClass();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(frequency, ctx.currentTime);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Audio not permitted or supported
    }
  };

  // Keyboard Shift listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Shift") {
        setIsShiftActive(true);
        playSound(580, "triangle", 0.06);
      }
      // Check number keys 1-8 if shift is active
      if (isShiftActive && e.key >= "1" && e.key <= "8") {
        const index = parseInt(e.key, 10) - 1;
        if (ACTION_NODES[index]) {
          handleAction(ACTION_NODES[index]);
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "Shift") {
        setIsShiftActive(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [isShiftActive, selectedFile]);

  const handleAction = (node: ActionNode) => {
    setIsConverting(true);
    playSound(880, "sine", 0.15);

    setTimeout(() => {
      setIsConverting(false);
      setIsShiftActive(false);

      // Add new converted file
      const baseName = selectedFile.name.substring(0, selectedFile.name.lastIndexOf(".")) || selectedFile.name;
      const newFileName = `${baseName}${node.outExt}`;
      const newFile: MockFile = {
        id: Date.now().toString(),
        name: newFileName,
        size: "2.1 MB",
        type: node.id === "audio" ? "doc" : "image",
        badge: node.label.toUpperCase(),
      };

      setFiles((prev) => [newFile, ...prev]);
      setSelectedFile(newFile);

      // Trigger small confetti
      confetti({
        particleCount: 25,
        spread: 45,
        origin: { y: 0.6 },
        colors: ["#3b82f6", "#60a5fa", "#93c5fd"],
      });

      // Show toast
      setToastMessage(`✓ Converted to ${newFileName} in 42ms (Saved alongside original)`);
      setTimeout(() => setToastMessage(null), 3500);
    }, 380);
  };

  return (
    <section id="simulator" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-blue-200/60 dark:border-blue-900/40">
            Interactive macOS Simulator
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mt-4 mb-4">
            Experience the radial wheel before you install.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Pick a file below, then click &amp; hold <span className="font-semibold text-slate-900 dark:text-white">“Hold Shift”</span> or press the <kbd className="px-1.5 py-0.5 text-xs font-mono font-semibold rounded bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700">Shift</kbd> key on your keyboard.
          </p>
        </div>

        {/* Finder Window Card */}
        <div className="relative rounded-2xl bg-white dark:bg-[#0e1118] border border-slate-200/90 dark:border-slate-800 shadow-2xl overflow-hidden">
          {/* macOS Titlebar */}
          <div className="px-4 py-3 bg-slate-100/80 dark:bg-slate-900/80 border-b border-slate-200/70 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#d89e24]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29]" />
            </div>
            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
              <FolderOpen className="w-3.5 h-3.5 text-blue-500" />
              <span>Finder — Downloads</span>
            </div>
            <div className="text-[11px] text-slate-400 font-mono">
              Press 1–8 or click
            </div>
          </div>

          {/* Interactive Workspace Area */}
          <div className="p-6 sm:p-10 min-h-[460px] relative flex flex-col justify-between">
            {/* Top Bar with Controller */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  Select a sample file:
                </span>
                <div className="flex space-x-1.5">
                  {files.slice(0, 3).map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setSelectedFile(f)}
                      className={`px-3 py-1 text-xs rounded-lg font-medium transition ${
                        selectedFile.id === f.id
                          ? "bg-blue-600 text-white shadow-xs"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                      }`}
                    >
                      {f.badge}
                    </button>
                  ))}
                </div>
              </div>

              {/* Shift Toggle Button */}
              <div className="flex items-center space-x-3">
                <button
                  onMouseDown={() => {
                    setIsShiftActive(true);
                    playSound(580, "triangle", 0.06);
                  }}
                  onMouseUp={() => setIsShiftActive(false)}
                  onTouchStart={() => {
                    setIsShiftActive(true);
                    playSound(580, "triangle", 0.06);
                  }}
                  onTouchEnd={() => setIsShiftActive(false)}
                  onClick={() => setIsShiftActive(!isShiftActive)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all shadow-xs ${
                    isShiftActive
                      ? "bg-blue-600 text-white scale-95 shadow-blue-500/20"
                      : "bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90"
                  }`}
                >
                  <MousePointer2 className="w-4 h-4" />
                  <span>{isShiftActive ? "Shift Held (Active)" : "Hold or Click Shift"}</span>
                  <kbd className="px-1.5 py-0.5 rounded text-[10px] bg-white/20 dark:bg-black/10 font-mono">
                    ⇧ Shift
                  </kbd>
                </button>
              </div>
            </div>

            {/* Central File and Radial Wheel Anchor */}
            <div className="relative flex-1 flex items-center justify-center my-6">
              {/* Selected File Card in Finder */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={() => setIsShiftActive(!isShiftActive)}
                className={`relative z-10 cursor-pointer p-4 rounded-2xl flex flex-col items-center justify-center w-36 h-36 sm:w-40 sm:h-40 transition-all border ${
                  isShiftActive
                    ? "bg-blue-50/80 dark:bg-blue-950/40 border-blue-400 dark:border-blue-500 shadow-xl shadow-blue-500/10"
                    : "bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm"
                }`}
              >
                {selectedFile.type === "image" && (
                  <ImageIcon className="w-10 h-10 text-blue-500 mb-2" />
                )}
                {selectedFile.type === "doc" && (
                  <FileText className="w-10 h-10 text-amber-500 mb-2" />
                )}
                {selectedFile.type === "video" && (
                  <Video className="w-10 h-10 text-purple-500 mb-2" />
                )}

                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 text-center truncate max-w-[120px]">
                  {selectedFile.name}
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                  {selectedFile.size}
                </span>

                {isConverting && (
                  <div className="absolute inset-0 rounded-2xl bg-white/90 dark:bg-slate-900/90 flex flex-col items-center justify-center gap-1">
                    <RefreshCw className="w-5 h-5 text-blue-600 animate-spin" />
                    <span className="text-[10px] font-medium text-slate-600 dark:text-slate-300">
                      Processing...
                    </span>
                  </div>
                )}
              </motion.div>

              {/* 8-Slice Spring Radial HUD */}
              <AnimatePresence>
                {isShiftActive && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                    <motion.div
                      initial={{ scale: 0.4, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.4, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 380, damping: 24 }}
                      className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center pointer-events-auto"
                    >
                      {/* Radial Ring Circle Background */}
                      <div className="absolute inset-0 rounded-full border border-blue-400/20 dark:border-blue-500/20 bg-blue-500/[0.03] backdrop-blur-xs" />

                      {/* 8 Radial Action Nodes */}
                      {ACTION_NODES.map((node, index) => {
                        const angle = (index * 360) / ACTION_NODES.length;
                        const radius = 120; // px distance from center
                        const rad = (angle - 90) * (Math.PI / 180);
                        const x = Math.round(radius * Math.cos(rad));
                        const y = Math.round(radius * Math.sin(rad));

                        return (
                          <motion.button
                            key={node.id}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{
                              delay: index * 0.02,
                              type: "spring",
                              stiffness: 400,
                              damping: 22,
                            }}
                            style={{
                              transform: `translate(${x}px, ${y}px)`,
                            }}
                            onMouseEnter={() => {
                              setHoveredNode(node);
                              playSound(700 + index * 40, "sine", 0.04);
                            }}
                            onMouseLeave={() => setHoveredNode(null)}
                            onClick={() => handleAction(node)}
                            className="absolute w-12 h-12 rounded-full bg-white dark:bg-[#1a1e2b] border border-slate-200/90 dark:border-white/15 shadow-lg hover:border-blue-500 dark:hover:border-blue-400 hover:scale-110 active:scale-95 transition-all flex flex-col items-center justify-center group cursor-pointer"
                          >
                            <span className="text-[11px] font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                              {node.label}
                            </span>
                            <span className="text-[9px] font-mono text-slate-400 dark:text-slate-500 font-semibold">
                              {node.hotkey}
                            </span>
                          </motion.button>
                        );
                      })}
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Hovered Action Preview or Hint */}
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>
                  {hoveredNode
                    ? `${hoveredNode.label}: ${hoveredNode.desc} (Press key ${hoveredNode.hotkey})`
                    : "Tip: Hold Shift in Finder, then press a hotkey (1-8) or click an action."}
                </span>
              </div>
              <div className="font-mono text-[11px] text-slate-400">
                100% native offline execution
              </div>
            </div>

            {/* Simulated macOS Toast Notification */}
            <AnimatePresence>
              {toastMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="absolute top-4 right-4 z-30 max-w-sm p-3.5 rounded-xl bg-slate-900/90 dark:bg-white/95 text-white dark:text-slate-900 shadow-xl border border-white/10 dark:border-slate-200 backdrop-blur-md flex items-center gap-2.5 text-xs font-medium"
                >
                  <Sparkles className="w-4 h-4 text-amber-400 dark:text-amber-600 shrink-0" />
                  <span>{toastMessage}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
