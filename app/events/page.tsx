import React from "react";
import { cookies } from "next/headers";
import EmptyState from "@/components/EmptyState";
import TimezoneSwitcher from "@/components/TimezoneSwitcher";
import { formatEventDateTime, TIMEZONE_COOKIE } from "@/lib/locale";

export default async function EventsPage() {
  const store = await cookies();
  const timezone = store.get(TIMEZONE_COOKIE)?.value || "Africa/Lagos";

  // Illustrative only — no event has actually been scheduled yet (see EmptyState below).
  // This demonstrates the timezone-aware formatting the roadmap calls for.
  const exampleIso = "2027-03-15T09:00:00Z";

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

        <div className="border-t border-rule pt-12 flex flex-col gap-10">
          <div className="bg-ink-2 border border-rule p-6 rounded-[2px] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="font-mono text-[11px] text-copper-light uppercase tracking-wider block mb-1">
                Time Zone
              </span>
              <p className="text-[13px] text-[#B9C6C2] max-w-[54ch] leading-relaxed">
                Once events are scheduled, their times will display in your selected time zone. Example only:{" "}
                <strong className="text-cream-text">{formatEventDateTime(exampleIso, timezone)}</strong>
              </p>
            </div>
            <TimezoneSwitcher current={timezone} />
          </div>

          <EmptyState
            title="No events scheduled yet"
            description="Upcoming seminars, symposiums and conferences will be published here once dates are confirmed. Online and hybrid delivery options for international participants will be indicated per event."
            theme="dark"
          />
        </div>
      </div>
    </div>
  );
}
