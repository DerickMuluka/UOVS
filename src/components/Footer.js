import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-6 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold">University Voting System</h2>
            <p className="text-sm mt-1">Empowering students to make their voices heard.</p>
          </div>

          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="/privacy" className="hover:underline text-sm">Privacy Policy</a>
            <a href="/terms" className="hover:underline text-sm">Terms of Service</a>
            <a href="/contact" className="hover:underline text-sm">Contact Us</a>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} University Voting System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
