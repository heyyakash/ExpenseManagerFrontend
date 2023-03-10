import React, { useEffect, useState } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2'
import { res } from '../../types/response';
import { useQueryClient } from 'react-query';
import { datefunction } from '../../helper/datefunction';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );


const LineSummary = () => {
    const queryClient = useQueryClient()
    const spendData = queryClient.getQueryData('spend') as res
    const[state,setState] = useState<(number | null)[] | null>(null);
    const {month} = datefunction()
    useEffect(()=>{
      if(spendData!==undefined && spendData!==null){
        let arr: (number | null )[] = []
        for(let i=1;i<=12;i++){
          let checker = []
          checker = spendData?.resultMonthly?.filter(g=>g?.month===i)
          console.log(spendData)
          if(checker.length===0){
            if(i>month){
              arr.push(null)
            }
            else{
              arr.push(0)
            }
           
          }
          else{
            arr.push(checker[0].amount)
          }
        }
        setState(arr)
      }
    },[spendData])


    const data = {
        labels:["Jan","Fe","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
        datasets:[
            {
                label:'Spendings',
                data:state,
                borderColor: 'rgb(255, 99, 159)',
                backgroundColor: 'rgba(200, 55, 132, 0.5)',
                tension:0.1,
                pointBackgroundColor:'rgba(255,99,159)',
                borderWidth:5,
                
            }
        ]
    }

    // const options= {
    //     scales: {
    //       y: {
    //         beginAtZero: true
    //       }
    //     },
        
    // }
  return (
    // <></>
    <Line data = {data} />
  )
}

export default LineSummary