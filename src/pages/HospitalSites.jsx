import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Phone, MapPin, Clock3, HeartPulse, ShieldCheck, Stethoscope, Baby, Bone, Activity, CalendarDays, Navigation, CheckCircle2, MoveUpRight, Award, Accessibility, ChevronDown, MessageCircle, Send, UserRound, ClipboardList } from 'lucide-react';
import './HospitalSites.css';

const hospitals = {
  'soni-orthocare': {
    name: 'SONI ORTHOCARE HOSPITAL', short: 'Soni Orthocare', eyebrow: 'ORTHOPAEDIC TRAUMA & RECONSTRUCTION',
    headline: 'Expertise for the\nroad back to movement.',
    intro: 'Orthopaedic trauma and Ilizarov surgical care in Junagadh, led by Dr. Armish Soni. Clear information, direct contact and a convenient way to find the clinic.',
    accent: '#176b66', soft: '#e9f5f2', dark: '#103d3b',
    image: '/images_4e65ad29-702e-4c.jpg',
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


const surgeryStages = [
  { title: 'ASSESSMENT', kicker: '01 / UNDERSTAND THE INJURY' },
  { title: 'RECONSTRUCTION', kicker: '02 / PLAN WITH PRECISION' },
  { title: 'RECOVERY', kicker: '03 / MONITOR THE HEALING' }
];

function BoneSurgeryIntro() {
  return <section className="soni-bone-section soni-bone-intro" aria-label="3D orthopaedic concept">
    <div className="soni-wrap soni-bone-intro-grid">
      <div className="soni-bone-intro-copy">
        <div className="soni-label">ADVANCED ORTHOPAEDIC CONCEPT</div>
        <h2>Precision in every step of the journey.</h2>
        <p>An immersive 3D-inspired introduction to orthopaedic reconstruction and Ilizarov external fixation.</p>
        <span className="soni-bone-intro-tag"><i/> 3D VISUAL EXPERIENCE</span>
      </div>
      <div className="soni-bone-intro-object" aria-hidden="true">
        <div className="soni-bone-orbit orbit-a"/><div className="soni-bone-orbit orbit-b"/>
        <div className="soni-bone-model-card">
          <div className="soni-bone-model-top"><span>ORTHOPAEDIC / 3D STUDY</span><b>01—04</b></div>
          <div className="soni-bone-model-art">
            <div className="soni-bone-ring ring-one"/><div className="soni-bone-ring ring-two"/>
            <div className="soni-bone-rod rod-one"/><div className="soni-bone-rod rod-two"/>
            <div className="soni-bone-shaft"><i/><i/></div>
            <span className="soni-bone-pin pin-one"/><span className="soni-bone-pin pin-two"/>
            <span className="soni-bone-pin pin-three"/><span className="soni-bone-pin pin-four"/>
            <span className="soni-bone-node node-one"/><span className="soni-bone-node node-two"/>
            <span className="soni-bone-callout callout-a">EXTERNAL FRAME</span>
            <span className="soni-bone-callout callout-b">BONE ALIGNMENT</span>
          </div>
          <div className="soni-bone-model-bottom"><span><i/> CONCEPT VISUAL</span><small>3D depth study</small></div>
        </div>
      </div>
    </div>
  </section>;
}

function BoneSurgeryVisual() {
  const sectionRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  const [stage, setStage] = React.useState(0);
  const [loaded, setLoaded] = React.useState(0);
  React.useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas && canvas.getContext('2d', { alpha: false });
    if (!section || !canvas || !ctx) return;
    let cancelled = false;
    let raf = 0;
    let progress = 0;
    let targetIndex = 0;
    let lastStage = -1;
    const firstFrame = 1;
    const frameCount = 360;
    const images = new Array(frameCount);
    const ready = new Array(frameCount).fill(false);
    let completed = 0;
    let drawWidth = 0;
    let drawHeight = 0;

    const resizeCanvas = () => {
      const stickyFrame = canvas.parentElement;
      const header = document.querySelector('.soni-header');
      if (stickyFrame && window.matchMedia('(max-width: 650px)').matches) {
        const headerHeight = header ? header.getBoundingClientRect().height : 0;
        const availableHeight = Math.max(240, window.innerHeight - headerHeight);
        stickyFrame.style.setProperty('--soni-sticky-header-height', headerHeight + 'px');
        stickyFrame.style.top = headerHeight + 'px';
        stickyFrame.style.height = availableHeight + 'px';
        stickyFrame.style.width = '100vw';
        stickyFrame.style.marginLeft = 'auto';
        stickyFrame.style.marginRight = 'auto';
      }
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.max(1, Math.round(rect.width * dpr));
      const h = Math.max(1, Math.round(rect.height * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      drawWidth = w;
      drawHeight = h;
      draw();
    };

    const draw = () => {
      if (!drawWidth || !drawHeight) return;
      let index = targetIndex;
      if (!ready[index]) {
        let found = -1;
        for (let distance = 1; distance < frameCount; distance++) {
          if (index - distance >= 0 && ready[index - distance]) { found = index - distance; break; }
          if (index + distance < frameCount && ready[index + distance]) { found = index + distance; break; }
        }
        if (found < 0) return;
        index = found;
      }
      const img = images[index];
      if (!img || !img.naturalWidth) return;
      // Always fit the complete source frame inside the viewport; never crop any edge.
      const scale = Math.min(drawWidth / img.naturalWidth, drawHeight / img.naturalHeight);
      const w = img.naturalWidth * scale;
      const h = img.naturalHeight * scale;
      // Fill the portrait canvas with the source frame itself: zoom/crop the
      // sides to 9:16, without adding a blurred or solid background layer.
      const coverScale = Math.max(drawWidth / img.naturalWidth, drawHeight / img.naturalHeight);
      const coverW = img.naturalWidth * coverScale;
      const coverH = img.naturalHeight * coverScale;
      ctx.clearRect(0, 0, drawWidth, drawHeight);
      ctx.drawImage(img, (drawWidth - coverW) / 2, (drawHeight - coverH) / 2, coverW, coverH);
    };

    const updateFromScroll = () => {
      if (cancelled) return;
      const rect = section.getBoundingClientRect();
      const travel = Math.max(1, section.offsetHeight - window.innerHeight);
      progress = Math.min(1, Math.max(0, -rect.top / travel));
      targetIndex = Math.min(frameCount - 1, Math.max(0, Math.round(progress * (frameCount - 1))));
      section.style.setProperty('--surgery-progress', String(progress));
      const nextStage = Math.min(surgeryStages.length - 1, Math.floor(progress * surgeryStages.length));
      if (nextStage !== lastStage) {
        lastStage = nextStage;
        setStage(nextStage);
      }
      draw();
    };
    const scheduleUpdate = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => { raf = 0; updateFromScroll(); });
    };

    resizeCanvas();
    updateFromScroll();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', resizeCanvas, { passive: true });

    // Load all 360 WebP frames in a small queue for mobile-browser stability.
    let nextToLoad = 0;
    const worker = () => {
      if (cancelled || nextToLoad >= frameCount) return;
      const index = nextToLoad++;
      const img = new Image();
      images[index] = img;
      img.decoding = 'async';
      img.onload = () => {
        if (cancelled) return;
        ready[index] = true;
        completed += 1;
        setLoaded(completed);
        draw();
        worker();
      };
      img.onerror = () => {
        if (cancelled) return;
        completed += 1;
        setLoaded(completed);
        worker();
      };
      img.src = '/frames/frame_' + String(firstFrame + index).padStart(4, '0') + '.webp';
    };
    for (let i = 0; i < 6; i++) worker();

    return () => {
      cancelled = true;
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', resizeCanvas);
      images.forEach((img) => { if (img) { img.onload = null; img.onerror = null; } });
    };
  }, []);

  return <section className="soni-surgery-story" id="3d-orthopaedic" ref={sectionRef} aria-label="Scroll-driven educational orthopaedic animation">
    <div className="soni-surgery-sticky">
      <canvas ref={canvasRef} className="soni-surgery-frames-canvas" aria-label="Scroll-controlled full-frame Ilizarov animation" />
      <div className="soni-surgery-bg-shade"/>
      <div className="soni-surgery-inner soni-surgery-layout">
        <div className="soni-surgery-caption" aria-live="polite">
          {surgeryStages.map((item, index) => stage === index && <div key={item.kicker} className="soni-surgery-caption-active">
            <span>{item.kicker}</span>
            <b>{item.title}</b>
          </div>)}
          <div className="soni-surgery-progress"><span style={{ width: ((stage + 1) / surgeryStages.length * 100) + '%' }}/></div>
        </div>
      </div>
    </div>
  </section>;
}
function OperationTheaterPage() {
  const phone = '+918200325504';
  return <div className="soni-site soni-operation-page">
    <div className="soni-top"><div className="soni-wrap"><span>SONI ORTHOCARE <i>•</i> JUNAGADH, GUJARAT</span><a href={`tel:${phone}`}><Phone size={14}/> +91 82003 25504</a></div></div>
    <header className="soni-header"><div className="soni-wrap soni-nav">
      <Link className="soni-brand" to="/soni-orthocare"><span className="soni-logo"><Bone size={25}/></span><span>SONI ORTHOCARE<small>ORTHOPAEDIC & TRAUMA CARE</small></span></Link>
      <nav className="soni-section-nav"><Link to="/soni-orthocare">Home</Link><Link to="/soni-orthocare#3d-orthopaedic">Surgery</Link><a href="#operation-theater">Operation Theater</a><Link to="/soni-orthocare#doctor">Doctor</Link><Link to="/soni-orthocare#location">Contact</Link></nav>
      <a className="soni-nav-cta" href={`tel:${phone}`}><Phone size={16}/> Call clinic</a>
    </div></header>
    <main>
      <section className="soni-operation-photo">
        <div className="soni-wrap">
          <div className="soni-label">SONI ORTHOCARE • FACILITY</div>
          <h1>Operation Theater</h1>
          <p>Operation theater at Soni Orthocare.</p>
          <img src="/IMG_41032e5d-c594-441e-b385-1c2ffa00d9c4.webp" alt="Operation theater at Soni Orthocare"/>
        </div>
      </section>
    </main>
    <footer className="soni-footer"><div className="soni-wrap soni-footer-main"><div><Link className="soni-brand soni-brand-footer" to="/soni-orthocare"><span className="soni-logo"><Bone size={24}/></span><span>SONI ORTHOCARE<small>ORTHOPAEDIC & TRAUMA CARE</small></span></Link><p>Orthopaedic Trauma & Ilizarov surgical practice in Junagadh, Gujarat.</p></div><div><b>CONTACT</b><a href={`tel:${phone}`}>{phone}</a></div><div><b>QUICK LINKS</b><Link to="/soni-orthocare">Home</Link><Link to="/soni-orthocare#doctor">Doctor</Link></div></div><div className="soni-wrap soni-footer-bottom">© {new Date().getFullYear()} Soni Orthocare. All rights reserved.</div></footer>
  </div>;
}

