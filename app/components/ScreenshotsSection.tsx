"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const screenshots = [
  { title: "Dashboard View", caption: "Overview of your activity and stats" },
  { title: "Chat Interface", caption: "Seamless messaging across platforms" },
  { title: "Settings Panel", caption: "Customize everything to your liking" },
  { title: "Analytics", caption: "Track your usage with detailed insights" },
  { title: "Dark Mode", caption: "Beautiful dark theme for night owls" },
];

export default function ScreenshotsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i === 0 ? screenshots.length - 1 : i - 1));
  const next = () => setActive((i) => (i === screenshots.length - 1 ? 0 : i + 1));

  return (
    <section id="screenshots" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <p className="text-primary text-xs font-semibold uppercase tracking-widest text-center mb-2">
          Preview
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-3">
          See AppPoint in Action
        </h2>
        <p className="text-muted text-center mb-12 max-w-md mx-auto">
          A glimpse of what you can do with AppPoint across all your devices.
        </p>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35 }}
              className="aspect-video flex items-center justify-center"
            >
              <div className="text-center px-6">
                <div className="text-6xl mb-4">
                  {["📊", "💬", "⚙️", "📈", "🌙"][active]}
                </div>
                <h3 className="text-xl font-bold mb-1">
                  {screenshots[active].title}
                </h3>
                <p className="text-muted text-sm">
                  {screenshots[active].caption}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Nav arrows */}
          <button
            onClick={prev}
            aria-label="Previous screenshot"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 border border-border flex items-center justify-center text-foreground hover:bg-card transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            aria-label="Next screenshot"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 border border-border flex items-center justify-center text-foreground hover:bg-card transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-5">
          {screenshots.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to screenshot ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === active ? "bg-primary" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
