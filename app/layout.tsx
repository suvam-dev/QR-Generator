import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "QR Code Generator",
  description:
    "A simple clean app for generating quick QR codes and scanning them. No ads, no bloatware, just pure performance.",
  keywords: [
    "QR code generator",
    "free QR code generator",
    "ad-free QR code",
    "QR code maker",
    "instant QR generator",
    "fast QR generator",
    "download QR code",
    "QR scanner",
    "high resolution QR code",
    "custom QR code",
    "client-side QR code",
    "privacy-friendly QR code",
    "open source QR generator",
  ],
  verification: {
    google: "E7xxlENYgILDcBXGDexuffPr1I_JbiZF-EOVLsAzu5o",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <meta
          name="google-site-verification"
          content="E7xxlENYgILDcBXGDexuffPr1I_JbiZF-EOVLsAzu5o"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
