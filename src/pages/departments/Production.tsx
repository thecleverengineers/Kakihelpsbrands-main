
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Production = () => {
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
      title: 'Event Production',
      description: 'End-to-end event planning and execution',
      features: ['Corporate Events', 'Product Launches', 'Conferences', 'Brand Activations']
    },
    {
      title: 'Set Design & Build',
      description: 'Custom set construction for any production',
      features: ['TV/Film Sets', 'Trade Show Booths', 'Photo Studios', 'Experiential Installations']
    },
    {
      title: 'Equipment Rental',
      description: 'Professional equipment for every occasion',
      features: ['Audio/Visual Gear', 'Lighting Systems', 'Camera Equipment', 'Staging Elements']
    },
    {
      title: 'Logistics Management',
      description: 'Seamless coordination from start to finish',
      features: ['Vendor Coordination', 'Timeline Management', 'On-site Support', 'Post-event Breakdown']
    }
  ];

  const equipment = [
    { name: 'Professional Cameras', icon: '📹', description: '4K and 8K capable systems' },
    { name: 'Stage Lighting', icon: '💡', description: 'LED and traditional lighting rigs' },
    { name: 'Audio Systems', icon: '🔊', description: 'Professional sound equipment' },
    { name: 'Drone Technology', icon: '🚁', description: 'Aerial cinematography solutions' },
    { name: 'Staging Elements', icon: '🎭', description: 'Modular staging systems' },
    { name: 'Transport Vehicles', icon: '🚛', description: 'Equipment and crew transport' }
  ];

  const pastEvents = [
    {
      title: 'Tech Conference 2024',
      type: 'Corporate Event',
      attendees: '500+',
      description: 'Complete AV production for 3-day technology summit'
    },
    {
      title: 'Fashion Week Showcase',
      type: 'Fashion Event',
      attendees: '300+',
      description: 'Runway production with custom lighting design'
    },
    {
      title: 'Product Launch Event',
      type: 'Brand Activation',
      attendees: '200+',
      description: 'Immersive brand experience with interactive elements'
    },
    {
      title: 'Music Festival Stage',
      type: 'Entertainment',
      attendees: '1000+',
      description: 'Main stage design and production management'
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-orange-900 to-yellow-900">
        <div className="container-custom">
          <div className="text-center fade-in-on-scroll">
            <div className="text-sm font-medium text-kaki-grey mb-4">Event Excellence</div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">KAKI Production</h1>
            <p className="text-lg lg:text-xl text-kaki-grey max-w-3xl mx-auto mb-12">
              We bring events to life through meticulous planning, innovative set design, and flawless execution.
            </p>
            <Button asChild size="lg" className="bg-kaki-white text-kaki-black hover:bg-kaki-grey">
              <Link to="/contact">Plan Your Event</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Production Services</h2>
            <p className="text-lg text-kaki-grey max-w-2xl mx-auto">
              Comprehensive production solutions for events of any scale and complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className={`bg-kaki-dark-grey p-8 rounded-2xl hover-lift fade-in-on-scroll animation-delay-${index * 200}`}>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-kaki-grey mb-6">{service.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="text-kaki-grey text-sm flex items-center">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Showcase */}
      <section className="section-padding bg-kaki-dark-grey">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Equipment & Technology</h2>
            <p className="text-lg text-kaki-grey max-w-2xl mx-auto">
              State-of-the-art equipment and technology for professional event production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipment.map((item, index) => (
              <div key={item.name} className={`bg-kaki-black p-6 rounded-2xl text-center hover-lift fade-in-on-scroll animation-delay-${index * 100}`}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold mb-2">{item.name}</h3>
                <p className="text-kaki-grey text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Recent Productions</h2>
            <p className="text-lg text-kaki-grey max-w-2xl mx-auto">
              Successful events we've produced across various industries and scales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <div key={event.title} className={`bg-kaki-dark-grey p-8 rounded-2xl hover-lift fade-in-on-scroll animation-delay-${index * 200}`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <div className="text-orange-400 text-sm font-medium">{event.type}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{event.attendees}</div>
                    <div className="text-kaki-grey text-sm">Attendees</div>
                  </div>
                </div>
                <p className="text-kaki-grey">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Scheduler Animation */}
      <section className="section-padding bg-kaki-dark-grey">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Production Timeline</h2>
            <p className="text-lg text-kaki-grey max-w-2xl mx-auto">
              Our structured approach ensures every event is delivered on time and on budget.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-400 hidden lg:block" />
            
            {[
              { week: 'Week 1-2', phase: 'Pre-Production', tasks: 'Planning, design, vendor coordination' },
              { week: 'Week 3-4', phase: 'Preparation', tasks: 'Equipment testing, rehearsals, setup' },
              { week: 'Week 5', phase: 'Production', tasks: 'Event execution, live monitoring' },
              { week: 'Week 6', phase: 'Post-Production', tasks: 'Breakdown, analysis, reporting' }
            ].map((item, index) => (
              <div key={item.week} className={`flex items-center mb-8 fade-in-on-scroll animation-delay-${index * 200}`}>
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:pl-8 lg:ml-auto'}`}>
                  <div className="bg-kaki-black p-6 rounded-2xl hover-lift">
                    <div className="text-orange-400 text-sm font-medium mb-2">{item.week}</div>
                    <h3 className="text-lg font-bold mb-2">{item.phase}</h3>
                    <p className="text-kaki-grey text-sm">{item.tasks}</p>
                  </div>
                </div>
                
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-400 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Production;
