import React from 'react'
import { useQueryClient } from 'react-query'
import { res } from '../../types/response'
import Cover from '../Main/Cover'
import ExpenseBox from './ExpenseBox'

const Main = ({data}:{data:res}) => {
    return (
        <div className='w-full '>
            <Cover />
            <div className='w-[98%] mt-10 box p-10 text-white '>
                <h2 className='text-2xl font-semibold'>History</h2>
                <div className='m-5 mt-7'>
                    <b>This Month</b>
                    <div className='py-4 flex flex-col gap-4'>
                        <ExpenseBox date = "Mar 12" type = "Food" money={200} />  
                        <ExpenseBox date = "Mar 12" type = "Medicine" money={560}/>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main