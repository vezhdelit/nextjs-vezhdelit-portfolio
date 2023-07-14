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
    title: "SUSHI ROOM",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur facere quas recusandae dolores cum!",
    image: "https://i.imgur.com/0U88ud5.png",
    technologies: [
      "/technologies/react.svg",
      "/technologies/redux.svg",
      "/technologies/sass.svg",
      "/technologies/express.svg",
      "/technologies/mongodb.svg",
    ],
    link: "https://sushi-room.vercel.app/",
  },
  {
    title: "CAR HUB",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur facere quas recusandae dolores cum!",
    image: "https://i.imgur.com/7Y5acJl.png",
    technologies: [
      "/technologies/tailwind.svg",
      "/technologies/react.svg",
      "/technologies/typescript.svg",
      "/technologies/nextjs.svg",
    ],
    link: "https://drives-hub.vercel.app/",
  },
  {
    title: "VEZHDEL.DEV",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur facere quas recusandae dolores cum!",
    image: "https://i.imgur.com/JZvgFE1.png",
    technologies: [
      "/technologies/tailwind.svg",
      "/technologies/react.svg",
      "/technologies/typescript.svg",
      "/technologies/nextjs.svg",
    ],
    link: "https://vezhdelit.vercel.app/",
  },
];

export const SKILLS_FRONTEND = [
  {
    title: "HTML",
    path: "/technologies/html.svg",
  },
  {
    title: "CSS",
    path: "/technologies/css.svg",
  },
  {
    title: "JavaSctipt",
    path: "/technologies/javascript.svg",
  },
  {
    title: "TypeScript",
    path: "/technologies/typescript.svg",
  },
  {
    title: "ReactJS",
    path: "/technologies/react.svg",
  },
  {
    title: "Redux",
    path: "/technologies/redux.svg",
  },
  {
    title: "TailWind",
    path: "/technologies/tailwind.svg",
  },
  {
    title: "SCSS/SaSS",
    path: "/technologies/sass.svg",
  },
];

export const SKILLS_BACKEND = [
  {
    title: "NodeJS",
    path: "/technologies/nodeJS.svg",
  },
  {
    title: "Express",
    path: "/technologies/express.svg",
  },
  {
    title: "NextJS",
    path: "/technologies/nextjs.svg",
  },
  {
    title: "MongoDB",
    path: "/technologies/mongoDB.svg",
  },
  {
    title: "AWS",
    path: "/technologies/aws.svg",
  },
];

export const SKILLS_OTHER = [
  {
    title: "Git",
    path: "/technologies/git.svg",
  },
  {
    title: "Github",
    path: "/technologies/github.svg",
  },
  {
    title: "Illustrator",
    path: "/technologies/ai.svg",
  },
  {
    title: "Photoshop",
    path: "/technologies/ps.svg",
  },
  {
    title: "Figma",
    path: "/technologies/figma.svg",
  },
];
