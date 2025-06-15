"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AlignRight, X } from "lucide-react";
import BookmeDialog from "../dialogs/bookme-dialog";
import { appName } from "@/constants/app";

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

const ResponsiveNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openBookmeDialog, setOpenBookmeDialog] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const containerVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
    },
    open: {
      opacity: 1,
      y: 0,
    },
  };

  const containerTransition = {
    closed: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
    open: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: -20,
    },
    open: {
      opacity: 1,
      y: 0,
    },
  };

  const itemTransition = {
    duration: 0.3,
    ease: [0.4, 0, 0.2, 1],
  };

  const buttonVariants = {
    closed: {
      opacity: 0,
      scale: 0.8,
    },
    open: {
      opacity: 1,
      scale: 1,
    },
  };

  const buttonTransition = {
    duration: 0.3,
    ease: [0.4, 0, 0.2, 1],
    delay: 0.2,
  };

  return (
    <>
      {/* Trigger Button */}
      <div className="lg:hidden fixed top-5 right-7 z-50">
        <motion.button
          onClick={toggleMenu}
          className="text-white bg-slate-900/80 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg border border-white/20"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <X size={20} /> : <AlignRight size={20} />}
          </motion.div>
        </motion.button>
      </div>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>

      {/* Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={containerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={containerTransition[isOpen ? "open" : "closed"]}
            className="lg:hidden fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-lg z-40 shadow-2xl border-b border-white/10"
          >
            <div className="px-6 py-8 max-w-md mx-auto">
              {/* Header */}
              <motion.div
                variants={itemVariants}
                transition={itemTransition}
                className="mb-8 text-center"
              >
                <h2 className="text-2xl font-bold text-white mb-2">
                  {appName}
                </h2>
                <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
              </motion.div>

              {/* Navigation Links */}
              <motion.div
                variants={itemVariants}
                transition={itemTransition}
                className="space-y-4 mb-8"
              >
                {navLinks.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    transition={itemTransition}
                    whileHover={{ x: 10 }}
                  >
                    <a
                      href={item.link}
                      onClick={handleLinkClick}
                      className="block text-white/90 hover:text-white text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-200 border-l-2 border-transparent hover:border-blue-400"
                    >
                      {item.title}
                    </a>
                  </motion.div>
                ))}
              </motion.div>

              {/* Book Now Button */}
              <motion.div
                variants={buttonVariants}
                transition={buttonTransition}
                className="text-center pt-4 border-t border-white/10"
              >
                <Button
                  onClick={() => {
                    setOpenBookmeDialog(true);
                    setIsOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border border-white/20 rounded-lg py-3 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Book Now
                  </motion.span>
                </Button>
              </motion.div>

              {/* Close hint */}
              <motion.p
                variants={itemVariants}
                transition={itemTransition}
                className="text-center text-white/60 text-sm mt-6"
              >
                Tap outside to close
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BookMe Dialog */}
      {openBookmeDialog && (
        <BookmeDialog
          open={openBookmeDialog}
          onOpenChange={setOpenBookmeDialog}
        />
      )}
    </>
  );
};

export default ResponsiveNavbar;
