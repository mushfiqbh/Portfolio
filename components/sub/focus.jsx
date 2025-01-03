import Button from "@/UI/Button";
import Typewriter from "@/UI/typewritter";
import { PiReadCvLogoFill } from "react-icons/pi";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { CiLocationOn, CiMail } from "react-icons/ci";
import Link from "next/link";

export default function FocusPanel() {
  return (
    <div className="w-full lg:w-1/2 p-10 lg:p-20 text-[--foreground]">
      <h1 className="text-4xl lg:text-6xl font-bold">
        Hi, I'm <span className="text-[--pink]">Mushfiq</span>
      </h1>
      <Typewriter />
      <p className="my-2">
        Currently Studying on Computer Science and Engineering at Leading
        University.
      </p>
      <div className="flex items-center">
        <CiMail className="text-xl text-[--pink]" />
        <p>&nbsp;mushfiqbh@gmail.com</p>
      </div>
      <div className="flex items-center">
        <CiLocationOn className="text-xl text-[--pink]" />
        <p>&nbsp;Sylhet, Bangladesh (Remote)</p>
      </div>
      <br />
      <div className="flex flex-wrap items-center gap-5">
        <Link href="https://docs.google.com/document/d/19NqgWazcT8EiqszOte10V6Lt03qoqtj9mkR0FWDZ16w/" target="_blank">
          <Button type="button" variant="rect" className="text-[1rem]">
            <PiReadCvLogoFill />
            CV
          </Button>
        </Link>
        <Link href="https://www.linkedin.com/in/mushfiqbh/" target="_blank">
          <Button type="button" variant="square" className="p-4">
            <FaLinkedinIn />
          </Button>
        </Link>
        <Link href="https://wa.me/8801737542444" target="_blank">
          <Button type="button" variant="square" className="p-4">
            <FaWhatsapp />
          </Button>
        </Link>
        <Link href="mailto:mushfiqbh@gmail.com" target="">
          <Button type="button" variant="square" className="p-4">
            <MdEmail />
          </Button>
        </Link>
        <Link href="https://www.x.com/mushfiqbh" target="_blank">
          <Button type="button" variant="square" className="p-4">
            <FaXTwitter />
          </Button>
        </Link>
        <Link href="https://www.facebook.com/mushfiqbh" target="_blank">
          <Button type="button" variant="square" className="p-4">
            <FaFacebookF />
          </Button>
        </Link>
        <Link href="https://www.github.com/mushfiqbh" target="_blank">
          <Button type="button" variant="square" className="p-4">
            <FaGithub />
          </Button>
        </Link>
      </div>
    </div>
  );
}
