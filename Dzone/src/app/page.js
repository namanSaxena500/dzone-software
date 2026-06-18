'use client';

import React, { useState } from 'react';
import { 
  ArrowRight, 
  Check, 
  ChevronLeft, 
  ChevronRight, 
  Smartphone, 
  Globe, 
  Layers, 
  Lock, 
  Cloud, 
  Activity, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronDown,
  HeartPulse,
  Shield,
  Landmark,
  Film,
  Monitor,
  GraduationCap
} from 'lucide-react';

// SVG Illustrations
const HeroIllustration = () => (
  <svg viewBox="0 0 500 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.8" />
      </linearGradient>
      <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e293b" />
        <stop offset="100%" stopColor="#0f172a" />
      </linearGradient>
      <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="10" stdDeviation="8" floodOpacity="0.15" />
      </filter>
    </defs>
    {/* Background Decorative Circles */}
    <circle cx="400" cy="100" r="80" fill="url(#grad1)" opacity="0.1" />
    <circle cx="100" cy="350" r="120" fill="url(#grad1)" opacity="0.05" />
    
    {/* Office/Desk Line */}
    <line x1="50" y1="380" x2="450" y2="380" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" />
    
    {/* Left Character (Developer) */}
    <g transform="translate(100, 180)">
      {/* Chair */}
      <path d="M20 180 H80 V200 H20 Z" fill="#64748b" />
      <path d="M40 200 H60 V230 H40 Z" fill="#475569" />
      <path d="M30 230 H70 V240 H30 Z" fill="#334155" />
      <path d="M70 120 V180" stroke="#475569" strokeWidth="8" strokeLinecap="round" />
      {/* Body */}
      <path d="M30 120 C30 100 80 100 80 120 V180 H30 Z" fill="#f97316" /> {/* Orange Shirt */}
      {/* Head */}
      <circle cx="55" cy="75" r="22" fill="#fed7aa" />
      {/* Hair */}
      <path d="M33 75 C33 55 77 55 77 75 C77 65 33 65 33 75 Z" fill="#1e293b" />
      {/* Glasses */}
      <rect x="42" y="70" width="12" height="8" rx="2" fill="none" stroke="#1e293b" strokeWidth="2" />
      <rect x="58" y="70" width="12" height="8" rx="2" fill="none" stroke="#1e293b" strokeWidth="2" />
      <line x1="54" y1="74" x2="58" y2="74" stroke="#1e293b" strokeWidth="2" />
      {/* Laptop */}
      <path d="M80 150 L120 150 L130 180 L70 180 Z" fill="#e2e8f0" filter="url(#shadow)" />
      <path d="M120 150 L120 120 L80 120 L80 150 Z" fill="#94a3b8" />
      {/* Hands */}
      <circle cx="85" cy="155" r="6" fill="#fed7aa" />
      <circle cx="105" cy="155" r="6" fill="#fed7aa" />
    </g>

    {/* Right Character (Manager/Designer) */}
    <g transform="translate(280, 160)">
      {/* Chair */}
      <path d="M20 200 H80 V220 H20 Z" fill="#475569" />
      <path d="M40 220 H60 V250 H40 Z" fill="#334155" />
      <path d="M30 250 H70 V260 H30 Z" fill="#1e293b" />
      <path d="M30 140 V200" stroke="#475569" strokeWidth="8" strokeLinecap="round" />
      {/* Body */}
      <path d="M25 140 C25 120 75 120 75 140 V200 H25 Z" fill="#2563eb" /> {/* Blue Shirt */}
      {/* Head */}
      <circle cx="50" cy="95" r="22" fill="#fde047" />
      {/* Hair */}
      <path d="M28 95 C28 75 72 75 72 95 C72 85 28 85 28 95 Z" fill="#78350f" />
      {/* Glasses */}
      <rect x="37" y="90" width="12" height="8" rx="2" fill="none" stroke="#78350f" strokeWidth="2" />
      <rect x="53" y="90" width="12" height="8" rx="2" fill="none" stroke="#78350f" strokeWidth="2" />
      <line x1="49" y1="94" x2="53" y2="94" stroke="#78350f" strokeWidth="2" />
      {/* Laptop */}
      <path d="M10 170 L50 170 L60 200 L0 200 Z" fill="#cbd5e1" filter="url(#shadow)" />
      <path d="M10 170 L10 140 L50 140 L50 170 Z" fill="#94a3b8" />
      {/* Hands */}
      <circle cx="20" cy="175" r="6" fill="#fde047" />
      <circle cx="40" cy="175" r="6" fill="#fde047" />
    </g>

    {/* Floating Tech Icons / Elements */}
    <g filter="url(#shadow)">
      <rect x="220" y="80" width="60" height="40" rx="8" fill="#fff" />
      <text x="250" y="105" textAnchor="middle" fill="#2563eb" fontWeight="bold" fontSize="14">&lt;/&gt;</text>
      
      <circle cx="80" cy="80" r="20" fill="#22c55e" />
      <path d="M73 80 L78 85 L87 75" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

      <rect x="380" y="240" width="80" height="50" rx="8" fill="#fff" />
      <line x1="395" y1="255" x2="445" y2="255" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
      <line x1="395" y1="265" x2="430" y2="265" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
      <line x1="395" y1="275" x2="415" y2="275" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" />
    </g>
  </svg>
);

