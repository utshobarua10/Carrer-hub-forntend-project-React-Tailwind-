import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import './Header.css';
import MainBody from '../MainBody/MainBody';
const Header = () => {
    return (
        <div className='header-body'>
            <Navbar></Navbar>
            <Banner></Banner>
            
        </div>
    );
};

export default Header;