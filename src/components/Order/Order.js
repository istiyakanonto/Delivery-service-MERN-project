import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
import BookingList from "../BookingList/BookingList";
import ReviewUs from "../ReviewUs/ReviewUs";
import './Order.css'
const Order = () => {
  return (
    <Router>
      <div style={{ marginTop: "50px" }} className="  container">
        <header>Admin Panel</header>
        <ul>
          <li>
            <Link to="/bookingList">
              {" "}
              <FontAwesomeIcon icon={faQrcode} />
              Booking List
            </Link>
          </li>

          <li>
            <Link to="/giveReview">
              {" "}
              <FontAwesomeIcon icon={faPlus} /> Review Us
            </Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route path="/bookingList">
            <BookingList></BookingList>
          </Route>
          <Route path="/giveReview">
            <ReviewUs></ReviewUs>
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
};

export default Order;
