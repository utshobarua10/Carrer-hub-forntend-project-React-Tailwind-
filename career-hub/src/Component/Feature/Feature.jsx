import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import google from '../../All Images/google-1-1 1.png';
import netflix from '../../All Images/netflix-4 1.png'
import tesla from '../../All Images/tesla-9 1.png'
import './Feature.css'

import './Feature.css';
import { useLoaderData } from 'react-router-dom';
import SingleJob from '../SingleJob/SingleJob';

const Feature = () => {
    
    const data = useLoaderData();
    const jobs = data;
    
    return (
        <div className='feature-body'>
            <h3 className='text-2xl font-bold text-center'>Feature Job</h3>
            <p className='text-[#757575] text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className='jobs'>

                {/* Single job start from here */}

                {
                    jobs.map(job=><SingleJob job={job}></SingleJob>)
                }
                
                               


                

            </div>

            <div className="see-all-jobs flex justify-center mt-5">
            <button className='button'>See All Jobs</button>
            </div>

        </div>
    );
};

export default Feature;