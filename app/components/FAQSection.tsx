"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "What is AppPoint?",
    a: "AppPoint is a multi-platform application installer that allows you to discover, download, and install apps across Android, Windows, macOS, Linux, and the Web — all from a single, unified platform.",
  },
  {
    q: "Is AppPoint free to use?",
    a: "Yes! AppPoint is completely free for personal use. We also offer premium plans for businesses that need centralized management, bulk deployment, and priority support.",
  },
  {
    q: "Is it safe to install apps through AppPoint?",
    a: "Absolutely. Every app goes through a rigorous verification process including malware scanning, digital signature verification, and security audits before being listed on our platform.",
  },
  {
    q: "Can I use AppPoint offline?",
    a: "Yes, AppPoint supports offline installation. You can download app installers and save them for later installation when you don't have internet access.",
  },
  {
    q: "How do I update my apps?",
    a: "AppPoint includes an auto-update feature that checks for updates regularly. You can also manually check for updates from the dashboard and update apps with one click.",
  },
  {
    q: "What platforms does AppPoint support?",
    a: "AppPoint supports Android 10+, Windows 10/11, macOS 12+, Ubuntu/Debian/Fedora/Arch Linux, and all modern web browsers. We're constantly expanding platform support.",
  },
  {
    q: "How do I report a problem with an app?",
    a: "You can report issues directly through the app page on AppPoint. Click the 'Report Issue' button and provide details. Our team reviews all reports within 24 hours.",
  },
  {
    q: "Can I request an app to be added?",
    a: "Yes! We welcome app requests. Use the 'Request App' feature in the dashboard or submit your request through our community forum.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <p className="text-primary text-xs font-semibold uppercase tracking-widest text-center mb-2">
          Support
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-muted text-center mb-14 max-w-md mx-auto">
          Find answers to the most common questions about AppPoint.
        </p>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`border rounded-xl transition-colors ${
                  isOpen ? "border-primary/50 bg-card" : "border-border bg-card/50"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center gap-3 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <HelpCircle
                    size={18}
                    className={`flex-shrink-0 transition-colors ${
                      isOpen ? "text-primary" : "text-muted"
                    }`}
                  />
                  <span className="flex-1 text-sm font-semibold">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`flex-shrink-0 text-muted transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-4 pl-12">
                        <p className="text-muted text-sm leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted text-sm mb-3">
            Still have questions?
          </p>
          <a
            href="mailto:support@apppoint.com"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-400 transition-colors"
          >
            Contact Support
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
