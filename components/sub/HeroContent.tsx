"use client";

import React from "react";
import { FaGoogleDrive, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-start justify-center lg:px-20 px-5 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-justify lg:mt-9 mt-0 text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Fullstack Web Developer</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hi, I&apos;m
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Mushfiq
            </span>
          </span>
        </motion.div>

        <motion.h1
          variants={slideInFromLeft(0.5)}
          className="text-2xl font-bold text-gray-200 max-w-[600px] w-auto h-auto"
        >
          Professional Freelancer
        </motion.h1>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Full Stack Web Developer with experiences in{" "}
          <b>React, Next, Node and Django</b>. Check out my projects and skills.
        </motion.p>

        <div className="flex flex-row gap-5">
          <motion.a
            href="https://drive.google.com/file/d/1WZtQpXKXpWqJX3uXq4S6sY8o9d2tA8r9/view?usp=sharing"
            target="_blank"
            variants={slideInFromLeft(1)}
            className="p-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] flex flex-row items-center"
          >
            <FaGoogleDrive className="mr-2" />
            Resume
          </motion.a>
          <motion.a
            href="mailto:mushfiqbh@gmail.com"
            target="_blank"
            variants={slideInFromLeft(1)}
            className="p-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] flex flex-row items-center"
          >
            <MdEmail className="mr-2" />
            Email
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/mushfiqbh/"
            target="_blank"
            variants={slideInFromLeft(1)}
            className="p-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] flex flex-row items-center"
          >
            <FaLinkedin className="mr-2" />
            Linkedin
          </motion.a>
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
