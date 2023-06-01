// ChatComponent.js

import React, { useEffect, useRef, useState } from 'react';

const ChatComponent = () => {
  const socketRef = useRef(null);
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (message.trim() !== '') {
      socketRef.current.send(message);
      setMessage('');
    }
  };

  useEffect(() => {
    socketRef.current = new WebSocket('ws://localhost:8000/ws/chat/');

    socketRef.current.onopen = () => {
      console.log('WebSocket connection established.');
    };

    socketRef.current.onmessage = (event) => {
      const message = event.data;
      console.log('Received message:', message);
    };

    return () => {
      socketRef.current.close();
    };
  }, []);

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatComponent;
