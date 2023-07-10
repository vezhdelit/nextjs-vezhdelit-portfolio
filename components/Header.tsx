"use client";
import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import Icons from "./Icons";
import { NavItem } from "@/types";
import MobileNav from "./MobileNav";

const NAV_ITEMS: Array<NavItem> = [
  {
    title: "Home",
    page: "home",
  },
  {
    title: "About",
    page: "about",
  },
  {
    title: "Projects",
    page: "projects",
  },
  {
    title: "Contacts",
    page: "contacts",
  },
];

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  return (
    <header className="sticky top-0 p-5 w-full  z-20  shadow-lg shadow-lightshadow bg-white dark:bg-night dark:shadow-none">
      <nav className="md:items-center flex justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex flex-row items-center">
          <Icons.logo className="dark:fill-white" width={38} height={38} />

          <div className="ml-1">
            <h2 className="text-lg font-bold leading-none">VEZHDEL.DEV</h2>
            <p className="font-light leading-none">websites & more</p>
          </div>
        </Link>
        <div className="flex flex-row items-center font-semibold text-xl space-x-8">
          <div className="hidden md:flex flex-row items-center font-semibold text-xl space-x-8">
            {NAV_ITEMS.map((item) => {
              return (
                <Link key={item.title} href="">
                  {item.title}
                </Link>
              );
            })}
          </div>
          <div className="flex flex-row items-center font-semibold text-xl space-x-4">
            <ThemeSwitch />
            <button
              className="bg-zinc-100 p-2 rounded-xl md:hidden"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? (
                <Icons.close className="stroke-black w-38 h-38" />
              ) : (
                <Icons.burger className="stroke-black" />
              )}
            </button>
          </div>
        </div>
        {showMobileMenu && <MobileNav items={NAV_ITEMS} />}
      </nav>
    </header>
  );
};

export default Header;
