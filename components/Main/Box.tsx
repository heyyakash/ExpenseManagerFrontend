import React from 'react'

type PropTypes = {
    title:String,
    link:String,
    amount:Number,
    arrowup:boolean
}

const Box = ({title,link,amount,arrowup}:PropTypes) => {
    return (
        <div className=' w-[300px] h-[200px] box '>
            <h2 className='text-xl font-semibold'>{title}</h2>
            <h2 className='text-3xl font-semibold'>₹ {amount.toLocaleString()}</h2>
            <img src="/arrow.png" className={`absolute ${!arrowup?'-rotate-180 -top-5':` -bottom-5 `} -right-2`} alt="arrow" />
        </div>
    )
}

export default Box