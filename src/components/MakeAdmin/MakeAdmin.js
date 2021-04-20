import React from 'react';
import { useForm } from "react-hook-form";
const MakeAdmin = () => {
    const {register,handleSubmit,watch,formState: { errors }} = useForm();
    const onSubmit = (data) => {
        const emailData={
            email:data.email
        }
        const url = `https://thawing-shore-57581.herokuapp.com/addAdmin`;
        
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(emailData),
        }).then((res) => console.log("server site response", res));
  
      
    }
    return (
        <div style={{ textAlign: "center" }} className="container body ">
      <div className="box">
        <h1 className="icon">Add Your Desire Services</h1>
        <div className="content">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div
              style={{
                borderBottom: "1px solid gray",
                paddingBottom: "25px",
                marginRight: "150px",
              }}
              className="row"
            >
              <div className="col-md-12">
                <p>MAKE ADMIN</p>
                <input
                  {...register("email", { required: true })}
                  placeholder="Admin Email"
                />
              </div>
             
            </div>
          
            <div className="row">
              <div
                style={{
                  textAlign: "center",
                 
                  marginTop: "40px",
                }}
                className="col-md-10"
              >
                <input style={{backgroundColor:'tomato'}} type="submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default MakeAdmin;