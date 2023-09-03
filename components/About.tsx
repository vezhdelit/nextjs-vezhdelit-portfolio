"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="w-full bg-white dark:bg-night">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between space-x-2 py-8 md:py-32 px-5 lg:px-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className=" hidden sm:flex"
        >
          <Image
            src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80"
            alt="headshot"
            width={420}
            height={420}
            className=" rounded-lg object-cover"
          />
        </motion.div>
        <div className="flex flex-col max-w-full sm:max-w-lg text-center md:text-left  space-y-4 lg:space-y-8">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            className="w-fit text-3xl font-bold bg-gradient-to-r from-purple-600 via-indigo-500 to-sky-400 bg-clip-text text-transparent"
          >
            ABOUT ME
          </motion.h1>
          <div className=" text-start space-y-4">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
              }}
              className="text-gray-600 text-2xl "
            >
              I am a skilled React frontend developer actively pursuing
              opportunities in web development. With a solid foundation in
              crafting intuitive user interfaces, I'm driven to enhance digital
              experiences.
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
              }}
              className="text-gray-600 text-2xl"
            >
              Committed to joining a dynamic team, I aim to contribute my
              expertise in creating seamless and visually appealing web
              applications.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
