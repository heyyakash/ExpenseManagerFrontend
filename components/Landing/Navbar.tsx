import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='w-full h-[120px] relative rounded-xl bg-[#1c1e20] px-10 flex items-center justify-between'>
            <div>
                <Image src={'/logo.png'} height={100} width={100} alt="logo" />
            </div>
            <div className='flex gap-5 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <a href = "#home" className='navlink'>Home</a>
                <a href = "#features" className='navlink'>Features</a>
                <a href = "#about" className='navlink'>About</a>
            </div>
            <div className='bg-white/95 cursor-pointer rounded-2xl px-5 py-3 font-semibold trans hover:bg-white drop-shadow-xl '>
                Login
            </div>
        </nav>
    )
}

export default Navbar