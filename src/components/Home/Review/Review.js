import React, { useEffect, useState } from 'react';
import './Review.css'
import ReviewDetail from '../ReviewDetail/ReviewDetail';
import sam from '../../../photo/review2.png'
import willy from '../../../photo/review1.png'
import martin from '../../../photo/review2.png'



const Review = () => {

    const [review, setReview] = useState([]);
useEffect(() => {
    fetch("http://localhost:5040/review")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
        
      });
  }, []);
    return (
        <section className="testimonials my-5 py-5">
        <div className="container">
            <div style={{textAlign:'center'}} className="section-header">
                <h1 className="text-primary text-uppercase"> <span  style={{color:'#4B0016'}}> Customer </span> <span  style={{color:'orange'}}>Review</span> </h1>
                <h3  style={{color:'#4B0016'}}>Customers Point Of <br/>  <span   style={{color:'orange'}}>View</span> </h3>
            </div>
            <div className="card-deck mt-5">
                 {
                     review.map(review => <ReviewDetail review={review}  key={review.name} > </ReviewDetail>)
                 }
             </div>
        </div>
    </section>
    );
};

export default Review;