import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import {BiHistory} from 'react-icons/bi'
import { loginResponse } from '../types/response'


const Sidebar = () => {
  const router = useRouter()
  const [userData,setUserData] = useState<loginResponse | null>(null)
  useEffect(()=>{
    const data: loginResponse = JSON.parse(localStorage.getItem('userSession') as string)
    if(!data) router.push('/')
    else setUserData(data)
  },[])
  // const pathname = router.pathname
  // console.log(router.asPath)
  return (
    <div className= 'w-[90px] hidden h-full md:flex md:flex-col items-center gap-4 md:py-5 '>
      <h1 className='text-xl text-white'>
        <Image src={'/logo.png'} alt = "logo" height={60} width = {50} />
      </h1>
      <div className='flex md:flex-col'>
        <Link href={`/user/history/${userData?.telegram_id}`} className='p-2 hover:bg-blue-900/30 rounded-xl cursor-pointer md:mt-[3.5rem]'>
        <BiHistory className='text-white font-bold text-2xl' />
        </Link>
      </div>
    </div>
  )
}

export default Sidebar