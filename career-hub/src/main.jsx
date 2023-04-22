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

import MainBody from './Component/MainBody/MainBody';
import Banner from './Component/Banner/Banner';
import AppliedJobs from './Component/AppliedJobs/AppliedJobs';
import loaderData from './Component/LoadData/LoadData';
import JobDetails from './Component/JobDetails/JobDetails';
import Error from './Component/ErrorComponent/Error';
import Blogs from './Component/BlogsComponent/Blogs';

const router = createHashRouter([

  {
    path: '/',
    element: <Navbar></Navbar>,
    loader: loaderData,
    errorElement :<Error></Error>,
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
      
      
    },{
      path :'/blogs',
      element : <Blogs></Blogs>
    }
  ]
  }




]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
