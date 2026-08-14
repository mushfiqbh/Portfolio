import headshot from "./headshot.jpeg";
import client0 from "./client0.png";
import client1 from "./client1.jpg";
import client2 from "./client2.jpg";
import handshake from "./handshake.jpg";
import cert_reactjs from "./react_frontend.png";
import cert_prob from "./problem_solving_basic.png";
import cert_sql from "./cert_sql.png";
import { IoServer, IoTime } from "react-icons/io5";
import { FaVuejs, FaNodeJs, FaPython, FaVectorSquare } from "react-icons/fa6";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { HiServer } from "react-icons/hi";
import { DiJsBadge, DiScrum } from "react-icons/di";
import { MdWeb, MdOutlineCloudSync } from "react-icons/md";
import { TbCodeAsterisk, TbBrandKotlin, TbBrandDjango } from "react-icons/tb";
import {
  FaFingerprint,
  FaDocker,
  FaGitAlt,
  FaInfinity,
  FaTools,
  FaDeploydog,
} from "react-icons/fa";
import {
  SiPython,
  SiTypescript,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGraphql,
  SiRedux,
  SiFramework7,
  SiPhp,
  SiLaravel,
  SiOpenai,
} from "react-icons/si";
import { Database, GitBranch } from "lucide-react";
import { GrDeploy } from "react-icons/gr";
import { LuWaypoints } from "react-icons/lu";

export { headshot, handshake };

export const contributions = [
  {
    repo: "mui/material-ui",
    description: "Fix a bug and write unit testing documentation",
    link: "https://github.com/mui/material-ui/pull/45345",
  },
  {
    repo: "ReactChat",
    description:
      "Contributed bug fixes and improved Responsiveness for mobile and tablet",
    link: "https://github.com/urstrulynishkarsh/ReactChat/pull/223",
  },
];

export const certificates = [
  {
    title: "Frontend Developer (React)",
    url: "https://www.hackerrank.com/certificates/1e260e7d33ff",
    image: cert_reactjs,
  },
  {
    title: "SQL (Advanced)",
    url: "https://www.hackerrank.com/certificates/d0890475619e",
    image: cert_sql,
  },
  {
    title: "Problem Solving (Basic)",
    url: "https://www.hackerrank.com/certificates/bcc6e07a913c",
    image: cert_prob,
  },
];

export const reviews = [
  {
    id: 0,
    pic: client0,
    name: "Nevine Acotanza 1",
    rule: "Cheif Operating Office",
    project: "Android App Development",
    info: "via Upwork - March 4, 2024",
    review:
      "Currently Studying in Computer Science and Engineering at Leading University. Currently Studying in Computer Science and Engineering at Leading University. Currently Studying in Computer Science and Engineering at Leading University.",
  },
  {
    id: 1,
    pic: client1,
    name: "Nevine Acotanza 2",
    rule: "Cheif Operating Office",
    project: "Full Stack E-Commerce Site",
    info: "via Upwork - March 4, 2023",
    review:
      "Currently Studying in Computer Science and Engineering at Leading University. Currently Studying in Computer Science and Engineering at Leading University. Currently Studying in Computer Science and Engineering at Leading University.",
  },
  {
    id: 2,
    pic: client2,
    name: "Nevine Acotanza 3",
    rule: "Cheif Operating Office",
    project: "Bank Management System",
    info: "via Upwork - March 4, 2022",
    review:
      "Currently Studying in Computer Science and Engineering at Leading University. Currently Studying in Computer Science and Engineering at Leading University. Currently Studying in Computer Science and Engineering at Leading University.",
  },
];
