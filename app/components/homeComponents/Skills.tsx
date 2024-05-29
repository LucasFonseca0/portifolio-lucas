"use client";

import TranslateAnimation from "@/app/animation/TranslateAnimation.animation";
import SkillsSVG from "@/app/SVGs/SkillsSVG";
import Image from "next/image";

const logoNames: LogoName[] = [
  "typescript",
  "next",
  "c#",
  "react",
  ".net",
  "database",
  "nodeJS",
  "docker",
  "nest",
  "git",
];

const Skills = () => (
  <section className="relative text-black mt-40">
    <Image
      src="/images/orangeCircle.svg"
      alt="orange circle"
      width={77}
      height={77}
      className="absolute left-0 rotate-180 z-0 w-8 top-[20%] sm:top-[50%] sm:w-12 md:w-16 xl:w-20"
    />
    <div className="flex flex-col sm:ml-[20%] md:ml-[20%] lg:ml-[20%] xl:ml-[23%] 2xl:ml-[26%]">
      <div className="flex items-center m-auto sm:m-0 gap-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold z-10">
          Skills
        </h2>
        <TranslateAnimation.TranslateLeft>
          <Image
            src="/images/arrow.svg"
            alt="arrow"
            height={100}
            width={100}
            className="w-40 lg:w-52 xl:w-64 z-10"
          />
        </TranslateAnimation.TranslateLeft>
      </div>
      <Image
        src="/images/skillsBackgroundLines.svg"
        alt="background"
        height={100}
        width={100}
        className="absolute hidden sm:block right-0 z-0 sm:w-48 md:w-56 lg:w-72 xl:w-96 top-10"
      />
      <div className="flex z-10 justify-center items-center sm:justify-start mt-20">
        <div className="grid grid-rows-2 grid-flow-col gap-3 w-80 sm:w-80 lg:w-auto lg:gap-5">
          {logoNames.map((logoName, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <SkillsSVG
                logoName={logoName}
                className="w-8 h-8 sm:w-14 sm:h-14 lg:w-20 lg:h-20"
              />
              <p className="text-xs mt-1 text-center font-bold">
                {logoName.charAt(0).toUpperCase() + logoName.slice(1)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
