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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur facere quas recusandae dolores cum!",
    image: "https://i.imgur.com/0U88ud5.png",
    tech: [
      "/tech/react.svg",
      "/tech/redux.svg",
      "/tech/sass.svg",
      "/tech/express.svg",
      "/tech/mongodb.svg",
    ],
    link: "https://sushi-room.vercel.app/",
  },
  {
    title: "CAR HUB🚗",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur facere quas recusandae dolores cum!",
    image: "https://i.imgur.com/7Y5acJl.png",
    tech: [
      "/tech/tailwind.svg",
      "/tech/react.svg",
      "/tech/typescript.svg",
      "/tech/nextjs.svg",
    ],
    link: "https://drives-hub.vercel.app/",
  },
  {
    title: "VEZHDEL.DEV👨‍💻",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur facere quas recusandae dolores cum!",
    image: "https://i.imgur.com/JZvgFE1.png",
    tech: [
      "/tech/tailwind.svg",
      "/tech/react.svg",
      "/tech/typescript.svg",
      "/tech/nextjs.svg",
    ],
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
