"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Icons from "./Icons";
import { Button, buttonVariants } from "@/components/ui/Button";

import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="hero" className="max-w-5xl mx-auto ">
      <div className="flex flex-col-reverse items-center  justify-between  py-8 md:flex-row md:py-28  px-5 lg:px-0">
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
            <Button
              size={"xl"}
              variant="gradientOutline"
              active={"pressDown"}
              className="group w-full "
              asChild
            >
              <Link
                href={
                  "https://drive.google.com/file/d/12A3a-WwAKPjbW7N3t4fu_udzlWLTMf-B/view?usp=drive_link"
                }
                rel="noopener noreferrer"
                target="_blank"
              >
                <h4 className="bg-gradient-to-r from-purple-600 via-indigo-500 to-sky-400 bg-clip-text text-transparent  text-xl  font-bold group-hover:bg-gradient-to-br group-hover:font-extrabold">
                  Download CV
                </h4>
                <Icons.download className="hidden sm:flex ml-2 mb-[2px] w-5 h-5 fill-sky-500 group-hover:w-[21px] group-hover:h-[21px]" />
              </Link>
            </Button>
            <Button
              size={"xl"}
              variant={"gradient"}
              active={"pressDown"}
              className="group w-full hover:cursor-pointer"
              asChild
            >
              <ScrollLink
                key="Contacts"
                to="contacts"
                spy={true}
                smooth={true}
                offset={-400}
                duration={2000}
              >
                <h4 className=" text-xl font-bold">Contact me</h4>
                <Icons.message className="hidden sm:flex ml-2 w-6 h-6" />
              </ScrollLink>
            </Button>
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
