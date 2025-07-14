import React  from 'react';
import PropTypes from 'prop-types';
import "./UserProfile.css";

const UserProfile = ({ id, selected, onClick }) => {
  return (
    <div className={selected ? 'UserProfile-inactive' : 'UserProfile-active'}
      onClick={() => onClick(id)}>
      <div className="UserProfile-photo">
        {/* <div className="connected"></div> */}
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
UserProfile.propTypes = {
  id: PropTypes.any.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default UserProfile;
