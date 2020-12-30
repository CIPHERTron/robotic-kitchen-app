import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import './HomeTabs/HomeTabs.css';
import axios from 'axios';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
});
// className={classes.root}
export default function Items() {

  const ID_CODE = localStorage.getItem("ID_CODE");
  const STORE_NUM = localStorage.getItem("STORE_NUM");
  const [stackItems, setstackItems] = useState([]);
  // const [items, setitems] = useState({"dc": "", "cp": "", "cc" : "", "mwa" : ""});

  useEffect(() => {
    axios.post("https://stark-springs-53275.herokuapp.com/RoboticKitchenGetUserDetails", {STORE_NUM: parseInt(STORE_NUM), ID_CODE: parseInt(ID_CODE)})
    .then( res => {
      // console.log(res);
      const stacksTemp = res.data[0].IT_STACKS;
      // console.log(stacksTemp);
      setstackItems(stacksTemp.slice(1,stacksTemp.length-1).split(",").map(element => parseInt(element)));
      // console.log(stackItems);
      // setitems( {"dc": stackItems[0], "cp": stackItems[1], "cc" : stackItems[2], "mwa" : stackItems[3]})
    })
    .catch( err => {
      console.log(err);
    })
  }, [])


  const classes = useStyles();

  return (
    <div className="items-card">
      {/* <CardContent className="items-card-content"> */}
          <h3 style={{textAlign: "left", paddingBottom: "20px", paddingLeft: "10px", paddingTop: "10px"}}>Items in Stacks</h3>
          <Grid container spacing={3}>
          <Grid item xs={4}>
            <h6 style={{textAlign: "center",marginBottom: 0}}>Dirty Cups</h6>
            <h1 style={{textAlign: "center", color: "#FE5820", marginBottom: "0px"}}>{stackItems[0]}</h1>
          </Grid>

          <Grid item xs={4}>
            <h6 style={{textAlign: "center",marginBottom: 0}}>Clean Pots</h6>
            <h1 style={{textAlign: "center", marginBottom: "0px"}}>{stackItems[1]}</h1>
          </Grid>

          <Grid item xs={4}>
            <h6 style={{textAlign: "center",marginBottom: 0}}>Clean Cups</h6>
            <h1 style={{textAlign: "center", color: "#20C491", marginBottom: "0px"}}>{stackItems[2]}</h1>
          </Grid>

          <Grid item xs={12}>
            <h6 style={{textAlign: "center",marginBottom: 0}}>Meal Waiting Area</h6>
            <h1 style={{textAlign: "center", marginBottom: "0px"}}>{stackItems[3]}</h1>
          </Grid>
          </Grid>
      {/* </CardContent> */}
    </div>
  );
}
