import { useState } from 'react';
import Navbar from '../components/Navbar';
import { resetPassword } from '../utils/api';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await resetPassword(email);
    if (response.success) {
      setMessage('Password reset code sent! Please check your email.');
    } else {
      setMessage('Failed to send reset code. Try again.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Send Reset Code
          </button>
          {message && <p className="text-green-500 mt-4">{message}</p>}
        </form>
      </div>
    </>
  );
}