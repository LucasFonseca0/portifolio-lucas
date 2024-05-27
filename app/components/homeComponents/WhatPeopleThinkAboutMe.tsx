"use client"
import { Avatar } from "@nextui-org/react";
import React from "react";
import { useTranslation, Trans } from "react-i18next";

const WhatPeopleThinkAboutMe = () => {
  const { t } = useTranslation();
  
  return (
    <section className="h-auto w-full mt-28 sm:mt-40 md:mt-60 xl:mt-80 text-black relative">
      <h2 className="flex justify-center items-center text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold z-10">
        {t('what_people_think')}
      </h2>
      <div className="flex flex-col items-center justify-center p-8 sm:p-0 sm:items-start w-full sm:w-[65%] mt-10 lg:mt-14 sm:ml-[10%]">
        <div className="flex items-center gap-2">
          <Avatar
            showFallback
            src="https://media.licdn.com/dms/image/D4D03AQGjA3jGx6U-Sw/profile-displayphoto-shrink_200_200/0/1712836047078?e=1722470400&v=beta&t=In6LzI9CzwbbcZ8e35_J7ycPkiT-NktLMltIveghc-4"
            className="h-[15%] sm:w-16 sm:h-16 md:w-20 md:h-20 text-large relative z-20"
          />
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
            {t('leo_souza')}
          </h3>
        </div>
        <p className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left mt-4">
          {t('review_leo')}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center  p-8 sm:p-0 sm:items-end w-full  mt-10 lg:mt-14 sm:pr-[10%] direction-rtl text-right">
        <div className="flex items-center sm:w-[65%] flex-row-reverse gap-2">
          <Avatar
            showFallback
            src="https://media.licdn.com/dms/image/D4D03AQFYSd9F40GqFw/profile-displayphoto-shrink_200_200/0/1707770266830?e=1722470400&v=beta&t=T2B_CdwYJJus2879DaJTyUw2Y8UzqaUsvEYEPbXKFa4"
            className="h-[15%] sm:w-16 sm:h-16 md:w-20 md:h-20 text-large relative z-20"
          />
          <h3 className="text-lg   sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
            {t('mozart_soares')}
          </h3>
        </div>
        <p className="text-md  sm:w-[65%] sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-right mt-4">
          {t('review_mozart')}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center p-8 sm:p-0 sm:items-start w-full sm:w-[65%] mt-10 lg:mt-14 sm:ml-[10%]">
        <div className="flex items-center gap-2">
          <Avatar
            showFallback
            src="https://media.licdn.com/dms/image/D4D35AQFH5jhSVPXHRA/profile-framedphoto-shrink_800_800/0/1714302476530?e=1717408800&v=beta&t=LOBe2a-TdWs_RBD3B6nXwwJA3_MiCA2B97U4LE9-qY0"
            className="h-[15%] sm:w-16 sm:h-16 md:w-20 md:h-20 text-large relative z-20"
          />
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
            {t('calvin_soares')}
          </h3>
        </div>
        <p className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left mt-4">
          {t('review_calvin')}
        </p>
      </div>
    </section>
  );
};

export default WhatPeopleThinkAboutMe;
