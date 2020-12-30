import React from 'react';
import Container from '@material-ui/core/Container';
import Header from './Header';
import HardwareChart from './HardwareChart';
import MemoryChart from './MemoryChart'
import './Hardware.css'

export default function Hardware() {
 return(
  <div className="hardware-main-div">
   <Header />
   <div className="hardware-chart">
   <h4 className="stats-heading">CPU Usage</h4>
   <HardwareChart />
   </div>
   <div className="memory-chart-div">
   <h4 className="stat-heading">Memory Usage</h4>
   <MemoryChart className="memory-chart" />
   </div>
  </div>
 );
}