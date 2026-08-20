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
              <div className="bg-paper-2 border border-rule-paper flex flex-col items-center justify-center text-center p-8 gap-3 min-h-[160px] rounded-[2px]">
                <div className="w-[36px] h-[36px] border border-slate rounded-full flex items-center justify-center text-slate text-[15px]">
                  ▤
                </div>
                <div>
                  <span className="font-mono text-[11px] text-muted-paper uppercase tracking-[0.05em] block mb-1">
                    Photo Slot 01 — Empty
                  </span>
                  <p className="text-xs text-muted-paper">Upload image from actual events</p>
                </div>
              </div>
              <div className="bg-paper-2 border border-rule-paper flex flex-col items-center justify-center text-center p-8 gap-3 min-h-[160px] rounded-[2px]">
                <div className="w-[36px] h-[36px] border border-slate rounded-full flex items-center justify-center text-slate text-[15px]">
                  ▤
                </div>
                <div>
                  <span className="font-mono text-[11px] text-muted-paper uppercase tracking-[0.05em] block mb-1">
                    Photo Slot 02 — Empty
                  </span>
                  <p className="text-xs text-muted-paper">Upload image from actual events</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
