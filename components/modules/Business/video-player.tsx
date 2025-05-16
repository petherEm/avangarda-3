"use client";

import { useEffect, useRef } from "react";

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // Start loading the video
      videoRef.current.load();
      // Attempt to play and handle any autoplay restrictions
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 h-full w-full object-cover"
    >
      <source
        src="https://moviestorage.fra1.cdn.digitaloceanspaces.com/business.mp4"
        type="video/mp4"
      />
    </video>
  );
}
