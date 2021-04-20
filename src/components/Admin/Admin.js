import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
import OrderList from '../OrderList/OrderList';
import AddService from '../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import './Admin.css'
const Admin = () => {
    return (
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
            <Route path="/addServices">
            <AddService></AddService>
            </Route>
            <Route path="/makeAdmin">
           <MakeAdmin></MakeAdmin>
            </Route>

          </Switch>
        </div>
      </Router>
    );
};

export default Admin;