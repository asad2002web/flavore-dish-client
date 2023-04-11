import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Logo from '../../assets/Logo/JobScape.png'
import Navbar from "../Navbar/Navbar";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(true);
  return (
    <div className="  bg-slate-50">
      <nav className="w-[90%] h-[80px]  mx-auto flex justify-between items-center align-middle relative">
        <div>
          <NavLink>
            <div className="log0">
              <Link to={'/'}>
              <img className="w-1/2" src={Logo} alt="logo" />
              </Link>
            </div>
          </NavLink>
        </div>
        <div>
          <ul className="text-lg font-bold lg:flex justify-between items-center hidden">
            <li className="px-3">
              <NavLink
                className={({ isActive }) =>
                  isActive && " text-indigo-400 duration-200"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li className="px-3">
              <NavLink
                className={({ isActive }) =>
                  isActive && "  text-indigo-400 duration-200"
                }
                to="/chart"
              >
                Statistics
              </NavLink>
            </li>

            <li className="px-3">
              <NavLink
                className={({ isActive }) =>
                  isActive && "  text-indigo-400 duration-200"
                }
                to="/apply"
              >
                Applied Jobs
              </NavLink>
            </li>
            <li className="px-3">
              <NavLink
                className={({ isActive }) =>
                  isActive && "  text-indigo-400 duration-200"
                }
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>

        <button className="py-3 px-5 bg-gradient-to-r from-blue-400 to-indigo-600 lg:block text-white rounded-md text-xl hidden">
          Start Apply
        </button>

        <ul className="lg:hidden block">
          {openMenu ? (
            <span onClick={() => setOpenMenu(false)}>
              <FontAwesomeIcon
                className="h-7 w-7 text-indigo-400"
                icon={faBars}
              />
            </span>
          ) : (
            <span onClick={() => setOpenMenu(true)}>
              <FontAwesomeIcon
                className="h-7 w-7 text-indigo-400"
                icon={faTimes}
              />{" "}
            </span>
          )}

          {!openMenu && (
            <div className="bg-white shadow-xl absolute top-20 right-0 w-full py-5  z-10  text-4 font-bold">
            <Navbar></Navbar>
            </div>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
