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
        <div className="mt-6 text-center lg:text-left">
          <a
            href="https://www.facebook.com/LeadMastersAcademy/reels/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-ink inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
            </svg>
            Watch Reels on Facebook
          </a>
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
        Seminar and conference photography from Academy sessions will appear here once supplied. No stock
        or placeholder photography is presented as genuine Academy imagery.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {Array.from({ length: 3 }).map((_, i) => (
          <CmsGridSlot key={i} label="Photo Slot — add real session photo" className="min-h-[220px]" />
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <CmsGridSlot key={i} label="Photo slot" className="min-h-[120px]" />
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://www.facebook.com/LeadMastersAcademy/photos"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-ink inline-flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
          </svg>
          View Facebook Photo Gallery
        </a>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Media",
  description: "Photos, video, and press coverage from Masters Leadership Academy events and programmes.",
};

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
