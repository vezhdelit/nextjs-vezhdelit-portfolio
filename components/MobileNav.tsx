import Link from "next/link";
import React from "react";
import { MobileNavProps } from "@/types";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { useLockBody } from "@/hooks/useLockBody";

const MobileNav = ({ items, toggleShowMobileMenu }: MobileNavProps) => {
  useLockBody();

  return (
    <div className="fixed inset-0  bg-night bg-opacity-50 top-20  z-50 p-6 shadow-lg md:hidden">
      <motion.nav
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
        className="relative bg-white z-20 rounded-md px-20 py-32  shadow-md dark:bg-midnight dark:border dark:border-white space-y-4 "
      >
        {items.map((item) => (
          <ScrollLink
            key={item.title}
            to={item.id}
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            activeClass="active"
            activeStyle={{
              backgroundColor: "#6366f1",
              backgroundImage: "linear-gradient(90deg, #8000FF, #53DDFC)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "800",
            }}
            className="flex text-3xl font-medium hover: cursor-pointer mx-auto justify-center "
            onClick={toggleShowMobileMenu}
          >
            {item.title}
          </ScrollLink>
        ))}
      </motion.nav>
    </div>
  );
};

export default MobileNav;
