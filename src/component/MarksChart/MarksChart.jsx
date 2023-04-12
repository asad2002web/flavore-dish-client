import React, { PureComponent } from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';


const Chart = () => {
    const data = [
        {
          number: 1,
          name: 'assignment 1',
          marks: 60,

        },
        {
            number: 2,
            name: 'assignment 2',
            marks: 59,
        },
        {
            number: 3,
            name: 'assignment 3',
            marks: 60,
        },
        {
            number: 4,
            name: 'assignment 4',
            marks: 60,
        },
        {
            number: 5,
            name: 'assignment 5',
            marks: 54,
        },
        {
            number: 6,
            name: 'assignment 6',
            marks: 51,
        },
        {
            number: 7,
            name: 'assignment 7',
            marks: 60,

        },
        {
            number: 8,
            name: 'assignment 8',
            marks: 58,

        },
    ];
    const sum = data.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.marks;
    }, 0);
    
    const average = (sum / data.length).toFixed(2); 
  
    return (
     <div>
      <div className='text-center mt-20'>
      <h5 className='text-2xl font-bold'>avarage Mark :{average}</h5>
      </div>
        <div className='py-10 flex justify-center items-center'>
           <ResponsiveContainer width="60%" height={400}>
          <ScatterChart
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid />
            <XAxis type="string" dataKey="number" unit="" name="number" />
            <YAxis type="number" dataKey="marks" name="marks" />
            <ZAxis type="number" dataKey="name" range={[60, 400]} name="name"  />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Legend />
            <Scatter name="assignment marks" data={data} fill="#8884d8" shape="star" />
          </ScatterChart>
        </ResponsiveContainer>
        </div>
     </div>
      );
};

export default Chart;