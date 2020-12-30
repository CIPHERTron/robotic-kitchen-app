import React, { useEffect, useState } from 'react';
import {Line} from 'react-chartjs-2';

const MemoryChart = () => {
 const [chartData , setChartData] = useState({});

 const chart = () => {
  setChartData({
   labels: ['', '', '', ''],
   datasets:[
    {
     label: 'Memory Pressure',
     data:[55, 51, 48, 45, 13, 54, 43],
     backgroundColor: ['#f8e4b7', '#f8e4b7', '#f8e4b7', '#f8e4b7'],
     minBarLength: 2
    }
   ],
   options: [{backgroundColor: '#f8e4b7'}]
  })
 }

 useEffect(() => {
  chart()
 } , [])

 return(
  <div style={{height: "25vh", width: "92%", position: "relative", left:"8px"}}>
   <Line
   height={100}
   width={150}
   data={chartData}
    options={{
        legend: {
     display: false
    },
     maintainAspectRatio: false,
     scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }}
   />
  </div>
 )
}

export default MemoryChart;