import React, { useState } from 'react';
import '../styles/Sidebar.css';

import {
  FaChartLine,
  FaSignOutAlt,
  
} from 'react-icons/fa';
import { BiBarChartAlt2 ,BiMessageSquareDots} from "react-icons/bi";
import {LuLogOut,LuGamepad2,LuCircleDollarSign , LuLayoutDashboard,LuSettings,LuChevronsRight,LuChevronsLeft } from "react-icons/lu";
import { SlCalculator } from "react-icons/sl";


const icons = [
  { icon: <LuLayoutDashboard />, label: 'Dashboard' },
  { icon: <LuSettings />, label: 'Settings' },
  { icon: <BiBarChartAlt2 />, label: 'Analytics' },
  { icon: <LuCircleDollarSign  />, label: 'Finance' },
  { icon: <FaChartLine />, label: 'Media' },
  { icon: <LuGamepad2 />, label: 'Games' },
  { icon: <SlCalculator/>, label: 'Reports' },
  { icon: <BiMessageSquareDots />, label: 'Chat' },
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ?<LuChevronsLeft/>:<LuChevronsRight/> }
      </button>

     <div className="sidebar-top">
        <img src={isOpen ? "/img/logo.png" : "/img/logo-mini.png"} alt="Logo" className="sidebar-logo"/>
</div>


      <div className="sidebar-menu">
        {icons.map((item, index) => (
          <div className="menu-item" key={index} title={item.label}>
            <span className="icon">{item.icon}</span>
            {isOpen && <span className="label">{item.label}</span>}
          </div>
        ))}
      </div>

      <div className="sidebar-footer">
        <div className="menu-item" title="Logout">
          <LuLogOut className="icon" />
          {isOpen && <span className="label">Logout</span>}
        </div>
      </div>
    </div>
  );
};


export default Sidebar;
