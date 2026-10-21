"use client";

import { useState } from "react";
import { Search, ArrowRight, Image as ImageIcon, FileText, Music, Sparkles } from "lucide-react";

interface PresetItem {
  id: string;
  category: "images" | "docs" | "media" | "tools";
  input: string;
  output: string;
  title: string;
  desc: string;
  framework: string;
}

const PRESETS: PresetItem[] = [
  // Images
  { id: "1", category: "images", input: "HEIC / HEIF", output: "JPEG / WebP / PNG", title: "Apple Photos Transcode", desc: "Instantly convert iPhone raw shots to universally shareable web formats.", framework: "Image I/O" },
  { id: "2", category: "images", input: "PNG / JPEG", output: "WebP (Lossy / Lossless)", title: "Web Image Optimization", desc: "Compress imagery for blogs & modern web apps with up to 80% size savings.", framework: "Image I/O" },
  { id: "3", category: "images", input: "Any Image", output: "50% / 25% Scale", title: "Quick Downscale", desc: "Downsample massive 48MP camera images for email attachments in 30ms.", framework: "CoreGraphics" },
  { id: "4", category: "images", input: "Any Photo", output: "Sanitized Image", title: "Strip EXIF & Location", desc: "Permanently scrub GPS coordinates, camera serials, and timestamps.", framework: "CoreGraphics" },
  { id: "5", category: "images", input: "SVG / Vector", output: "High-Res PNG (1x, 2x, 3x)", title: "Vector Rasterizer", desc: "Render crisp icon and UI graphics without launching Figma or Illustrator.", framework: "CoreGraphics" },
  { id: "6", category: "images", input: "TIFF / RAW", output: "High-Quality JPEG", title: "Pro RAW Conversion", desc: "Turn heavyweight scanner and DSLR TIFFs into optimized preview images.", framework: "Image I/O" },

  // Documents
  { id: "7", category: "docs", input: "DOCX / Pages", output: "Clean PDF Document", title: "Office to PDF", desc: "Convert Word documents directly to PDF without Microsoft Office installed.", framework: "PDFKit" },
  { id: "8", category: "docs", input: "Multiple Images", output: "Merged PDF Document", title: "Images to Single PDF", desc: "Combine receipts, slides, or scanned pages into an organized multi-page document.", framework: "PDFKit" },
  { id: "9", category: "docs", input: "PDF Document", output: "Split Single Pages", title: "PDF Page Extractor", desc: "Split every page into a standalone PDF file inside an organized subfolder.", framework: "PDFKit" },
  { id: "10", category: "docs", input: "Markdown / Text", output: "Styled PDF", title: "Markdown to PDF", desc: "Quickly render notes or technical README files into printable formatted PDFs.", framework: "CoreText" },

  // Media
  { id: "11", category: "media", input: "MOV / MP4", output: "MP3 Audio Track", title: "Extract Audio Track", desc: "Strip voice notes, podcast audio, or background tracks from any video file.", framework: "AVFoundation" },
  { id: "12", category: "media", input: "ProRes / MOV", output: "Optimized H.264 MP4", title: "Video Web Transcode", desc: "Convert gigantic screen recordings into compact, high-efficiency MP4 videos.", framework: "AVFoundation" },
  { id: "13", category: "media", input: "Video (Any)", output: "Keyframe JPEG Poster", title: "Video Thumbnail Grabber", desc: "Generate a crisp 1080p cover thumbnail from the first high-motion frame.", framework: "AVFoundation" },
  { id: "14", category: "media", input: "WAV / AIFF", output: "AAC / M4A (256kbps)", title: "Audio Compressor", desc: "Compress uncompressed audio stems into lightweight broadcast-ready audio.", framework: "AVFoundation" },

  // Tools
  { id: "15", category: "tools", input: "Any File", output: "Clipboard Text", title: "Copy POSIX Path", desc: "Copy the exact absolute terminal path `/Users/...` with one click.", framework: "AppKit" },
  { id: "16", category: "tools", input: "Any File", output: "Safe Duplicate", title: "Non-destructive Clone", desc: "Quickly duplicate files with incremental collision naming.", framework: "Foundation" },
  { id: "17", category: "tools", input: "Any File", output: "Reveal in Finder", title: "Reveal in Finder", desc: "Instantly focus and highlight the target file in a new Finder window.", framework: "NSWorkspace" },
];

export default function PresetCatalogue() {
  const [activeTab, setActiveTab] = useState<"all" | "images" | "docs" | "media" | "tools">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPresets = PRESETS.filter((p) => {
    const matchesTab = activeTab === "all" || p.category === activeTab;
    const matchesSearch =
      searchQuery.trim() === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.input.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.output.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <section id="presets" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-slate-900/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-blue-200/60 dark:border-blue-900/40">
            Comprehensive Presets
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mt-4 mb-4">
            40+ actions right at your fingertips.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Search or filter by category to see how Fettle handles everyday file chores.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Tab buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-white/10 shadow-xs">
            {[
              { id: "all", label: "All Presets" },
              { id: "images", label: "Images & Photos" },
              { id: "docs", label: "PDF & Docs" },
              { id: "media", label: "Audio & Video" },
              { id: "tools", label: "File Utilities" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by format (e.g. webp, docx)..."
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 shadow-xs"
            />
          </div>
        </div>

        {/* Presets Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPresets.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-white dark:bg-[#11131c] border border-slate-200/80 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                {/* Formats conversion badge */}
                <div className="flex items-center justify-between text-xs font-mono font-medium mb-3">
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold">
                    {item.input}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-500 group-hover:translate-x-1 transition-transform" />
                  <span className="px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-900/40 font-bold">
                    {item.output}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  Instant in-place
                </span>
                <span className="font-mono text-slate-500 dark:text-slate-400">
                   {item.framework}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredPresets.length === 0 && (
          <div className="text-center py-16 text-slate-500 text-sm">
            No conversion presets matching &ldquo;{searchQuery}&rdquo;.
          </div>
        )}
      </div>
    </section>
  );
}
