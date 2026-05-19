"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  RefreshCw,
  Palette,
  WifiOff,
  Bell,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    desc: "Performa tinggi di semua perangkat, bahkan pada koneksi lambat.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    desc: "Enkripsi end-to-end untuk menjaga data Anda tetap aman.",
  },
  {
    icon: RefreshCw,
    title: "Cross-Platform Sync",
    desc: "Data tersinkron secara real-time di semua platform Anda.",
  },
  {
    icon: Palette,
    title: "Beautiful UI",
    desc: "Antarmuka modern, bersih, dan mudah digunakan.",
  },
  {
    icon: WifiOff,
    title: "Offline Mode",
    desc: "Tetap produktif meski tanpa koneksi internet.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    desc: "Notifikasi cerdas yang relevan dan tidak mengganggu.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function FeaturesSection() {
  return (
    <section id="features" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <p className="text-primary text-xs font-semibold uppercase tracking-widest text-center mb-2">
          Why AppPoint
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-3">
          Everything You Need
        </h2>
        <p className="text-muted text-center mb-14 max-w-md mx-auto">
          Powerful features built for modern users across all platforms.
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={item}
              className="bg-card border border-border rounded-2xl p-7 hover:border-border-hover transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Icon size={24} className="text-primary" />
              </div>
              <h3 className="text-base font-bold mb-2">{title}</h3>
              <p className="text-muted text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