const TeamIllustration = () => (
  <svg viewBox="0 0 500 355" fill="none" xmlns="http://www.w3.org/2000/svg" className="team-svg">
    <defs>
      <linearGradient id="officeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f8fafc" />
        <stop offset="100%" stopColor="#e2e8f0" />
      </linearGradient>
    </defs>
    <rect width="500" height="355" rx="12" fill="url(#officeGrad)" />
    
    {/* Office Background details */}
    <rect x="40" y="40" width="120" height="80" rx="4" fill="#cbd5e1" opacity="0.5" />
    <line x1="50" y1="100" x2="150" y2="100" stroke="#94a3b8" strokeWidth="2" />
    <line x1="70" y1="70" x2="130" y2="70" stroke="#94a3b8" strokeWidth="4" />
    
    {/* Large Monitor */}
    <rect x="180" y="120" width="140" height="90" rx="6" fill="#1e293b" />
    <rect x="190" y="130" width="120" height="70" rx="2" fill="#384252" />
    <path d="M240 210 H260 V240 H240 Z" fill="#475569" />
    <path d="M220 240 H280 V250 H220 Z" fill="#334155" />
    {/* Code lines on monitor */}
    <line x1="200" y1="145" x2="250" y2="145" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
    <line x1="200" y1="155" x2="280" y2="155" stroke="#4ade80" strokeWidth="4" strokeLinecap="round" />
    <line x1="200" y1="165" x2="230" y2="165" stroke="#fb7185" strokeWidth="4" strokeLinecap="round" />
    <line x1="200" y1="175" x2="270" y2="175" stroke="#facc15" strokeWidth="4" strokeLinecap="round" />

    {/* Team Members Symbolized */}
    <g transform="translate(100, 160)">
      <circle cx="30" cy="40" r="20" fill="#93c5fd" />
      <path d="M10 90 C10 65 50 65 50 90 Z" fill="#1e3a8a" />
    </g>
    <g transform="translate(320, 150)">
      <circle cx="30" cy="40" r="20" fill="#fca5a5" />
      <path d="M10 90 C10 65 50 65 50 90 Z" fill="#7f1d1d" />
    </g>
    
    {/* Plant */}
    <rect x="20" y="260" width="30" height="50" rx="4" fill="#a27b5c" />
    <path d="M15 260 C5 220 30 200 35 220 C40 200 65 220 55 260 Z" fill="#22c55e" />
  </svg>
);

