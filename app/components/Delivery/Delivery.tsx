import Image from 'next/image'
import React from 'react'
import deliveryImg from '@/public/images/delivery.2908e1b4.svg'
import { RiEBike2Fill } from 'react-icons/ri'
import { IoFastFood } from 'react-icons/io5'
import { BsDoorOpen } from 'react-icons/bs'

const Delivery = () => {
  return (
    <div className='pt-[8rem] pb-[3rem]'>
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[3rem]">
          {/* Image */}
          <div data-aos="fade-right" data-aos-anchor-placement="top-center" className="">
               <Image src={deliveryImg} alt='delivery' className=''/>
          </div>
          {/* Text Desc */}
          <div className="">
               <h1 className="text-[30px] md:text-[40px] lg:[text-[50px] xl:text-[60px] font-bold leading-[3rem] md:leading-[4rem] uppercase">Your <span className='text-red-600'>Favourite Burger</span> on the way</h1>
               <p className="mt-[2rem] text-black text-[17px] text-opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis neque impedit praesentium cumque? Suscipit voluptatum maxime excepturi, odio totam officiis quae nulla cupiditate, unde omnis amet ex iste, corporis laudantium dignissimos nemo possimus ipsum rerum?</p>
               <div className="flex items-center space-x-3 mt-[2rem] ">
                    <RiEBike2Fill className='w-[2rem] h-[2rem] text-red-600 '/>
                    <h1 className="text-[18px] text-black font-medium">Delivery in 30 minutes</h1>
               </div>
               <div className="flex items-center space-x-3 mt-[1rem] ">
                    <IoFastFood className='w-[2rem] h-[2rem] text-red-600 '/>
                    <h1 className="text-[18px] text-black font-medium">Free shipping from $75</h1>
               </div>
               <div className="flex items-center space-x-3 mt-[2rem] ">
                    <BsDoorOpen className='w-[2rem] h-[2rem] text-red-600 '/>
                    <h1 className="text-[18px] text-black font-medium">Delivery on your Doorstep</h1>
               </div>
          </div>
      </div>
    </div>
  )
}

export default Delivery

