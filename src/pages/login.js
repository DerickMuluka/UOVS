import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; 
import { loginUser } from '../utils/api';
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();  // Use router for redirection

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(email, password);
      console.log('Login Response:', response);  // Log the API response
      if (response.success) {
        setMessage('Login successful! Redirecting...');
        // Redirect based on role
        if (response.user.role === 'admin') {
          router.push('/admin/dashboard');
        } else if (response.user.role === 'official') {
          router.push('/official/dashboard');
        } else {
          router.push('/student/dashboard');
        }
      } else {
        setMessage('Invalid credentials. Try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
      console.error('Login error:', error);  // Log the error details
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
        <div className="max-w-lg w-full p-4">
          <h2 className="text-2xl font-bold mb-4">Welcome Back!</h2>
          <p className="mb-4 text-gray-600">
            Please enter your credentials to log in. If you do not have an account, please <a href="/register" className="text-blue-500 underline">register here</a>.
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
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Login
            </button>
            {message && <p className={`mt-4 ${response.success ? 'text-green-500' : 'text-red-500'}`}>{message}</p>}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
