"use client"

import { Avatar } from "@nextui-org/react";
import { ParticleBackground } from "../components/particle";

export default function Home() {
  return (
    <div className="relative w-full ">
      <div className="relative h-[90vh] w-full bg-[url('/images/background4.png')] bg-cover bg-center">
        <header className="text-4xl flex justify-center items-start h-60 gap-3 md:items-center md:justify-start md:pl-20 z-10 relative">
          <Avatar src="/images/photo.jpg" className="w-32 h-32 text-large  relative z-20" />
          <div className="relative z-20">
            <h1 className="font-medium">LUCAS FONSECA</h1>
            <h2>Fullstack developer</h2>
          </div>
          <div>
            
          </div>
        </header>
        <ParticleBackground />
      </div>
    </div>
  );  
}

