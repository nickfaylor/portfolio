// Figma: Navbar — floating pill-shaped container overlaid on hero
// Left: "Download Resume" pill button
// Right: Home, About, Projects, Contact text links
// Full width, dark glass background, large border-radius

"use client";

import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-6 left-0 right-0 z-50 px-5">
      <div
        className="glass-card-blue flex items-center justify-between rounded-[50px] px-4 py-3 md:px-6 max-w-[1440px] mx-auto"
      >
        {/* Download Resume button */}
        <a
          href="/resume.pdf"
          download
          className="btn-blue font-medium transition-opacity hover:opacity-85 rounded-[50px] px-5 py-2 text-[14px] md:text-[15px]"
          style={{ lineHeight: "1.4em", textDecoration: "none" }}
        >
          Download Resume
        </a>

        {/* Nav links — desktop only */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white hover:text-accent-secondary transition-colors text-[16px]"
              style={{ lineHeight: "1.5em", textDecoration: "none" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Hamburger button — mobile only */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 glass-card-blue rounded-2xl px-5 py-4 flex flex-col gap-4 max-w-[1440px] mx-auto">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-accent-secondary transition-colors text-[16px]"
              style={{ textDecoration: "none" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
