import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faLocationDot } from '@fortawesome/free-solid-svg-icons'


import './Feature.css';

const Feature = () => {
    return (
        <div className='feature-body'>
                <h3 className='text-2xl font-bold text-center'>Feature Job</h3>
                <p className='text-[#757575] text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>

                <div className='jobs'>

                <div className="single-job space-y-3 border border-blue-500 p-3">
                    <img src="" alt="" />
                    <p className='text-bold'>Technical Database Engineer</p>
                    <p className='text-[#757575]'>Google LLC</p>
                    <div className="button-set space-x-3">
                        <button className='button-set'>Remote</button>
                        <button className='button-set'>Full time</button>
                    </div>
                <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>  <span>Dhaka,Bangladesh</span>
                 <FontAwesomeIcon icon={faDollarSign} className='ml-3'></FontAwesomeIcon> <span>Salary 100k-150k</span>
                </div>

                




                </div>

        </div>
    );
};

export default Feature;