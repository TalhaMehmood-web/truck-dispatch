"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const TruckCard = ({ image, title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 transition-all duration-300"
    >
      <div onClick={() => setOpen(!open)} className="cursor-pointer">
        <Image
          src={image}
          alt={title}
          width={600}
          height={300}
          className="w-full h-72 object-cover"
        />
        <div className="p-4 flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        transition={{ duration: 0.3 }}
        className="px-4 pb-4 text-gray-600 text-sm"
      >
        {description}
      </motion.div>
    </motion.div>
  );
};

export default TruckCard;
