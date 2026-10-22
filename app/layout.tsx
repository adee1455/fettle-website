import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
    { media: "(prefers-color-scheme: light)", color: "#F7F6F3" },
    { media: "(prefers-color-scheme: dark)", color: "#0C0C0B" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Fettle — Your files, in good shape",
  description:
    "Convert files where they are. Shift-drag on the Desktop or in Finder. A radial menu converts beside your originals — nothing leaves your Mac.",
  keywords: [
    "Fettle",
    "macOS utility",
    "convert files",
    "Shift drag radial menu",
    "on-device file converter",
    "HEIC to WebP mac",
    "open source mac app",
    "Apple Silicon utility",
  ],
  authors: [{ name: "Adee", url: "https://itsadee.com" }],
  creator: "Adee",
  metadataBase: new URL("https://fettle.itsadee.com"),
  openGraph: {
    title: "Fettle — Your files, in good shape",
    description:
      "Convert files where they are. Shift-drag on the Desktop or in Finder. A radial menu converts beside your originals — nothing leaves your Mac.",
    url: "https://fettle.itsadee.com",
    siteName: "Fettle",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fettle — Your files, in good shape",
    description:
      "Convert files where they are. Shift-drag on the Desktop or in Finder. On-device, 100% private.",
    creator: "@itsadee",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem('theme') || localStorage.getItem('fettle-theme');
                  const t = stored === 'dark' ? 'dark' : 'light';
                  document.documentElement.setAttribute('data-theme', t);
                  if (t === 'dark') {
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
        <Analytics />
      </body>
    </html>
  );
}
