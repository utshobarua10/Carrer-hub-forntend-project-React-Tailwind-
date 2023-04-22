import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import './AppliedJobs.css'
import google from '../../All Images/google-1-1 1.png'
import JobDetails from '../JobDetails/JobDetails';
import { getLocalStorage } from '../../../localStorage';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';


const AppliedJobs = () => {
    

    const carrerHubDataSet= useLoaderData();
    // console.log(carrerHubDataSet); 
    const data = getLocalStorage();
    const idSet = Object.keys(data)

    
    let filteredJobs = [];
        for(let id of idSet){
            // console.log(id)
        const filteredJob = carrerHubDataSet.filter(job=> job.id==id ); 
        filteredJobs.push(filteredJob[0])
    
    }
    const [filtered, setFiltered] = useState(filteredJobs)    
    
    
    const onSiteButton =()=>{
        const onSite = carrerHubDataSet.filter(job =>job.jobType=='On Site')    
        setFiltered([...onSite])   
        
    }
    const remoteButton =()=>{
        const remote = carrerHubDataSet.filter(job =>job.jobType=='Remote')    
        setFiltered([...remote])   
        
    }
    
    
    
    

    
    


    const location = useLocation();
    const navigation = useNavigate();

    const detailsBtn =(id)=>{
       
        
        navigation(`/jobDetails/${id}`)
        
    }

    
    



    return (
        
        <div className='mb-10'>
                <div className='bg-background h-[200px]'>
                <h3 className='font-bold text-center '>Applied Jobs</h3>
                
                </div>
                <div className='flex justify-end space-x-5 m-5 '>
                <button className=' border border-indigo-600' onClick={onSiteButton}>On Site</button>
                <button className=' border border-indigo-600' onClick={remoteButton}>Remote</button>
                </div>
                {   
                
                    filtered.map(filter=> 
                        
                        <div key={filter.id} className='mt-10 applied-single-job space-y-5 flex items-center justify-between'>
                        
                            <div className='bg-slate-400 rounded flex justify-center item-center w-[180px] h-[200px]'> <img src={filter.logo} className='mx-auto my-16' alt="" /></div>
                            
                            <div className='space-y-5 w-[500px]'>
                                <h3>{filter.postName} </h3>
                                <p>{filter.companyName}</p>
                                <button className='border border-blue-600 text-blue-600'>{filter.jobType}</button> <button className='border border-blue-600 text-blue-600 ml-10'>Full Time</button> <br/>
                                <FontAwesomeIcon icon={faLocationDot} ></FontAwesomeIcon> <span>{filter.location}</span>
                                
                                <FontAwesomeIcon className='ml-20' icon={faDollarSign}></FontAwesomeIcon> <span>{filter.salary}</span>
                                
                            </div>
            
                                <button className='view-details-btn' onClick={()=>detailsBtn(filter.id)}>View Details</button> 
                            
            
            
                        </div> )
                }


           


        </div>



    );
};

export default AppliedJobs;