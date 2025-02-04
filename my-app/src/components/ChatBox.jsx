import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "../styles/style.css";
import axios from "axios";
import { Helmet } from "react-helmet";

const ChatBox = () => {
  // const API_URL = process.env.REACT_APP_API_URL;

  const { userId } = useParams();
  console.log("UserId from params:", userId);
  const [message, setMessage] = useState("");
  const [chatData, setChatData] = useState([]);
  const chatBoxRef = useRef(null);

  const token = localStorage.getItem("token");

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim()) {
      try {
        // `${API_URL}/send_message`
        // "http://localhost:5000/send_message"
        await axios.post(
          "http://localhost:5000/send_message",
          {
            outgoing_id: userId,
            msg: message,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setMessage("");
        fetchChatData();
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  const fetchChatData = async () => {
    try {
      // `${API_URL}/get_messages`
      // "http://localhost:5000/get_messages",
      const response = await axios.post(
        "http://localhost:5000/get_messages",
        { incoming_id: userId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setChatData(response.data.messages);
      scrollToBottom();
    } catch (error) {
      console.error("Error fetching chat data:", error);
    }
  };

  const scrollToBottom = () => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    fetchChatData();
    const intervalId = setInterval(fetchChatData, 500);
    return () => clearInterval(intervalId);
  }, [userId]);

  return (
    <div className="wrapper">
      <Helmet>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
      </Helmet>

      <section className="chat-area">
        <header>
          <a href="/chats" className="back-icon">
            <i className="fas fa-arrow-left"></i>
          </a>
          <img src="../images/popePic.jpg" alt="Papa Akumu" className="user-img" />
          <div className="details">
            <span>Chat with User {userId}</span>
          </div>
        </header>

        <div className="chat-box" ref={chatBoxRef}>
          {chatData.map((chat, index) => (
            <div key={index} className="chat-message">
              <p>{chat.msg}</p>
            </div>
          ))}
        </div>

        <form className="typing-area" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-field"
            placeholder="Type a message here..."
            value={message}
            onChange={handleInputChange}
          />
          <button type="submit" disabled={!message.trim()} className={message ? "active" : ""}>
            <i className="fab fa-telegram-plane"></i>
          </button>
        </form>
      </section>
    </div>
  );
};

export default ChatBox;