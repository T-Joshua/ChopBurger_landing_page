import React from 'react'
import img1 from '@/public/images/f1.webp'
import img2 from '@/public/images/f2.webp'
import img3 from '@/public/images/f3.webp'
import Image from 'next/image'

const Feature = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
      {/* Heading */}
      <h1 className="heading">
          Burgers made with <br /> love and 
          <span className='text-red-600'> Care</span>
      </h1>
      {/* Cards */}
      <div className="w-[90%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
          {/* 1st card */}
          <div data-aos="fade-left" data-aos-anchor-placement="top-center" className="">
               <div className="p-6 hover:bg-white rounded-lg transition-all duration-200">
                    <Image src={img1} alt='burger' className='rounded-3xl'/>
                    <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">Our Burger</h1>
                    <p className='mt-[0.2rem] text-black text-opacity-60 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi expedita quam optio pariatur facilis, officia, iusto ex aperiam illum nihil quos delectus accusamus accusantium molestiae ipsa.</p>
               </div>
          </div>
          {/* 2nd cards */}
          <div data-aos="zoom-in" data-aos-delay="200" data-aos-anchor-placement="top-center" className="">
               <div className="p-6 hover:bg-white lg:translate-y-[3rem] rounded-lg transition-all duration-200">
                    <Image src={img2} alt='burger' className='rounded-3xl'/>
                    <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">Your Opinion Is Important</h1>
                    <p className='mt-[0.2rem] text-black text-opacity-60 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi expedita quam optio pariatur facilis, officia, iusto ex aperiam illum nihil quos delectus accusamus accusantium molestiae ipsa.</p>
               </div>
          </div>
          {/* 3rd card */}
          <div data-aos="fade-right" data-aos-delay="400" data-aos-anchor-placement="top-center" className="">
               <div className="p-6 hover:bg-white rounded-lg transition-all duration-200">
                    <Image src={img3} alt='burger' className='rounded-3xl'/>
                    <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">Chicken Burgers </h1>
                    <p className='mt-[0.2rem] text-black text-opacity-60 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi expedita quam optio pariatur facilis, officia, iusto ex aperiam illum nihil quos delectus accusamus accusantium molestiae ipsa.</p>
               </div>
          </div>
      </div>
    </div>
  )
}

export default Feature
