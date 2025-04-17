import React, { useState } from 'react';
import './ChatBot.css';

const responses = {
  'hi': 'Hello! How can I help you today?',
  'what services do you offer': 'We offer solutions in women’s health, infertility & wellness.',
  'how to contact': 'You can reach us via the Contact Us page or call us at +91-12345-67890.',
  'thank you': 'You’re welcome! 😊',
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ type: 'bot', text: 'Hi there! Ask me anything.' }]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    const lowerMsg = userMessage.toLowerCase();
    const botReply = responses[lowerMsg] || "Sorry, I don't have an answer for that yet.";

    setMessages([...messages, { type: 'user', text: userMessage }, { type: 'bot', text: botReply }]);
    setInput('');
  };

  return (
    <div className={`chatbot-box ${isOpen ? 'open' : ''}`}>
      <div className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
        💬
      </div>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">Ask Us Anything</div>
          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.type}`}>{msg.text}</div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your question..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
