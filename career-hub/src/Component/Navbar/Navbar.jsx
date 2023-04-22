import React from 'react';
import { Link, Outlet } from "react-router-dom";

import './Navbar.css'
const Navbar = () => {
    return (
        <div>
        <div className='navbar '>
                <p className='logo'>JOB HUB</p>
                     <div className='middle-bar'>
                     <Link to='/'>Home</Link>
                    <Link to='/statistics'>Statistics</Link>
                    <Link to='/appliedJobs'>Applied Jobs</Link>
                    <Link to='/blog' >Blog</Link>
                    
                </div>
            <button className='button'>Start Applying</button>
                </div>
              <Outlet></Outlet>         
        </div>
       

        
    );
};

export default Navbar;