function SoniOrthocare() {
  React.useEffect(() => {
    const targets = document.querySelectorAll('.soni-site [data-reveal]');
    if (!('IntersectionObserver' in window)) {
      targets.forEach((node) => node.classList.add('soni-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('soni-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -45px 0px' });
    targets.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  const phone = '+918200325504';
  const address = '3rd Floor, Chandan Infinity, inside Ratnadeep Hospital, Vanthali Road, near Vadla Fatak, Junagadh, Gujarat 362015';
  const map = 'https://www.google.com/maps/search/?api=1&query=SONI+ORTHOCARE+Dr+Armish+Soni+Junagadh';
  const whatsapp = 'https://wa.me/918200325504';
  const handleWhatsAppEnquiry = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const message = [
      'Hello Soni Orthocare, I would like to enquire about an appointment.',
      '',
      `Patient name: ${data.get('patientName')}`,
      `Mobile number: ${data.get('patientPhone')}`,
      `Concern / reason for visit: ${data.get('patientConcern')}`,
      `Preferred visit date: ${data.get('visitDate') || 'Not specified'}`,
      `Additional message: ${data.get('patientMessage') || 'None'}`,
      '',
      'Please contact me regarding availability. Thank you.'
    ].join('\\n');
    window.open(`${whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    form.reset();
  };
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
      <nav className="soni-section-nav"><a href="/soni-orthocare">Home</a><a href="#3d-orthopaedic">Surgery</a><a href="/soni-orthocare#operation-theater">Operation Theater</a><a href="#doctor">Doctor</a><a href="#location">Contact</a><a href="#appointment">Appointment</a></nav>
      <a className="soni-nav-cta" href={`tel:${phone}`}><Phone size={16}/> Call clinic</a>
    </div></header>
    <main id="home">
      <section className="soni-hero"><div className="soni-ambient soni-ambient-one"/><div className="soni-ambient soni-ambient-two"/><div className="soni-wrap soni-hero-grid">
        <div className="soni-hero-copy"><div className="soni-eyebrow"><span/> ORTHOPAEDIC TRAUMA & ILIZAROV SURGERY</div>
          <h1>Expertise for the <em>road back to movement.</em></h1>
          <p>Soni Orthocare is an orthopaedic surgical practice in Junagadh led by Dr. Armish Soni, listed as an Orthopedic Trauma & Ilizarov Surgeon.</p>
          <div className="soni-hero-actions"><a className="soni-btn" href="#appointment"><MessageCircle size={18}/> WhatsApp appointment enquiry <ArrowRight size={18}/></a><a className="soni-outline" href={map} target="_blank" rel="noreferrer">Get directions <Navigation size={17}/></a></div>
          <div className="soni-proof"><div><strong>4.9/5</strong><small>Public listing rating</small></div><span className="soni-proof-line"/><div><strong>114</strong><small>Public listing reviews</small></div><span className="soni-proof-line"/><div><strong>Junagadh</strong><small>Gujarat, India</small></div></div>
        </div>
        <div className="soni-hero-photo"><img src="/images_4e65ad29-702e-4c.jpg" alt="Orthopaedic medical consultation"/><div className="soni-photo-caption"><span><Bone size={21}/></span><div><b>Dr. Armish Soni</b><small>Orthopedic Trauma & Ilizarov Surgeon</small></div></div><div className="soni-photo-mark">ORTHOPAEDIC<br/>CARE</div><div className="soni-image-orbit"><span/><span/><span/></div></div>
      </div></section>
      <BoneSurgeryVisual/>
      <section className="soni-info-bar" data-reveal><div className="soni-wrap soni-info-grid"><div><span><MapPin size={20}/></span><div><b>Convenient clinic location</b><small>Chandan Infinity, Ratnadeep Hospital</small></div></div><div><span><Stethoscope size={20}/></span><div><b>Focused specialisation</b><small>Orthopaedic trauma & Ilizarov surgery</small></div></div><div><span><Phone size={20}/></span><div><b>Speak to the clinic</b><small>Call +91 82003 25504</small></div></div></div></section>
      <section className="soni-section" id="about" data-reveal><div className="soni-wrap soni-about"><div><div className="soni-label">WELCOME TO SONI ORTHOCARE</div><h2>Specialist orthopaedic care, with a focus on complex problems.</h2></div><div className="soni-about-copy"><p>Soni Orthocare is located on the 3rd floor of Chandan Infinity, within Ratnadeep Hospital, near Vadla Fatak on Vanthali Road in Junagadh.</p><p>The public business listing identifies Dr. Armish Soni as an Orthopedic Trauma & Ilizarov Surgeon. Patients seeking care for an injury or a complex orthopaedic concern can call the clinic to confirm consultation availability and the next steps.</p><div className="soni-note"><ShieldCheck size={19}/><span>Website information is based on publicly available business details. Please call the clinic to confirm services, consultation hours and appointment availability.</span></div></div></div></section>
      <section className="soni-expertise" id="expertise" data-reveal><div className="soni-wrap"><div className="soni-section-heading"><div><div className="soni-label">AREAS OF SPECIALISATION</div><h2>Orthopaedic expertise</h2></div><p>These topics reflect the listed surgical specialisation. The right treatment depends on an individual clinical assessment.</p></div><div className="soni-expertise-grid">{expertise.map(([title,desc],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{desc}</p></article>)}</div></div></section>
      <section className="soni-doctor" id="doctor" data-reveal><div className="soni-wrap soni-doctor-grid"><div><div className="soni-label">YOUR DOCTOR</div><h2>Dr. Armish Soni</h2><div className="soni-doctor-role">Orthopedic Trauma & Ilizarov Surgeon</div><p>The public listing associates Dr. Armish Soni with Soni Orthocare in Junagadh. For verified qualifications, registration details, consultation schedule and procedure-specific information, please contact the clinic directly.</p><a className="soni-text-link" href={`tel:${phone}`}>Call the clinic <ArrowRight size={17}/></a></div></div></section>
      <section className="soni-appointment" id="appointment" data-reveal><div className="soni-wrap soni-appointment-grid"><div className="soni-appointment-copy"><div className="soni-label">QUICK & EASY ENQUIRY</div><h2>Let’s help you take the next step.</h2><p>Share a few details and continue directly in WhatsApp. The clinic team can respond about appointment availability and next steps.</p><div className="soni-form-benefits"><span><CheckCircle2 size={17}/> Simple appointment enquiry</span><span><CheckCircle2 size={17}/> Your message opens in WhatsApp</span><span><CheckCircle2 size={17}/> No account or app sign-up on this website</span></div><div className="soni-privacy-note"><ShieldCheck size={18}/><span>Please share only the information needed for an appointment enquiry. Do not send emergency details or sensitive medical records through this form.</span></div></div><form className="soni-appointment-form" onSubmit={handleWhatsAppEnquiry}><div className="soni-form-heading"><span><MessageCircle size={21}/></span><div><b>Appointment enquiry</b><small>We’ll prepare a WhatsApp message for you</small></div></div><label htmlFor="patientName">Patient name <i>*</i></label><input id="patientName" name="patientName" type="text" placeholder="Enter your full name" autoComplete="name" required maxLength="80"/><label htmlFor="patientPhone">Mobile number <i>*</i></label><input id="patientPhone" name="patientPhone" type="tel" placeholder="Your contact number" autoComplete="tel" inputMode="tel" pattern="[0-9+() -]{8,18}" required/><label htmlFor="patientConcern">Reason for visit <i>*</i></label><select id="patientConcern" name="patientConcern" defaultValue="" required><option value="" disabled>Select a concern</option><option>Orthopaedic consultation</option><option>Injury / fracture enquiry</option><option>Follow-up visit</option><option>Ilizarov / limb reconstruction enquiry</option><option>Other</option></select><label htmlFor="visitDate">Preferred visit date <small>(optional)</small></label><input id="visitDate" name="visitDate" type="date" min={new Date().toISOString().split('T')[0]}/><label htmlFor="patientMessage">Additional message <small>(optional)</small></label><textarea id="patientMessage" name="patientMessage" rows="3" maxLength="500" placeholder="Write a short message (optional)"/><button className="soni-whatsapp-submit" type="submit"><MessageCircle size={19}/> Continue to WhatsApp <ArrowRight size={18}/></button><p className="soni-form-disclaimer">By continuing, WhatsApp will open with your details filled in. You can review and send the message yourself. This is not a confirmed appointment.</p></form></div></section>
      <section className="soni-faq" data-reveal><div className="soni-wrap"><div className="soni-label">BEFORE YOU VISIT</div><h2>Helpful information</h2><div className="soni-faq-grid"><div><b>How do I enquire about an appointment?</b><p>Call +91 82003 25504 to confirm consultation availability and appointment arrangements.</p></div><div><b>Where is the clinic located?</b><p>3rd Floor, Chandan Infinity, inside Ratnadeep Hospital, Vanthali Road, near Vadla Fatak, Junagadh.</p></div><div><b>What reports should I bring?</b><p>If you have previous X-rays, scans, prescriptions or surgery records, keep them ready and ask the clinic whether to bring them.</p></div></div></div></section>
      <section className="soni-operation-photo soni-operation-home" id="operation-theater" data-reveal>
        <div className="soni-wrap">
          <div className="soni-operation-photo-heading">
            <div className="soni-label">INSIDE SONI ORTHOCARE</div>
            <h2>A closer look at our operation theater.</h2>
            <p>A view of the operation theater facility at Soni Orthocare, Junagadh.</p>
          </div>
          <div className="soni-operation-image-frame">
            <img src="/IMG_41032e5d-c594-441e-b385-1c2ffa00d9c4.webp" alt="Operation theater facility at Soni Orthocare"/>
            <span className="soni-operation-image-caption"><span>SONI ORTHOCARE</span><b>Operation Theater</b></span>
          </div>
        </div>
      </section>
      <section className="soni-location" id="location" data-reveal><div className="soni-wrap soni-location-grid"><div><div className="soni-label">FIND SONI ORTHOCARE</div><h2>Plan your visit.</h2><p>Clinic location as listed publicly:</p><div className="soni-address"><MapPin size={20}/><span>{address}</span></div><div className="soni-location-actions"><a className="soni-btn" href={map} target="_blank" rel="noreferrer">Open in Google Maps <MoveUpRight size={17}/></a><a className="soni-outline" href={`tel:${phone}`}>Call {phone}</a></div></div><div className="soni-map-card"><div className="soni-map-pin"><MapPin size={30}/></div><b>SONI ORTHOCARE</b><span>3rd Floor, Chandan Infinity<br/>Ratnadeep Hospital, Junagadh</span><a href={map} target="_blank" rel="noreferrer">View map <ArrowRight size={15}/></a></div></div></section>
    </main>
    <a className="soni-floating-whatsapp" href={`${whatsapp}?text=${encodeURIComponent("Hello Soni Orthocare, I would like to enquire about an appointment.")}`} target="_blank" rel="noreferrer" aria-label="Chat with Soni Orthocare on WhatsApp"><MessageCircle size={22}/><span>WhatsApp us</span></a>\n    <footer className="soni-footer"><div className="soni-wrap soni-footer-main"><div><a className="soni-brand soni-brand-footer" href="#home"><span className="soni-logo"><Bone size={24}/></span><span>SONI ORTHOCARE<small>ORTHOPAEDIC & TRAUMA CARE</small></span></a><p>Orthopaedic Trauma & Ilizarov surgical practice in Junagadh, Gujarat.</p></div><div><b>CONTACT</b><a href={`tel:${phone}`}>{phone}</a><a href={map} target="_blank" rel="noreferrer">Get directions</a></div><div><b>LOCATION</b><span>3rd Floor, Chandan Infinity</span><span>Ratnadeep Hospital, Junagadh</span></div></div><div className="soni-wrap soni-footer-bottom">© {new Date().getFullYear()} Soni Orthocare. All rights reserved. <span>Information subject to confirmation by the clinic.</span></div></footer>
  </div>;
}


const gokulVideoStages = [
  { title: 'CARE ENVIRONMENT', kicker: '01 / GOKUL HOSPITAL & ICU' },
  { title: 'PATIENT SUPPORT', kicker: '02 / CARE WITH ATTENTION' },
  { title: 'HOSPITAL & ICU', kicker: '03 / HERE WHEN IT MATTERS' }
];

function GokulVideoVisual() {
  const sectionRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  const [stage, setStage] = React.useState(0);
  const [loaded, setLoaded] = React.useState(0);
  React.useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas && canvas.getContext('2d', { alpha: false });
    if (!section || !canvas || !ctx) return;
    let cancelled = false, raf = 0, targetIndex = 0, lastStage = -1;
    const frameCount = 192;
    const images = new Array(frameCount);
    const ready = new Array(frameCount).fill(false);
    let completed = 0, drawWidth = 0, drawHeight = 0;
    const draw = () => {
      if (!drawWidth || !drawHeight) return;
      let index = targetIndex;
      if (!ready[index]) {
        let found = -1;
        for (let distance = 1; distance < frameCount; distance++) {
          if (index - distance >= 0 && ready[index - distance]) { found = index - distance; break; }
          if (index + distance < frameCount && ready[index + distance]) { found = index + distance; break; }
        }
        if (found < 0) return;
        index = found;
      }
      const img = images[index];
      if (!img || !img.naturalWidth) return;
      const scale = Math.max(drawWidth / img.naturalWidth, drawHeight / img.naturalHeight);
      const w = img.naturalWidth * scale, h = img.naturalHeight * scale;
      ctx.clearRect(0, 0, drawWidth, drawHeight);
      ctx.drawImage(img, (drawWidth - w) / 2, (drawHeight - h) / 2, w, h);
    };
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.max(1, Math.round(rect.width * dpr));
      const h = Math.max(1, Math.round(rect.height * dpr));
      if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; }
      drawWidth = w; drawHeight = h; draw();
    };
    const updateFromScroll = () => {
      if (cancelled) return;
      const rect = section.getBoundingClientRect();
      const travel = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / travel));
      targetIndex = Math.min(frameCount - 1, Math.max(0, Math.round(progress * (frameCount - 1))));
      const nextStage = Math.min(gokulVideoStages.length - 1, Math.floor(progress * gokulVideoStages.length));
      if (nextStage !== lastStage) { lastStage = nextStage; setStage(nextStage); }
      draw();
    };
    const scheduleUpdate = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => { raf = 0; updateFromScroll(); });
    };
    resizeCanvas(); updateFromScroll();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', resizeCanvas, { passive: true });
    let nextToLoad = 0;
    const worker = () => {
      if (cancelled || nextToLoad >= frameCount) return;
      const index = nextToLoad++;
      const img = new Image(); images[index] = img; img.decoding = 'async';
      img.onload = () => {
        if (cancelled) return;
        ready[index] = true; completed += 1; setLoaded(completed); draw(); worker();
      };
      img.onerror = () => {
        if (cancelled) return;
        completed += 1; setLoaded(completed); worker();
      };
      img.src = '/gokul-frames/frame_' + String(index + 1).padStart(4, '0') + '.webp';
    };
    for (let i = 0; i < 6; i++) worker();
    return () => {
      cancelled = true;
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', resizeCanvas);
      images.forEach((img) => { if (img) { img.onload = null; img.onerror = null; } });
    };
  }, []);
  return <section className="gk-video-story" id="gk-video" ref={sectionRef} aria-label="Scroll-controlled Gokul Hospital video">
    <div className="gk-video-sticky">
      <canvas ref={canvasRef} className="gk-video-canvas" aria-label="192-frame Gokul Hospital animation" />
      <div className="gk-video-shade"/>
      <div className="gk-video-overlay">
        <div className="gk-video-caption" aria-live="polite">
          <span>{gokulVideoStages[stage].kicker}</span><b>{gokulVideoStages[stage].title}</b>
          <div className="gk-video-progress"><i style={{ width: ((stage + 1) / gokulVideoStages.length * 100) + '%' }}/></div>
        </div>
        <small className="gk-video-loading">{loaded === 192 ? 'VIDEO READY' : 'LOADING VIDEO ' + loaded + ' / 192'}</small>
      </div>
    </div>
  </section>;
}

function GokulHospital() {
  const { pathname } = useLocation();
  const page = pathname.split('/')[2] || 'home';
  React.useEffect(() => { window.scrollTo(0, 0); }, [page]);
  const phone = '+918866842200';
  const address = '4th Floor, Akshar Icoon, Ganga Park, Zanzarda Bypass Road, Mangnath Road, Junagadh, Gujarat 362001';
  const map = 'https://www.google.com/maps/search/?api=1&query=Gokul+Hospital+%26+ICU+Akshar+Icoon+Zanzarda+Junagadh';
  const listing = 'https://www.justdial.com/Junagadh/Gokul-Hospital-Icu-Zanzarda-Mangnath-Road/9999PX285-X285-250926172352-F5N7_BZDET';
  const whatsapp = 'https://wa.me/918866842200';
  const handleGokulWhatsApp = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const message = [
      'Hello Gokul Hospital & ICU, I would like to make an enquiry.',
      '',
      `Name: ${data.get('gokulName')}`,
      `Mobile: ${data.get('gokulMobile')}`,
      `Enquiry: ${data.get('gokulEnquiry')}`,
      `Preferred date: ${data.get('gokulDate') || 'Not specified'}`,
      `Message: ${data.get('gokulMessage') || 'None'}`,
      '',
      'Please share the relevant information. Thank you.'
    ].join('\\n');
    window.open(`${whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    form.reset();
  };
  return <div className={"gokul-site gokul-page-" + page}>
    <div className="gk-top"><div className="gk-shell"><span>GOKUL HOSPITAL & ICU <i>•</i> JUNAGADH</span><a href={`tel:${phone}`}><Phone size={14}/> +91 88668 42200</a></div></div>
    <header className="gk-header"><div className="gk-shell gk-nav"><a className="gk-brand" href="#gk-home"><span><Activity size={25}/></span><b>GOKUL HOSPITAL<small>AND INTENSIVE CARE UNIT</small></b></a><nav aria-label="Main navigation">
      <Link to="/gokul-hospital">Home</Link><Link to="/gokul-hospital/about">About</Link><Link to="/gokul-hospital/doctors">Doctors</Link><Link to="/gokul-hospital/services">Services</Link><Link to="/gokul-hospital/facilities">Facilities</Link><Link to="/gokul-hospital/gallery">Gallery</Link><Link to="/gokul-hospital/reviews">Reviews</Link><Link to="/gokul-hospital/contact">Contact</Link>
    </nav><a className="gk-call" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={16}/> WhatsApp enquiry</a></div></header>
    <main id="gk-home">
      {page !== 'home' && <section className="gk-page-content">
        {page === 'about' && <div className="gk-shell gk-inner-page"><span className="gk-kicker">ABOUT GOKUL HOSPITAL</span><h1>Care and attention, when it matters.</h1><p>Gokul Hospital & ICU is located at Akshar Icoon, Zanzarda Bypass Road, Junagadh. This website brings together hospital contact details, doctor information and patient enquiry options.</p><div className="gk-page-highlight"><Activity/><div><b>Gokul Hospital & Intensive Care Unit</b><span>Junagadh, Gujarat</span></div></div></div>}
        {page === 'doctors' && <div className="gk-inner-page"><div className="gk-shell"><div className="gk-doctors-heading"><span className="gk-kicker">OUR DOCTORS</span><h1>Meet our doctors.</h1><p>Specialist profiles listed for Gokul Hospital & ICU.</p></div><div className="gk-doctor-cards"><article className="gk-doctor-card"><div className="gk-doctor-card-photo gk-doctor-crop-left"><img src="/Screenshot_20261125-124908.jpg" alt="Dr. Gaurang Bagda"/></div><div className="gk-doctor-card-info"><h3>Dr. Gaurang Bagda</h3><p>M.D. (Medicine)</p><span>Consulting Physician and Cardiologist</span></div></article><article className="gk-doctor-card"><div className="gk-doctor-card-photo gk-doctor-crop-right"><img src="/Screenshot_20261125-124908.jpg" alt="Dr. Dharmesh Chauhan"/></div><div className="gk-doctor-card-info"><h3>Dr. Dharmesh Chauhan</h3><p>M.D. (Anesthesia)</p><span>Consulting Intensivist</span></div></article></div></div></div>}
        {page === 'services' && <div className="gk-shell gk-inner-page"><span className="gk-kicker">HOSPITAL SERVICES</span><h1>Hospital & ICU care information.</h1><p>For current treatment options, specialist availability, admission requirements and clinical services, please contact the hospital directly.</p><div className="gk-page-card-grid"><article><Activity/><h3>Hospital & ICU</h3><p>Contact the hospital team for information about available care and admission.</p></article><article><HeartPulse/><h3>Physician consultation</h3><p>Enquire about physician and cardiology consultation availability.</p></article><article><ShieldCheck/><h3>Intensive care</h3><p>Call the hospital to confirm current ICU availability and requirements.</p></article></div></div>}
        {page === 'facilities' && <div className="gk-shell gk-inner-page"><span className="gk-kicker">FACILITY INFORMATION</span><h1>Hospital facilities.</h1><p>Publicly listed information is shown below. Please confirm specific requirements before visiting.</p><div className="gk-page-card-grid"><article><Activity/><h3>Hospital & ICU</h3><p>Listed as Gokul Hospital & ICU.</p></article><article><Accessibility/><h3>Accessibility</h3><p>Public listing notes wheelchair-accessible parking and entrance/exit.</p></article><article><Clock3/><h3>Operating hours</h3><p>Listed as 24 hours. Call to confirm current availability.</p></article></div></div>}
        {page === 'gallery' && <div className="gk-shell gk-inner-page"><span className="gk-kicker">GOKUL HOSPITAL GALLERY</span><h1>A look inside our story.</h1><p>Hospital visuals shared for this website.</p><div className="gk-gallery-grid"><img src="/gokul-frames/frame_0001.webp" alt="Gokul Hospital visual 1"/><img src="/gokul-frames/frame_0064.webp" alt="Gokul Hospital visual 2"/><img src="/gokul-frames/frame_0128.webp" alt="Gokul Hospital visual 3"/><img src="/gokul-frames/frame_0192.webp" alt="Gokul Hospital visual 4"/></div></div>}
        {page === 'reviews' && <div className="gk-shell gk-inner-page gk-reviews-page"><span className="gk-kicker">PATIENT FEEDBACK</span><h1>Google reviews.</h1><p>Read feedback shared by people who have visited Gokul Hospital & ICU on Google.</p><div className="gk-google-rating"><div className="gk-google-g">G</div><div><strong>4.8 <span>★★★★★</span></strong><small>19 Google reviews · rating shown on Google listing</small></div></div><div className="gk-review-cards"><article><div className="gk-review-stars">★★★★★</div><p>“Hospital have good ambience and excellent doctor's and staff members”</p><small>Google review highlight</small></article><article><div className="gk-review-stars">★★★★★</div><p>“Excellent service..”</p><small>Google review highlight</small></article><article><div className="gk-review-stars">★★★★★</div><p>“Very good Hospital and Staff for patients.”</p><small>Google review highlight</small></article></div><div className="gk-review-actions"><a className="gk-primary" href="https://search.google.com/local/writereview?placeid=ChIJP00sqY0BWDkRBTILiYpyIwo" target="_blank" rel="noreferrer">Write a Google review <MoveUpRight size={16}/></a><a className="gk-secondary" href="https://www.google.com/maps/search/?api=1&query=Gokul+Hospital+%26+ICU+Junagadh&query_place_id=ChIJP00sqY0BWDkRBTILiYpyIwo" target="_blank" rel="noreferrer">See all Google reviews <MoveUpRight size={16}/></a></div><p className="gk-review-note">Review excerpts are short highlights from the public Google listing. Ratings and reviews may change over time.</p></div>}
        {page === 'contact' && <div className="gk-shell gk-inner-page"><span className="gk-kicker">CONTACT GOKUL HOSPITAL</span><h1>We're here to help.</h1><p>Call or message the hospital for enquiries about consultations, admission and current services.</p><div className="gk-contact-page-actions"><a className="gk-primary" href={`tel:${phone}`}><Phone/> Call +91 88668 42200</a><a className="gk-secondary" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle/> WhatsApp enquiry</a><a className="gk-secondary" href={map} target="_blank" rel="noreferrer"><MapPin/> Get directions</a></div><div className="gk-page-highlight"><MapPin/><div><b>Hospital address</b><span>{address}</span></div></div></div>}
        {!['about','doctors','services','facilities','gallery','reviews','contact'].includes(page) && <div className="gk-shell gk-inner-page"><h1>Page not found</h1><Link to="/gokul-hospital">Return to Home</Link></div>}
      </section>}
      <section className="gk-hero"><div className="gk-shell gk-hero-grid"><div className="gk-copy"><span className="gk-eyebrow"><i/> HOSPITAL & INTENSIVE CARE</span><h1>Care and attention, <em>when it matters.</em></h1><p>Gokul Hospital & ICU is located in the Zanzarda area of Junagadh. Find the hospital location and contact information here.</p><div className="gk-actions"><a className="gk-primary" href={whatsapp+'?text='+encodeURIComponent('Hello Gokul Hospital & ICU, I would like to make an enquiry.')} target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp enquiry</a><a className="gk-secondary" href={`tel:${phone}`}><Phone size={16}/> Call hospital</a></div><div className="gk-rating"><strong>4.8 <span>★★★★★</span></strong><small>Justdial listing · 50 ratings</small></div></div><div className="gk-visual"><img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1500&q=85" alt="Modern hospital interior"/><div className="gk-visual-label"><Activity size={22}/><span><b>Gokul Hospital & ICU</b><small>Zanzarda, Junagadh</small></span></div><div className="gk-visual-index">JUNAGADH <b>•</b> GUJARAT</div></div></div></section>
      <section className="gk-facts"><div className="gk-shell"><div><span><Clock3 size={21}/></span><b>Listed as 24 hours</b><small>Confirm availability by phone</small></div><div><span><HeartPulse size={21}/></span><b>Hospital & ICU</b><small>Facility listing category</small></div><div><span><MapPin size={21}/></span><b>Zanzarda, Junagadh</b><small>Akshar Icoon, 4th Floor</small></div></div></section>
      <GokulVideoVisual/>
      {page === 'home' && <>
        <section className="gk-page-content gk-home-section" id="gk-about">
          <div className="gk-shell gk-inner-page">
            <span className="gk-kicker">ABOUT GOKUL HOSPITAL</span>
            <h1>Care and attention, when it matters.</h1>
            <p>Gokul Hospital & ICU is located at Akshar Icoon, Zanzarda Bypass Road, Junagadh. This website brings together hospital contact details, doctor information and patient enquiry options.</p>
            <div className="gk-page-highlight"><Activity/><div><b>Gokul Hospital & Intensive Care Unit</b><span>Junagadh, Gujarat</span></div></div>
          </div>
        </section>
        <section className="gk-page-content gk-home-section" id="gk-services">
          <div className="gk-shell gk-inner-page">
            <span className="gk-kicker">HOSPITAL SERVICES</span>
            <h1>Hospital & ICU care information.</h1>
            <p>For current treatment options, specialist availability, admission requirements and clinical services, please contact the hospital directly.</p>
            <div className="gk-page-card-grid">
              <article><Activity/><h3>Hospital & ICU</h3><p>Contact the hospital team for information about available care and admission.</p></article>
              <article><HeartPulse/><h3>Physician consultation</h3><p>Enquire about physician and cardiology consultation availability.</p></article>
              <article><ShieldCheck/><h3>Intensive care</h3><p>Call the hospital to confirm current ICU availability and requirements.</p></article>
            </div>
          </div>
        </section>
        <section className="gk-page-content gk-home-section" id="gk-gallery">
          <div className="gk-shell gk-inner-page">
            <span className="gk-kicker">GOKUL HOSPITAL GALLERY</span>
            <h1>A look inside our story.</h1>
            <p>Hospital visuals shared for this website.</p>
            <div className="gk-gallery-grid">
              <img src="/gokul-frames/frame_0001.webp" alt="Gokul Hospital visual 1"/>
              <img src="/gokul-frames/frame_0064.webp" alt="Gokul Hospital visual 2"/>
              <img src="/gokul-frames/frame_0128.webp" alt="Gokul Hospital visual 3"/>
              <img src="/gokul-frames/frame_0192.webp" alt="Gokul Hospital visual 4"/>
            </div>
          </div>
        </section>
        <section className="gk-page-content gk-home-section" id="gk-reviews">
          <div className="gk-shell gk-inner-page gk-reviews-page">
            <span className="gk-kicker">PATIENT FEEDBACK</span>
            <h1>Google reviews.</h1>
            <p>Read feedback shared by people who have visited Gokul Hospital & ICU on Google.</p>
            <div className="gk-google-rating"><div className="gk-google-g">G</div><div><strong>4.8 <span>★★★★★</span></strong><small>19 Google reviews · rating shown on Google listing</small></div></div>
            <div className="gk-review-cards">
              <article><div className="gk-review-stars">★★★★★</div><p>“Hospital have good ambience and excellent doctor's and staff members”</p><small>Google review highlight</small></article>
              <article><div className="gk-review-stars">★★★★★</div><p>“Excellent service..”</p><small>Google review highlight</small></article>
              <article><div className="gk-review-stars">★★★★★</div><p>“Very good Hospital and Staff for patients.”</p><small>Google review highlight</small></article>
            </div>
            <div className="gk-review-actions">
              <a className="gk-primary" href="https://search.google.com/local/writereview?placeid=ChIJP00sqY0BWDkRBTILiYpyIwo" target="_blank" rel="noreferrer">Write a Google review <MoveUpRight size={16}/></a>
              <a className="gk-secondary" href="https://www.google.com/maps/search/?api=1&query=Gokul+Hospital+%26+ICU+Junagadh&query_place_id=ChIJP00sqY0BWDkRBTILiYpyIwo" target="_blank" rel="noreferrer">See all Google reviews <MoveUpRight size={16}/></a>
            </div>
            <p className="gk-review-note">Review excerpts are short highlights from the public Google listing. Ratings and reviews may change over time.</p>
          </div>
        </section>
      </>}
      <section className="gk-facilities" id="gk-facilities"><div className="gk-shell"><div className="gk-section-head"><div><span className="gk-kicker">FACILITY INFORMATION</span><h2>What you can find here</h2></div><p>Only publicly listed facility details are shown. Please call to confirm specific requirements before visiting.</p></div><div className="gk-cards"><article><span>01</span><Activity size={25}/><h3>Hospital & ICU</h3><p>The business is listed as Gokul Hospital & ICU. Contact the team for details about available care and admission.</p></article><article><span>02</span><Accessibility size={25}/><h3>Accessibility</h3><p>The listing notes wheelchair-accessible parking and wheelchair-accessible entrance and exit.</p></article><article><span>03</span><Clock3 size={25}/><h3>Hours & enquiries</h3><p>The listing shows 24-hour operation. Call ahead to confirm current availability and visiting arrangements.</p></article></div></div></section>
      <section className="gk-doctors" id="gk-doctors"><div className="gk-shell"><div className="gk-doctors-heading"><span className="gk-kicker">OUR DOCTORS</span><h2>Meet our doctors.</h2><p>Experienced specialists caring for patients at Gokul Hospital & ICU.</p></div><div className="gk-doctor-cards"><article className="gk-doctor-card"><div className="gk-doctor-card-photo gk-doctor-crop-left"><img src="/Screenshot_20261125-124908.jpg" alt="Dr. Gaurang Bagda"/></div><div className="gk-doctor-card-info"><h3>Dr. Gaurang Bagda</h3><p>M.D. (Medicine)</p><span>Consulting Physician and Cardiologist</span></div></article><article className="gk-doctor-card"><div className="gk-doctor-card-photo gk-doctor-crop-right"><img src="/Screenshot_20261125-124908.jpg" alt="Dr. Dharmesh Chauhan"/></div><div className="gk-doctor-card-info"><h3>Dr. Dharmesh Chauhan</h3><p>M.D. (Anesthesia)</p><span>Consulting Intensivist</span></div></article></div></div></section>
      <section className="gk-enquiry" id="gk-enquiry"><div className="gk-shell gk-enquiry-grid"><div><span className="gk-kicker">WHATSAPP ENQUIRY</span><h2>How can we help you?</h2><p>Fill in the details and continue to WhatsApp. Your message will be prepared for you to review and send.</p><div className="gk-enquiry-note"><ShieldCheck size={18}/><span>This form is for general enquiries only. For urgent medical help, contact local emergency services or visit the nearest emergency department.</span></div></div><form className="gk-enquiry-form" onSubmit={handleGokulWhatsApp}><div className="gk-enquiry-form-title"><MessageCircle size={20}/><span><b>Send an enquiry</b><small>Opens WhatsApp with your message</small></span></div><label htmlFor="gokulName">Your name <i>*</i></label><input id="gokulName" name="gokulName" required maxLength="80" placeholder="Enter your name"/><label htmlFor="gokulMobile">Mobile number <i>*</i></label><input id="gokulMobile" name="gokulMobile" type="tel" required pattern="[0-9+() -]{8,18}" placeholder="Your contact number"/><label htmlFor="gokulEnquiry">Enquiry type <i>*</i></label><select id="gokulEnquiry" name="gokulEnquiry" defaultValue="" required><option value="" disabled>Select an enquiry</option><option>Appointment enquiry</option><option>Doctor / consultation information</option><option>Hospital / ICU information</option><option>Admission enquiry</option><option>Other</option></select><label htmlFor="gokulDate">Preferred date <small>(optional)</small></label><input id="gokulDate" name="gokulDate" type="date"/><label htmlFor="gokulMessage">Message <small>(optional)</small></label><textarea id="gokulMessage" name="gokulMessage" rows="3" maxLength="500" placeholder="Write your enquiry here"/><button type="submit" className="gk-enquiry-submit"><MessageCircle size={18}/> Continue to WhatsApp <ArrowRight size={17}/></button><small className="gk-enquiry-disclaimer">Your WhatsApp app will open. Review and send the message yourself. This does not confirm an appointment.</small></form></div></section>
      <section className="gk-location" id="gk-location"><div className="gk-shell gk-location-grid"><div><span className="gk-kicker">FIND THE HOSPITAL</span><h2>Plan your visit.</h2><p>Address as shown on the public business listing:</p><div className="gk-address"><MapPin size={21}/><span>{address}</span></div><div className="gk-actions"><a className="gk-primary" href={map} target="_blank" rel="noreferrer">Open Google Maps <Navigation size={16}/></a><a className="gk-secondary" href={`tel:${phone}`}>+91 88668 42200</a></div></div><div className="gk-map-card"><MapPin size={34}/><b>GOKUL HOSPITAL & ICU</b><span>4th Floor, Akshar Icoon<br/>Ganga Park, Zanzarda, Junagadh</span><a href={map} target="_blank" rel="noreferrer">View directions <ArrowRight size={16}/></a></div></div></section>
      <section className="gk-contact"><div className="gk-shell gk-contact-inner"><div><span className="gk-kicker">CONTACT GOKUL HOSPITAL</span><h2>Need to speak with the hospital?</h2><p>Call the listed contact number for enquiries about appointments, ICU availability and current services.</p></div><a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18}/> WhatsApp enquiry</a></div></section>
    </main>
    <a className="gk-floating-whatsapp" href={whatsapp+'?text='+encodeURIComponent('Hello Gokul Hospital & ICU, I would like to make an enquiry.')} target="_blank" rel="noreferrer" aria-label="WhatsApp Gokul Hospital"><MessageCircle size={21}/><span>WhatsApp us</span></a>\n    <footer className="gk-footer"><div className="gk-shell"><div><b>GOKUL HOSPITAL AND ICU</b><span>Junagadh, Gujarat</span></div><div><a href={listing} target="_blank" rel="noreferrer">View public listing <MoveUpRight size={14}/></a><a href={map} target="_blank" rel="noreferrer">Directions <Navigation size={14}/></a></div></div><p className="gk-shell">Website information is based on publicly available listings and should be confirmed with the hospital.</p></footer>
  </div>;
}


const jananiVideoStages = [
  { title: 'A LITTLE LIFE, HELD WITH CARE', kicker: '01 / JANANI HOSPITAL' },
  { title: 'A WORLD OF ITS OWN', kicker: '02 / LIFE INSIDE THE WOMB' },
  { title: 'EVERY TINY MOVEMENT MATTERS', kicker: '03 / GROWING WITHIN' },
  { title: 'LOVE BEFORE THE FIRST HELLO', kicker: '04 / CARE THROUGH EVERY STEP' }
];

function JananiWombVisual() {
  const sectionRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  const [stage, setStage] = React.useState(0);
  const [loaded, setLoaded] = React.useState(0);
  React.useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas && canvas.getContext('2d', { alpha: false });
    if (!section || !canvas || !ctx) return;
    let cancelled = false, raf = 0, targetIndex = 0, lastStage = -1;
    const frameCount = 358;
    const images = new Array(frameCount);
    const ready = new Array(frameCount).fill(false);
    let completed = 0, drawWidth = 0, drawHeight = 0;
    const draw = () => {
      if (!drawWidth || !drawHeight) return;
      let index = targetIndex;
      if (!ready[index]) {
        let found = -1;
        for (let distance = 1; distance < frameCount; distance++) {
          if (index - distance >= 0 && ready[index - distance]) { found = index - distance; break; }
          if (index + distance < frameCount && ready[index + distance]) { found = index + distance; break; }
        }
        if (found < 0) return;
        index = found;
      }
      const img = images[index];
      if (!img || !img.naturalWidth) return;
      const scale = Math.max(drawWidth / img.naturalWidth, drawHeight / img.naturalHeight);
      const w = img.naturalWidth * scale, h = img.naturalHeight * scale;
      ctx.clearRect(0, 0, drawWidth, drawHeight);
      ctx.drawImage(img, (drawWidth - w) / 2, (drawHeight - h) / 2, w, h);
    };
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.max(1, Math.round(rect.width * dpr));
      const h = Math.max(1, Math.round(rect.height * dpr));
      if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; }
      drawWidth = w; drawHeight = h; draw();
    };
    const updateFromScroll = () => {
      if (cancelled) return;
      const rect = section.getBoundingClientRect();
      const travel = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / travel));
      targetIndex = Math.min(frameCount - 1, Math.max(0, Math.round(progress * (frameCount - 1))));
      const nextStage = Math.min(jananiVideoStages.length - 1, Math.floor(progress * jananiVideoStages.length));
      if (nextStage !== lastStage) { lastStage = nextStage; setStage(nextStage); }
      draw();
    };
    const scheduleUpdate = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => { raf = 0; updateFromScroll(); });
    };
    resizeCanvas(); updateFromScroll();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', resizeCanvas, { passive: true });
    let nextToLoad = 0;
    const worker = () => {
      if (cancelled || nextToLoad >= frameCount) return;
      const index = nextToLoad++;
      const img = new Image(); images[index] = img; img.decoding = 'async';
      img.onload = () => {
        if (cancelled) return;
        ready[index] = true; completed += 1; setLoaded(completed); draw(); worker();
      };
      img.onerror = () => {
        if (cancelled) return;
        completed += 1; setLoaded(completed); worker();
      };
      img.src = '/frames/janani-frames/frame_' + String(index + 1).padStart(4, '0') + '.webp';
    };
    for (let i = 0; i < 6; i++) worker();
    return () => {
      cancelled = true;
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', resizeCanvas);
      images.forEach((img) => { if (img) { img.onload = null; img.onerror = null; } });
    };
  }, []);
  return <section className="jn-video-story" id="jn-womb-story" ref={sectionRef} aria-label="Scroll-controlled Janani Hospital maternity animation">
    <div className="jn-video-sticky">
      <canvas ref={canvasRef} className="jn-video-canvas" aria-label="358-frame animation showing life inside the mother's womb" />
      <div className="jn-video-shade"/>
      <div className="jn-video-overlay">
        <div className="jn-video-caption" aria-live="polite">
          <span>{jananiVideoStages[stage].kicker}</span><b>{jananiVideoStages[stage].title}</b>
          <div className="jn-video-progress"><i style={{ width: ((stage + 1) / jananiVideoStages.length * 100) + '%' }}/></div>
        </div>
        <small className="jn-video-loading">{loaded === 358 ? 'ANIMATION READY' : 'LOADING ANIMATION ' + loaded + ' / 358'}</small>
      </div>
    </div>
  </section>;
}

