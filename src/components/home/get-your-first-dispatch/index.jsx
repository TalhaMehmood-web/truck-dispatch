"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone } from "lucide-react"; // install via `npm install lucide-react`
import { contactInfo } from "@/constants/app";
import Banner from "@/assets/banner.jpg";
import ContentWrapper from "@/components/shared/content-wrapper";
const GetYourFirstDispatch = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full h-52 sm:h-64 md:h-72 lg:h-80 my-20"
    >
      {/* Background Image */}
      <Image src={Banner} alt="banner" fill className="object-cover" priority />

      {/* Overlay Content */}

      <div className="absolute inset-0 flex items-center  px-4 sm:px-8 md:px-16 text-white bg-black/30">
        {/* Left Text */}
        <ContentWrapper className="flex items-center gap-10 flex-wrap justify-between">
          <div className="flex flex-col gap-4">
            <h2 className="text-lg sm:text-xl md:text-4xl font-bold drop-shadow">
              Get Your First Dispatch Now
            </h2>
            <h2 className="text-lg sm:text-xl ">
              Give us a call for safe and secure dispatch.
            </h2>
          </div>
          {/* Right Text with Phone Icon */}
          <div className="flex items-center gap-2 text-sm sm:text-base md:text-lg font-medium drop-shadow">
            <Phone className="size-5 sm:size-6 md:size-7 lg:size-10 text-white" />
            <span className="text-lg sm:text-xl md:text-4xl">
              {contactInfo.conatctNumber}
            </span>
          </div>
        </ContentWrapper>
      </div>
    </motion.div>
  );
};

export default GetYourFirstDispatch;
