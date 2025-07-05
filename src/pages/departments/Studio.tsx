
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Studio = () => {
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
      title: 'Video Production',
      description: 'Cinematic storytelling from concept to final cut',
      features: ['Commercial Videos', 'Corporate Films', 'Music Videos', 'Documentaries']
    },
    {
      title: 'Photography',
      description: 'Capturing moments that define your brand',
      features: ['Product Photography', 'Event Coverage', 'Portrait Sessions', 'Commercial Shoots']
    },
    {
      title: 'Post-Production',
      description: 'Polishing your content to perfection',
      features: ['Video Editing', 'Color Grading', 'Sound Design', 'Motion Graphics']
    }
  ];

  const portfolio = [
    { title: 'Brand Commercial', type: 'Video', client: 'Tech Startup' },
    { title: 'Product Launch', type: 'Photography', client: 'Fashion Brand' },
    { title: 'Corporate Documentary', type: 'Video', client: 'Fortune 500' },
    { title: 'Event Coverage', type: 'Photography', client: 'Music Festival' }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-purple-900 to-blue-900">
        <div className="container-custom">
          <div className="text-center fade-in-on-scroll">
            <div className="text-sm font-medium text-kaki-grey mb-4">Visual Storytelling</div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">KAKI Studio</h1>
            <p className="text-lg lg:text-xl text-kaki-grey max-w-3xl mx-auto mb-12">
              We transform ideas into compelling visual narratives that captivate audiences and drive meaningful engagement.
            </p>
            <Button asChild size="lg" className="bg-kaki-white text-kaki-black hover:bg-kaki-grey">
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Video Showcase Placeholder */}
      <section className="section-padding bg-kaki-dark-grey">
        <div className="container-custom">
          <div className="aspect-video bg-kaki-black rounded-3xl flex items-center justify-center fade-in-on-scroll">
            <div className="text-center">
              <div className="w-16 h-16 bg-kaki-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-kaki-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <p className="text-kaki-grey">Studio Reel Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Services</h2>
            <p className="text-lg text-kaki-grey max-w-2xl mx-auto">
              Comprehensive visual production services that bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className={`bg-kaki-dark-grey p-8 rounded-2xl hover-lift fade-in-on-scroll animation-delay-${index * 200}`}>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-kaki-grey mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-kaki-grey text-sm flex items-center">
                      <div className="w-2 h-2 bg-kaki-white rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-kaki-dark-grey">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Recent Work</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolio.map((item, index) => (
              <div key={item.title} className={`group cursor-pointer fade-in-on-scroll animation-delay-${index * 100}`}>
                <div className="aspect-video bg-gradient-to-br from-purple-900 to-blue-900 rounded-2xl mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-sm text-kaki-grey">{item.type}</div>
                    <div className="text-lg font-bold">{item.title}</div>
                  </div>
                </div>
                <div className="text-kaki-grey text-sm">{item.client}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Equipment</h2>
            <p className="text-lg text-kaki-grey max-w-2xl mx-auto">
              State-of-the-art equipment to ensure the highest production quality.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Cinema Cameras', icon: '📹' },
              { name: 'Professional Lighting', icon: '💡' },
              { name: 'Audio Equipment', icon: '🎵' },
              { name: 'Drone Technology', icon: '🚁' }
            ].map((item, index) => (
              <div key={item.name} className={`text-center p-6 bg-kaki-dark-grey rounded-2xl hover-lift fade-in-on-scroll animation-delay-${index * 100}`}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Studio;