function JananiHospital() {
  const map = 'https://www.google.com/maps/search/?api=1&query=Janani+Hospital+Junagadh+Gujarat';
  const whatsapp = 'https://wa.me/919909859046';
  const handleWhatsAppEnquiry = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const message = [
      'Hello Janani Hospital, I would like to make an enquiry.',
      '',
      `Name: ${data.get('patientName')}`,
      `Mobile number: ${data.get('patientPhone')}`,
      `Enquiry about: ${data.get('enquiryType')}`,
      `Preferred visit date: ${data.get('visitDate') || 'Not specified'}`,
      `Message: ${data.get('patientMessage') || 'Not specified'}`,
      '',
      'Please contact me with the details. Thank you.'
    ].join('\\n');
    window.open(`${whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    form.reset();
  };
  const careItems = [
    ['Hospital information', 'Contact the hospital for verified details about departments and patient services.', HeartPulse],
    ['Doctor consultations', 'Ask about doctor profiles, consultation timings and appointment availability.', Stethoscope],
    ['Patient & family support', 'Find out about visiting guidance, admission procedures and attendant support.', ShieldCheck],
    ['Facilities', 'Confirm room types, accessibility and diagnostic facilities directly with the hospital.', Activity]
  ];
  return <div className="janani-site">
    <div className="jn-top"><div className="jn-shell"><span>JANANI HOSPITAL <i>•</i> JUNAGADH, GUJARAT</span><span>Care • Compassion • Commitment</span></div></div>
    <header className="jn-header"><div className="jn-shell jn-nav">
      <a className="jn-brand" href="#jn-home"><span><HeartPulse size={24}/></span><b>JANANI HOSPITAL<small>CARE WITH COMPASSION</small></b></a>
      <nav aria-label="Janani Hospital navigation"><a href="#jn-about">About</a><a href="#jn-care">Care</a><a href="#jn-doctors">Doctors</a><a href="#jn-facilities">Facilities</a><a href="#jn-gallery">Gallery</a><a href="#jn-contact">Contact</a></nav>
      <a className="jn-cta" href="#jn-contact"><MessageCircle size={16}/> Enquire now</a>
    </div></header>
    <main id="jn-home">
      <section className="jn-hero"><div className="jn-shell jn-hero-grid">
        <div className="jn-copy"><span className="jn-eyebrow"><i/> WELCOME TO JANANI HOSPITAL</span><h1>Care that puts <em>people first.</em></h1><p>A welcoming place to find hospital information, understand available care and connect with the Janani Hospital team.</p><div className="jn-actions"><a className="jn-primary" href="#jn-contact">Contact the hospital <ArrowRight size={17}/></a><a className="jn-secondary" href="#jn-about">Discover Janani <ArrowRight size={16}/></a></div><div className="jn-trust"><span><ShieldCheck size={17}/> Patient-first information</span><span><HeartPulse size={17}/> Compassionate care</span></div></div>
        <div className="jn-hero-visual"><img src="/dr-vishal-bhai-janani-maternity-home-balotra-junagadh-paediatricians-7ux9fe2s5o-250.jpg" alt="Janani Hospital uploaded photograph"/><div className="jn-photo-card"><span><HeartPulse size={22}/></span><div><b>Here for you and your family</b><small>Thoughtful care at every step</small></div></div><div className="jn-visual-stamp">JANANI <i>✳</i> HOSPITAL</div></div>
      </div></section>
      <section className="jn-values"><div className="jn-shell"><div><span><HeartPulse size={21}/></span><b>Compassion</b><small>A welcoming patient experience</small></div><div><span><ShieldCheck size={21}/></span><b>Clarity</b><small>Helpful, understandable information</small></div><div><span><Stethoscope size={21}/></span><b>Connection</b><small>A direct way to contact the team</small></div></div></section>
      <JananiWombVisual/>
      <section className="jn-section" id="jn-about"><div className="jn-shell jn-about-grid"><div><span className="jn-kicker">ABOUT JANANI HOSPITAL</span><h2>Care begins with listening.</h2><div className="jn-orbit"><HeartPulse size={54}/><span/><i/></div></div><div><p className="jn-lead">A hospital should feel approachable. This website is designed to help patients and families find essential information and reach the hospital team with confidence.</p><p>Doctor names, specialities, services, facilities, timings and contact information will be published once confirmed by the hospital.</p><div className="jn-note"><CheckCircle2 size={19}/><span>Only hospital-confirmed information should be used for clinical services, doctor credentials and availability.</span></div></div></div></section>
      <section className="jn-section jn-care" id="jn-care"><div className="jn-shell"><div className="jn-section-head"><div><span className="jn-kicker">PATIENT INFORMATION</span><h2>Find the information you need.</h2></div><p>Contact the hospital directly to confirm current services, specialist availability and admission requirements.</p></div><div className="jn-care-grid">{careItems.map(([title,description,Icon],i)=><article key={title}><span className="jn-card-no">0{i+1}</span><div className="jn-card-icon"><Icon size={23}/></div><h3>{title}</h3><p>{description}</p><a href="#jn-contact">Enquire with the team <ArrowRight size={15}/></a></article>)}</div></div></section>
      <section className="jn-doctors" id="jn-doctors"><div className="jn-shell jn-doctors-inner"><div><span className="jn-kicker">MEDICAL TEAM</span><h2>Meet the doctor.</h2><p>Explore the doctor profile and contact the hospital to confirm current consultation timings and availability.</p></div><article className="jn-doctor-profile"><div className="jn-doctor-photo-wrap"><img src="/dr-vishal-vasani-azad-chowk-junagadh-gynaecologist-and-obstetrician-doctors-whpfmni753.jpg" alt="Dr. Vishal Vasani"/></div><div className="jn-doctor-info"><span className="jn-doctor-label">DOCTOR PROFILE</span><h3>Dr. Vishal Vasani</h3><p>Gynaecologist &amp; Obstetrician</p><small>Please contact the hospital to confirm consultation details and availability.</small></div></article></div></section>
      <section className="jn-section jn-facilities" id="jn-facilities"><div className="jn-shell"><div className="jn-section-head"><div><span className="jn-kicker">HOSPITAL FACILITIES</span><h2>Know before you visit.</h2></div><p>Ask the hospital about facilities and patient support available on the day of your visit.</p></div><div className="jn-facility-row"><div><Activity size={22}/><b>Clinical facilities</b><span>Confirm available departments and equipment.</span></div><div><Accessibility size={22}/><b>Patient access</b><span>Ask about accessibility and attendant support.</span></div><div><Clock3 size={22}/><b>Visiting information</b><span>Confirm current visiting and consultation hours.</span></div></div></div></section>
      <section className="jn-section jn-gallery" id="jn-gallery"><div className="jn-shell"><div className="jn-section-head"><div><span className="jn-kicker">A WELCOMING ENVIRONMENT</span><h2>Designed around people.</h2></div><p>Illustrative healthcare imagery. Actual hospital photographs can replace these images when supplied.</p></div><div className="jn-gallery-grid"><img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=85" alt="Illustrative modern hospital corridor"/><img src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1000&q=85" alt="Illustrative medical consultation"/><img src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1000&q=85" alt="Illustrative hospital care environment"/></div></div></section>
      <section className="jn-contact" id="jn-contact"><div className="jn-shell jn-contact-grid"><div><span className="jn-kicker">GET IN TOUCH</span><h2>How can we help you?</h2><p>For appointments, doctor availability, services, admission or directions, please contact Janani Hospital using its verified contact details.</p><div className="jn-contact-pending"><MapPin size={20}/><span><b>Junagadh, Gujarat</b><small>Exact address and contact number to be confirmed.</small></span></div></div><div className="jn-contact-card jn-enquiry-card"><HeartPulse size={30}/><b>Send an enquiry on WhatsApp</b><p>Fill in your details below. WhatsApp will open with your message ready to send.</p><form className="jn-enquiry-form" onSubmit={handleWhatsAppEnquiry}>
        <label>Your name<input type="text" name="patientName" placeholder="Enter your name" autoComplete="name" required/></label>
        <label>Mobile number<input type="tel" name="patientPhone" placeholder="Enter your mobile number" autoComplete="tel" inputMode="tel" pattern="[0-9+()\\s-]{7,18}" required/></label>
        <label>What is your enquiry about?<select name="enquiryType" defaultValue="Appointment enquiry" required><option>Appointment enquiry</option><option>Doctor consultation</option><option>Hospital services</option><option>Admission information</option><option>Other</option></select></label>
        <label>Preferred visit date <span>(optional)</span><input type="date" name="visitDate"/></label>
        <label>Message <span>(optional)</span><textarea name="patientMessage" rows="3" placeholder="Write your question here"/></label>
        <button type="submit"><MessageCircle size={16}/> Send enquiry on WhatsApp <ArrowRight size={16}/></button>
      </form><a href={map} target="_blank" rel="noreferrer">Find Janani Hospital on Maps <MoveUpRight size={16}/></a><small className="jn-whatsapp-number">WhatsApp: +91 99098 59046</small></div></div></section>
    </main>
    <footer className="jn-footer"><div className="jn-shell"><div><b>JANANI HOSPITAL</b><span>Care • Compassion • Commitment</span></div><div className="jn-footer-links"><a href="#jn-about">About</a><a href="#jn-care">Care information</a><a href="#jn-contact">Contact</a></div></div><p className="jn-shell">© {new Date().getFullYear()} Janani Hospital. Website information preview; hospital details pending verification.</p></footer>
  </div>;
}

export default function HospitalSites() {
  const { pathname } = useLocation();
  const slug = pathname.split('/')[1];
  if (slug === 'soni-orthocare' && pathname.endsWith('/operation-theater')) return <OperationTheaterPage/>;
  if (slug === 'soni-orthocare') return <SoniOrthocare/>;
  if (slug === 'gokul-hospital') return <GokulHospital/>;
  if (slug === 'janani-hospital') return <JananiHospital/>;
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
