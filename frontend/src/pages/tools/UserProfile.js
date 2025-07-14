import React from "react";
import "./UserProfile.css";

const UserProfile = () => {
  return (
    <div className="UserProfile">
      <div className="UserProfile-photo">
        <div className="connected"></div>
        <img src="/Users/Avatar.png" alt="" />
      </div>

      <div className="UserProfile-details">
        <div className="UserProfile-details-user" >
          <label htmlFor="" >User</label>
          <p> 1h</p>
        </div>
        <p>Lorem ipsum dolor sit amet, dolor..</p>
      </div>
    </div>
  );
};

export default UserProfile;
