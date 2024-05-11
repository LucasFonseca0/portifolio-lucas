import SkillsSVG from '@/app/SVGs/SkillsSVG'
import Image from 'next/image'
import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { IoIosArrowRoundBack } from 'react-icons/io'

const Skills = () => {
  const logoNames: LogoName[] = [
    "typescript",
    "docker",
    "git",
    "mongodb",
    "nest",
    "next",
    "react",
    "tailwind",
    "database",
    "nodeJS"
  ];

  return (
    <section className='h-[100vh] relative text-black mt-40'>
      <div className='flex flex-col'>
        <div className='flex items-center gap-8'>
          <h2 className='ml-[10%] md:ml-[15%] lg:ml-[20%] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl  font-bold z-10'>Skills</h2>
          <Image src={"/images/arrow.svg"} alt="arrow" height={100} width={100} className='w-40  xl:w-64 z-10'/>
        </div>
        <Image src={"/images/skillsBackgroundLines.svg"} alt="background" height={100} width={100}  className=' absolute hidden sm:block  right-0 z-0 sm:w-48 md:w-56 lg:w-72 xl:w-96 top-10 '/>
        <div className='flex justify-center items-center sm:justify-start mt-20'>
          <div className='grid grid-rows-2 grid-flow-col gap-3 w-80 sm:w-80 lg:w-auto sm:ml-[10%] md:ml-[15%] lg:ml-[20%] lg:gap-5'>
            {logoNames.map((data:LogoName)=>(
              <div className='flex flex-col items-center justify-center '>
                <SkillsSVG logoName={data} className='w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20 '/>
                <p className='text-xs font-bold'>{data.replace(data[0],data[0].toUpperCase())}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
