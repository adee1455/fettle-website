export default function FettleLogo({
  size = 28,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-200 group-hover:scale-105 shadow-[0_2px_8px_rgba(37,99,235,0.25)] rounded-[8px] ${className}`}
      aria-label="Fettle Logo"
    >
      <rect width="32" height="32" rx="8" fill="url(#fettle-logo-grad)" />
      {/* Central Hub */}
      <circle cx="16" cy="16" r="3.5" fill="#FFFFFF" />
      {/* 4 Radial Action Nodes */}
      <circle cx="16" cy="7" r="2" fill="#FFFFFF" fillOpacity="0.95" />
      <circle cx="25" cy="16" r="2" fill="#FFFFFF" fillOpacity="0.95" />
      <circle cx="16" cy="25" r="2" fill="#FFFFFF" fillOpacity="0.95" />
      <circle cx="7" cy="16" r="2" fill="#FFFFFF" fillOpacity="0.95" />
      {/* Connecting Guide Dashed Ring */}
      <circle
        cx="16"
        cy="16"
        r="9"
        stroke="#FFFFFF"
        strokeOpacity="0.42"
        strokeWidth="1.2"
        strokeDasharray="2.5 2.5"
      />
      <defs>
        <linearGradient
          id="fettle-logo-grad"
          x1="0"
          y1="0"
          x2="32"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>
    </svg>
  );
}
