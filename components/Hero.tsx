"use client";
import Image from "next/image";
import React from "react";
import { CustomButton } from "./ui";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="max-w-5xl mx-auto ">
      <div className="flex flex-col-reverse items-center  justify-between  py-8 md:flex-row md:py-32  px-5 lg:px-0">
        <div className=" max-w-full sm:max-w-lg text-center md:text-left  space-y-6 md:space-y-8 ">
          <motion.h1
            initial={{
              x: -500,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.4,
              delay: 0.2,
            }}
            className="text-5xl font-extrabold md:text-6xl"
          >
            Front-End React Developer👋
          </motion.h1>
          <motion.p
            initial={{
              x: -500,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.4,
              delay: 0.1,
            }}
            className="text-xl text-gray-600 dark:text-gray-300"
          >
            Hi, I’m Vasyl. A passionate front-end developer from Uzhhgorod,
            Ukraine.📍
          </motion.p>

          <motion.div
            initial={{
              x: -500,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.4,
              delay: 0,
            }}
            className="flex space-x-6 justify-center md:justify-normal"
          >
            <CustomButton
              text="Download CV"
              className=" w-full max-w-[220px] min-h-[60px] rounded-2xl gradient-color   border-2 border-indigo-400  group active:translate-y-1"
              textStyles="bg-gradient-to-r from-purple-600 via-indigo-500 to-sky-400 bg-clip-text text-transparent text-xl font-bold group-hover:bg-gradient-to-br group-hover:font-extrabold"
            />

            <CustomButton
              text="Contact me"
              className=" bg-gradient-to-r hover:bg-gradient-to-br  active:translate-y-1 from-purple-600 via-indigo-500 to-sky-400 text-white   rounded-2xl text-xl font-bold w-full max-w-[220px] min-h-[60px] "
            />
          </motion.div>
        </div>

        <motion.div
          initial={{
            rotate: -45,
            scale: 0,
            opacity: 0,
          }}
          animate={{
            rotate: 0,
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.4,
            delay: 0,
          }}
          className="max-md:w-60 max-md:h-60 mb-6 sm:my-6"
        >
          <Image
            src="/images/headshot.png"
            alt="headshot"
            width={396}
            height={396}
            className="rounded-full object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
