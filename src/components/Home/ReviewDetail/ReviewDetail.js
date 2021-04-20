import React from 'react';

const ReviewDetail = ({review}) => {
    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <p className="card-text text-center">{review.opinion}</p>
            </div>
            <div className="card-footer d-flex  align-items-center">
                <img className="mx-3" src={review.imageURL} alt="" width="60"/>
                <div>
                    <h6 className="text-primary">{ review.name}</h6>
                    <p className="m-0">{review.place}</p>
                </div>
            </div>
       </div>
    );
};

export default ReviewDetail;