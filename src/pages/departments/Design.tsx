
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Design = () => {
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
      title: 'Brand Identity',
      description: 'Complete brand systems that tell your story',
      deliverables: ['Logo Design', 'Brand Guidelines', 'Color Palettes', 'Typography Systems']
    },
    {
      title: 'UI/UX Design',
      description: 'Digital experiences that delight users',
      deliverables: ['User Research', 'Wireframing', 'Prototyping', 'Interface Design']
    },
    {
      title: 'Packaging Design',
      description: 'Product packaging that stands out on shelves',
      deliverables: ['Structural Design', 'Label Design', 'Print Production', 'Material Selection']
    }
  ];

  const portfolio = [
    { title: 'Tech Startup Rebrand', type: 'Brand Identity', industry: 'Technology' },
    { title: 'E-commerce Platform', type: 'UI/UX Design', industry: 'Retail' },
    { title: 'Organic Skincare Line', type: 'Packaging Design', industry: 'Beauty' },
    { title: 'Restaurant Chain Identity', type: 'Brand Identity', industry: 'Food & Beverage' },
    { title: 'Mobile Banking App', type: 'UI/UX Design', industry: 'Finance' },
    { title: 'Craft Beer Packaging', type: 'Packaging Design', industry: 'Beverages' }
  ];

  const designPrinciples = [
    {
      title: 'Simplicity',
      description: 'Clean, focused designs that communicate clearly'
    },
    {
      title: 'Functionality',
      description: 'Beautiful designs that serve their purpose'
    },
    {
      title: 'Innovation',
      description: 'Forward-thinking approaches to design challenges'
    },
    {
      title: 'Consistency',
      description: 'Cohesive brand experiences across all touchpoints'
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-red-900 to-pink-900">
        <div className="container-custom">
          <div className="text-center fade-in-on-scroll">
            <div className="text-sm font-medium text-kaki-grey mb-4">Creative Innovation</div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">KAKI Design</h1>
            <p className="text-lg lg:text-xl text-kaki-grey max-w-3xl mx-auto mb-12">
              We create visual identities and digital experiences that captivate audiences and build lasting brand connections.
            </p>
            <Button asChild size="lg" className="bg-kaki-white text-kaki-black hover:bg-kaki-grey">
              <Link to="/contact">Start Your Design</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="section-padding bg-kaki-dark-grey">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Featured Work</h2>
            <p className="text-lg text-kaki-grey max-w-2xl mx-auto">
              A selection of our recent design projects across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <div key={item.title} className={`group cursor-pointer fade-in-on-scroll animation-delay-${index * 100}`}>
                <div className="aspect-square bg-gradient-to-br from-red-900 to-pink-900 rounded-2xl mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                  <div className="text-center z-10">
                    <div className="text-sm text-kaki-grey mb-2">{item.type}</div>
                    <div className="text-lg font-bold">{item.title}</div>
                  </div>
                  <div className="absolute inset-0 bg-kaki-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>
                <div className="text-kaki-grey text-sm">{item.industry}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Design Services</h2>
            <p className="text-lg text-kaki-grey max-w-2xl mx-auto">
              Comprehensive design solutions that elevate your brand presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className={`bg-kaki-dark-grey p-8 rounded-2xl hover-lift fade-in-on-scroll animation-delay-${index * 200}`}>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-kaki-grey mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.deliverables.map((deliverable) => (
                    <div key={deliverable} className="text-kaki-grey text-sm flex items-center">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mr-3" />
                      {deliverable}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="section-padding bg-kaki-dark-grey">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Design Philosophy</h2>
            <p className="text-lg text-kaki-grey max-w-2xl mx-auto">
              The principles that guide every design decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designPrinciples.map((principle, index) => (
              <div key={principle.title} className={`text-center p-6 bg-kaki-black rounded-2xl hover-lift fade-in-on-scroll animation-delay-${index * 100}`}>
                <div className="w-12 h-12 bg-gradient-to-br from-red-900 to-pink-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-6 h-6 bg-kaki-white rounded-full" />
                </div>
                <h3 className="font-bold mb-3">{principle.title}</h3>
                <p className="text-kaki-grey text-sm">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Process */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-on-scroll">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Tools & Process</h2>
              <p className="text-kaki-grey text-lg mb-8">
                We use industry-leading tools and follow a proven design process to ensure consistent, 
                high-quality results for every project.
              </p>
              
              <div className="space-y-6">
                {[
                  { phase: 'Discovery', description: 'Understanding brand goals and target audience' },
                  { phase: 'Concept', description: 'Ideation and initial design exploration' },
                  { phase: 'Development', description: 'Refining designs and creating final assets' },
                  { phase: 'Delivery', description: 'Final files and brand guideline documentation' }
                ].map((item, index) => (
                  <div key={item.phase} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-900 to-pink-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{item.phase}</h4>
                      <p className="text-kaki-grey text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="fade-in-on-scroll animation-delay-200">
              <div className="grid grid-cols-2 gap-4">
                {['Adobe Creative Suite', 'Figma', 'Sketch', 'Principle'].map((tool) => (
                  <div key={tool} className="bg-kaki-dark-grey p-6 rounded-2xl text-center hover-lift">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-900 to-pink-900 rounded-lg mx-auto mb-3" />
                    <div className="font-medium text-sm">{tool}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Design;
