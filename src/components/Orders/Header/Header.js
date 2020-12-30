import React from 'react';
import Container from '@material-ui/core/Container';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import './Header.css';

export default function OrderHead() {
 return(
  <Container className="order-header-root" maxWidth="xl">
   <h1 className="order-heading">Orders</h1>
   <span className="add-icon-div"><Link to='/orders/new-order'><AddIcon className="add-icon" style={{ fontSize: 40 }}/></Link></span>
  </Container>
 );
}