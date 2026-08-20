import React from "react";
import EmptyState from "@/components/EmptyState";

export default function EventsPage() {
  return (
    <div className="bg-ink text-cream-text py-16">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="max-w-[800px] mb-12">
          <span className="eyebrow text-copper-light mb-4">Calendar</span>
          <h1 className="text-[36px] md:text-[48px] font-serif leading-tight text-cream-text mb-6">
            Academy Seminars & Conferences Schedule
          </h1>
          <p className="text-[18px] text-[#B9C6C2] leading-relaxed">
            Stay informed on upcoming dates for symposiums, leadership gatherings, and custom training events.
          </p>
        </div>

        <div className="border-t border-rule pt-12">
          <EmptyState
            title="No events scheduled yet"
            description="Upcoming seminars, symposiums and conferences will be published here once dates are confirmed."
            theme="dark"
          />
        </div>
      </div>
    </div>
  );
}
