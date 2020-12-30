import React, { useEffect, useState } from 'react';
import {Doughnut} from 'react-chartjs-2';

const HardwareChart = () => {
 const [chartData , setChartData] = useState({});

 const chart = () => {
  setChartData({
   labels: ['Robot 1', 'Robot 2', 'Robot 3', 'Robot 4'],
   datasets:[
    {
     label: 'Fill Level of Container',
     data:[20, 15, 20, 45],
     backgroundColor: ['#e4e978', '#bc6ff1', '#AB47BC', '#ea2c62'],
     minBarLength: 2
    }
   ]
  })
 }

 useEffect(() => {
  chart()
 } , [])

 return(
  <div>
   <Doughnut 
   data={chartData} 
   height={150} 
   width={400} 
   options={{
    maintainAspectRatio: false,
    legend: {
     position: 'left'
    }
   }} 
   />
  </div>
 )
}

export default HardwareChart;