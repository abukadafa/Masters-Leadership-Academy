"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";
import type { Locale } from "@/lib/i18n/config";

export default function Header({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/about", label: dict.nav.about },
    { href: "/services", label: dict.nav.services },
    { href: "/programmes", label: dict.nav.programmes },
    { href: "/events", label: dict.nav.events },
    { href: "/media", label: dict.nav.media },
    { href: "/contact", label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 bg-ink/94 backdrop-blur-md border-b border-rule">
      <nav className="flex items-center justify-between px-8 py-[18px] max-w-[1200px] mx-auto relative">
        <Link href="/" className="brand flex items-center gap-3 text-cream-text">
          <div className="w-8 h-8 relative shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="150 50 200 150" className="w-full h-full">
              <g transform="translate(0, -10)">
                <path d="M 180,180 L 180,100 L 200,100 L 200,180 Z" fill="#D4AF37"/>
                <path d="M 200,100 L 250,150 L 235,165 L 200,130 Z" fill="#D4AF37"/>
                <path d="M 250,75 L 275,100 L 250,125 L 225,100 Z" fill="#D4AF37"/>
                <path d="M 300,100 L 250,150 L 265,165 L 300,130 Z" fill="#D4AF37"/>
                <path d="M 300,180 L 300,100 L 320,100 L 320,180 Z" fill="#D4AF37"/>
              </g>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="brand-name font-serif text-[16px] font-semibold tracking-[0.02em] uppercase leading-tight">
              Masters Leadership Academy
            </span>
            <span className="brand-sub font-mono text-[9px] tracking-[0.08em] text-copper-light uppercase mt-0.5">
              Seminars · Conferences · Technical Services
            </span>
          </div>
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

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <LanguageSwitcher current={locale} label={dict.language.switchLanguage} />
          </div>
          <Link href="/contact" className="hidden sm:inline-flex btn btn-outline-dark">
            {dict.nav.enquireNow}
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
            <div className="pt-2 border-t border-rule/50">
              <LanguageSwitcher current={locale} label={dict.language.switchLanguage} />
            </div>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="btn btn-outline-dark text-center w-full justify-center mt-2"
            >
              {dict.nav.enquireNow}
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
