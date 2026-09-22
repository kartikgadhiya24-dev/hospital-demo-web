import { Heart, Stethoscope, Microscope, Brain, Baby, Activity } from 'lucide-react';

export const services = [
  {
    id: "general-consultation",
    title: "General Consultation",
    description: "Comprehensive medical evaluations and preventive care for patients of all ages.",
    icon: Stethoscope,
    category: "General Medicine"
  },
  {
    id: "cardiology",
    title: "Cardiology",
    description: "Advanced diagnostic and therapeutic procedures for heart and cardiovascular health.",
    icon: Heart,
    category: "Specialized Care"
  },
  {
    id: "diagnostics",
    title: "Digital Diagnostics",
    description: "State-of-the-art laboratory testing and imaging services for accurate diagnosis.",
    icon: Microscope,
    category: "Facilities"
  },
  {
    id: "neurology",
    title: "Neurology",
    description: "Expert care for disorders of the nervous system, brain, and spinal cord.",
    icon: Brain,
    category: "Specialized Care"
  },
  {
    id: "pediatrics",
    title: "Pediatric Care",
    description: "Dedicated and compassionate medical care for infants, children, and adolescents.",
    icon: Baby,
    category: "General Medicine"
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy",
    description: "Rehabilitation and physical therapy to restore movement and function.",
    icon: Activity,
    category: "Therapy"
  }
];

export const doctors = [
  {
    id: "dr-aarav-mehta",
    name: "Dr. Aarav Mehta",
    qualifications: "MBBS, MD (Medicine)",
    specialty: "General Physician",
    experience: "15+ Years",
    intro: "Dedicated to providing comprehensive internal medicine care with a patient-first approach.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "dr-anaya-shah",
    name: "Dr. Anaya Shah",
    qualifications: "BDS, MDS",
    specialty: "Dental Surgeon",
    experience: "12+ Years",
    intro: "Specializing in cosmetic dentistry and advanced restorative treatments for a perfect smile.",
    image: "https://images.unsplash.com/photo-1594824436998-d50d4bb8e874?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "dr-rohan-patel",
    name: "Dr. Rohan Patel",
    qualifications: "MBBS, MS (Ortho)",
    specialty: "Orthopaedic Surgeon",
    experience: "18+ Years",
    intro: "Expert in joint replacement and sports injury rehabilitation with modern surgical techniques.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Demo Patient Feedback",
    text: "The care and attention I received at Carevia Health was exceptional. The doctors took the time to explain everything clearly, and the facilities are truly world-class.",
    treatment: "General Consultation"
  },
  {
    id: 2,
    name: "Demo Patient Feedback",
    text: "From booking the appointment to the actual consultation, the entire process was seamless. The staff is incredibly supportive and professional.",
    treatment: "Dental Implant"
  },
  {
    id: 3,
    name: "Demo Patient Feedback",
    text: "I highly recommend the physiotherapy department. The personalized recovery plan helped me get back to my normal routine faster than expected.",
    treatment: "Physiotherapy"
  }
];

export const facilities = [
  {
    id: 1,
    title: "Digital Diagnostics",
    description: "Fast, accurate, and comfortable testing with our modern imaging and laboratory equipment."
  },
  {
    id: 2,
    title: "Modern Treatment Rooms",
    description: "Designed for patient comfort and privacy, equipped with the latest medical technology."
  },
  {
    id: 3,
    title: "Sterilization & Hygiene",
    description: "Strict adherence to international sterilization protocols to ensure complete patient safety."
  },
  {
    id: 4,
    title: "Digital Records",
    description: "Secure and instantly accessible medical history for better continuity of care."
  }
];

export const patientStories = [
  {
    id: 1,
    type: "Sample Case Presentation",
    treatment: "Cosmetic Dentistry",
    description: "Complete smile makeover using advanced veneers and teeth whitening procedures.",
    beforeImg: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    type: "Sample Case Presentation",
    treatment: "Orthopaedic Recovery",
    description: "Successful joint mobility restoration following a comprehensive 12-week physiotherapy program.",
    beforeImg: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=600&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=600&auto=format&fit=crop"
  }
];

export const faqs = [
  {
    question: "How can I book an appointment?",
    answer: "You can book an appointment directly through our website, by calling our clinic, or by sending a message on WhatsApp. Our reception team will confirm your timing."
  },
  {
    question: "What should I bring to my first visit?",
    answer: "Please bring any previous medical records, current prescriptions, and a valid ID. Arriving 10 minutes early to complete initial paperwork is recommended."
  },
  {
    question: "Do you offer consultations online?",
    answer: "Yes, we offer video consultations for follow-ups and specific medical concerns that do not require physical examination."
  },
  {
    question: "How long does treatment take?",
    answer: "Treatment duration varies depending on the specific procedure and individual patient needs. Your doctor will provide a detailed timeline during your initial consultation."
  },
  {
    question: "Do you provide follow-up care?",
    answer: "Absolutely. Continuous care and follow-up are integral parts of our treatment plans to ensure optimal recovery and long-term health."
  }
];
