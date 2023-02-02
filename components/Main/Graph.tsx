import React from 'react'
import { res } from '../../types/response'
import LineSummary from './LineSummary'

const Graph = () => {
  // console.log(data)
  return (

    <div className='md:px-10  w-[300px] md:w-full'>
      <div className='box w-full'>
        <h2 className='text-xl  font-semibold'>Overall Statistics</h2>
       <LineSummary />
      </div>
    </div>
  )
}

export default Graph