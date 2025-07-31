import React from 'react'
import "./SecondUser.css";
import { BiCheckDouble } from "react-icons/bi";

const SecondUser = (props) => {
  return (
      <div className="SecondUser">
        <div className="SecondUser-message">
          <p>{props.message}</p>
          <div className="SecondUser-bottom">
            il y a 6 minutes
            <BiCheckDouble
              style={{ marginLeft: "5px", color: "#000000", fontSize: "14px" }}
            />
          </div>
        </div>
      </div>
    )
}

export default SecondUser