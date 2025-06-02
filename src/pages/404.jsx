import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-4">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
