import React from 'react'
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
    const data = {
        labels:['Jan','Feb','Mar','Apr','May'],
        datasets:[
            {
                label:'Spendings',
                data:[5000,6000,8000,12000,9000],
                borderColor: 'rgb(255, 99, 159)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                tension:0,
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