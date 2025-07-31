import React from "react";
import "./FirstUser.css";
import { BiCheckDouble } from "react-icons/bi";
const FirstUser = (props) => {
  return (
    <div className="FirstUser">
      <div className="FirstUser-message">
        <p>{props.message}
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
