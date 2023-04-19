import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import './AppliedJobs.css'
import google from '../../All Images/google-1-1 1.png'
import JobDetails from '../JobDetails/JobDetails';
const AppliedJobs = () => {
    return (
        <div>
                <div className='bg-background h-[200px]'>
                <h3 className='font-bold text-center '>Applied Jobs</h3>
                </div>
            
            <div className='applied-single-job space-y-5 flex items-center justify-between'>
                <div className='bg-slate-400 w-[180px] h-[180px] rounded'> <img src={google} className='mx-auto my-16' alt="" /></div>
                
                <div className='space-y-5'>
                    <h3>Technical Job Interview </h3>
                    <p>Google LLC</p>
                    <button className='border border-blue-600 text-blue-600'>Remote</button> <button className='border border-blue-600 text-blue-600 ml-10'>Full Time</button> <br/>
                    <FontAwesomeIcon icon={faLocationDot} ></FontAwesomeIcon> <span>Dhaka,Bangladesh</span>
                    
                    <FontAwesomeIcon className='ml-20' icon={faDollarSign}></FontAwesomeIcon> <span>Salary 70k-90k</span>
                    
                </div>

                <button className='view-details-btn'>View Details</button>


            </div>
           


        </div>



    );
};

export default AppliedJobs;