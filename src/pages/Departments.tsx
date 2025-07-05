
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Departments = () => {
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

  const departments = [
    {
      name: 'KAKI Studio',
      subtitle: 'Visual Storytelling',
      description: 'Comprehensive video production, photography, and post-production services that bring your vision to life.',
      services: ['Video Production', 'Photography', 'Post-Production', 'Motion Graphics'],
      path: '/departments/studio',
      color: 'from-purple-900 to-blue-900'
    },
    {
      name: 'KAKI Marketing',
      subtitle: 'Digital Excellence',
      description: 'Strategic digital marketing, media buying, and influencer campaigns that drive measurable results.',
      services: ['Digital Strategy', 'Media Buying', 'Influencer Marketing', 'Analytics'],
      path: '/departments/marketing',
      color: 'from-green-900 to-teal-900'
    },
    {
      name: 'KAKI Design',
      subtitle: 'Creative Innovation',
      description: 'Exceptional graphic design, branding, packaging, and UI/UX that creates lasting impressions.',
      services: ['Brand Identity', 'Packaging Design', 'UI/UX Design', 'Print Design'],
      path: '/departments/design',
      color: 'from-red-900 to-pink-900'
    },
    {
      name: 'KAKI Tech',
      subtitle: 'Digital Innovation',
      description: 'Cutting-edge web development, app development, software solutions, and AR development services.',
      services: ['Web Development', 'App Development', 'Software Solutions', 'AR Development'],
      path: '/departments/tech',
      color: 'from-cyan-900 to-blue-900'
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Departments</h1>
            <p className="text-lg lg:text-xl text-kaki-grey max-w-3xl mx-auto">
              Four specialized departments working in perfect harmony to deliver comprehensive creative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <Link
                key={dept.name}
                to={dept.path}
                className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${dept.color} p-8 lg:p-12 hover-lift fade-in-on-scroll min-h-[400px] flex flex-col justify-between`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div>
                  <div className="text-sm font-medium text-kaki-grey mb-2 group-hover:text-kaki-white transition-colors">
                    {dept.subtitle}
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6 group-hover:text-kaki-white transition-colors">
                    {dept.name}
                  </h2>
                  <p className="text-kaki-grey text-lg mb-8 group-hover:text-kaki-white transition-colors">
                    {dept.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {dept.services.map((service) => (
                      <span
                        key={service}
                        className="px-3 py-1 bg-kaki-white/10 text-kaki-white text-sm rounded-full backdrop-blur-sm group-hover:bg-kaki-white/20 transition-colors"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-kaki-white font-medium group-hover:translate-x-2 transition-transform">
                    Explore Department
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                <div className="absolute inset-0 bg-kaki-white opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-kaki-dark-grey">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Process</h2>
            <p className="text-lg text-kaki-grey max-w-2xl mx-auto">
              How we work across all departments to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your vision and requirements' },
              { step: '02', title: 'Strategy', description: 'Developing comprehensive creative strategies' },
              { step: '03', title: 'Execution', description: 'Bringing ideas to life with precision' },
              { step: '04', title: 'Delivery', description: 'Ensuring excellence in final deliverables' }
            ].map((item, index) => (
              <div key={item.step} className={`text-center fade-in-on-scroll animation-delay-${index * 200}`}>
                <div className="text-4xl font-bold text-kaki-grey mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-kaki-grey">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Departments;
