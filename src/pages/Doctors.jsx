import React from 'react';
import { doctors } from '../data/demoData';
import { Link } from 'react-router-dom';

const Doctors = () => {
  return (
    <div className="section" style={{ paddingTop: '120px' }}>
      <div className="container">
        <div className="text-center mb-8">
          <span className="badge">Our Medical Team</span>
          <h1 className="h1 mb-4">Meet Our Experts</h1>
          <p className="text-lead max-w-2xl mx-auto">
            Highly qualified and experienced specialists dedicated to providing the best possible care for our patients.
          </p>
        </div>

        <div className="grid lg-grid-cols-3 md-grid-cols-2 grid-cols-1 mobile-grid-cols-2 gap-lg">
          {doctors.map(doctor => (
            <div key={doctor.id} className="card p-0" style={{ overflow: 'hidden' }}>
              <img 
                src={doctor.image} 
                alt={doctor.name} 
                style={{ width: '100%', height: '300px', objectFit: 'cover' }} 
              />
              <div className="p-6">
                <h3 className="h3 mb-1">{doctor.name}</h3>
                <p className="text-primary font-medium mb-2">{doctor.specialty}</p>
                <p className="text-sm text-muted mb-4">{doctor.qualifications} • {doctor.experience} Experience</p>
                <p className="text-sm mb-4">{doctor.intro}</p>
                <Link to="/appointment" className="btn btn-outline" style={{ width: '100%' }}>Book Appointment</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
