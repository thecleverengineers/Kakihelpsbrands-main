
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Code, Smartphone, Globe, Eye, Database, Cpu } from 'lucide-react';

import ahibiLogo from '@/assets/lovable-uploads/ahibi.png';
import ahibi from '@/assets/img/ahibi.png';

const Tech = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications',
      features: ['React/Next.js', 'Node.js Backend', 'E-commerce Solutions', 'Progressive Web Apps'],
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: 'App Development',
      description: 'Native and cross-platform mobile applications',
      features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Deployment'],
      icon: <Smartphone className="w-8 h-8" />
    },
    {
      title: 'Software Development',
      description: 'Custom software solutions for businesses',
      features: ['Enterprise Software', 'Cloud Solutions', 'API Development', 'Database Design'],
      icon: <Database className="w-8 h-8" />
    },
    {
      title: 'AR Development',
      description: 'Immersive augmented reality experiences',
      features: ['AR Mobile Apps', 'Web AR', '3D Modeling', 'Interactive Experiences'],
      icon: <Eye className="w-8 h-8" />
    }
  ];

  const technologies = [
    { name: 'React/Next.js', icon: '⚛️', description: 'Modern web frameworks' },
    { name: 'Node.js', icon: '🟢', description: 'Backend development' },
    { name: 'Flutter', icon: '📱', description: 'Cross-platform apps' },
    { name: 'AR.js/Three.js', icon: '🥽', description: 'AR development' },
    { name: 'AWS/Azure', icon: '☁️', description: 'Cloud platforms' },
    { name: 'MongoDB/PostgreSQL', icon: '🗄️', description: 'Database solutions' }
  ];

  const projects = [
    {
      title: 'Ahibi.in',
      type: 'Ticket Booking Platform',
      tech: 'React, Node.js, MongoDB',
      description: 'Revolutionary online ticket booking platform with seamless user experience',
      link: 'https://ahibi.in'
    },
    {
      title: 'E-commerce Mobile App',
      type: 'Mobile Application',
      tech: 'React Native, Firebase',
      description: 'Cross-platform shopping app with real-time inventory management'
    },
    {
      title: 'AR Product Showcase',
      type: 'Augmented Reality',
      tech: 'AR.js, Three.js',
      description: 'Interactive AR experience for product visualization'
    },
    {
      title: 'SaaS Analytics Dashboard',
      type: 'Web Application',
      tech: 'Next.js, PostgreSQL',
      description: 'Real-time analytics platform with advanced data visualization'
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900">
        <div className="container-custom">
          <div className="text-center fade-in-on-scroll">
            <div className="text-sm font-medium text-cyan-200 mb-4">Digital Innovation</div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">KAKI Tech</h1>
            <p className="text-lg lg:text-xl text-cyan-100 max-w-3xl mx-auto mb-12">
              We build cutting-edge digital solutions that transform businesses and create extraordinary user experiences through innovative technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-cyan-50">
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
                <a href="https://ahibi.in" target="_blank" rel="noopener noreferrer">
                  View Ahibi.in
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ahibi Showcase */}
      <section className="section-padding bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-on-scroll">
              <div className="bg-white p-6 rounded-2xl inline-block mb-6">
                <img 
                  src={ahibiLogo}
                  alt="Ahibi Logo" 
                  className="h-12"
                />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Our Flagship Platform</h2>
              <p className="text-orange-100 text-lg mb-8 leading-relaxed">
                Ahibi.in represents the pinnacle of our technical expertise - a comprehensive ticket booking platform that revolutionizes event management and user experience.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <div className="text-2xl font-bold text-white">10K+</div>
                  <div className="text-orange-200 text-sm">Tickets Booked</div>
                </div>
                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-orange-200 text-sm">Events Hosted</div>
                </div>
              </div>
              <Button asChild className="bg-white text-red-600 hover:bg-red-50">
                <a href="https://ahibi.in" target="_blank" rel="noopener noreferrer">
                  Explore Ahibi.in
                </a>
              </Button>
            </div>
            
            <div className="fade-in-on-scroll animation-delay-200">
              <div className="relative">
                <img 
                  src={ahibi}
                  alt="Ahibi Platform" 
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/30 to-transparent rounded-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Services</h2>
            <p className="text-lg text-kaki-grey max-w-2xl mx-auto">
              Comprehensive technology solutions to bring your digital vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className={`bg-kaki-dark-grey p-8 rounded-2xl hover-lift fade-in-on-scroll animation-delay-${index * 200} group`}>
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-cyan-500/20 rounded-xl mr-4 text-cyan-400 group-hover:bg-cyan-500/30 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-kaki-grey mb-6">{service.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="text-kaki-grey text-sm flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-padding bg-kaki-dark-grey">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Technologies We Use</h2>
            <p className="text-lg text-kaki-grey max-w-2xl mx-auto">
              Cutting-edge tools and frameworks to build robust, scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={tech.name} className={`bg-kaki-black p-6 rounded-2xl text-center hover-lift fade-in-on-scroll animation-delay-${index * 100} group`}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{tech.icon}</div>
                <h3 className="font-bold mb-2">{tech.name}</h3>
                <p className="text-kaki-grey text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Featured Projects</h2>
            <p className="text-lg text-kaki-grey max-w-2xl mx-auto">
              Innovative solutions we've delivered across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={project.title} className={`bg-kaki-dark-grey p-8 rounded-2xl hover-lift fade-in-on-scroll animation-delay-${index * 200} group`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                    <div className="text-cyan-400 text-sm font-medium">{project.type}</div>
                  </div>
                  {project.link && (
                    <Button asChild size="sm" className="bg-cyan-500 hover:bg-cyan-600">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        Visit
                      </a>
                    </Button>
                  )}
                </div>
                <p className="text-kaki-grey mb-4">{project.description}</p>
                <div className="text-sm text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-full inline-block">
                  {project.tech}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="section-padding bg-kaki-dark-grey">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Development Process</h2>
            <p className="text-lg text-kaki-grey max-w-2xl mx-auto">
              Our systematic approach ensures quality delivery and client satisfaction.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-cyan-400 hidden lg:block" />
            
            {[
              { phase: 'Discovery & Planning', description: 'Requirements analysis, technical architecture, project roadmap', icon: <Code className="w-6 h-6" /> },
              { phase: 'Design & Prototyping', description: 'UI/UX design, interactive prototypes, user testing', icon: <Eye className="w-6 h-6" /> },
              { phase: 'Development & Testing', description: 'Agile development, quality assurance, performance optimization', icon: <Cpu className="w-6 h-6" /> },
              { phase: 'Deployment & Support', description: 'Production deployment, monitoring, ongoing maintenance', icon: <Globe className="w-6 h-6" /> }
            ].map((item, index) => (
              <div key={item.phase} className={`flex items-center mb-8 fade-in-on-scroll animation-delay-${index * 200}`}>
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:pl-8 lg:ml-auto'}`}>
                  <div className="bg-kaki-black p-6 rounded-2xl hover-lift">
                    <div className="flex items-center mb-4 justify-center lg:justify-start">
                      <div className="p-2 bg-cyan-500/20 rounded-lg text-cyan-400 mr-3">
                        {item.icon}
                      </div>
                      <div className="text-sm text-cyan-400 font-medium">Step {index + 1}</div>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{item.phase}</h3>
                    <p className="text-kaki-grey text-sm">{item.description}</p>
                  </div>
                </div>
                
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tech;
