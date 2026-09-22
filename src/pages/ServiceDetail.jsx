import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../data/demoData';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <div className="section" style={{ paddingTop: '120px', textAlign: 'center' }}>
        <div className="container">
          <h1 className="h2">Service Not Found</h1>
          <Link to="/services" className="btn btn-primary mt-4">Back to Services</Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="section" style={{ paddingTop: '120px' }}>
      <div className="container">
        <Link to="/services" className="flex items-center gap-sm text-primary font-medium mb-6 hover-underline">
          <ArrowLeft size={16} /> Back to all services
        </Link>
        
        <div className="grid lg-grid-cols-3 grid-cols-1 gap-lg">
          <div className="lg-col-span-2" style={{ gridColumn: 'span 2' }}>
            <div className="flex items-center gap-md mb-6">
              <div className="service-icon-wrapper" style={{ margin: 0, width: '64px', height: '64px' }}>
                <Icon size={32} />
              </div>
              <h1 className="h2">{service.title}</h1>
            </div>
            
            <p className="text-lead mb-6">{service.description}</p>
            
            <h3 className="h3 mb-4">Treatment Overview</h3>
            <p className="text-muted mb-6">
              This is a demonstration page. In a real medical website, this section would contain detailed, accurate information about the {service.title} procedure, including what to expect before, during, and after the treatment.
            </p>
            
            <h3 className="h3 mb-4">Benefits</h3>
            <ul className="check-list mb-8">
              <li><CheckCircle className="check-icon" size={20} /> Comprehensive evaluation and diagnosis</li>
              <li><CheckCircle className="check-icon" size={20} /> Personalized treatment plans</li>
              <li><CheckCircle className="check-icon" size={20} /> State-of-the-art medical technology</li>
              <li><CheckCircle className="check-icon" size={20} /> Post-treatment care and monitoring</li>
            </ul>
            
            <div className="p-6 bg-primary text-white rounded-lg">
              <h3 className="h4 mb-2 text-white">Important Notice</h3>
              <p className="text-sm opacity-90">
                Your doctor will determine whether this treatment is appropriate for you. This information is for general educational purposes and does not constitute medical advice.
              </p>
            </div>
          </div>
          
          <div>
            <div className="card sticky" style={{ top: '100px' }}>
              <h3 className="h4 mb-4">Ready for a consultation?</h3>
              <p className="text-sm text-muted mb-6">
                Book an appointment with our specialists to discuss if this treatment is right for you.
              </p>
              <Link to="/appointment" className="btn btn-primary" style={{ width: '100%', marginBottom: '1rem' }}>Book Appointment</Link>
              <a href="tel:0000000000" className="btn btn-outline" style={{ width: '100%' }}>Call Clinic</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
