import React from 'react'

type PropTypes = {
    title:String,
    link:String,
    amount:Number,
    arrowup:boolean,
    isLoading:boolean
    display:number | string
}

const Box = ({title,amount,arrowup,isLoading,display}:PropTypes) => {
    return (
        <div className={`w-[300px] relative h-[200px] box ${isLoading?'animate-pulse':''}`}>
            {isLoading?(<>
            </>):(<>
            <h2 className='text-xl font-semibold'>{title}</h2>
            <h2 className='text-3xl font-semibold'>₹ {amount.toLocaleString()}</h2>
            {/* <img src="/arrow.png" className={`absolute ${!arrowup?'-rotate-180 -top-5':` -bottom-5 `} -right-2`} alt="arrow" /> */}
            <p className='absolute text-[#39335a] text-[8rem] -bottom-[2rem] right-5 font-extrabold'>{display}</p>
        </>)}
        </div>
    )
}

export default Box