// components/HowWeAssistSection.jsx
"use client";
import { motion } from "framer-motion";
import ContentWrapper from "../../shared/content-wrapper";
import SectionTitle from "@/components/shared/section-title";

export default function HowWeAssistSection() {
  return (
    <ContentWrapper>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className=" my-12 
                 
                 overflow-y-auto 
                 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
      >
        <SectionTitle className="mb-16" text="How We Assist ?" />

        <p className="mb-4 text-[#7799BF] text-base  leading-relaxed">
          We’re an industry leader in dispatch service. We are an independent
          truck dispatch company. We help our carriers move more freight safely
          and cost-effectively every day! In addition, we bring a great deal
          more to the table than just dispatching. We work with you, as your
          partner, to provide the tools you need to keep your trucks loaded and
          profitable.
        </p>
        <p className="text-base text-[#7799BF] leading-relaxed">
          Our service allows you to focus on your business. A dedicated and
          independent truck dispatcher is assigned to every Company, becoming a
          single point of contact. Your dispatcher knows your transportation
          business intimately and always looks out for your business’s best
          interest. There is No Forced Dispatch at all.
        </p>
      </motion.section>
    </ContentWrapper>
  );
}
