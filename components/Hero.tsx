import Image from "next/image";
import React from "react";
import { CustomButton } from "./ui";

const Hero = () => {
  return (
    <section id="hero" className="max-w-5xl mx-auto ">
      <div className="flex flex-col-reverse items-center  justify-between  py-5 md:flex-row md:py-32  px-5 lg:px-0">
        <div className="  max-w-lg">
          <h1 className="text-6xl font-extrabold">
            Front-End React Developer 👨‍💻❤️⚛️
          </h1>

          <p className=" text-xl text-gray-600 mt-5 dark:text-gray-300">
            Hi, I’m Vasyl. A passionate front-end developer from Uzhhgorod,
            Ukraine.📍
          </p>
          <div className="flex flex-row  justify-between mt-10">
            <CustomButton
              text="Download CV"
              className=" text-purple-600  border-2 border-purple-600  rounded-2xl text-xl font-bold min-w-[200px] md:min-w-[220px] min-h-[60px] "
            />
            <CustomButton
              text="Contact me"
              className=" text-white  bg-purple-600  rounded-2xl text-xl font-bold min-w-[200px] md:min-w-[220px]  min-h-[60px] "
            />
          </div>
        </div>

        <div>
          <Image
            src="/headshot.png"
            alt="headshot"
            width={396}
            height={396}
            className="rounded-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
