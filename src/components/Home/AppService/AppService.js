
import React from "react";
import app1 from '../../../photo/app-1.png'
import app2 from '../../../photo/app-2.png'
import app3 from '../../../photo/app-3.png'
import app4 from '../../../photo/app-4.png'
import phn from '../../../photo/app-mockup.png'
const AppService = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
<h1> <span style={{color:'#4B0016'}}>Download Our</span> <span style={{color:'orange'}}>App</span> </h1>
<p className="mt-4">There anyone who loves or pursues nor desires to obtain pain <br/>
 occasionally can packages as their default.</p>

 <div className='d-flex align-items-center my-5' style={{display:'flex'}}>
     <img src={app1} alt="err"/>
     <h5 style={{marginLeft:'20px'}}>End to End Facilitation</h5>
 </div>

 <div className='d-flex align-items-center my-5' style={{display:'flex'}}>
     <img src={app2} alt="err"/>
     <h5 style={{marginLeft:'20px'}}>Real Time Updates & Tracking</h5>
 </div>

 <div className='d-flex align-items-center my-5' style={{display:'flex'}}>
     <img src={app3} alt="err"/>
     <h5 style={{marginLeft:'20px'}}>Safety, Security, Confidentiality</h5>
 </div>

 <div className='d-flex align-items-center my-5' style={{display:'flex'}}>
     <img src={app4} alt="err"/>
     <h5 style={{marginLeft:'20px'}}>Save Time & Effort</h5>
 </div>
        </div>

        <div className="col-md-6">
<img src={phn} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default AppService;
