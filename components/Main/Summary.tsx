import React, { useEffect, useState } from 'react'
import { useQueryClient } from 'react-query'
import { datefunction } from '../../helper/datefunction'
import {res } from '../../types/response'
import Box from './Box'
import Graph from './Graph'




const Summary = () => {
    const queryClient = useQueryClient()
    const data=queryClient.getQueryData('spend') as res
    const monthName = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const [daily, setDaily] = useState<number | null>(null)
    const [monthly, setMontlhy] = useState<number | null>(null)
    const [yearly, setYearly] = useState<number | null>(null)
    const [isLoading,setIsLoading] = useState<boolean>(true)
    const { date, month, year } = datefunction()

    useEffect(()=>{
        if(data!==null || data!==undefined){
            if(data?.resultDaily.length===0){
                setDaily(0)
            }
            else{
                let sum=0
                data?.resultDaily.map(x=>{sum+=x.amount})
                setDaily(sum)
            }
            
            if(data?.resultMonthly.length===0){
                setMontlhy(0)
            }
            else{
                console.log(data.resultMonthly[0].amount)
                setMontlhy(data.resultMonthly[0].amount)
            }

            if(data?.resultYearly?.length===0){
                setYearly(0)
            }
            else{
                let sum=0
                data?.resultYearly?.map(x=>{sum+=x.amount})
                setYearly(sum)
            }
        }
        setIsLoading(false)
    },[data])
                
            
    return (
        <div className='-mt-[3rem] md:-mt-[5rem] mx-auto md:mx-0 flex flex-col md:flex-row items-start space-between gap-4'>
            <div className="grid grid-cols-1 grid-rows-1 gap-6 place-items-center">
                <div className='grid grid-cols-1 md:grid-cols-3 place-items-center gap-6 grid-rows-3 md:grid-rows-1 md:px-10'>
                    <Box title="Today"  display= {date} isLoading={isLoading} amount={daily?daily:0} arrowup={false} link="report" />
                    <Box title={monthName[month-1]} display = {month} isLoading={isLoading} amount={monthly?monthly:0} arrowup={true} link="report" />
                    <Box title="This Year" display = {year%1000} isLoading={isLoading} amount={yearly?yearly:0} arrowup={true} link="report" />
                </div>
                <Graph />
            </div>

        </div>
    )
}

export default Summary


