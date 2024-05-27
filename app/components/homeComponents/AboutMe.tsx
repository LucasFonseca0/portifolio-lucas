"use client"

import TranslateAnimation from "@/app/animation/TranslateAnimation.animation";
import Image from "next/image";
import { useTranslation, Trans } from 'react-i18next';

const responsiveAboutMeBackground =
  " h-16 w-40 sm:h-20 sm:w-48 md:h-24 md:w-64 lg:h-28 lg:w-72 xl:h-30 xl:w-80 2xl:h-32 2xl:w-96";
const responsiveAboutMeText =
  " text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl";

const AboutMe = () => {
  const { t } = useTranslation();

  const Dots = () => (
    <div className="grid grid-rows-2 grid-flow-col  gap-2  md:gap-3 lg:gap-4 absolute right-[15%] md:right-[15%] bottom-[-4%] sm:bottom-[-6%] md:bottom-[-7%] lg:bottom-[-13%] xl:bottom-[-6%] xl:right-[17%] 2xl:right-[25%]">
      {[...Array(2)].map((_, index) => (
        <div key={index} className="flex gap-3  md:gap-4 lg:gap-6">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="w-1 h-1 md:w-[6px] md:h-[6px] lg:w-2 lg:h-2 bg-primaryDarkest rounded-full opacity-50"
            ></div>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <section className="relative">
      <div className="w-full h-[11vh] relative bg-primary rounded-ee-[100px]">

          <h2
            className={`absolute top-[100%] ${responsiveAboutMeBackground} ${responsiveAboutMeText} -translate-y-1/2 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-[15%]  rounded-b-[60px] rounded-t-[20px] bg-black flex justify-center items-center  text-primaryDarkest font-bold `}
          >
            <TranslateAnimation.TranslateUp>
              {t('about_me')}
              </TranslateAnimation.TranslateUp>
          </h2>
    
      </div>
     
        <Image
          src={"/images/orangeCircle.svg"}
          alt="orange circle"
          width={77}
          height={77}
          className={
            " absolute right-0 z-0 w-10 top-[14%] sm:w-12 md:w-16 sm:top-[18%] xl:w-20 xl:top-[20%]"
          }
        ></Image>
   
      <div className="pt-[11vh] sm:pl-[15%] relative flex flex-col sm:flex-row text-black items-center ">
        <TranslateAnimation.TranslateRight>
          <Image
            src={"/images/photo2.svg"}
            alt="lucas image"
            width={427}
            height={427}
            className={
              "z-10 w-[75%] m-auto max-w-96 sm:w-48 md:w-64 lg:w-72 xl:w-80 2xl:w-96"
            }
          ></Image>
        </TranslateAnimation.TranslateRight>
        <TranslateAnimation.TranslateLeft>
          <div className="[&>span]:text-secondary m-auto z-10  w-[80%] mt-6 sm:mt-0 font-bold text-base md:text-sm sm:text-xs lg:text-lg 2xl:text-2xl sm:w-[40%] sm:ml-[10%]">
            <Trans i18nKey="about_me_text" components={{ 1: <span />, 2: <br />,3:<span className="text-primaryDarkest"/> }} />
          </div>
        </TranslateAnimation.TranslateLeft>
        <Dots />
      </div>
    </section>
  );
};

export default AboutMe;
