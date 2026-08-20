import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-[#9AACA6] py-[70px] border-t border-rule mt-auto">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-[50px] border-b border-rule">
          <div className="foot-brand lg:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-3">
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
              <span className="brand-name font-serif text-cream-text text-[16px] font-semibold tracking-[0.02em] uppercase leading-tight">
                Masters Leadership Academy
              </span>
            </div>
            <p className="text-[13px] mt-2 max-w-[32ch] leading-[1.6]">
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
