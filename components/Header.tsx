"use client";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import Icons from "./Icons";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import useToggle from "../hooks/useToggle";
import { NAV_ITEMS } from "@/constants";

const Header = () => {
  const [showMobileMenu, toggleShowMobileMenu] = useToggle(false);
  return (
    <header className=" sticky top-0 p-5 w-full  z-20  shadow-lg shadow-lightshadow bg-white dark:bg-night dark:shadow-none">
      <nav className="md:items-center flex justify-between max-w-7xl mx-auto">
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
          }}
        >
          <ScrollLink
            key="Home"
            to="hero"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            className="flex flex-row items-center hover:cursor-pointer "
          >
            <Icons.logo className="dark:fill-white" width={38} height={38} />

            <div className="ml-1">
              <h2 className="text-lg font-bold leading-none">VEZHDEL.DEV</h2>
              <p className="font-light leading-none">websites & more</p>
            </div>
          </ScrollLink>
        </motion.div>

        <motion.div
          initial={{
            x: 500,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.4,
          }}
          className="flex flex-row items-center font-semibold text-xl space-x-8 "
        >
          <div className="hidden md:flex flex-row items-center font-semibold text-xl space-x-8">
            {NAV_ITEMS.map((item) => {
              return (
                <ScrollLink
                  key={item.title}
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={500}
                  activeClass="active"
                  className="hover:cursor-pointer hover:text-blue-500 active:translate-y-1"
                  activeStyle={{
                    backgroundColor: "#6366f1",
                    backgroundImage: "linear-gradient(90deg, #8000FF, #53DDFC)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: "800",
                  }}
                >
                  {item.title}
                </ScrollLink>
              );
            })}
          </div>
          <div className="flex flex-row items-center font-semibold text-xl space-x-4">
            <ThemeSwitch />
            <button
              className="bg-zinc-100 p-2 rounded-xl md:hidden"
              onClick={toggleShowMobileMenu}
            >
              {showMobileMenu ? (
                <Icons.close className="stroke-black w-38 h-38" />
              ) : (
                <Icons.burger className="stroke-black" />
              )}
            </button>
          </div>
        </motion.div>

        {showMobileMenu && (
          <MobileNav
            items={NAV_ITEMS}
            toggleShowMobileMenu={toggleShowMobileMenu}
          />
        )}
      </nav>
    </header>
  );
};

export default Header;
