import React from "react";
import PropTypes from "prop-types";
import "./UserProfile.css";
import { FaUserCircle } from "react-icons/fa";

const UserProfile = ({ id, selected, onClick,name, lastMessage }) => {


  return (
    <div
      className={selected ? "UserProfile-inactive" : "UserProfile-active"}
      onClick={() => onClick(id)}
    >
      <div className="UserProfile-photo">
        <FaUserCircle size={40} color="#3b5998" />
      </div>

      <div className="UserProfile-details">
        <div className="UserProfile-details-user">
          <label htmlFor="">{name}</label>
          <p>1h</p>
        </div>
        <p>{lastMessage}</p>
      </div>
    </div>
  );
};
UserProfile.propTypes = {
  id: PropTypes.any.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default UserProfile;
