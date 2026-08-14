import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ImageSlider({ project, reversed }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className={reversed ? "lg:order-2" : "lg:order-1"}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.35 }}
        className="relative overflow-hidden rounded-2xl border border-zinc-800"
      >
        <div className="relative aspect-[16/10] overflow-hidden group">
          {/* Slides */}
          <motion.div
            className="flex h-full"
            animate={{ x: `-${currentSlide * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {project.images.map((img, index) => (
              <div key={index} className="relative min-w-full h-full">
                <Image
                  src={img}
                  alt={`${project.title} ${index + 1}`}
                  fill
                  sizes="100%"
                  className="object-cover"
                />
              </div>
            ))}
          </motion.div>

          {/* Thumbnail Navigation */}
          <div
            className="
              absolute bottom-4 left-1/2 -translate-x-1/2
              flex gap-2
              bg-black/40 backdrop-blur-md
              p-2 rounded-xl
              border border-white/10
            "
          >
            {project.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`
                  relative w-14 h-10 overflow-hidden rounded-md
                  transition-all duration-300
                  border
                  ${
                    currentSlide === index
                      ? "border-white scale-105"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }
                `}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}