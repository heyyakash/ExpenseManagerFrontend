import React, { useState } from 'react'
import FeatureBox from './FeatureBox'
import {BsFillShieldLockFill, BsSpeedometer2} from 'react-icons/bs'
import {IoMdAnalytics} from 'react-icons/io'
import {FaTelegramPlane} from 'react-icons/fa'
import FeatureDescription from './FeatureDescription'

const Features = () => {

    const [feature,setFeature] = useState('Instant')

  return (
    <section id = "features" className='mt-3 md:h-[100vh] w-full p-10'>
    <p className='text-white/70 text-extrabold text-lg'>Features</p>
    <h1 className='heading text-[3rem] leading-[1rem] mt-5'>
        <i>Be</i>st fe<i>atu</i>res
    </h1>
    <h1 className='heading text-[3rem]'>
        <i>pr</i>ovid<i>ed</i> b<i>y</i> E<i>xpe</i>ns<i>e</i> M<i>ana</i>g<i>e</i>r
    </h1>
    <div className="flex w-full gap-4 mt-10  ">
        <div className='flex flex-col gap-4'>
            <div className='w-[350px] rounded-xl h-[350px] bg-black/40 grid place-items-center'>
                <div className='h-[60%] grid grid-cols-2 grid-rows-2 gap-4 w-[60%]'>
                 <FeatureBox setFeature = {setFeature} text ="Instant"><BsSpeedometer2 className='text-white text-2xl' /></FeatureBox>
                 <FeatureBox setFeature = {setFeature} text ="Analytics"><IoMdAnalytics className= 'text-white text-2xl' /></FeatureBox>
                 <FeatureBox setFeature = {setFeature} text ="Privacy"><BsFillShieldLockFill className='text-white text-2xl' /></FeatureBox>
                 <FeatureBox setFeature = {setFeature} text ="Telegram"><FaTelegramPlane className='text-white text-2xl' /></FeatureBox>
                </div>
            </div>
            <FeatureDescription feature = {feature} />
            
        </div>
    </div>
    </section>
  )
}

export default Features