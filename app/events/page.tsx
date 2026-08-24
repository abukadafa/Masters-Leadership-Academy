import React from "react";
import { cookies } from "next/headers";
import EmptyState from "@/components/EmptyState";
import TimezoneSwitcher from "@/components/TimezoneSwitcher";
import { formatEventDateTime, TIMEZONE_COOKIE } from "@/lib/locale";

export const metadata = {
  title: "Events",
  description: "Upcoming seminars, symposiums, and conferences from Masters Leadership Academy.",
};

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

          <div>
            <h2 className="text-[22px] font-serif text-cream-text mb-6 border-b border-rule pb-2">Upcoming Events</h2>
            <EmptyState
              title="No upcoming events scheduled yet"
              description="Upcoming seminars, symposiums and conferences will be published here once dates are confirmed. Online and hybrid delivery options for international participants will be indicated per event."
              theme="dark"
            />
          </div>

          <div className="mt-6">
            <h2 className="text-[22px] font-serif text-cream-text mb-6 border-b border-rule pb-2">Past Events & Sessions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  id: "ldp-1",
                  title: "Leadership Decision Protocol — Session 1",
                  date: "2018-04-03T09:00:00Z",
                  description: "Inaugural session introducing diagnostic frameworks, root cause analysis, and strategic communication.",
                  url: "https://www.facebook.com/events/1476771059118309/?event_time_id=1476771079118307",
                },
                {
                  id: "ldp-2",
                  title: "Leadership Decision Protocol — Session 2",
                  date: "2018-04-10T09:00:00Z",
                  description: "Deep dive into scenario planning, contingency risk mapping, and decision thresholds.",
                  url: "https://www.facebook.com/events/1476771059118309/?event_time_id=1476771065784975",
                },
                {
                  id: "ldp-3",
                  title: "Leadership Decision Protocol — Session 3",
                  date: "2018-04-17T09:00:00Z",
                  description: "Case study analyses covering organizational communication protocols and strategic escalation paths.",
                  url: "https://www.facebook.com/events/1476771059118309/?event_time_id=1476771072451641",
                },
                {
                  id: "ldp-4",
                  title: "Leadership Decision Protocol — Session 4",
                  date: "2018-04-24T09:00:00Z",
                  description: "Interactive simulation workshop focusing on crisis management and cross-functional team coordination.",
                  url: "https://www.facebook.com/events/1476771059118309/?event_time_id=1476771075784974",
                },
                {
                  id: "ldp-5",
                  title: "Leadership Decision Protocol — Session 5",
                  date: "2018-05-01T09:00:00Z",
                  description: "Evaluation frameworks, executive reporting, and post-decision impact auditing.",
                  url: "https://www.facebook.com/events/1476771059118309/?event_time_id=1476771069118308",
                },
                {
                  id: "ldp-all",
                  title: "Leadership Decision Protocol — Seminar Series",
                  date: "2018-05-08T09:00:00Z",
                  description: "Full event listing and summary resources from the executive training programme.",
                  url: "https://www.facebook.com/events/1476771059118309/",
                }
              ].map((event) => (
                <div key={event.id} className="bg-ink-2 border border-rule p-6 rounded-[2px] flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[10px] text-copper-light uppercase tracking-wider block mb-2">
                      {formatEventDateTime(event.date, timezone)}
                    </span>
                    <h3 className="font-serif text-[18px] text-cream-text font-medium leading-tight mb-2">
                      {event.title}
                    </h3>
                    <p className="text-[13px] text-[#AEC0BB] leading-relaxed mb-4">
                      {event.description}
                    </p>
                  </div>
                  <a
                    href={event.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12px] text-copper hover:underline font-semibold flex items-center gap-1.5 self-start"
                  >
                    View details on Facebook ↗
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center border-t border-rule pt-8">
            <a
              href="https://www.facebook.com/LeadMastersAcademy/events"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
              </svg>
              View All Events on Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
