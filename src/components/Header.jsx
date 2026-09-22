import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';
import { Menu, X, Phone, Calendar } from 'lucide-react';
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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    // document.body.style.overflow = 'auto';
  }, [location]);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // document.body.style.overflow = !mobileMenuOpen ? 'hidden' : 'auto';
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
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

        {/* Mobile Toggle */}
        <button className="mobile-menu-toggle hide-desktop" onClick={toggleMenu} aria-label="Toggle Menu">
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-inner">
            <nav className="mobile-nav">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mobile-actions">
              <Link to="/appointment" className="btn btn-primary" style={{ width: '100%', marginBottom: '1rem' }}>
                <Calendar size={18} />
                Book Appointment
              </Link>
              <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`} className="btn btn-outline" style={{ width: '100%' }}>
                <Phone size={18} />
                Call Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
