"use client";

import { FaXTwitter, FaGithub, FaDiscord, FaInstagram } from "react-icons/fa6";

const produkLinks = [
  { label: "Features", href: "#features" },
  { label: "Install", href: "#install" },
  { label: "Screenshots", href: "#screenshots" },
];

const dukunganLinks = [
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

const komunitasLinks = [
  { label: "GitHub", href: "#" },
  { label: "Discord", href: "#" },
  { label: "Twitter", href: "#" },
];

const socials = [
  { icon: FaXTwitter, href: "#", label: "Twitter/X" },
  { icon: FaGithub, href: "#", label: "GitHub" },
  { icon: FaDiscord, href: "#", label: "Discord" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
];

function LinkColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-sm font-semibold text-foreground mb-4">{title}</p>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative px-6 pt-16 pb-8">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      {/* Gradient divider */}
      <div className="relative max-w-6xl mx-auto mb-12 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="text-xl font-extrabold gradient-text mb-2">
              AppPoint
            </p>
            <p className="text-muted text-sm">
              One app, all platforms. Available on Android, Windows, macOS,
              Linux, and the Web.
            </p>
          </div>

          {/* Link columns */}
          <LinkColumn title="Produk" links={produkLinks} />
          <LinkColumn title="Dukungan" links={dukunganLinks} />
          <LinkColumn title="Komunitas" links={komunitasLinks} />
        </div>

        {/* Social icons + Copyright */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
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
          <p className="text-xs text-muted">
            &copy; 2024 AppPoint. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
