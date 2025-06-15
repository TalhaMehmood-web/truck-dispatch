import { motion } from "framer-motion";
import HighlightedText from "./highlighted-text";
import Image from "next/image";

const TestimonialCard = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-yellow-500 rounded-3xl text-white p-6 max-w-lg mx-auto shadow-xl min-h-[400px]"
    >
      <div className="absolute top-4 left-4 text-6xl">“</div>
      <p className="text-base sm:text-lg font-light leading-relaxed mt-10 mb-6">
        <HighlightedText text={data.quote} highlights={data.highlights} />
      </p>
      <div className="flex items-center gap-4 mt-4">
        <Image
          src={data.image}
          alt={data.name}
          width={50}
          height={50}
          className="rounded-full object-cover size-24 border-2 border-white"
        />
        <div>
          <h4 className="font-semibold text-lg">{data.name}</h4>
          <p className="text-sm text-white/80">{data.title}</p>
        </div>
      </div>
    </motion.div>
  );
};
export default TestimonialCard;
