import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const skillsData = [
  {
    id: '1',
    title: 'React.js Basics',
    mentor: 'Alice Smith',
    tags: ['Frontend', 'JavaScript', 'Beginner'],
    category: 'Web Development',
    level: 'Beginner',
    price: 'Free',
  },
  {
    id: '2',
    title: 'Node.js for Backend',
    mentor: 'Bob Johnson',
    tags: ['Backend', 'JavaScript', 'Intermediate'],
    category: 'Web Development',
    level: 'Intermediate',
    price: 'Free',
  },
  {
    id: '3',
    title: 'UI/UX Design with Figma',
    mentor: 'Charlie Brown',
    tags: ['Design', 'UI/UX', 'Beginner'],
    category: 'Design',
    level: 'Beginner',
    price: 'Free',
  },
  {
    id: '4',
    title: 'Advanced Python Programming',
    mentor: 'David Lee',
    tags: ['Backend', 'Python', 'Advanced'],
    category: 'Programming',
    level: 'Advanced',
    price: 'Paid',
  },
  {
    id: '5',
    title: 'Digital Marketing Fundamentals',
    mentor: 'Eve Davis',
    tags: ['Marketing', 'Business', 'Beginner'],
    category: 'Marketing',
    level: 'Beginner',
    price: 'Free',
  },
];

const Skills = () => {
  const [filters, setFilters] = useState({
    category: '',
    level: '',
    price: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const filteredSkills = skillsData.filter((skill) => {
    return (
      (filters.category === '' || skill.category === filters.category) &&
      (filters.level === '' || skill.level === filters.level) &&
      (filters.price === '' || skill.price === filters.price)
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background-50 to-background-DEFAULT flex flex-col md:flex-row">
      {/* Sidebar Filters */}
      <aside className="w-full md:w-1/4 bg-white p-6 shadow-md md:h-screen sticky top-0">
        <h2 className="text-section-heading font-poppins font-bold text-gray-800 mb-6">Filters</h2>
        <div className="space-y-6">
          {/* Category Filter */}
          <div>
            <label htmlFor="category" className="block text-gray-700 text-lg font-semibold mb-2 font-inter">Category</label>
            <select
              id="category"
              name="category"
              value={filters.category}
              onChange={handleFilterChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary font-inter"
            >
              <option value="">All Categories</option>
              <option value="Web Development">Web Development</option>
              <option value="Design">Design</option>
              <option value="Programming">Programming</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>

          {/* Level Filter */}
          <div>
            <label htmlFor="level" className="block text-gray-700 text-lg font-semibold mb-2 font-inter">Level</label>
            <select
              id="level"
              name="level"
              value={filters.level}
              onChange={handleFilterChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary font-inter"
            >
              <option value="">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          {/* Price Filter */}
          <div>
            <label htmlFor="price" className="block text-gray-700 text-lg font-semibold mb-2 font-inter">Price</label>
            <select
              id="price"
              name="price"
              value={filters.price}
              onChange={handleFilterChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary font-inter"
            >
              <option value="">All Prices</option>
              <option value="Free">Free</option>
              <option value="Paid">Paid</option>
            </select>
          </div>
        </div>
      </aside>

      {/* Main Content: Skill Cards Grid */}
      <main className="flex-1 p-8">
        <h1 className="text-section-heading font-poppins font-bold text-gray-800 mb-8">Explore Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.length > 0 ? (
            filteredSkills.map((skill) => (
              <div key={skill.id} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                <h3 className="text-card-title font-poppins font-semibold text-gray-800 mb-2">{skill.title}</h3>
                <p className="text-gray-600 text-sm mb-1 font-inter">Mentor: {skill.mentor}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {skill.tags.map((tag, index) => (
                    <span key={index} className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full font-inter">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to={`/app/skill/${skill.id}`}>
                  <button className="w-full border border-primary text-primary hover:bg-primary hover:text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out font-inter">
                    View Details
                  </button>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-gray-600 col-span-full text-center font-inter">No skills found matching your filters.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Skills;

