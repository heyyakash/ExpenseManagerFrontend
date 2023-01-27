import React from 'react'

const Sidebar = () => {
  
  return (
    <div className= 'w-[90px] hidden h-full md:flex md:flex-col items-center justify-between md:py-5 '>
      <h1 className='text-xl text-white'>
        <img src="/logo.png" alt="logo" className='w-12 rounded-md h-8 cursor-pointer mx-auto' />
      </h1>
    </div>
  )
}

export default Sidebar