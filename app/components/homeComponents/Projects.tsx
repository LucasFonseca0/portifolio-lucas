"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useTranslation } from "react-i18next";
import TranslateAnimation from "@/app/animation/TranslateAnimation.animation";

const Projects = () => {
const { t } = useTranslation(); 


  const projectList: ProjectsInterface[] = [
    {
        title: t('hotelHopper_title'),
        description: t('hotelHopper_description'),
        imageUrl: "/projectImages/hotelHopper.png",
        link: "https://github.com/LucasFonseca0/HotelHopper",
        tecnologies: ["NestJS", "MongoDB", "Next.js", "TypeScript", "Tailwind CSS", "Next UI", "Zod"],
        isInDevelopment: false
    },
    {
        title: t('authSystem_title'),
        description: t('authSystem_description'),
        imageUrl: "/projectImages/yummi.png",
        link: "https://github.com/LucasFonseca0/AuthSystem-RefreshJWTtoken-GoogleAuth-EmailVerification",
        tecnologies: ["NestJS", "graphQL", "MongoDB", "Next.js", "TypeScript", "Tailwind CSS", "Zod", "NextAuth", "nodeMailer"],
        isInDevelopment: false
    },
    {
        title: t('inventoryApp_title'),
        description: t('inventoryApp_description'),
        imageUrl: "/projectImages/StockManager.png",
        link: "https://github.com/LucasFonseca0/inventory-management-app",
        tecnologies: ["NestJS", "MongoDB", "Next.js", "TypeScript", "bootstrap CSS", "Zod"],
        isInDevelopment: false
    },
    {
        title: t('dotNetLibrary_title'),
        description: t('dotNetLibrary_description'),
        imageUrl: "/projectImages/DotNetLibrary-RestfulAPI-SQL-server.svg",
        link: "https://github.com/LucasFonseca0/DotNetLibrary-RestfulAPI-SQL-server",
        tecnologies: ["C#", "APS.net8", "Entity Framework", "SQL server"],
        isInDevelopment: false
    },
    {
        title: t('consoleJob_title'),
        description: t('consoleJob_description'),
        imageUrl: "",
        link: "https://github.com/Marcos9868/devjobsbackend",
        tecnologies: ["C#", "APS.net8", "Entity Framework", "Postgresql", "Angular 17"],
        isInDevelopment: true
    },
]
  const [selectedId, setSelectedId] = useState<null | number>(null);

  const Dots = () => (
    <div className="grid grid-cols-2 w-10 gap-2 md:gap-3 lg:gap-4">
      {[...Array(2)].map((_, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-3 md:gap-4 lg:gap-6">
          {[...Array(6)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="w-1 h-1 md:w-[6px] md:h-[6px] lg:w-2 lg:h-2 bg-primaryDarkest rounded-full opacity-60"
            ></div>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <section
      className={`relative text-black mt-28 sm:mt-40 md:mt-60 xl:mt-80 ${
        selectedId !== null ? "pointer-events-none" : ""
      }`}
    >
      <div className="flex flex-row-reverse items-center justify-center sm:justify-start sm:m-0 gap-6 sm:gap-8 sm:mr-[20%] md:mr-[20%] lg:mr-[20%] xl:mr-[23%] 2xl:mr-[26%]">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold z-10">
          {t("projects")}
        </h2>
        <TranslateAnimation.TranslateRight>
          <Image
            src="/images/arrow.svg"
            alt="arrow"
            height={100}
            width={100}
            className="w-40 rotate-180 lg:w-52 xl:w-64 z-10"
          />
        </TranslateAnimation.TranslateRight>
      </div>
      <div className="flex mt-16 md:mt-24 lg:mt-28">
        <div className="w-[20%] flex justify-center items-center">
          <Dots />
        </div>
        <div className="w-[80%] relative">
          <Swiper
            slidesPerView={1.65}
            spaceBetween={15}
            loop={true}
            breakpoints={{
              1024: {
                slidesPerView: 2.5,
              },
            }}
            className="z-50 top-1/2 -translate-y-1/2 h-auto"
          >
            {projectList &&
              projectList.map((data, index) => (
                <SwiperSlide key={index} onClick={() => setSelectedId(index)}>
                  <motion.div layoutId={`card-${index}`} className="relative">
                    {data.imageUrl.length > 0 ? (
                      <motion.div
                        layoutId={`image-${index}`}
                        className="relative"
                        style={{ paddingTop: "80%" }}
                      >
                        <Image
                          alt="Project image"
                          src={data.imageUrl}
                          fill
                          style={{ objectFit: "cover" }}
                          className="w-full h-full bg-primary"
                        />
                      </motion.div>
                    ) : (
                      <div
                        className="relative bg-secondary flex items-center justify-center text-white"
                        style={{ paddingTop: "80%" }}
                      >
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-[65%] sm:text-md md:text-lg lg:text-xl xl:text-2xl">
                          In Development
                        </div>
                      </div>
                    )}
                    <p className="font-semibold text-[85%]  sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                      {data.title}
                    </p>
                  </motion.div>
                </SwiperSlide>
              ))}
          </Swiper>

          <AnimatePresence>
            {selectedId !== null && (
              <motion.div
                layoutId={`card-${selectedId}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 flex items-center justify-center z-50 pointer-events-auto"
                onClick={() => setSelectedId(null)}
              >
                <motion.div
                  className="bg-white p-8 rounded-lg shadow-lg w-11/12 sm:w-[70%] md:w-1/2 lg:w-[40%] max-h-full overflow-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative">
                    {projectList[selectedId]?.imageUrl.length > 0 && (
                      <motion.div
                        layoutId={`image-${selectedId}`}
                        className="relative pt-[80%]"
                      >
                        <Image
                          alt="Project image"
                          src={projectList[selectedId].imageUrl}
                          fill
                          style={{ objectFit: "cover" }}
                          className="absolute top-0 left-0 w-full h-auto bg-primary"
                        />
                      </motion.div>
                    )}
                    <motion.h5 className="text-lg font-bold mt-4">
                      {projectList[selectedId]?.title}
                    </motion.h5>
                    <motion.p className="mt-4">
                      {projectList[selectedId]?.description}
                    </motion.p>
                    <motion.p className="mt-4">
                      <span className="font-bold">Technologies:</span>{" "}
                      {projectList[selectedId]?.tecnologies.join(", ")}
                    </motion.p>
                    {projectList[selectedId]?.isInDevelopment && (
                      <motion.p className="mt-4">{'In Development'}</motion.p>
                    )}
                    <div className="flex justify-end gap-4">
                      <motion.button
                        className="mt-8 px-4 py-2 bg-secondary text-white rounded-full"
                        onClick={() => setSelectedId(null)}
                      >
                        Close
                      </motion.button>
                      <motion.a
                        target="_blank"
                        href={projectList[selectedId]?.link}
                        className="mt-8 px-4 py-2 bg-primaryDark text-white font-bold rounded-full"
                      >
                        Project Link
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
