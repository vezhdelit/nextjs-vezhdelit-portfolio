"use client";
import React from "react";
import Image from "next/image";
import { SKILLS_BACKEND, SKILLS_FRONTEND, SKILLS_OTHER } from "@/constants";
import { motion } from "framer-motion";

type Props = {};

function Skills({}: Props) {
  return (
    <section id="skills" className="w-full">
      <div className="max-w-5xl mx-auto py-8 md:py-24 px-3 lg:px-0">
        <div className="flex flex-col">
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
            className="w-fit text-3xl font-bold bg-gradient-to-r from-purple-600 via-indigo-500 to-sky-400 bg-clip-text text-transparent"
          >
            SKILLS
          </motion.h1>
          <div className="mt-12 grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
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
                hidden: { y: 500, opacity: 0 },
              }}
              className=" bg-white dark:bg-night rounded-xl shadow-md p-4"
            >
              <h2 className="text-center  text-2xl font-bold m-4">Front-End</h2>
              <div className="grid grid-cols-2 gap-5 mx-auto p-4">
                {SKILLS_FRONTEND.map((skill) => {
                  return (
                    <div
                      key={skill.title}
                      className=" justify-center items-center hover:cursor-pointer hover:scale-105"
                    >
                      <div className={`flex flex-col`}>
                        <Image
                          src={skill.path}
                          alt={skill.title}
                          width={52}
                          height={52}
                          className="mx-auto "
                        />
                      </div>

                      <h3 className="text-center">{skill.title}</h3>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.1,
              }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 500, opacity: 0 },
              }}
              className=" bg-white dark:bg-night rounded-xl shadow-md p-4"
            >
              <h2 className="text-center  text-2xl font-bold m-4">Back-End</h2>
              <div className="grid grid-cols-2 gap-5 mx-auto p-4">
                {SKILLS_BACKEND.map((skill) => {
                  return (
                    <div
                      key={skill.title}
                      className=" justify-center items-center hover:cursor-pointer hover:scale-105"
                    >
                      <div className={`flex flex-col`}>
                        <Image
                          src={skill.path}
                          alt={skill.title}
                          width={52}
                          height={52}
                          className="mx-auto "
                        />
                      </div>

                      <h3 className="text-center">{skill.title}</h3>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.2,
              }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 500, opacity: 0 },
              }}
              className=" bg-white dark:bg-night rounded-xl shadow-md p-4"
            >
              <h2 className="text-center  text-2xl font-bold m-4">Other</h2>
              <div className="grid grid-cols-2 gap-5 mx-auto p-4">
                {SKILLS_OTHER.map((skill) => {
                  return (
                    <div
                      key={skill.title}
                      className=" justify-center items-center hover:cursor-pointer hover:scale-105"
                    >
                      <div className={`flex flex-col`}>
                        <Image
                          src={skill.path}
                          alt={skill.title}
                          width={52}
                          height={52}
                          className="mx-auto "
                        />
                      </div>

                      <h3 className="text-center">{skill.title}</h3>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
