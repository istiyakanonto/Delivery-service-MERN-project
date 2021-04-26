import React from "react";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

import { IdContext, UserContext } from "../../App";
import ProcessPayment from "../ProcessPayment/ProcessPayment";
const CheckOut = () => {
    const {register,handleSubmit,watch,formState: { errors }} = useForm();
  const [id, setId] = useContext(IdContext);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
 
  // const {id} = useParams();
  
  const [service, setService] = useState([]);
  const [serviceData, setServiceData]=useState(null)
  useEffect(() => {
    fetch(`https://thawing-shore-57581.herokuapp.com/serve/${id.id}`)
      .then((res) => res.json())
      .then((data) => setService(data[0]));
  }, []);

 

   const onSubmit = data => {
    setServiceData(data)
  };
  const handlePaymentSuccess = paymentId =>{
    const userInfo = {
        userName: loggedInUser.name,
        email: loggedInUser.email,
        serviceName: service.name,
        paymentId,
        cost: service.cost
       };
    const url = 'https://thawing-shore-57581.herokuapp.com/addProduct';

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      
      body: JSON.stringify(userInfo),
    })
    .then((res) => console.log("server site response", res));
  }
  return (
   <div className="container">
        <div style={{marginTop:'40px'}} className="row ">
      <div style={{display: serviceData ? 'none': 'block'}} className="col-md-6">
        {/* <input type="text" value={loggedInUser.name} />
        <br />
        <input type="text" value={loggedInUser.email} />
        <br />
        <input type="text" value={service.name} /> */}

<div style={{ textAlign: "center" }} className=" body ">
      <div className="box">
        <h1 className="icon">Add Your Desire Services</h1>
        <div className="content">
          <form onSubmit={handleSubmit(onSubmit)}>
            <divS
              style={{
                borderBottom: "1px solid gray",
                paddingBottom: "25px",
                marginRight: "150px",
              }}
              className="row"
            >
              <div className="col-md-9">
                <p>Customer Name</p>
                <input
                  {...register("name",  { required: true })}
                  value={loggedInUser.name}
                />
              </div>
              <div className="col-md-3">
                <p>Customer Email</p>
                <input
                  {...register("email", { required: true })}
                 value={loggedInUser.email}
                />
              </div>
            </divS>
            <div
              style={{ marginTop: "15px", marginRight: "150px" }}
              className="row"
            >
              <div className="col-md-9">
                <p>Service Name</p>
                <input
                  {...register("productName", { required: true })}
                  value={service.name}
                />
              </div>
              <div className="col-md-3">
                <p>Your Cost</p>
                <input
                  {...register("cost", { required: true })}
                 value={service.cost}
                />
              </div>
             
            </div>
            <div className="row">
              <div
                style={{
                  textAlign: "center",
                  marginLeft: "70px",
                  marginTop: "40px",
                }}
                className="col-md-11"
              >
                <input style={{backgroundColor:'tomato'}} type="submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>



      </div>
      <div style={{display: serviceData ? 'block': 'none'}}  className="col-md-6">
          <h2>Please Pay</h2>
          <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
      </div>
    </div>
   </div>
  );
};

export default CheckOut;
