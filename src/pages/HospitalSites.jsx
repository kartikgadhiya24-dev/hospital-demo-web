import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Phone, MapPin, Clock3, HeartPulse, ShieldCheck, Stethoscope, Baby, Bone, Activity, CalendarDays, Navigation, CheckCircle2, MoveUpRight, Award, Accessibility, ChevronDown } from 'lucide-react';
import './HospitalSites.css';

const hospitals = {
  'soni-orthocare': {
    name: 'SONI ORTHOCARE HOSPITAL', short: 'Soni Orthocare', eyebrow: 'ORTHOPAEDIC TRAUMA & RECONSTRUCTION',
    headline: 'Expertise for the\nroad back to movement.',
    intro: 'Orthopaedic trauma and Ilizarov surgical care in Junagadh, led by Dr. Armish Soni. Clear information, direct contact and a convenient way to find the clinic.',
    accent: '#176b66', soft: '#e9f5f2', dark: '#103d3b',
    image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1600&q=88',
    icon: Bone, tagline: 'Orthopaedic Trauma & Ilizarov Surgeon'
  },
  'gokul-hospital': {
    name: 'GOKUL HOSPITAL AND ICU', short: 'Gokul Hospital & ICU', eyebrow: 'HOSPITAL & INTENSIVE CARE',
    headline: 'Care when\nit matters most.', intro: 'Find essential hospital information and a clear way to reach the Gokul Hospital and ICU team.',
    accent: '#2456a6', soft: '#edf3ff', dark: '#142e59',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1500&q=85',
    icon: Activity, tagline: 'Clear information. Compassionate care.'
  },
  'janani-hospital': {
    name: 'JANANI HOSPITAL', short: 'Janani Hospital', eyebrow: 'HEALTHCARE & WELLBEING',
    headline: 'Care that puts\npeople first.', intro: 'A welcoming online destination for patients and families to learn about Janani Hospital and get in touch.',
    accent: '#a34d72', soft: '#fff0f5', dark: '#57243c',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1500&q=85',
    icon: HeartPulse, tagline: 'Thoughtful care for every stage of life.'
  },
  'shreeji-baby-care': {
    name: 'SHREEJI BABY CARE HOSPITAL', short: 'Shreeji Baby Care', eyebrow: 'BABY & CHILD CARE',
    headline: 'Little lives.\nBig care.', intro: 'A gentle, family-friendly online space to discover Shreeji Baby Care Hospital and contact its team.',
    accent: '#9b5b32', soft: '#fff4e9', dark: '#54301d',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1500&q=85',
    icon: Baby, tagline: 'A warm welcome for little ones and their families.'
  }
};

const links = [
  ['soni-orthocare', 'Soni Orthocare'], ['gokul-hospital', 'Gokul Hospital & ICU'],
  ['janani-hospital', 'Janani Hospital'], ['shreeji-baby-care', 'Shreeji Baby Care']
];

