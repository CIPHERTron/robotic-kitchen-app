import React from 'react';
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import './Logout.css';

export default function Logout() {
     var history = useHistory();
     const handleLogout = () => {
          localStorage.removeItem("ID_CODE")
          localStorage.removeItem("STORE_NUM")
          history.push('/');
     }
 return(
  <Container className="logout-root" maxWidth="xl">
   <Button className="logout-btn" variant="outlined" color="secondary" onClick={handleLogout}>
        Logout
   </Button>
  </Container>
 );
}