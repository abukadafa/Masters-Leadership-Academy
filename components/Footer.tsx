import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-[#9AACA6] py-[70px] border-t border-rule mt-auto">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-[50px] border-b border-rule">
          <div className="foot-brand lg:col-span-1">
            <span className="brand-name font-serif text-cream-text text-[16px] font-semibold tracking-[0.02em] uppercase">
              Masters Leadership Academy
            </span>
            <p className="text-[13px] mt-[16px] max-w-[32ch] leading-[1.6]">
              A registered Business Name organising seminars, symposiums, conferences and technical services from Port Harcourt, Rivers State, Nigeria.
            </p>
          </div>
          
          <div className="foot-col">
            <h5 className="text-[12px] text-copper-light uppercase tracking-[0.1em] font-semibold mb-[16px]">
              Explore
            </h5>
            <Link href="/about" className="block text-[13px] mb-[10px] hover:text-cream-text">
              About
            </Link>
            <Link href="/services" className="block text-[13px] mb-[10px] hover:text-cream-text">
              Services
            </Link>
            <Link href="/programmes" className="block text-[13px] mb-[10px] hover:text-cream-text">
              Programmes
            </Link>
            <Link href="/events" className="block text-[13px] mb-[10px] hover:text-cream-text">
              Events
            </Link>
          </div>

          <div className="foot-col">
            <h5 className="text-[12px] text-copper-light uppercase tracking-[0.1em] font-semibold mb-[16px]">
              Media
            </h5>
            <Link href="/media" className="block text-[13px] mb-[10px] hover:text-cream-text">
              Video
            </Link>
            <Link href="/media" className="block text-[13px] mb-[10px] hover:text-cream-text">
              Gallery
            </Link>
            <Link href="/" className="block text-[13px] mb-[10px] hover:text-cream-text">
              Insights
            </Link>
          </div>

          <div className="foot-col">
            <h5 className="text-[12px] text-copper-light uppercase tracking-[0.1em] font-semibold mb-[16px]">
              Company
            </h5>
            <Link href="/about" className="block text-[13px] mb-[10px] hover:text-cream-text">
              Leadership
            </Link>
            <Link href="/clients" className="block text-[13px] mb-[10px] hover:text-cream-text">
              Clients
            </Link>
            <Link href="/contact" className="block text-[13px] mb-[10px] hover:text-cream-text">
              Contact
            </Link>
          </div>

          <div className="foot-col">
            <h5 className="text-[12px] text-copper-light uppercase tracking-[0.1em] font-semibold mb-[16px]">
              Registered Address
            </h5>
            <Link href="/contact" className="block text-[13px] mb-[10px] hover:text-cream-text leading-[1.6]">
              Plot 4Y2K Crescent, off Tony Okocha Road, New Rumuigbo, Port Harcourt, Rivers State
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-[14px] pt-[26px] text-[12px]">
          <span className="mono text-[11px] tracking-[0.02em]">
            BN 2357164 · CRBN 635769 · CAC Registered Business Name
          </span>
          <div className="flex gap-[20px] flex-wrap">
            <Link href="#" className="hover:text-cream-text">Privacy Policy</Link>
            <Link href="#" className="hover:text-cream-text">Terms of Use</Link>
            <Link href="#" className="hover:text-cream-text">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
