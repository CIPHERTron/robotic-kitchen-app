import React, { useEffect, useState } from 'react';
import {Bar} from 'react-chartjs-2';
import './Ingredients.css';

const MonthlyChart = () => {
 const [chartData , setChartData] = useState({});

 const chart = () => {
  setChartData({
   labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
   datasets:[
    {
     label: 'Ingredients used monthly',
     data:[20, 15, 20, 45, 34, 27],
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
        }
   }} 
   />
  </div>
 )
}

export default MonthlyChart;