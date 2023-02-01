import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { expenditureToday } from '../../apis/fetch'
import { datefunction } from '../../helper/datefunction'
import Box from './Box'
import Graph from './Graph'

const Summary = () => {
    const router = useRouter()
    const monthName = ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
    const { username } = router.query
    const [daily, setDaily] = useState<number | null>(null)
    const [monthly, setMontlhy] = useState<number | null>(null)
    const [yearly, setYearly] = useState<number | null>(null)
    // console.log(username)
    const { date, month, year } = datefunction()

    const getData = async() => {
        const res = await expenditureToday(username, date, month, year)
        return res
    }

    const { data, isLoading } = useQuery('daily',getData, {
        onSuccess: (d) => {
            console.log(d)
            if(d!==null){
                if(d?.resultDaily.length===0){
                    setDaily(0)
                }
                else{
                    let sum=0
                    d?.resultDaily.map(x=>{sum+=x.amount})
                    setDaily(sum)
                }
                
                if(d?.resultMonthly.length===0){
                    setMontlhy(0)
                }
                else{
                    let sum=0
                    console.log(d.resultMonthly[0].amount)
                    setMontlhy(d.resultMonthly[0].amount)
                }

                if(d?.resultYearly?.length===0){
                    setYearly(0)
                }
                else{
                    let sum=0
                    d?.resultYearly?.map(x=>{sum+=x.amount})
                    setYearly(sum)
                }
                
            }
        },
        refetchInterval:daily!==null?false:500
    })

    return (
        <div className='-mt-[3rem] md:-mt-[5rem] mx-auto md:mx-0 flex flex-col md:flex-row items-start space-between gap-4'>
            <div className="grid grid-cols-1 grid-rows-1 gap-6 place-items-center">
                <div className='grid grid-cols-1 md:grid-cols-3 place-items-center gap-6 grid-rows-3 md:grid-rows-1 md:px-10'>
                    <Box title="Today" isLoading={isLoading} amount={daily?daily:0} arrowup={false} link="report" />
                    <Box title={monthName[month-1]} isLoading={isLoading} amount={monthly?monthly:0} arrowup={true} link="report" />
                    <Box title="This Year" isLoading={isLoading} amount={yearly?yearly:0} arrowup={true} link="report" />
                </div>
                <Graph />
            </div>

        </div>
    )
}

export default Summary