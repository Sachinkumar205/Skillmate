import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, MessageSquare, PlusCircle } from 'lucide-react';

const dummyRooms = [
  { id: '1', name: 'React Development', members: 15, online: 5 },
  { id: '2', name: 'Node.js Backend', members: 12, online: 3 },
  { id: '3', name: 'UI/UX Design', members: 20, online: 8 },
  { id: '4', name: 'Python for Data Science', members: 18, online: 6 },
];

const dummyOnlineUsers = [
  { id: 'user1', name: 'Alice Smith', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
  { id: 'user2', name: 'Bob Johnson', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { id: 'user3', name: 'Carol White', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
  { id: 'user4', name: 'David Lee', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
];

const Community = () => {
  const [activeRoom, setActiveRoom] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background-50 to-background-DEFAULT flex flex-col md:flex-row">
      {/* Sidebar: Rooms List */}
      <aside className="w-full md:w-1/4 bg-white p-6 shadow-md md:h-screen sticky top-0">
        <h2 className="text-section-heading font-poppins font-bold text-gray-800 mb-6">Discussion Rooms</h2>
        <div className="space-y-4">
          {dummyRooms.map((room) => (
            <button
              key={room.id}
              onClick={() => setActiveRoom(room.id)}
              className={`w-full text-left p-4 rounded-xl transition duration-300 ease-in-out
                ${activeRoom === room.id ? 'bg-primary text-white shadow-lg' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              <h3 className="font-poppins font-semibold text-lg">{room.name}</h3>
              <p className="text-sm font-inter flex items-center mt-1">
                <Users size={16} className="mr-2" /> {room.members} Members ({room.online} Online)
              </p>
            </button>
          ))}
        </div>
        <button className="mt-8 w-full bg-accent hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out flex items-center justify-center font-inter">
          <PlusCircle size={20} className="mr-2" /> Create New Room
        </button>
      </aside>

      {/* Main Content: Chat / Discussion Area */}
      <main className="flex-1 p-8">
        <h1 className="text-section-heading font-poppins font-bold text-gray-800 mb-8">Community Chat</h1>

        {activeRoom ? (
          <div className="bg-white p-8 rounded-xl shadow-xl h-full flex flex-col">
            <h2 className="text-card-title font-poppins font-semibold text-gray-800 mb-4">{dummyRooms.find(r => r.id === activeRoom)?.name}</h2>
            <div className="flex-1 overflow-y-auto mb-4 bg-gray-50 p-4 rounded-lg">
              {/* Placeholder for messages */}
              <div className="text-gray-600 font-inter">Start chatting in {dummyRooms.find(r => r.id === activeRoom)?.name} room!</div>
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-primary focus:border-primary font-inter"
              />
              <button className="bg-primary hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-r-lg transition duration-300 ease-in-out font-inter">
                <MessageSquare size={20} />
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white p-8 rounded-xl shadow-xl h-full flex items-center justify-center text-gray-600 font-inter text-lg">
            Select a room to start discussing!
          </div>
        )}
      </main>

      {/* Right Sidebar: Online Users */}
      <aside className="w-full md:w-1/5 bg-white p-6 shadow-md md:h-screen sticky top-0">
        <h2 className="text-section-heading font-poppins font-bold text-gray-800 mb-6">Online Users</h2>
        <div className="space-y-4">
          {dummyOnlineUsers.map((user) => (
            <div key={user.id} className="flex items-center space-x-3 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition duration-300">
              <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
              <span className="font-inter text-gray-800">{user.name}</span>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default Community;

