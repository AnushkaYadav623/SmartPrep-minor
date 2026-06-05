import React, { useState } from 'react';
import { Send, Bot, User } from 'lucide-react';
import './AITutor.css';

const AITutor = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your AI Tutor. How can I help you study today?", sender: "ai" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), text: input, sender: "user" };
    setMessages(prev => [...prev, userMessage]);
    setInput("");

    try {
      const response = await fetch('http://localhost:8000/tutor-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input, history: [] })
      });
      if (response.ok) {
        const data = await response.json();
        const aiResponse = { 
          id: Date.now() + 1, 
          text: data.response, 
          sender: "ai" 
        };
        setMessages(prev => [...prev, aiResponse]);
      }
    } catch (error) {
      console.error("Chat error", error);
      // Fallback for demo
      setTimeout(() => {
        const aiResponse = { 
          id: Date.now() + 1, 
          text: "I'm a simulated tutor for now, but I'll be connected to the backend soon!", 
          sender: "ai" 
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

  return (
    <div className="ai-tutor-container">
      <div className="chat-window">
        <div className="chat-messages">
          {messages.map(msg => (
            <div key={msg.id} className={`message-bubble ${msg.sender}`}>
              <div className="message-avatar">
                {msg.sender === 'ai' ? <Bot size={20} /> : <User size={20} />}
              </div>
              <div className="message-text">{msg.text}</div>
            </div>
          ))}
        </div>
        <form className="chat-input-area" onSubmit={handleSend}>
          <input 
            type="text" 
            placeholder="Ask a question about your study materials..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="send-btn" disabled={!input.trim()}>
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AITutor;
