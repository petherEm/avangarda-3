"use client";

import { useEffect, useRef, useState } from "react";
import HeroLoading from "./loading";

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Handle video readiness
    const handleCanPlay = () => {
      setVideoLoaded(true);
    };

    // Add event listeners
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
      // Clean up event listeners
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, []);

  return (
    <>
      {!videoLoaded && (
        <div className="absolute inset-0 z-10">
          <HeroLoading />
        </div>
      )}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          opacity: videoLoaded ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
        preload="auto"
      >
        <source
          src="https://moviestorage.fra1.cdn.digitaloceanspaces.com/wedding.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}
