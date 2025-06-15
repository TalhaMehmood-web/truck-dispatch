// components/VideoPlayer.tsx
"use client";
import React from "react";

const VideoPlayer = () => {
  return (
    <div className="w-full h-full ">
      <video
        src="/assets/video.mp4"
        loop
        controls
        width="100%"
        height="100%"
        autoPlay
      />
    </div>
  );
};

export default VideoPlayer;
