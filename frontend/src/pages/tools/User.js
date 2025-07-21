import React, { useState } from 'react';
import "./User.css";
import { FaSearch } from "react-icons/fa";
import UserProfile from "./UserProfile" ;
const User = () => {
  const [selected, setselected] = useState(false);
  const users = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <div className="users-container">
      <div className="input-wrapper">
        <FaSearch className="search-icon" />
        <input type="text" className="user-input" placeholder="Recherche" />
      </div>
      <div className="users-buttom">
         {users.map((id) => (
          <UserProfile
            key={id}
            id={id}
            selected={selected === id}
            onClick={setselected}
          />
        ))}{users.map((id) => (
          <UserProfile
            key={id}
            id={id}
            selected={selected === id}
            onClick={setselected}
          />
        ))}
      </div>

    </div>
  );
};

export default User;
