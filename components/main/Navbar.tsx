import Image from "next/image";
import React from "react";
import { FaWhatsapp, FaXTwitter, FaFacebookF, FaInstagram, FaTelegram } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 md:px-10 pr-5">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden lg:block text-gray-300">
            Welcome
          </span>
        </a>

        <div className="w-[500px] h-full md:flex md:flex-row items-center justify-between hidden md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#resume" className="cursor-pointer">
              Resume
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          <a href="https://wa.me/message/GDHF2T2S3ZQXK1" target="_blank">
            <FaWhatsapp className="text-white text-2xl" />
          </a>
          <a href="https://x.com/mushfiqbh" target="_blank">
            <FaXTwitter className="text-white text-2xl" />
          </a>
          <a href="https://www.facebook.com/mushfiqbh" target="_blank">
            <FaFacebookF className="text-white text-2xl" />
          </a>
          <a href="https://www.instagram.com/mushfiq_bh" target="_blank">
            <FaInstagram className="text-white text-2xl" />
          </a>
          <a href="https://t.me/mushfiqbh" target="_blank">
            <FaTelegram className="text-white text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
