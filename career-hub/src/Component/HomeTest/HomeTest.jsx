import React from 'react';
import { Outlet } from 'react-router-dom';

const HomeTest = () => {
    return (
        <div>
            <h3> This is the home page </h3>
            <Outlet></Outlet>
        </div>
    );
};

export default HomeTest;