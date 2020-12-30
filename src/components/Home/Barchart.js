import React, { useEffect, useState } from 'react';
import {Bar} from 'react-chartjs-2';
import './HomeTabs/HomeTabs.css';

const Barchart = ({data}) => {
 const [chartData , setChartData] = useState({});

 var chartLabels=[]

 const chart = () => {
    //  console.log(data);
    //  console.log(data.length);
     for(var i=0;i<data.length;i+=1) {
         var label = (i+1) + '';
         chartLabels.push(label);
         console.log(chartLabels);
     }
  setChartData({
   labels: chartLabels,
   datasets:[
    {
     label: '',
     data,
     backgroundColor: ['#3B86FF', '#3B86FF', '#3B86FF', '#3B86FF', '#3B86FF'],
     minBarLength: 2
    }
   ]
  })
 }

 useEffect(() => {
  chart()
 } , [])

 return(
  <div style={{height: "25vh", width: "95%", position: "relative", left:"8px"}}>
   <Bar data={chartData} options={
       {
        legend: {
            display: false
        },
    responsive: true,
    scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
   }} />
  </div>
 )
}

export default Barchart;