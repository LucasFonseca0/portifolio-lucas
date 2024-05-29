"use client";

import React, { useState } from 'react';
import { ParticleBackground } from './particle';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { Trans, useTranslation } from 'react-i18next';
import i18n from '@/i18n';
import { Avatar } from '@nextui-org/react';

const Introduction = () => {
  const [lang, setLang] = useState<string>("en");
  const { t } = useTranslation();

  const changeLanguage = (language: string) => {
    setLang(language);
    i18n.changeLanguage(language);
  };

  return (
    <section className="relative flex flex-col text-black h-[90vh] w-full bg-[url('/images/background-whiteV.svg')] md:bg-[url('/images/background-white.svg')] bg-cover bg-center">
      <header className="animate-fade-in-up flex justify-between h-52 pl-6 sm:pl-14 md:pl-20 z-10 relative">
        <div className="flex items-center gap-3">
          <Avatar
            showFallback
            src="/images/photo.svg"
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 text-large relative z-20"
            alt={t('name')}
          />
          <div className="relative z-20 text-sm sm:text-2xl md:text-4xl">
            <h1 className="font-medium text-primaryDarkest">{t('name')}</h1>
            <h2>{t('role')}</h2>
          </div>
        </div>
        <div className="p-7 sm:p-9 md:p-12 text-sm text-nowrap sm:text-xl md:text-2xl xl:text-3xl">
          <button onClick={() => changeLanguage('en')} className={`${lang === "en" && "text-primaryDarkest"} transition`}>EN</button>|
          <button onClick={() => changeLanguage('pt')} className={`${lang === "pt" && "text-primaryDarkest"} transition`}>PT</button>
        </div>
      </header>
      <div className="relative flex flex-col flex-grow justify-center h-auto z-20 sm:pl-20 md:pl-20 xl:pl-40">
        <article className="w-[70%] animate-fade-in-up m-auto text-3xl md:text-4xl xl:text-6xl sm:m-0 font-semibold [&>span]:text-primaryDarkest">
          <Trans i18nKey="intro" components={{ 1: <span /> }} />
        </article>
        <div className="flex text-md sm:text-2xl md:text-3xl gap-4 m-auto sm:m-0 mt-6 sm:mt-10 w-[70%]">
          <a href="https://www.linkedin.com/in/lucasrlfonseca/" target="_blank">
            <button className="flex items-center gap-1 animate-fade-in-up hover:underline">
              <FaLinkedinIn className="text-blue-600" /> LinkedIn
            </button>
          </a>
          <a href="https://github.com/LucasFonseca0" target="_blank">
            <button className="flex items-center gap-1 animate-fade-in-up hover:underline">
              <FaGithub className="text-black" /> Github
            </button>
          </a>
        </div>
      </div>
      <ParticleBackground />
    </section>
  );
};

export default Introduction;
