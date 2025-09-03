
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

import kakiVideo from '@/assets/video/kaki.mp4';
import chefVideo from '@/assets/works/studio/chef.mp4';
import chefPoster from '@/assets/works/studio/chef.jpg';
import negamesVideo from '@/assets/works/studio/negames.mp4';
import negamesPoster from '@/assets/works/studio/negames.jpg';
import nslVideo from '@/assets/works/studio/nsl.mp4';
import nslPoster from '@/assets/works/studio/nsl.jpg';
import toyotaVideo from '@/assets/works/studio/toyota.mp4';
import toyotaPoster from '@/assets/works/studio/toyota.jpg';

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
  { 
    title: 'Visual Productions', 
    type: 'Video', 
    client: 'Chef Salang',
    video: chefVideo,
    poster: chefPoster
  },
  { 
    title: 'League Promo', 
    type: 'Video', 
    client: 'NSL',
    video: nslVideo,
    poster: nslPoster
  },
  { 
    title: 'Media Production', 
    type: 'Video', 
    client: 'North East Games',
    video: negamesVideo,
    poster: negamesPoster
  },
  { 
    title: 'Toyota Commercial', 
    type: 'Video', 
    client: 'Toyota',
    video: toyotaVideo,
    poster: toyotaPoster
  }
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

      {/* Video Showcase */}
      <section className="py-16 md:section-padding bg-kaki-dark-grey">
        <div className="container-custom px-4 md:px-24">
          <div className="aspect-video bg-kaki-black rounded-3xl flex items-center justify-center fade-in-on-scroll overflow-hidden">
            <video 
              className="w-full h-full object-cover rounded-3xl"
              src={kakiVideo} // ✅ update path to your actual video
              autoPlay = {true}
              muted
              loop
              controls
              playsInline
            >
              Your browser does not support the video tag.
            </video>
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
              <div 
                key={item.title} 
                className={`group cursor-pointer fade-in-on-scroll animation-delay-${index * 100}`}
              >
                <div className="aspect-video bg-kaki-black rounded-2xl mb-4 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  {item.type === 'Video' && item.video ? (
                    <video
                      className="w-full h-full object-cover rounded-2xl"
                      src={item.video}
                      poster={item.poster}
                      controls
                      playsInline
                    />
                  ) : (
                    <img 
                      src={item.poster} 
                      alt={item.title} 
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  )}
                </div>
                <div className="text-kaki-grey text-sm">{item.client}</div>
                <div className="text-lg font-bold">{item.title}</div>
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
