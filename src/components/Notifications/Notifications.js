import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Active from './Active/Active';
import Completed from './Completed/Completed';
// import axios from 'axios';
import './Notifications.css';

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

}));

export default function Notifications({notifications, setnotifications}) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  console.log(notifications);
  // const [notifications, setnotifications] = React.useState([]);

  // useEffect(() => {
  //   const ID_CODE = localStorage.getItem("ID_CODE");
  //   const STORE_NUM = localStorage.getItem("STORE_NUM");
  //   axios.post("https://stark-springs-53275.herokuapp.com/RoboticKitchenGetNotifications", {ID_CODE: parseInt(ID_CODE)})
  //     .then(res => {
  //       console.log(res);
  //       const getNotifs = res.data;
  //       setnotifications(getNotifs);
  //       console.log(notifications);
  //       console.log(notifications[3].STATUS);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }, [])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const markCompleted = (id) => {
   let newNotifications = [];
   notifications.forEach(notification => {
    if(notification._id === id) {
     notification.STATUS = "COMPLETED";
    //  axios.post("https://stark-springs-53275.herokuapp.com/RoboticKitchenUpdateNotificationStatus", )
    }

    newNotifications.push(notification);
   })

   setnotifications(newNotifications);
  }

  const getTime = (n) => {
    const timestamp = n.TIMESTAMP;
    var temp = new Date(timestamp);
    var notifAdded = temp.getMinutes();
    var temp2 = new Date();
    var currentTime = temp2.getMinutes();
    var diff = (notifAdded > currentTime) ? (notifAdded - currentTime) : (currentTime - notifAdded);
    return diff+"m ago";
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
          <Tab label="Active" {...a11yProps(0)} />
          <Tab label="Completed" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>

          {notifications.map((item, index) => {
           if(item.STATUS === 'ACTIVE'){
            return(
              <div style={{height:"75%"}}>
             <Active
             markCompleted={(_id) => markCompleted(_id)}
             index={index}
             id={item._id}
             time={getTime(item)}
             PRIORITY={item.PRIORITY}
             TASK={item.TASK}
            /></div>
             );
           }
           return null;
          }
          )}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {/* <Completed time="8m ago" notification="Cooker 4 not turning on" />
          <Completed time="9m ago" notification="Robot 5 stuck" />
          <Completed time="15m ago" notification="Robot 1 stuck" /> */}

          {notifications.map((item, index) => {
           if(item.STATUS === 'COMPLETED'){
            return(
             <Completed
             markCompleted={(_id) => markCompleted(_id)}
             index={index}
             id={item._id}
             time="6m ago"
             TASK="Robot 5 stuck"
            />
             );
           }
           return null;
          }
          )}
          
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}