import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Video, Phone, Lightbulb, Award, Star, TrendingUp, Zap, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    id: '1',
    name: 'React Development',
    mentorId: 'mentor1',
    tags: ['Frontend', 'JavaScript', 'Intermediate'],
    description: 'Master modern React with hooks, context API, and advanced component patterns.',
    level: 'Intermediate',
    students: '1.2K'
  },
  {
    id: '2',
    name: 'Node.js Backend',
    mentorId: 'mentor2',
    tags: ['Backend', 'JavaScript', 'Advanced'],
    description: 'Build robust and scalable REST APIs with Express.js and MongoDB.',
    level: 'Advanced',
    students: '980'
  },
  {
    id: '3',
    name: 'UI/UX Design Basics',
    mentorId: 'mentor3',
    tags: ['Design', 'Beginner'],
    description: 'Learn the fundamentals of user interface and user experience design.',
    level: 'Beginner',
    students: '2.1K'
  },
  {
    id: '4',
    name: 'Python for Data Science',
    mentorId: 'mentor1',
    tags: ['Data Science', 'Python', 'Intermediate'],
    description: 'Dive into data analysis, visualization, and machine learning with Python.',
    level: 'Intermediate',
    students: '1.5K'
  },
];

const mentorsData = {
  mentor1: {
    id: 'mentor1',
    name: 'Alice Johnson',
    avatar: 'https://via.placeholder.com/150/FF5733/FFFFFF?text=AJ',
  },
  mentor2: {
    id: 'mentor2',
    name: 'Bob Williams',
    avatar: 'https://via.placeholder.com/150/33FF57/FFFFFF?text=BW',
  },
  mentor3: {
    id: 'mentor3',
    name: 'Charlie Brown',
    avatar: 'https://via.placeholder.com/150/5733FF/FFFFFF?text=CB',
  },
};

const testimonialsData = [
  {
    id: '1',
    name: 'Alice Smith',
    role: 'Frontend Developer',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    quote: "SkillMate transformed my learning journey! I found an amazing mentor for React, and my skills have skyrocketed. Highly recommend!",
    rating: 5
  },
  {
    id: '2',
    name: 'Bob Johnson',
    role: 'Backend Engineer',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    quote: "The community is incredibly supportive. I've been able to teach Node.js and learn Python for data science. It's a fantastic platform for growth.",
    rating: 5
  },
  {
    id: '3',
    name: 'Carol White',
    role: 'UI/UX Designer',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    quote: "Finally, a platform that connects me with real people to exchange skills. The video calls are seamless, and I've made great connections!",
    rating: 5
  },
];

