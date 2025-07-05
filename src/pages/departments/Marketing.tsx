
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Marketing = () => {
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
      title: 'Digital Strategy',
      description: 'Comprehensive digital marketing strategies that drive results',
      metrics: ['ROI Growth', 'Brand Awareness', 'Lead Generation', 'Conversion Optimization']
    },
    {
      title: 'Media Buying',
      description: 'Strategic ad placement across digital platforms',
      metrics: ['Cost Efficiency', 'Reach Optimization', 'Audience Targeting', 'Performance Analytics']
    },
    {
      title: 'Influencer Marketing',
      description: 'Authentic partnerships that amplify your brand message',
      metrics: ['Engagement Rate', 'Brand Mentions', 'Audience Growth', 'Content Reach']
    }
  ];

  const stats = [
    { number: '200%', label: 'Average ROI Increase', description: 'Across all campaigns' },
    { number: '2M+', label: 'Impressions Generated', description: 'Monthly reach' },
    { number: '50+', label: 'Successful Campaigns', description: 'Delivered projects' },
    { number: '95%', label: 'Client Retention Rate', description: 'Long-term partnerships' }
  ];

  const caseStudies = [
    {
      title: 'Tech Startup Launch',
      challenge: 'Brand awareness in competitive market',
      solution: 'Multi-channel digital campaign',
      result: '400% increase in web traffic'
    },
    {
      title: 'E-commerce Growth',
      challenge: 'Low conversion rates',
      solution: 'Optimized ad targeting and retargeting',
      result: '250% boost in sales'
    },
    {
      title: 'Influencer Campaign',
      challenge: 'Reaching younger demographics',
      solution: 'Strategic influencer partnerships',
      result: '500% engagement increase'
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-green-900 to-teal-900">
        <div className="container-custom">
          <div className="text-center fade-in-on-scroll">
            <div className="text-sm font-medium text-kaki-grey mb-4">Digital Excellence</div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">KAKI Marketing</h1>
            <p className="text-lg lg:text-xl text-kaki-grey max-w-3xl mx-auto mb-12">
              We drive measurable growth through strategic digital marketing, precise media buying, and authentic influencer partnerships.
            </p>
            <Button asChild size="lg" className="bg-kaki-white text-kaki-black hover:bg-kaki-grey">
              <Link to="/contact">Grow Your Brand</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-kaki-dark-grey">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className={`text-center p-6 bg-kaki-black rounded-2xl hover-lift fade-in-on-scroll animation-delay-${index * 100}`}>
                <div className="text-3xl lg:text-4xl font-bold text-green-400 mb-2">{stat.number}</div>
                <div className="font-bold mb-2">{stat.label}</div>
                <div className="text-kaki-grey text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Services</h2>
            <p className="text-lg text-kaki-grey max-w-2xl mx-auto">
              Comprehensive digital marketing solutions that deliver measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className={`bg-kaki-dark-grey p-8 rounded-2xl hover-lift fade-in-on-scroll animation-delay-${index * 200}`}>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-kaki-grey mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.metrics.map((metric) => (
                    <div key={metric} className="text-kaki-grey text-sm flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-kaki-dark-grey">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Case Studies</h2>
            <p className="text-lg text-kaki-grey max-w-2xl mx-auto">
              Real results from real campaigns that drove exceptional growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={study.title} className={`bg-kaki-black p-8 rounded-2xl hover-lift fade-in-on-scroll animation-delay-${index * 200}`}>
                <h3 className="text-xl font-bold mb-4">{study.title}</h3>
                
                <div className="mb-4">
                  <div className="text-sm text-green-400 font-medium mb-1">Challenge</div>
                  <div className="text-kaki-grey text-sm">{study.challenge}</div>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm text-green-400 font-medium mb-1">Solution</div>
                  <div className="text-kaki-grey text-sm">{study.solution}</div>
                </div>
                
                <div>
                  <div className="text-sm text-green-400 font-medium mb-1">Result</div>
                  <div className="text-kaki-white font-bold">{study.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: '01', title: 'Research', description: 'Market and competitor analysis' },
              { step: '02', title: 'Strategy', description: 'Comprehensive marketing plan' },
              { step: '03', title: 'Execute', description: 'Campaign implementation' },
              { step: '04', title: 'Monitor', description: 'Real-time optimization' },
              { step: '05', title: 'Report', description: 'Performance analysis' }
            ].map((item, index) => (
              <div key={item.step} className={`text-center fade-in-on-scroll animation-delay-${index * 100}`}>
                <div className="w-16 h-16 bg-gradient-to-br from-green-900 to-teal-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-bold">{item.step}</span>
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-kaki-grey text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Marketing;
