import React from 'react';
import Header from '../Header/Header';
import './Home.css';  
import MainBody from '../MainBody/MainBody';
import Feature from '../Feature/Feature';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import JobDetails from '../JobDetails/JobDetails';

const Home = () => {
 

    return (
        <div>
          
          <Header></Header>
          <MainBody></MainBody>
          <Feature></Feature> 
          <Footer></Footer>


            
        </div>
    );
};

export default Home;