"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "O mnie", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Reels", href: "#reels" },
  { label: "Kontakt", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FDFCFA]/95 backdrop-blur-sm shadow-sm border-b border-[#EAE5DF]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-[#1A1714] font-semibold text-lg tracking-tight hover:text-[#B5926A] transition-colors duration-200"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Julia <span className="text-[#B5926A]">Martinez</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#1A1714]/60 hover:text-[#1A1714] transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#B5926A] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm bg-[#B5926A] text-white px-5 py-2.5 rounded-full hover:bg-[#9A7A55] transition-colors duration-200 font-medium"
          >
            Współpracuj ze mną
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Przełącz menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-5 h-0.5 bg-[#1A1714] transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-[#1A1714] transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-[#1A1714] transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-80" : "max-h-0"}`}
      >
        <nav className="bg-[#FDFCFA] border-t border-[#EAE5DF] px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#1A1714]/60 hover:text-[#B5926A] py-2.5 text-sm transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-3 text-center text-sm bg-[#B5926A] text-white px-5 py-2.5 rounded-full hover:bg-[#9A7A55] transition-colors duration-200 font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Współpracuj ze mną
          </a>
        </nav>
      </div>
    </header>
  );
}
