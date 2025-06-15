"use client";
import React, { useState } from "react";
import ContentWrapper from "../content-wrapper";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BookmeDialog from "../dialogs/bookme-dialog";

const navLinks = [
  {
    title: "Home",
    link: "#home",
  },
  {
    title: "Why Choose Us",
    link: "#why-choose-us",
  },
  {
    title: "Trucks",
    link: "#trucks",
  },
  {
    title: "Contact Us",
    link: "#footer",
  },
  {
    title: "Testimonials",
    link: "#testimonials",
  },
];

const BottomNavbar = () => {
  const [openBookmeDialog, setOpenBookmeDialog] = useState(false);
  return (
    <React.Fragment>
      <div className="bg-slate-900/50 text-white">
        <ContentWrapper className="w-full h-20 flex items-center ">
          <div className="w-full flex items-center justify-between gap-4 ">
            <div className="flex-[0.4]"></div>
            <div className="flex items-center gap-2 flex-1 justify-around">
              {navLinks?.map((item, index) => (
                <Link key={index} href={item.link}>
                  {item.title}
                </Link>
              ))}
            </div>
            <div>
              <Button
                onClick={() => setOpenBookmeDialog(true)}
                className="cursor-pointer bg-transparent border border-white rounded-sm"
              >
                Book Now
              </Button>
            </div>
          </div>
        </ContentWrapper>
      </div>
      {openBookmeDialog && (
        <BookmeDialog
          open={openBookmeDialog}
          onOpenChange={setOpenBookmeDialog}
        />
      )}
    </React.Fragment>
  );
};

export default BottomNavbar;
