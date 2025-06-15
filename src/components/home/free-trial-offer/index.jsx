"use client";

import ContentWrapper from "@/components/shared/content-wrapper";
import { motion } from "framer-motion";
import Link from "next/link";

const FreeTrialOffer = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative bg-gradient-to-br from-indigo-100 via-white to-purple-100 px-6 py-16  text-center overflow-hidden"
    >
      <ContentWrapper>
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
          >
            Try Us Risk-Free –{" "}
            <span className="text-indigo-600">Your First Load is On Us!</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-700 mb-8"
          >
            No commitments. Only pay if you keep using us!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link href="tel:+19036770493">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300">
                Claim My Free Load
              </button>
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              First load only. No contracts. Cancel anytime.
            </p>
          </motion.div>
        </div>
      </ContentWrapper>
    </motion.section>
  );
};

export default FreeTrialOffer;
