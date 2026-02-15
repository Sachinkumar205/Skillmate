# SkillMate - Peer-to-Peer Learning Platform

<div align="center">
  
![SkillMate Logo](./my-app/src/assets/logo.svg)

**Empowering learners to connect with mentors and grow faster through peer-to-peer skill exchange**

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?logo=node.js)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Active-success)]()

</div>

---

## 📋 Table of Contents

- [About SkillMate](#about-skillmate)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Setup](#environment-setup)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Key Components](#key-components)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 About SkillMate

**SkillMate** is an innovative peer-to-peer platform that revolutionizes skill learning and mentorship. We believe that everyone has valuable skills to share and a desire to learn new ones. Our platform breaks down the barriers of traditional education by fostering a vibrant ecosystem where knowledge flows freely between peers.

### Mission
Empower individuals to unlock their full potential by connecting them with mentors and learners alike. Whether you're a college student, self-learner, beginner, or freelancer, SkillMate provides the tools and community to grow, teach, and excel.

### Core Values
- **Accessibility**: Making quality education available to everyone
- **Community-Driven**: Building a supportive learning ecosystem
- **Interactive**: Real-time video and voice communication
- **AI-Powered**: Intelligent matching between learners and mentors
- **Scalable**: Growing with our diverse user base

---

## ✨ Features

### 🎓 Learning & Mentorship
- **Skill Discovery**: Browse and explore diverse skills offered by mentors
- **AI Skill Matching**: Intelligent recommendation system that matches learners with perfect mentors
- **Mentorship Programs**: Dedicated mentoring relationships with experienced professionals
- **Flexible Learning**: Learn at your own pace with personalized guidance

### 💬 Communication
- **Live Video Calls**: Real-time face-to-face interaction for immersive learning
- **Voice Calls**: Quick audio conversations for quick questions and clarifications
- **Chat System**: Asynchronous messaging for ongoing communication
- **Message History**: Access to all previous conversations

### 👥 Community
- **Community Forum**: Connect with other learners and mentors
- **User Profiles**: Showcase your skills and achievements
- **Peer Reviews & Ratings**: Build trust through community feedback
- **Testimonials**: Share and read success stories

### 📊 Dashboard & Analytics
- **Personal Dashboard**: View your learning progress and achievements
- **Skill Management**: Add, edit, and manage your offered and desired skills
- **Activity Feed**: Stay updated with community activities

---

## 🛠 Tech Stack

### Frontend
- **React 18.2.0**: Modern UI library with hooks and context API
- **React Router v6**: Client-side routing
- **Tailwind CSS 3.4**: Utility-first CSS framework
- **Vite 5.2**: Lightning-fast build tool and dev server
- **Framer Motion**: Smooth animations and transitions
- **Lucide React**: Beautiful icon library

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **JWT**: Secure authentication
- **WebSockets** (future): Real-time communication

### Development Tools
- **ESLint**: Code quality and style enforcement
- **PostCSS**: CSS transformations
- **Autoprefixer**: Vendor prefixes for CSS

---

## 📁 Project Structure

```
skillmate/
├── backend/                      # Backend server
│   ├── config/
│   │   └── db.js                # Database configuration
│   ├── controllers/
│   │   ├── authController.js    # Authentication logic
│   │   └── userController.js    # User management
│   ├── middleware/
│   │   ├── authMiddleware.js    # Auth verification
│   │   └── errorMiddleware.js   # Error handling
│   ├── models/
│   │   ├── User.js              # User schema
│   │   └── Message.js           # Message schema
│   ├── routes/
│   │   ├── authRoutes.js        # Auth endpoints
│   │   └── userRoutes.js        # User endpoints
│   ├── utils/
│   │   └── generateToken.js     # JWT token generation
│   ├── server.js                # Entry point
│   └── package.json
│
└── my-app/                       # Frontend React app
    ├── src/
    │   ├── components/
    │   │   ├── AppLayout.jsx     # Main app layout
    │   │   ├── AuthLayout.jsx    # Auth pages layout
    │   │   ├── Header.jsx        # Navigation header
    │   │   ├── Footer.jsx        # Footer component
    │   │   ├── Features.jsx      # Features display
    │   │
    │   ├── pages/
    │   │   ├── Landing.jsx       # Home page
    │   │   ├── Login.jsx         # Login page
    │   │   ├── Signup.jsx        # Registration page
    │   │   ├── Dashboard.jsx     # User dashboard
    │   │   ├── Profile.jsx       # User profile
    │   │   ├── EditProfile.jsx   # Profile editor
    │   │   ├── Skills.jsx        # Skills listing
    │   │   ├── SkillDetail.jsx   # Skill details
    │   │   ├── Explore.jsx       # Explore mentors
    │   │   ├── Chat.jsx          # Messaging
    │   │   ├── Call.jsx          # Video/Voice calls
    │   │   ├── Community.jsx     # Community page
    │   │   ├── Testimonials.jsx  # Testimonials page
    │   │   ├── Contact.jsx       # Contact page
    │   │   └── NotFound.jsx      # 404 page
    │   │
    │   ├── router/
    │   │   └── index.jsx         # Route configuration
    │   ├── assets/               # Images, logos, etc.
    │   ├── App.jsx               # Main app component
    │   └── main.jsx              # Entry point
    │
    ├── public/                   # Static assets
    ├── vite.config.js            # Vite configuration
    ├── tailwind.config.js        # Tailwind CSS config
    ├── package.json              # Dependencies
    └── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **MongoDB** - [Download](https://www.mongodb.com/try/download/community) or use MongoDB Atlas
- **Git** - [Download](https://git-scm.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/skillmate.git
   cd skillmate
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../my-app
   npm install
   ```

### Environment Setup

**Backend Configuration** - Create `.env` file in `backend/` directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/skillmate
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
```

**Frontend Configuration** - Create `.env` file in `my-app/` directory (if needed):
```env
VITE_API_URL=http://localhost:5000/api
```

---

## ▶️ Running the Application

### Option 1: Run Both Concurrently

**Terminal 1 - Backend:**
```bash
cd backend
npm start
# Server runs on http://localhost:5000
```

**Terminal 2 - Frontend:**
```bash
cd my-app
npm run dev
# Frontend runs on http://localhost:5173
```

---

## 📚 Key Routes

### Public Routes
- `/` - Landing/Home page
- `/login` - User login
- `/signup` - User registration
- `/skills` - Browse all skills
- `/skill/:id` - Individual skill details
- `/mentors` - Browse mentors
- `/community` - Community page
- `/testimonials` - User testimonials
- `/contact` - Contact form
- `/about` - About page

### Protected Routes (Authenticated Users)
- `/app/dashboard` - User dashboard
- `/app/profile` - User profile
- `/app/profile/:id` - Other user's profile
- `/app/profile/edit` - Edit profile
- `/app/explore` - Explore mentors
- `/app/skills` - My skills
- `/app/skill/:id` - Skill details
- `/app/chat` - Messaging
- `/app/call/:id` - Video/Voice call

---

## 🔌 API Documentation

### Authentication Endpoints

**Register User**
```
POST /api/auth/signup
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "secure_password"
}
```

**Login User**
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "secure_password"
}
```

