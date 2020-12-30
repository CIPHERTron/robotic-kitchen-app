import React, { useEffect, useState } from 'react';
import {Bar} from 'react-chartjs-2';
import './Dishes.css';

const Biweekly = () => {
 const [chartData , setChartData] = useState({});

 const chart = () => {
  setChartData({
   labels: ['Dish 1', 'Dish 2', 'Dish 3', 'Dish 4', 'Dish 5', 'Dish 6'],
   datasets:[
    {
     label: 'No. of Dishes sold Biweekly',
     data:[20, 12, 18, 16, 9, 21],
     backgroundColor: ['#41aea9', '#41aea9', '#41aea9', '#41aea9', '#41aea9', '#41aea9'],
     minBarLength: 2
    }
   ]
  })
 }

 useEffect(() => {
  chart()
 } , [])

 return(
  <div className="monthly-chart">
   <Bar
   data={chartData} 
   height={300} 
   width={400} 
   options={{
    scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        legend: {
     display: false
    }
   }} 
   />
  </div>
 )
}

export default Biweekly;