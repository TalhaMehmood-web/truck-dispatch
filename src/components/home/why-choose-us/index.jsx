"use client";

import { motion } from "framer-motion";
import { CheckCircle, FileText, DollarSign, Clock, User } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: <CheckCircle className="text-green-600 w-6 h-6" />,
    title: "No Forced Dispatch",
    desc: "Your Truck, Your Choice",
  },
  {
    icon: <Clock className="text-blue-500 w-6 h-6" />,
    title: "24/7 Load Hunting",
    desc: "Your dispatcher works nights/weekends so you don’t have to",
  },
  {
    icon: <User className="text-orange-500 w-6 h-6" />,
    title: "Dedicated Dispatcher",
    desc: "One point of contact who knows your preferences",
  },
  {
    icon: <FileText className="text-purple-500 w-6 h-6" />,
    title: "Paperwork Management",
    desc: "We handle billing, PODs, and compliance. Less hassle for you",
  },
  {
    icon: <DollarSign className="text-yellow-600 w-6 h-6" />,
    title: "Rate Negotiation",
    desc: "We secure higher rates per mile for you",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="bg-white py-20 px-4 sm:px-6 lg:px-20"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Why Choose Us?
          </h2>
          <ul className="space-y-6">
            {features.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div>{item.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>

          {/* Trust Signals */}
          <div className="mt-10 flex items-center gap-4">
            <p className="text-gray-600 text-sm">
              Proudly Serving Truckers Since{" "}
              <span className="font-semibold">2018</span>
            </p>
          </div>
        </motion.div>

        {/* Right Side Image (optional for visual balance) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="https://www.elastoproxy.com/wp-content/uploads/2021/04/flatbed-trucks-1.png"
            alt="Truck dispatcher visual"
            width={500}
            height={400}
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
