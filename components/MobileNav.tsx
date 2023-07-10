import Link from "next/link";
import React from "react";
import { MobileNavProps } from "@/types";

const MobileNav = ({ items }: MobileNavProps) => {
  return (
    <div className="fixed inset-0  bg-night bg-opacity-70 top-20  z-50 p-6 shadow-lg md:hidden">
      <nav className="relative bg-white z-20 rounded-md p-12  shadow-md dark:bg-midnight space-y-4">
        {items.map((item, index) => (
          <Link key={index} href="" className="flex text-xl font-medium">
            <h1 className="ml-auto"> {item.title}</h1>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MobileNav;
