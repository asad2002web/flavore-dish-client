import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="mx-20 divide-y">
      <li className="py-2 ">
        <NavLink
          className={({ isActive }) => isActive && "text-cyan-600 duration-200"}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="py-2">
        <NavLink
          className={({ isActive }) => isActive && "text-cyan-600 duration-200"}
          to="/apply"
        >
          Applyd Jobs
        </NavLink>
      </li>
      <li className="py-2">
        <NavLink
          className={({ isActive }) => isActive && "text-cyan-600 duration-200"}
          to="/chart"
        >
          Staticks
        </NavLink>
      </li>
      <li className="py-2">
        <NavLink
          className={({ isActive }) => isActive && "text-cyan-600 duration-200"}
          to="/blog"
        >
          Blog
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
