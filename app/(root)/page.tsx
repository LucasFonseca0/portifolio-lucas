"use client"
import { Avatar } from "@nextui-org/react";
import { ParticleBackground } from "../components/particle";
import { useTranslation, Trans } from 'react-i18next';
import i18n from "../../i18n"
import { useState } from "react";

export default function Home() {
  const { t } = useTranslation();

  const [lang,setLang] = useState<string>("en")

  const changeLanguage = (language:any) => {
    setLang(language)
    i18n.changeLanguage(lang);
  };

  return (
    <div className="relative w-full animate-fade-in-up">
      <div className="relative  h-[90vh] w-full bg-[url('/images/background7V.png')] md:bg-[url('/images/background7.png')]  bg-cover bg-center">
        <header className=" animate-fade-in-up flex justify-between  h-52 pl-6  sm:pl-14 md:pl-20 z-10 relative">
          <div className="flex items-center gap-3 ">
            <Avatar src="/images/photo.jpg" className=" w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 text-large relative z-20" alt={t('name')} />
            <div className="relative z-20 text:xl sm:text-2xl md:text-4xl">
              <h1 className="font-medium">{t('name')}</h1>
              <h2>{t('role')}</h2>
            </div>
          </div>
            <div className={`p-7 sm:p-9 md:p-12 rt sm:text-xl`}  >
              <button onClick={() => changeLanguage('en')} className={`${lang === "en" && "text-secondary"} transition` }>EN</button>|
              <button onClick={() => changeLanguage('pt')} className={`${lang === "pt" && "text-secondary"}  transition`}>PT</button>
            </div>
        </header>
        <div className="relative z-20 sm:p-20 md:p-20 xl:p-40">
          <article className="w-[70%] animate-fade-in-up  m-auto text-3xl md:text-4xl xl:text-6xl sm:m-0 [&>span]:text-secondary font-semibold">
            <Trans i18nKey="intro" components={{ 1: <span  /> }} />
          </article>
          <div>
            <a href="https://www.linkedin.com/in/lucasrlfonseca/" target="_blank"><button>LinkedIN</button></a>
            <a href="https://github.com/LucasFonseca0" target="_blank"><button>Github</button></a>
          </div>
        </div>
        <ParticleBackground />
      </div>
    </div>
  );  
}
