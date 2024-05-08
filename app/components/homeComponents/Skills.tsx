import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { IoIosArrowRoundBack } from 'react-icons/io'

const Skills = () => {
  return (
    <div className='h-[100vh] text-black '>
      <div className='flex items-center'>
        <h2 className='text-7xl font-bold'>Skills</h2>
        <BsArrowLeft className='text-primaryDarkest h20 w-40  ' height={100} width={100} size={400} />
      </div>
    </div>
  )
}

export default Skills
