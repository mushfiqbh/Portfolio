import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <h2 className="font-bold text-[16px] text-center mb-5">Contact Me</h2>
      <div className="w-full h-auto flex flex-row flex-wrap items-center justify-center gap-x-5 gap-y-2">
        <Link href="https://www.youtube.com" target="_blank" className="flex flex-row items-center cursor-pointer">
          <FaYoutube />
          <span className="text-[15px] ml-[6px]">Youtube</span>
        </Link>
        <p className="flex flex-row items-center cursor-pointer">
          <RxGithubLogo />
          <span className="text-[15px] ml-[6px]">Github</span>
        </p>
        <p className="flex flex-row items-center cursor-pointer">
          <RxDiscordLogo />
          <span className="text-[15px] ml-[6px]">Discord</span>
        </p>
        <p className="flex flex-row items-center cursor-pointer">
          <FaYoutube />
          <span className="text-[15px] ml-[6px]">Instagram</span>
        </p>
        <p className="flex flex-row items-center cursor-pointer">
          <RxGithubLogo />
          <span className="text-[15px] ml-[6px]">Twitter</span>
        </p>
        <p className="flex flex-row items-center cursor-pointer">
          <RxDiscordLogo />
          <span className="text-[15px] ml-[6px]">Linkedin</span>
        </p>
        <p className="flex flex-row items-center cursor-pointer">
          <RxDiscordLogo />
          <span className="text-[15px] ml-[6px]">Facebook</span>
        </p>
        <p className="flex flex-row items-center cursor-pointer">
          <RxDiscordLogo />
          <span className="text-[15px] ml-[6px]">Telegram</span>
        </p>
        <p className="flex flex-row items-center cursor-pointer">
          <RxDiscordLogo />
          <span className="text-[15px] ml-[6px]">Whatsapp</span>
        </p>
        <p className="flex flex-row items-center cursor-pointer">
          <RxDiscordLogo />
          <span className="text-[15px] ml-[6px]">Anonymous</span>
        </p>
      </div>

      <div className="mb-[20px] text-[15px] text-center">
        <br />
        All rights reserved &copy; Tessract Inc.
      </div>
    </div>
  );
};

export default Footer;
