import React, { useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import './ServiceDetail.css'
import { IdContext } from '../../../App';
const ServiceDetail = ({service}) => {
    const [id, setId] = useContext(IdContext);
  
    const handleUpdate=()=>{
      setId({
        id:service._id
      })
    }
    return (
        <div className="col-md-4">
      <div style={{ marginBottom: "30px" }} class="card">
        <div class="card-image">
          <img
            style={{ height: "300px", width: "350px",paddingTop: "20px" }}
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
            <div style={{fontWeight: 'bold',fontSize:'20px',color: '#4B0016',borderBottom: '1px solid gray'}} class="value">
              Service <br/> Description
            </div>
            <div style={{color: 'black'}}class="type"> {service.description}</div>
          </div>
          <div class="stat border">
            <div style={{fontWeight: 'bold',fontSize:'20px',color: '#4B0016'}} class="value">Wanna order??</div>
            <div class="type">
              <Link to={`/checkout/${service._id}`}>
              <button onClick={handleUpdate} className="btn btn1">
                Make Order <FontAwesomeIcon icon={faShoppingBag} />
              </button>
              </Link>
            </div>
          </div>
          <div class="stat">
            <div style={{fontWeight: 'bold',fontSize:'20px',color: '#4B0016',borderBottom: '1px solid gray'}} class="value">Discount Price</div>
            <div style={{fontWeight: 'bold',fontSize:'30px',color:'orange'}}class="type">{service.cost}$</div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ServiceDetail;