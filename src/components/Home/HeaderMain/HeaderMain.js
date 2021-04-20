import React from "react";
import header from "../../../photo/about-men.png";
const HeaderMain = () => {
  return (
    <main style={{height:'700px'}} className="row d-flex align-items-center">
      <div style={{marginTop:'50px'}} className="col-md-6 offset-md-1">
        <h1 style={{fontSize: "55px",fontWeight: "bold",color: "#4b0016"}}> We Provided Best <br/> Dispatch & Parcel <br/> Services</h1>
        <button  className="btn btn1" >Make Order</button>
      </div>
      <div className="col-md-4 col-sm-12">
        <img
          style={{ height: "400px", width: "400px" }}
          src={header}
          alt=""
          className="img-fluid "
        />
      </div>
    </main>
  );
};

export default HeaderMain;
