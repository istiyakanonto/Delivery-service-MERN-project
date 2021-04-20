import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import logo from "../../../photo/drutotalogo.jpg";
import './Navbar.css'

const Navbar = () => {

  const [adminPanel, setAdminPanel]=useState([])
  const [loggedInUser, setLoggedInUser]= useContext(UserContext);
  
  useEffect(()=>{
    fetch ('https://thawing-shore-57581.herokuapp.com/admin')
    .then(res=>res.json())
    .then(data=>setAdminPanel(data))
})
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
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <img style={{ height:'120px'}} src={logo} alt="" className="img-fluid" />
        </div>
        <nav className="col-md-10">
        <Link to="/home">Home+</Link>
        {
          isAdmin ===true? <Link to="/admin">Admin+</Link> :isAdmin===false? <Link to="/order">Order+</Link>  :<p></p>
        }
         
         
          <Link to="/service">Service+</Link>
          <Link to="/review"> Reviews+</Link>
         <Link to="/contactUs">   Contact Us+</Link>
          <Link to="/login">
            <button
              style={{ marginLeft: "40px" }}
              type="button"
              class="btn btn1"
            >
              LogIn
            </button>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
