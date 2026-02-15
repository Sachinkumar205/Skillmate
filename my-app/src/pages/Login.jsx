import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to your backend for authentication.
    // For now, we'll simulate a successful login and redirect.
    console.log('Login Attempt:', { email, password });
    // Simulate login: first try matching a previously-signed-up local user
    const stored = localStorage.getItem('user');
    if (stored) {
      try {
        const storedUser = JSON.parse(stored);
        if (storedUser.email === email && storedUser.password === password) {
          console.log('Login successful (local user)!');
          localStorage.setItem('hasAccount', 'true');
          localStorage.setItem('authUser', JSON.stringify({ name: storedUser.name, email: storedUser.email, role: storedUser.role }));
          navigate('/app/dashboard');
          return;
        }
      } catch (err) {
        // fall through to dummy check
      }
    }

    // Fallback dummy credentials
    if (email === 'test@example.com' && password === 'password') { // Dummy credentials
      console.log('Login successful!');
      // Mark that the user has an account (so /signup won't be shown next visit)
      localStorage.setItem('hasAccount', 'true');
      localStorage.setItem('authUser', JSON.stringify({ email }));
      navigate('/app/dashboard'); // Redirect to dashboard on successful login
    } else {
      alert('Invalid credentials. Please try again or sign up.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background-50 to-background-DEFAULT flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-xl">
        <div>
          <h2 className="mt-6 text-center text-section-heading font-poppins font-bold text-gray-800">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-xl shadow-sm overflow-hidden border border-gray-200">
          <div>
            <input
                id="email-address"
                name="email"
              type="email"
              autoComplete="email"
              required
                className="appearance-none relative block w-full px-3 py-3 border-b border-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm font-inter"
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
                autoComplete="current-password"
                required
                className="appearance-none relative block w-full px-3 py-3 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm font-inter"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600 font-inter">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-primary hover:text-blue-700 font-inter">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-6 border border-transparent text-sm font-semibold rounded-full text-white bg-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-lg transition duration-300 ease-in-out"
            >
              Sign in
            </button>
          </div>
        </form>
        <div className="text-center text-sm text-gray-600 font-inter">
          Don't have an account? {' '}
          <Link to="/signup" className="font-medium text-primary hover:text-blue-700 font-inter">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
