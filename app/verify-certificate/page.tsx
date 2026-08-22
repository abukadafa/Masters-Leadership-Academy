"use client";

import React, { useState } from "react";
import PageHero from "@/components/PageHero";

export default function VerifyCertificatePage() {
  const [certNumber, setCertNumber] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setChecked(true);
  };

  return (
    <div className="bg-ink text-cream-text py-16">
      <div className="max-w-[1200px] mx-auto px-8">
        <PageHero
          theme="dark"
          eyebrow="Certificate Verification"
          title="Verify a Masters Leadership Academy certificate"
          description="Enter the certificate number printed on your certificate of completion to confirm its authenticity."
        />

        <div className="border-t border-rule pt-12 max-w-[620px]">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-6">
            <input
              type="text"
              required
              placeholder="e.g. MLA-2027-000123"
              value={certNumber}
              onChange={(e) => setCertNumber(e.target.value)}
              className="flex-1 p-3 border border-rule bg-ink-2 text-[14px] text-cream-text placeholder:text-[#9AACA6]/50 focus:outline-none focus:border-copper-light"
            />
            <button type="submit" className="btn btn-copper whitespace-nowrap cursor-pointer">
              Verify Certificate
            </button>
          </form>

          {checked && (
            <div className="border border-dashed border-copper/40 bg-ink-2/40 p-6 rounded-[2px]">
              <span className="font-mono text-[10px] text-copper-light uppercase tracking-wider block mb-2">
                [CMS Placeholder]
              </span>
              <p className="text-[14px] text-[#B9C6C2] leading-relaxed">
                No certificates have been issued yet, so &quot;{certNumber}&quot; cannot be checked against a live record.
                This page is wired to accept a certificate number — connect it to the certificate issuance system
                once participant certificates begin generating.
              </p>
            </div>
          )}

          <p className="text-[13px] text-[#8FA39E] leading-relaxed mt-8">
            Once live, each certificate will carry a unique number and a QR code that resolves directly to this
            verification result — matching participant name, programme, and completion date against Academy
            records.
          </p>
        </div>
      </div>
    </div>
  );
}
