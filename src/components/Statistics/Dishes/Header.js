import React from 'react';
import Container from '@material-ui/core/Container';

export default function Header() {
 return(
  <Container className="header-root" maxWidth="xl">
   <h1 className="notification-heading">Dishes Sold</h1>
  </Container>
 );
}