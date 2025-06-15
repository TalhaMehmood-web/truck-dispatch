"use client";
import React from "react";

const VideoPlayer = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-0">
      <video
        src="/assets/video.mp4"
        className="w-full h-full object-cover"
        loop
        autoPlay
        muted
        playsInline
      />
    </div>
  );
};

export default VideoPlayer;
