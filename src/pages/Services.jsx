import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/demoData';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  return (
    <div className="section" style={{ paddingTop: '120px' }}>
      <div className="container">
        <div className="text-center mb-8">
          <span className="badge">Our Expertise</span>
          <h1 className="h1 mb-4">Comprehensive Healthcare Services</h1>
          <p className="text-lead max-w-2xl mx-auto">
            From routine check-ups to specialized treatments, our expert team provides complete medical care under one roof.
          </p>
        </div>

        <div className="grid lg-grid-cols-3 md-grid-cols-2 grid-cols-1 mobile-grid-cols-2 gap-md">
          {services.map(service => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="service-card card">
                <div className="service-icon-wrapper">
                  <Icon size={28} className="service-icon" />
                </div>
                <h3 className="h4 mb-2">{service.title}</h3>
                <p className="text-sm text-muted mb-4">{service.description}</p>
                <Link to={`/services/${service.id}`} className="service-link mt-auto">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
