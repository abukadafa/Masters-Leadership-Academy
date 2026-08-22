import React from "react";
import VideoPlayer from "@/components/VideoPlayer";
import CmsGridSlot from "@/components/CmsGridSlot";
import PageHero from "@/components/PageHero";
import SectionTabs from "@/components/SectionTabs";

function VideoTab() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8">
      <div>
        <h2 className="text-[22px] font-serif text-ink-text mb-4">Featured Video</h2>
        <VideoPlayer />
      </div>
      <div>
        <h2 className="text-[22px] font-serif text-ink-text mb-4">More Footage</h2>
        <div className="flex flex-col gap-6">
          <CmsGridSlot label="No additional Academy video has been uploaded yet." className="min-h-[180px]" />
          <CmsGridSlot label="No conference session recording has been supplied yet." className="min-h-[180px]" />
        </div>
      </div>
    </div>
  );
}

function AudioTab() {
  return (
    <div>
      <p className="text-muted-paper text-[14px] mb-6 max-w-[64ch] leading-relaxed">
        Audio recordings from seminars, keynote addresses and technical briefings will be published here once supplied by the Academy.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <CmsGridSlot label="No audio recording uploaded yet." />
        <CmsGridSlot label="No audio recording uploaded yet." />
        <CmsGridSlot label="No audio recording uploaded yet." />
      </div>
    </div>
  );
}

function PodcastsTab() {
  return (
    <div>
      <p className="text-muted-paper text-[14px] mb-6 max-w-[64ch] leading-relaxed">
        No Academy podcast series has been recorded or supplied yet. Episode titles, hosts, show notes and a hosted feed link will appear here once available.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <CmsGridSlot label="Episode slot — not yet published." />
        <CmsGridSlot label="Episode slot — not yet published." />
        <CmsGridSlot label="Episode slot — not yet published." />
      </div>
    </div>
  );
}

function GalleryTab() {
  return (
    <div>
      <p className="text-muted-paper text-[14px] mb-6 max-w-[64ch] leading-relaxed">
        Seminar and conference photography from our latest sessions. Real images from Academy sessions will populate this gallery.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Real image 1 */}
        <div className="relative bg-paper-2 border border-rule-paper flex flex-col min-h-[220px] rounded-[2px] overflow-hidden group">
          <img
            src="/seminar_session.jpg"
            alt="Academy Seminar Session"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-ink/35 opacity-90 group-hover:opacity-75 transition-opacity" />
          <div className="absolute bottom-4 left-5 right-5 z-10 text-left">
            <span className="font-mono text-[10px] text-copper-light uppercase tracking-wider block mb-1">
              Seminar Session
            </span>
            <h3 className="font-serif text-[17px] text-cream-text font-medium leading-tight">
              Contemporary Leadership Models & Executive Presence
            </h3>
            <p className="text-xs text-[#AEC0BB] mt-1">Interactive workshop session covering strategic thinking and strength-based leadership.</p>
          </div>
        </div>

        {/* Real image 2 */}
        <div className="relative bg-paper-2 border border-rule-paper flex flex-col min-h-[220px] rounded-[2px] overflow-hidden group">
          <img
            src="/conference_hall.jpg"
            alt="Academy Leadership Conference"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-ink/35 opacity-90 group-hover:opacity-75 transition-opacity" />
          <div className="absolute bottom-4 left-5 right-5 z-10 text-left">
            <span className="font-mono text-[10px] text-copper-light uppercase tracking-wider block mb-1">
              Leadership Conference
            </span>
            <h3 className="font-serif text-[17px] text-cream-text font-medium leading-tight">
              Strategic Planning for Growth & Network Leadership
            </h3>
            <p className="text-xs text-[#AEC0BB] mt-1">Annual symposium featuring keynotes, panel discussions, and collaborative breakout tracks.</p>
          </div>
        </div>

        {/* Placeholder slot */}
        <CmsGridSlot label="Photo Slot — add real session photo" className="min-h-[220px]" />
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <CmsGridSlot key={i} label="Photo slot" className="min-h-[120px]" />
        ))}
      </div>
    </div>
  );
}

export default function MediaPage() {
  return (
    <div className="bg-paper py-16">
      <div className="max-w-[1200px] mx-auto px-8">
        <PageHero
          eyebrow="Media Centre"
          title="The Academy in Action"
          description="Video, audio, podcasts and photography from our training seminars, leadership conferences, and technical service projects."
        />

        <div className="border-t border-rule-paper pt-12">
          <SectionTabs
            tabs={[
              { id: "video", label: "Video", content: <VideoTab /> },
              { id: "audio", label: "Audio", content: <AudioTab /> },
              { id: "podcasts", label: "Podcasts", content: <PodcastsTab /> },
              { id: "gallery", label: "Gallery", content: <GalleryTab /> },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
