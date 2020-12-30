import React from 'react';
import Container from '@material-ui/core/Container';
import ClearIcon from '@material-ui/icons/Clear';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
// import Button from '@material-ui/core/Button';
import { TimePicker } from 'antd';
// import Axios from 'axios';
import 'antd/dist/antd.css';
import './Addorder.css';

export default function OrderHead() {

  function onChange(time, timeString) {
  console.log(time, timeString);
}

const handleOrder = () => {
  const ID_CODE = localStorage.getItem("ID_CODE");
  const STORE_NUM = localStorage.getItem("STORE_NUM");
  var ORDER_DETAILS = document.getElementById('order-details').value;
  var ORDER_NUM = document.getElementById('order-num').value;
  console.log(ID_CODE);
  console.log(STORE_NUM);
  console.log(ORDER_DETAILS);
  console.log(ORDER_NUM);
  // Axios.post("https://stark-springs-53275.herokuapp.com/RoboticKitchenAddOrders", {STORE_NUM, ORDER_DETAILS, ID_CODE, ORDER_NUM})
  //   .then(res => {
  //     console.log(res);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
}

 return(
  <Container className="neworder-header" maxWidth="xl">
   <div className="clear-icon-div"><Link to='/orders'><ClearIcon className="clear-icon" style={{ fontSize: 40 }}/></Link></div>
   <div className="add-order">
    <h4 style={{paddingBottom: "4px"}}>Add New Order</h4>
    <Divider style={{height: "5px", width: "60%", margin: "0 auto", backgroundColor: "#21CE99"}} variant="middle" />
   </div>
   <div className="input-fields">
   <input type="text" id="order-num" placeholder="Order Number" /><br />
   <input type="text" id="order-details" placeholder="Order Details" />
   <div className="time-picker"><TimePicker use12Hours format="h:mm a" onChange={onChange} /></div>
   
   <button className="confirm-btn" onClick={handleOrder}>
        CONFIRM
    </button>
   </div>
  </Container>
 );
}