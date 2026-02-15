import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  // Dummy data for demonstration
  const allUsers = [
    {
      id: '1',
      name: 'Alice Smith',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
      bio: 'Frontend enthusiast with expertise in React and Vue.js.',
      skillsOffered: ['React.js', 'Vue.js', 'CSS'],
      skillsWanted: ['Backend Development', 'Node.js'],
    },
    {
      id: '2',
      name: 'Bob Johnson',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      bio: 'Backend developer passionate about Node.js and Python.',
      skillsOffered: ['Node.js', 'Python', 'Express.js'],
      skillsWanted: ['React.js', 'DevOps'],
    },
    {
      id: '3',
      name: 'Charlie Brown',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      bio: 'UI/UX designer with a keen eye for detail.',
      skillsOffered: ['Figma', 'Sketch', 'User Research'],
      skillsWanted: ['Graphic Design', 'Animation'],
    },
  ];

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.length > 0) {
      const filtered = allUsers.filter(user =>
        user.skillsOffered.some(skill => skill.toLowerCase().includes(query)) ||
        user.name.toLowerCase().includes(query)
      );
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers([]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background-50 to-background-DEFAULT py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-section-heading font-poppins font-bold text-gray-800 text-center mb-8">Explore Mentors & Learners</h1>
      <div className="max-w-2xl mx-auto mb-8 relative">
        <input
          type="text"
          placeholder="Search for skills or users..."
          className="w-full px-5 py-3 pl-12 border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary font-inter"
          value={searchQuery}
          onChange={handleSearch}
        />
        <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {searchQuery.length === 0 ? (
          <p className="text-center text-body-text text-gray-600 col-span-full font-inter">Start by searching for skills or user names above!</p>
        ) : filteredUsers.length === 0 ? (
          <p className="text-center text-body-text text-gray-600 col-span-full font-inter">No users found matching your search.</p>
        ) : (
          filteredUsers.map((user) => (
            <div key={user.id} className="bg-white rounded-xl shadow-xl p-6 flex flex-col items-center text-center space-y-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <img
                className="w-24 h-24 rounded-full object-cover border-4 border-primary shadow-md"
                src={user.avatar}
                alt={`${user.name}'s avatar`}
              />
              <h2 className="text-card-title font-poppins font-semibold text-text-heading">{user.name}</h2>
              <p className="text-body-text text-text-content mb-2 font-inter">{user.bio}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {user.skillsOffered.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full font-inter"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <Link to={`/app/profile/${user.id}`}>
                <button className="border border-primary text-primary hover:bg-primary hover:text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out font-inter mt-4">
                  View Profile
                </button>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Explore;
