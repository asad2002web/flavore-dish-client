import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getselectJob } from "../utilities/fakeDb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faDollar } from "@fortawesome/free-solid-svg-icons";

const AppliedJobs = () => {
  const navigate = useNavigate();

  const [fetureData, setFetureData] = useState([]);
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const jobsData = await fetch("jobDetails.json");
      const data = await jobsData.json();

      const savedJob = getselectJob();
      const initialJob = [];
      for (const id in savedJob) {
        const foundProduct = data.find((singleData) => singleData.id === id);
        if (foundProduct) {
          const quantity = savedJob[id];
          foundProduct.quantity = quantity;
          initialJob.push(foundProduct);
        }
        setFetureData(initialJob);
        setDatas(initialJob);
      }
    };
    loadData();
  }, []);

  const handleShowDetails = (id) => {
    navigate("/details", { state: { id: id } });
  };

  const handleFilter = (e) => {
    let value = e.target.value;
    if (value == "Remote") {
      const filter = fetureData.filter((d) => d.job_type == "Remote");
      console.log(filter);
      setDatas(filter);
    } else if (value == "Onsit") {
      const filter = fetureData.filter((d) => d.job_type == "Onsite");
      console.log(filter);
      setDatas(filter);
    }
  };

  return (
    <div className="w-[90%] mx-auto py-12">
      <div className="flex justify-end items-end">
        <select
          onChange={handleFilter}
          className="select w-44 max-w-xs bg-slate-100"
        >
          <option disabled selected>
            Filter By
          </option>
          <option value="Remote">Show Remote Job</option>
          <option value="Onsit">Show onsite Job</option>
        </select>
      </div>
      <div className="py-20 justify-center flex flex-col gap-5 ">
        {datas.map((singleJob) => {
          return (
            <div className="flex md:flex-row flex-col justify-between rounded-md items-center border border-indigo-700 p-5 w-[80%] mx-auto">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div>
                  <img
                    className="h-16 w-28 p-4  bg-gray-100"
                    src={singleJob.picture}
                    alt=""
                  />
                </div>

                <div>
                  <h2 className="text-xl font-bold">{singleJob.job_title}</h2>
                  <h3 className="text-lg">{singleJob.title}</h3>
                  <div className="flex gap-2 my-3">
                    <button className="border text-indigo-600 border-indigo-300 py-2 px-3 rounded-md font-bold hover:text-white duration-200 hover:bg-indigo-600">
                      {singleJob.job_type}
                    </button>

                    <button className="border text-indigo-600 border-indigo-300 py-2 px-3 rounded-md font-bold hover:text-white duration-200 hover:bg-indigo-600">
                      Full Time
                    </button>
                  </div>

                  <div className="flex gap-4 py-2">
                    <div className="flex">
                      <h3>
                      <FontAwesomeIcon
                className="h-5 w-5 pr-2 text-indigo-400"
                icon={faLocationDot}
              />
                      </h3>
                      <h3>{singleJob.Location}</h3>
                    </div>
                    <div className="flex">
                      <h3>
                      <FontAwesomeIcon
                className="h-5 w-5 pr-2 text-indigo-400"
                icon={faDollar}
              />
                      </h3>
                      <h3>Salary:{singleJob.salary}</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={() => handleShowDetails(singleJob.id)}
                  className="rounded-md text-semibold py-2 px-3 bg-gradient-to-r from-blue-400 to-indigo-600 text-white"
                >
                  View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AppliedJobs;
