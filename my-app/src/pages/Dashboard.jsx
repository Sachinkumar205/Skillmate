import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, MessageSquare } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background-50 to-background-DEFAULT p-8">
      <h1 className="text-section-heading font-poppins font-bold text-gray-800 mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* My Skills Card */}
        <div className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-center text-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <BookOpen size={48} className="text-primary mb-4" />
          <h2 className="text-card-title font-poppins font-semibold text-gray-800 mb-4">My Skills</h2>
          <p className="text-body-text text-gray-600 mb-6 font-inter">Manage your offered and wanted skills. Showcase your expertise and learning goals.</p>
          <Link to="/app/profile/me">
            <button className="bg-primary hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300 ease-in-out font-inter">
              Go to Profile
          </button>
          </Link>
        </div>

        {/* Skill Matches Card */}
        <div className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-center text-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <Users size={48} className="text-accent mb-4" />
          <h2 className="text-card-title font-poppins font-semibold text-gray-800 mb-4">Skill Matches</h2>
          <p className="text-body-text text-gray-600 mb-6 font-inter">Discover new users to learn from or teach. Expand your network and knowledge.</p>
          <Link to="/app/explore">
            <button className="bg-accent hover:bg-emerald-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300 ease-in-out font-inter">
              Explore Matches
            </button>
          </Link>
          </div>

        {/* Recent Chats Card */}
        <div className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-center text-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <MessageSquare size={48} className="text-secondary mb-4" />
          <h2 className="text-card-title font-poppins font-semibold text-gray-800 mb-4">Recent Chats</h2>
          <p className="text-body-text text-gray-600 mb-6 font-inter">Continue your conversations. Stay connected with your mentors and learners.</p>
          <Link to="/app/chat">
            <button className="bg-secondary hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300 ease-in-out font-inter">
              View Chats
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
