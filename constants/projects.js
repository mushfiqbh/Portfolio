import leadingai from "../assets/leading-ai.png";
import leadingaiMobile from "../assets/leadingai-mobile.jpg";
import leadingAiFigjam from "../assets/LeadingAIFigJam.webp";
import PlatformSnap from "../assets/platform-snap.png";
import PlatformAcademic from "../assets/platform-academic.png";
import PlatformExam from "../assets/platform-exam.png";
import BarnomalaSnap from "../assets/barnomala-snap.png";
import lifeInsight from "../assets/life-insight.png";
import { FaVuejs, FaNodeJs, FaVectorSquare } from "react-icons/fa6";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { FaFingerprint} from "react-icons/fa";
import {
  SiPython,
  SiTypescript,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiGraphql,
  SiPhp,
  SiLaravel,
  SiOpenai,
} from "react-icons/si";
import { GrDeploy } from "react-icons/gr";
import { LuWaypoints } from "react-icons/lu";

export const projects = [
  {
    title: "School Management SAAS Platform",
    images: [PlatformSnap, PlatformAcademic, PlatformExam],
    source: "private",
    live: "https://cloud.barnomala.com",
    tech: [
      { name: "Laravel", Icon: SiLaravel },
      { name: "Vue JS", Icon: FaVuejs },
      { name: "MySQL", Icon: SiMysql },
      { name: "CPanel", Icon: GrDeploy },
      { name: "Attendance SMS", Icon: FaFingerprint },
    ],
    features: [
      "Multi-Tenancy: Each school has its own isolated environment with customizable settings.",
      "Comprehensive Modules: Includes student information management, attendance tracking, grade management, and communication tools.",
      "User Roles and Permissions: Different access levels for administrators, teachers, students, and parents.",
      "Real-Time Notifications: Instant updates on attendance, grades, and announcements via SMS and email.",
      "Scalable Architecture: Built to handle multiple schools with high performance and reliability.",
    ],
  },
  {
    title: "LeadingAI: AI-Powered Agentic Chatbot",
    images: [leadingAiFigjam, leadingai, leadingaiMobile],
    source: "https://github.com/mushfiqbh/LeadingAI",
    live: "https://leadingai.vercel.app/",
    tech: [
      { name: "Next JS", Icon: RiNextjsLine },
      { name: "Node JS", Icon: FaNodeJs },
      { name: "Python", Icon: SiPython },
      { name: "Firebase", Icon: SiFirebase },
      { name: "Open API", Icon: SiOpenai },
      { name: "RAG Pipeline", Icon: LuWaypoints },
      { name: "Supabase Vector DB", Icon: FaVectorSquare },
    ],
    features: [
      "Intelligent Agentic Behavior: Simulates human-like interactions and decision-making processes.",
      "Real-Time Chat Functionality: Provides seamless communication between users and the AI assistant.",
      "Customizable Responses: Allows for tailored interactions based on user preferences and context.",
      "Multi-Modal Support: Handles both text and voice inputs for a more natural user experience.",
      "Continuous Learning: Improves over time by learning from user interactions and feedback.",
    ],
  },
  {
    title: "Barnomala - Education Management System",
    images: [BarnomalaSnap],
    source: "private",
    live: "https://barnomala.com",
    tech: [
      { name: "Laravel", Icon: SiLaravel },
      { name: "PHP Blade", Icon: SiPhp },
      { name: "MySQL", Icon: SiMysql },
      { name: "Alpine JS", Icon: RiNextjsLine },
      { name: "CPanel", Icon: GrDeploy },
      { name: "Tailwind CSS", Icon: RiTailwindCssFill },
    ],
    features: [
      "Student Information Management: Centralized database for student records, including personal details, academic history, and attendance.",
      "Attendance Tracking: Real-time monitoring of student attendance with automated notifications for absences.",
    ],
  },
  {
    title: "CMS Project: Learning Health, Emotional, Life Lessons",
    images: [lifeInsight],
    source: "https://github.com/mushfiqbh/life-insight",
    live: "https://life-insight-swart.vercel.app/",
    tech: [
      { name: "NextJs", Icon: RiNextjsLine },
      { name: "NodeJs", Icon: FaNodeJs },
      { name: "Mongodb", Icon: SiMongodb },
      { name: "Typescript", Icon: SiTypescript },
      { name: "GraphQL", Icon: SiGraphql },
    ],
    features: [
      "User-Friendly Interface: Intuitive design that enhances user experience and promotes engagement.",
      "Personalized Learning Paths: Tailored content recommendations based on user preferences and learning history.",
      "Interactive Content: Incorporation of multimedia elements such as videos, quizzes, and discussion forums to enhance learning.",
    ],
  },
];

export const projectTypes = [
  "custom",
  "ecommerce",
  "portfolio",
  "socialMedia",
  "gaming",
  "dataAnalytics",
  "foodDelivery",
  "projectManager",
  "groceryDelivery",
  "workoutTracker",
  "cms",
];
