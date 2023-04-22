import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import google from '../../All Images/google-1-1 1.png';

import './SingleJobs.css';
import JobDetails from '../JobDetails/JobDetails';
import { Link } from 'react-router-dom';

const SingleJob = (props) => {
    // console.log(props)
    const{postName, companyName, jobType, location, salary, logo,id} = props.job;
    
    return (
        <div>
            
            <div className="single-job space-y-3 border p-8">
                    <img src={logo} className='h-20' alt="" />
                    <p className='text-bold'>{postName}</p>
                    <p className='text-[#757575]'>{companyName}</p>
                    <div className="button-set  space-x-3">
                        <button className='border border-blue-600 text-blue-600'>{jobType}</button>
                        <button className='button-set border border-blue-600 text-blue-600'>Full time</button>
                    </div>
                    <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>  <span>{location}</span>
                    <FontAwesomeIcon icon={faDollarSign} className='ml-3'></FontAwesomeIcon> <span>Salary: {salary}</span>
                    <br />
                    <Link to ={`jobDetails/${id}`}  ><button className='view-details-btn'>View Details</button></Link>
                </div>



                {/* Single job end up in here */}
        </div>
    );
};

export default SingleJob;