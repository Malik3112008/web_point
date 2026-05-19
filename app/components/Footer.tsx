"use client";

import { GitFork, Globe, MessageCircle, Mail } from "lucide-react";

const links = [
  { label: "Features", href: "#features" },
  { label: "Install", href: "#install" },
  { label: "FAQ", href: "#faq" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms", href: "#" },
];

const socials = [
  { icon: Globe, href: "#", label: "Website" },
  { icon: GitFork, href: "#", label: "GitHub" },
  { icon: MessageCircle, href: "#", label: "Discord" },
  { icon: Mail, href: "#", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="px-6 pt-16 pb-8">
      {/* Gradient divider */}
      <div className="max-w-6xl mx-auto mb-12 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-10">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="text-xl font-extrabold gradient-text mb-2">
              AppPoint
            </p>
            <p className="text-muted text-sm max-w-xs">
              One app, all platforms. Available on Android, Windows, macOS,
              Linux, and the Web.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-border-hover transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-muted border-t border-border pt-6">
          &copy; {new Date().getFullYear()} AppPoint. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
