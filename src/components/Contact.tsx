import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, User } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "maviaqaiser09@gmail.com",
      description: "Primary communication channel",
      color: "text-cyan-400",
      bgColor: "bg-cyan-400/10",
      borderColor: "border-cyan-400/30",
      link: "mailto:maviaqaiser09@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "(+92)-336-2715578",
      description: "Available for calls",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      borderColor: "border-green-400/30",
      link: "tel:+923362715578"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      content: "Lahore, Pakistan",
      description: "Available for remote work",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      borderColor: "border-purple-400/30"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Response Time",
      content: "Within 24 hours",
      description: "Quick response guaranteed",
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
      borderColor: "border-yellow-400/30"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/maawiah-qaiser-10793722b/",
      icon: <Linkedin className="w-6 h-6" />,
      color: "text-blue-400",
      hoverColor: "hover:text-blue-300",
      bgColor: "bg-blue-400/10",
      borderColor: "border-blue-400/30"
    },
    {
      name: "GitHub",
      url: "#",
      icon: <Github className="w-6 h-6" />,
      color: "text-gray-400",
      hoverColor: "hover:text-gray-300",
      bgColor: "bg-gray-400/10",
      borderColor: "border-gray-400/30"
    },
    {
      name: "Email",
      url: "mailto:maviaqaiser09@gmail.com",
      icon: <Mail className="w-6 h-6" />,
      color: "text-cyan-400",
      hoverColor: "hover:text-cyan-300",
      bgColor: "bg-cyan-400/10",
      borderColor: "border-cyan-400/30"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Cyberpunk Section Header */}
          <div className="text-center mb-16 relative">
            <div className="inline-block relative">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 relative">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
                  CONNECT.PROTOCOL
                </span>
                {/* Glitch Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent opacity-20 transform translate-x-1">
                  CONNECT.PROTOCOL
                </div>
              </h2>
            </div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-6">
              Ready to discuss backend opportunities, collaborations, or innovative projects? 
              Let's connect and build the future together.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className={`group ${info.bgColor} backdrop-blur-sm rounded-2xl p-6 border ${info.borderColor} hover:scale-105 transition-all duration-300 hover:shadow-lg`}
                  >
                    {info.link ? (
                      <a href={info.link} className="block">
                        <div className="flex items-start gap-4">
                          <div className={`${info.color} mt-1 group-hover:scale-110 transition-transform duration-300`}>
                            {info.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-white mb-1">{info.title}</h3>
                            <p className={`text-base ${info.color} mb-1`}>{info.content}</p>
                            <p className="text-gray-400 text-sm">{info.description}</p>
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4">
                        <div className={`${info.color} mt-1 group-hover:scale-110 transition-transform duration-300`}>
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white mb-1">{info.title}</h3>
                          <p className={`text-base ${info.color} mb-1`}>{info.content}</p>
                          <p className="text-gray-400 text-sm">{info.description}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <User className="text-cyan-400" size={24} />
                  SOCIAL.NETWORK
                </h3>
                <div className="flex gap-4 mb-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group p-4 ${social.bgColor} backdrop-blur-sm rounded-xl border ${social.borderColor} ${social.color} ${social.hoverColor} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Connect with me on social platforms for updates on my latest projects, 
                  tech insights, and professional journey in backend development.
                </p>
              </div>

              {/* Availability Status */}
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                  <h3 className="text-xl font-bold text-white">STATUS: AVAILABLE</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Currently seeking backend development opportunities, internships, or exciting projects. 
                  Whether you're a recruiter, fellow developer, or have an innovative idea, let's collaborate!
                </p>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden">
              {/* Form Header */}
              <div className="bg-gray-800/50 px-8 py-4 border-b border-gray-700/50">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-cyan-400 text-sm ml-2 font-mono">~/contact/message.form</span>
                </div>
              </div>

              {/* Form Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">SEND.MESSAGE</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 resize-vertical"
                      placeholder="Tell me about your project, opportunity, or just say hello!"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        TRANSMITTING...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        SEND.MESSAGE
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-20 pt-8 border-t border-gray-700/50 text-center">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <p className="text-gray-400 mb-2">
                <span className="text-cyan-400 font-mono">~/portfolio/footer.txt</span>
              </p>
              <p className="text-gray-300">
                Built with 💻 by <span className="text-cyan-400 font-semibold">Maawiah Qaiser</span> • © 2024 • 
                <span className="text-purple-400"> Aspiring Backend Engineer</span>
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Crafting scalable solutions for tomorrow's digital infrastructure
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;