import React from "react";
import TranslateLeft from "../../animation/TranslateLeft.animation";

import SkillsSVG from "../../SVGs/SkillsSVG";
import TranslateRight from "../../animation/TranslateRight";
import AutoSlider from "../skillsCOmponents/autoSlider";

const Skills = () => {
  return (
    <section >
      <h2 className="text-2xl sm:text-3xl md:text-5xl relative flex justify-center font-extrabold">
        <span className="absolute inset-0 bg-pastel h-1/2 -z-10"></span>
        <span className="absolute  right-0 w-[37%] md:w-[40%] h-1/2 -z-10 flex justify-center items-center  translate-y-[50%] ">
          <span className="h-1 w-full bg-secondary"></span>
        </span>
        <span className="absolute left-0 w-[37%] md:w-[40%] h-1/2 -z-10 flex justify-center items-center  translate-y-[50%] ">
          <span className="h-1 w-full bg-secondary"></span>
        </span>
        SKILLS
      </h2>
      <div className=" w-full ">
        <h3 className="text-xl pl-4 pt-4">HardSkils</h3>
        <AutoSlider/>
        
        
      </div>
    </section>
  );
};

export default Skills;