import React from "react";
import DispatchServices from "./dispatcher";
import VideoPlayer from "./video-player";
import ContentWrapper from "@/components/shared/content-wrapper";
import { appName } from "@/constants/app";

const HeroSection = () => {
  return (
    <div className="relative w-full aspect-[16/9] sm:aspect-[16/7] md:aspect-[16/6] lg:aspect-video overflow-hidden">
      {/* Video as background */}
      <VideoPlayer />

      {/* Overlay Content */}

      <div className="absolute inset-0 z-10 hidden  lg:flex items-center justify-between px-10 py-40 text-white bg-black/40">
        {/* Left Side Text */}
        <ContentWrapper className=" flex items-center justify-between">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{appName}</h1>
            <p className=" font-medium">
              We are a leading independent truck dispatch company dedicated to
              helping carriers move freight safely, efficiently, and profitably.
            </p>
          </div>

          {/* Right Side Dispatcher */}
          {/* <div className="w-[90%] lg:block hidden max-w-sm">
            <DispatchServices />
          </div> */}
        </ContentWrapper>
      </div>
    </div>
  );
};

export default HeroSection;
