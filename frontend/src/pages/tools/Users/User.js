import React, { useState, useEffect } from "react";
import "./User.css";
import { FaSearch } from "react-icons/fa";
import UserProfile from "./UserProfile";
import { handleError } from "../../../utils";

const User = (props) => {
  const [selected, setselected] = useState(false);
  const [researh, setresearh] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [usersMessages, setUsersMessages] = useState([]);

  const handleGetTheLastMessages = () => {
    const token = localStorage.getItem("token"); // or sessionStorage, wherever you store it
    console.log("🔑 Token:", token);

    fetch(`http://localhost:5000/GetLastMessages`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Last messages fetched:", data);
        if (Array.isArray(data)) {
          setUsersMessages(data);
        } else {
          setUsersMessages([]);
        }
      })
      .catch((err) => console.error("❌ Fetch last messages error:", err));
  };

  useEffect(() => {
    handleGetTheLastMessages();
  }, [props.user._id,props.message]);

  useEffect(() => {
    const result = props.users.filter(
      (user) =>
        user.name.toLowerCase().includes(researh.toLowerCase()) &&
        user.name !== props.user.name
    );
    if (result === "") {
      return handleError("Utilisateur non trouvé");
    }
    setFilteredUsers(result);
  }, [researh, props.users]);

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
                lastMessage={
                  usersMessages.find((msg) => msg.userId === user._id)
                    ?.lastMessage || "salam"
                }
                onClick={() => {
                  setselected(user._id);
                  props.setSelecteduser(user);
                }}
                name={user.name}
              />
            ))
          : props.users.map((user) => {
              if (props.user._id === user._id) {
                return null;
              }
              return (
                <UserProfile
                  key={user._id}
                  id={user._id}
                  selected={selected === user._id}
                  onClick={() => {
                    setselected(user._id);
                    props.setSelecteduser(user);
                  }}
                  lastMessage={
                    usersMessages.find((msg) => msg.userId === user._id)
                      ?.lastMessage || ""
                  }
                  name={user.name}
                />
              );
            })}
      </div>
    </div>
  );
};

export default User;
