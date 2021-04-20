import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import AddService from '../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import './Admin.css'
import ServiceList from '../ServiceList/ServiceList';
import OrderList from '../OrderList/OrderList';
import { UserContext } from "../../App";
const Admin = () => {
  const [adminPanel, setAdminPanel]=useState([])
  const [loggedInUser, setLoggedInUser]= useContext(UserContext);
  
  useEffect(()=>{
    fetch ('http://localhost:5040/admin')
    .then(res=>res.json())
    .then(data=>setAdminPanel(data))
},[])
let newAdmin= {}
let isAdmin=false;
if(adminPanel.length>0){
  newAdmin=adminPanel.find(admin=>admin.email===loggedInUser.email)
  if (newAdmin)
  {
    isAdmin=true;
  }
}

console.log(isAdmin)
    return (

        <div>
        
          
          <div>
          <Router>
        <div style={{ marginTop: "50px" }} className="  container">
          <header>Admin Panel</header>
          
          <ul>
            <li>
              <Link to="/orderList">
                {" "}
                <FontAwesomeIcon icon={faQrcode} />Order List
              </Link>
            </li>

            <li>
              <Link to="/serviceList">
                {" "}
                <FontAwesomeIcon icon={faQrcode} />Service List
              </Link>
            </li>

  
            <li>
              <Link to="/addServices">
                {" "}
                <FontAwesomeIcon icon={faPlus} /> Add Services
              </Link>
            </li>
            <li>
              <Link to="/makeAdmin">
                {" "}
                <FontAwesomeIcon icon={faEdit} /> Make Admin
              </Link>
            </li>
          </ul>
          <hr />
          <Switch>
          <Route path="/orderList">
           <OrderList></OrderList>
            </Route>
            <Route path="/serviceList">
             <ServiceList></ServiceList>
            </Route>
            <Route path="/addServices">
            <AddService></AddService>
            </Route>
            <Route path="/makeAdmin">
           <MakeAdmin></MakeAdmin>
            </Route>

          </Switch>
        </div>
      </Router>
          </div>
          <div>
            
          </div>
{
  adminPanel.map(admin=><p>{admin.email}</p>)
}
        </div>
    );
};

export default Admin;