import React from 'react';
import Header from '../Header/Header';
import './Home.css';  
import MainBody from '../MainBody/MainBody';
import Feature from '../Feature/Feature';
const Home = () => {
    return (
        <div>
          <Header></Header>
          <MainBody></MainBody>
          <Feature></Feature>
            
        </div>
    );
};

export default Home;