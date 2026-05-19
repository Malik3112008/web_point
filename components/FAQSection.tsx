"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Is AppPoint really free to use?",
    answer:
      "Yes! AppPoint is completely free to download and use on all platforms. We offer optional premium features for power users, but the core functionality is always free.",
  },
  {
    question: "Can I sync my data across devices?",
    answer:
      "Absolutely. AppPoint uses end-to-end encrypted sync across all your devices. Sign in with the same account on any platform and your data will be available instantly.",
  },
  {
    question: "What are the system requirements?",
    answer:
      "AppPoint runs on Android 8+, Windows 10+, macOS 11+, and most Linux distributions with glibc 2.28+. The web app works on all modern browsers.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is our top priority. All data is encrypted end-to-end, and we never sell or share your personal information with third parties.",
  },
  {
    question: "How do I update AppPoint?",
    answer:
      "On mobile, updates come through the app store. On desktop, AppPoint checks for updates automatically and will notify you when a new version is available.",
  },
  {
    question: "Can I use AppPoint offline?",
    answer:
      "Yes! AppPoint has a full offline mode. Your data is stored locally and will sync automatically when you reconnect to the internet.",
  },
  {
    question: "How do I report a bug or request a feature?",
    answer:
      "You can report bugs and request features through our GitHub repository, Discord community, or the in-app feedback form found in Settings.",
  },
  {
    question: "Does AppPoint support multiple languages?",
    answer:
      "Yes, AppPoint is available in over 20 languages including English, Indonesian, Japanese, Spanish, French, German, and more.",
  },
];

function AccordionItem({
  item,
  isOpen,
  toggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-semibold hover:bg-card/50 transition-colors"
      >
        <span>{item.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 ml-4"
        >
          {isOpen ? (
            <X size={18} className="text-muted" />
          ) : (
            <Plus size={18} className="text-muted" />
          )}
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p className="px-5 pb-4 text-sm text-muted leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <p className="text-primary text-xs font-semibold uppercase tracking-widest text-center mb-2">
          FAQ
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-muted text-center mb-12 max-w-md mx-auto">
          Got questions? We&apos;ve got answers. If you can&apos;t find what
          you&apos;re looking for, reach out to our support team.
        </p>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              item={faq}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
