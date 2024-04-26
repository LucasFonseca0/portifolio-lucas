import React from "react";
import TranslateLeft from "../animation/TranslateLeft.animation";

import SkillsSVG from "../SVGs/SkillsSVG";
import TranslateRight from "../animation/TranslateRight";

const Skills = () => {
  return (
    <section>
      <h2 className="text-2xl sm:text-3xl md:text-5xl relative flex justify-center font-extrabold">
        <span className="absolute inset-0 bg-pastel h-1/2 -z-10"></span>
        <span className="absolute  right-0 w-[40%] h-1/2 -z-10 flex justify-center items-center  translate-y-[50%] ">
          <span className="h-1 w-full bg-secondary"></span>
        </span>
        <span className="absolute left-0 w-[40%] h-1/2 -z-10 flex justify-center items-center  translate-y-[50%] ">
          <span className="h-1 w-full bg-secondary"></span>
        </span>
        SKILLS
      </h2>
      <div className=" w-full flex flex-col [&>div]:flex [&>div]:gap-1 [&>div]:items-center [&>div]:w-full  [&>*:nth-child(odd)]:flex-row-reverse">
        <div>
          <TranslateRight>
            <SkillsSVG logoName="typescript" className="w-10 h-full" />
          </TranslateRight>
          <TranslateRight>
            <p>Typescript</p>
          </TranslateRight>
        </div>
        <div>
          <TranslateLeft>
            <SkillsSVG logoName="next" className="w-10 h-full" />
          </TranslateLeft>
          <TranslateLeft>
            <p>NextJS</p>
          </TranslateLeft>
        </div>
        <div>
          <TranslateRight>
            <SkillsSVG logoName="tailwind" className="w-10 h-full" />
          </TranslateRight>{" "}
          <TranslateRight>
            <p>Tailwind CSS</p>
          </TranslateRight>
        </div>
        <div>
          <TranslateLeft>
            <SkillsSVG logoName="nest" className="w-10 h-full" />
          </TranslateLeft>
          <TranslateLeft>
            <p>NestJS</p>
          </TranslateLeft>
        </div>
        <div>
          <TranslateRight>
            <SkillsSVG logoName="database" className="w-10 h-full" />
          </TranslateRight>{" "}
          <TranslateRight>
            <p>Databases SQL and noSQL</p>
          </TranslateRight>
        </div>
      </div>
    </section>
  );
};

export default Skills;