const PortfolioMockup = ({ type }) => {
  const isWeb = type === 'web';
  return (
    <svg viewBox="0 0 500 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', borderRadius: '12px' }}>
      <rect width="500" height="320" rx="12" fill="#0f172a" />
      {/* Browser Header */}
      <rect x="0" y="0" width="500" height="30" rx="12" fill="#1e293b" />
      <circle cx="20" cy="15" r="5" fill="#ef4444" />
      <circle cx="35" cy="15" r="5" fill="#f59e0b" />
      <circle cx="50" cy="15" r="5" fill="#10b981" />
      <rect x="80" y="7" width="340" height="16" rx="8" fill="#0f172a" />

      {isWeb ? (
        // Web Application Design
        <g>
          {/* Sidebar */}
          <rect x="15" y="45" width="90" height="260" rx="6" fill="#1e293b" opacity="0.6" />
          <rect x="25" y="65" width="70" height="12" rx="4" fill="#3b82f6" />
          <rect x="25" y="95" width="70" height="8" rx="4" fill="#475569" />
          <rect x="25" y="115" width="70" height="8" rx="4" fill="#475569" />
          <rect x="25" y="135" width="70" height="8" rx="4" fill="#475569" />
          
          {/* Main Area */}
          <rect x="120" y="45" width="365" height="260" rx="6" fill="#1e293b" opacity="0.3" />
          
          {/* Cards */}
          <rect x="135" y="65" width="160" height="100" rx="8" fill="#1e293b" />
          <text x="150" y="95" fill="#fff" fontSize="12" fontWeight="bold">Nikhal Words</text>
          <text x="150" y="115" fill="#94a3b8" fontSize="8">Content Management System</text>
          <rect x="150" y="130" width="60" height="15" rx="4" fill="#10b981" />
          <text x="180" y="140" fill="#fff" fontSize="8" textAnchor="middle" fontWeight="bold">Active</text>

          <rect x="310" y="65" width="160" height="100" rx="8" fill="#1e293b" />
          <circle cx="390" cy="115" r="30" fill="none" stroke="#6366f1" strokeWidth="8" strokeDasharray="140 40" />
          <text x="390" y="119" fill="#fff" fontSize="12" textAnchor="middle" fontWeight="bold">78%</text>

          {/* Graph/Chart below */}
          <rect x="135" y="180" width="335" height="110" rx="8" fill="#1e293b" />
          <path d="M150 260 L200 220 L250 240 L300 200 L350 230 L400 195 L450 215" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M150 260 L200 220 L250 240 L300 200 L350 230 L400 195 L450 215 L450 270 L150 270 Z" fill="url(#chartGrad)" opacity="0.1" />
          <defs>
            <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </g>
      ) : (
        // Mobile Application Design
        <g>
          {/* Phone Frame */}
          <rect x="175" y="40" width="150" height="270" rx="20" fill="#1e293b" stroke="#475569" strokeWidth="4" />
          <rect x="230" y="48" width="40" height="8" rx="4" fill="#0f172a" />
          
          {/* Phone Screen */}
          <rect x="183" y="65" width="134" height="235" rx="12" fill="#0f172a" />
          
          {/* App Header */}
          <text x="250" y="85" fill="#fff" fontSize="10" textAnchor="middle" fontWeight="bold">Fintech App</text>
          
          {/* Card */}
          <rect x="193" y="100" width="114" height="60" rx="8" fill="url(#grad1)" />
          <text x="205" y="120" fill="#fff" fontSize="8">Balance</text>
          <text x="205" y="140" fill="#fff" fontSize="14" fontWeight="bold">$12,450.00</text>
          
          {/* List items */}
          <rect x="193" y="175" width="114" height="25" rx="6" fill="#1e293b" />
          <circle cx="205" cy="1875" r="6" fill="#10b981" />
          <rect x="220" y="183" width="50" height="8" rx="3" fill="#94a3b8" />
          <text x="295" y="190" fill="#10b981" fontSize="8" textAnchor="end">+$250</text>

          <rect x="193" y="208" width="114" height="25" rx="6" fill="#1e293b" />
          <circle cx="205" cy="220" r="6" fill="#ef4444" />
          <rect x="220" y="216" width="60" height="8" rx="3" fill="#94a3b8" />
          <text x="295" y="223" fill="#ef4444" fontSize="8" textAnchor="end">-$89</text>

          <rect x="193" y="241" width="114" height="25" rx="6" fill="#1e293b" />
          <circle cx="205" cy="253" r="6" fill="#3b82f6" />
          <rect x="220" y="249" width="45" height="8" rx="3" fill="#94a3b8" />
          <text x="295" y="256" fill="#3b82f6" fontSize="8" textAnchor="end">+$1,200</text>
        </g>
      )}
    </svg>
  );
};

export default function Home() {
  // Services Section State
  const [activeService, setActiveService] = useState('app-design');

  // Portfolio Section State
  const [activePortfolio, setActivePortfolio] = useState(0);

  // Testimonials Section State
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phoneCode: '+91',
    phoneNumber: '',
    service: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    {
      id: 'app-design',
      title: 'UI/UX Design',
      icon: <Layers size={20} />,
      desc: 'We design intuitive, modern, and beautiful user interfaces that convert users into loyal customers. Our process involves deep user research, wireframing, prototyping, and stunning visual design systems.',
      features: ['User Persona & Journey Maps', 'Interactive Prototypes', 'Responsive Layout Designs', 'Design Systems & Component Libraries']
    },
    {
      id: 'web-dev',
      title: 'Web Development',
      icon: <Globe size={20} />,
      desc: 'Top-tier, high-performance web development utilizing the latest stack like React, Next.js, and Node.js. We ensure your application is incredibly fast, responsive, secure, and optimized for search engines.',
      features: ['Server-Side Rendering (SSR)', 'SEO Optimizations', 'Headless CMS Integration', 'E-Commerce & Custom Portals']
    },
    {
      id: 'mobile-app',
      title: 'Mobile Application',
      icon: <Smartphone size={20} />,
      desc: 'High quality cross-platform and native mobile application development. We build iOS and Android apps using React Native and Flutter, ensuring native-level performance and smooth, native user experiences.',
      features: ['Cross-platform efficiency', 'App Store deployment assistance', 'Offline-first capabilities', 'Native device API integrations']
    },
    {
      id: 'cloud-services',
      title: 'Cloud Services',
      icon: <Cloud size={20} />,
      desc: 'Scalable cloud infrastructure architectures on AWS, GCP, and Azure. We plan, deploy, and monitor scalable serverless or microservice structures tailored for high-availability requirements.',
      features: ['Microservices Architecture', 'Serverless Functions', 'Continuous Delivery Pipelines', 'Auto-scaling & Monitoring']
    },
    {
      id: 'cyber-security',
      title: 'Cyber Security',
      icon: <Lock size={20} />,
      desc: 'Keep your products and user data secure. We implement secure coding practices, HTTPS/TLS standards, encryption, authentication protocols (OAuth, JWT), and conduct penetration vulnerability checks.',
      features: ['Data Encryption at Rest & Flight', 'OAuth2 & Multi-Factor Auth', 'Vulnerability scanning', 'GDPR & HIPAA compliance design']
    },
    {
      id: 'devops-qa',
      title: 'DevOps & QA',
      icon: <Activity size={20} />,
      desc: 'Automating software integration, testing, and deployment to guarantee flawless product releases. We utilize automated testing frameworks and CI/CD tools to minimize production faults.',
      features: ['Automated Unit & E2E Testing', 'Continuous Integration (CI/CD)', 'Infrastructure as Code (IaC)', 'Zero-downtime Deployments']
    }
  ];

  const expertises = [
    { 
      id: 'healthcare', 
      label: 'Healthcare', 
      icon: <HeartPulse />, 
      desc: <>Healthcare Software Development Service Dubai <a href="#">i-HiddenTalent</a> delivers innovative healthcare platforms that help medical organizations enhance patient care and operational efficiency. As a trusted Healthcare Software Development Company in Australia & Dubai, we provide reliable Healthcare Software Development Service Australia & Dubai for hospitals, clinics, and healthcare startups.</>,
      features: [
        'Blazing-Fast Performance that eliminates friction and keeps users engaged.',
        'Robust Scalability that supports massive traffic and long-term growth.',
        'Pixel-Perfect UX that feels completely effortless and intuitive.'
      ]
    },
    { 
      id: 'insurance', 
      label: 'Insurance', 
      icon: <Shield />, 
      desc: <>Insurance Software Development Service Dubai <a href="#">i-HiddenTalent</a> delivers secure insurtech platforms that automate claims management, policy administration, and underwriting workflows. We build user-centric portals and mobile apps with seamless payment pathways and instant quote calculators.</>,
      features: [
        'End-to-end claim processing automation to reduce turnaround time.',
        'Robust security protocols that ensure 100% data privacy.',
        'Self-service portals with real-time claims tracking for customers.'
      ]
    },
    { 
      id: 'finance', 
      label: 'Banking & Finance', 
      icon: <Landmark />, 
      desc: <>Financial Technology Solutions Dubai <a href="#">i-HiddenTalent</a> provide bank-grade encryption, real-time transaction ledgers, and secure integration with global payment networks. We design and engineer next-gen wealth management platforms, banking dashboards, and investment portals.</>,
      features: [
        'Strict regulatory compliance design including PCI-DSS standards.',
        'Real-time analytics dashboards for asset tracking and portfolio growth.',
        'Multi-tenant architectures with end-to-end data encryption.'
      ]
    },
    { 
      id: 'retail', 
      label: 'Media & Entertainment', 
      icon: <Film />, 
      desc: <>Digital Media & Entertainment Platforms Dubai <a href="#">i-HiddenTalent</a> deliver content delivery network (CDN) optimizations, live streaming solutions, and interactive portals that scale to millions of active users. We create responsive video interfaces and retail shopping networks.</>,
      features: [
        'Blazing-fast content caching and low-latency video streaming.',
        'Multi-device layout designs ensuring pixel-perfect UX on mobile and TV.',
        'Interactive features including real-time chat, sharing, and ratings.'
      ]
    },
    { 
      id: 'it', 
      label: 'Information Technology', 
      icon: <Monitor />, 
      desc: <>Custom Software & SaaS Infrastructure Dubai <a href="#">i-HiddenTalent</a> engineering helps modern tech companies deploy highly scalable microservices, cloud workflow automations, and developer utilities. We design and optimize cloud databases for maximum availability and reliability.</>,
      features: [
        'Continuous integration and delivery pipelines for zero-downtime releases.',
        'Containerized Docker and Kubernetes deployments for microservice setups.',
        'High-performance API designs supporting massive concurrent requests.'
      ]
    },
    { 
      id: 'education', 
      label: 'Education', 
      icon: <GraduationCap />, 
      desc: <>e-Learning & Education Management Platforms Dubai <a href="#">i-HiddenTalent</a> empower online universities, private academies, and school districts with robust Learning Management Systems (LMS). We design student portals, grade books, and live virtual classrooms.</>,
      features: [
        'Interactive whiteboard and real-time student-teacher portal features.',
        'Automated graded assessments and lesson progress trackers.',
        'Extensible video conferencing integration supporting HD streaming.'
      ]
    }
  ];

  const [activeExpertise, setActiveExpertise] = useState('it');

  const portfolioItems = [
    {
      id: 0,
      title: 'Project Title',
      desc: 'We deliver creative UI/UX, high-performing websites, and standout visuals to power your brand.We deliver creative UI/UX, high-performing websites, and standout visuals to power your brand.We deliver creative UI/UX, high-performing websites, and standout visuals to power your brand.We deliver creative UI/UX, high-performing websites, and standout visuals to power your brand.',
      image: '/images/side2.png'
    },
    {
      id: 1,
      title: 'Earth Skincare',
      desc: 'A premium design and e-commerce experience for organic skincare products. We crafted a minimal visual language, eco-friendly packaging layouts, and a lightning-fast Shopify storefront that elevates brand presence globally.',
      image: '/images/side2.png'
    },
    {
      id: 2,
      title: 'Roof Hotel',
      desc: 'An elegant, interactive booking system and branding package for luxury hospitality. We built custom booking flows, guest portal animations, and a rich, responsive corporate site that enhances direct bookings.',
      image: '/images/side2.png'
    },
    {
      id: 3,
      title: 'Mattia Restaurant',
      desc: 'Art direction, logo design, and high-performance menus for an upscale restaurant group. We designed a cohesive digital identity and table reservation platform that drove bookings up by 45%.',
      image: '/images/side2.png'
    }
  ];

  const testimonials = [
    {
      name: 'Rithika Sen',
      role: 'Founder, EdTech Global',
      text: '“Working with the team at Dzone was a seamless experience. They took our complex learning platform idea and built a highly performant, beautiful web application that our students absolutely love!”',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80'
    },
    {
      name: 'Michael Chang',
      role: 'CTO, InsurCloud',
      text: '“Dzone delivered our secure claims platform ahead of schedule and with incredible attention to detail. Their expertise in cloud architectures and high-security compliance was exactly what we needed.”',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
    },
    {
      name: 'Sarah Jenkins',
      role: 'Marketing Director, ShopVibe',
      text: '“The design team is outstanding! They designed our e-commerce store with so many subtle micro-interactions that users love. Our conversion rate increased by 35% in the first two months.”',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus({ type: 'success', message: data.message || 'Message sent successfully!' });
        setFormData({
          name: '',
          company: '',
          email: '',
          phoneCode: '+91',
          phoneNumber: '',
          service: 'Web Development',
          message: ''
        });
      } else {
        setFormStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setFormStatus({ type: 'error', message: 'Failed to connect. Please check your internet and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const activeServiceData = services.find(s => s.id === activeService);
  const activeExpertiseData = expertises.find(e => e.id === activeExpertise);

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="container nav-container">
          <a href="#" className="logo">
            <img src="/images/Logo.png" alt="Dzone | IT Services" className="logo-image" />
          </a>
          <ul className="nav-links">
            <li className="nav-item">
              <a href="#services" className="nav-link dropdown-toggle">
                Services <span className="caret">▼</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#expertise" className="nav-link dropdown-toggle">
                Technologies <span className="caret">▼</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link dropdown-toggle">
                Solution <span className="caret">▼</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>
          </ul>
          <div className="nav-action">
            <a href="#contact" className="btn btn-contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="hero-badge">Innovative Digital Agency</span>
            <h1 className="hero-title">Build Your Project with <span>US</span></h1>
            <p className="hero-desc">
              We create world-class digital experiences, combining top-tier web design with robust cloud architectures. Get your next software idea crafted by professionals.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                Reach Out To Us <ArrowRight size={18} />
              </a>
            </div>
          </div>
          <div className="hero-image-container">
            <HeroIllustration />
          </div>
        </div>
      </section>

      {/* Features / About Section */}
      <section id="about" className="features">
        <div className="container">
          <h2 className="features-section-title">Creating the Modern Web. Expanding Your Digital Prospects</h2>
          <p className="features-section-subtitle">don't just write code; we build digital foundations.</p>
          
          <div className="features-grid">
            <div className="features-image-container">
              <img src="/images/side1.png" alt="Team Working" className="features-image" />
            </div>
            <div className="features-content">
              <h3 className="features-focus-title">We focus on:</h3>
              <div className="features-list">
                <div className="feature-item">
                  <img src="/images/bullet.png" alt="check" className="feature-bullet-img" />
                  <p className="feature-text-new">
                    <strong>Blazing-Fast Performance</strong> that eliminates friction and keeps users engaged.
                  </p>
                </div>
                <div className="feature-item">
                  <img src="/images/bullet.png" alt="check" className="feature-bullet-img" />
                  <p className="feature-text-new">
                    <strong>Robust Scalability</strong> that supports massive traffic and long-term growth.
                  </p>
                </div>
                <div className="feature-item">
                  <img src="/images/bullet.png" alt="check" className="feature-bullet-img" />
                  <p className="feature-text-new">
                    <strong>Pixel-Perfect UX</strong> that feels completely effortless and intuitive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="services-section-title">Our Service</h2>
          <p className="services-section-subtitle">don't just write code; we build digital foundations.</p>

          <div className="services-grid">
            <div className="services-left-col">
              <h3 className="services-left-title">Get the Best With Us</h3>
              <p className="services-left-desc">
                Lorem ipsum dolor sit amet consectetur. Sed massa dolor placerat sapien dolor. Rhoncus sociis nunc libero id eros id etiam pharetra..
              </p>
              <div className="services-nav">
                {services.map((item) => (
                  <button
                    key={item.id}
                    className={`services-nav-btn ${activeService === item.id ? 'active' : ''}`}
                    onClick={() => setActiveService(item.id)}
                  >
                    {item.icon}
                    {item.title}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="services-content-card">
              <div className="services-card-body">
                <p className="services-card-desc">{activeServiceData.desc}</p>
                
                <div className="services-card-features">
                  {activeServiceData.features.map((feat, index) => (
                    <div key={index} className="services-card-feature">
                      <img src="/images/bullet.png" alt="bullet" className="services-card-bullet" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="services-card-footer">
                <a href="#contact" className="btn btn-explore">Explore</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-box">
            <p className="cta-text-new">
              Teams ranging early-stage startups to big businesses approach us when they need web-based solutions that are reliable, come to life, and deliver real-world results.
            </p>
            <a href="#contact" className="btn btn-cta-new">Reach Out To Us</a>
          </div>
        </div>
      </section>

      {/* Portfolio / Customer Success Section */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Contribution To Our Customers' Success</h2>

          <div className="portfolio-grid">
            <div className="portfolio-showcase-new">
              <img 
                src={portfolioItems[activePortfolio].image} 
                alt={portfolioItems[activePortfolio].title} 
                className="portfolio-image-new" 
              />
            </div>
            <div className="portfolio-details">
              <h3 className="portfolio-title-new">{portfolioItems[activePortfolio].title}</h3>
              <p className="portfolio-desc-new">{portfolioItems[activePortfolio].desc}</p>
              
              <div className="portfolio-thumbnails-container">
                <div className="portfolio-thumbnails-new">
                  {portfolioItems.map((item, idx) => (
                    <div 
                      key={item.id}
                      className={`portfolio-thumb-new ${activePortfolio === idx ? 'active' : ''}`}
                      onClick={() => setActivePortfolio(idx)}
                    >
                      <img src="/images/side2.png" alt={item.title} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Domain Expertise Section */}
      <section id="expertise" className="expertise">
        <div className="container">
          <h2>IT Outsourcing Domain Expertise</h2>
          <p className="expertise-subtitle">don't just write code; we build digital foundations.</p>

          <div className="expertise-tabs-new">
            {expertises.map((item) => (
              <button
                key={item.id}
                className={`expertise-tab-new ${activeExpertise === item.id ? 'active' : ''}`}
                onClick={() => setActiveExpertise(item.id)}
              >
                <span className="tab-icon-container">
                  {item.icon}
                </span>
                <span className="tab-text-container">
                  {item.label}
                </span>
              </button>
            ))}
          </div>

          <div className="expertise-content-panel-new">
            <p className="expertise-panel-desc-new">
              {activeExpertiseData.desc}
            </p>
            <div className="expertise-bullets-new">
              {activeExpertiseData.features.map((feat, index) => (
                <div key={index} className="expertise-bullet-new">
                  <div className="expertise-bullet-icon-new">
                    <Check size={14} />
                  </div>
                  <div className="expertise-bullet-text-new">
                    {feat}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <div className="container">
          <h2>Why Choose US ?</h2>
          <p className="why-us-subtitle">don't just write code; we build digital foundations.</p>

          <div className="why-us-grid-new">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div key={idx} className="why-us-item-new">
                <div className="why-us-header-new">
                  <span className="why-us-num-new">{idx + 1}.</span>
                  <h3 className="why-us-title-new">Long-term Partner You Can Trust</h3>
                </div>
                <p className="why-us-text-new">
                  long-term technology partner for 200+ clients across Asia, Europe, and Oceania, supporting stable offshore delivery over time. We are also an active member of DBAV and EuroCham, helping strengthen collaboration with European business communities and international partners.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-box-new">
            <div className="contact-text-panel-new">
              <span className="contact-subtitle-new">GET A FREE ESTIMATE</span>
              <h2 className="contact-title-new">Want To Grow your Business ?</h2>
              <p className="contact-desc-new">
                Lorem ipsum dolor sit amet consectetur. Sed massa dolor placerat sapien dolor. Rhoncus sociis nunc libero id eros id etiam pharetra..
              </p>
            </div>

            <div className="contact-form-panel-new">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input-new"
                  placeholder="Enter Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="form-input-new"
                  placeholder="Company Organization"
                  value={formData.company}
                  onChange={handleInputChange}
                />

                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input-new"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />

                <div className="phone-input-wrapper-new">
                  <div className="phone-code-badge-new">
                    <div className="flag-select-wrapper">
                      <span className="flag-emoji">
                        {formData.phoneCode === '+91' ? '🇮🇳' : 
                         formData.phoneCode === '+1' ? '🇺🇸' : 
                         formData.phoneCode === '+44' ? '🇬🇧' : 
                         formData.phoneCode === '+61' ? '🇦🇺' : '🇮🇳'}
                      </span>
                      <span className="phone-caret">▼</span>
                      <select 
                        name="phoneCode" 
                        value={formData.phoneCode} 
                        onChange={handleInputChange}
                        className="hidden-flag-select"
                      >
                        <option value="+91">India (+91)</option>
                        <option value="+1">USA (+1)</option>
                        <option value="+44">UK (+44)</option>
                        <option value="+61">Australia (+61)</option>
                      </select>
                    </div>
                    <span className="phone-code-text">{formData.phoneCode}</span>
                  </div>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="form-input-new phone-input-field"
                    placeholder="Mobile"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="select-wrapper-new">
                  <select 
                    id="service" 
                    name="service" 
                    value={formData.service} 
                    onChange={handleInputChange}
                    className="form-select-new"
                    required
                  >
                    <option value="" disabled hidden>Domain</option>
                    <option value="Web Development">Web Development</option>
                    <option value="App Design">App Design (UX/UI)</option>
                    <option value="Mobile Applications">Mobile Application</option>
                    <option value="Cloud Services">Cloud Services</option>
                    <option value="Cyber Security">Cyber Security</option>
                    <option value="DevOps & QA">DevOps & QA</option>
                  </select>
                  <span className="select-caret-new">▼</span>
                </div>

                <textarea
                  id="message"
                  name="message"
                  className="form-textarea-new"
                  placeholder="Description"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />

                <div className="form-submit-container-new">
                  <button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="btn-submit-new"
                  >
                    {isSubmitting ? 'Sending...' : "Let's Connect"}
                  </button>
                </div>

                {formStatus.message && (
                  <div className={`form-message-new ${formStatus.type}`}>
                    {formStatus.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2>What Our Clients Say</h2>
          <p className="section-description">
            Read stories of how we partnered with clients to bring success.
          </p>

          <div className="testimonials-carousel">
            <div 
              className="testimonials-track" 
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((t, idx) => (
                <div key={idx} className="testimonial-card">
                  <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                  <div className="testimonial-stars">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <blockquote className="testimonial-quote">{t.text}</blockquote>
                  <div className="testimonial-author">
                    <h4>{t.name}</h4>
                    <p>{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="testimonials-controls">
              <button 
                className="control-btn"
                onClick={() => setCurrentTestimonial(prev => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                className="control-btn"
                onClick={() => setCurrentTestimonial(prev => (prev === testimonials.length - 1 ? 0 : prev + 1))}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid-new">
            <div className="footer-brand-new">
              <a href="#" className="footer-logo-link-new">
                <img src="/images/logo2.png" alt="Dzone" className="footer-logo-img-new" />
              </a>
              <p className="footer-brand-text-new">
                Lorem ipsum dolor sit amet consectetur. Sed massa dolor placerat sapien dolor. Lorem ipsum dolor sit amet consectetur. Sed massa dolor placerat sapien dolor. Lorem ipsum dolor sit amet consectetur. Sed...
              </p>
            </div>
            
            <div className="footer-col-new">
              <h4>Expertise</h4>
              <ul className="footer-links-new">
                <li><a href="#">Reactjs Development</a></li>
                <li><a href="#">Nextjs Development</a></li>
                <li><a href="#">React Native Development</a></li>
                <li><a href="#">Graphic Design</a></li>
                <li><a href="#">Graphic Design</a></li>
              </ul>
            </div>

            <div className="footer-col-new">
              <h4>Services</h4>
              <ul className="footer-links-new">
                <li><a href="#services">Web Development</a></li>
                <li><a href="#services">Mobile Application</a></li>
                <li><a href="#services">UI/UX Design</a></li>
                <li><a href="#">Digital Marketing</a></li>
              </ul>
            </div>

            <div className="footer-col-new">
              <h4>Contact</h4>
              <ul className="footer-links-new">
                <li><a href="tel:+91845168465111">+91 845168465111</a></li>
                <li><a href="#contact">Address</a></li>
                <li><a href="#">Links</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
