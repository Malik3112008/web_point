import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "AppPoint — Download for Android, Windows, macOS, Linux & Web",
  description:
    "One app, all platforms. Install AppPoint on your Android, Windows, macOS, Linux, or use it directly in your browser.",
  keywords: [
    "AppPoint",
    "download",
    "Android",
    "Windows",
    "macOS",
    "Linux",
    "web app",
    "cross-platform",
    "installer",
  ],
  authors: [{ name: "AppPoint Team" }],
  openGraph: {
    title: "AppPoint — Download for Android, Windows, macOS, Linux & Web",
    description:
      "One app, all platforms. Install AppPoint on your Android, Windows, macOS, Linux, or use it directly in your browser.",
    type: "website",
    locale: "en_US",
    siteName: "AppPoint",
  },
  twitter: {
    card: "summary_large_image",
    title: "AppPoint — Download for Android, Windows, macOS, Linux & Web",
    description:
      "One app, all platforms. Install AppPoint on your Android, Windows, macOS, Linux, or use it directly in your browser.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
