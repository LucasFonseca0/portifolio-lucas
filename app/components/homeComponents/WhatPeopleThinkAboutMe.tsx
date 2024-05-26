import { Avatar } from "@nextui-org/react";
import React from "react";

const WhatPeopleThinkAboutMe = () => {
  return (
    <section className="h-[100vh] w-full mt-28 sm:mt-40 md:mt-60 xl:mt-80 text-black relative">
      <h2 className="flex justify-center items-center  text-3xl sm:text-3xl md:text-4xl lg:text-5xl  font-bold z-10">
        What people think about me?
      </h2>
      <div className="flex flex-col w-[50%] mt-10 ml-[10%]" key={20}>
        <div className="flex items-center gap-2">
          <Avatar
            showFallback
            src="https://media.licdn.com/dms/image/D4D03AQGjA3jGx6U-Sw/profile-displayphoto-shrink_200_200/0/1712836047078?e=1722470400&v=beta&t=In6LzI9CzwbbcZ8e35_J7ycPkiT-NktLMltIveghc-4"
            className=" w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 text-large relative z-20"
          />
          <h3 className=" text-xl font-semibold">
            @Leo souza - Frontend developer
          </h3>
        </div>
        <p className="text:md mt-4">
          Precisa, analisa, faz. Esses são os três passos da metodologia de
          trabalho do Lucas, usa os recursos que tem e os que não tem para
          desenvolver soluções e nunca deixa nenhum projeto na mão. Eficiente,
          inteligente e coletivo, esse é o profissional que Lucas é.
        </p>
      </div>
      <div className="flex flex-col  justify-end direction-rtl text-right items-end w-full mt-10 pr-[10%]">
        <div className="flex items-center flex-row-reverse gap-2">
          <Avatar
            showFallback
            src="https://media.licdn.com/dms/image/D4D03AQFYSd9F40GqFw/profile-displayphoto-shrink_200_200/0/1707770266830?e=1722470400&v=beta&t=T2B_CdwYJJus2879DaJTyUw2Y8UzqaUsvEYEPbXKFa4"
            className=" w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 text-large relative z-20"
          />
          <h3 className=" text-xl font-semibold">
            @Mozart Soares - Fullstack developer
          </h3>
        </div>
        <p className="text-md w-[50%] mt-4">
          Lucas is a very hardworking and talented developer, he works his way
          through any challenges and is able to rapidly learn new technologies
          and adapt to new teams, stacks, and projects. He is an excellent
          addition to any team and has proven his skills in diverse projects
          using various languages and working in all areas (front-end,back-end
          and databases). I am confident that his profile suits perfectly any
          software engineer opportunities that may arise.
        </p>
      </div>
    </section>
  );
};

export default WhatPeopleThinkAboutMe;
