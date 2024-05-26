import { Avatar } from '@nextui-org/react'
import React from 'react'

const WhatPeopleThinkAboutMe = () => {
  return (
    <section className='h-[100vh] mt-28 sm:mt-40 md:mt-60 xl:mt-80 text-black relative'>
      <h2 className='flex justify-center items-center  text-3xl sm:text-3xl md:text-4xl lg:text-5xl  font-bold z-10'>What people think about me?</h2>
      <div className='flex items-center'>
      <Avatar showFallback src="/" className=" w-10 h-10 sm:w-20 sm:h-20 md:w-28 md:h-28 text-large relative z-20" />

        <h3>@Leolins - Frontend developer</h3>
    </div>
    </section>
  )
}

export default WhatPeopleThinkAboutMe
