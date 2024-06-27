import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { SiStyledcomponents } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMui } from "react-icons/si";
import { AiOutlineJavaScript } from "react-icons/ai";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa6";
import { GrGraphQl } from "react-icons/gr";
import { SiApollographql } from "react-icons/si";
import { GrSecure } from "react-icons/gr";
import { GiProgression } from "react-icons/gi";
import { ImBooks } from "react-icons/im";
import { MdLeaderboard } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { PiSteps } from "react-icons/pi";
import { LiaCertificateSolid } from "react-icons/lia";
import { MdOutlinePayment } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { MdOutlineStarRate } from "react-icons/md";
import { PiNotepadFill } from "react-icons/pi";
import { FaHeadphonesAlt } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { CgSandClock } from "react-icons/cg";
import { FaRegCircleCheck } from "react-icons/fa6";
import { GrMultiple } from "react-icons/gr";
import { MdUpdate } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa";
import { MdPeopleOutline } from "react-icons/md";
import { DiResponsive } from "react-icons/di";
import { GoProjectRoadmap } from "react-icons/go";
import { IoMailUnreadOutline } from "react-icons/io5";
import { IoMdSwitch } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { MdLanguage } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { TiHome } from "react-icons/ti";
import { FaBusinessTime } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { HiViewGrid } from "react-icons/hi";

export const links = {
  home: {
    icon: React.createElement(TiHome),
    hash: "#home",
  },
  projects: {
    icon: React.createElement(HiViewGrid),
    hash: "#projects",
  },
  experience: {
    icon: React.createElement(FaBusinessTime),
    hash: "#experience",
  },
  skills: {
    icon: React.createElement(FaLaptopCode),
    hash: "#skills",
  },
  about: {
    icon: React.createElement(FaAddressCard),
    hash: "#about",
  },
  contact: {
    icon: React.createElement(FaPaperPlane),
    hash: "#contact",
  },
};

export const projects = {
  brainster_learn: {
    id: 1,
    title: "Brainster Learn",
    image: "/cover/learn-cover.png",
    category: "work",
    timeSpan: "2022 - present",
    technologies: [
      {
        title: "React",
        bgColor: "#1d8cab",
      },
      {
        title: "Styled Components",
        bgColor: "#DB7093",
      },
      {
        title: "GraphQl",
        bgColor: "#E10098",
      },
    ],
  },
  brainster_library: {
    id: 2,
    title: "Brainster Library",
    image: "/cover/library2-cover.png",
    category: "work",
    timeSpan: "Feb - May, 2022",
    technologies: [
      {
        title: "React",
        bgColor: "#1d8cab",
      },
      {
        title: "Styled Components",
        bgColor: "#DB7093",
      },
    ],
  },
  generation_next: {
    id: 3,
    title: "Generation Next",
    image: "/cover/generation-cover.png",
    category: "work",
    timeSpan: "Feb - March, 2024",
    technologies: [
      {
        title: "React",
        bgColor: "#1d8cab",
      },
      {
        title: "Styled Components",
        bgColor: "#DB7093",
      },
    ],
  },
  rjk_korchagin: {
    id: 4,
    title: "RJK Korchagin",
    image: "/cover/rjk-cover.png",
    category: "work",
    timeSpan: "Sept - Oct, 2023",
    technologies: [
      {
        title: "React",
        bgColor: "#1d8cab",
      },
      {
        title: "Styled Components",
        bgColor: "#DB7093",
      },
    ],
  },
  portfolio: {
    id: 5,
    title: "Aneta's portfolio",
    image: "/cover/portfolio-cover.png",
    category: "personal",
    timeSpan: "June, 2024",
    technologies: [
      {
        title: "Next JS",
        bgColor: "#000",
      },
      {
        title: "TypeScript",
        bgColor: "#3178C6",
      },
      {
        title: "Tailwind CSS",
        bgColor: "#06B6D4",
      },
      {
        title: "next-intl",
        bgColor: "#3178C6",
      },
    ],
  },
};

