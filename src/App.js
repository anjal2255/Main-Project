import logo from './logo.svg';
import './App.css';
import Homepage from './Component/Homepage';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Navbar from './Component/Navbar';
import Menu from './Component/Menubar';
import Offers from './Component/Offers';

import { Route, Routes } from 'react-router-dom';
import Order from './Component/Order';
// import Orderplaced from './Component/Orderplaced';
import RestaurantDashboard from './Component/RestaurantDashboard';
import { Feedback } from '@mui/icons-material';

function App() {
  return (
    <div className="App">
     
       
         {/* <Homepage/>  */}


       <Navbar/>  

      <Routes>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Homepage' element={<Homepage/>}/>
        <Route path='/Menubar' element={<Menu/>}/>
        <Route path='/Order' element={<Order/>}/>
        <Route path='/Offers' element={<Offers/>}/>
        <Route path='/RestaurantDashboard' element={<RestaurantDashboard/>}/>
        {/* <Route path='Feedback' element={<Feedback/>}/> */}





      </Routes> 
     
      {/* <Menubar/> */}

      {/* <Order/> */}
      
      {/* <RestaurantDashboard/> */}
          </div>
  );
}

export default App;
