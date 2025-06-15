import React from "react";
import DispatchServices from "./dispatcher";
import VideoPlayer from "./video-player";
import ContentWrapper from "@/components/shared/content-wrapper";
import { appName } from "@/constants/app";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video as background */}
      <VideoPlayer />

      {/* Overlay Content */}

      <div className="absolute inset-0 z-10 flex items-center justify-between px-10 py-20 text-white bg-black/40">
        {/* Left Side Text */}
        <ContentWrapper className=" flex items-center justify-between">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{appName}</h1>
            <p className="text-xl font-medium">
              We Offer the Best Dispatch Services all Over US.
            </p>
          </div>

          {/* Right Side Dispatcher */}
          <div className="w-[90%] max-w-sm">
            <DispatchServices />
          </div>
        </ContentWrapper>
      </div>
    </div>
  );
};

export default HeroSection;
