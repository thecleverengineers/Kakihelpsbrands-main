
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import teamImg from '../assets/team/team.jpg';
import mission2 from '../assets/team/mission2.jpg';
import boss from '../assets/team/boss.jpg';
import arong from '../assets/team/design/arong.jpg';
import wako from '../assets/team/studio/wako.jpg';
import kc from '../assets/team/tech/kc.jpg';


const About = () => {
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

  const timeline = [
    {
      year: '2021',
      title: 'The Beginning',
      description: 'KAKI was born from a tiny studio with a mission: craft stories that connect, brands that matter, and culture that moves.',
      highlight: 'Founded'
    },
    {
      year: '2022',
      title: 'Foundations Built',
      description: 'We expanded into digital marketing, launched KAKI Studio for video production, and delivered campaigns that turned local brands into buzzworthy names.',
      highlight: '1M+ Views'
    },
    {
      year: '2023',
      title: 'Momentum Mode',
      description: 'KAKI scaled up. From managing state-wide campaigns to producing high-profile events with 5,000+ attendees, we proved ideas backed by execution create real impact.',
      highlight: '5K+ Footfall'
    },
    {
      year: '2024',
      title: 'Creative Force',
      description: 'With four powerhouse divisions — Strategy, Studio, Design, Tech and Events — we became the go-to agency for brands looking to blend storytelling with scale.',
      highlight: '4 Divisions'
    },
    {
      year: '2025 & Beyond',
      title: 'Culture x Creativity x Growth',
      description: 'We’re just getting started. From Nagaland to the world, KAKI continues to build brands that dare, disrupt, and deliver.',
      highlight: '50+ Clients'
    },
  ];

  const team = [
    {
      name: 'Kakivi',
      role: 'Founder / Managing Director',
      description: 'Leads the agency’s overall vision...',
      specialization: 'Brand Strategy & Creative Direction',
      image: boss
    },
    {
      name: 'Arong',
      role: 'Creative Director',
      description: 'Heads the creative process...',
      specialization: 'Video Production & Cinematography',
      image: arong
    },
    {
      name: 'Wako',
      role: 'Studio Director',
      description: 'Specializes in visual production...',
      specialization: 'Video Production & Cinematography',
      image: wako
    },
    {
      name: 'KC',
      role: 'Tech Director',
      description: 'Builds immersive digital experiences...',
      specialization: 'Brand Identity & UI/UX Design',
      image: kc
    }
  ];

  const values = [
    {
      title: 'Excellence',
      description: `We don’t  settle for “good enough.” Every campaign, design, and frame is crafted with sharp detail and a drive to exceed expectations, because results matter.`,
      icon: '✨',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Innovation',
      description: 'We move fast and think forward. From emerging tech to creative-first strategies, we stay ahead of trends to help our clients lead — not follow.',
      icon: '🚀',
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Collaboration',
      description: 'Great ideas don’t happen in silos. We build strong, transparent partnerships with our clients, working as one team to bring bold visions to life.',
      icon: '🤝',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Culture',
      description: 'We create more than content. We build cultural relevance. Our work is rooted in Nagaland identity and designed to spark meaningful conversations, online and offline.',
      icon: '🎨',
      color: 'from-pink-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-kaki-black via-purple-900/30 to-kaki-black">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              About KAKI
            </h1>
            <p className="text-xl lg:text-2xl text-kaki-grey max-w-4xl mx-auto leading-relaxed">
              We build brands through strategy, storytelling, and design that delivers real results.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-on-scroll">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-white">Who We Are</h2>
              <p className="text-kaki-grey text-xl mb-6 leading-relaxed">
                We’re not just a creative agency. We’re builders, brand architects, problem solvers — born in Nagaland, built to take bold ideas to the world.
                Founded in 2021, KAKI started as a lean crew with a big vision: to give Nagaland and Northeast India the digital firepower it deserves. Today, we’re a growing team of designers, strategists, developers, storytellers, and creators delivering full-stack marketing solutions across India and beyond.
              </p>
              <p className="text-kaki-grey text-xl mb-8 leading-relaxed">
                Whether you’re a startup, social movement, football league, or festival, we’re here to help you show up, stand out, and scale up.
              </p>
              <Button asChild className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700">
                <Link to="/contact">Work With Us</Link>
              </Button>
            </div>
            <div className="fade-in-on-scroll animation-delay-200">
              <div className="relative">
                <img 
                  src={teamImg}
                  alt="KAKI Team Collaboration" 
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent rounded-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Block */}
            <div className="fade-in-on-scroll order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-white">Our Mission</h2>
              <p className="text-kaki-grey text-xl mb-6 leading-relaxed">
                At KAKI, we believe in the power of creativity to shape culture and drive meaningful change. 
                Our mission is to craft exceptional experiences that resonate with audiences and leave lasting impressions.
              </p>
              <p className="text-kaki-grey text-xl mb-8 leading-relaxed">
                Through our four specialized departments, we offer comprehensive creative solutions that span 
                from initial concept to final execution, ensuring every project reflects our commitment to excellence and innovation.
              </p>
              <Button asChild className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700">
                <Link to="/contact">Work With Us</Link>
              </Button>
            </div>

            {/* Image Block */}
            <div className="fade-in-on-scroll animation-delay-200 order-2 lg:order-1">
              <div className="relative">
                <img 
                  src={mission2}  
                  alt="KAKI Team Collaboration" 
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent rounded-3xl" />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Timeline Section */}
      <section className="section-padding bg-gradient-to-b from-kaki-black to-kaki-dark-grey">
        <div className="container-custom">
          <div className="text-center mb-20 fade-in-on-scroll">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-white">Our Journey</h2>
            <p className="text-xl text-kaki-grey max-w-3xl mx-auto">
              From a small studio in Nagaland to a full-scale creative agency: here’s how KAKI evolved, one bold move at a time.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 hidden lg:block" />

            {timeline.map((item, index) => (
              <div key={item.year} className={`flex items-center mb-16 fade-in-on-scroll animation-delay-${index * 100}`}>
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:ml-auto'}`}>
                  <div className="bg-gradient-to-br from-kaki-dark-grey to-kaki-black p-8 rounded-3xl hover-lift border border-purple-500/20">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl font-bold text-purple-400">{item.year}</div>
                      <div className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm rounded-full">
                        {item.highlight}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                    <p className="text-kaki-grey leading-relaxed">{item.description}</p>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-kaki-black shadow-lg" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-20 fade-in-on-scroll">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-white">Meet Our Team</h2>
            <p className="text-xl text-kaki-grey max-w-3xl mx-auto">
              The creative minds behind KAKI's success, each bringing unique expertise and passion to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={member.name} className={`text-center group fade-in-on-scroll animation-delay-${index * 200}`}>
                <div className="relative mb-6 overflow-hidden rounded-3xl">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm">{member.specialization}</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
                <p className="text-purple-400 text-sm mb-3 font-medium">{member.role}</p>
                <p className="text-kaki-grey text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-to-br from-kaki-dark-grey to-kaki-black">
        <div className="container-custom">
          <div className="text-center mb-20 fade-in-on-scroll">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-white">Our Values</h2>
            <p className="text-xl text-kaki-grey max-w-3xl mx-auto">
              The principles that guide everything we do and drive us to create exceptional work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={value.title} className={`text-center p-8 bg-gradient-to-br ${value.color} rounded-3xl hover-lift fade-in-on-scroll animation-delay-${index * 200} group`}>
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{value.title}</h3>
                <p className="text-white/90 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-purple-900 via-pink-900 to-purple-900">
        <div className="container-custom text-center">
          <div className="fade-in-on-scroll">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-white">Join Our Journey</h2>
            <p className="text-xl text-purple-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Ready to be part of a team that's shaping the future of creative culture? 
              Let's create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-white text-purple-900 hover:bg-gray-100 px-8">
                <Link to="/contact">Work With Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-900 px-8">
                <a href="mailto:careers@kaki.design">Join Our Team</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
