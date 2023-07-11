import Link from "next/link";
import React from "react";
import { MobileNavProps } from "@/types";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const MobileNav = ({ items, toggleShowMobileMenu }: MobileNavProps) => {
  return (
    <div className="fixed inset-0  bg-night bg-opacity-70 top-20  z-50 p-6 shadow-lg md:hidden">
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
        className="relative bg-white z-20 rounded-md p-12  shadow-md dark:bg-midnight space-y-4 "
      >
        {items.map((item) => (
          <ScrollLink
            key={item.title}
            to={item.id}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="flex text-xl font-medium hover: cursor-pointer"
            onClick={toggleShowMobileMenu}
          >
            <h1 className="ml-auto"> {item.title}</h1>
          </ScrollLink>
        ))}
      </motion.nav>
    </div>
  );
};

export default MobileNav;
