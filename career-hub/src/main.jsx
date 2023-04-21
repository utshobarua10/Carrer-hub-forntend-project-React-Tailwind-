import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import Navbar from './Component/Navbar/Navbar';
import Statistics from './Component/Statistics/Statistics';
import HomeTest from './Component/HomeTest/HomeTest';
import MainBody from './Component/MainBody/MainBody';
import Banner from './Component/Banner/Banner';
import AppliedJobs from './Component/AppliedJobs/AppliedJobs';
import loaderData from './Component/LoadData/LoadData';
import JobDetails from './Component/JobDetails/JobDetails';

const router = createHashRouter([

  {
    path: '/',
    element: <Navbar></Navbar>,
    loader: loaderData,
    children: [{
      path: '/',
      element: <Home></Home>,
      
      loader : loaderData



    }, {
      path: '/statistics',
      element: <Statistics></Statistics>
    }, 
    {
      path: 'appliedJobs',
      element: <AppliedJobs></AppliedJobs>,
      loader : loaderData

    },
    {
      path : 'jobDetails/:id',
      element: <JobDetails></JobDetails>,
      loader : loaderData
      
      
    }
  ]
  }




]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
