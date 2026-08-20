"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/programmes", label: "Programmes" },
    { href: "/events", label: "Events" },
    { href: "/media", label: "Media" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-ink/94 backdrop-blur-md border-b border-rule">
      <nav className="flex items-center justify-between px-8 py-[18px] max-w-[1200px] mx-auto relative">
        <Link href="/" className="brand flex flex-col text-cream-text">
          <span className="brand-name font-serif text-[16px] font-semibold tracking-[0.02em] uppercase">
            Masters Leadership Academy
          </span>
          <span className="brand-sub font-mono text-[10px] tracking-[0.1em] text-copper-light uppercase">
            Seminars · Conferences · Technical Services
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[14px] transition-all hover:opacity-100 ${
                  isActive ? "text-copper-light font-medium opacity-100" : "text-cream-text opacity-85"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden sm:inline-flex btn btn-outline-dark">
            Enquire Now
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden bg-none border-none text-cream-text text-2xl cursor-pointer p-1"
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile drawer */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-ink border-b border-rule flex flex-col px-8 py-5 gap-[18px] z-50">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-[14px] transition-all ${
                    isActive ? "text-copper-light font-medium" : "text-cream-text opacity-85"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="btn btn-outline-dark text-center w-full justify-center mt-2"
            >
              Enquire Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
