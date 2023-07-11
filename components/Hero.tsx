import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="max-w-5xl mx-auto ">
      <div className="flex flex-col items-center  justify-between md:flex-row py-32  px-5 md:px-0">
        <div className=" w-full max-w-xl ">
          <h1 className="text-6xl font-extrabold">Front-End React</h1>
          <h1 className="text-6xl font-extrabold">Developer👨‍💻❤️⚛️</h1>
          <p className=" text-xl text-gray-600 mt-5 dark:text-gray-300">
            Hi, I’m Vasyl. A passionate front-end developer from Uzhhgorod,
            Ukraine.📍
          </p>
        </div>

        <div>
          <Image
            src="/headshot.png"
            alt="headshot"
            width={396}
            height={396}
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
