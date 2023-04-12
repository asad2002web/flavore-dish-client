import React, { useEffect, useState } from "react";

const JobCategories = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const jobData = async () => {
      fetch("jobCategories.json")
        .then((res) => res.json())
        .then((data) => setData(data));
    };
    jobData();
  }, []);

  return (
    <div>
      <div className="text-center text-gray-900 pt-12">
        <h3 className="text-3xl font-bold">Job Category List</h3>
        <p className="text-lg pt-3">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-7 w-[90%] mx-auto py-6">
        {data.map((singleData) => {
          return (
            <div className="shadow-md p-6 bg-slate-50">
              <img
                className="h-12 w-12 rounded-sm"
                src={singleData.job_logo}
                alt="job-logo"
              />
              <h2 className="text-xl font-bold py-3">{singleData.job_name}</h2>
              <p className="text-xl">{singleData.available_job} Job Available</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobCategories;
