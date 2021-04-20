import React from 'react';
import  { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
const ReviewUs = () => {
    const [imageURL, setImageURL] = useState(null);
    const {register,handleSubmit,watch,formState: { errors }} = useForm();

    const onSubmit = (data) => {
        const reviewData = {
            name: data.name,
            opinion: data.opinion,
            place: data.place,
            imageURL: imageURL,
      }
      const url = `http://localhost:5040/addReview`;
      console.log(reviewData);
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewData),
      }).then((res) => console.log("server site response", res));


    }
    const handleImageUpload = (review) => {
        console.log(review.target.files[0]);
        const imageData = new FormData();
        imageData.set("key", "302213d65d040f9346c9c59ef2a0b317");
        imageData.append("image", review.target.files[0]);
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
        <h1 className="icon">Add Your Valuable Opinion</h1>
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
                <p>Your Name</p>
                <input
                  {...register("name", { required: true })}
                  placeholder=" Your Name"
                />
              </div>
              <div className="col-md-3">
                <p>Opinion</p>
                <input
                  {...register("opinion", { required: true })}
                  placeholder="Opinion"
                />
              </div>
            </div>
            <div
              style={{ marginTop: "15px", marginRight: "150px" }}
              className="row"
            >
              <div className="col-md-9">
                <p>Add Place</p>
                <input
                  {...register("place", { required: true })}
                  placeholder="Country"
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

export default ReviewUs;