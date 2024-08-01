import React from 'react'
import { GrRestaurant } from 'react-icons/gr'

const ReservationForm = () => {
  return (
    <div className='bg-green-700 p-6 rounded-lg '>
      <GrRestaurant className='w-[5rem] h-[5rem] text-white mt-[2rem] mx-auto'/>
      <h1 className='uppercase text-center text-white text-[30px] md:text-[40px] lg:text-[50px] font-bold mt-[0.5rem]'>Resturant</h1>
      <p className="uppercase text-[20px] md:text-[25px] text-white font-semibold text-center">BOok your table</p>
      {/* inputs */}
      <div className="mt-[2rem]">
          <div className="flex flex-col sm:flex-row spcae-y-3 sm:space-y-2 items-center w-[80%] mx-auto justify-between space-x-4 ">
               <select name="people" id="people" className='px-10 py-2.5 bg-transparent rounded-lg outline-none font-bold text-[17px] text-white border-[2.2px] border-gray-100'>
                    <option value="" disabled className='text-[#000000e6] font-semibold'>Select One</option>
                    <option value="1" className='text-black font-semibold '>1 person</option>
                    <option value="2" className='text-black font-semibold '>2 people</option>
                    <option value="3" className='text-black font-semibold '>3 people</option>
                    <option value="4" className='text-black font-semibold '>4 people</option>
               </select> 
               <input type="date" className='px-10 py-2.5 bg-transparent rounded-lg outline-none font-bold text-[17px] text-white border-[2.2px] border-gray-100'/>
          </div>
          <input type="time" className='mt-[1rem] mx-auto items-center w-[80%]  px-10 py-2.5 block bg-transparent rounded-lg outline-none font-bold text-[17px] text-white border-[2.2px] border-gray-100'/>
          <div className="mt-[2rem] w-[80%] text-center mx-auto">
               <button className='px-8 py-3 rounded-lg mb-[2rem] text-[17px] w-full bg-blue-950 transition-all duration-200 hover:bg-red-600 text-white'>Book Now</button>
          </div>
      </div>
    </div>
  )
}

export default ReservationForm
