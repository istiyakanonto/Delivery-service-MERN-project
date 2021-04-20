import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
const AddService = () => {
    const [imageURL, setImageURL] = useState(null);
    const {register,handleSubmit,watch,formState: { errors }} = useForm();

      const onSubmit = (data) => {
        const serviceData = {
            name: data.name,
            description: data.description,
            cost: data.cost,
            imageURL: imageURL,
      }

      const url = `http://localhost:5040/addService`;
      console.log(serviceData);
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(serviceData),
      }).then((res) => console.log("server site response", res));

    }
      
      const handleImageUpload = (service) => {
        console.log(service.target.files[0]);
        const imageData = new FormData();
        imageData.set("key", "4a02781230ecb252cbdeb68ed6167b25");
        imageData.append("image", service.target.files[0]);
        axios
          .post("https://api.imgbb.com/1/upload", imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
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
              <div className="col-md-9">
                <p>Service Name</p>
                <input
                  {...register("name", { required: true })}
                  placeholder="Service Name"
                />
              </div>
              <div className="col-md-3">
                <p>Description</p>
                <input
                  {...register("description", { required: true })}
                  placeholder="Description"
                />
              </div>
            </div>
            <div
              style={{ marginTop: "15px", marginRight: "150px" }}
              className="row"
            >
              <div className="col-md-9">
                <p>Add Cost</p>
                <input
                  {...register("cost", { required: true })}
                  placeholder="Cost"
                />
              </div>
              <div className="col-md-3">
                <p>Upload Service Photo</p>
                <input
                  {...register("exampleRequired")}
                  type="file"
                  onChange={handleImageUpload}
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
    );
};

export default AddService;