"use client"
import React from 'react'
import chefImg from "@/public/images/t1.webp"
import chefImg2 from "@/public/images/t2.webp"
import chefImg3 from "@/public/images/t3.webp"
import ChefCard from './ChefCard'

const Chefs = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
          <h1 className='heading'>Meet Our Expert <span className='text-red-600'>Chefs</span></h1>
          <div className="mt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center">
               {/* ChefCard */}
               <div data-aos="fade-right" data-aos-anchor-placement="top-center" className="">
               <ChefCard image={chefImg} names="Josh O." post="Kitchen Porter" />
               </div>
               <div data-aos="zoom-in" data-aos-delay="300" data-aos-anchor-placement="top-center" className="">
               <ChefCard image={chefImg2} names="Chi Chi" post="Executive Chef" />
               </div>
               <div data-aos="fade-right" data-aos-delay="600" data-aos-anchor-placement="top-center" className="">
               <ChefCard image={chefImg3} names="Emmy White" post="Head Chef" />
               </div>
          </div>
    </div>
  )
}

export default Chefs
