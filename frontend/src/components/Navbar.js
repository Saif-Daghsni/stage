import React from 'react';
import '../styles/Navbar.css';
import { FaBell, FaCog, FaUserCircle,FaCalendarAlt  } from 'react-icons/fa';
import { MdOutlineCalendarMonth,MdOutlineHourglassFull } from "react-icons/md"
import { GoTrophy } from "react-icons/go";
import { CiLight } from "react-icons/ci";



const Navbar = ({ userData }) => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <span className="navbar-path">
          <span className="path-light">Jeux</span> 
          <span className="separator">›</span>
          <strong className="path-bold">{userData?.currentPage || 'Achat'}</strong>
        </span>
      </div>

      <div className="navbar-right">
        <div className="navbar-item">
          <GoTrophy className="icon trophy-icon" />
          <span className="item-label">Classement : {userData?.rank || '3'}</span>
        </div>
        
        <div className="navbar-item timer-item">
          <MdOutlineHourglassFull className="icon timer-icon" />
          <div className="timer-content">
            <span className="timer-label">Passage du trimestre :</span>
            <span className="timer-value">{userData?.timer || '64:56:03'}</span>
          </div>
        </div>
        
        <div className="navbar-item progress-item">
          <div className="progress-donut">
            <svg width="40" height="40" viewBox="0 0 40 40">
              <circle
                cx="20"
                cy="20"
                r="16"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="4"
              />
              <circle
                cx="20"
                cy="20"
                r="16"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="4"
                strokeDasharray={`${(userData?.progressPercent || 75) * 100.53 / 100} 100.53`}
                strokeDashoffset="0"
                strokeLinecap="round"
                transform="rotate(-90 20 20)"
              />
            </svg>
            <span className="progress-text">{userData?.progressPercent || '50'}%</span>
          </div>
          <div className='prog'>
 <span className="progress-value">{userData?.progressPercent || '6'}/12</span>
          <span className="progress-label">Trimestres</span>
          </div>
         
        </div>
        
         <div className="navbar-item">
          
          <button className="events-btn"><MdOutlineCalendarMonth className="icon events-icon" />Events</button>
        </div>
        
        <div className="navbar-icons">
          <CiLight className="icon notification-icon" />
          <FaCog className="icon settings-icon" />
          <FaUserCircle className="icon user-icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;