"use client";

import { motion } from "framer-motion";
import { Monitor, Apple, Laptop, Download, ExternalLink } from "lucide-react";

const BASE_DL =
  "https://github.com/raiylakee/absensholat-desktop-el/releases/download/v1.1.1";
const RELEASES_URL =
  "https://github.com/raiylakee/absensholat-desktop-el/releases/tag/v1.1.1";

const platforms = [
  {
    icon: Monitor,
    label: "Windows",
    formats: ".exe (NSIS)",
    arch: "x64 & arm64",
    desc: "Installer untuk Windows 10/11",
    href: `${BASE_DL}/Absensholat.Desktop.Setup.1.1.1.exe`,
    downloadLabel: "Download .exe",
  },
  {
    icon: Apple,
    label: "macOS",
    formats: ".dmg (Universal)",
    arch: "Intel & Apple Silicon",
    desc: "Untuk macOS 11 Big Sur ke atas",
    href: `${BASE_DL}/Absensholat.Desktop-1.1.1-universal.dmg`,
    downloadLabel: "Download .dmg",
  },
  {
    icon: Laptop,
    label: "Linux",
    formats: ".deb / .AppImage / .rpm",
    arch: "x64 & arm64",
    desc: "Untuk Debian, Ubuntu, Fedora, dan distro lainnya",
    href: `${BASE_DL}/absensholat-desktop-el_1.1.1_amd64.deb`,
    downloadLabel: "Download .deb",
  },
];

export default function DesktopAppSection() {
  return (
    <section id="apps" className="px-6 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-secondary mb-4">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
            </span>
            New App
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">
            Absensholat Desktop
          </h2>
          <p className="text-muted max-w-lg mx-auto leading-relaxed">
            Sistem Absensi Sholat Terpadu. Kelola jadwal sholat, presensi
            siswa, dan laporan kehadiran dalam satu aplikasi desktop.
          </p>
        </motion.div>

        {/* Download cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {platforms.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-border-hover hover:-translate-y-1"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                  <p.icon size={24} className="text-primary" />
                </div>

                {/* Info */}
                <h3 className="text-lg font-bold mb-1">{p.label}</h3>
                <p className="text-sm text-muted mb-1">{p.desc}</p>
                <div className="flex items-center gap-2 text-xs text-muted/70 mb-5">
                  <span className="rounded-md bg-background px-2 py-0.5 font-mono">
                    {p.formats}
                  </span>
                  <span>{p.arch}</span>
                </div>

                {/* Download button */}
                <a
                  href={p.href}
                  download
                  className="inline-flex items-center gap-2 w-full justify-center rounded-xl bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 hover:opacity-90 transition-opacity"
                >
                  <Download size={16} />
                  {p.downloadLabel}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Release link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <a
            href={RELEASES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
          >
            Lihat semua rilis di GitHub
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
