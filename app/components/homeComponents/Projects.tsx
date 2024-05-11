import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <section className="h-[100vh] relative text-black mt-28 sm:mt-40 md:mt-60 xl:mt-80">
      <div className="flex flex-row-reverse items-center  justify-center sm:justify-start sm:m-0 gap-8 sm:mr-[20%] md:mr-[20%] lg:mr-[20%] xl:mr-[23%] 2xl:mr-[26%]">
        <h2 className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl  font-bold z-10">
          Projects
        </h2>
        <Image
          src={"/images/arrow.svg"}
          alt="arrow"
          height={100}
          width={100}
          className="w-40 rotate-180 lg:w-52 xl:w-64 z-10"
        />
      </div>
    </section>
  );
};

export default Projects;
