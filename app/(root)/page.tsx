"use client"
import { Avatar } from "@nextui-org/react";
import { ParticleBackground } from "../components/particle";
import { useTranslation, Trans } from 'react-i18next';
import i18n from "../../i18n"
import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import Image from "next/image";


export default function Home() {
  const { t } = useTranslation();

  const [lang,setLang] = useState<string>("en")

  const changeLanguage = (language:any) => {
    setLang(language)
    i18n.changeLanguage(language);
  };

  return (
    <div className="relative w-full ">
    

      <div className="relative flex flex-col  h-[90vh] w-full bg-[url('/images/backgroundV.svg')] md:bg-[url('/images/background.svg')]  bg-cover bg-center">
      <Image src="/images/backgroundV.svg" alt="background" layout="fill" objectFit="cover" quality={100} priority className="absolute" />
      <Image src="/images/background.svg"alt="background" layout="fill" objectFit="cover" quality={100} priority className="absolute md:block hidden" />
      
        <header className=" animate-fade-in-up flex justify-between  h-52 pl-6  sm:pl-14 md:pl-20 z-10 relative">
          <div className="flex items-center gap-3 ">
            <Avatar showFallback src="/images/photo.svg" className=" w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 text-large relative z-20" alt={t('name')} />
            <div className="relative z-20 text-sm sm:text-2xl md:text-4xl">
              <h1 className="font-medium">{t('name')}</h1>
              <h2 >{t('role')}</h2>
            </div>
          </div>
            <div className={`p-7 sm:p-9 md:p-12 rt text-sm text-nowrap sm:text-xl`}  >
              <button onClick={() => changeLanguage('en')} className={`${lang === "en" && "text-secondary"} transition` }>EN</button>|
              <button onClick={() => changeLanguage('pt')} className={`${lang === "pt" && "text-secondary"}  transition`}>PT</button>
            </div>
        </header>
        <div className="relative flex flex-col flex-grow justify-center h-auto z-20 sm:pl-20 md:pl-20 xl:pl-40">
          <article className="w-[70%] animate-fade-in-up  m-auto text-3xl md:text-4xl xl:text-6xl sm:m-0 [&>span]:text-secondary font-semibold">
            <Trans i18nKey="intro" components={{ 1: <span  /> }} />
          </article>
          <div className=" flex text-md sm:text-2xl md:text-3xl gap-4 m-auto sm:m-0 mt-6 sm:mt-10 w-[70%]  ">
            <a href="https://www.linkedin.com/in/lucasrlfonseca/" target="_blank"><button className="flex items-center gap-1 animate-fade-in-up hover:underline "><FaLinkedinIn className="text-blue-600"/> LinkedIN</button></a>
            <a href="https://github.com/LucasFonseca0" target="_blank"><button className="flex items-center hover:underline animate-fade-in-up gap-1"><FaGithub className="text-white"/>Github</button></a>
          </div>
        </div>
        <ParticleBackground />
      </div>
      <div className="bg-pastel h-[90vh]">

      </div>
    </div>
  );  
}