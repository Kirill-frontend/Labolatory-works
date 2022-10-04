import React from "react";
import {Link} from 'react-router-dom'


export const Dropdown = () => {
  return (
    <div className="cust-dropdown">
      <button className="dropbtn">Лабораторні</button>
      <div className="cust-dropdown-content">
        <Link to="/lab01">Лаб. робота №1</Link>
      </div>
    </div>
  );
};
