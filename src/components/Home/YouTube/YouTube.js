import React from 'react';
import ReactPlayer from 'react-player';
const YouTube = () => {
    return (
       <section style={{textAlign: 'center'}} className="container App ">
           <div className='mb-5'  >
               <h1> <span style={{color:'#4B0016'}}>Lets Clarify Our Working</span> <br/> <span style={{color:'orange'}}>Process</span> </h1>
           </div>
           <div className='justify content-center' style={{marginLeft:'250px'}}>
           <ReactPlayer url="https://www.youtube.com/watch?v=7_uBEZgXtGM" controls={true}/>
           </div>
          
       </section>
    );
};

export default YouTube;