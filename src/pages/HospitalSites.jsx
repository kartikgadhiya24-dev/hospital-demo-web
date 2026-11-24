import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Phone, MapPin, Clock3, HeartPulse, ShieldCheck, Stethoscope, Baby, Bone, Activity, Menu, CalendarDays } from 'lucide-react';
import './HospitalSites.css';

const hospitals = {
  'soni-orthocare': {
    name: 'SONI ORTHOCARE HOSPITAL',
    short: 'Soni Orthocare',
    eyebrow: 'ORTHOPAEDIC CARE',
    headline: 'Move better.\nLive stronger.',
    intro: 'A dedicated digital home for your orthopaedic care journey. Explore hospital information and connect with the care team.',
    accent: '#176b66', soft: '#e9f5f2', dark: '#103d3b',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1500&q=85',
    icon: Bone,
    highlights: ['Orthopaedic care information', 'Patient-first guidance', 'Appointment enquiries'],
    tagline: 'Helping you take your next step with confidence.'
  },
  'gokul-hospital': {
    name: 'GOKUL HOSPITAL AND ICU',
    short: 'Gokul Hospital & ICU',
    eyebrow: 'HOSPITAL & INTENSIVE CARE',
    headline: 'Care when\nit matters most.',
    intro: 'Find essential hospital information and a clear way to reach the Gokul Hospital and ICU team.',
    accent: '#2456a6', soft: '#edf3ff', dark: '#142e59',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1500&q=85',
    icon: Activity,
    highlights: ['Hospital information', 'ICU information', 'Contact and visit enquiries'],
    tagline: 'Clear information. Compassionate care.'
  },
  'janani-hospital': {
    name: 'JANANI HOSPITAL',
    short: 'Janani Hospital',
    eyebrow: 'HEALTHCARE & WELLBEING',
    headline: 'Care that puts\npeople first.',
    intro: 'A welcoming online destination for patients and families to learn about Janani Hospital and get in touch.',
    accent: '#a34d72', soft: '#fff0f5', dark: '#57243c',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1500&q=85',
    icon: HeartPulse,
    highlights: ['Hospital overview', 'Patient information', 'Appointment enquiries'],
    tagline: 'Thoughtful care for every stage of life.'
  },
  'shreeji-baby-care': {
    name: 'SHREEJI BABY CARE HOSPITAL',
    short: 'Shreeji Baby Care',
    eyebrow: 'BABY & CHILD CARE',
    headline: 'Little lives.\nBig care.',
    intro: 'A gentle, family-friendly online space to discover Shreeji Baby Care Hospital and contact its team.',
    accent: '#9b5b32', soft: '#fff4e9', dark: '#54301d',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1500&q=85',
    icon: Baby,
    highlights: ['Baby care information', 'Family-friendly guidance', 'Appointment enquiries'],
    tagline: 'A warm welcome for little ones and their families.'
  }
};

const links = [
  ['soni-orthocare', 'Soni Orthocare'],
  ['gokul-hospital', 'Gokul Hospital & ICU'],
  ['janani-hospital', 'Janani Hospital'],
  ['shreeji-baby-care', 'Shreeji Baby Care']
];

