
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Linkedin, Twitter,Instagram, Mail } from 'lucide-react';

const Team = () => {
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

  // Team members data
  const teamMembers = {
    leadership: [
      {
        name: 'Kakivi',
        role: 'Founder / Managing Director',
        image: './public/team/boss.png',
        social: {
          linkedin: 'https://linkedin.com/',
          instagram: 'https://twitter.com/',
          email: 'alex@kaki.design'
        }
      },
      {
        name: 'Arong',
        role: 'Creative Director',
        image: './public/team/design/arong.png',
        social: {
          linkedin: 'https://linkedin.com/',
          instagram: 'https://twitter.com/',
          email: 'jordan@kaki.design'
        }
      },
      {
        name: 'Wako',
        role: 'Studio Director',
        image: './public/team/studio/wako.png',
        social: {
          linkedin: 'https://linkedin.com/',
          instagram: 'https://twitter.com/',
          email: 'taylor@kaki.design'
        }
      },
      {
        name: 'KC',
        role: 'Tech Director',
        image: './public/team/tech/kc.png',
        social: {
          linkedin: 'https://linkedin.com/',
          instagram: 'https://twitter.com/',
          email: 'taylor@kaki.design'
        }
      }
    ],
    studio: [
      {
        name: 'Wako',
        role: 'Studio Director',
        image: '/public/team/studio/wako.png',
        social: {
          linkedin: 'https://linkedin.com/',
          email: 'morgan@kaki.design'
        }
      },
      {
        name: 'Along',
        role: 'Videographer',
        image: '/public/team/studio/along.png',
        social: {
          linkedin: 'https://linkedin.com/',
          email: 'morgan@kaki.design'
        }
      },
      {
        name: 'Mego',
        role: 'Videographer/Photographer',
        image: '/public/team/studio/mego.png',
        social: {
          linkedin: 'https://linkedin.com/',
          instagram: 'https://twitter.com/',
          email: 'jamie@kaki.design'
        }
      },
      {
        name: 'Akhro',
        role: 'Videoprapher/Photographer',
        image: 'public/team/studio/akhro.png',
        social: {
          linkedin: 'https://linkedin.com/',
          email: 'river@kaki.design'
        }
      },
      {
        name: 'Maya',
        role: 'Videoprapher/Photographer',
        image: 'public/team/studio/maya.png',
        social: {
          linkedin: 'https://linkedin.com/',
          email: 'river@kaki.design'
        }
      },
      {
        name: 'Amugha',
        role: 'Photographer',
        image: 'public/team/studio/amugha.png',
        social: {
          linkedin: 'https://linkedin.com/',
          email: 'river@kaki.design'
        }
      },
    ],
    marketing: [
      {
        name: 'Christy',
        role: 'HR (Human Resource)',
        image: 'public/team/marketing/christy.png',
        social: {
          linkedin: 'https://linkedin.com/',
          instagram: 'https://twitter.com/',
          email: 'casey@kaki.design'
        }
      },
      {
        name: 'Ajung',
        role: 'Social Media Manager',
        image: 'public/team/marketing/ajung.png',
        social: {
          linkedin: 'https://linkedin.com/',
          instagram: 'https://twitter.com/',
          email: 'casey@kaki.design'
        }
      },
      {
        name: 'Meren',
        role: 'Social Media Manager',
        image: 'public/team/marketing/meren.png',
        social: {
          linkedin: 'https://linkedin.com/',
          instagram: 'https://twitter.com/',
          email: 'casey@kaki.design'
        }
      },
      {
        name: 'Lepok',
        role: 'Digital Marketing Assistant',
        image: 'public/team/marketing/lepok.png',
        social: {
          linkedin: 'https://linkedin.com/',
          instagram: 'https://twitter.com/',
          email: 'casey@kaki.design'
        }
      },
      {
        name: 'Kuku',
        role: 'Social Media Coordinator',
        image: 'public/team/marketing/kuku.png',
        social: {
          linkedin: 'https://linkedin.com/',
          instagram: 'https://twitter.com/',
          email: 'casey@kaki.design'
        }
      },
      {
        name: 'Koko',
        role: 'BDE (Business Development Executive)',
        image: 'public/team/marketing/koko.png',
        social: {
          linkedin: 'https://linkedin.com/',
          instagram: 'https://twitter.com/',
          email: 'casey@kaki.design'
        }
      },
      {
        name: 'Ngamshing',
        role: 'Content Writer',
        image: 'public/team/marketing/ngamshing.png',
        social: {
          linkedin: 'https://linkedin.com/',
          instagram: 'https://twitter.com/',
          email: 'casey@kaki.design'
        }
      },
      {
        name: 'Akok',
        role: 'Support Manager',
        image: 'public/team/marketing/Akok.png',
        social: {
          linkedin: 'https://linkedin.com/',
          instagram: 'https://twitter.com/',
          email: 'casey@kaki.design'
        }
      },
      {
        name: 'Toika',
        role: 'Digital Marketing Executive',
        image: 'public/team/marketing/toika.png',
        social: {
          linkedin: 'https://linkedin.com/',
          instagram: 'https://twitter.com/',
          email: 'casey@kaki.design'
        }
      },
    ],
    design: [
      {
        name: 'Arong',
        role: 'Creative Director',
        image: './public/team/design/arong.png',
        social: {
          linkedin: 'https://linkedin.com/',
          email: 'quinn@kaki.design'
        }
      },
      {
        name: 'Sully',
        role: 'Graphic Designer',
        image: './public/team/design/sully.png',
        social: {
          linkedin: 'https://linkedin.com/',
          instagram: 'https://twitter.com/',
          email: 'riley@kaki.design'
        }
      },
      {
        name: 'Tono',
        role: 'Graphic Designer',
        image: './public/team/design/tono.png',
        social: {
          linkedin: 'https://linkedin.com/',
          instagram: 'https://twitter.com/',
          email: 'riley@kaki.design'
        }
      },
      {
        name: 'Sungti',
        role: 'Graphic Designer',
        image: './public/team/design/sungti.png',
        social: {
          linkedin: 'https://linkedin.com/',
          instagram: 'https://twitter.com/',
          email: 'riley@kaki.design'
        }
      }
    ],
    tech: [
      {
        name: 'KC',
        role: 'Tech Director',
        image: './public/team/tech/kc.png',
        social: {
          linkedin: 'https://linkedin.com/',
          instagram: 'https://twitter.com/',
          email: 'cameron@kaki.design'
        }
      },
      {
        name: 'Vinoto',
        role: 'Front-End Web Dev',
        image: './public/team/tech/vinoto.png',
        social: {
          linkedin: 'https://linkedin.com/',
          instagram: 'https://twitter.com/',
          email: 'jordan.m@kaki.design'
        }
      }
    ]
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-kaki-black via-purple-900/30 to-kaki-black">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Our Team
            </h1>
            <p className="text-xl lg:text-2xl text-kaki-grey max-w-4xl mx-auto leading-relaxed">
              A dynamic group of creatives, marketers, strategists, and technologists working together to build bold brands and deliver real results.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-12 fade-in-on-scroll">
            <Tabs defaultValue="leadership" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-kaki-dark-grey">
                  <TabsTrigger value="leadership">Leadership</TabsTrigger>
                  <TabsTrigger value="studio">Studio</TabsTrigger>
                  <TabsTrigger value="marketing">Marketing</TabsTrigger>
                  <TabsTrigger value="design">Design</TabsTrigger>
                  <TabsTrigger value="tech">Tech</TabsTrigger>
                </TabsList>
              </div>

              {Object.entries(teamMembers).map(([department, members]) => (
                <TabsContent key={department} value={department} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {members.map((member, index) => (
                      <div 
                        key={member.name} 
                        className="bg-kaki-dark-grey rounded-3xl overflow-hidden hover-lift fade-in-on-scroll group"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="aspect-[4/5] overflow-hidden">
                          <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                          <p className="text-purple-300 mb-4">{member.role}</p>

                          <div className="flex gap-4">
                            {member.social.linkedin && (
                              <a 
                                href={member.social.linkedin} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-2 bg-kaki-black/50 rounded-full hover:bg-purple-600/50 transition-colors"
                              >
                                <Linkedin className="w-5 h-5" />
                              </a>
                            )}
                            {member.social.instagram && (
                              <a 
                                href={member.social.instagram} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-2 bg-kaki-black/50 rounded-full hover:bg-blue-500/50 transition-colors"
                              >
                                <Instagram className="w-5 h-5" />
                              </a>
                            )}
                            {member.social.email && (
                              <a 
                                href={`mailto:${member.social.email}`}
                                className="p-2 bg-kaki-black/50 rounded-full hover:bg-green-600/50 transition-colors"
                              >
                                <Mail className="w-5 h-5" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-b from-kaki-black to-purple-950/40">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '45+', label: 'Tech Professionals' },
              { number: '8', label: 'Years of Excellence' },
              { number: '200+', label: 'Projects Completed' },
              { number: '15', label: 'Industry Awards' }
            ].map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center p-8 bg-kaki-dark-grey rounded-3xl fade-in-on-scroll hover-lift"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent mb-3">
                  {stat.number}
                </div>
                <p className="text-kaki-grey text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-3xl p-8 lg:p-16 text-center relative overflow-hidden fade-in-on-scroll">
            <div className="absolute inset-0 particles opacity-30"></div>
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">Join Our Tech Family</h2>
              <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
                We're always on the lookout for passionate, talented individuals to join our growing team.
                Think you have what it takes to help us build the future?
              </p>
              <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100 px-10 py-6 text-lg">
                View Open Positions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-kaki-dark-grey">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-kaki-grey max-w-3xl mx-auto text-lg">
              These core principles guide our work, shape our culture, and define who we are as a tech family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Innovation First', 
                description: 'We embrace cutting-edge technologies and aren\'t afraid to push boundaries to achieve extraordinary results.',
                icon: '🚀',
                color: 'from-purple-600 to-blue-600'
              },
              { 
                title: 'Collaborative Spirit', 
                description: 'We believe great ideas can come from anywhere, and our best work happens when diverse minds unite.',
                icon: '🤝',
                color: 'from-pink-600 to-purple-600'
              },
              { 
                title: 'Quality Excellence', 
                description: 'Everything we create is built with precision, scalability, and user experience in mind.',
                icon: '⭐',
                color: 'from-orange-600 to-pink-600'
              }
            ].map((value, index) => (
              <div 
                key={value.title} 
                className={`p-8 bg-gradient-to-br ${value.color} rounded-3xl fade-in-on-scroll hover-lift`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-white/90">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
