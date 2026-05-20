"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Monitor,
  Apple,
  Laptop,
  Globe,
  Download,
} from "lucide-react";

type Platform = "android" | "windows" | "macos" | "linux" | "web";

interface Step {
  title: string;
  desc: string;
}

interface DownloadLink {
  label: string;
  href: string;
}

interface PlatformData {
  id: Platform;
  label: string;
  icon: React.ElementType;
  steps: Step[];
  downloadLabel: string;
  downloadHref?: string;
  extraDownloads?: DownloadLink[];
}

const platforms: PlatformData[] = [
  {
    id: "android",
    label: "Android",
    icon: Smartphone,
    downloadLabel: "Download APK",
    steps: [
      {
        title: "Download APK atau buka Google Play",
        desc: "Klik tombol download di atas untuk mendapatkan file APK atau langsung ke Google Play Store.",
      },
      {
        title: "Izinkan instalasi",
        desc: 'Jika menggunakan APK, aktifkan "Install from unknown sources" di pengaturan keamanan.',
      },
      {
        title: "Buka file & install",
        desc: "Buka file APK yang telah diunduh dan ikuti instruksi instalasi.",
      },
      {
        title: "Selesai!",
        desc: "Buka AppPoint dari launcher dan mulai gunakan aplikasi.",
      },
    ],
  },
  {
    id: "windows",
    label: "Windows",
    icon: Monitor,
    downloadLabel: "Download .exe",
    downloadHref:
      "https://gh-proxy.com/https://github.com/raiylakee/absensholat-desktop-el/releases/download/v1.1.1/Absensholat.Desktop.Setup.1.1.1.exe",
    steps: [
      {
        title: "Download installer",
        desc: "Klik tombol download untuk mengunduh file .exe installer Absensholat Desktop.",
      },
      {
        title: "Jalankan installer",
        desc: "Buka file .exe yang telah diunduh. Jika muncul peringatan SmartScreen, klik 'Run anyway'.",
      },
      {
        title: "Ikuti wizard instalasi",
        desc: "Pilih direktori instalasi dan klik 'Install' untuk memulai proses instalasi.",
      },
      {
        title: "Selesai!",
        desc: "Absensholat Desktop akan muncul di Start Menu dan desktop. Buka dan mulai gunakan.",
      },
    ],
  },
  {
    id: "macos",
    label: "macOS",
    icon: Apple,
    downloadLabel: "Download .dmg",
    downloadHref:
      "https://gh-proxy.com/https://github.com/raiylakee/absensholat-desktop-el/releases/download/v1.1.1/Absensholat.Desktop-1.1.1-universal.dmg",
    steps: [
      {
        title: "Download file .dmg",
        desc: "Klik tombol download untuk mengunduh file disk image (.dmg) Absensholat Desktop.",
      },
      {
        title: "Buka file .dmg",
        desc: "Double-click file .dmg yang telah diunduh untuk membuka disk image.",
      },
      {
        title: "Drag ke Applications",
        desc: "Seret ikon Absensholat Desktop ke folder Applications seperti pada aplikasi macOS lainnya.",
      },
      {
        title: "Selesai!",
        desc: "Buka Absensholat Desktop dari Launchpad atau folder Applications. Selamat menikmati!",
      },
    ],
  },
  {
    id: "linux",
    label: "Linux",
    icon: Laptop,
    downloadLabel: "Download .deb",
    downloadHref:
      "https://gh-proxy.com/https://github.com/raiylakee/absensholat-desktop-el/releases/download/v1.1.1/absensholat-desktop-el_1.1.1_amd64.deb",
    extraDownloads: [
      {
        label: "Download .AppImage",
        href: "https://gh-proxy.com/https://github.com/raiylakee/absensholat-desktop-el/releases/download/v1.1.1/Absensholat.Desktop-1.1.1.AppImage",
      },
      {
        label: "Download .rpm",
        href: "https://gh-proxy.com/https://github.com/raiylakee/absensholat-desktop-el/releases/download/v1.1.1/absensholat-desktop-el-1.1.1.x86_64.rpm",
      },
    ],
    steps: [
      {
        title: "Pilih format package",
        desc: "Download .deb untuk Debian/Ubuntu, .rpm untuk Fedora/RHEL, atau .AppImage untuk semua distro (tanpa install).",
      },
      {
        title: "Install package",
        desc: 'deb: "sudo dpkg -i file.deb". rpm: "sudo rpm -i file.rpm". AppImage: chmod +x lalu jalankan langsung.',
      },
      {
        title: "Install dependencies (deb/rpm)",
        desc: 'Jika error dependency di Debian: "sudo apt-get install -f". Di Fedora: "sudo dnf install". AppImage tidak perlu.',
      },
      {
        title: "Selesai!",
        desc: "Cari Absensholat Desktop di application menu atau jalankan dari terminal.",
      },
    ],
  },
  {
    id: "web",
    label: "Web",
    icon: Globe,
    downloadLabel: "Open Web App",
    steps: [
      {
        title: "Buka browser",
        desc: "AppPoint Web App kompatibel dengan Chrome, Firefox, Safari, dan Edge terbaru.",
      },
      {
        title: "Kunjungi URL AppPoint",
        desc: "Buka app.apppoint.com di browser Anda. Tidak perlu install apapun.",
      },
      {
        title: "Login atau daftar",
        desc: "Masuk dengan akun yang sudah ada atau buat akun baru secara gratis.",
      },
      {
        title: "Selesai!",
        desc: "Anda bisa langsung menggunakan AppPoint. Bookmark halaman untuk akses cepat.",
      },
    ],
  },
];

export default function InstallGuideSection() {
  const [activeTab, setActiveTab] = useState<Platform>("android");
  const active = platforms.find((p) => p.id === activeTab)!;

  return (
    <section id="install" className="px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <p className="text-primary text-xs font-semibold uppercase tracking-widest text-center mb-2">
          Get Started
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-3">
          How to Install
        </h2>
        <p className="text-muted text-center mb-10 max-w-md mx-auto">
          Pilih platform Anda dan ikuti langkah-langkah berikut.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {platforms.map((p) => {
            const Icon = p.icon;
            const isActive = p.id === activeTab;
            return (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25"
                    : "border border-border text-muted hover:text-foreground hover:border-border-hover"
                }`}
              >
                <Icon size={16} />
                {p.label}
              </button>
            );
          })}
        </div>

        {/* Steps */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="max-w-2xl mx-auto"
          >
            <div className="flex flex-col gap-5">
              {active.steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-sm font-bold text-white">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-0.5">
                      {step.title}
                    </h4>
                    <p className="text-muted text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Download button(s) */}
            <div className="mt-8 flex flex-col items-center gap-2">
              {active.downloadHref ? (
                <a
                  href={active.downloadHref}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
                >
                  <Download size={18} />
                  {active.downloadLabel}
                </a>
              ) : (
                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  <Download size={18} />
                  {active.downloadLabel}
                </button>
              )}
              {active.extraDownloads?.map((dl) => (
                <a
                  key={dl.label}
                  href={dl.href}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-semibold text-sm hover:border-border-hover hover:bg-card transition-all"
                >
                  <Download size={18} />
                  {dl.label}
                </a>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
