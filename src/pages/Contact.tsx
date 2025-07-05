import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Clock, Instagram, Youtube, Facebook } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    department: '',
    message: '',
    budget: '',
    timeline: ''
  });
  const { toast } = useToast();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent! 🚀",
      description: "Thank you for reaching out. Our team will get back to you within 24 hours with creative ideas!",
    });
    setFormData({
      name: '',
      email: '',
      company: '',
      department: '',
      message: '',
      budget: '',
      timeline: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const departments = [
    { name: 'KAKI Studio', focus: 'Video, Photography, Post-Production', icon: '🎬', color: 'from-purple-500 to-blue-600' },
    { name: 'KAKI Marketing', focus: 'Digital Strategy, Media Buying, Influencer Campaigns', icon: '📱', color: 'from-green-500 to-teal-600' },
    { name: 'KAKI Design', focus: 'Brand Identity, UI/UX, Packaging Design', icon: '🎨', color: 'from-pink-500 to-red-600' },
    { name: 'KAKI Tech', focus: 'Web Development, App Development, Software Solutions, AR Development', icon: '💻', color: 'from-yellow-500 to-orange-600' }
  ];

  const contactInfo = [
    {
      title: 'General Inquiries',
      email: 'hello@kaki.design',
      description: 'For general questions and collaboration opportunities',
      icon: <Mail className="w-6 h-6" />,
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'New Business',
      email: 'business@kaki.design',
      description: 'Ready to start a project? Let\'s discuss your vision',
      icon: <Phone className="w-6 h-6" />,
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'Careers',
      email: 'careers@kaki.design',
      description: 'Join our creative team and craft culture with us',
      icon: <MapPin className="w-6 h-6" />,
      color: 'from-pink-500 to-red-600'
    }
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, url: 'https://instagram.com/kaki.design', label: 'Instagram', followers: '5K+' },
    { icon: <Youtube className="w-5 h-5" />, url: 'https://youtube.com/@kaki9139?si=hoHcVP9_i2cB5qoi', label: 'YouTube', followers: '22K+' },
    { icon: <Facebook className="w-5 h-5" />, url: 'https://facebook.com/kaki.design', label: 'Facebook', followers: '590+' },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-kaki-black via-purple-900/30 to-kaki-black">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl lg:text-2xl text-kaki-grey max-w-4xl mx-auto leading-relaxed">
              Ready to craft culture together? Let's discuss how we can bring your vision to life and create something extraordinary that resonates with your audience.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-16">
            {/* Contact Form */}
            <div className="xl:col-span-2 fade-in-on-scroll">
              <div className="bg-gradient-to-br from-kaki-dark-grey to-kaki-black p-8 lg:p-12 rounded-3xl border border-purple-500/20">
                <h2 className="text-3xl font-bold mb-8 text-white">Start Your Project</h2>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-3 text-white">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-kaki-black/50 border border-purple-500/30 rounded-2xl focus:outline-none focus:border-purple-400 transition-colors text-white placeholder-gray-400"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-3 text-white">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-kaki-black/50 border border-purple-500/30 rounded-2xl focus:outline-none focus:border-purple-400 transition-colors text-white placeholder-gray-400"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-3 text-white">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-kaki-black/50 border border-purple-500/30 rounded-2xl focus:outline-none focus:border-purple-400 transition-colors text-white placeholder-gray-400"
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="department" className="block text-sm font-medium mb-3 text-white">
                        Department of Interest
                      </label>
                      <select
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-kaki-black/50 border border-purple-500/30 rounded-2xl focus:outline-none focus:border-purple-400 transition-colors text-white"
                      >
                        <option value="">Select a department</option>
                        <option value="studio">KAKI Studio</option>
                        <option value="marketing">KAKI Marketing</option>
                        <option value="design">KAKI Design</option>
                        <option value="tech">KAKI Tech</option>
                        <option value="multiple">Multiple Departments</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium mb-3 text-white">
                        Project Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-kaki-black/50 border border-purple-500/30 rounded-2xl focus:outline-none focus:border-purple-400 transition-colors text-white"
                      >
                        <option value="">Select budget range</option>
                        <option value="10k-25k">$10K - $25K</option>
                        <option value="25k-50k">$25K - $50K</option>
                        <option value="50k-100k">$50K - $100K</option>
                        <option value="100k+">$100K+</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium mb-3 text-white">
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-kaki-black/50 border border-purple-500/30 rounded-2xl focus:outline-none focus:border-purple-400 transition-colors text-white"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-3months">1-3 Months</option>
                        <option value="3-6months">3-6 Months</option>
                        <option value="6months+">6+ Months</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-3 text-white">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-6 py-4 bg-kaki-black/50 border border-purple-500/30 rounded-2xl focus:outline-none focus:border-purple-400 transition-colors resize-none text-white placeholder-gray-400"
                      placeholder="Tell us about your project, goals, and vision. What story do you want to tell?"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 py-6 md:text-lg"
                  >
                    Send Message & Start Creating
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="fade-in-on-scroll animation-delay-200">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold mb-8 text-white">Let's Connect</h2>
                
                {contactInfo.map((info) => (
                  <div key={info.title} className={`p-6 bg-gradient-to-r ${info.color} rounded-2xl hover-lift`}>
                    <div className="flex items-center mb-3">
                      <div className="mr-3 text-white">
                        {info.icon}
                      </div>
                      <h3 className="font-bold text-white">{info.title}</h3>
                    </div>
                    <a 
                      href={`mailto:${info.email}`}
                      className="text-white hover:text-white/80 transition-colors block mb-2 font-medium"
                    >
                      {info.email}
                    </a>
                    <p className="text-white/80 text-sm">{info.description}</p>
                  </div>
                ))}

                {/* Office Hours */}
                <div className="p-6 bg-kaki-dark-grey rounded-2xl border border-purple-500/20">
                  <div className="flex items-center mb-3">
                    <Clock className="w-6 h-6 mr-3 text-purple-400" />
                    <h3 className="font-bold text-white">Office Hours</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-kaki-grey">Mon - Sat</span>
                      <span className="text-white">10:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-kaki-grey">Sunday</span>
                      <span className="text-white">Closed</span>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="p-6 bg-kaki-dark-grey rounded-2xl border border-purple-500/20">
                  <h3 className="font-bold text-white mb-6">Follow Our Journey</h3>
                  <div className="space-y-4">
                    {socialLinks.map((social) => (
                      <a 
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 bg-kaki-black/50 rounded-xl hover:bg-kaki-black/80 transition-colors group"
                      >
                        <div className="flex items-center">
                          <div className="mr-3 text-purple-400 group-hover:text-white transition-colors">
                            {social.icon}
                          </div>
                          <span className="text-white">{social.label}</span>
                        </div>
                        <span className="text-kaki-grey text-sm">{social.followers}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Overview */}
      <section className=" bg-gradient-to-b from-kaki-black to-kaki-dark-grey">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-white">Choose Your Department</h2>
            <p className="text-xl text-kaki-grey max-w-3xl mx-auto">
              Not sure which department fits your needs? Here's a quick overview of our specialties to help you get started.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div key={dept.name} className={`p-8 bg-gradient-to-br ${dept.color} rounded-3xl hover-lift fade-in-on-scroll animation-delay-${index * 100} group`}>
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    {dept.icon}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{dept.name}</h3>
                </div>
                <p className="text-white/90 text-lg leading-relaxed">{dept.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="fade-in-on-scroll">
            <div className="bg-gradient-to-br from-kaki-dark-grey to-kaki-black rounded-3xl p-8 lg:p-12 text-center border border-purple-500/20">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Visit Our Studio</h3>
              <p className="text-kaki-grey mb-4 text-lg">Creative District<br />Downtown Los Angeles, CA</p>
              <p className="text-sm text-kaki-grey mb-8">
                Come visit our creative space where culture is crafted daily. 
                Schedule a tour to see our studios, meet the team, and get inspired.
              </p>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700">
                Schedule a Visit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring CTA */}
      <section className="section-padding bg-gradient-to-r from-purple-900 via-pink-900 to-purple-900">
        <div className="container-custom text-center">
          <div className="fade-in-on-scroll">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-white">Join Our Creative Family</h2>
            <p className="text-xl text-purple-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              We're always looking for passionate creatives, strategists, and innovators to join our growing team. 
              Ready to craft culture and shape the future with us?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { role: 'Creative Director', department: 'Studio' },
                { role: 'Digital Strategist', department: 'Marketing' },
                { role: 'Senior Designer', department: 'Design' }
              ].map((job) => (
                <div key={job.role} className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                  <h3 className="font-bold text-white mb-2">{job.role}</h3>
                  <p className="text-purple-200 text-sm">{job.department}</p>
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="bg-white text-purple-900 hover:bg-gray-100 px-8">
              <a href="mailto:careers@kaki.design">View Open Positions</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
