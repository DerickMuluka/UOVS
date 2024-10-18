import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; 
import { registerUser } from '../utils/api';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');  // Default role
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await registerUser(email, password, role);
    if (response.success) {
      setMessage('Registration successful! Please log in.');
    } else {
      setMessage('Registration failed. Try again.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
        <div className="max-w-lg w-full p-4">
          <h2 className="text-2xl font-bold mb-4">Create Your Account</h2>
          <p className="mb-4 text-gray-600">
            Join our community by creating an account. Whether you are a student, admin, or official, registering is the first step to making your voice heard in our university voting system.
          </p>
          <p className="mb-4 text-gray-600">
            Please fill in the form below to get started.
          </p>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Role</label>
              <select
                className="w-full p-2 border border-gray-300 rounded"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="student">Student</option>
                <option value="admin">Admin</option>
                <option value="official">Official</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Register
            </button>
            {message && <p className={`mt-4 ${response.success ? 'text-green-500' : 'text-red-500'}`}>{message}</p>}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
