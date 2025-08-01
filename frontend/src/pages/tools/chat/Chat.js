import React from "react";
import { useState, useEffect, useRef } from "react";
import { FaPaperclip, FaMicrophone, FaArrowUp } from "react-icons/fa";
import "./Chat.css";
import FirstUser from "./FirstUser";
import SecondUser from "./SecondUser";
import { FaComments, FaUserCircle } from "react-icons/fa";
import { handleError, handleSuccess } from "../../../utils";

const Chat = (props) => {
  const [message, setMessage] = useState("");
  const [getmessage, setGetMessage] = useState([]);
  const messagesEndRef = useRef(null);

  const handleSendMessage = () => {
    if (message.trim() === "") {
      return handleError("Le message est vide");
    }

    const newMessage = {
      senderId: props.user._id,
      content: message,
      timestamp: new Date().toISOString(),
      isRead: false,
    };

    const MessageDetails = {
      members: [props.user._id, props.selecteduser._id],
      messages: [newMessage],
    };
    try {
      fetch("http://localhost:5000/conversations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify(MessageDetails),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            return handleError(data.error);
          }
          setMessage("");
          fetchMessages();
        })
        .catch((err) => {
          console.error("Error sending message:", err);
          handleError("Erreur lors de l'envoi du message");
        });
    } catch (error) {
      console.error("Error sending message:", error);
      handleError("Erreur lors de l'envoi du message");
    }
  };

  const fetchMessages = async () => {
    try {
      const response = await fetch("http://localhost:5000/GetConversations", {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      const data = await response.json();
      if (data.error) {
        return handleError(data.error);
      }
      setGetMessage(data);
    } catch (error) {
      console.error("Error fetching messages:", error);
      handleError("Erreur lors de la récupération des messages");
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
  }, [getmessage, props.selecteduser]);
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("http://localhost:5000/GetConversations", {
          method: "GET",
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });
        const data = await response.json();
        if (data.error) {
          return handleError(data.error);
        }
        setGetMessage(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
        handleError("Erreur lors de la récupération des messages");
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="chat-all">
      <div className="chat-all-top">
        {props.selecteduser.length !== 0 ? (
          <>
            <div className="transaction-label-photo">
              <FaUserCircle size={40} color="#3b5998" />
            </div>
            <label className="chat-top-label">{props.selecteduser.name}</label>
          </>
        ) : (
          <>
            <p className="empty-chat">Choisir un utilisateur</p>
          </>
        )}
      </div>

      <div className="chat-container">
        <div className="chat-messages">
          {props.selecteduser.length !== 0 ? (
            <>
              {getmessage.map((conversation) => {
                if (
                  conversation.members.includes(props.selecteduser._id) &&
                  conversation.members.includes(props.user._id)
                ) {
                  return conversation.messages.map((message, index) => {
                    return message.senderId === props.user._id ? (
                      <FirstUser
                        key={index}
                        message={message.content}
                        timestamp={message.timestamp}
                      />
                    ) : (
                      <SecondUser
                        key={index}
                        message={message.content}
                        timestamp={message.timestamp}
                      />
                    );
                  });
                } else {
                  return null;
                }
              })}
            </>
          ) : (
            <div className="chat-placeholder">
              <FaComments size={200} className="chat-placeholder-icon" />
              <p className="">
                Sélectionnez un utilisateur pour démarrer une conversation
              </p>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
        <div className="chat-bottom">
          <FaPaperclip className="chat-icon-left" />
          <input
            className="chat-input"
            type="text"
            value={message}
            placeholder="Enter a prompt here"
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault(); // optional, in case the form submits
                handleSendMessage();
              }
            }}
          />
          <div className="chat-icons-right">
            <FaMicrophone className="chat-icon-mic" />
            <FaArrowUp
              className="chat-icon-arrow"
              onClick={() => {
                handleSendMessage();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
