import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Sidebar.css';

import { FaChartLine } from 'react-icons/fa';
import { BiBarChartAlt2, BiMessageSquareDots } from "react-icons/bi";
import {
  LuLogOut,
  LuGamepad2,
  LuCircleDollarSign,
  LuLayoutDashboard,
  LuSettings,
  LuChevronsRight,
  LuChevronsLeft,
} from "react-icons/lu";
import { SlCalculator } from "react-icons/sl";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  const icons = [
    { icon: <LuLayoutDashboard />, label: 'Dashboard', path: '/dashboard' },
    { icon: <LuSettings />, label: 'Settings', path: '/settings' },
    { icon: <BiBarChartAlt2 />, label: 'Analytics', path: '/analytics' },
    { icon: <LuCircleDollarSign />, label: 'Finance', path: '/finance' },
    { icon: <FaChartLine />, label: 'Media', path: '/media' },
    { icon: <LuGamepad2 />, label: 'Games', path: '/games' },
    { icon: <SlCalculator />, label: 'Reports', path: '/reports' },
    { icon: <BiMessageSquareDots />, label: 'Chat', path: '/chat' }, 
  ];

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? <LuChevronsLeft /> : <LuChevronsRight />}
      </button>

      <div className="sidebar-top">
        <img
          src={isOpen ? "/img/logo.png" : "/img/logo-mini.png"}
          alt="Logo"
          className="sidebar-logo"
        />
      </div>

      <div className="sidebar-menu">
        {icons.map((item, index) => (
          <div
            className="menu-item"
            key={index}
            title={item.label}
            onClick={() => navigate(item.path)} 
            style={{ cursor: 'pointer' }}
          >
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
