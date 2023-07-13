import Image from "next/image";
import React from "react";
import { CustomButton } from "./ui";
import Icons from "./Icons";
import { isEven, isOdd } from "@/utils";

const projects = [
  {
    title: "SUSHI ROOM",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur facere quas expedita omnis, et dolor recusandae dolores cum!",
    image:
      "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1088&q=80",
    technologies: ["react", "sass", "redux", "express"],
    link: "https://sushi-room.vercel.app/",
  },
  {
    title: "SUSHI ROOM",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur facere quas expedita omnis, et dolor recusandae dolores asperiores!",
    image:
      "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1088&q=80",
    technologies: [],
    link: "https://sushi-room.vercel.app/",
  },
  {
    title: "SUSHI ROOM",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur facere quas expedita omnis, et dolor recusandae dolores asperiores!",
    image:
      "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1088&q=80",
    technologies: [],
    link: "https://sushi-room.vercel.app/",
  },
];
const Projects = () => {
  return (
    <section id="projects" className="w-full bg-white dark:bg-night">
      <div className="max-w-5xl mx-auto ">
        <h1 className=" text-3xl font-bold ">PROJECTS</h1>
        <div className="flex flex-col space-y-28">
          {projects.map((project, idx) => {
            return (
              <div key={project.title}>
                <div
                  className={`flex ${
                    isEven(idx) ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col   md:flex-row md:space-x-12 items-center`}
                >
                  <div className="md:w-1/2">
                    <Image
                      src={project.image}
                      alt=""
                      width={500}
                      height={500}
                      className=" rounded-xl shadow-xl hover:opacity-90"
                    />
                  </div>
                  <div className="md:w-1/2 ">
                    <h1 className=" text-3xl font-bold ">{project.title}</h1>
                    <p className="text-gray-600 text-2xl">
                      {project.description}
                    </p>
                    <div className="flex max-h-11 space-x-4">
                      {project.technologies.map((tech) => {
                        return <div>{tech}</div>;
                      })}
                    </div>
                    <div className="flex space-x-6 justify-center md:justify-normal">
                      <CustomButton
                        text="Source Code"
                        className=" w-full max-w-[220px] min-h-[60px] rounded-2xl gradient-color   border-2 border-indigo-400  group active:translate-y-1"
                        textStyles="bg-gradient-to-r from-purple-600 via-indigo-500 to-sky-400 bg-clip-text text-transparent text-xl font-bold group-hover:bg-gradient-to-br group-hover:font-extrabold"
                      />

                      <CustomButton
                        text="Live Demo"
                        className=" bg-gradient-to-r hover:bg-gradient-to-br  active:translate-y-1 from-purple-600 via-indigo-500 to-sky-400 text-white   rounded-2xl text-xl font-bold w-full max-w-[220px] min-h-[60px] "
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
