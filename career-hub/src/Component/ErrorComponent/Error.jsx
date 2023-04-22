import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    let error = useRouteError();
    console.log(error);
    return (
        
        <div className='text-center'>
        <p>Status: {error.status}</p>
        <p>Data: {error.data}</p>
        </div>
    );
};

export default Error;