"use client";

import React from "react";
import { projects } from "@/constants/projects";
import { motion } from "framer-motion";
import Headline from "./sub/headline";
import ImageSlider from "./sub/image-slider";

export default function Page() {
  const badgeColors = [
    "bg-teal-100",
    "bg-green-100",
    "bg-yellow-100",
    "bg-purple-100",
    "bg-orange-100",
    "bg-rose-100",
  ];

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // Animation variants for individual cards
  const rowVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="project"
      className="px-4 sm:px-6 lg:px-0 py-16"
    >
      <Headline
        title="Selected Projects"
        subtitle="Engineer who solves hard problems"
      />

      <motion.div
        className="max-w-6xl mx-auto mt-20 space-y-28"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
      >
        {projects.map((project, index) => {
          const reversed = index % 2 !== 0;

          return (
            <motion.div
              key={index}
              variants={rowVariants}
              className={`
                grid lg:grid-cols-2 gap-10 lg:gap-20 items-center cursor-pointer group
              `}
            >
              <ImageSlider project={project} reversed={reversed} />

              {/* CONTENT */}
              <div
                className={`
                  space-y-6
                  ${reversed ? "lg:order-1" : ""}
                `}
              >
                {/* small label */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-xs uppercase tracking-[0.2em] text-zinc-500"
                >
                  Selected Work {String(index + 1).padStart(2, "0")}
                </motion.p>

                {/* title */}
                <motion.h2
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-semibold tracking-tight"
                >
                  {project.title}
                </motion.h2>

                {/* description */}
                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-zinc-400 leading-7 max-w-xl"
                >
                  {project.description}
                </motion.p>

                {/* tech */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-3"
                >
                  {project.tech.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: 0.3 + techIndex * 0.03,
                        duration: 0.2,
                      }}
                      viewport={{ once: true }}
                      className="
                        flex items-center gap-2
                        text-sm text-zinc-300
                        border border-zinc-800
                        rounded-full
                        px-3 py-1.5
                        bg-zinc-900/40
                      "
                    >
                      {tech.Icon && (
                        <tech.Icon className="w-5 h-5" />
                      )}

                      <span>{tech.name}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* subtle CTA */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="pt-2"
                >
                  <a href={ project.live } target="_blank" rel="noopener noreferrer" className="text-sm group-hover:text-zinc-300 transition-colors">
                    Live View →
                  </a>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
