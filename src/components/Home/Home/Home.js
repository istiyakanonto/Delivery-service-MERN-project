import React from 'react';
import AppService from '../AppService/AppService';
import './Home.css'

import Header from '../Header/Header';
import Services from '../Services/Services';
import Review from '../Review/Review';
import YouTube from '../YouTube/YouTube';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div className="home-style">
           <Header></Header>
           <Services></Services>
           <AppService></AppService>
           <Review></Review>
           <YouTube></YouTube>
           <Footer></Footer>
          </div>
    );
};

export default Home;