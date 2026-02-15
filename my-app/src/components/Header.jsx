import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { Menu } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const raw = localStorage.getItem('authUser');
    if (raw) {
      try {
        setUser(JSON.parse(raw));
      } catch (e) {
        setUser(null);
      }
    }
    const onStorage = (e) => {
      if (e.key === 'authUser') {
        setUser(e.newValue ? JSON.parse(e.newValue) : null);
      }
    }
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const isLoggedIn = !!user;

  const handleLogout = () => {
    localStorage.removeItem('authUser');
    setUser(null);
    navigate('/login');
  }

  return (
    <header className="sticky top-0 z-50 bg-white bg-opacity-80 backdrop-blur-md shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} alt="SkillMate logo" className="w-10 h-10" />
          <span className="text-xl font-bold text-gray-800 font-poppins">SkillMate</span>
        </Link>

        {/* Center Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-primary font-inter">
            Home
          </Link>
          <Link to="/skills" className="text-gray-600 hover:text-primary font-inter">
            Skills
          </Link>
          <Link to="/mentors" className="text-gray-600 hover:text-primary font-inter">
            Mentors
          </Link>
          <Link to="/community" className="text-gray-600 hover:text-primary font-inter">
            Community
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-primary font-inter">
            About
          </Link>
        </div>

        {/* Right Section: Login/Signup or Logout */}
        <div className="flex items-center space-x-4">
          {!isLoggedIn ? (
            <>
              <Link to="/login" className="px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-white font-inter font-semibold rounded-full transition duration-300">
                Login
              </Link>
              <Link
                to="/signup"
                className="px-6 py-2 text-white bg-primary rounded-full hover:bg-blue-700 font-inter font-semibold shadow-lg transition duration-300"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">{user && user.name ? user.name.charAt(0).toUpperCase() : (user && user.email ? user.email.charAt(0).toUpperCase() : '')}</div>
                <div className="text-sm text-gray-700 font-inter">{user && (user.name || user.email)}</div>
              </div>
              <button onClick={handleLogout} className="px-4 py-2 text-white bg-red-500 rounded-full hover:bg-red-600 font-inter font-semibold shadow-lg transition duration-300">Logout</button>
            </div>
          )}
        </div>

        {/* Mobile menu button (future implementation) */}
        <div className="md:hidden">
          <button className="text-gray-600 hover:text-primary focus:outline-none">
            <Menu size={24} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
