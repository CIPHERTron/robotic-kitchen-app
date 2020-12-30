import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import preparing from '../../assets/prep.png';
import ready from '../../assets/ready.png';
import delivered from '../../assets/delivered.png';
import './Orders.css';

export default function Active(props) {
 const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

 return(
  <div className="active-orders">
   <img className="stepper-img" src={props.status === "preparing" ? preparing : ready} />

   <Container maxWidth="lg">
   <div className="order-content" style={{width: "150px", height: "42px"}}>
   <h5>
   {props.ORDER_NUM}
   </h5>
   <h5>
   {props.DETAILS}
   </h5>
   <h5>
    Time
   </h5>
   </div>
   </Container>

   <Checkbox
        style={{marginRight: "8px"}}
        checked={checked}
        inputProps={{ 'aria-label': 'primary checkbox' }}
   />
  </div>
 );
}