export default function HospitalSites() {
  const { pathname } = useLocation();
  const slug = pathname.split('/')[1];
  const hospital = hospitals[slug] || hospitals['soni-orthocare'];
  const Icon = hospital.icon;

  return (
    <div className="hospital-site" style={{'--hs-accent': hospital.accent, '--hs-soft': hospital.soft, '--hs-dark': hospital.dark}}>
      <div className="hs-topline"><div className="hs-shell"><span>HEALTHCARE • TRUST • COMPASSION</span><span>Official hospital information</span></div></div>
      <header className="hs-header">
        <div className="hs-shell hs-nav">
          <Link to={`/${slug}`} className="hs-brand"><span className="hs-brand-icon"><Icon size={22}/></span><span>{hospital.short}<small>HOSPITAL WEBSITE</small></span></Link>
          <nav className="hs-links"><a href="#about">About</a><a href="#care">Care information</a><a href="#contact">Contact</a></nav>
          <a className="hs-nav-cta" href="#contact"><CalendarDays size={17}/> Enquire now</a>
        </div>
      </header>

      <main>
        <section className="hs-hero">
          <div className="hs-shell hs-hero-grid">
            <div className="hs-hero-copy">
              <span className="hs-eyebrow"><span/> {hospital.eyebrow}</span>
              <h1>{hospital.headline.split('\n').map((line, i) => <React.Fragment key={line}>{i > 0 && <br/>}{line}</React.Fragment>)}</h1>
              <p>{hospital.intro}</p>
              <div className="hs-actions"><a className="hs-button" href="#contact">Contact the hospital <ArrowRight size={18}/></a><a className="hs-text-link" href="#about">Discover more <ArrowRight size={16}/></a></div>
              <div className="hs-trust"><span><ShieldCheck size={17}/> Patient-focused information</span><span><HeartPulse size={17}/> Care with compassion</span></div>
            </div>
            <div className="hs-hero-visual"><img src={hospital.image} alt="Hospital and healthcare environment"/><div className="hs-image-note"><span className="hs-note-icon"><Icon size={22}/></span><span><strong>{hospital.short}</strong><small>{hospital.tagline}</small></span></div></div>
          </div>
        </section>

        <section className="hs-strip"><div className="hs-shell hs-strip-grid"><div><span className="hs-strip-icon"><Stethoscope size={20}/></span><span><strong>Hospital information</strong><small>Know more about the facility</small></span></div><div><span className="hs-strip-icon"><HeartPulse size={20}/></span><span><strong>Patient-first approach</strong><small>Clear and helpful information</small></span></div><div><span className="hs-strip-icon"><Phone size={20}/></span><span><strong>Get in touch</strong><small>Connect with the hospital team</small></span></div></div></section>

        <section className="hs-section" id="about"><div className="hs-shell hs-about-grid"><div><span className="hs-kicker">WELCOME TO {hospital.short.toUpperCase()}</span><h2>Healthcare information, made simple.</h2></div><div><p className="hs-body">This website is being prepared as the official online presence for {hospital.name}. Hospital-specific details—including doctor profiles, verified services, timings, address and appointment contacts—will be added after confirmation by the hospital.</p><p className="hs-body hs-muted">We believe patients and families should be able to find clear, accurate information before they visit.</p></div></div></section>

        <section className="hs-section hs-care" id="care"><div className="hs-shell"><div className="hs-section-head"><div><span className="hs-kicker">PATIENT INFORMATION</span><h2>Here to help you find your way.</h2></div><p>Useful information will be organised here so patients and families can take the next step with confidence.</p></div><div className="hs-cards">{hospital.highlights.map((item, i)=><article className="hs-card" key={item}><span className="hs-card-num">0{i+1}</span><h3>{item}</h3><p>Verified details for this section will be published once supplied by the hospital.</p><a href="#contact">Learn more <ArrowRight size={15}/></a></article>)}</div></div></section>

        <section className="hs-contact" id="contact"><div className="hs-shell hs-contact-inner"><div><span className="hs-kicker">WE ARE HERE TO HELP</span><h2>Need hospital information?</h2><p>Contact details and appointment options will appear here once the hospital confirms its official phone number, address and preferred enquiry channel.</p></div><a className="hs-button hs-button-light" href="mailto:">Contact details coming soon <ArrowRight size={18}/></a></div></section>
      </main>

      <footer className="hs-footer"><div className="hs-shell hs-footer-inner"><div><strong>{hospital.name}</strong><small>Website preview • Information pending hospital verification</small></div><div className="hs-footer-links">{links.map(([path,label])=><Link key={path} to={`/${path}`}>{label}</Link>)}</div></div><div className="hs-shell hs-copyright">© {new Date().getFullYear()} {hospital.name}. All rights reserved.</div></footer>
    </div>
  );
}
