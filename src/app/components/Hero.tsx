import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import img from '@/app/components/Profile.jpg'

const Hero = () => {
  return (
    <div id='hero' className='min-h-screen bg-no-repeat'>
 <Navbar />
 <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>

  <div className=' lg:block mx-auto pt-20 mt-20'>
    <Image src={img} alt='img' className='w-[300px] rounded-full' />
  </div>
  <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
   <div >
    <p data-aos="zoom-in-up ">Hi, I'm</p>
    <p data-aos="zoom-in-up">Frontend Developer</p>
   </div>
  </div>
 </div>
  </div>

  )
}

export default Hero