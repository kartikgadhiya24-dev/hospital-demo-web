import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="section" style={{ paddingTop: '120px' }}>
      <div className="container">
        <div className="text-center mb-8">
          <span className="badge">Get in Touch</span>
          <h1 className="h1 mb-4">Contact {siteConfig.brandName}</h1>
          <p className="text-lead max-w-2xl mx-auto">
            We are here to answer any questions you may have about our medical services. Reach out to us and we'll respond as soon as we can.
          </p>
        </div>

        <div className="grid lg-grid-cols-2 grid-cols-1 gap-lg">
          <div className="contact-info">
            <h2 className="h3 mb-6">Clinic Information</h2>
            
            <div className="info-card card mb-4">
              <div className="info-icon"><MapPin size={24} /></div>
              <div>
                <h3 className="h4">Visit Us</h3>
                <p className="text-muted">{siteConfig.address}</p>
              </div>
            </div>
            
            <div className="info-card card mb-4">
              <div className="info-icon"><Phone size={24} /></div>
              <div>
                <h3 className="h4">Call Us</h3>
                <p className="text-muted">{siteConfig.phone}</p>
                <p className="text-sm text-muted">For urgent medical assistance, please call immediately.</p>
              </div>
            </div>
            
            <div className="info-card card mb-4">
              <div className="info-icon"><Mail size={24} /></div>
              <div>
                <h3 className="h4">Email Us</h3>
                <p className="text-muted">{siteConfig.email}</p>
              </div>
            </div>
            
            <div className="info-card card">
              <div className="info-icon"><Clock size={24} /></div>
              <div>
                <h3 className="h4">Opening Hours</h3>
                <p className="text-muted">Monday - Friday: {siteConfig.openingHours.weekdays}</p>
                <p className="text-muted">Saturday: {siteConfig.openingHours.saturday}</p>
                <p className="text-muted">Sunday: {siteConfig.openingHours.sunday}</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form card p-8">
            <h2 className="h3 mb-6">Send Us a Message</h2>
            <form onSubmit={(e) => { e.preventDefault(); alert('Demo message sent!'); }}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-input" required />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-input" required />
              </div>
              <div className="form-group">
                <label className="form-label">Subject</label>
                <input type="text" className="form-input" required />
              </div>
              <div className="form-group mb-6">
                <label className="form-label">Message</label>
                <textarea className="form-input" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
