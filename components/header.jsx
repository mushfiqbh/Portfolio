"use client";

import { IoPersonSharp } from "react-icons/io5";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import Button from "@/UI/Button";
import Link from "next/link";
import "../styles/navlink.css";
import { useTheme } from "@/context/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      id="header"
      className="w-full min-h-20 flex justify-between px-10 py-5 fixed shadow-md dark:border-none border-b border-gray-200 bg-[--bgheader] dark:text-white"
    >
      <div>
        <Button type="button" variant="round">
          <IoPersonSharp className="text-xl" />
        </Button>
      </div>
      <nav className="hidden md:flex flex-wrap items-center gap-5 text-sm">
        <Link href="/" className="nav-link">
          HOME
        </Link>
        <Link href="#experience" className="nav-link">
          EXPERIENCES
        </Link>
        <Link href="#skill" className="nav-link">
          SKILLS
        </Link>
        <Link href="#pricing" className="nav-link">
          PRICING
        </Link>
        <Link href="#project" className="nav-link">
          PROJECTS
        </Link>
        <Link href="#blog" className="nav-link">
          BLOG
        </Link>
      </nav>
      <div>
        <Button type="button" onClick={toggleTheme} variant="square">
          {theme === "light" ? (
            <MdDarkMode className="text-xl" />
          ) : (
            <MdLightMode className="text-xl" />
          )}
        </Button>
      </div>
    </div>
  );
}
