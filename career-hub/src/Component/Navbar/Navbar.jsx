import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='navbar'>
            <p className='logo'>JOB HUB</p>
            <ul className='middle-bar'>
                <li>Statistics</li>
                <li>Applied Jobs</li>
                <li>Blog</li>
            </ul>
            <button className='button'>Start Applying</button>
        </div>
    );
};

export default Navbar;