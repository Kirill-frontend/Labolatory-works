import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from './Dropdown';

export const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-wrapper px-4">
          <ul className="left ">
            <li>
              <Link to={'/'}> Головна </Link> 
            </li>
            <li>
              <Dropdown />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
