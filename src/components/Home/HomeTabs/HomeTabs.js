import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import axios from 'axios';
import Barchart from '../Barchart';
import Items from '../Items';
import './HomeTabs.css';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  // root: {
  //   backgroundColor: theme.palette.background.paper,
  //   width: "100%",
  // },
}));

export default function HomeTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const [containersData, setcontainersData] = useState([]);
  useEffect(() => {
    const ID_CODE = localStorage.getItem("ID_CODE");
    const STORE_NUM = localStorage.getItem("STORE_NUM");
    axios.post("https://stark-springs-53275.herokuapp.com/RoboticKitchenGetUserDetails", {STORE_NUM: parseInt(STORE_NUM), ID_CODE: parseInt(ID_CODE)})
        .then( res => {
          const containersDataTemp = res.data[0].CONTAINER_OBJ;
          setcontainersData(containersDataTemp.slice(1,containersDataTemp.length-1).split(",").map(element => parseInt(element)));
          console.log(containersData);
        })
        .catch( err => {
          console.log(err);
        })
  }, [])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const getBarcharts = (data) => {
    var groups=[]
    var temp=[]
    var counter = 0
    data.forEach((element,index) => {
      counter = (counter+1)%6 === 0 ? 1 : (counter+1)%6
      if(counter === 1) temp=[]

      temp.push(element)

      if(counter === 5 || index===data.length-1) {
        groups.push(temp)
      }
      
    })

    return groups.map((group,index) => <div key={index} style={{width: "100%",marginBottom:"20px"}}><Barchart data={group}/></div>)
  }

  return (
    <div className="tabs">
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Robots" {...a11yProps(0)} />
          <Tab label="Fill Level" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel className="tab-content" value={value} index={0} dir={theme.direction}>
          <div className="category-div">
            <ul style={{color: "#8DA0AF"}} className="category-items">
              <li>No categories found</li>
            </ul>
          </div>
        </TabPanel>
        <TabPanel className="fill-level" value={value} index={1} dir={theme.direction}>
          <h2 style={{marginBottom: 0, color: "#748A9D", marginLeft: "8px", marginTop: "8px"}}>Container Fill Levels</h2>
          <div>
          <Carousel dots>
            {getBarcharts(containersData)}
          </Carousel></div>
          <div><Items /></div>
          
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
