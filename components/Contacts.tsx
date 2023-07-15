"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CONTACTS_ITEMS } from "@/constants";

const Contacts = () => {
  return (
    <section id="contacts" className="w-full">
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
            CONTACTS
          </motion.h1>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 grid-rows-3 gap-5 mx-auto sm:mx-2 ">
            {CONTACTS_ITEMS.map((contact) => (
              <div className="flex flex-row items-center space-x-3">
                <Link
                  href={`${contact.link}`}
                  className="rounded-full p-5 bg-white shadow-lg"
                >
                  {contact.icon}
                </Link>
                <div>
                  <h1 className=" font-bold text-xl">{contact.title}</h1>
                  <Link href={`${contact.link}`} className=" text-gray-500">
                    {contact.text}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
