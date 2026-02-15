import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Profile = () => {
  const { id } = useParams(); // Get user ID from URL parameters

  // Dummy data for demonstration. In a real app, this would come from an API call.
  const userProfile = {
    name: "John Doe",
    avatar: "https://via.placeholder.com/150",
    bio: "Passionate full-stack developer with expertise in React, Node.js, and MongoDB. Love to teach JavaScript and learn about UI/UX design.",
    skillsOffered: ["JavaScript", "React.js", "Node.js", "MongoDB", "Express.js"],
    skillsWanted: ["UI/UX Design", "Figma", "Graphic Design", "Marketing"],
    experienceLevel: "Intermediate",
    availability: "Weekends, Evenings",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background-50 to-background-DEFAULT py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          <img
            className="w-32 h-32 rounded-full object-cover border-4 border-primary shadow-md"
            src={userProfile.avatar}
            alt={`${userProfile.name}'s avatar`}
          />
          <div className="text-center md:text-left">
            <h1 className="text-section-heading font-poppins font-bold text-text-heading">{userProfile.name}</h1>
            <p className="text-lg font-inter text-text-content mb-4">@{id || "username"}</p>
            <p className="text-body-text text-text-content leading-relaxed">{userProfile.bio}</p>
          </div>
          <div className="md:ml-auto">
            <Link to="/app/profile/edit">
              <button className="border border-primary text-primary hover:bg-primary hover:text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out font-inter">
                Edit Profile
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-card-title font-poppins font-semibold text-text-heading mb-4">Skills Offered</h2>
            <div className="flex flex-wrap gap-2">
              {userProfile.skillsOffered.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full font-inter"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-card-title font-poppins font-semibold text-text-heading mb-4">Skills Wanted</h2>
            <div className="flex flex-wrap gap-2">
              {userProfile.skillsWanted.map((skill, index) => (
                <span
                  key={index}
                  className="bg-emerald-100 text-emerald-800 text-sm font-medium px-3 py-1 rounded-full font-inter"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-card-title font-poppins font-semibold text-text-heading mb-4">Additional Information</h2>
          <p className="text-body-text text-text-content mb-2 font-inter">
            <span className="font-semibold">Experience Level:</span> {userProfile.experienceLevel}
          </p>
          <p className="text-body-text text-text-content mb-2 font-inter">
            <span className="font-semibold">Availability:</span> {userProfile.availability}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
