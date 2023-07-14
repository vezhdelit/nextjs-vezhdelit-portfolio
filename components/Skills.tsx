import React from "react";
import Icons from "./Icons";

type Props = {};

export const SKILLS_FRONTEND = [
  {
    title: "ReactJS",
    icon: <Icons.javascript className="object-fit w-10 h-10 mx-auto" />,
    bgColor: "#E7FAFF",
  },
  {
    title: "SaSS",
    icon: <Icons.sass className="object-fit w-10 h-10 mx-auto" />,
    bgColor: "#FFE4F2",
  },
  {
    title: "ReactJS",
    icon: <Icons.react className="object-fit w-10 h-10 mx-auto" />,
    bgColor: "#E7FAFF",
  },
];

function Skills({}: Props) {
  return (
    <section id="skills" className="w-full">
      <div className="max-w-5xl mx-auto py-8 md:py-24 px-3 lg:px-0">
        <div className="flex flex-col">
          <h1 className="w-fit text-3xl font-bold mb-12 bg-gradient-to-r from-purple-600 via-indigo-500 to-sky-400 bg-clip-text text-transparent">
            SKILLS
          </h1>
          <div className="grid grid-cols-3 gap-5">
            <div className=" bg-white rounded-xl shadow-md p-4">
              <h2 className="text-center  text-2xl font-bold ">Frontend</h2>
              <div className="grid grid-cols-3 gap-5 mx-auto p-4">
                {SKILLS_FRONTEND.map((skill) => {
                  return (
                    <div key={skill.title} className=" w-[72px] h-[72px]">
                      <div
                        className={`bg-[${skill.bgColor}] rounded-full p-4 flex flex-col`}
                      >
                        {skill.icon}
                      </div>

                      <h3 className="text-center">{skill.title}</h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