export const experience = {
  full_time: {
    title: "Front-End Developer",
    location: "Brainster · Full-time",
    link: "",
    icon: React.createElement(CgWorkAlt),
    date: "May 2022 - Present",
  },
  intern: {
    title: "Front-End Developer Intern",
    location: "Brainster",
    link: "",
    icon: React.createElement(FaReact),
    date: "Feb - May, 2022",
  },
  academy: {
    title: "Front-End Academy",
    location: "Brainster",
    link: "",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2022",
  },
  overall_experience: {
    title: "Overall Experience",
    location: "",
    link: "https://www.linkedin.com/in/aneta-dimoska/",
    icon: React.createElement(CgWorkAlt),
    date: "2014 - 2021",
  },
};

export const projectsDetails = {
  brainster_learn: {
    id: 1,
    title: "Brainster Learn",
    visit_link: "learn.brainster.co",
    link: "https://learn.brainster.co/",
    technologies: [
      "ReactJs",
      "Styled Components",
      "GraphQl",
      "Apollo Client",
      "Axios",
    ],
    media: {
      images: [
        "/learn/01.png",
        "/learn/02.png",
        "/learn/03.png",
        "/learn/04.png",
        "/learn/05.png",
        "/learn/06.png",
        "/learn/07.png",
      ],
    },
    features: [
      {
        id: 1,
        icon: React.createElement(GrSecure),
        project_id: 1,
      },
      {
        id: 2,
        icon: React.createElement(GiProgression),
        project_id: 1,
      },
      {
        id: 3,
        icon: React.createElement(ImBooks),
        project_id: 1,
      },
      {
        id: 4,
        icon: React.createElement(MdLeaderboard),
        project_id: 1,
      },
      {
        id: 5,
        icon: React.createElement(BsStars),
        project_id: 1,
      },
      {
        id: 6,
        icon: React.createElement(PiSteps),
        project_id: 1,
      },
      {
        id: 7,
        icon: React.createElement(LiaCertificateSolid),
        project_id: 1,
      },
      {
        id: 8,
        icon: React.createElement(MdOutlinePayment),
        project_id: 1,
      },
    ],
  },
  brainster_library: {
    id: 2,
    title: "Brainster Library",
    visit_link: "library.next.edu.mk",
    link: "https://library.next.edu.mk/",
    technologies: ["ReactJs", "Styled Components", "Axios"],
    media: {
      images: [
        "/library/01.png",
        "/library/02.png",
        "/library/03.png",
        "/library/04.png",
        "/library/05.png",
        "/library/06.png",
        "/library/07.png",
      ],
    },
    features: [
      {
        id: 1,
        icon: React.createElement(GrSecure),
        project_id: 2,
      },
      {
        id: 2,
        icon: React.createElement(FaHeart),
        project_id: 2,
      },
      {
        id: 3,
        icon: React.createElement(MdOutlineStarRate),
        project_id: 2,
      },
      {
        id: 4,
        icon: React.createElement(PiNotepadFill),
        project_id: 2,
      },
      {
        id: 5,
        icon: React.createElement(FaHeadphonesAlt),
        project_id: 2,
      },
      {
        id: 6,
        icon: React.createElement(FaRegLightbulb),
        project_id: 2,
      },
    ],
  },
  generation_next: {
    id: 3,
    title: "Generation Next",
    visit_link: "generation.next.edu.mk",
    link: "https://generation.next.edu.mk/",
    technologies: ["ReactJs", "Styled Components", "Axios"],
    media: {
      images: [
        "/generation/01.png",
        "/generation/02.png",
        "/generation/03.png",
        "/generation/04.png",
        "/generation/05.png",
        "/generation/06.png",
        "/generation/07.png",
      ],
    },
    features: [
      {
        id: 1,
        icon: React.createElement(GrSecure),
        project_id: 3,
      },
      {
        id: 2,
        icon: React.createElement(CgSandClock),
        project_id: 3,
      },
      {
        id: 3,
        icon: React.createElement(FaRegCircleCheck),
        project_id: 3,
      },
    ],
  },
  rjk_korchagin: {
    id: 4,
    title: "RJK Korchagin",
    visit_link: "rjk.edu.mk",
    link: "https://rjk.edu.mk/",
    technologies: ["ReactJs", "Styled Components", "Axios"],
    media: {
      images: [
        "/korchagin/01.png",
        "/korchagin/02.png",
        "/korchagin/03.png",
        "/korchagin/04.png",
        "/korchagin/05.png",
      ],
    },
    features: [
      {
        id: 1,
        icon: React.createElement(GrMultiple),
        title: "Multi-Page Layout",
        project_id: 4,
      },
      {
        id: 2,
        icon: React.createElement(MdUpdate),
        title: "Activity Updates",
        project_id: 4,
      },
      {
        id: 3,
        icon: React.createElement(FaRegNewspaper),
        title: "News Section",
        project_id: 4,
      },
      {
        id: 4,
        icon: React.createElement(MdPeopleOutline),
        project_id: 4,
        title: "Staff Directory",
      },
      {
        id: 5,
        icon: React.createElement(FaRegCircleCheck),
        project_id: 4,
        title: "User-Friendly Design",
      },
      {
        id: 6,
        icon: React.createElement(DiResponsive),
        project_id: 4,
        title: "Responsive Design",
      },
    ],
  },
  portfolio: {
    id: 5,
    title: "Aneta's Portfolio",
    visit_link: null,
    link: null,
    technologies: ["Next JS", "TypeScript", "Tailwind", "Resend"],
    media: {
      images: [
        "/learn/01.png",
        "/learn/02.png",
        "/learn/03.png",
        "/learn/04.png",
        "/learn/05.png",
        "/learn/06.png",
        "/learn/07.png",
      ],
    },
    features: [
      {
        id: 1,
        icon: React.createElement(GoProjectRoadmap),
        project_id: 5,
        title: "Project Showcase",
      },
      {
        id: 2,
        icon: React.createElement(CiSettings),
        project_id: 5,
        title: "Skills Highlight",
      },
      {
        id: 3,
        icon: React.createElement(IoMailUnreadOutline),
        project_id: 5,
        title: "Contact Form",
      },
      {
        id: 4,
        icon: React.createElement(IoMdSwitch),
        project_id: 5,
        title: "Theme Switcher",
      },
      {
        id: 5,
        icon: React.createElement(MdLanguage),
        project_id: 5,
        title: "Internationalization",
      },
      {
        id: 6,
        icon: React.createElement(DiResponsive),
        project_id: 5,
        title: "Responsive Design",
      },
      {
        id: 7,
        icon: React.createElement(LuLayoutDashboard),
        project_id: 5,
        title: "Professional Layout",
      },
    ],
  },
};

