import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Badge from '@material-ui/core/Badge';
import HomeIcon from '@material-ui/icons/Home';
import ListAltIcon from '@material-ui/icons/ListAlt';
import NotificationsIcon from '@material-ui/icons/Notifications';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import './Navigation.css';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default function LabelBottomNavigation({noOfNotifications}) {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <BottomNavigation value={value} showLabels="true" onChange={handleChange} id="navigation-root" className={classes.root}>
      <BottomNavigationAction
      label="Home"
      value="home"
      icon={<Link to='/home'><HomeIcon color="secondary" /></Link>} />
          {/* <Link to='/notifications'><Badge color="secondary" badgeContent={4}><ListAltIcon color="secondary" /></Badge></Link> */}

      
      <BottomNavigationAction
      label="Orders"
      value="orders"
      icon={
      <Link to='/orders'>
        <ListAltIcon color="secondary" />
      </Link>
      }>
      </BottomNavigationAction>

      <BottomNavigationAction
      label="Notifications"
      value="notifications"
      icon={
        <Link to='/notifications'><Badge color="secondary" badgeContent={noOfNotifications}><NotificationsIcon color="secondary"/></Badge></Link>
      }>
      </BottomNavigationAction>

      <BottomNavigationAction label="Statistics" value="statistics" icon={<Link to='/hardware-stats'><InsertChartIcon color="secondary" /></Link>} />
      
    </BottomNavigation>
  );
}
