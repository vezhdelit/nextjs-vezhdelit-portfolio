"use client";
import Image from "next/image";
import React from "react";
import { isEven } from "@/utils";
import { PROJECT_ITEMS } from "@/constants";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import Icons from "./Icons";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-white dark:bg-night">
      <div className="max-w-5xl mx-auto py-8 md:py-24 px-3 lg:px-0">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: 0.2,
          }}
          variants={{
            visible: { scale: 1, opacity: 1 },
            hidden: { scale: 0, opacity: 0 },
          }}
          className="w-fit text-3xl font-bold mb-12 bg-gradient-to-r from-purple-600 via-indigo-500 to-sky-400 bg-clip-text text-transparent"
        >
          PROJECTS
        </motion.h1>

        <div className="flex flex-col space-y-28">
          {PROJECT_ITEMS.map((project, idx) => {
            return (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 0,
                }}
                variants={{
                  visible: { y: 0, opacity: 1 },
                  hidden: { y: 300, opacity: 0 },
                }}
                key={project.title}
              >
                <div
                  className={`flex ${
                    isEven(idx)
                      ? "md:flex-row"
                      : "md:flex-row-reverse md:space-x-reverse"
                  } flex-col  items-center justify-center  md:space-x-6 space-y-6 `}
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
                  <div className=" md:w-1/2 space-y-2  lg:space-y-2">
                    <h1 className=" text-3xl font-bold text-center">
                      {project.title}
                    </h1>
                    <p className="text-gray-600 text-2xl text-center">
                      {project.description}
                    </p>
                    <div className="flex space-x-6  justify-center">
                      {project.tech.map((tech) => {
                        return (
                          <div key={tech}>
                            <Image
                              src={tech}
                              alt="tech-logo"
                              width={40}
                              height={40}
                            />
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex space-x-6 justify-center  pt-8">
                      <Button
                        size={"xl"}
                        variant="gradientOutline"
                        active={"pressDown"}
                        className="group w-full "
                        asChild
                      >
                        <Link
                          href={`${project.codeLink}`}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <h4 className="bg-gradient-to-r from-purple-600 via-indigo-500 to-sky-400 bg-clip-text text-transparent text-xl font-bold group-hover:bg-gradient-to-br group-hover:font-extrabold">
                            Code
                          </h4>
                          <Icons.github className=" ml-2 mb-[2px] w-5 h-5 fill-sky-400 group-hover:w-[21px] group-hover:h-[21px]" />
                        </Link>
                      </Button>
                      <Button
                        size={"xl"}
                        variant={"gradient"}
                        active={"pressDown"}
                        className="group w-full"
                        asChild
                      >
                        <Link
                          href={`${project.link}`}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <h4 className=" text-xl font-bold">Demo</h4>
                          <Icons.redirect className="fill-white ml-2 w-5 h-5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
