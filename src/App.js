import React, {useEffect} from 'react';
import Login from './components/Login/Login';
import Navigation from './marginals/Navigation/Navigation';
import Logout from './components/Home/Logout/Logout';
import HomeTabs from './components/Home/HomeTabs/HomeTabs';
import Notifications from './components/Notifications/Notifications';
import NotificationHeader from './components/Notifications/Header/Header';
import Orders from './components/Orders/Orders';
import OrderHeader from './components/Orders/Header/Header';
import NewOrder from './components/Orders/Addorder/Addorder';
import Statistics from './components/Statistics/Hardware/Hardware';
import Slide from './components/Statistics/Slide/Slide';
import Dishes from './components/Statistics/Dishes/Dishes';
import DishesHeader from './components/Statistics/Dishes/Header';
import Ingredients from './components/Statistics/Ingredients/Ingredients';
import IngrdientsHeader from './components/Statistics/Ingredients/Header';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export default function App() {
  // ---------------------------------------------------------------------------------------------------------------------
  const [notifications, setnotifications] = React.useState([]);

  useEffect(() => {
    const ID_CODE = localStorage.getItem("ID_CODE");
    // const STORE_NUM = localStorage.getItem("STORE_NUM");
    axios.post("https://stark-springs-53275.herokuapp.com/RoboticKitchenGetNotifications", {ID_CODE: parseInt(ID_CODE)})
      .then(res => {
        console.log(res);
        const getNotifs = res.data;
        setnotifications(getNotifs);
        console.log(res.data[7].TIMESTAMP);
        var timestamp = res.data[0].TIMESTAMP;
        var a = new Date(timestamp);
        console.log(a.getMinutes());
        console.log(a.getHours());
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  const noOfNotifications = () => {
    if(notifications.length === 0)
    return 0;
    else {
      var number = notifications.filter(notification => notification.STATUS === 'ACTIVE').length;
      return number;
    }
  }
  // ----------------------------------------------------------------------------------------------------------------

 return(
  <Router>
   <Switch>
   <Route exact path = '/' render={ () => {
    if(localStorage.getItem('ID_CODE')!==null && localStorage.getItem("STORE_NUM") !== null) {
      return [<Logout/>,<HomeTabs/>,<Navigation noOfNotifications={noOfNotifications()} />]
    } else {
     return <Login />
    }
   }
   } />

<Route exact path = '/home' render={ () => {
    if(localStorage.getItem('ID_CODE')!==null && localStorage.getItem("STORE_NUM") !== null) {
      return [<Logout/>,<HomeTabs/>,<Navigation noOfNotifications={noOfNotifications()} />]
    } else {
     return <Login />
    }
   }
   } />

<Route exact path = '/notifications' render={ () => {
    if(localStorage.getItem('ID_CODE')!==null && localStorage.getItem("STORE_NUM") !== null) {
      return [<NotificationHeader />,<Notifications notifications={notifications} setnotifications={(n) => setnotifications(n)} />,<Navigation noOfNotifications={noOfNotifications()} />]
    } else {
     return <Login />
    }
   }
   } />

<Route exact path = '/orders' render={ () => {
    if(localStorage.getItem('ID_CODE')!==null && localStorage.getItem("STORE_NUM") !== null) {
      return [<OrderHeader />,<Orders />,<Navigation noOfNotifications={noOfNotifications()} />]
    } else {
     return <Login />
    }
   }
   } />

   <Route exact path = '/orders/new-order' render={ () => {
    if(localStorage.getItem('ID_CODE')!==null && localStorage.getItem("STORE_NUM") !== null) {
      return <NewOrder/>
    } else {
     return <Login />
    }
   }
   } />


   <Route exact path = '/hardware-stats' render={ () => {
    if(localStorage.getItem('ID_CODE')!==null && localStorage.getItem("STORE_NUM") !== null) {
      return [<Statistics />,<Slide />,<Navigation noOfNotifications={noOfNotifications()} />]
    } else {
     return <Login />
    }
   }
   } />


   <Route exact path = '/dishes-stats' render={ () => {
    if(localStorage.getItem('ID_CODE')!==null && localStorage.getItem("STORE_NUM") !== null) {
      return [<DishesHeader />,<Dishes />,<Slide />,<Navigation noOfNotifications={noOfNotifications()} />]
    } else {
     return <Login />
    }
   }
   } />

   <Route exact path = '/ingredients-stats' render={ () => {
    if(localStorage.getItem('ID_CODE')!==null && localStorage.getItem("STORE_NUM") !== null) {
      return [<IngrdientsHeader />,<Ingredients />,<Slide />,<Navigation noOfNotifications={noOfNotifications()} />]
    } else {
     return <Login />
    }
   }
   } />

   </Switch>
  </Router>

  
 );
}