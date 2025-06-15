import React from "react";
import ContentWrapper from "../content-wrapper";
import { contactInfo } from "@/constants/app";

const TopNavbar = () => {
  return (
    <div className="h-10 bg-[#333333] text-white flex justify-center items-center">
      <ContentWrapper>
        <div className="flex justify-between w-full text-xs font-semibold">
          <p>We have a 95% Successful Dispatch Rate!</p>
          <p>
            Give us a Call to Book Your Dispatch! {contactInfo.conatctNumber}
          </p>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default TopNavbar;