function SoniOrthocare() {
  const phone = '+918200325504';
  const address = '3rd Floor, Chandan Infinity, inside Ratnadeep Hospital, Vanthali Road, near Vadla Fatak, Junagadh, Gujarat 362015';
  const map = 'https://www.google.com/maps/search/?api=1&query=SONI+ORTHOCARE+Dr+Armish+Soni+Junagadh';
  const expertise = [
    ['Orthopaedic trauma', 'Assessment and surgical care for orthopaedic injuries and trauma.'],
    ['Complex fracture care', 'Specialist evaluation for difficult fractures and complicated bone healing.'],
    ['Ilizarov surgery', 'Ilizarov-based external fixation and orthopaedic reconstruction expertise.'],
    ['Limb reconstruction', 'Evaluation of selected bone deformity, non-union and limb-length concerns.']
  ];
  return <div className="soni-site">
    <div className="soni-top"><div className="soni-wrap"><span>SONI ORTHOCARE <i>•</i> JUNAGADH, GUJARAT</span><a href={`tel:${phone}`}><Phone size={14}/> {phone.replace('+91','+91 ')}</a></div></div>
    <header className="soni-header"><div className="soni-wrap soni-nav">
      <a className="soni-brand" href="#home"><span className="soni-logo"><Bone size={25}/></span><span>SONI ORTHOCARE<small>ORTHOPAEDIC & TRAUMA CARE</small></span></a>
      <nav><a href="#about">About</a><a href="#expertise">Specialisation</a><a href="#doctor">Doctor</a><a href="#location">Location</a></nav>
      <a className="soni-nav-cta" href={`tel:${phone}`}><Phone size={16}/> Call clinic</a>
    </div></header>
    <main id="home">
      <section className="soni-hero"><div className="soni-wrap soni-hero-grid">
        <div className="soni-hero-copy"><div className="soni-eyebrow"><span/> ORTHOPAEDIC TRAUMA & ILIZAROV SURGERY</div>
          <h1>Expertise for the <em>road back to movement.</em></h1>
          <p>Soni Orthocare is an orthopaedic surgical practice in Junagadh led by Dr. Armish Soni, listed as an Orthopedic Trauma & Ilizarov Surgeon.</p>
          <div className="soni-hero-actions"><a className="soni-btn" href={`tel:${phone}`}>Call for enquiries <ArrowRight size={18}/></a><a className="soni-outline" href={map} target="_blank" rel="noreferrer">Get directions <Navigation size={17}/></a></div>
          <div className="soni-proof"><div><strong>4.9/5</strong><small>Public listing rating</small></div><span className="soni-proof-line"/><div><strong>114</strong><small>Public listing reviews</small></div><span className="soni-proof-line"/><div><strong>Junagadh</strong><small>Gujarat, India</small></div></div>
        </div>
        <div className="soni-hero-photo"><img src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1600&q=88" alt="Orthopaedic medical consultation"/><div className="soni-photo-caption"><span><Bone size={21}/></span><div><b>Dr. Armish Soni</b><small>Orthopedic Trauma & Ilizarov Surgeon</small></div></div><div className="soni-photo-mark">ORTHOPAEDIC<br/>CARE</div></div>
      </div></section>
      <section className="soni-info-bar"><div className="soni-wrap soni-info-grid"><div><span><MapPin size={20}/></span><div><b>Convenient clinic location</b><small>Chandan Infinity, Ratnadeep Hospital</small></div></div><div><span><Stethoscope size={20}/></span><div><b>Focused specialisation</b><small>Orthopaedic trauma & Ilizarov surgery</small></div></div><div><span><Phone size={20}/></span><div><b>Speak to the clinic</b><small>Call +91 82003 25504</small></div></div></div></section>
      <section className="soni-section" id="about"><div className="soni-wrap soni-about"><div><div className="soni-label">WELCOME TO SONI ORTHOCARE</div><h2>Specialist orthopaedic care, with a focus on complex problems.</h2></div><div className="soni-about-copy"><p>Soni Orthocare is located on the 3rd floor of Chandan Infinity, within Ratnadeep Hospital, near Vadla Fatak on Vanthali Road in Junagadh.</p><p>The public business listing identifies Dr. Armish Soni as an Orthopedic Trauma & Ilizarov Surgeon. Patients seeking care for an injury or a complex orthopaedic concern can call the clinic to confirm consultation availability and the next steps.</p><div className="soni-note"><ShieldCheck size={19}/><span>Website information is based on publicly available business details. Please call the clinic to confirm services, consultation hours and appointment availability.</span></div></div></div></section>
      <section className="soni-expertise" id="expertise"><div className="soni-wrap"><div className="soni-section-heading"><div><div className="soni-label">AREAS OF SPECIALISATION</div><h2>Orthopaedic expertise</h2></div><p>These topics reflect the listed surgical specialisation. The right treatment depends on an individual clinical assessment.</p></div><div className="soni-expertise-grid">{expertise.map(([title,desc],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{desc}</p></article>)}</div></div></section>
      <section className="soni-doctor" id="doctor"><div className="soni-wrap soni-doctor-grid"><div className="soni-doctor-art"><div className="soni-doctor-symbol"><Stethoscope size={58}/></div><span>ORTHOPAEDIC SURGERY</span></div><div><div className="soni-label">YOUR DOCTOR</div><h2>Dr. Armish Soni</h2><div className="soni-doctor-role">Orthopedic Trauma & Ilizarov Surgeon</div><p>The public listing associates Dr. Armish Soni with Soni Orthocare in Junagadh. For verified qualifications, registration details, consultation schedule and procedure-specific information, please contact the clinic directly.</p><a className="soni-text-link" href={`tel:${phone}`}>Call the clinic <ArrowRight size={17}/></a></div></div></section>
      <section className="soni-location" id="location"><div className="soni-wrap soni-location-grid"><div><div className="soni-label">FIND SONI ORTHOCARE</div><h2>Plan your visit.</h2><p>Clinic location as listed publicly:</p><div className="soni-address"><MapPin size={20}/><span>{address}</span></div><div className="soni-location-actions"><a className="soni-btn" href={map} target="_blank" rel="noreferrer">Open in Google Maps <MoveUpRight size={17}/></a><a className="soni-outline" href={`tel:${phone}`}>Call {phone}</a></div></div><div className="soni-map-card"><div className="soni-map-pin"><MapPin size={30}/></div><b>SONI ORTHOCARE</b><span>3rd Floor, Chandan Infinity<br/>Ratnadeep Hospital, Junagadh</span><a href={map} target="_blank" rel="noreferrer">View map <ArrowRight size={15}/></a></div></div></section>
      <section className="soni-faq"><div className="soni-wrap"><div className="soni-label">BEFORE YOU VISIT</div><h2>Helpful information</h2><div className="soni-faq-grid"><div><b>How do I enquire about an appointment?</b><p>Call +91 82003 25504 to confirm consultation availability and appointment arrangements.</p></div><div><b>Where is the clinic located?</b><p>3rd Floor, Chandan Infinity, inside Ratnadeep Hospital, Vanthali Road, near Vadla Fatak, Junagadh.</p></div><div><b>What reports should I bring?</b><p>If you have previous X-rays, scans, prescriptions or surgery records, keep them ready and ask the clinic whether to bring them.</p></div></div></div></section>
    </main>
    <footer className="soni-footer"><div className="soni-wrap soni-footer-main"><div><a className="soni-brand soni-brand-footer" href="#home"><span className="soni-logo"><Bone size={24}/></span><span>SONI ORTHOCARE<small>ORTHOPAEDIC & TRAUMA CARE</small></span></a><p>Orthopaedic Trauma & Ilizarov surgical practice in Junagadh, Gujarat.</p></div><div><b>CONTACT</b><a href={`tel:${phone}`}>{phone}</a><a href={map} target="_blank" rel="noreferrer">Get directions</a></div><div><b>LOCATION</b><span>3rd Floor, Chandan Infinity</span><span>Ratnadeep Hospital, Junagadh</span></div></div><div className="soni-wrap soni-footer-bottom">© {new Date().getFullYear()} Soni Orthocare. All rights reserved. <span>Information subject to confirmation by the clinic.</span></div></footer>
  </div>;
}

export default function HospitalSites() {
  const { pathname } = useLocation();
  const slug = pathname.split('/')[1];
  if (slug === 'soni-orthocare') return <SoniOrthocare/>;
  const hospital = hospitals[slug] || hospitals['gokul-hospital'];
  const Icon = hospital.icon;
  return <div className="hospital-site" style={{'--hs-accent': hospital.accent, '--hs-soft': hospital.soft, '--hs-dark': hospital.dark}}>
    <div className="hs-topline"><div className="hs-shell"><span>HEALTHCARE • TRUST • COMPASSION</span><span>Hospital information</span></div></div>
    <header className="hs-header"><div className="hs-shell hs-nav">
      <Link to={`/${slug}`} className="hs-brand"><span className="hs-brand-icon"><Icon size={22}/></span><span>{hospital.short}<small>HOSPITAL WEBSITE</small></span></Link>
      <nav className="hs-links"><a href="#about">About</a><a href="#care">Care information</a><a href="#contact">Contact</a></nav>
      <a className="hs-nav-cta" href="#contact"><CalendarDays size={17}/> Enquire now</a>
    </div></header>
    <main><section className="hs-hero"><div className="hs-shell hs-hero-grid"><div className="hs-hero-copy"><span className="hs-eyebrow"><span/> {hospital.eyebrow}</span><h1>{hospital.headline.split('\n').map((line, i) => <React.Fragment key={line}>{i > 0 && <br/>}{line}</React.Fragment>)}</h1><p>{hospital.intro}</p><div className="hs-actions"><a className="hs-button" href="#contact">Contact the hospital <ArrowRight size={18}/></a><a className="hs-text-link" href="#about">Discover more <ArrowRight size={16}/></a></div><div className="hs-trust"><span><ShieldCheck size={17}/> Patient-focused information</span><span><HeartPulse size={17}/> Care with compassion</span></div></div><div className="hs-hero-visual"><img src={hospital.image} alt="Hospital and healthcare environment"/><div className="hs-image-note"><span className="hs-note-icon"><Icon size={22}/></span><span><strong>{hospital.short}</strong><small>{hospital.tagline}</small></span></div></div></div></section>
    <section className="hs-strip"><div className="hs-shell hs-strip-grid"><div><span className="hs-strip-icon"><Stethoscope size={20}/></span><span><strong>Hospital information</strong><small>Know more about the facility</small></span></div><div><span className="hs-strip-icon"><HeartPulse size={20}/></span><span><strong>Patient-first approach</strong><small>Clear and helpful information</small></span></div><div><span className="hs-strip-icon"><Phone size={20}/></span><span><strong>Get in touch</strong><small>Connect with the hospital team</small></span></div></div></section>
    <section className="hs-section" id="about"><div className="hs-shell hs-about-grid"><div><span className="hs-kicker">WELCOME TO {hospital.short.toUpperCase()}</span><h2>Healthcare information, made simple.</h2></div><div><p className="hs-body">This website is being prepared as the online presence for {hospital.name}. Hospital-specific details—including doctor profiles, verified services, timings, address and appointment contacts—will be added after confirmation by the hospital.</p><p className="hs-body hs-muted">We believe patients and families should be able to find clear, accurate information before they visit.</p></div></div></section>
    <section className="hs-section hs-care" id="care"><div className="hs-shell"><div className="hs-section-head"><div><span className="hs-kicker">PATIENT INFORMATION</span><h2>Here to help you find your way.</h2></div><p>Useful information will be organised here so patients and families can take the next step with confidence.</p></div><div className="hs-cards">{['Hospital overview','Patient information','Appointment enquiries'].map((item,i)=><article className="hs-card" key={item}><span className="hs-card-num">0{i+1}</span><h3>{item}</h3><p>Verified details for this section will be published once supplied by the hospital.</p><a href="#contact">Learn more <ArrowRight size={15}/></a></article>)}</div></div></section>
    <section className="hs-contact" id="contact"><div className="hs-shell hs-contact-inner"><div><span className="hs-kicker">WE ARE HERE TO HELP</span><h2>Need hospital information?</h2><p>Contact details and appointment options will appear here once the hospital confirms its official phone number, address and preferred enquiry channel.</p></div><a className="hs-button hs-button-light" href="#about">Details coming soon <ArrowRight size={18}/></a></div></section></main>
    <footer className="hs-footer"><div className="hs-shell hs-footer-inner"><div><strong>{hospital.name}</strong><small>Website preview • Information pending hospital verification</small></div><div className="hs-footer-links">{links.map(([path,label])=><Link key={path} to={`/${path}`}>{label}</Link>)}</div></div><div className="hs-shell hs-copyright">© {new Date().getFullYear()} {hospital.name}. All rights reserved.</div></footer>
  </div>;
}
