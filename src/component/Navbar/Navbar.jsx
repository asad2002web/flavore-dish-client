import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="mx-20 divide-y">
      <li className="py-2 ">
        <Link
          className={({ isActive }) => isActive && "text-cyan-600 duration-200"}
          to={"/"}
        >
          Home
        </Link>
      </li>
      <li className="py-2">
        <Link
          className={({ isActive }) => isActive && "text-cyan-600 duration-200"}
          to={"/chart"}
        >
          Statistics
        </Link>
      </li>
      <li className="py-2">
        <Link
          className={({ isActive }) => isActive && "text-cyan-600 duration-200"}
          to={"/apply"}
        >
          Applied Jobs
        </Link>
      </li>
      <li className="py-2">
        <Link
          className={({ isActive }) => isActive && "text-cyan-600 duration-200"}
          to={"/blog"}
        >
          Blog
        </Link>
        
      </li>
    </ul>
  );
};

export default Navbar;
