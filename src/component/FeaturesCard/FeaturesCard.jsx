import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollar, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const FeaturesCard = ({ features }) => {
    const navigate = useNavigate();
  
    const {
      Location,
      picture,
      id,
      title,
      job_title,
      salary,
      job_type,
      duty_time,
    } = features;
  
    const handleShowDetails = (id) => {
      navigate("/details", { state: { id: id } });
    };
  
    return (
      <div>
        <div className="border border-indigo-400 p-5 rounded-md shadow-sm">
          <img className="h-16 w-36  bg-gray-100 p-5" src={picture} alt="" />
          <h3 className="text-xl font-semibold pt-2">{job_title}</h3>
          <h5 className="text-gray-500 text-lg">{title}</h5>
  
          <div className="flex gap-3 py-2">
            <button className="border text-indigo-600 border-indigo-800 py-2 px-3 rounded-md font-bold hover:text-white duration-200 hover:bg-indigo-400">
              {job_type}
            </button>
            <button className="border text-indigo-600 border-indigo-800 py-2 px-3 rounded-md font-bold hover:text-white duration-200 hover:bg-indigo-400">
              {duty_time}
            </button>
          </div>
  
          <div className="flex gap-4 py-2">
            <div className="flex">
              <h3>
                <FontAwesomeIcon
                className="h-5 w-5 mr-2 text-indigo-400"
                icon={faLocationDot}
              />
              </h3>
              <h3>{Location}</h3>
            </div>
            <div className="flex">
              <h3>
                <FontAwesomeIcon
                className="h-5 w-5 mr-2 text-indigo-400"
                icon={faDollar}
              />
              </h3>
              <h3>Salary:{salary}</h3>
            </div>
          </div>
  
          <button
            onClick={() => handleShowDetails(id)}
            className="rounded-md text-semibold py-2 bg-gradient-to-r from-blue-400 to-indigo-600 px-3 text-white"
          >
            View Details
          </button>
        </div>
      </div>
    );
  };

export default FeaturesCard