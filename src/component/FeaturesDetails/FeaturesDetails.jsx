import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { addToDb } from '../utilities/fakeDb';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMailBulk, faMapLocationDot, faCalendar, faDollar } from "@fortawesome/free-solid-svg-icons";


const FeaturesDetails = () => {
    const [jobs, setjobs] = useState([])
    
    const location = useLocation()
   const stateId = location.state.id;

    useEffect(()=>{
        fetch("jobDetails.json")
       .then(res=>res.json())
       .then (data=>setjobs(data));
       },[]) 
   const jobsId =jobs&&jobs.find(job=>job.id == stateId)


   const handleApplyJob = (id)=>{
     addToDb(id)
     
   }
    
    return (
        <div className='flex lg:flex-row flex-col py-20 justify-between gap-4 w-[80%] mx-auto'>
            <div className='text-left lg:w-[60%] w-[90%] mx-auto'>
                <h5><span className='font-bold text-xl'>Job Description</span>: {jobsId&&jobsId.job_descrioption}</h5>
                <h5 className='py-3'><span className='font-bold text-xl'>Job Responsibility</span>: {jobsId&&jobsId.job_responsibility}</h5>
                <h5 className='py-3'><span className='font-bold text-xl'>Educational requirment</span>: {jobsId&&jobsId.Educational_requirnment}</h5>
                <h5 className='py-3'><span className='font-bold text-xl'>Experiance</span>: {jobsId&&jobsId.Exeriance}</h5>
            </div>
            <div className=' px-5 bg-slate-50 p-5 lg:w-[35%] w-90% mx-auto'>
                <h4 className='font-bold text-xl  border-b-2 border-gray-500'>Job Details</h4>

                <div className='flex items-center '>
                <h3>
                <FontAwesomeIcon
                className="h-7 w-7 text-indigo-400"
                icon={faDollar}
              />
                    </ h3>
                    <h5 className='text-lg ml-1'><span className='font-bold'>salary</span>:{jobsId&&jobsId.salary}(per month)</h5>
                    
                </div>
                <div className='flex items-center py-2'>
                <h3><FontAwesomeIcon
                className="h-7 w-7 text-indigo-400"
                icon={faCalendar}
              />
                    </ h3>
                    <h5 className='text-lg ml-1'><span className='font-bold'>Job Title</span>:{jobsId&&jobsId.job_title}</h5>
                    
                </div>
                <h4 className='font-bold text-xl border-b-2 border-gray-500'>Contuct Information</h4>

                <div className='flex items-center py-2'>
                <h3>
                    <FontAwesomeIcon
                className="h-7 w-7 text-indigo-400"
                icon={faPhone}
              />
                
                </ h3>
                    <h5 className='text-lg ml-1'><span className='font-bold'>Phone</span>:{jobsId&&jobsId.phone}</h5>
                    
                </div>
                <div className='flex items-center py-2'>
                <h3><FontAwesomeIcon
                className="h-7 w-7 text-indigo-400"
                icon={faMailBulk}
              /></ h3>
                    <h5 className='text-lg ml-1'><span className='font-bold'>Email</span>:{jobsId&&jobsId.gmail}</h5>
                    
                </div>
                <div className='flex items-center py-3'>
                <h3><FontAwesomeIcon
                className="h-7 w-7 text-indigo-400"
                icon={faMapLocationDot}
              /></ h3>
                    <h5 className='text-lg ml-1'><span className='font-bold'>Adress</span>:{jobsId&&jobsId.Adress}</h5>
                    
                </div>
            <button onClick={()=>handleApplyJob(jobsId.id)}
             className='w-[95%] text-xl py-2 rounded-md mx-auto bg-cyan-600 hover:bg-cyan-500 text-white'>Apply Now</button>
                
            </div>
                
        </div>
    );
};

export default FeaturesDetails