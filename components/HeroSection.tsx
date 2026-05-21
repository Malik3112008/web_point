"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, Apple, Globe } from "lucide-react";

const platforms = [
  {
    icon: Smartphone,
    label: "Android",
    sub: "Google Play / APK",
    primary: true,
  },
  {
    icon: Monitor,
    label: "Windows",
    sub: ".msi / Microsoft Store",
  },
  {
    icon: Apple,
    label: "macOS",
    sub: ".dmg / Mac App Store",
  },
  {
    icon: Monitor,
    label: "Linux",
    sub: ".deb / .AppImage",
  },
  {
    icon: Globe,
    label: "Web App",
    sub: "Open in Browser",
  },
];

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center px-6 pt-28 pb-20 text-center overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[100px]" />
      </div>

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-secondary"
      >
        <span>✨</span> v2.0 Now Available
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight"
      >
        Get{" "}
        <span className="bg-gradient-to-r from-primary via-secondary to-pink-500 bg-clip-text text-transparent">
          AppPoint
        </span>
        <br />
        Available Everywhere
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-5 max-w-xl text-base sm:text-lg text-muted leading-relaxed"
      >
        One app, all platforms. Install AppPoint on your Android, Windows,
        macOS, Linux, or use it directly in your browser.
      </motion.p>

      {/* Platform buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 flex flex-wrap justify-center gap-3"
      >
        {platforms.map((p) => (
          <button
            key={p.label}
            className={`flex items-center gap-3 rounded-xl border px-5 py-3 text-sm font-medium transition-all hover:border-border-hover ${
              p.primary
                ? "bg-gradient-to-r from-primary to-secondary border-transparent text-white shadow-lg shadow-primary/25"
                : "bg-card border-border text-foreground hover:bg-card/80"
            }`}
          >
            <p.icon size={22} />
            <div className="flex flex-col text-left">
              <span>{p.label}</span>
              <span className={`text-[11px] ${p.primary ? "text-white/70" : "text-muted"}`}>
                {p.sub}
              </span>
            </div>
          </button>
        ))}
      </motion.div>
    </section>
  );
}
