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
      {
        icon: <Icons.react className="w-9 h-9 fill-[#1CCEFF] mx-auto" />,
        bgColor: "bg-[#E7FAFF]",
      },
      {
        icon: <Icons.redux className=" w-9 h-9 fill-[#764ABC] mx-auto" />,
        bgColor: "bg-[#EFE5FF]",
      },
      {
        icon: <Icons.sass className="w-9 h-9 fill-[#CC6699] mx-auto" />,
        bgColor: "bg-[#FFE4F2]",
      },
      {
        icon: <Icons.express className="w-9 h-9 mx-auto" />,
        bgColor: "bg-[#F2F2F2]",
      },
      {
        icon: <Icons.mongoDB className="w-9 h-9 mx-auto" />,
        bgColor: "bg-[#B0EAC0]",
      },
    ],
    link: "https://sushi-room.vercel.app/",
  },
  {
    title: "CAR HUB",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur facere quas recusandae dolores cum!",
    image: "https://i.imgur.com/7Y5acJl.png",
    technologies: [
      {
        icon: <Icons.typecript className="w-9 h-9 mx-auto" />,
        bgColor: "bg-[#E7FAFF]",
      },
      {
        icon: <Icons.react className="w-9 h-9 fill-[#1CCEFF] mx-auto" />,
        bgColor: "bg-[#E7FAFF]",
      },
      {
        icon: <Icons.nextjs className=" w-9 h-9  mx-auto" />,
        bgColor: "bg-[#F2F2F2]",
      },
      {
        icon: <Icons.tailwind className="w-9 h-9 fill-[#38bdf8] mx-auto" />,
        bgColor: "bg-[#E7FAFF]",
      },
    ],
    link: "https://sushi-room.vercel.app/",
  },
  {
    title: "VEZHDEL.DEV",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur facere quas recusandae dolores cum!",
    image: "https://i.imgur.com/JZvgFE1.png",
    technologies: [
      {
        icon: <Icons.typecript className="w-9 h-9 mx-auto" />,
        bgColor: "bg-[#E7FAFF]",
      },
      {
        icon: <Icons.react className="w-9 h-9 fill-[#1CCEFF] mx-auto" />,
        bgColor: "bg-[#E7FAFF]",
      },
      {
        icon: <Icons.nextjs className=" w-9 h-9  mx-auto" />,
        bgColor: "bg-[#F2F2F2]",
      },
      {
        icon: <Icons.tailwind className="w-9 h-9 fill-[#38bdf8] mx-auto" />,
        bgColor: "bg-[#E7FAFF]",
      },
    ],
    link: "https://sushi-room.vercel.app/",
  },
];
