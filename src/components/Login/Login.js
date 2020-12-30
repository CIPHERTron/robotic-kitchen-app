import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import './Login.css';


export default function Login() {
  var history = useHistory();
  var ID_CODE = "", STORE_NUM = "";
  
  useEffect(() => {}, []);

  const sendUserDetails = (e) => {
    // console.log("rd: ", )
    // console.log(ID_CODE, " ", STORE_NUM);
    ID_CODE = document.getElementById('id-code').value;
    STORE_NUM = document.getElementById('store-number').value;
    if( ID_CODE.trim() === "" || STORE_NUM.trim()===""){
      alert("Empty fields not allowed");
    }
    else {
      // console.log("STORE NUM: ",STORE_NUM)
      // console.log("ID_CODE: ",ID_CODE)
      axios.post("https://stark-springs-53275.herokuapp.com/RoboticKitchenGetUserDetails", {STORE_NUM: parseInt(STORE_NUM), ID_CODE: parseInt(ID_CODE)})
        .then( res => {
          if(res.data.length === 1) {
            localStorage.setItem("ID_CODE",ID_CODE)
            localStorage.setItem("STORE_NUM",STORE_NUM)
            history.push('/home');
          }
          else {
            alert("No such user exists!")
          }
          
        })
        .catch( err => {
          console.log(err);
        })
    }
    e.preventDefault();
  }

  return(
    <Container className="main-div">
      <Typography className="main-heading" variant="h5" gutterBottom>
        Welcome
      </Typography>
      <h3 className="sub-heading">
        Sign in to continue!
      </h3>
      <Divider variant="middle" />
      <h2 className="login-heading">
        Login
      </h2>
      <Divider style={{height: "5px", backgroundColor: "#21CE99"}} variant="middle" />

      <div className="entry-fields">
      <TextField
          className="id-field"
          required
          id="id-code"
          label="ID Code"
          defaultValue=""
          variant="outlined"
          onChange={ (e => {
            ID_CODE = e.target.value;
          })}
        />

      <TextField
          className="store-field"
          required
          id="store-number"
          label="Store Number"
          defaultValue=""
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={ (e => {
            STORE_NUM = e.target.value;
          })}
        />

      <Button variant="contained" color="primary" onClick={sendUserDetails} >
        <h4 className="login-btn">Login</h4>
      </Button>
      <Divider style={{marginTop: "2rem", padding: "0.2px 0", backgroundColor: "#748A9D"}} variant="middle" />
      </div>
    </Container>
  );
}