import React from "react";

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

import { IdContext, UserContext } from "../../App";
import ProcessPayment from "../ProcessPayment/ProcessPayment";
const CheckOut = () => {
  const [id, setId] = useContext(IdContext);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  // const {id} = useParams();
  console.log(id.id);
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5040/serve/${id.id}`)
      .then((res) => res.json())
      .then((data) => setService(data[0]));
  }, []);

  return (
   <div className="container">
        <div style={{marginTop:'40px'}} className="row ">
      <div className="col-md-6">
        <input type="text" value={loggedInUser.name} />
        <br />
        <input type="text" value={loggedInUser.email} />
        <br />
        <input type="text" value={service.name} />
      </div>
      <div className="col-md-6">
          <h2>Please Pay</h2>
          <ProcessPayment></ProcessPayment>
      </div>
    </div>
   </div>
  );
};

export default CheckOut;
