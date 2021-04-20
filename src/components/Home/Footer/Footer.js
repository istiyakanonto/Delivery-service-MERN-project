import React from 'react';
import './Footer.css';
import FooterDetails from '../FooterDetails/FooterDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {

    const noNamed = [
        {name: "Emergency Products" , link: "/emergency"},
        {name: "General Products" , link: "/General"},
        {name: "Medicine Products" , link: "/Medicine"},
        {name: "Expensive Products" , link: "/Expensive"},
        {name: "Food Product" , link: "/food"},
    ]
    const ourAddress = [
        {name: "337,Ghoramara Bolia, Rajshahi" , link: "//google.com/map"},
        {name: "Drutota" , link: "//google.com/map"},
       
    ]
    const ourTarget = [
        {name: "Fast Delivery" , link: "/fast"},
        {name: "Security" , link: "/security"},
        {name: "transparency" , link: "/transparency"},
        {name: "accountability" , link: "/accountability"},
        {name: "Product Delivery" , link: "/productDelivery"},
        {name: "Product Delivery" , link: "/productDelivery"},
        {name: "Product Delivery" , link: "/productDelivery"}
    ]
    const services = [
        {name: "Emergency Products" , link: "/emergency"},
        {name: "General Products" , link: "/General"},
        {name: "Medicine Products" , link: "/Medicine"},
        {name: "Expensive Products" , link: "/Expensive"},
        {name: "Product Delivery" , link: "/productDelivery"},
        {name: "Product Delivery" , link: "/productDelivery"},
        {name: "Product Delivery" , link: "/productDelivery"}
    ]
    return (
        <footer style={{backgroundColor:'black',marginTop:'50px',color:'orangeRed'}} className=" container footer-area clear-both">
        <div className="container pt-5">
            <div className="row py-5">
                <FooterDetails key={1} menuTitle={"###"} menuItems={noNamed}/>
                <FooterDetails  key={2} menuTitle="Services" menuItems={services}/>
                <FooterDetails key={3} menuTitle="Our Target" menuItems={ourTarget}/>
                <FooterDetails key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                    <ul className="social-media list-inline">
                        <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                        <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                        <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                    </ul>
                    <div className="mt-5">
                        <h6>Call now</h6>
                        <button className="btn btn-1">+883419031</button>
                    </div>
                </FooterDetails>
            </div>
            <div className="copyRight text-center">
                <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
            </div>
        </div>
    </footer>
    );
};

export default Footer;