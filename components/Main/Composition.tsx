import React from 'react'
import DoughnutChart from './DoughnutChart'

const Composition = () => {
  return (
    <div className='box md:basis-auto md:-mt-[5rem] w-[300px] mx-auto md:mx-0 md:w-[320px] mt-5 flex items-center flex-col'>
        <h2 className='text-xl font-semibold self-center'>Composition</h2>
        <DoughnutChart />
    </div>
  )
}

export default Composition