import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { services, doctors } from '../data/demoData';
import { Calendar, Clock, CheckCircle } from 'lucide-react';

const Appointment = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
          <CheckCircle size={64} color="var(--secondary)" style={{ margin: '0 auto 1rem' }} />
          <h1 className="h2 mb-4">Appointment Request Received — Demo</h1>
          <p className="text-lead mb-6">
            Thank you for your interest. This is a demonstration form and is not connected to a real clinic. 
            In a real deployment, this would send an email or connect to your clinic's backend system.
          </p>
          <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Submit Another Demo Request</button>
        </div>
      </div>
    );
  }

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="text-center mb-8">
          <span className="badge">Book a Consultation</span>
          <h1 className="h2 mb-2">Request an Appointment</h1>
          <p className="text-muted">Fill out the form below and our team will get back to you to confirm your slot.</p>
        </div>

        <div className="card p-8">
          <form onSubmit={handleSubmit}>
            <div className="grid md-grid-cols-2 grid-cols-1 gap-md mb-4">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-input" required placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input type="tel" className="form-input" required placeholder="+91 98765 43210" />
              </div>
            </div>

            <div className="grid md-grid-cols-2 grid-cols-1 gap-md mb-4">
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-input" placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label className="form-label">Department / Service</label>
                <select className="form-input" required>
                  <option value="">Select a Service</option>
                  {services.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                </select>
              </div>
            </div>

            <div className="grid md-grid-cols-2 grid-cols-1 gap-md mb-4">
              <div className="form-group">
                <label className="form-label">Preferred Date</label>
                <div style={{ position: 'relative' }}>
                  <input type="date" className="form-input" required />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Preferred Doctor (Optional)</label>
                <select className="form-input">
                  <option value="">Any Available Doctor</option>
                  {doctors.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                </select>
              </div>
            </div>

            <div className="form-group mb-6">
              <label className="form-label">Additional Message</label>
              <textarea className="form-input" rows="4" placeholder="Briefly describe your symptoms or reason for visit..."></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Request Appointment <Calendar size={18} />
            </button>
            <p className="text-center text-sm text-muted mt-4">
              * This is a demonstration website. No actual appointment will be booked.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