const featureHighlights = [
  {
    icon: Users,
    title: 'Community Learning',
    description: 'Connect with vibrant community of learners and educators',
    color: 'from-blue-400 to-blue-600'
  },
  {
    icon: Video,
    title: 'Live Video Calls',
    description: 'Real-time face-to-face interaction for immersive learning',
    color: 'from-purple-400 to-purple-600'
  },
  {
    icon: Zap,
    title: 'Instant Matching',
    description: 'AI-powered matching with perfect learning partners',
    color: 'from-yellow-400 to-orange-600'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const cardHoverVariants = {
  initial: { y: 0, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' },
  hover: {
    y: -8,
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
    transition: { duration: 0.3 }
  }
};

const Landing = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <motion.section
        className="relative min-h-screen flex flex-col items-center justify-center p-4 text-center overflow-hidden pt-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            style={{ top: '10%', right: '-5%' }}
            animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            style={{ bottom: '10%', left: '-5%' }}
            animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          />
          <motion.div
            className="absolute w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            style={{ top: '50%', left: '50%' }}
            animate={{ y: [0, 30, 0], x: [0, -30, 0] }}
            transition={{ duration: 12, repeat: Infinity, delay: 4 }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              ✨ Welcome to the future of learning
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mb-6 leading-tight"
          >
            Learn Skills. Connect with Mentors. Grow Faster.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 font-light"
          >
            Join a thriving community of learners and experts. Master new skills through personalized mentorship and peer-to-peer learning.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link to="/signup">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-2xl transition duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Zap size={20} /> Get Started Free
              </motion.button>
            </Link>
            <Link to="/skills">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-4 px-10 rounded-full transition duration-300 w-full sm:w-auto"
              >
                Explore Skills
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-8 py-12 border-t border-b border-gray-200"
          >
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600">10K+</div>
              <p className="text-gray-600 mt-2">Active Learners</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-600">500+</div>
              <p className="text-gray-600 mt-2">Expert Mentors</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-indigo-600">150+</div>
              <p className="text-gray-600 mt-2">Skills Available</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="py-20 px-4 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Why Choose SkillMate?</h2>
            <p className="text-xl text-gray-600">Everything you need to learn and grow</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featureHighlights.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                initial="initial"
                animate="initial"
                variants={cardHoverVariants}
                className="group relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 cursor-pointer overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition duration-300`} />
                <feature.icon
                  size={56}
                  className={`text-transparent bg-clip-text bg-gradient-to-r ${feature.color} mb-4 relative z-10`}
                />
                <h3 className="text-2xl font-bold text-gray-800 mb-3 relative z-10">{feature.title}</h3>
                <p className="text-gray-600 relative z-10">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* About Vision Section */}
      <motion.section
        id="about"
        className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Vision
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-600 leading-relaxed">
                SkillMate was born from the idea that <span className="font-bold text-blue-600">learning should be accessible, interactive, and community-driven</span>. We believe that everyone has valuable skills to share and a desire to learn new ones.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Traditional education can be expensive and one-sided, leaving many behind. Our platform breaks down these barriers, fostering a vibrant ecosystem where <span className="font-bold text-indigo-600">knowledge flows freely between peers</span>.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is to empower individuals to unlock their full potential by connecting them with mentors and learners alike. Whether you're a college student, self-learner, beginner, or freelancer, SkillMate provides the tools and community to grow, teach, and excel.
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl transform rotate-1 opacity-20" />
                <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl h-80 flex items-center justify-center text-white shadow-2xl">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  >
                    <Globe size={120} opacity={0.3} />
                  </motion.div>
                  <div className="absolute text-center">
                    <p className="text-2xl font-bold">Global Learning</p>
                    <p className="text-blue-100">Connect Across Borders</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Key Features Section */}
      <motion.section
        id="features"
        className="py-20 px-4 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Key Features</h2>
            <p className="text-xl text-gray-600">Everything you need for successful learning</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Feature Card 1: Community Learning */}
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              initial="initial"
              animate="initial"
              variants={cardHoverVariants}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200 hover:border-blue-400"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Users size={48} className="text-blue-600 mb-4" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Community Learning</h3>
              <p className="text-gray-700">
                Connect with a vibrant community of learners and educators. Share knowledge, ask questions, and grow together.
              </p>
            </motion.div>

            {/* Feature Card 2: Live Video Calls */}
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              initial="initial"
              animate="initial"
              variants={cardHoverVariants}
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200 hover:border-purple-400"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Video size={48} className="text-purple-600 mb-4" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Live Video Calls</h3>
              <p className="text-gray-700">
                Engage in real-time, face-to-face video sessions for interactive learning and personalized mentorship.
              </p>
            </motion.div>

            {/* Feature Card 3: Voice Calls */}
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              initial="initial"
              animate="initial"
              variants={cardHoverVariants}
              className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 border border-pink-200 hover:border-pink-400"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Phone size={48} className="text-pink-600 mb-4" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Voice Calls</h3>
              <p className="text-gray-700">
                Quick and easy audio conversations for questions, clarifications, or casual skill exchange.
              </p>
            </motion.div>

            {/* Feature Card 4: AI Skill Matching */}
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              initial="initial"
              animate="initial"
              variants={cardHoverVariants}
              className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 border border-yellow-200 hover:border-yellow-400"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Lightbulb size={48} className="text-yellow-600 mb-4" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">AI Skill Matching</h3>
              <p className="text-gray-700">
                Our intelligent AI connects you with the perfect learning partners based on your skills.
              </p>
            </motion.div>

            {/* Feature Card 5: Mentorship */}
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              initial="initial"
              animate="initial"
              variants={cardHoverVariants}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200 hover:border-green-400"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Award size={48} className="text-green-600 mb-4" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Expert Mentorship</h3>
              <p className="text-gray-700">
                Unlock advanced learning opportunities with dedicated mentorship from experienced professionals.
              </p>
            </motion.div>

            {/* Feature Card 6: Progress Tracking */}
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              initial="initial"
              animate="initial"
              variants={cardHoverVariants}
              className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 border border-indigo-200 hover:border-indigo-400"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <TrendingUp size={48} className="text-indigo-600 mb-4" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Progress Tracking</h3>
              <p className="text-gray-700">
                Monitor your learning journey with detailed progress tracking and achievement milestones.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Preview */}
      <motion.section
        id="skills-preview"
        className="py-20 px-4 bg-gradient-to-br from-slate-50 to-slate-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Popular Skills to Learn</h2>
            <p className="text-xl text-gray-600">Start your learning journey with these trending skills</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skillsData.map((skill) => (
              <motion.div
                key={skill.id}
                variants={itemVariants}
                whileHover="hover"
                initial="initial"
                animate="initial"
                variants={cardHoverVariants}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{skill.name}</h3>
                    <p className="text-sm text-gray-500">Mentor: {mentorsData[skill.mentorId]?.name}</p>
                  </div>
                  <div className="text-xs font-bold text-white bg-blue-600 px-2 py-1 rounded-full">
                    {skill.level}
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4">{skill.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {skill.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-500">{skill.students} students</span>
                  <Link to={`/skill/${skill.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
                    >
                      View Details →
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link to="/skills">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:shadow-lg transition duration-300"
              >
                View All Skills →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        id="testimonials"
        className="py-20 px-4 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600">Join thousands of happy learners</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonialsData.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                whileHover="hover"
                initial="initial"
                animate="initial"
                variants={cardHoverVariants}
                className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-lg italic text-gray-700 mb-6">"{testimonial.quote}"</p>

                <div className="flex items-center pt-6 border-t border-slate-200">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-400 mr-4"
                  />
                  <div>
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Call-to-Action Section */}
      <motion.section
        className="relative py-20 px-4 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Animated background */}
        <motion.div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute w-80 h-80 bg-white rounded-full filter blur-3xl"
            animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </motion.div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Learning?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Join thousands of learners connecting with mentors worldwide. Start learning today!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-2xl transition duration-300 w-full sm:w-auto"
                >
                  Create Free Account
                </motion.button>
              </Link>
              <Link to="/skills">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-10 rounded-full transition duration-300 w-full sm:w-auto"
                >
                  Explore Skills
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Landing;
