import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; 

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 pt-20 px-4">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Welcome to the University Voting System</h1>
        <p className="text-gray-700 text-lg mb-8 text-center max-w-2xl">
          Vote securely and efficiently in upcoming elections. Our platform is designed to make your voting experience smooth and accessible.
        </p>

        <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>🌐 <strong>Secure Voting:</strong> Your votes are securely cast and counted.</li>
            <li>🗳️ <strong>Easy Access:</strong> Vote from anywhere at any time.</li>
            <li>📊 <strong>Real-time Results:</strong> Instant updates on election results.</li>
            <li>🤝 <strong>Help and Support:</strong> Access resources for assistance throughout the voting process.</li>
          </ul>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">How It Works</h2>
          <p className="text-gray-600 mb-4">
            Participating in the university elections is easy! Follow these simple steps:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            <li> <strong>Create an Account:</strong> Register with your university email.</li>
            <li> <strong>Log In:</strong> Use your credentials to access the voting platform.</li>
            <li> <strong>Cast Your Vote:</strong> Follow the prompts to select your candidates.</li>
            <li> <strong>Submit Your Vote:</strong> Ensure your selection is correct before submitting.</li>
            <li> <strong>Check Results:</strong> View live updates after the voting period ends.</li>
          </ol>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full mb-6 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Get Involved!</h2>
          <p className="text-gray-600 mb-4">
            Ready to make your voice heard? Participate in the next election!
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
