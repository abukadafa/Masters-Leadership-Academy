import React from "react";
import EmptyState from "@/components/EmptyState";

export default function ProgrammesPage() {
  return (
    <div className="bg-paper py-16">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="max-w-[800px] mb-12">
          <span className="eyebrow text-slate mb-4">Academy Tracks</span>
          <h1 className="text-[36px] md:text-[48px] font-serif leading-tight text-ink-text mb-6">
            Leadership development tracks & curriculum
          </h1>
          <p className="text-[18px] text-muted-paper leading-relaxed">
            All official leadership tracks, curriculum modules, and credit hours are configured via the CMS prior to publishing.
          </p>
        </div>

        <div className="border-t border-rule-paper pt-12">
          <EmptyState
            title="No programmes published yet"
            description="Specific leadership training tracks, curricula and durations were not included on the registration certificate. Add real programme names and details here before launch."
            theme="light"
          />
        </div>
      </div>
    </div>
  );
}
