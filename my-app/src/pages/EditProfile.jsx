import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    avatar: '',
    bio: '',
    skillsOffered: '',
    skillsWanted: '',
    experienceLevel: '',
    availability: '',
    role: 'learner',
  });

  useEffect(() => {
    const raw = localStorage.getItem('authUser') || localStorage.getItem('user');
    if (!raw) {
      navigate('/login');
      return;
    }
    try {
      const user = JSON.parse(raw);
      setForm({
        name: user.name || '',
        email: user.email || '',
        avatar: user.avatar || '',
        bio: user.bio || '',
        skillsOffered: (user.skillsOffered || []).join(', '),
        skillsWanted: (user.skillsWanted || []).join(', '),
        experienceLevel: user.experienceLevel || '',
        availability: user.availability || '',
        role: user.role || 'learner',
      });
    } catch (e) {
      navigate('/login');
    }
  }, [navigate]);

  const handleChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const userObj = {
      name: form.name,
      email: form.email,
      avatar: form.avatar,
      bio: form.bio,
      skillsOffered: form.skillsOffered.split(',').map((s) => s.trim()).filter(Boolean),
      skillsWanted: form.skillsWanted.split(',').map((s) => s.trim()).filter(Boolean),
      experienceLevel: form.experienceLevel,
      availability: form.availability,
      role: form.role,
    };
    // Save to localStorage as demo persistence
    localStorage.setItem('user', JSON.stringify(userObj));
    localStorage.setItem('authUser', JSON.stringify({ name: userObj.name, email: userObj.email, role: userObj.role, avatar: userObj.avatar }));
    alert('Profile updated');
    navigate('/app/profile');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background-50 to-background-DEFAULT py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-2xl p-8">
        <h2 className="text-2xl font-poppins font-bold mb-4">Edit Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full name</label>
            <input name="name" value={form.name} onChange={handleChange} className="mt-1 block w-full border px-3 py-2 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input name="email" value={form.email} onChange={handleChange} className="mt-1 block w-full border px-3 py-2 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Avatar URL</label>
            <input name="avatar" value={form.avatar} onChange={handleChange} className="mt-1 block w-full border px-3 py-2 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Bio</label>
            <textarea name="bio" value={form.bio} onChange={handleChange} className="mt-1 block w-full border px-3 py-2 rounded-md" rows={3} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Skills Offered (comma separated)</label>
            <input name="skillsOffered" value={form.skillsOffered} onChange={handleChange} className="mt-1 block w-full border px-3 py-2 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Skills Wanted (comma separated)</label>
            <input name="skillsWanted" value={form.skillsWanted} onChange={handleChange} className="mt-1 block w-full border px-3 py-2 rounded-md" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Experience Level</label>
              <input name="experienceLevel" value={form.experienceLevel} onChange={handleChange} className="mt-1 block w-full border px-3 py-2 rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Availability</label>
              <input name="availability" value={form.availability} onChange={handleChange} className="mt-1 block w-full border px-3 py-2 rounded-md" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <select name="role" value={form.role} onChange={handleChange} className="mt-1 block w-full border px-3 py-2 rounded-md">
              <option value="learner">Learner</option>
              <option value="mentor">Mentor</option>
            </select>
          </div>
          <div className="flex items-center space-x-3">
            <button type="submit" className="px-6 py-2 bg-primary text-white rounded-full">Save</button>
            <button type="button" onClick={() => navigate(-1)} className="px-6 py-2 border rounded-full">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
