import React from 'react';
import './Statistics.css'
import Chart from 'chart.js/auto';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';


const assignmentMarks = [
    {
        "name": "Assignment 1",
        "marks": 60
    },
    {
        "name": "Assignment 2",
        "marks": 44
    },
    {
        "name": "Assignment 3",
        "marks": 43
    },
    {
        "name": "Assignment 4",
        "marks": 60
    },
    {
        "name": "Assignment 5",
        "marks": 15
    },
    {
        "name": "Assignment 6",
        "marks": 60
    },
    {
        "name": "Assignment 7",
        "marks": 49
    },
    {
        "name": "Assignment 8",
        "marks": 60
    }
]



const Statistics = () => {

    return (
        <div className='text-center '>

        <PieChart width={400} height={400} className='mx-auto'>
            <Pie
                dataKey="marks"
                isAnimationActive={false}
                data={assignmentMarks}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
            />
            
            <Tooltip />
            
        </PieChart>
        <p>Assignment Marks Of Utsho Barua</p>
        </div>

    );
};

export default Statistics;