"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Monitor,
  Apple,
  Globe,
  Laptop,
} from "lucide-react";

const platforms = [
  {
    icon: Smartphone,
    name: "Android",
    sub: "Google Play / APK",
    primary: true,
  },
  { icon: Monitor, name: "Windows", sub: ".exe / Microsoft Store" },
  { icon: Apple, name: "macOS", sub: ".dmg / Mac App Store" },
  { icon: Laptop, name: "Linux", sub: ".deb / .AppImage" },
  { icon: Globe, name: "Web App", sub: "Open in Browser" },
];

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-24 pb-20 text-center overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-card text-xs font-medium text-secondary"
      >
        <span>v2.0 Now Available</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight mb-5"
      >
        Get <span className="gradient-text">AppPoint</span>
        <br />
        Available Everywhere
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-muted text-base sm:text-lg max-w-xl mb-10 leading-relaxed"
      >
        One app, all platforms. Install AppPoint on your Android, Windows,
        macOS, Linux, or use it directly in your browser.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap gap-3 justify-center"
      >
        {platforms.map(({ icon: Icon, name, sub, primary }) => (
          <button
            key={name}
            className={`flex items-center gap-3 px-5 py-3 rounded-xl border text-sm font-medium transition-colors ${
              primary
                ? "bg-gradient-to-r from-primary to-secondary border-transparent text-white"
                : "bg-card border-border hover:border-border-hover text-foreground"
            }`}
          >
            <Icon size={22} />
            <span className="flex flex-col text-left">
              <span>{name}</span>
              <span className="text-xs text-muted-foreground">{sub}</span>
            </span>
          </button>
        ))}
      </motion.div>
    </section>
  );
}
