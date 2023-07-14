import Image from "next/image";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <section id="about" className="w-full bg-white dark:bg-night">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between space-x-2 py-8 md:py-32 px-5 lg:px-0">
        <div className=" hidden sm:flex">
          <Image
            src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80"
            alt="headshot"
            width={420}
            height={420}
            className=" rounded-lg object-cover"
          />
        </div>
        <div className="flex flex-col max-w-full sm:max-w-lg text-center md:text-left  space-y-4 lg:space-y-8">
          <h1 className="w-fit text-3xl font-bold bg-gradient-to-r from-purple-600 via-indigo-500 to-sky-400 bg-clip-text text-transparent">
            ABOUT ME
          </h1>
          <div className=" text-start space-y-4">
            <p className="text-gray-600 text-2xl ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nihil
              vitae, perferendis, doloribus temporibus ducimus magni amet quae
            </p>
            <p className="text-gray-600 text-2xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Dignissimos earum a porro non inventore nam nulla nemo sint.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
