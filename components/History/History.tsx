import React from 'react'
import { useQueryClient } from 'react-query'
import { res } from '../../types/response'
import Cover from '../Main/Cover'

const Main = ({data}:{data:res}) => {
    return (
        <div className='w-full '>
            <Cover />
            <div className='w-[90%] box mx-4 -mt-[3rem] p-10 text-white '>
                
                <h2 className='text-2xl font-semibold'>History</h2>
            </div>
        </div>
    )
}

export default Main