export const skillsData = [
  {
    id: 1,
    icon: React.createElement(TiHtml5),
    title: "HTML",
    color: "#E34F26",
  },
  {
    id: 2,
    icon: React.createElement(FaCss3Alt),
    title: "CSS",
    color: "#1572B6",
  },
  {
    id: 3,
    icon: React.createElement(FaBootstrap),
    title: "Bootstrap",
    color: "#7952B3",
  },
  {
    id: 4,
    icon: React.createElement(RiTailwindCssFill),
    title: "Tailwind",
    color: "#06B6D4",
  },
  {
    id: 5,
    icon: React.createElement(SiMui),
    title: "Material UI",
    color: "#0081CB",
  },
  {
    id: 6,
    icon: React.createElement(SiStyledcomponents),
    title: "Styled-Components",
    color: "#DB7093",
  },
  {
    id: 7,
    icon: React.createElement(AiOutlineJavaScript),
    title: "JavaScript",
    color: "#F7DF1E",
  },
  {
    id: 8,
    icon: React.createElement(BiLogoTypescript),
    title: "TypeScript",
    color: "#3178C6",
  },
  {
    id: 9,
    icon: React.createElement(FaReact),
    title: "React",
    color: "#61DAFB",
  },
  {
    id: 10,
    icon: React.createElement(RiNextjsFill),
    title: "Next.js",
    color: "#000",
  },
  {
    id: 11,
    icon: React.createElement(FaGitAlt),
    title: "Git",
    color: "#000",
  },
  {
    id: 12,
    icon: React.createElement(GrGraphQl),
    title: "GraphQL",
    color: "#E10098",
  },
  {
    id: 13,
    icon: React.createElement(SiApollographql),
    title: "Apollo",
    color: "#311C87",
  },
] as const;
