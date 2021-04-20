import React from 'react';
import CardInfo from '../CardInfo/CardInfo';

import { faClock,faMapMarker, faPhone } from "@fortawesome/free-solid-svg-icons";
const infoData=[
    {
        title:'Service Time',
        description:'We are highly active 24/7 hours',
       icon: faClock,
       background:'primary'
    },
    {
        title:'Our Office Location',
        description:'337, Ghoramara, Bolyea,Rajshahi ',
        icon: faMapMarker ,
        background:'danger'
      
    },
    {
        title:'Connect with Us',
        description:'01719239021',
       icon:  faPhone,
       background:'primary'
    }
]
const BusinessInfo = () => {
    return (
      <section className='container'>
            <div className="row ">
            {
                infoData.map(info=><CardInfo info={info}></CardInfo>)
            }
        </div>
      </section>
    );
};

export default BusinessInfo;