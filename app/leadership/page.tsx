import React from "react";
import PageHero from "@/components/PageHero";

const roles = [
  "Executive Director",
  "Head of Programmes",
  "Lead Facilitator, Seminars & Symposiums",
  "Lead Facilitator, Conferences",
  "Technical Services Advisor",
  "Facilitator",
];

export const metadata = {
  title: "Leadership & Faculty",
  description: "Meet the leadership and facilitators of Masters Leadership Academy.",
};

export default function LeadershipPage() {
  return (
    <div className="bg-paper py-16">
      <div className="max-w-[1200px] mx-auto px-8">
        <PageHero
          eyebrow="People"
          title="Leadership & Faculty"
          description="The registration certificate does not declare director or facilitator names. This directory is ready for authentic profiles as they are supplied."
        />

        <div className="border-t border-rule-paper pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {roles.map((role) => (
              <div key={role} className="bg-paper-2 border border-rule-paper/40 p-6 rounded-[2px]">
                <div className="w-14 h-14 rounded-full bg-rule-paper/50 border border-dashed border-rule-paper mb-4" />
                <div className="text-[11px] text-slate tracking-[0.1em] uppercase mb-2">{role}</div>
                <div className="font-serif text-[17px] text-ink-text font-semibold mb-1">[CMS Placeholder]</div>
                <div className="text-[12px] text-muted-paper leading-relaxed">
                  Add name, photograph, biography, credentials and track record.
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
