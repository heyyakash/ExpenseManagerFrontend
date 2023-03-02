import React from 'react'
import {BsFillShieldLockFill, BsSpeedometer2} from 'react-icons/bs'
import {IoMdAnalytics} from 'react-icons/io'
import {FaTelegramPlane} from 'react-icons/fa'

interface map {
    [key:string]:string 
}

const FeatureDescription = ({feature}:{feature:keyof map}) => {

    const featureMap: map = {
        "Instant" : "Instantly update and view any new expense",
        "Analytics" : "Analyize your spendings with real data",
        "Privacy" : "Your spendings are visible only to you",
        "Telegram" : "Spendings are added by a telegram through simple commands"
    }
    return (
    <div className='w-[350px] flex flex-col text-white py-14 items-center px-10 rounded-xl bg-black/40'>
        <BsSpeedometer2 className='text-white text-2xl' />
        <p className='font-bold'>{feature}</p>
        <p className='text-center mt-4'>{featureMap[feature]}</p>
        {/* <p className='self-center'>
            {featureMap[feature]}
        </p> */}
    </div>
  )
}

export default FeatureDescription