import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';
import { services, doctors, facilities, testimonials } from '../data/demoData';
import { ArrowRight, CheckCircle, Clock, MapPin, Phone, Star, ShieldCheck, Activity } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content animate-fade-in">
            <span className="badge">Premium Healthcare</span>
            <h1 className="h1">Expert Care, <br/><span className="text-primary">Designed Around You.</span></h1>
            <p className="text-lead">{siteConfig.description}</p>
            <div className="hero-actions">
              <Link to="/appointment" className="btn btn-primary">
                Book an Appointment <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn btn-outline">
                Explore Our Services
              </Link>
            </div>
            
            <div className="trust-indicators">
              <div className="trust-item">
                <ShieldCheck className="trust-icon" />
                <span>Experienced Doctors</span>
              </div>
              <div className="trust-item">
                <Activity className="trust-icon" />
                <span>Modern Facilities</span>
              </div>
            </div>
          </div>
          
          <div className="hero-image-wrapper animate-fade-in" style={{animationDelay: '0.2s'}}>
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" 
              alt="Medical professionals walking in modern hospital" 
              className="hero-image"
            />
            <div className="floating-card top-right">
              <div className="flex items-center gap-sm">
                <div className="floating-icon-wrapper"><Star fill="var(--accent)" color="var(--accent)" size={16}/></div>
                <div>
                  <div className="h4">4.9/5</div>
                  <div className="text-sm text-muted">Demo Patient Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions / Info Bar */}
      <section className="info-bar section-alt">
        <div className="container grid lg-grid-cols-3 md-grid-cols-1 gap-md">
          <div className="info-card">
            <div className="info-icon"><Clock size={24} /></div>
            <div>
              <h3 className="h4">Opening Hours</h3>
              <p className="text-sm text-muted">Mon - Fri: {siteConfig.openingHours.weekdays}</p>
              <p className="text-sm text-muted">Sat: {siteConfig.openingHours.saturday}</p>
            </div>
          </div>
          <div className="info-card">
            <div className="info-icon"><Phone size={24} /></div>
            <div>
              <h3 className="h4">Contact Us</h3>
              <p className="text-sm text-muted">{siteConfig.phone}</p>
              <p className="text-sm text-muted">{siteConfig.email}</p>
            </div>
          </div>
          <div className="info-card">
            <div className="info-icon"><MapPin size={24} /></div>
            <div>
              <h3 className="h4">Location</h3>
              <p className="text-sm text-muted">{siteConfig.address}</p>
              <a href={siteConfig.mapUrl} className="text-sm text-primary font-medium mt-1 inline-block">Get Directions</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section preview */}
      <section className="section">
        <div className="container grid lg-grid-cols-2 md-grid-cols-1 gap-lg items-center">
          <div className="about-image-wrapper">
            <img src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&auto=format&fit=crop" alt="Doctor consulting patient" className="about-image rounded" />
          </div>
          <div className="about-content">
            <span className="badge">About {siteConfig.brandName}</span>
            <h2 className="h2 mb-4">Care That Puts You First</h2>
            <p className="text-muted mb-4">At {siteConfig.brandName}, we believe that true healthcare goes beyond treating symptoms. Our patient-first philosophy ensures that you receive personalized attention, transparent communication, and compassionate care at every step.</p>
            
            <ul className="check-list mb-6">
              <li><CheckCircle className="check-icon" size={20} /> Experienced medical professionals</li>
              <li><CheckCircle className="check-icon" size={20} /> State-of-the-art medical technology</li>
              <li><CheckCircle className="check-icon" size={20} /> Comfortable and hygienic environment</li>
              <li><CheckCircle className="check-icon" size={20} /> Transparent treatment plans</li>
            </ul>
            
            <Link to="/about" className="btn btn-outline">More About Us</Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header text-center mb-8">
            <span className="badge">Our Services</span>
            <h2 className="h2">Comprehensive Healthcare</h2>
            <p className="text-muted max-w-2xl mx-auto">We provide a wide range of medical services to address your health needs under one roof.</p>
          </div>
          
          <div className="grid lg-grid-cols-3 md-grid-cols-2 grid-cols-1 gap-md">
            {services.slice(0, 6).map(service => {
              const Icon = service.icon;
              return (
                <div key={service.id} className="service-card card">
                  <div className="service-icon-wrapper">
                    <Icon size={28} className="service-icon" />
                  </div>
                  <h3 className="h4 mb-2">{service.title}</h3>
                  <p className="text-sm text-muted mb-4">{service.description}</p>
                  <Link to={`/services/${service.id}`} className="service-link">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/services" className="btn btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Sales Pitch for the Demo - As requested */}
      <section className="section bg-primary text-white text-center demo-sales-section">
        <div className="container">
          <h2 className="h2 mb-4">Your Clinic Could Look Like This</h2>
          <p className="text-lead mb-8 max-w-2xl mx-auto text-white opacity-90">
            Every clinic is different. Your website should be built around your doctors, services, patients and brand. This is a complete demo that can be customized for your practice.
          </p>
          <div className="flex justify-center gap-sm flex-wrap">
            <a href={`mailto:${siteConfig.email}`} className="btn btn-light">Create My Clinic Website</a>
            <a href={`mailto:${siteConfig.email}`} className="btn btn-outline-light">Talk to the Developer</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
