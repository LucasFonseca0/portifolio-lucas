"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Pagination]);

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
      <div className="flex mt-40 h-96 ">
        <div className="w-[20%] flex justify-center items-center">
          <Dots />
        </div>
        <div className="w-[80%] relative">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="z-50 top-1/2 -translate-y-1/2 h-60  [&>*>img]:block [&>*>img]:object-cover [&>*>img]:w-full [&>*>img]:text-secondary"
          >
            <SwiperSlide >
              <div className="flex flex-col gap-4">
                <Image alt="Project image" src={"/"} width={400} height={500} className="h-40  bg-primary"/>
                  
                <p className="font-semibold italic">Project Name</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
