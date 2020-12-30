import React, { useEffect, useState } from 'react';
import {Bar} from 'react-chartjs-2';
import './Ingredients.css';

const Biweekly = () => {
 const [chartData , setChartData] = useState({});

 const chart = () => {
  setChartData({
   labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
   datasets:[
    {
     label: 'Ingredients used Biweekly',
     data:[20, 12, 18, 16, 9, 21],
     backgroundColor: ['#cad315', '#cad315', '#cad315', '#cad315', '#cad315', '#cad315'],
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
    legend: {
     display: false
    },
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