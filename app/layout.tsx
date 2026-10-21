import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfbfd" },
    { media: "(prefers-color-scheme: dark)", color: "#08090c" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Fettle — Your files, in good shape (Native macOS Utility)",
  description:
    "The native macOS file utility you trigger without switching windows. Hold Shift in Finder, pick your format, and convert in place. 100% offline, zero cloud uploads.",
  keywords: [
    "macOS utility",
    "Fettle",
    "file converter",
    "HEIC to WebP",
    "macOS radial menu",
    "open source mac app",
    "Finder file actions",
    "PDF converter mac",
  ],
  authors: [{ name: "Adee", url: "https://itsadee.com" }],
  creator: "Adee",
  metadataBase: new URL("https://fettle.itsadee.com"),
  openGraph: {
    title: "Fettle — Your files, in good shape",
    description:
      "The native macOS file utility you trigger without switching windows. Convert in place with zero cloud uploads.",
    url: "https://fettle.itsadee.com",
    siteName: "Fettle",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fettle — Your files, in good shape",
    description:
      "Native macOS file utility triggered right from Finder. 100% offline, zero cloud uploads.",
    creator: "@itsadee",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem('fettle-theme');
                  if (stored === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
