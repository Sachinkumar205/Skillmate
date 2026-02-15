import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('learner'); // Added role state
  const navigate = useNavigate();

  useEffect(() => {
    // If user is already authenticated, redirect to dashboard.
    // Do NOT block access to the signup page just because another account
    // was created earlier on this browser (that was causing the signup
    // link from the login page to immediately bounce back).
    if (localStorage.getItem('authUser')) {
      navigate('/app/dashboard');
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to your backend for user registration.
    console.log('Signup Attempt:', { name, email, password, confirmPassword, role }); // Added role
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Simulate successful signup
    // In a real application, you'd check API response for success/failure
    if (name && email && password) { // Simple validation for now
      console.log('Signup successful!');
      // Persist a flag so returning visitors see Sign in instead of Sign up
      localStorage.setItem('hasAccount', 'true');
      // Persist full user object (demo only — do NOT store plaintext passwords in production)
      const newUser = { name, email, role, password };
      localStorage.setItem('user', JSON.stringify(newUser));
      // Mark user as authenticated (remember across sessions)
      localStorage.setItem('authUser', JSON.stringify({ name, email, role }));
      navigate('/app/dashboard'); // Redirect to dashboard on successful signup
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background-50 to-background-DEFAULT flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-poppins font-bold text-gray-800">
            Create your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <input
              id="name"
                name="name"
              type="text"
              autoComplete="name"
              required
                className="appearance-none rounded-t-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm font-inter"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
                id="email-address"
                name="email"
              type="email"
              autoComplete="email"
              required
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm font-inter"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm font-inter"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <input
                id="confirm-password"
                name="confirm-password"
              type="password"
              autoComplete="new-password"
              required
                className="appearance-none rounded-b-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm font-inter"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            {/* Role Selector */}
            <div className="mt-4">
              <label htmlFor="role" className="sr-only">Role</label>
              <select
                id="role"
                name="role"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm font-inter"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="learner">Learner</option>
                <option value="mentor">Mentor</option>
              </select>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-6 border border-transparent text-sm font-semibold rounded-full text-white bg-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-lg transition duration-300 ease-in-out"
            >
              Sign up
            </button>
          </div>
        </form>
        <div className="text-center text-sm text-gray-600 font-inter">
          Already have an account? {' '}
          <Link to="/login" className="font-medium text-primary hover:text-blue-700 font-inter">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
