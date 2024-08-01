import React from 'react'

const Newsletter = () => {
  return (
    <div className='pt-[5rem] pb-[5rem]'>
      <div className="text-center">
          <h1 className="text-[28px] sm:text-[38px] md:text-[50px] text-black font-bold uppercase">Join for <span className='text-red-700'>hot</span> offers</h1>
          <p className="text-black text-opacity-70 w-[85%] md:w-[60%] mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quam excepturi inventore molestias tempore temporibus vel libero autem. Molestiae vitae asperiores impedit facere recusandae quia, similique consequuntur et pariatur ut.</p>
          <div className="mt-[3rem] mx-auto items-center  flex space-x-2 justify-center">
               <input type="email" placeholder='Email Address' className='placeholder:text-black w-[40%] px-5 py-4 bg-gray-400 rounded-lg outline-none text-[17px] text-black ' />
               <button className='bg-green-700 hover:bg-green-900 transition-all duration-200 px-8 py-4
rounded-md outline-none text-[18px] text-white font-bold'>Subscribe</button>
          </div>
      </div>
    </div>
  )
}

export default Newsletter
