"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import projectList from "@/app/utils/ProjectsList";




const Projects = () => {
  const Dots = () => (
    <div className="grid grid-cols-2 w-10  gap-2  md:gap-3 lg:gap-4">
      {[...Array(2)].map((_, index) => (
        <div key={index} className="flex flex-col gap-3  md:gap-4 lg:gap-6">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="w-1 h-1 md:w-[6px] md:h-[6px] lg:w-2 lg:h-2 bg-primaryDarkest rounded-full opacity-60"
            ></div>
          ))}
        </div>
      ))}
    </div>
  );



  return (
    <section className="h-[100vh] relative text-black mt-28 sm:mt-40 md:mt-60 xl:mt-80">
      <div className="flex flex-row-reverse items-center  justify-center sm:justify-start sm:m-0 gap-6 sm:gap-8 sm:mr-[20%] md:mr-[20%] lg:mr-[20%] xl:mr-[23%] 2xl:mr-[26%]">
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
      <div className="flex mt-28 h-96 ">
        <div className="w-[20%] flex justify-center items-center">
          <Dots />
        </div>
        <div className="w-[80%] relative">
          <Swiper
            slidesPerView={2.5}
            spaceBetween={15}
            loop={true}
            className="z-50 top-1/2 -translate-y-1/2 h-auto  [&>*>img]:block [&>*>img]:object-cover  [&>*>img]:text-secondary"
          >
            
            {
              projectList && projectList.map((data,index)=><SwiperSlide >
              <div className="flex flex-col gap-4" key={index}>
                {data.imageUrl.length > 0 && <Image alt="Project image" src={data.imageUrl} width={400} height={500} className="h-20 sm:h-28 md:h-36 lg:h-44 xl:h-52 2xl:h-72 3xl:h-80  w-full  bg-primary"/>}
                {data.isInDevelopment && <div className="h-20 sm:h-28 md:h-36 lg:h-44 xl:h-52 2xl:h-72 3xl:h-80 bg-secondary flex items-center justify-center text-white text-[65%] sm:text-md md:text-lg lg:text-xl xl:text-2xl ">Is inDevelopment</div>}
                <p className="font-semibold italic text-[65%] sm:text-md md:text-lg lg:text-xl xl:text-2xl">{data.title}</p>
              </div>
            </SwiperSlide>)
            }
          
          
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
