import React from 'react';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';
import '../Notifications.css';

export default function Active(props) {
 const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

 return(
  <div className="active-notifications" style={{backgroundColor: (props.index)%2===0 ? "#F0EDED" : "#F8F8F8"}}>
   <h5 style={{paddingTop: "12px", width: "65px", height: "42px", paddingLeft: "2px"}}>{props.time}</h5>

   <Divider orientation="vertical" flexItem />

   <h5 style={{paddingTop: "10px", width: "180px", height: "42px"}}>

   <span style={{marginRight: "10px", marginTop: "6px"}} className={props.PRIORITY === "M" ? "yellow" : props.PRIORITY === "H" ? "red" : "blue"}></span>
   {props.TASK}
   </h5>

   <Checkbox
        checked={checked}
        onChange={() => props.markCompleted(props.id)}
        inputProps={{ 'aria-label': 'primary checkbox' }}
   />
  </div>
 );
}