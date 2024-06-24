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

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },

  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const projects = [
  {
    id: 1,
    title: "Brainster Learn",
    description:
      "Online learning platform with user auth, leaderboard, AI assistant, dashboard for Brainster Academies students.",
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
  {
    id: 2,
    title: "Brainster Library",
    description:
      "Developed an online library for Brainster students with online reading, audiobooks, reviews, user auth, rating, and notes.",
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
  {
    id: 3,
    title: "Generation Next",
    description:
      "Redesigned landing page for entry test application on Brainster College. Also, applied new design for the closing term page.",
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
  {
    id: 4,
    title: "RJK Korchagin",
    description:
      "Mentored student to create a fully responsive high school web site with filters, carousels, image gallery and navigation.",
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
  {
    id: 5,
    title: "Aneta's portfolio",
    description:
      "Created personal portfolio using Next.js featuring a contact form, internationalization, and dark/light theme.",
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
        title: "Tailwind",
        bgColor: "#06B6D4",
      },
    ],
  },
];

export const experiencesData = [
  {
    title: "Front-End Developer",
    location: "Brainster · Full-time",
    link: "",
    description:
      "Developed an online learning platform for academy students, maintained and updated existing projects, enrolled as an assistant in a Front-End Academy.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2022 - Present",
  },
  {
    title: "Front-End Developer Intern",
    location: "Brainster",
    link: "",
    description:
      "During my internship program i have created an online library for Brainster students ",
    icon: React.createElement(FaReact),
    date: "Feb - May, 2022",
  },
  {
    title: "Front-End Academy",
    location: "Brainster",
    link: "",
    description:
      "I successfully completed the Brainster Front-End Academy, gaining expertise in HTML, CSS, JS, and React. I also participated in live hackathons and built real-world projects",

    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2022",
  },
  {
    title: "Overall Experience",
    location: "",
    link: "https://www.linkedin.com/in/aneta-dimoska/",
    description:
      "My previous work experiences were in the field of banking, education, customer services, and logistics. For more details please visit my",

    icon: React.createElement(CgWorkAlt),
    date: "2014 - 2021",
  },
] as const;

export const projectsDetails = [
  {
    id: 1,
    title: "Brainster Learn",
    description:
      "Online learning platform centralizing course materials, progress tracking, personalized AI support for student success and many more features",
    link: "https://learn.brainster.co/",
    technologies: [
      "ReactJs",
      "Styled Components",
      "GraphQl",
      "Apollo Client",
      "Axios",
    ],
    role: "As a front-end developer, I implemented the user interface, created reusable components, and ensured responsive, visually appealing, and performant design using React and Styled Components.",
    development_process:
      "We followed Agile methodology with two-week sprints, daily stand-ups, and regular code reviews to ensure high-quality deliverables.",
    info: "Brainster Learn is an innovative online platform designed exclusively for students at Brainster Academies. Serving as the primary learning resource, it consolidates all course materials, including videos and text-based content, into one accessible location.",
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
        title: "User Authentication",
      },
      {
        id: 2,
        icon: React.createElement(GiProgression),
        title: "Progress Tracking",
      },
      {
        id: 3,
        icon: React.createElement(ImBooks),
        title: "Material Access",
      },
      {
        id: 4,
        icon: React.createElement(MdLeaderboard),
        title: "Interactive Leaderboard",
      },
      {
        id: 5,
        icon: React.createElement(BsStars),
        title: "AI Learning Assistant",
      },
      {
        id: 6,
        icon: React.createElement(PiSteps),
        title: "On-boarding process",
      },
      {
        id: 7,
        icon: React.createElement(LiaCertificateSolid),
        title: "Certificate generation",
      },
      {
        id: 8,
        icon: React.createElement(MdOutlinePayment),
        title: "Online Payment",
      },
    ],
  },
  {
    id: 2,
    title: "Brainster Library",
    description:
      "Developed an online library for Brainster students with online reading, audio books, reviews, user auth, rating, and notes.",
    link: "https://library.next.edu.mk/",
    technologies: ["ReactJs", "Styled Components", "Axios"],
    role: "As a front-end developer, I designed and implemented the user interface, created reusable components, and ensured responsive, visually appealing, and performant design using React and Styled Components.",
    development_process:
      "We followed Agile methodology with two-week sprints, daily stand-ups, and regular code reviews to ensure high-quality deliverables.",
    info: "Brainster Library is a web application developed for Brainster Academy and Brainster Next College students. Users can log in, save their favorite books, make reservations, leave reviews, and store notes. This platform enhances the academic experience by providing a centralized, user-friendly resource for managing and engaging with educational content.",
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
        title: "User Authentication",
      },
      {
        id: 2,
        icon: React.createElement(FaHeart),
        title: "Favorites",
      },
      {
        id: 3,
        icon: React.createElement(MdOutlineStarRate),
        title: "Book Review",
      },
      {
        id: 4,
        icon: React.createElement(PiNotepadFill),
        title: "Book Note",
      },
      {
        id: 5,
        icon: React.createElement(FaHeadphonesAlt),
        title: "Audio Books",
      },
      {
        id: 6,
        icon: React.createElement(FaRegLightbulb),
        title: "Suggest a Book",
      },
    ],
  },
  {
    id: 3,
    title: "Generation Next",
    description:
      "Redesigned landing page for entry test application on Brainster College. Also, applied new design for the closing term page.",
    link: "https://generation.next.edu.mk/",
    technologies: ["ReactJs", "Styled Components", "Axios"],
    role: "Since this was an existing project, I redesigned the landing page. Additionally, once the application period closes, the landing page automatically switches to display a 'pending' page until the next application term opens.",
    development_process:
      "We followed Agile methodology with two-week sprints, daily stand-ups, and regular code reviews to ensure high-quality deliverables.",
    info: "Generation Next is an application designed for potential students of Brainster Next College. After registering, users have 40 minutes to complete an entry test. Upon completing the test, users are directed to a score leaderboard, where they can see their performance compared to others. This app provides an engaging and competitive way for prospective students to demonstrate their knowledge and readiness for Brainster Next College.",
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
        title: "User Registration",
      },
      {
        id: 2,
        icon: React.createElement(CgSandClock),
        title: "Counter",
      },
      {
        id: 3,
        icon: React.createElement(FaRegCircleCheck),
        title: "Engaging Design",
      },
    ],
  },
  {
    id: 4,
    title: "RJK Korchagin",
    description:
      "Mentored student to create a fully responsive high school web site with filters, carousels, image gallery and navigation.",
    link: "https://rjk.edu.mk/",
    technologies: ["ReactJs", "Styled Components", "Axios"],
    role: "As a mentor to a student from Brainster Next College who developed this project, I provided guidelines, assisted with the project structure, and helped implement more complex logic.",
    info: "RJK Korchagin is a website developed for RJK Korchagin High School in Skopje. The site features multiple pages that provide information about the school's activities, news, and staff members. It serves as a comprehensive resource for students, parents, and the community to stay updated and engaged with the school's events and announcements.",
    development_process:
      "We followed Agile methodology with two-week sprints, daily stand-ups, and regular code reviews to ensure high-quality deliverables.",
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
      },
      {
        id: 2,
        icon: React.createElement(MdUpdate),
        title: "Activity Updates",
      },
      {
        id: 3,
        icon: React.createElement(FaRegNewspaper),
        title: "News Section",
      },
      {
        id: 4,
        icon: React.createElement(MdPeopleOutline),
        title: "Staff Directory",
      },
      {
        id: 5,
        icon: React.createElement(FaRegCircleCheck),
        title: "User-Friendly Design",
      },
      {
        id: 5,
        icon: React.createElement(DiResponsive),
        title: "Responsive Design",
      },
    ],
  },
  {
    id: 5,
    title: "Aneta's Portfolio",
    link: "https://rjk.edu.mk/",
    description:
      "Created personal portfolio using Next.js featuring a contact form, internationalization, and dark/light theme.",
    technologies: ["Next JS", "TypeScript", "Tailwind", "Resend"],
    role: "As the creator and developer of this portfolio, I was responsible for designing and implementing the entire website. This included crafting the user interface, developing reusable components, ensuring responsive design, integrating a contact form, implementing a theme switcher for light and dark modes, and enabling internationalization for multiple languages.",
    development_process:
      "I began by planning the website structure, creating wireframes, and selecting the design elements. Then, I set up the development environment with Next.js, developed reusable React components, and implemented key features such as the contact form, theme switcher, and internationalization. Finally, I ensured the site was responsive and optimized for performance.",
    info: "My Portfolio is a personal website I created to present myself, showcase my projects, and highlight my skills. The site features a clean and professional design, providing visitors with an engaging experience. This portfolio serves as a comprehensive digital resume, demonstrating my capabilities as a front-end developer.",
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
        title: "Project Showcase",
      },
      {
        id: 2,
        icon: React.createElement(CiSettings),
        title: "Skills Highlight",
      },
      {
        id: 3,
        icon: React.createElement(IoMailUnreadOutline),
        title: "Contact Form",
      },
      {
        id: 4,
        icon: React.createElement(IoMdSwitch),
        title: "Theme Switcher",
      },
      {
        id: 5,
        icon: React.createElement(MdLanguage),
        title: "Internationalization"
      },
      {
        id: 6,
        icon: React.createElement(DiResponsive),
        title: "Responsive Design"
      },
      {
        id: 7,
        icon: React.createElement(LuLayoutDashboard),
        title: "Professional Layout"
      },
    ],
  },
];

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
