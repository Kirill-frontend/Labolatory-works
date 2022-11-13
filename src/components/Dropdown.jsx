import React from "react";
import {Link} from 'react-router-dom'


export const Dropdown = () => {
  return (
    <div className="cust-dropdown">
      <button className="dropbtn">Лабораторні</button>
      <div className="cust-dropdown-content">
        <Link to="/lab01">Лаб. робота №1</Link>
        <Link to="/lab02">Лаб. робота №2</Link>
        <Link to="/lab03">Лаб. робота №3</Link>
        <Link to="/lab04">Лаб. робота №4</Link>
      </div>
    </div>
  );
};
