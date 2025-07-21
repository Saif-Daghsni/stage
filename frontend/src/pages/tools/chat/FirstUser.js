import React from "react";
import "./FirstUser.css";
import { BiCheckDouble } from "react-icons/bi";
const FirstUser = () => {
  return (
    <div className="FirstUser">
      <div className="FirstUser-message">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
          voluptatem perspiciatis iste deleniti doloremque molestiae 
    
        </p>
        <div className="FirstUser-bottom">
          il y a 6 minutes
          <BiCheckDouble
            style={{ marginLeft: "5px", color: "#ffffffff", fontSize: "14px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default FirstUser;
