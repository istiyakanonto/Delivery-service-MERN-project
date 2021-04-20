import React, { useEffect, useState } from 'react';
import product from '../../../photo/product.png'
import medicine from '../../../photo/medicine.jpg'
import expensive from '../../../photo/expensive.jpg'
import ServiceDetail from '../ServiceDetail/ServiceDetail';
const Services = () => {
    const [loading, setLoading] = useState(true);
    const [service, setService] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:5040/service")
          .then((res) => res.json())
          .then((data) => {
            setService(data);
            setLoading(false);
          });
      }, []);

    return (
        <section>

            <div>
            <h1 style={{textAlign: 'center',fontWeight:'bold',marginBottom:'30px'}}> <span style={{color: '#4B0016'}}>Our Amazing</span> <span style={{color:'#F4A32C'}}>Services</span> </h1>
            </div>
            <div className='container'>
            {loading && (
        <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden"></span>
          </div>
        </div>
      )}
            <div  style={{borderBottom:'1px solid black'}}  className="row ">
            {
                service.map(service=><ServiceDetail service={service}></ServiceDetail>)
            }
        </div>
      </div>

        </section>
    );
};

export default Services;