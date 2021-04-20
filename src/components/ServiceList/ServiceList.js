import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

const ServiceList = () => {
  const [manageService, setManageService] = useState([]);
  useEffect(() => {
    fetch("https://thawing-shore-57581.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => setManageService(data));
  });
  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      fetch(`https://thawing-shore-57581.herokuapp.com/itemDelete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
        });
    }
  };
  return (
    <div className="row">
      {manageService.map((service) => (
        <div className="col-md-4">
          <div style={{ marginBottom: "30px" }} class="card">
            <div class="card-image">
              <img
                style={{ height: "300px", width: "350px", paddingTop: "20px" }}
                src={service.imageURL}
                alt="Error"
              />
            </div>
            <div class="card-text">
              <span class="date"> Added New: 4 days ago</span>
              <h2> {service.name} </h2>
            </div>
            <div class="card-stats">
              <div class="stat">
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    color: "#4B0016",
                    borderBottom: "1px solid gray",
                  }}
                  class="value"
                >
                  Service <br /> Description
                </div>
                <div style={{ color: "black" }} class="type">
                  {" "}
                  {service.description}
                </div>
              </div>
              <div class="stat border">
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    color: "#4B0016",
                  }}
                  class="value"
                >
                  Wanna order??
                </div>
                <div class="type">
                  <button style={{ backgroundColor: "red" }}>
                    {" "}
                    Delete
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      onClick={() => handleDelete(service._id)}
                    />
                  </button>
                </div>
              </div>
              <div class="stat">
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    color: "#4B0016",
                    borderBottom: "1px solid gray",
                  }}
                  class="value"
                >
                  Discount Price
                </div>
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "30px",
                    color: "orange",
                  }}
                  class="type"
                >
                  {service.cost}$
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
