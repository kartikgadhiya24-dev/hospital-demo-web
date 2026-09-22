import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';
import { Menu, X, Phone, Calendar, Home, Activity, MessageCircle, User } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="container header-container">
          <Link to="/" className="brand-logo">
            <span className="brand-icon">+</span>
            <span className="brand-name">{siteConfig.brandName}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav hide-mobile">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="header-actions hide-mobile">
            <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`} className="nav-contact">
              <Phone size={18} />
              <span>{siteConfig.phone}</span>
            </a>
            <Link to="/appointment" className="btn btn-primary">
              <Calendar size={18} />
              <span>Book Appointment</span>
            </Link>
          </div>
          
          {/* Mobile Top Actions (Only visible if menu isn't full screen bottom bar) */}
          {/* Removed as per user request to simplify top header on mobile */}
        </div>

        {/* Mobile Full Screen Menu Overlay */}
        {mobileMenuOpen && (
          <div className="mobile-menu-overlay hide-desktop">
            <div className="mobile-menu-inner">
              <div className="mobile-menu-header">
                 <Link to="/" className="brand-logo" onClick={() => setMobileMenuOpen(false)}>
                  <span className="brand-icon">+</span>
                  <span className="brand-name">{siteConfig.brandName}</span>
                </Link>
                <button className="mobile-menu-close" onClick={toggleMenu}><X size={28} /></button>
              </div>
              <nav className="mobile-full-nav">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.path} 
                    className={`mobile-full-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="mobile-full-actions">
                <Link to="/appointment" className="btn btn-primary w-full mb-4">
                  <Calendar size={18} />
                  Book Appointment
                </Link>
                <a href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9+]/g, '')}`} className="btn btn-outline w-full text-secondary border-secondary">
                  <MessageCircle size={18} />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Bottom App Bar (Modern App Style Navigation) */}
      <div className="mobile-bottom-bar hide-desktop">
        <Link to="/" className={`bottom-bar-item ${location.pathname === '/' ? 'active' : ''}`}>
          <Home size={24} />
          <span>Home</span>
        </Link>
        <Link to="/services" className={`bottom-bar-item ${location.pathname === '/services' ? 'active' : ''}`}>
          <Activity size={24} />
          <span>Services</span>
        </Link>
        <Link to="/appointment" className="bottom-bar-item center-cta">
          <div className="center-cta-inner">
            <Calendar size={24} />
          </div>
        </Link>
        <Link to="/doctors" className={`bottom-bar-item ${location.pathname === '/doctors' ? 'active' : ''}`}>
          <User size={24} />
          <span>Doctors</span>
        </Link>
        <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`} className="bottom-bar-item">
          <Phone size={24} />
          <span>Call</span>
        </a>
      </div>
    </>
  );
};

export default Header;
