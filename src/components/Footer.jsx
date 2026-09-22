import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <Link to="/" className="brand-logo footer-logo">
              <span className="brand-icon">+</span>
              <span className="brand-name text-white">{siteConfig.brandName}</span>
            </Link>
            <p className="footer-description text-sm mt-4">
              {siteConfig.tagline}
            </p>
            <div className="social-links mt-4">
              <a href={siteConfig.socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="text-sm font-medium">FB</a>
              <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="text-sm font-medium">IG</a>
              <a href={siteConfig.socialLinks.twitter} target="_blank" rel="noreferrer" aria-label="Twitter" className="text-sm font-medium">X</a>
              <a href={siteConfig.socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-sm font-medium">IN</a>
            </div>
          </div>
          
          <div className="footer-links-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/doctors">Our Doctors</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/appointment">Book Appointment</Link></li>
            </ul>
          </div>
          
          <div className="footer-links-col">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><Link to="/services/general-consultation">General Consultation</Link></li>
              <li><Link to="/services/cardiology">Cardiology</Link></li>
              <li><Link to="/services/pediatrics">Pediatrics</Link></li>
              <li><Link to="/services/diagnostics">Diagnostics</Link></li>
            </ul>
          </div>

          <div className="footer-contact-col">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact-list">
              <li>
                <Phone size={16} className="contact-icon" />
                <span>{siteConfig.phone}</span>
              </li>
              <li>
                <Mail size={16} className="contact-icon" />
                <span>{siteConfig.email}</span>
              </li>
              <li>
                <MapPin size={16} className="contact-icon" />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="disclaimer-text text-sm">
            <strong>Medical Disclaimer:</strong> {siteConfig.disclaimer}
          </div>
          <div className="copyright-flex mt-4">
            <p className="text-sm">&copy; {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.</p>
            <div className="legal-links text-sm">
              <Link to="#">Privacy Policy</Link>
              <Link to="#">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
