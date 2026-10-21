import React from "react";

export default function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
      >
        <rect
          width="48"
          height="48"
          rx="12"
          className="fill-blue-600 dark:fill-blue-500"
        />
        <circle
          cx="24"
          cy="24"
          r="14"
          stroke="white"
          strokeWidth="2.5"
          strokeOpacity="0.4"
          strokeDasharray="3 3"
        />
        {/* 8 Radial nodes */}
        <circle cx="24" cy="10" r="2.5" fill="white" />
        <circle cx="34" cy="14" r="2.5" fill="white" />
        <circle cx="38" cy="24" r="2.5" fill="white" />
        <circle cx="34" cy="34" r="2.5" fill="white" />
        <circle cx="24" cy="38" r="2.5" fill="white" />
        <circle cx="14" cy="34" r="2.5" fill="white" />
        <circle cx="10" cy="24" r="2.5" fill="white" />
        <circle cx="14" cy="14" r="2.5" fill="white" />
        {/* Center core */}
        <circle cx="24" cy="24" r="5" fill="white" />
      </svg>
    </div>
  );
}
