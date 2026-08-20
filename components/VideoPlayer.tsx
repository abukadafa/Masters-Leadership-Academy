"use client";

import React, { useState, useRef } from "react";

interface VideoPlayerProps {
  src?: string;
  poster?: string;
}

function getYouTubeEmbedUrl(url: string, autoplay = true) {
  if (!url) return null;
  let videoId = "";
  let startSeconds = 0;

  // Extract start time if present (e.g. t=51s or start=51)
  const timeMatch = url.match(/[?&]t=(\d+)s?/);
  if (timeMatch && timeMatch[1]) {
    startSeconds = parseInt(timeMatch[1], 10);
  }

  if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1].split(/[?#]/)[0];
  } else if (url.includes("youtube.com/watch")) {
    const urlParts = url.split("?");
    if (urlParts[1]) {
      const urlParams = new URLSearchParams(urlParts[1]);
      videoId = urlParams.get("v") || "";
    }
  } else if (url.includes("youtube.com/embed/")) {
    videoId = url.split("youtube.com/embed/")[1].split(/[?#]/)[0];
  }

  if (videoId) {
    let embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0`;
    if (autoplay) {
      embedUrl += `&autoplay=1`;
    }
    if (startSeconds > 0) {
      embedUrl += `&start=${startSeconds}`;
    }
    return embedUrl;
  }
  return null;
}

export default function VideoPlayer({
  src: initialSrc = "https://www.youtube.com/watch?v=WXd_hJhtRyw&t=51s",
  poster = "",
}: VideoPlayerProps) {
  const [src, setSrc] = useState(initialSrc);
  const [isPlaying, setIsPlaying] = useState(false);
  const [demoUrl, setDemoUrl] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);

  const isYouTube = src.includes("youtube.com") || src.includes("youtu.be");
  const ytEmbedUrl = isYouTube ? getYouTubeEmbedUrl(src, isPlaying) : null;

  const handlePlayClick = () => {
    setIsPlaying(true);
    if (!isYouTube && videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.error("Video play failed:", err);
        alert("Could not play video. Please check if the URL is valid and accessible.");
      });
    }
  };

  const handleApplyDemo = (e: React.FormEvent) => {
    e.preventDefault();
    if (demoUrl.trim()) {
      setSrc(demoUrl.trim());
      setIsPlaying(false);
    }
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="relative w-full aspect-video bg-ink border border-rule overflow-hidden flex items-center justify-center group rounded-[2px]">
        {isPlaying && ytEmbedUrl ? (
          <iframe
            src={ytEmbedUrl}
            title="Academy Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : isPlaying && !isYouTube ? (
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            controls
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          /* Placeholder / Poster State */
          <>
            <div className="absolute inset-0 bg-[#0A1819]/45 backdrop-blur-[1px] z-0" />
            
            {isYouTube && (
              <div className="absolute inset-0 flex flex-col justify-between p-6 z-10 pointer-events-none">
                <span className="font-mono text-[10px] text-copper-light uppercase tracking-wider bg-ink/75 px-2.5 py-1.5 self-start rounded-[2px] border border-rule">
                  Academy Feature Video
                </span>
              </div>
            )}

            <button
              onClick={handlePlayClick}
              aria-label="Play video"
              className="w-16 h-16 rounded-full border border-copper-light flex items-center justify-center text-copper-light text-xl bg-ink/80 hover:bg-copper hover:text-ink transition-all cursor-pointer z-10 focus:outline-none focus:ring-2 focus:ring-copper-light focus:ring-offset-2"
            >
              ▶
            </button>
          </>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-ink/90 to-transparent text-[#B9C6C2] font-mono text-[11px] uppercase tracking-[0.06em] z-10 flex justify-between items-center pointer-events-none">
          <span>{src ? "Academy in Action" : "Real video placeholder — add your own footage source"}</span>
        </div>
      </div>

      {/* Developer tool to change source */}
      <form onSubmit={handleApplyDemo} className="flex gap-2 p-3 bg-ink-2/30 border border-rule-paper/20 rounded-[3px]">
        <input
          type="text"
          placeholder="Change video URL (YouTube or MP4)..."
          value={demoUrl}
          onChange={(e) => setDemoUrl(e.target.value)}
          className="flex-1 bg-paper/10 border border-rule px-3 py-1.5 text-xs text-cream-text placeholder:text-[#9AACA6]/50 rounded-[2px] focus:outline-none focus:border-copper"
        />
        <button
          type="submit"
          className="px-3 py-1.5 text-xs font-semibold bg-copper hover:bg-copper-light text-[#1B0F05] rounded-[2px] transition-all whitespace-nowrap cursor-pointer"
        >
          Update Source
        </button>
      </form>
    </div>
  );
}
