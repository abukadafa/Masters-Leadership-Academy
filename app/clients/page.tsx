import React from "react";
import Link from "next/link";

export default function ClientsPage() {
  return (
    <div className="bg-paper py-16">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="max-w-[800px] mb-12">
          <span className="eyebrow text-slate mb-4">Engagements</span>
          <h1 className="text-[36px] md:text-[48px] font-serif leading-tight text-ink-text mb-6">
            Client & Partner Organisations
          </h1>
          <p className="text-[18px] text-muted-paper leading-relaxed">
            Masters Leadership Academy is committed to serving corporate entities, public offices, and civic organizations across Nigeria.
          </p>
        </div>

        <div className="border-t border-rule-paper pt-12">
          <p className="text-muted-paper text-sm mb-8 max-w-[64ch] leading-relaxed">
            No client or partner list was supplied with the official registration records. Verified corporate partner logos and case studies will be displayed here as relationships are confirmed.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[1px] bg-rule-paper border border-rule-paper mb-10">
            <div className="bg-paper-2 h-[100px] flex items-center justify-center font-mono text-[11px] text-muted-paper text-center p-4">
              Client Logo Slot
            </div>
            <div className="bg-paper-2 h-[100px] flex items-center justify-center font-mono text-[11px] text-muted-paper text-center p-4">
              Client Logo Slot
            </div>
            <div className="bg-paper-2 h-[100px] flex items-center justify-center font-mono text-[11px] text-muted-paper text-center p-4">
              Partner Logo Slot
            </div>
            <div className="bg-paper-2 h-[100px] flex items-center justify-center font-mono text-[11px] text-muted-paper text-center p-4">
              Partner Logo Slot
            </div>
            <div className="bg-paper-2 h-[100px] flex items-center justify-center font-mono text-[11px] text-muted-paper text-center p-4">
              Client Logo Slot
            </div>
          </div>

          <div className="text-center md:text-left">
            <Link href="/contact" className="btn btn-copper">
              Become a Client Organisation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
