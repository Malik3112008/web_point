"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "⚡",
    title: "Lightning Fast",
    desc: "Performa tinggi di semua perangkat, bahkan pada koneksi lambat.",
  },
  {
    icon: "🔒",
    title: "Secure by Default",
    desc: "Enkripsi end-to-end untuk menjaga data Anda tetap aman.",
  },
  {
    icon: "🔄",
    title: "Cross-Platform Sync",
    desc: "Data tersinkron secara real-time di semua platform Anda.",
  },
  {
    icon: "🎨",
    title: "Beautiful UI",
    desc: "Antarmuka modern, bersih, dan mudah digunakan.",
  },
  {
    icon: "📴",
    title: "Offline Mode",
    desc: "Tetap produktif meski tanpa koneksi internet.",
  },
  {
    icon: "🔔",
    title: "Smart Notifications",
    desc: "Notifikasi cerdas yang relevan dan tidak mengganggu.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function FeaturesSection() {
  return (
    <section id="features" className="px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Why AppPoint
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Everything You Need
          </h2>
          <p className="mt-3 text-muted text-base max-w-xl mx-auto">
            Powerful features built for modern users across all platforms.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={cardVariants}
              className="group relative rounded-2xl bg-card border border-border p-7 transition-all duration-300 hover:-translate-y-1 hover:border-transparent"
            >
              {/* Gradient border glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />

              {/* Icon with glow */}
              <div className="relative mb-5 inline-flex">
                <span className="text-4xl" role="img" aria-label={f.title}>
                  {f.icon}
                </span>
                <div className="absolute inset-0 text-4xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity">
                  {f.icon}
                </div>
              </div>

              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
