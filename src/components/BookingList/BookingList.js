import React from "react";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import { Table } from "react-bootstrap";
const BookingList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [ordersInformation, setOrdersInformation] = useState([]);

  useEffect(() => {
    fetch("https://thawing-shore-57581.herokuapp.com/order?email=" + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => setOrdersInformation(data));
  }, []);
  let total = 0;
  for (let index = 0; index < ordersInformation.length; index++) {
    total = total + parseInt(ordersInformation[index].cost);
  }
  return (
    <div className="container">
      <h2 style={{ marginTop: "20px", marginBottom: "10px", color: "#420420" }}>
        Greeting..{loggedInUser.name}
      </h2>
      <p>Your Total Amount Of Order {ordersInformation.length}</p>
      {ordersInformation.map((order) => (
        <Table
          style={{ borderBottom: "1px solid red" }}
          className="container"
          striped
          bordered
          hover
          variant="dark"
        >
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Service Name</th>
              <th>Payment ID</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{order.userName}</td>
              <td>{order.email}</td>
              <td>{order.serviceName}</td>
              <td>{order.paymentId}</td>
              <td>{order.cost}</td>
            </tr>
          </tbody>
        </Table>
      ))}
      <h1 style={{ textAlign: "center", color: "#420420" }}>
        Your Total Cost {total} ${" "}
      </h1>
    </div>
  );
};

export default BookingList;
