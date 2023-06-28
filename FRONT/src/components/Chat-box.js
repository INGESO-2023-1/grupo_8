// ChatComponent.js

import React, { useEffect, useRef, useState } from 'react';
import axiosInstance from '../axiosApi';

const ChatComponent = ({ roomName }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axiosInstance.get(`http://localhost:8000/chat/${roomName}/`);
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching chat messages:', error);
      }
    };

    fetchMessages();
  }, [roomName]);

  return (
    <div>
      <h1>Chat Conversation: {roomName}</h1>
      <div className="message-container">
        {messages.map((message) => (
          <div key={message.id}>
            <strong>{message.author}: </strong>
            {message.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatComponent;
