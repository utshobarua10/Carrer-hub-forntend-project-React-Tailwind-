import React from 'react';
import bannerImage from '../../All Images/P3OLGJ1 copy 1.png'
import './Banner.css'


const Banner = () => {
    return (
        <div className='banner'>
            <div className="banner-body">
            <h3 className='banner-heading'>One Step <br /> Closer To Your <br /> <span className='dream-job'>Dream Job</span></h3>
            <p className='banner-sub-heading'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
            <button className='button'>Get Started</button>
            </div>

            <div>
                <img src={bannerImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;