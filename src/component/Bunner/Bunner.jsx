import React from 'react';
import BunnerImg from '../../assets/All Images/P3OLGJ1 copy 1.png'

const Bunner = () => {
    return (
       <div className='bg-slate-50'>
         <div className='w-[90%] mx-auto flex lg:flex-row gap-8 flex-col-reverse lg:py-10 py-6
        justify-between items-center'>
            <div className='text-left'>
                 <h2 className='text-5xl  font-bold'>One Step <br />
                 <span>Closer To Your</span> <br /> <span className='text-indigo-600'>Dream Job</span></h2>
                 <p className='text-xl py-4'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                 <button className='py-3 px-8 bg-gradient-to-r from-blue-400 to-indigo-600 text-white rounded-md hover:bg-cyan-600 text-xl '>Get Strted</button>
            </div>
            <img className='md:w-[40%]' src={BunnerImg} alt="" />
        </div>
       </div>
    );
};

export default Bunner;