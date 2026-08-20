import React from "react";
import VideoPlayer from "@/components/VideoPlayer";

export default function MediaPage() {
  return (
    <div className="bg-paper py-16">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="max-w-[800px] mb-12">
          <span className="eyebrow text-slate mb-4">Media Vault</span>
          <h1 className="text-[36px] md:text-[48px] font-serif leading-tight text-ink-text mb-6">
            The Academy in Action
          </h1>
          <p className="text-[18px] text-muted-paper leading-relaxed">
            View actual footage and galleries from our training seminars, leadership conferences, and technical service projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 border-t border-rule-paper pt-12">
          <div>
            <h2 className="text-[22px] font-serif text-ink-text mb-4">Featured Video</h2>
            <VideoPlayer />
          </div>
          <div>
            <h2 className="text-[22px] font-serif text-ink-text mb-4">Event Photo Gallery</h2>
            <div className="flex flex-col gap-6">
              <div className="relative bg-paper-2 border border-rule-paper flex flex-col min-h-[180px] rounded-[2px] overflow-hidden group">
                <img
                  src="/seminar_session.jpg"
                  alt="Academy Seminar Session"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/35 opacity-90 group-hover:opacity-75 transition-opacity" />
                <div className="absolute bottom-4 left-5 right-5 z-10">
                  <span className="font-mono text-[10px] text-copper-light uppercase tracking-wider block mb-1">
                    Seminar Session
                  </span>
                  <h3 className="font-serif text-[17px] text-cream-text font-medium leading-tight">
                    Contemporary Leadership Models & Executive Presence
                  </h3>
                  <p className="text-xs text-[#AEC0BB] mt-1">Interactive workshop session covering strategic thinking and strength-based leadership.</p>
                </div>
              </div>
              <div className="relative bg-paper-2 border border-rule-paper flex flex-col min-h-[180px] rounded-[2px] overflow-hidden group">
                <img
                  src="/conference_hall.jpg"
                  alt="Academy Leadership Conference"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/35 opacity-90 group-hover:opacity-75 transition-opacity" />
                <div className="absolute bottom-4 left-5 right-5 z-10">
                  <span className="font-mono text-[10px] text-copper-light uppercase tracking-wider block mb-1">
                    Leadership Conference
                  </span>
                  <h3 className="font-serif text-[17px] text-cream-text font-medium leading-tight">
                    Strategic Planning for Growth & Network Leadership
                  </h3>
                  <p className="text-xs text-[#AEC0BB] mt-1">Annual symposium featuring keynotes, panel discussions, and collaborative breakout tracks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
