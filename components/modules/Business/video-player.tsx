"use client";

import { useEffect, useRef, useState } from "react";
import HeroLoading from "./loading";

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Add visual loading indicator for debugging
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Handle loading progress
    const handleProgress = () => {
      if (video.buffered.length > 0) {
        const bufferedEnd = video.buffered.end(0);
        const duration = video.duration;
        const progress = Math.round((bufferedEnd / duration) * 100);
        setLoadingProgress(progress);
      }
    };

    // Handle video readiness
    const handleCanPlay = () => {
      setVideoLoaded(true);
    };

    // Add all the event listeners
    video.addEventListener("progress", handleProgress);
    video.addEventListener("canplay", handleCanPlay);
    video.load(); // Explicitly load the video

    // Attempt to play when ready
    video.addEventListener("loadedmetadata", () => {
      video.play().catch((error) => {
        console.error("Autoplay prevented:", error);
        setVideoLoaded(true); // Show video anyway if autoplay fails
      });
    });

    return () => {
      // Clean up all event listeners
      video.removeEventListener("progress", handleProgress);
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, []);

  return (
    <>
      {!videoLoaded && (
        <div className="absolute inset-0 z-10">
          <HeroLoading />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white">
              Loading video: {loadingProgress}%
            </div>
          </div>
        </div>
      )}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        style={{ opacity: videoLoaded ? 1 : 0 }}
        preload="auto"
      >
        <source
          src="https://moviestorage.fra1.cdn.digitaloceanspaces.com/business.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}
