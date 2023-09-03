import Icons from "../components/Icons";
import { NavItem } from "@/types";

export const NAV_ITEMS: Array<NavItem> = [
  {
    title: "Home",
    id: "hero",
  },
  {
    title: "About",
    id: "about",
  },
  {
    title: "Skills",
    id: "skills",
  },
  {
    title: "Projects",
    id: "projects",
  },
  {
    title: "Contacts",
    id: "contacts",
  },
];

export const PROJECT_ITEMS = [
  {
    title: "SUSHI ROOM🍣",
    description:
      "SUSHI ROOM is a React-based sushi ordering website with a Redux Toolkit state management system, backed by Express.js and MongoDB for efficient data handling.",
    image: "https://i.imgur.com/0U88ud5.png",
    tech: [
      "/tech/react.svg",
      "/tech/redux.svg",
      "/tech/sass.svg",
      "/tech/express.svg",
      "/tech/mongodb.svg",
    ],
    codeLink: "https://github.com/vezhdelit/sushi-room-frontend",
    link: "https://sushi-room.vercel.app/",
  },

  {
    title: "Threads✍️",
    description:
      "Threads is a thought-sharing website powered by Next.js and MongoDB, featuring secure user authentication through ClerkAuth for seamless and engaging interactions.",
    image: "https://i.imgur.com/Cn6JG6G.png",
    tech: [
      "/tech/tailwind.svg",
      "/tech/react.svg",
      "/tech/typescript.svg",
      "/tech/nextjs.svg",
      "/tech/mongodb.svg",
    ],
    codeLink: "https://github.com/vezhdelit/threads",
    link: "https://nextjs-threads-clone.vercel.app/",
  },
  {
    title: "CAR HUB🚗",
    description:
      "CarHub is a modern car rental website developed using Next.js and React, with a sleek user interface powered by the Tailwind CSS.",
    image: "https://i.imgur.com/7Y5acJl.png",
    tech: [
      "/tech/tailwind.svg",
      "/tech/react.svg",
      "/tech/typescript.svg",
      "/tech/nextjs.svg",
    ],
    codeLink: "https://github.com/vezhdelit/car-hub",
    link: "https://drives-hub.vercel.app/",
  },
  {
    title: "VEZHDEL.DEV👨‍💻",
    description:
      "Vezhdel Dev is a personal portfolio website built with Next.js and React, showcasing a stylish design created using the Tailwind CSS framework.",
    image: "https://i.imgur.com/JZvgFE1.png",
    tech: [
      "/tech/tailwind.svg",
      "/tech/react.svg",
      "/tech/typescript.svg",
      "/tech/nextjs.svg",
    ],
    codeLink: "https://github.com/vezhdelit/vezhdelit-portfolio",
    link: "https://vezhdelit.vercel.app/",
  },
];

export const SKILLS_FRONTEND = [
  {
    title: "HTML",
    path: "/tech/html.svg",
  },
  {
    title: "CSS",
    path: "/tech/css.svg",
  },
  {
    title: "JavaSctipt",
    path: "/tech/javascript.svg",
  },
  {
    title: "TypeScript",
    path: "/tech/typescript.svg",
  },
  {
    title: "ReactJS",
    path: "/tech/react.svg",
  },
  {
    title: "Redux",
    path: "/tech/redux.svg",
  },
  {
    title: "TailWind",
    path: "/tech/tailwind.svg",
  },
  {
    title: "SCSS/SaSS",
    path: "/tech/sass.svg",
  },
];

export const SKILLS_BACKEND = [
  {
    title: "NodeJS",
    path: "/tech/nodejs.svg",
  },
  {
    title: "Express",
    path: "/tech/express.svg",
  },
  {
    title: "NextJS",
    path: "/tech/nextjs.svg",
  },
  {
    title: "MongoDB",
    path: "/tech/mongodb.svg",
  },
  {
    title: "AWS",
    path: "/tech/aws.svg",
  },
];

export const SKILLS_OTHER = [
  {
    title: "Git",
    path: "/tech/git.svg",
  },
  {
    title: "Github",
    path: "/tech/github.svg",
  },
  {
    title: "Illustrator",
    path: "/tech/ai.svg",
  },
  {
    title: "Photoshop",
    path: "/tech/ps.svg",
  },
  {
    title: "Figma",
    path: "/tech/figma.svg",
  },
];

export const CONTACTS_ITEMS = [
  {
    icon: "/icons/mail.svg",
    link: "mailto:vezhdelit@gmail.com",
    title: "Email",
    text: "vezhdelit@gmail.com",
  },
  {
    icon: "/icons/linkedin.svg",
    link: "https://www.linkedin.com/in/vezhdelit",
    title: "LinkedIn",
    text: "www.linkedin.com/in/vezhdelit",
  },

  {
    icon: "/icons/mobile.svg",
    link: "tel:+380666719894",
    title: "Mobile",
    text: "+380666719894",
  },
  {
    icon: "/icons/github.svg",
    link: "https://github.com/vezhdelit",
    title: "GitHub",
    text: "@vezhdelit",
  },
  {
    icon: "/icons/telegram.svg",
    link: "https://t.me/theCatBasilio",
    title: "Telegram",
    text: "@theCatBasilio",
  },
];
