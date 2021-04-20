import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../photo/drutotalogo.jpg";
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <img style={{ height:'120px'}} src={logo} alt="" className="img-fluid" />
        </div>
        <nav className="col-md-10">
        <Link to="/home">Home+</Link>
          <Link to="/order">Order+</Link>
          <Link to="/admin">Admin+</Link>
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
