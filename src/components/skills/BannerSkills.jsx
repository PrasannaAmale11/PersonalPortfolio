import React from "react";
import { motion } from "framer-motion";

const BannerSkills = ({ slides, duration = 10 }) => {
  const duplicatedSlides = [...slides, ...slides];
  return (
    <div
      className="relative h-full overflow-hidden lg:py-12 py-6 mx-auto mt-[7.5rem] mb-10 "
      style={{ width: "100%" }}
    >
      <div className=" absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-[25%] before:h-full before:bg-gradient-to-r before:from-[#fafafa] before:to-transparent before:filter  after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-[#fafafa] after:to-transparent after:filter"></div>

      <motion.div
        className="flex gap-14"
        animate={{
          x: ["-100%", "0%"],
        }}
        transition={{
          ease: "linear",
          duration,
          repeat: Infinity,
        }}
      >
        {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0  flex items-center justify-center flex-col rounded-lg"
            style={{ width: `${100 / slides.length}%` }}
          >
            <img
              src={slide.src}
              alt={slide.alt || `slide-${index}`}
              className="size-32 md:size-24 object-center object-contain cursor-pointer"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default BannerSkills;
