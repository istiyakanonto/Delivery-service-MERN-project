import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Home/Navbar/Navbar'
import Admin from './components/Admin/Admin';
import Order from './components/Order/Order';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Checkout from './components/Checkout/Checkout';


export  const UserContext = createContext();
export const IdContext=createContext();
function App() {
  
  const [loggedInUser, setLoggedInUser] = useState({});
  const [id, setId] = useState({});

  return (
    <IdContext.Provider value={[id, setId]}>
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
   <Router>
   
  
   <small class="d-flex justify-content-start" style={{ color: "#4B0016" }}>Email ID: {loggedInUser.email}</small>
   <p  class="d-flex justify-content-end" style={{ color: "#4B0016" }}>User Name: {loggedInUser.name}</p>
   
   
     <Navbar></Navbar>
     <Switch>
     <Route  path="/home">
        <Home></Home>
      </Route>

      <PrivateRoute  path="/admin">
       <Admin></Admin>
      </PrivateRoute>

      <PrivateRoute  path="/order">
       <Order></Order>
      </PrivateRoute>

     

      <Route exact path="/">
        <Home></Home>
      </Route>
      <PrivateRoute  path="/checkout/:id">
       <Checkout></Checkout>
       </PrivateRoute>
      <Route path="/login">
              <Login></Login>
            </Route>
     </Switch>
   </Router>
   </UserContext.Provider>
   </IdContext.Provider>
  );
}

export default App;
