"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        <br />
        <div className="flex flex-row gap-5">
          <motion.a
            href="https://github.com/mushfiqbh/"
            target="_blank"
            variants={slideInFromLeft(1)}
            className="p-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            Source Code
          </motion.a>
          <motion.a
            href="https://github.com/mushfiqbh/"
            target="_blank"
            variants={slideInFromLeft(1)}
            className="p-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            View Live
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
