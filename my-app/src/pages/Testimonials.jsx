import React from 'react';

const testimonialsData = [
  {
    id: 1,
    name: 'Jane Doe',
    avatar: 'https://via.placeholder.com/80',
    quote: 'SkillMate transformed my learning journey! I found an amazing mentor who helped me master React in weeks. Highly recommended for anyone serious about skill exchange.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Mark T. Johnson',
    avatar: 'https://via.placeholder.com/80',
    quote: 'As a seasoned developer, SkillMate gave me a platform to share my knowledge and connect with eager learners. The video call feature is seamless.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sarah Lee',
    avatar: 'https://via.placeholder.com/80',
    quote: 'I love the community aspect of SkillMate. It\'s more than just learning; it\'s about building connections and growing together. My UI/UX skills have improved drastically!',
    rating: 4,
  },
  {
    id: 4,
    name: 'David Kim',
    avatar: 'https://via.placeholder.com/80',
    quote: 'Finding a mentor for Python was so easy. The platform is intuitive, and the real-time communication tools are a game-changer. Finally, a practical way to learn new skills!',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background-50 to-background-DEFAULT p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-section-heading font-poppins font-bold text-gray-800 text-center mb-12">
          What Our Community Says
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-primary shadow-sm"
              />
              <p className="text-lg text-gray-700 italic mb-4 font-inter">"{testimonial.quote}"</p>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-md font-semibold text-gray-800 font-inter">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

