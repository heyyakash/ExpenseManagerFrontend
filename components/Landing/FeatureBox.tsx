import React, { ReactNode } from 'react'
import { IconType } from 'react-icons'

const FeatureBox = ({children,text,setFeature}:{children:ReactNode,text:string,setFeature:React.Dispatch<React.SetStateAction<string>>}) => {
    // console.log(children,text)
    // console.log(props)
    return (
        <div className='flex flex-col gap-2 items-center'>
            <div onClick={()=>setFeature(text)} className='bg-[#1c1e20] rounded-full w-16 h-16 cursor-pointer grid place-items-center'>{children}</div>
            <p className='text-white text-sm text-bold'>{text}</p>
        </div>
    )
}

export default FeatureBox