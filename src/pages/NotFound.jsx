import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container text-center">
        <h1 className="h1 text-primary" style={{ fontSize: '6rem', marginBottom: '1rem' }}>404</h1>
        <h2 className="h2 mb-4">Page Not Found</h2>
        <p className="text-lead mb-8">The page you are looking for does not exist or has been moved.</p>
        <Link to="/" className="btn btn-primary inline-flex">
          <Home size={18} /> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
