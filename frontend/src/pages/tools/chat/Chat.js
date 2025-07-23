import React from "react";
import { FaPaperclip, FaMicrophone, FaArrowUp } from "react-icons/fa";
import "./Chat.css";
import FirstUser from "./FirstUser";
import SecondUser from "./SecondUser"
const Chat = () => {
  return (
    <div className="chat-all">
      <div className="chat-top">
        <label className="transaction-label">User</label>
      </div>

      <div className="chat-container">
        <div className="chat-messages">
          <FirstUser />
          <SecondUser />
          <FirstUser />
          <SecondUser />
          <FirstUser />
        </div>
        <div className="chat-bottom">
          <FaPaperclip className="chat-icon-left" />
          <input
            className="chat-input"
            type="text"
            placeholder="Enter a prompt here"
          />
          <div className="chat-icons-right">
            <FaMicrophone className="chat-icon-mic" />
            <FaArrowUp className="chat-icon-arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
