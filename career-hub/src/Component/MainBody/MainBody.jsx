import React from 'react';
import './MainBody.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator,faLightbulb,faHashtag,faMicrochip } from '@fortawesome/free-solid-svg-icons'



const MainBody = () => {
    return (
        <div className='main-body '>
            <h3 className='text-2xl font-bold text-center'>Job Category List</h3>
            <p className='text-center text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='category-body mt-10'>
                <div className='categories space-x-5'>
                    <div className='category space-y-3 bg-background p-5 rounded w-[300px]'>
                            <div className='bg-categoryBackground text-center w-[70px] p-4 rounded'>
                            <FontAwesomeIcon icon={faCalculator} className='text-4xl text-blue-500'></FontAwesomeIcon>
                            </div>
                        <p className='font-bold text-xl'>Account & Finance</p>
                        <p className='text-[#A3A3A3]'>300 Jobs Available</p>

                </div>

                <div className='category space-y-3 bg-background p-5 rounded w-[300px]'>
                            <div className='bg-categoryBackground text-center w-[70px] p-4 rounded'>
                            
                            <FontAwesomeIcon icon={faLightbulb} className=' text-4xl text-blue-500'></FontAwesomeIcon>
                            </div>
                        <p className='font-bold text-xl'>Creative Design</p>
                        <p className='text-[#A3A3A3]'>100 Jobs Available</p>

                </div>
                <div className='category space-y-3 bg-background p-5 rounded w-[300px]'>
                            <div className='bg-categoryBackground text-center w-[70px] p-4 rounded'>
                            <FontAwesomeIcon icon={faHashtag} className=' text-4xl text-blue-500'></FontAwesomeIcon>
                            </div>
                        <p className='font-bold text-xl'>Marketing & Sales</p>
                        <p className='text-[#A3A3A3]'>150 Jobs Available</p>

                </div>
                <div className='category space-y-3 bg-background p-5 rounded w-[300px]'>
                            <div className='bg-categoryBackground text-center w-[70px] p-4 rounded'>
                            <FontAwesomeIcon icon={faMicrochip} className='text-4xl text-blue-500'></FontAwesomeIcon>
                            </div>
                        <p className='font-bold text-xl'>Engineering Jobs</p>
                        <p className='text-[#A3A3A3]'>224 Jobs Available</p>

                </div>


            </div>
        </div>
        </div>
    );
};

export default MainBody;