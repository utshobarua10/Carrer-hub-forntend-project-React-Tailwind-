import React from 'react';
import facebook from '../../All Images/images/facebook.png'
import instagram from '../../All Images/images/instagram.png'
import twitter from '../../All Images/images/twitter.png'


const Footer = () => {
    return (
        <div className='flex justify-center space-x-10 bg-black p-10 text-white'>
            <div className='1st-column'>
                <p className='text-2xl font-extrabold'>Job Hub</p>
                <p>There are many variations of passages of Lorem Ipsum , <br /> but the majority have suffered alteration in some form.</p>
                <div className='flex space-x-5 mt-5'>
                    <img src={facebook} className='w-[50px]' alt="" />
                    <img src={instagram} className='w-[50px]' alt="" />
                    <img src={twitter} className='w-[50px]' alt="" />
                </div>
            </div>
            <div className='2nd-column'>
                <p className='text-2xl font-extrabold'>Company</p>
                <p>About Us</p>
                <p>Work</p>
                <p>Latest News</p>
                <p>Carrers</p>
            </div>
            <div className='3rd-column '>
                <p className='text-2xl font-extrabold'>Product</p>
                <p>Prototype</p>
                <p>Plans & Pricing</p>
                <p>Customers</p>
                <p>Integration</p>
            </div>
            <div className='4th-column'>
                <p className='text-2xl font-extrabold'>Support</p>
                <p>Help Desk</p>
                <p>Sales</p>
                <p>Become a partner</p>
                <p>Developers</p>
            </div>
            <div className='5th-column'>
                <p >524 Broadway , NYC</p>
                <p>+1 777 - 978 - 5570</p>
            </div>


        </div>
    );
};

export default Footer;