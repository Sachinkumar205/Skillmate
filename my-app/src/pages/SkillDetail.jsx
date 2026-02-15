import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Video, Phone, MessageSquare, Star } from 'lucide-react';

const skillsData = [
  {
    id: '1',
    title: 'React.js Basics',
    mentor: 'Alice Smith',
    mentorId: 'mentor1',
    description: 'Learn the fundamentals of React.js, including components, state, props, and hooks. This course is perfect for beginners looking to get started with modern frontend development.',
    tags: ['Frontend', 'JavaScript', 'Beginner'],
    category: 'Web Development',
    level: 'Beginner',
    price: 'Free',
    duration: '8 hours',
    rating: 4.8,
    reviews: 120,
  },
  {
    id: '2',
    title: 'Node.js for Backend',
    mentor: 'Bob Johnson',
    mentorId: 'mentor2',
    description: 'Master backend development with Node.js, Express, and MongoDB. Learn to build RESTful APIs and handle database operations.',
    tags: ['Backend', 'JavaScript', 'Intermediate'],
    category: 'Web Development',
    level: 'Intermediate',
    price: 'Free',
    duration: '12 hours',
    rating: 4.7,
    reviews: 95,
  },
];

const mentorsData = {
  'mentor1': {
    name: 'Alice Smith',
    avatar: 'https://via.placeholder.com/100',
    bio: 'Experienced React developer with a passion for teaching and helping others grow in their coding journey.',
    skillsOffered: ['React.js', 'Vue.js', 'CSS'],
  },
  'mentor2': {
    name: 'Bob Johnson',
    avatar: 'https://via.placeholder.com/100',
    bio: 'Senior backend engineer specializing in scalable Node.js applications and database design.',
    skillsOffered: ['Node.js', 'Python', 'Express.js'],
  },
};

const SkillDetail = () => {
  const { id } = useParams();
  const skill = skillsData.find((s) => s.id === id);
  const mentor = skill ? mentorsData[skill.mentorId] : null;

  if (!skill) {
    return <div className="min-h-screen flex items-center justify-center text-gray-600">Skill not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background-50 to-background-DEFAULT p-8 pb-24 md:pb-8 relative">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8">
        <h1 className="text-section-heading font-poppins font-bold text-gray-800 mb-4">{skill.title}</h1>
        <p className="text-xl text-primary mb-6 font-inter">by {skill.mentor}</p>

        {/* Skill Overview */}
        <div className="mb-8">
          <h2 className="text-card-title font-poppins font-semibold text-gray-800 mb-3">Overview</h2>
          <p className="text-body-text text-gray-600 mb-4 font-inter">{skill.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {skill.tags.map((tag, index) => (
              <span key={index} className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full font-inter">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center text-gray-600 text-sm font-inter">
            <span>{skill.rating} <Star size={16} className="inline-block text-yellow-400 fill-current" /> ({skill.reviews} reviews)</span>
            <span className="mx-2">|</span>
            <span>{skill.duration}</span>
            <span className="mx-2">|</span>
            <span>{skill.level}</span>
            <span className="mx-2">|</span>
            <span className="font-semibold">{skill.price}</span>
          </div>
        </div>

        {/* Mentor Profile Card */}
        {mentor && (
          <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-200">
            <h2 className="text-card-title font-poppins font-semibold text-gray-800 mb-4">About the Mentor</h2>
            <div className="flex items-center space-x-4">
              <img src={mentor.avatar} alt={mentor.name} className="w-20 h-20 rounded-full object-cover border-2 border-primary" />
              <div>
                <h3 className="text-xl font-poppins font-semibold text-gray-800">{mentor.name}</h3>
                <p className="text-gray-600 text-sm font-inter">{mentor.bio}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {mentor.skillsOffered.map((s, idx) => (
                    <span key={idx} className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2 py-0.5 rounded-full font-inter">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Fixed Bottom Control Bar (for mobile-friendliness) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-2xl border-t border-gray-200 flex justify-around items-center z-10
                  md:static md:w-auto md:h-auto md:top-1/2 md:-translate-y-1/2 md:right-8 md:flex-col md:space-x-0 md:space-y-4 md:bg-white md:p-6 md:rounded-xl md:shadow-lg md:border-none md:justify-center">
        <Link to={`/app/call/${skill.mentorId}`} className="flex flex-col items-center text-primary hover:text-blue-700 transition duration-300 group">
          <Video size={24} className="md:group-hover:scale-110 md:group-hover:drop-shadow-md" />
          <span className="text-xs font-inter mt-1 md:hidden">Video Call</span>
        </Link>
        <Link to={`/app/call/${skill.mentorId}`} className="flex flex-col items-center text-primary hover:text-blue-700 transition duration-300 group">
          <Phone size={24} className="md:group-hover:scale-110 md:group-hover:drop-shadow-md" />
          <span className="text-xs font-inter mt-1 md:hidden">Voice Call</span>
        </Link>
        <Link to={`/app/chat/${skill.mentorId}`} className="flex flex-col items-center text-primary hover:text-blue-700 transition duration-300 group">
          <MessageSquare size={24} className="md:group-hover:scale-110 md:group-hover:drop-shadow-md" />
          <span className="text-xs font-inter mt-1 md:hidden">Chat</span>
        </Link>
      </div>
    </div>
  );
};

export default SkillDetail;