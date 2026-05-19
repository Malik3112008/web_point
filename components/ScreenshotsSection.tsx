"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const screenshots = [
  {
    src: "https://picsum.photos/seed/apppoint1/800/500",
    caption: "Dashboard — Overview at a glance",
  },
  {
    src: "https://picsum.photos/seed/apppoint2/800/500",
    caption: "Dark Mode — Easy on the eyes",
  },
  {
    src: "https://picsum.photos/seed/apppoint3/800/500",
    caption: "Cross-Platform Sync — Seamless everywhere",
  },
  {
    src: "https://picsum.photos/seed/apppoint4/800/500",
    caption: "Notifications — Stay informed, not overwhelmed",
  },
  {
    src: "https://picsum.photos/seed/apppoint5/800/500",
    caption: "Settings — Full customization control",
  },
];

function ScreenshotCard({ src, caption, index }: { src: string; caption: string; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="snap-center flex-shrink-0 w-[300px] sm:w-[340px]"
      style={{ perspective: 800 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-300 hover:border-border-hover"
      >
        {/* Image */}
        <div className="aspect-[16/10] overflow-hidden">
          <Image
            src={src}
            alt={caption}
            width={800}
            height={500}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        {/* Caption */}
        <div className="p-4">
          <p className="text-sm text-muted">{caption}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ScreenshotsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = 340;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section id="screenshots" className="px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Preview
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            See AppPoint in Action
          </h2>
          <p className="mt-3 text-muted text-base max-w-xl mx-auto">
            A glimpse of what awaits you across every platform.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Nav buttons */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-card border border-border transition-all ${
              canScrollLeft
                ? "hover:bg-card/80 hover:border-border-hover text-foreground"
                : "opacity-30 cursor-not-allowed text-muted"
            }`}
            aria-label="Previous screenshot"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-card border border-border transition-all ${
              canScrollRight
                ? "hover:bg-card/80 hover:border-border-hover text-foreground"
                : "opacity-30 cursor-not-allowed text-muted"
            }`}
            aria-label="Next screenshot"
          >
            <ChevronRight size={20} />
          </button>

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {screenshots.map((s, i) => (
              <ScreenshotCard key={i} src={s.src} caption={s.caption} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
