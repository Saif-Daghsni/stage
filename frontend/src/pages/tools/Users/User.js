import React, { useState, useEffect } from "react";
import "./User.css";
import { FaSearch } from "react-icons/fa";
import UserProfile from "./UserProfile";
import { handleError } from "../../../utils";

const User = (props) => {
  const [selected, setselected] = useState(false);
  const [users, setUsers] = useState([]);
  const [researh, setresearh] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

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

  useEffect(() => {
    const result = users.filter((user) =>
      user.name.toLowerCase().includes(researh.toLowerCase())
    && user.name !== props.user.name
    );
    if (result === "") {
      return handleError("Utilisateur non trouvé");
    }
    setFilteredUsers(result);
  }, [researh, users]);
  return (
    <div className="users-container">
      <div className="input-wrapper">
        <FaSearch className="search-icon" />
        <input
          type="text"
          className="user-input"
          placeholder="Recherche"
          onChange={(e) => setresearh(e.target.value)}
        />
      </div>
      <div className="users-buttom">
        {researh
          ? filteredUsers.map((user) => (
              <UserProfile
                key={user._id}
                id={user._id}
                selected={selected === user._id}
                onClick={() => setselected(user._id)}
                name={user.name}
              />
            ))
          : users.map((user) => {
              if (props.user._id === user._id) {
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
