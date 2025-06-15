"use client";

import { motion } from "framer-motion";
import { Truck, UserPlus, Link2 } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    icon: <UserPlus className="w-8 h-8 text-blue-600" />,
    title: "Sign Up",
    description: "Create your account in minutes. No long forms.",
  },
  {
    icon: <Link2 className="w-8 h-8 text-green-600" />,
    title: "Get Matched",
    description: "We find the perfect loads based on your preferences.",
  },
  {
    icon: <Truck className="w-8 h-8 text-yellow-600" />,
    title: "Hit the Road",
    description: "Start hauling with confidence and 24/7 support.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gradient-to-br from-white to-blue-50 py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4"
        >
          How It Works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-600 text-lg"
        >
          1️⃣ Sign Up → 2️⃣ Get Matched → 3️⃣ Hit the Road
        </motion.p>
      </div>

      {/* Steps with road map */}
      <div className="relative">
        {/* Road Line */}
        <div className="hidden sm:block absolute top-12 left-0 w-full h-1 bg-gray-300 rounded-full z-0" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg z-20">
                {step.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-800">
                {step.title}
              </h4>
              <p className="text-gray-600 text-sm max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
