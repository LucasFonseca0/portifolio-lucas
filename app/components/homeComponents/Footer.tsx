import Image from "next/image";
import React from "react";
import { FaDownload } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="h-52 relative mt-6 bg-primary text-black ">
      <div className="flex flex-col justify-evenly h-full pl-[15%] text-xs sm:text-base md:text-lg lg:text-xl">
        <div className="flex items-center gap-4">
          <Image
            src="/images/tellphone.svg"
            className=" w-auto h-10"
            height={100}
            width={100}
            alt="tellphone icon"
          />
          <p>+351 938 311 959</p>
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="/images/whatsapp.svg"
            className=" w-auto h-10"
            height={100}
            width={100}
            alt="Whatsapp icon"
          />
          <a href="https://wa.me/351938311959" target="_blank">
            <p className="underline">Send me a message</p>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="/images/email.svg"
            className=" w-auto h-10"
            height={100}
            width={100}
            alt="Email icon"
          />
          <p>lucas.ribeiro.24444@gmail.com</p>
        </div>
      </div>
        <a href="/docs/CV-LucasFonseca-English.docx">
            <div className="absolute text-xl md:text-2xl lg:text-3xl bg-black top-0 right-[10%] -translate-y-1/2 text-primaryDarkest rounded-full h-20 w-20 sm:h-24 sm:w-24 md:w-28 md:h-28 lg:h-32 lg:w-32 p-4 flex flex-col justify-around items-center">
              <FaDownload className=" text-white"/>
              <p className="font-bold ">CV</p>
            </div>
        </a>
    </footer>
  );
};

export default Footer;
