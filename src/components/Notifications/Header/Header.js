import React from 'react';
import Container from '@material-ui/core/Container';
import './Header.css';

export default function Notif() {
 return(
  <Container className="notificationheader-root" maxWidth="xl">
   <h1 className="notification-heading">Notifications</h1>
  </Container>
 );
}