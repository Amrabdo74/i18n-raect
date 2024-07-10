// src/App.js
import React, { useState } from 'react';
import styled from 'styled-components';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [number, setNumber] = useState('');

  const handleSendMessage = () => {
    if (input.trim() && number.trim()) {
      setMessages([...messages, { text: input, number }]);
      setInput('');
    }
  };

  return (
  <>
  
  <ChatContainer>
      <MessagesContainer>
        {messages.map((msg, index) => (
          <Message key={index}>
            <MessageNumber>{msg.number}</MessageNumber>
            <MessageText>{msg.text}</MessageText>
          </Message>
        ))}
      </MessagesContainer>
      <InputContainer>
        <Input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter phone number"
        />
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
        />
        <SendButton onClick={handleSendMessage}>Send</SendButton>
      </InputContainer>
    </ChatContainer>
    
  </>
  );
};

export default App;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background: #e5ddd5;
`;

const MessagesContainer = styled.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
`;

const Message = styled.div`
  padding: 10px;
  margin: 10px 0;
  background: #fff;
  border-radius: 10px;
  max-width: 60%;
`;

const MessageNumber = styled.div`
  font-size: 0.75rem;
  color: #888;
  margin-bottom: 5px;
`;

const MessageText = styled.div`
  font-size: 1rem;
  color: #000;
`;

const InputContainer = styled.div`
  display: flex;
  padding: 10px;
  background: #fff;
  border-top: 1px solid #ddd;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 20px;
  margin-right: 10px;
`;

const SendButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  background: #128c7e;
  color: #fff;
  cursor: pointer;
`;
