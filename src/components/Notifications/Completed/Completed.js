import React from 'react';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import '../Notifications.css';

export default function Completed(props) {
 const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

 return(
  <div className="completed-notifications" style={{backgroundColor: (props.index)%2===0 ? "#F0EDED" : "#F8F8F8"}}>
   <h5 style={{paddingTop: "12px", width: "65px", height: "42px", paddingLeft: "2px"}}>{props.time}</h5>

   <Divider orientation="vertical" flexItem />

   <h5 style={{paddingTop: "12px", width: "180px", height: "42px"}}>
   {props.TASK}
   </h5>

   <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
   />
  </div>
 );
}