### User Endpoints

**Get User Profile**
```
GET /api/users/:id
Authorization: Bearer <token>
```

**Update User Profile**
```
PUT /api/users/:id
Authorization: Bearer <token>
Content-Type: application/json
```

**Get All Users**
```
GET /api/users
Authorization: Bearer <token>
```

---

## 🏗️ Key Components

### Header Component
Navigation bar with responsive menu, user authentication status, and logout functionality.

### Landing Page
- Hero section with CTA buttons
- Vision/About section
- Key features showcase
- Popular skills preview
- User testimonials
- Footer with links

### Dashboard
User's personal dashboard showing:
- Learning progress
- Upcoming sessions
- Messages and notifications
- Recommended skills

### Profile Page
- User information and bio
- Skills offered and desired
- Reviews and ratings
- Call history

---

## 💾 Database Schema

### User Model
```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed),
  avatar: String,
  bio: String,
  skillsOffered: [String],
  skillsWanted: [String],
  rating: Number,
  reviews: [ObjectId],
  createdAt: Date,
  updatedAt: Date
}
```

### Message Model
```javascript
{
  _id: ObjectId,
  sender: ObjectId (ref: User),
  receiver: ObjectId (ref: User),
  content: String,
  timestamp: Date,
  read: Boolean
}
```

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. **Commit your changes**
   ```bash
   git commit -m "Add: description of changes"
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/YourFeatureName
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow existing code style (ESLint)
- Write meaningful commit messages
- Add comments for complex logic
- Test your changes before submitting PR
- Update documentation as needed


---

## 👥 Team & Support

**Project Lead**: Sachin Kumar
**Repository**: [GitHub - SkillMate](https://github.com/yourusername/skillmate)

### Need Help?
- 📧 Email: support@skillmate.com
- 💬 Discord: [Join Community](https://discord.gg/skillmate)
- 📖 Documentation: [Wiki](https://github.com/yourusername/skillmate/wiki)
- 🐛 Issues: [Report Bug](https://github.com/yourusername/skillmate/issues)

---

## 🚀 Future Roadmap

- [ ] AI-powered skill matching algorithm
- [ ] Video recording and playback
- [ ] Certificates and achievements
- [ ] Payment integration for premium courses
- [ ] Mobile app (React Native)
- [ ] Real-time notifications
- [ ] Advanced search and filters
- [ ] Skill rating system
- [ ] Community events
- [ ] Analytics dashboard

---



