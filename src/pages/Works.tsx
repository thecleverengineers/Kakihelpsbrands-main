import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import projects from '@/data/projects';
import { Link } from 'react-router-dom';

const Works = () => {
  const [filter, setFilter] = useState('All');

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

  const categories = ['All', 'Studio', 'Marketing', 'Design', 'Tech', 'Case Study'];
  const [openVideo, setOpenVideo] = useState(null); 
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter);
  const openProject = projects.find(p => p.id === openVideo);

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-kaki-black via-purple-900/30 to-kaki-black">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Our Works
            </h1>
            <p className="text-xl lg:text-2xl text-kaki-grey max-w-4xl mx-auto leading-relaxed">
              A showcase of creative excellence across video production, marketing campaigns, design solutions, and cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-kaki-dark-grey">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 fade-in-on-scroll">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setFilter(category)}
                variant={filter === category ? "default" : "outline"}
                className={`px-6 py-3 ${
                  filter === category 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                    : 'border-kaki-grey text-kaki-grey hover:bg-purple-600 hover:text-white'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const cardContent = (
                <div className={`group relative overflow-hidden rounded-3xl bg-kaki-dark-grey hover-lift fade-in-on-scroll animation-delay-${index * 100}`}>
                  <div className="aspect-video relative overflow-hidden">
                    {project.video ? (
                      <video
                        src={project.video}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        controls
                        muted
                        playsInline
                        preload="metadata"
                      />
                    ) : (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    )}

                    {/* External Link for Tech projects */}
                    {project.link && (
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-white/20 backdrop-blur-md rounded-full p-2 hover:bg-white/30 transition-colors"
                        >
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                        project.category === 'Studio' ? 'bg-purple-500/20 text-purple-400' :
                        project.category === 'Marketing' ? 'bg-green-500/20 text-green-400' :
                        project.category === 'Design' ? 'bg-pink-500/20 text-pink-400' :
                        'bg-cyan-500/20 text-cyan-400'
                      }`}>
                        {project.category}
                      </span>
                      <span className="text-xs text-kaki-grey">{project.year}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    
                    <div className="mb-4">
                      <p className="text-kaki-grey text-sm leading-relaxed transition-all duration-200">
                        {expanded[project.id]
                          ? project.description
                          : project.description.length > 110
                            ? project.description.slice(0, 110) + "..."
                            : project.description}
                      </p>
                      {project.description.length > 110 && (
                        <button
                          onClick={() => toggleExpand(project.id)}
                          className="mt-1 text-purple-400 hover:underline text-xs font-semibold focus:outline-none"
                          type="button"
                        >
                          {expanded[project.id] ? 'Show Less' : 'Read More'}
                        </button>
                      )}
                    </div>
                    
                    <div className="text-xs text-kaki-grey">
                      Client: {project.client}
                    </div>
                  </div>
                </div>
              );

              // If the project is a Case Study, make the whole card a link
              return project.category === 'Case Study' ? (
                <Link
                  key={project.id}
                  to={`/case-studies/${project.id}`}
                  style={{ textDecoration: 'none' }}
                >
                  {cardContent}
                </Link>
              ) : (
                <div key={project.id}>
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {openVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={() => setOpenVideo(null)} // Click outside to close
        >
          <div
            className="relative bg-black rounded-2xl p-4 shadow-lg"
            onClick={e => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={() => setOpenVideo(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <video
              src={openProject?.video}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              controls
              muted
              playsInline
              preload="metadata"
            />
            <div className="mt-4 text-white text-center text-lg font-semibold">
              {openProject?.title}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-purple-900 via-pink-900 to-purple-900">
        <div className="container-custom text-center">
          <div className="fade-in-on-scroll">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-white">Ready to Create Something Amazing?</h2>
            <p className="text-xl text-purple-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Whether you need video production, marketing campaigns, design solutions, or cutting-edge technology, we're here to bring your vision to life.
            </p>
            <Button asChild size="lg" className="bg-white text-purple-900 hover:bg-gray-100 px-12 py-6 text-xl">
              <a href="/contact">Start Your Project</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Works;
