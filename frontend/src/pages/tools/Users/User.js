import React, { useState, useEffect } from "react";
import "./User.css";
import { FaSearch } from "react-icons/fa";
import UserProfile from "./UserProfile";

const User = (props) => {
  const [selected, setselected] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/getAllUsers")
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Users fetched:", data);
        if (Array.isArray(data)) {
          setUsers(data);
        } else {
          setUsers([]);
        }
      })
      .catch((err) => console.error("❌ Fetch Users error:", err));
  }, []);

  return (
    <div className="users-container">
      <div className="input-wrapper">
        <FaSearch className="search-icon" />
        <input type="text" className="user-input" placeholder="Recherche" />
      </div>
      <div className="users-buttom">
        {users.map((user) => {
          if (props.user._id === user._id) {
            console.log("❌ User with same ID found:", user._id);
            return null;
          }
          return (
            <UserProfile
              key={user._id}
              id={user._id}
              selected={selected === user._id}
              onClick={() => setselected(user._id)}
              name={user.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default User;
