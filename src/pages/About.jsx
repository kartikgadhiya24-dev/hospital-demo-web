import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { facilities } from '../data/demoData';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="section" style={{ paddingTop: '120px' }}>
      <div className="container">
        <div className="grid lg-grid-cols-2 grid-cols-1 gap-lg items-center mb-12">
          <div>
            <span className="badge">Our Story</span>
            <h1 className="h2 mb-4">Dedicated to Your Well-being</h1>
            <p className="text-muted mb-4">
              At {siteConfig.brandName}, we combine exceptional medical expertise with advanced technology and compassionate care to provide you with the best possible health outcomes.
            </p>
            <p className="text-muted mb-6">
              Our clinic was founded on the principle that every patient deserves personalized, transparent, and high-quality medical attention in a comfortable environment.
            </p>
            <ul className="check-list mb-6">
              <li><CheckCircle className="check-icon" size={20} /> Patient-first philosophy</li>
              <li><CheckCircle className="check-icon" size={20} /> Continuous medical education</li>
              <li><CheckCircle className="check-icon" size={20} /> Community health initiatives</li>
            </ul>
          </div>
          <div className="about-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&auto=format&fit=crop" 
              alt="Hospital reception" 
              className="about-image rounded" 
              style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            />
          </div>
        </div>
        
        <div className="mt-12 section-alt p-8 rounded-lg">
          <div className="text-center mb-8">
            <h2 className="h2">Modern Facilities. Thoughtful Care.</h2>
          </div>
          <div className="grid lg-grid-cols-4 md-grid-cols-2 grid-cols-1 gap-md">
            {facilities.map(facility => (
              <div key={facility.id} className="card">
                <h3 className="h4 mb-2">{facility.title}</h3>
                <p className="text-sm text-muted">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
