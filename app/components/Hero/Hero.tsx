"use client"
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import bImg1 from "@/public/images/b1.webp"
import bImg2 from "@/public/images/b2.webp"
import Image from 'next/image';
import { BiCycling } from 'react-icons/bi';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1, 
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Hero = () => {
  return (
    <Carousel additionalTransfrom={0} arrows={false} autoPlay={true} autoPlaySpeed={4000} centerMode={false} infinite responsive={responsive} itemClass='item' showDots={true}>
      {/* first hero slide */}
      <div className="w-[100%] h-[88vh] flex items-center justify-center flex-col bg-blue-950 md:clip_path">
        <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto">
          <Image src={bImg1} alt='burger' className='hidden md:block'/>
          <div className="">
            <h1 className='text-[40px] font-semibold text-yellow-400'>Fast Food Burger</h1>
            <h1 className="text-[90px] leading-[5rem] uppercase text-white font-bold">Best <br /> Burger</h1>
            <p className='mt-[1rem] text-white text-opacity-70 text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus ipsum, non magnam quam neque assumenda! Reiciendis delectus pariatur laboriosam maiores non odio animi modi porro!</p>
            <button className=' mt-[1.3rem]  py-3 px-8 text-[16px] sm:text-[16px] bg-green-500 transition-all duration-200 flex items-center text-white hover:bg-green-700 rounded-md'>
                    <span>
                         <BiCycling className='w-[1.3rem]  h-[1.7rem]'/>
                    </span>
                    <span className='font-bold'>
                         Order Now
                    </span>
               </button>
           </div>
        </div>
      </div>
      {/* second hero slide */}
      <div className="w-[100%] h-[88vh] flex items-center justify-center flex-col bg-red-950 md:clip_path">
        <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto">
          <Image src={bImg2} alt='burger' className='hidden md:block'/>
          <div className="">
            <h1 className='text-[40px] font-semibold text-yellow-400'>Tasty Burger</h1>
            <h1 className="text-[90px] leading-[5rem] uppercase text-white font-bold">Top <br /> Burger</h1>
            <p className='mt-[1rem] text-white text-opacity-70 text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus ipsum, non magnam quam neque assumenda! Reiciendis delectus pariatur laboriosam maiores non odio animi modi porro!</p>
            <button className=' mt-[1.3rem]  py-3 px-8 text-[16px] sm:text-[16px] bg-blue-500 transition-all duration-200 flex items-center text-white hover:bg-green-700 rounded-md'>
                    <span>
                         <BiCycling className='w-[1.3rem]  h-[1.7rem]'/>
                    </span>
                    <span className='font-bold'>
                         Order Now
                    </span>
               </button>
           </div>
        </div>
      </div>
    </Carousel>
  )
}

export default Hero
