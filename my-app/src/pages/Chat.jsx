import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'John Doe', text: 'Hi, how are you?', timestamp: '10:00 AM' },
    { id: 2, sender: 'You', text: 'I\'m good, thanks! How can I help you today?', timestamp: '10:01 AM' },
    { id: 3, sender: 'John Doe', text: 'I was hoping you could teach me React.', timestamp: '10:05 AM' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        { id: messages.length + 1, sender: 'You', text: newMessage.trim(), timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
      ]);
      setNewMessage('');
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Chat Header */}
      <div className="bg-white shadow-md p-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Chat with John Doe</h2>
        <div className="flex items-center space-x-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <p className="text-sm text-gray-600">Online</p>
        </div>
      </div>

      {/* Message Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
            <div
            key={message.id}
            className={`flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'}`}
            >
              <div
              className={`max-w-xs p-3 rounded-lg shadow-md ${message.sender === 'You' ? 'bg-indigo-500 text-white' : 'bg-gray-300 text-gray-800'}`}
              >
              <p className="text-sm">{message.text}</p>
              <span className="text-xs opacity-75 block text-right mt-1">{message.timestamp}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
      <form onSubmit={handleSendMessage} className="bg-white p-4 border-t flex items-center">
            <input
              type="text"
              placeholder="Type a message..."
          className="flex-1 px-4 py-2 rounded-full bg-gray-100 border focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
            />
        <button
          type="submit"
          className="ml-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
        >
          Send
            </button>
      </form>
    </div>
  );
};

export default Chat;
