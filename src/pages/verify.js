/*import { useState } from 'react';
import Navbar from '../components/Navbar';
import { verifyUser } from '../utils/api';

export default function Verify() {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await verifyUser(code);
    if (response.success) {
      setMessage('Account verified successfully!');
      // Redirect to login
    } else {
      setMessage('Invalid verification code. Try again.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Verify Account</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Verification Code</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Verify
          </button>
          {message && <p className="text-green-500 mt-4">{message}</p>}
        </form>
      </div>
    </>
  );
}*/
