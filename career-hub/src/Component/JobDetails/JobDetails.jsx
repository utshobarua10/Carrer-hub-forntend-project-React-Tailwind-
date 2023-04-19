import React, { useState } from 'react';
import './JobDetails.css'
import leftCorner from '../,../../../All Images/Vector-1.png'
import rightCorner from '../,../../../All Images/Vector.png'
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const data = useLoaderData();
    // console.log(data)
    const {id} = useParams();
    const [details, setDetails] = useState([]);

    const result = data.find(dt=> dt.id==id);
    console.log(result)


    return (
        <div>
             <div className='bg-background h-[200px] static'>
                <img src={rightCorner} className='absolute bottom-[275px] left-0' alt="" />
                <img src={leftCorner} className='absolute top-0 right-0 z-1 ' alt="" />
                <h3 className='text-center m-auto font-bold text-3xl'>Job Details</h3>
            </div>
            {/* Job container */}
            <div className="job-container flex  ">
                {/* Job brief */}
                <div className="job-brief space-y-5 ">
                <h3><span className='font-bold'>Job description:</span>  {result.jobDescription} </h3>
                <p><span className='font-bold'>Job Reponsibility</span> {result.jobResponsibility}</p>
                <h3 className='font-bold'>Education Requirements</h3>
                <p>{result.educationRequirements}</p>
                <h3 className='font-bold'>Experince</h3>
                <p>{result.experience}</p>
                

                </div>
                {/* Job brief ends */}
                {/* Job details */}
                <div className="job-details space-y-10">
                    <div className="full-job-information bg-background p-5 space-y-5">
                    <div className="details">
                        <h3 className='font-bold'>Job details</h3>
                        {/* icon */} <h3><span className='font-bold'>Salary: </span> 100k-150k(per month)</h3>
                        {/* icon */} <h3><span className='font-bold'>Job title: </span> Product Designer</h3>

                    </div>
                    <div className="contact-information space-y-5">
                        <h3 className='font-bold'>Contact Information</h3>
                        <h3><span className='font-bold'>Phone: </span> 013000000</h3>
                        <h3><span className='font-bold'>Email: </span> Info@gmail.com</h3>
                        <h3><span className='font-bold'>Address: </span> Dhanmodni, Shukrabad, Dhaka -1100</h3>
                    </div>

                <button className='button'>Apply Now</button>

                    </div>


                </div>
                {/* job details end */}
            </div>
        </div>
    );
};

export default JobDetails;