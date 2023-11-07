"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CONTACTS_ITEMS } from "@/constants";
import Image from "next/image";

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
              duration: 0.5,
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
              <div
                key={contact.title}
                className="flex flex-row items-center space-x-3"
              >
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2,
                  }}
                  variants={{
                    visible: { scale: 1, opacity: 1 },
                    hidden: { scale: 0, opacity: 0 },
                  }}
                  className="flex"
                >
                  <a
                    href={`${contact.link}`}
                    className="rounded-full p-4 bg-white shadow-lg"
                  >
                    <Image
                      src={contact.icon}
                      alt={contact.title}
                      width={28}
                      height={28}
                    />
                  </a>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2,
                  }}
                  variants={{
                    visible: { x: 0, opacity: 1 },
                    hidden: { x: -50, opacity: 0 },
                  }}
                >
                  <h1 className=" font-bold text-xl">{contact.title}</h1>
                  <Link href={`${contact.link}`} className=" text-gray-500">
                    {contact.text}
                  </Link>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
