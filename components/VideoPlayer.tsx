"use client";

import React, { useState, useRef } from "react";

interface VideoPlayerProps {
  src?: string;
  poster?: string;
}

export default function VideoPlayer({ src: initialSrc, poster = "" }: VideoPlayerProps) {
  const [src, setSrc] = useState(initialSrc || "");
  const [isPlaying, setIsPlaying] = useState(false);
  const [demoUrl, setDemoUrl] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (!src) {
      alert("No video source loaded. Please provide a valid src URL to play.");
      return;
    }
    
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.error("Video play failed:", err);
          alert("Could not play video. Please check if the URL is valid and accessible.");
        });
      }
    }
  };

  const handleApplyDemo = (e: React.FormEvent) => {
    e.preventDefault();
    if (demoUrl.trim()) {
      setSrc(demoUrl.trim());
      setIsPlaying(false);
      if (videoRef.current) {
        videoRef.current.load();
      }
    }
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="relative w-full aspect-video bg-ink border border-rule overflow-hidden flex items-center justify-center group">
        {src ? (
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            controls={isPlaying}
            className="absolute inset-0 w-full h-full object-cover"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
          />
        ) : null}

        {/* Overlay showing Play button when not playing or when no source is loaded */}
        {(!src || !isPlaying) && (
          <button
            onClick={handlePlayClick}
            aria-label="Play video"
            className="w-16 h-16 rounded-full border border-copper-light flex items-center justify-center text-copper-light text-xl bg-ink/80 hover:bg-copper hover:text-ink transition-all cursor-pointer z-10 focus:outline-none focus:ring-2 focus:ring-copper-light focus:ring-offset-2"
          >
            ▶
          </button>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-ink/90 to-transparent text-[#B9C6C2] font-mono text-[11px] uppercase tracking-[0.06em] z-10 flex justify-between items-center pointer-events-none">
          <span>{src ? "Academy in Action" : "Real video placeholder — add your own footage source"}</span>
        </div>
      </div>

      {/* Developer tool to paste a demo video link (e.g. from public test sources) */}
      {!initialSrc && (
        <form onSubmit={handleApplyDemo} className="flex gap-2 p-3 bg-ink-2/30 border border-rule-paper/20 rounded-[3px]">
          <input
            type="text"
            placeholder="[DEMO] Paste mp4 video URL to test player..."
            value={demoUrl}
            onChange={(e) => setDemoUrl(e.target.value)}
            className="flex-1 bg-paper/10 border border-rule px-3 py-1.5 text-xs text-cream-text placeholder:text-[#9AACA6]/50 rounded-[2px] focus:outline-none focus:border-copper"
          />
          <button
            type="submit"
            className="px-3 py-1.5 text-xs font-semibold bg-copper hover:bg-copper-light text-[#1B0F05] rounded-[2px] transition-all whitespace-nowrap cursor-pointer"
          >
            Load Video
          </button>
        </form>
      )}
    </div>
  );
}
