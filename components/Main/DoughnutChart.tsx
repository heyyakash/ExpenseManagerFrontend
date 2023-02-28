
import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useQueryClient } from 'react-query';
import { res } from '../../types/response';

ChartJS.register(ArcElement, Tooltip, Legend);


const DoughnutChart=()=> {
  const queryClient = useQueryClient()
  const pieData = queryClient.getQueryData('spend') as res
  const labels = ['food','investment','grocery','commute','medical']
  const [state,setState] = useState<number[]>([10,10,10,10,10])
  
  useEffect(()=>{  
    const x = pieData.resultDailyCurrentMonth
    let arr:number[] = []
    labels.map((label)=>{
      let sum=0
      x.map((data)=>{
        if(data.category===label) sum+=data.amount
      })
      arr.push(sum)
    })
    setState(arr)
  },[pieData])
  const data = { 
    labels,
    datasets: [
      {
        label: '# of Votes',
        data: state,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(153, 100, 255, 0.2)',
          'rgba(153, 38, 255, 0.2)',
      
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(153, 100, 255, 1)',
          'rgba(153, 90, 255, 1)',
  
        ],
        borderWidth: 2,
      },
    ],
  };

  
  return (<div className='mt-5'>
  <Doughnut data={data} />
  </div>)
}

export default DoughnutChart