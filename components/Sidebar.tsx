import Image from 'next/image'
import React from 'react'
import {BiHistory} from 'react-icons/bi'

const Sidebar = () => {
  
  return (
    <div className= 'w-[90px] hidden h-full md:flex md:flex-col items-center gap-4 md:py-5 '>
      <h1 className='text-xl text-white'>
        <Image src={'/logo.png'} alt = "logo" height={60} width = {50} />
      </h1>
      <div className='flex md:flex-col'>
        <div className='p-2 hover:bg-blue-900/30 rounded-xl cursor-pointer md:mt-[3.5rem]'>
        <BiHistory className='text-white font-bold text-2xl' />
        </div>
      </div>
    </div>
  )
}

export default Sidebar