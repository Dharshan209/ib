import React, { useState, useEffect, useRef } from 'react';
import './ChatBot.css';

// Responses object remains the same
const responses = {
  'hi': 'Hello! How can I help you today?',
  'hello': 'Hi there! How can I assist you with IB services?',
  'what services do you offer': 'We offer solutions in women\'s health, infertility & wellness. Our product line includes fertility supplements, hormonal balance solutions, and specialized wellness products.',
  'how to contact': 'You can reach us via the Contact Us page or call us at +91-12345-67890.', // Example number
  'thank you': 'You\'re welcome! 😊 Is there anything else I can help you with?',
  'products': 'We offer a range of products including ObiPCOS, GYNOSITOL, LetroBoon, OvaGold, MenQMAX, and many more. Would you like specific information about any of these?',
  'about': 'Indian Biologicals PVT Ltd was established in 2011 and is a healthcare organization delivering high-quality medicines in Women\'s Health, Infertility, and Wellness across India.',
  // Add more specific phrases if needed
  'default': "I'm sorry, I don't have an answer for that yet. Can I help you with information about our products, services, or how to contact us?"
};


const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      simulateTyping('Hi there! I\'m IB Assistant. How can I help you today?');
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    scrollToBottom();
  }, [messages.length]);

  useEffect(() => {
    if (isOpen) {
      setIsPulsing(false);
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const simulateTyping = (text) => {
    setIsTyping(true);
    const delay = 800 + Math.random() * 700; // Adjusted typing delay
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { type: 'bot', text }]);
    }, delay);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { type: 'user', text: userMessage }]);
    setInput('');

    const lowerMsg = userMessage.toLowerCase();
    let botResponse = null;

    // 1. Check for exact match
    if (responses[lowerMsg]) {
      botResponse = responses[lowerMsg];
    } else {
      // 2. Fallback to partial match (more specific/longer keys first for better matching)
      // It's good practice to order keys in `responses` from most specific to least specific if using `includes`
      const matchingKey = Object.keys(responses)
                              .sort((a, b) => b.length - a.length) // Sort keys by length descending
                              .find(key => key !== 'default' && lowerMsg.includes(key));
      if (matchingKey) {
        botResponse = responses[matchingKey];
      }
    }

    simulateTyping(botResponse || responses['default']);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="chatbot-box">
      <div 
        className={`chatbot-toggle ${isPulsing ? 'pulse' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open chat assistant"
      >
        <span className="chatbot-toggle-icon">💬</span>
      </div>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-header-text">IB Assistant</div>
            <div className="chatbot-close" onClick={handleClose}>✕</div>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.type}`}>{msg.text}</div>
            ))}
            {isTyping && (
              <div className="chatbot-typing">
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="chatbot-input">
            <div className="chatbot-input-wrapper">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                aria-label="Chat message input"
              />
              <button 
                className="chatbot-send-button" 
                onClick={handleSend}
                aria-label="Send message"
              >
                <svg className="chatbot-send-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;