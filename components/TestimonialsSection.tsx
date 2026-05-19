"use client";

import { motion } from "framer-motion";
import { Star, Smartphone, Monitor, Apple, Laptop, Globe } from "lucide-react";

interface Testimonial {
  name: string;
  initials: string;
  title: string;
  platform: string;
  platformIcon: React.ElementType;
  rating: number;
  quote: string;
  color: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    initials: "SC",
    title: "Product Designer",
    platform: "macOS",
    platformIcon: Apple,
    rating: 5,
    quote:
      "AppPoint has completely changed how I manage my workflow. The cross-platform sync is seamless and the UI is gorgeous.",
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "Marcus Johnson",
    initials: "MJ",
    title: "Software Engineer",
    platform: "Windows",
    platformIcon: Monitor,
    rating: 5,
    quote:
      "As a developer, I appreciate the performance and reliability. It runs flawlessly on my Windows machine and never slows me down.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Aisha Patel",
    initials: "AP",
    title: "Digital Marketer",
    platform: "Android",
    platformIcon: Smartphone,
    rating: 4,
    quote:
      "The mobile experience is top-notch. I can manage everything from my phone while commuting. Smart notifications are a game changer.",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Tom Eriksson",
    initials: "TE",
    title: "Freelance Writer",
    platform: "Web",
    platformIcon: Globe,
    rating: 5,
    quote:
      "I use the web app daily from different browsers. No installation needed, and it works perfectly every single time.",
    color: "from-purple-500 to-violet-500",
  },
  {
    name: "Lin Wei",
    initials: "LW",
    title: "System Administrator",
    platform: "Linux",
    platformIcon: Laptop,
    rating: 5,
    quote:
      "Finally an app that takes Linux seriously. The .deb package installed cleanly and the performance is outstanding.",
    color: "from-amber-500 to-orange-500",
  },
  {
    name: "Elena Rodriguez",
    initials: "ER",
    title: "UX Researcher",
    platform: "macOS",
    platformIcon: Apple,
    rating: 4,
    quote:
      "The attention to detail in the design is remarkable. Every interaction feels polished and intentional. Highly recommended.",
    color: "from-indigo-500 to-blue-500",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? "fill-yellow-400 text-yellow-400" : "text-border"}
        />
      ))}
    </div>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function TestimonialsSection() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <p className="text-primary text-xs font-semibold uppercase tracking-widest text-center mb-2">
          Testimonials
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-3">
          Loved by Users Worldwide
        </h2>
        <p className="text-muted text-center mb-14 max-w-md mx-auto">
          See what our users across different platforms have to say about
          AppPoint.
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => {
            const PlatformIcon = t.platformIcon;
            return (
              <motion.div
                key={t.name}
                variants={item}
                className="relative group"
              >
                {/* Gradient border wrapper */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/40 to-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative bg-card border border-border rounded-2xl p-6 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-xs font-bold text-white`}
                    >
                      {t.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold truncate">
                        {t.name}
                      </p>
                      <p className="text-xs text-muted truncate">{t.title}</p>
                    </div>
                    <PlatformIcon size={16} className="text-muted flex-shrink-0" />
                  </div>

                  {/* Rating */}
                  <StarRating count={t.rating} />

                  {/* Quote */}
                  <p className="mt-3 text-sm text-muted leading-relaxed flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
