import FreeTrialOffer from "@/components/home/free-trial-offer";
import GetYourFirstDispatch from "@/components/home/get-your-first-dispatch";
import HeroSection from "@/components/home/hero-section";
import HowItWorks from "@/components/home/how-it-works";
import HowWeAssistSection from "@/components/home/howWeAssistSection";
import TestimonialSlider from "@/components/home/testimonial-section";
import TruckGrid from "@/components/home/trucks-services";
import WhyChooseUs from "@/components/home/why-choose-us";
import BottomNavbar from "@/components/shared/navbar/bottom-nav";
import ResponsiveNavbar from "@/components/shared/navbar/responsive-navbar";
import TopNavbar from "@/components/shared/navbar/top-nav";
import Spacer from "@/components/shared/spacer";
import { AlignRight } from "lucide-react";
import React from "react";

const HomePageView = () => {
  return (
    <div className="relative">
      <TopNavbar />
      <div className=" hidden lg:block  lg:absolute top-10 w-full transition-all duration-300 z-50">
        <BottomNavbar />
      </div>
      <ResponsiveNavbar />
      <div>
        <HeroSection />
      </div>
      <HowWeAssistSection />
      <GetYourFirstDispatch />
      <TruckGrid />

      <FreeTrialOffer />

      <WhyChooseUs />
      <HowItWorks />
      <TestimonialSlider />
    </div>
  );
};

export default HomePageView;
