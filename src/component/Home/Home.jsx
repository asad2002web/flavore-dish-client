import React, { useState } from "react";
import Bunner from "../Bunner/Bunner";
import JobCategories from "../JobCategories/JobCategories";
import { useLoaderData } from "react-router-dom";
import FeaturesCard from "../FeaturesCard/FeaturesCard";

const Home = () => {
  const loadFeatureData = useLoaderData();
  const [shawAll, setShawAll] = useState(true);
  const handleSeeAll = () => {
    setShawAll(false);
  };

  return (
    <div>
      <Bunner></Bunner>
      <JobCategories></JobCategories>
      <div className="py-7">
        <div className="text-center text-gray-900 pt-12 py-7">
          <h3 className="text-3xl font-bold">Featured Jobs</h3>
          <p className="text-lg pt-3">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-7 w-[90%] mx-auto">
          {loadFeatureData.slice(0, shawAll ? 4 : 6).map((features) => (
            <FeaturesCard key={features.id} features={features}></FeaturesCard>
          ))}
        </div>
        <div className="text-center py-12">
          {shawAll && (
            <button
              onClick={handleSeeAll}
              className=" rounded-md text-semibold py-2 px-3 bg-gradient-to-r from-blue-400 to-indigo-600 text-white"
            >
              See All Jobs
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
