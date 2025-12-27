"use client";
import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageCircle, 
  X, 
  Bot, 
  Send,
  User
} from 'lucide-react';

interface Message {
  type: 'user' | 'bot';
  text: string;
}

const responses: Record<string, string> = {
  'hi': 'Hello! How can I help you today?',
  'hello': 'Hi there! How can I assist you with IB services?',
  'what services do you offer': 'We offer solutions in women\'s health, infertility & wellness. Our product line includes fertility supplements, hormonal balance solutions, and specialized wellness products.',
  'how to contact': 'You can reach us via the Contact Us page or call us at +91-12345-67890.',
  'thank you': 'You\'re welcome! 😊 Is there anything else I can help you with?',
  'products': 'We offer a range of products including ObiPCOS, GYNOSITOL, LetroBoon, OvaGold, MenQMAX, and many more. Would you like specific information about any of these?',
  'about': 'Indian Biologicals PVT Ltd was established in 2011 and is a healthcare organization delivering high-quality medicines in Women\'s Health, Infertility, and Wellness across India.',
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [isPulsing, setIsPulsing] = useState<boolean>(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      simulateTyping('Hi there! I\'m IB Assistant. How can I help you today?');
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages.length, isTyping]);

  useEffect(() => {
    if (isOpen) setIsPulsing(false);
  }, [isOpen]);

  const simulateTyping = (text: string) => {
    setIsTyping(true);
    const delay = 1000 + Math.random() * 800;
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
    let foundResponse = false;
    for (const key in responses) {
      if (lowerMsg.includes(key)) {
        foundResponse = true;
        simulateTyping(responses[key]);
        break;
      }
    }
    if (!foundResponse) {
      simulateTyping("I'm sorry, I don't have an answer for that yet. Can I help you with information about our products or services?");
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] font-sans">
      {/* Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 md:w-16 md:h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-90 transition-all duration-300 relative group overflow-hidden ${
          isPulsing ? 'animate-bounce' : ''
        }`}
        aria-label="Toggle chat assistant"
      >
        <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative z-10 transition-transform duration-300 group-hover:rotate-12">
          {isOpen ? <X className="w-6 h-6 md:w-8 md:h-8" /> : <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />}
        </div>
        {isPulsing && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-secondary"></span>
          </span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[calc(100vw-4rem)] md:w-96 h-[500px] max-h-[70vh] bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 flex flex-col overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="bg-primary p-6 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg leading-none mb-1">IB Assistant</h3>
                <p className="text-[10px] uppercase tracking-widest text-secondary font-black">Always Online</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-lg transition-colors">
              <X className="w-5 h-5 text-white/50" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/50">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                <div className="flex gap-2 max-w-[85%]">
                  {msg.type === 'bot' && (
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                  )}
                  <div className={`px-5 py-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.type === 'user' 
                      ? 'bg-primary text-white rounded-tr-none' 
                      : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                  {msg.type === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-100 px-5 py-3 rounded-2xl rounded-tl-none flex gap-1 ml-10">
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-slate-100">
            <div className="relative flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
                className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-primary transition-colors text-sm"
              />
              <button 
                onClick={handleSend}
                className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-secondary transition-colors shrink-0 shadow-lg shadow-primary/20"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;