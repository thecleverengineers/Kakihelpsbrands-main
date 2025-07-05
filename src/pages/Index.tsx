import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowDown, Play, Pause, Instagram, Youtube, Facebook, Twitter, Video, Code, Smartphone } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null); 
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false); // Video state

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
      description: 'Video production, photography, post-production',
      path: '/departments/studio',
      gradient: 'from-purple-600 via-purple-800 to-blue-900',
      icon: <Video className="w-8 h-8" />,
      stats: '200+ Videos',
      color: 'purple'
    },
    {
      name: 'KAKI Marketing',
      description: 'Digital marketing, strategy, media buying, influencer campaigns',
      path: '/departments/marketing',
      gradient: 'from-green-500 via-emerald-600 to-teal-700',
      icon: <Instagram className="w-8 h-8" />,
      stats: '5M+ Reach',
      color: 'green'
    },
    {
      name: 'KAKI Design',
      description: 'Graphic design, branding, packaging, UI/UX',
      path: '/departments/design',
      gradient: 'from-pink-500 via-red-600 to-orange-600',
      icon: '🎨',
      stats: '100+ Brands',
      color: 'pink'
    },
    {
      name: 'KAKI Tech',
      description: 'Web development, app development, software solutions, AR development',
      path: '/departments/tech',
      gradient: 'from-cyan-500 via-blue-600 to-indigo-700',
      icon: <Code className="w-8 h-8" />,
      stats: '50+ Apps',
      color: 'blue'
    }
  ];

  const socialLinks = [
    { icon: <Instagram className="w-6 h-6" />, url: 'https://www.instagram.com/kaki_marketing?utm_source=qr&igsh=MWc4anVnandhNmVnbQ==', label: 'Instagram' },
    { icon: <Youtube className="w-6 h-6" />, url: 'https://youtube.com/@kaki9139?si=hoHcVP9_i2cB5qoi', label: 'YouTube' },
    { icon: <Facebook className="w-6 h-6" />, url: 'https://www.facebook.com/share/1BmouaVZus/', label: 'Facebook' },
    { icon: <FaXTwitter className="w-6 h-6" />, url: 'https://x.com/KAKImarketing?t=84jvK1mWevGVP6_vOwlJBw&s=09', label: 'Twitter' },
  ];

  const handleVideoPlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused || video.ended) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            className="w-full h-full object-cover opacity-30"
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1920&q=80"
          >
            <source src="/video/kaki.mp4" type="video/mp4" />
          </video>
          {/* <div className="absolute inset-0 bg-gradient-to-br from-kaki-black/80 via-purple-900/30 to-kaki-black/80" /> */}
        </div>
        
        <div className="relative z-10 text-center container-custom pt-20 pb-20">
          <div className="animate-fade-in-up">
            <img 
              src="/logos/logo-no-bg.png" 
              alt="KAKI Logo" 
              className="h-32 lg:h-48 w-auto mx-auto mb-8 animate-logo-float drop-shadow-2xl"
            />
          </div>
          
          <h1 className="text-5xl lg:text-8xl font-bold mb-6 animate-fade-in-up animation-delay-200">
            <span className="text-gradient bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              We Build Brands
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-kaki-grey max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-400">
            KAKI delivers full-service digital marketing — strategy, content, and campaigns that engage, convert, and scale.
          </p>

          {/* Video Play Button */}
          <div className="mb-12 animate-fade-in-up animation-delay-500">
          <button
            onClick={handleVideoPlay}
            className="group inline-flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 text-white group-hover:text-purple-400 transition-colors" />
            ) : (
              <Play className="w-8 h-8 text-white group-hover:text-purple-400 transition-colors" />
            )}
          </button>
          <p className="text-sm text-kaki-grey mt-4">Watch Our Story</p>
        </div>

          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-600">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 px-8 py-6 text-lg">
              <Link to="/works">View Our Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white hover:text-black backdrop-blur-sm px-8 py-6 text-lg">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center gap-6 mt-12 animate-fade-in-up animation-delay-800">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <ArrowDown className="w-6 h-6 text-kaki-grey" />
        </div>
      </section>

      {/* Departments Section */}
      <section className="section-padding bg-gradient-to-b from-kaki-black via-kaki-dark-grey to-kaki-black">
        <div className="container-custom">
          <div className="text-center mb-20 fade-in-on-scroll">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Departments
            </h2>
            <p className="text-xl text-kaki-grey max-w-4xl mx-auto leading-relaxed">
              Four specialized departments that Drive Results & Real Connections through innovative video, design, and digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <Link
                key={dept.name}
                to={dept.path}
                className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${dept.gradient} p-8 lg:p-12 hover-lift fade-in-on-scroll transform transition-all duration-500 hover:scale-105`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="mr-4 p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                      {typeof dept.icon === 'string' ? (
                        <span className="text-2xl">{dept.icon}</span>
                      ) : (
                        dept.icon
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-white/80">{dept.stats}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-white group-hover:text-white/90 transition-colors">
                    {dept.name}
                  </h3>
                  <p className="text-white/80 text-lg group-hover:text-white transition-colors leading-relaxed">
                    {dept.description}
                  </p>

                  <div className="mt-8 flex items-center text-white font-medium group-hover:translate-x-2 transition-transform">
                    Explore Department
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 w-3 h-3 bg-white/50 rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ahibi Showcase Section */}
      <section className="section-padding bg-gradient-to-r from-red-900 via-red-700 to-orange-800">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">Our Platform</h2>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              Introducing Ahibi - Our revolutionary online ticket booking platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-on-scroll">
              <div className="bg-white p-8 rounded-3xl text-center mb-8">
                <img 
                  src="/lovable-uploads/e9d65bba-12b2-4f16-b50e-c7b41b4bdad4.png" 
                  alt="Ahibi Logo" 
                  className="h-16 mx-auto"
                />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Ahibi.in</h3>
              <p className="text-red-100 text-lg mb-8 leading-relaxed">
                A cutting-edge online ticket booking platform developed by KAKI Tech. Experience seamless event booking with our innovative digital solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-white text-red-900 hover:bg-red-50">
                  <a href="https://ahibi.in" target="_blank" rel="noopener noreferrer">
                    Visit Ahibi.in
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-red-900">
                  <Link to="/departments/tech">Learn More</Link>
                </Button>
              </div>
            </div>
            
            <div className="fade-in-on-scroll animation-delay-200">
              <div className="relative">
                <img 
                  src="./img/ahibi.png" 
                  alt="Ahibi Platform Preview" 
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 to-transparent rounded-3xl" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="section-padding bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">Our Impact</h2>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              Numbers that showcase our commitment to creative excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Brands Served', color: 'text-purple-300' },
              { number: '200+', label: 'Projects Completed', color: 'text-blue-300' },
              { number: '4+', label: 'Years Experience', color: 'text-indigo-300' },
              { number: '4', label: 'Departments', color: 'text-pink-300' }
            ].map((stat, index) => (
              <div key={stat.label} className={`text-center fade-in-on-scroll animation-delay-${index * 200} group`}>
                <div className={`text-4xl lg:text-6xl font-bold ${stat.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-white/80 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Works Preview */}
      <section className="section-padding bg-kaki-black">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">Recent Works</h2>
            <p className="text-xl text-kaki-grey max-w-2xl mx-auto">
              A glimpse into our latest creative achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Tech Startup Campaign',
                category: 'Marketing',
                image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80',
                gradient: 'from-green-500 to-teal-600'
              },
              {
                title: 'Fashion Brand Film',
                category: 'Studio',
                image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80',
                gradient: 'from-purple-500 to-blue-600'
              },
              {
                title: 'Ahibi Platform',
                category: 'Tech',
                image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=800&q=80',
                gradient: 'from-cyan-500 to-blue-600'
              }
            ].map((work, index) => (
              <div key={work.title} className={`group relative overflow-hidden rounded-2xl fade-in-on-scroll animation-delay-${index * 200} hover-lift`}>
                <div className="aspect-square bg-gradient-to-br from-kaki-dark-grey to-kaki-black">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-sm text-kaki-grey mb-2">{work.category}</div>
                    <h3 className="text-xl font-bold text-white">{work.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center fade-in-on-scroll">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 px-8">
              <Link to="/works">View All Works</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-kaki-black via-purple-900/50 to-kaki-black">
        <div className="container-custom text-center">
          <div className="fade-in-on-scroll">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Ready to grow your Brand?
            </h2>
            <p className="text-xl text-kaki-grey mb-12 max-w-3xl mx-auto leading-relaxed">
              Let’s turn your ideas into campaigns, content, and stories that move people, grow influence, and leave a mark.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 px-12 py-6 text-xl">
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
